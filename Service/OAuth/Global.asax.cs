using System.Web.Http;
using Autofac;
using Autofac.Integration.WebApi;

namespace OAuth
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            WebApiConfig.Register(GlobalConfiguration.Configuration);

            var builder = new ContainerBuilder();
            IocRegistrar.Instance().Register(builder);
            var container = builder.Build();
            GlobalConfiguration.Configuration.DependencyResolver = new AutofacWebApiDependencyResolver(container);
        }
    }
}