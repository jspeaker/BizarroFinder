BizarroFinder.BaseUri = "connect.gettyimages.com";

BizarroFinder.baseAuthUri = function() {
  var authBaseUris = ["auth.bizarrofinder.iontech.org", "local.auth.bizarrofinder.iontech.org"];
  return document.location.host.indexOf("local.") === -1 ? authBaseUris[0] : authBaseUris[1];
};

BizarroFinder.Operation = {
  OAuthProxy: {
    protocol: "http",
    operation: "oauth",
    route: "/api/",
  },
  Token: {
    protocol: "https",
    operation: "token",
    route: "/oauth2/",
  },
  CreateApplicationSession: {
    protocol: "https",
    operation: "CreateApplicationSession",
    route: "/v1/session/",
  },
  CreateSession: {
    protocol: "https",
    operation: "CreateSession",
    route: "/v1/session/",
  },
  RenewSession: {
    protocol: "https",
    operation: "RenewSession",
    route: "/v1/session/",
  },
  SearchForImages2: {
    protocol: "https",
    operation: "SearchForImages",
    route: "/v1/search/",
  },
  SearchForImages3: {
    protocol: "https",
    operation: "SearchForImages",
    route: "/v2/search/",
  },
  SearchForVideos: {
    protocol: "https",
    operation: "SearchForVideos",
    route: "/v1/search/",
  },
  GetImageDetails: {
    protocol: "https",
    operation: "GetImageDetails",
    route: "/v1/search/",
  },
  GetImageDownloadAuthorizations: {
    protocol: "https",
    operation: "GetImageDownloadAuthorizations",
    route: "/v1/download/",
  },
  GetLargestImageDownloadAuthorizations: {
    protocol: "https",
    operation: "GetLargestImageDownloadAuthorizations",
    route: "/v1/download/",
  },
  CreateDownloadRequest: {
    protocol: "https",
    operation: "CreateDownloadRequest",
    route: "/v1/download/",
  },
  CreateLightbox: {
    protocol: "https",
    operation: "CreateLightbox",
    route: "/v1/lightbox/",
  },
  CreateLightboxItems: {
    protocol: "https",
    operation: "CreateLightboxItems",
    route: "/v1/lightbox/",
  },
  DeleteLightboxItems: {
    protocol: "https",
    operation: "DeleteLightboxItems",
    route: "/v1/lightbox/",
  },
  CreateSharedLightbox: {
    protocol: "https",
    operation: "CreateSharedLightbox",
    route: "/v1/lightbox/",
  },
  DeleteLightbox: {
    protocol: "https",
    operation: "DeleteLightbox",
    route: "/v1/lightbox/",
  },
  GetLightboxHeaders: {
    protocol: "https",
    operation: "GetLightboxHeaders",
    route: "/v1/lightbox/",
  },
  GetLightbox: {
    protocol: "https",
    operation: "GetLightbox",
    route: "/v1/lightbox/",
  },
  UpdateLightboxHeader: {
    protocol: "https",
    operation: "UpdateLightboxHeader",
    route: "/v1/lightbox/",
  },
  CreateCustomer: {
    protocol: "https",
    operation: "CreateCustomer",
    route: "/v1/account/",
  },
  GetActiveProductOfferings: {
    protocol: "https",
    operation: "GetActiveProductOfferings",
    route: "/v1/data/",
  },
  GetCountries: {
    protocol: "https",
    operation: "GetCountries",
    route: "/v1/data/",
  },
  GetEventDetails: {
    protocol: "https",
    operation: "GetEventDetails",
    route: "/v1/search/",
  }
};
