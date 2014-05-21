using System;
using System.Collections.Generic;
using System.Net.Http;

namespace OAuth.Providers
{
    public class HttpClientFactory : IHttpClientFactory, IDisposable
    {
        private readonly Dictionary<string, HttpClient> _clients = new Dictionary<string, HttpClient>();

        public HttpClient Create(string serviceName, Uri baseUri)
        {
            if (_clients.ContainsKey(serviceName))
            {
                return _clients[serviceName];
            }

            var client = new HttpClient { BaseAddress = baseUri };
            _clients.Add(serviceName, client);
            return client;
        }

        public void Dispose()
        {
            foreach (var httpClient in _clients)
            {
                httpClient.Value.Dispose();
            }
            _clients.Clear();
        }
    }

    public interface IHttpClientFactory
    {
        HttpClient Create(string serviceName, Uri baseUri);
    }
}