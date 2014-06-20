BizarroFinder.Request = {
  SearchForImages3: {
    RequestHeader: {
      Token: null,
      Detail: "",
      CoordinationId: "BizarroFinder-SearchForImages3-" + navigator.userAgent + "_" + (new Date().getTime() / 1000)
    },
    SearchForImagesRequestBody: {
      Language: "en-us",
      Filter: {
        ImageFamilies: [
            "Creative"
        ]
      },
      Query: {
        SearchPhrase: "academy"
      },
      ResultOptions: {
        IncludeKeywords: false,
        ItemCount: 75,
        ItemStartNumber: 1,
        RefinementOptionsSet: "",
        EditorialSortOrder: "",
        CreativeSortOrder: ""
      }
    }
  },
  SearchForVideos: {
    RequestHeader: {
      Token: null,
      Detail: "",
      CoordinationId: "BizarroFinder-SearchForVideos-" + navigator.userAgent + "_" + (new Date().getTime() / 1000)
    },
    SearchForVideosRequestBody: {
      Language: "en-us",
      Query: {
        SearchPhrase: "dog"
      },
      ResultOptions: {
        ItemCount: 75,
        ItemStartNumber: 1
      }
    }
  },
  GetImageDetails: {
    RequestHeader: {
      Token: null,
      Detail: "",
      CoordinationId: "BizarroFinder-GetImageDetails-" + navigator.userAgent + "_" + (new Date().getTime() / 1000)
    },
    GetImageDetailsRequestBody: {
      CountryCode: "USA",
      Language: "en-us",
      ImageIds: []
    }
  },
  GetImageDownloadAuthorizations: {
    RequestHeader: {
      Token: null,
      Detail: "",
      CoordinationId: "BizarroFinder-GIDA-" + navigator.userAgent + "_" + (new Date().getTime() / 1000)
    },
    GetImageDownloadAuthorizationsRequestBody: {
      ImageSizes: []
    }
  },
  GetLargestImageDownloadAuthorizations: {
    RequestHeader: {
      Token: null,
      Detail: "",
      CoordinationId: "BizarroFinder-GLIDA-" + navigator.userAgent + "_" + (new Date().getTime() / 1000)
    },
    GetLargestImageDownloadAuthorizationsRequestBody: {
      Images: []
    }
  },
  CreateDownloadRequest: {
    RequestHeader: {
      Token: null,
      Detail: "",
      CoordinationId: ""
    },
    CreateDownloadRequestBody: {
      DownloadItems: []
    }
  },
  CreateLightbox: 
  {
    RequestHeader: {
      Token: null,
      Detail: "",
      CoordinationId: "BizarroFinder-CreateLightbox-" + navigator.userAgent + "_" + (new Date().getTime() / 1000)
    },
    CreateLightboxRequestBody: {
      ClientName: "BizarroFinder",
      LightboxName: "BizarroFinder Lightbox",
      Notes: "This is BizarroFinder lightbox",
      ProjectName: "BizarroFinder Project"
    }
  },
  CreateLightboxItems:
  {
    RequestHeader: {
      Token: null,
      Detail: "",
      CoordinationId: "BizarroFinder-CreateLightboxItems-" + navigator.userAgent + "_" + (new Date().getTime() / 1000)
    },
    CreateLightboxItemsRequestBody: {
      LightboxId: null,
      AssetIds: []
    }
  },
  GetLightboxHeaders:
  {
    RequestHeader: {
      Token: null,
      Detail: "",
      CoordinationId: "BizarroFinder-GetLightboxHeaders-" + navigator.userAgent + "_" + (new Date().getTime() / 1000)
    },
    GetLightboxHeadersRequestBody: {
      ResultsViewOptions: {
        ItemCount: 1,
        ItemStartNumber: 1
      }
    }
  },
  GetLightbox:
  {
    RequestHeader: {
      Token: null,
      Detail: "",
      CoordinationId: "BizarroFinder-GetLightbox-" + navigator.userAgent + "_" + (new Date().getTime() / 1000)
    },
    GetLightboxRequestBody: {
      LightboxId: null,
      LightboxItemsViewOptions: {
        ItemCount: 10,
        ItemStartNumber: 1
      }
    }
  },
  UpdateLightboxHeader:
  {
    RequestHeader: {
      Token: null,
      Detail: "",
      CoordinationId: "BizarroFinder-UpdateLightboxHeader-" + navigator.userAgent + "_" + (new Date().getTime() / 1000)
    },
    UpdateLightboxHeaderRequestBody: {
      LightboxId: null,
      ClientName: "BizarroFinder Updated",
      LightboxName: "BizarroFinder Lightbox Updated",
      Notes: "This is BizarroFinder lightbox Updated",
      ProjectName: "BizarroFinder Project Updated"
    }
  },
  DeleteLightboxItems:
  {
    RequestHeader: {
      Token: null,
      Detail: "",
      CoordinationId: "BizarroFinder-DeleteLightboxItems-" + navigator.userAgent + "_" + (new Date().getTime() / 1000)
    },
    DeleteLightboxItemsRequestBody: {
      LightboxId: null,
      AssetIds: []
    }
  },
  CreateSharedLightbox: 
  {
    RequestHeader: {
      Token: null,
      Detail: "",
      CoordinationId: "BizarroFinder-CreateSharedLightbox-" + navigator.userAgent + "_" + (new Date().getTime() / 1000)
    },
    CreateSharedLightboxRequestBody: {
      LightboxId: null
    }
  },
  DeleteLightbox:
  {
    RequestHeader: {
      Token: null,
      Detail: "",
      CoordinationId: "BizarroFinder-DeleteLightbox-" + navigator.userAgent + "_" + (new Date().getTime() / 1000)
    },
    DeleteLightboxRequestBody: {
      LightboxId: null
    }
  },
  CreateCustomer: {
    RequestHeader: {
      Token: null,
      Detail: "",
      CoordinationId: "BizarroFinder-CreateCustomer-" + navigator.userAgent + "_" + (new Date().getTime() / 1000)
    },
    CreateCustomerRequestBody: {
      EmailAddress: "HankM@foo.com",
      UserName: "hwilliams",
      Password: "mysecretword",
      FirstName: "Hank",
      MiddleName: "Frank",
      LastName: "Williams",
      BillingCountryChar3Iso: "USA",
      MarketingEmailOptIn: true,
      PhoneNumber: "281.330.8004"
    }
  },
  GetActiveProductOfferings: {
    RequestHeader: {
      Token: null,
      Detail: "",
      CoordinationId: "BizarroFinder-GetActiveProductOfferings-" + navigator.userAgent + "_" + (new Date().getTime() / 1000)
    }
  },
  GetCountries: {
    RequestHeader: {
      Token: null,
      Detail: "",
      CoordinationId: "BizarroFinder-GetCountries-" + navigator.userAgent + "_" + (new Date().getTime() / 1000)
    },
    GetCountriesRequestBody: {
      Language: "de" // German
    }
  },
  GetEventDetails: {
    RequestHeader: {
      Token: null,
      Detail: "",
      CoordinationId: "BizarroFinder-GetEventDetails-" + navigator.userAgent + "_" + (new Date().getTime() / 1000)
    },
    GetEventDetailsRequestBody: {
      EventIds: []
    }
  }
};
