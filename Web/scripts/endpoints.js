BizarroFinder.BaseUri = "connect.gettyimages.com";

BizarroFinder.baseAuthUri = function() {
  var baseAuthUris = ["auth.bizarrofinder.iontech.org", "local.auth.bizarrofinder.iontech.org"];
  return document.location.host.indexOf("local.") === -1 ? baseAuthUris[0] : baseAuthUris[1];
};

BizarroFinder.Operation = {
  OAuthProxy: {
    protocol: "http",
    operation: "oauth",
    route: "/api/",
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
