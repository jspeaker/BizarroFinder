using System.Web.Http;
using OAuth.Domain;
using OAuth.Providers;

namespace OAuth.Controllers
{
    public class OAuthController : ApiController
    {
        private readonly Authenticator _authenticator;

        public OAuthController(Authenticator authenticator)
        {
            _authenticator = authenticator;
        }

        // GET api/OAuth
        public Response Get()
        {
            return _authenticator.Authenticate();
        }
    }
}