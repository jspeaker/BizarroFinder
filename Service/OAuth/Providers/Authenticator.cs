using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using Newtonsoft.Json;
using OAuth.Domain;

namespace OAuth.Providers
{
    public class Authenticator
    {
        private readonly IHttpClientFactory _httpClientFactory;

        public Authenticator(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        public Response Authenticate()
        {
            try
            {
                const string baseAddress = "https://connect.gettyimages.com";
                using (var httpClient = _httpClientFactory.Create("connect-oauth", new Uri(baseAddress)))
                {
                    var response = httpClient
                        .PostAsync(
                        new Uri(string.Format("{0}/oauth2/token/", baseAddress)),
                        new FormUrlEncodedContent(Request())).Result;

                    if (!response.IsSuccessStatusCode)
                    {
                        throw new HttpException(
                            (int)response.StatusCode,
                            string.Format("{0} {1}",
                            response.StatusCode,
                            response.Headers.GetValues("X-Mashery-Error-Code").FirstOrDefault()));
                    }

                    var token = JsonConvert.DeserializeObject<Response>(response.Content.ReadAsStringAsync().Result);
                    token.status = (int)response.StatusCode;
                    token.reason = response.ReasonPhrase;
                    return token;
                }
            }
            catch (HttpException ex)
            {
                return new Response
                {
                    status = ex.GetHttpCode(),
                    reason = ex.Message
                };
            }
            catch (Exception ex)
            {
                return new Response
                {
                    status = (int)HttpStatusCode.InternalServerError,
                    reason = ex.Message
                };
            }
        }

        private static IEnumerable<KeyValuePair<string, string>> Request()
        {
            var clientId = string.Empty;
            var clientSecret = string.Empty;

            using (var file = new StreamReader(Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "App_Data", "auth.txt")))
            {
                string line;
                while ((line = file.ReadLine()) != null)
                {
                    if (line.StartsWith("client_id"))
                    {
                        clientId = line.Split('=')[1];
                    }

                    if (line.StartsWith("client_secret"))
                    {
                        clientSecret = line.Split('=')[1];
                    }
                }
            }

            return new List<KeyValuePair<string, string>>
                {
                    new KeyValuePair<string, string>("client_id", clientId),
                    new KeyValuePair<string, string>("client_secret", clientSecret),
                    new KeyValuePair<string, string>("grant_type", "client_credentials")
                };
        }
    }
}