BizarroFinder
=============

Getty Images Connect API Sample Code

BizarroFinder is organized into two projects:
  1. "Web" contains HTML, JavaScript, CSS and Images for the main application. It is only in a Visual Studio project for organizational purposes - there is no dependency on Visual Studio.
  2. "OAuth" is a simple WebAPI service written in .NET. Its sole purpose is to proxy authentication requests to the OAuth2 endpoint. Since the test API key and secret require the use of the ClientCredentials flow, the key and secret must be provided and kept secret.
