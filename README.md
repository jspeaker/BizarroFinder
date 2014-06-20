BizarroFinder
=============

**Getty Images Connect API Sample Code**

http://bizarrofinder.iontech.org/

*Note that the above URL does not have an SSL certificate, so this sample will not function in Internet Explorer which would require SSL on the main URL to match the SSL protocol being used in the Ajax calls to the Connect API.*

BizarroFinder is organized into two projects:
 1. "Web" contains HTML, JavaScript, CSS and Images for the main application. It is only in a Visual Studio project for organizational purposes - there is no dependency on Visual Studio.
 2. "OAuth" is a simple WebAPI service written in .NET. Its sole purpose is to proxy authentication requests to the OAuth2 endpoint. Since the test API key and secret require the use of the ClientCredentials flow, the key and secret must be provided and kept secret.

Workflow:
 1. Authenticate. The OAuth service is called to acquire an access_token from the Connect oAuth2 endpoint. This call is made via Ajax, and it is noteable that CORS is supported by the OAuth service to accomodate this call.
 2. Search. SearchForImages is called via Ajax (CORS supported) on the Connect API. The SearchPhrase property is set to the value in the text input of the UI plus the keyword "bizarre".
 3. Embed. When the "Embed It!" link is clicked, an Ajax request is made to the Connect API oEmbed endpoint. The result of this call is used to format the Embed HTML code in the resulting dialog.
