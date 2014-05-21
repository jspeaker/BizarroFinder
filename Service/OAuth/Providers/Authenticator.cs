using System;
using System.Collections.Generic;
using System.IO;
using System.Net.Http;
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

        public Token Authenticate()
        {
            try
            {
                var clientId = string.Empty;
                var clientSecret = string.Empty;
                var file = new StreamReader(Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "App_Data", "auth.txt"));
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

                var request = new List<KeyValuePair<string, string>>
                {
                    new KeyValuePair<string, string>("client_id", clientId),
                    new KeyValuePair<string, string>("client_secret", clientSecret),
                    new KeyValuePair<string, string>("grant_type", "client_credentials")
                };

                var uri =
                    new Uri(
                        "https://connect.gettyimages.com/oauth2/token/?client_id=sc3njmvqbuzzdzdcd869mmwj&client_secret=3Dmzjgk8pZfu7mbW5BGZDYE3VKawYESzxDJHSjfx4gHvQ&grant_type=client_credentials");
                var httpClient = _httpClientFactory.Create("connect-oauth", new Uri(uri.Scheme + "://" + uri.Host));
                httpClient.BaseAddress = new Uri("https://connect.gettyimages.com");
                var content =
                    httpClient.PostAsync(uri, new FormUrlEncodedContent(request))
                        .Result.Content.ReadAsStringAsync()
                        .Result;
                return JsonConvert.DeserializeObject<Token>(content);
            }
            catch (Exception)
            {
                return null;
            }
        }
    }

    public class Request
    {
        // ReSharper disable InconsistentNaming
        public string client_id { get; set; }
        public string client_secret { get; set; }
        public string grant_type { get; set; }
        // ReSharper restore InconsistentNaming
    }
}