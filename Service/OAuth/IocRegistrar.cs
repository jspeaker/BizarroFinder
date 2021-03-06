﻿using System.Reflection;
using Autofac;
using Autofac.Integration.WebApi;
using OAuth.Providers;

namespace OAuth
{
    public class IocRegistrar
    {
        private static volatile IocRegistrar _iocRegistrar;
        private static readonly object SyncRoot = new object();

        public static IocRegistrar Instance()
        {
            if (_iocRegistrar != null) return _iocRegistrar;
            lock (SyncRoot)
            {
                if (_iocRegistrar == null)
                    _iocRegistrar = new IocRegistrar();
            }

            return _iocRegistrar;
        }

        private IocRegistrar() { }

        public void Register(ContainerBuilder builder)
        {
            builder.RegisterApiControllers(Assembly.GetExecutingAssembly());
            RegisterProviders(builder);
        }

        private static void RegisterProviders(ContainerBuilder builder)
        {
            builder.RegisterType<HttpClientFactory>().As<IHttpClientFactory>();
            builder.RegisterType<Authenticator>();
        }
    }
}