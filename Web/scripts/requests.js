BizarroFinder.Request = {
  CreateSession: {
    RequestHeader: {
      Token: null,
      CoordinationId: "NCF-CreateSession-" + navigator.userAgent + "_" + (new Date().getTime() / 1000)
    },
    CreateSessionRequestBody: {
      SystemId: "9999",
      SystemPassword: "systemPassword12345678==",
      UserName: "qaterms_pa",
      UserPassword: "Ph0t0$"
    }
  },
  CreateSessionProduction: {
    RequestHeader: {
      Token: null,
      CoordinationId: "NCF-CreateSession-" + navigator.userAgent + "_" + (new Date().getTime() / 1000)
    },
    CreateSessionRequestBody: {
      SystemId: "9999",
      SystemPassword: "8da++YMJzWX4RXCJYgf1DJN0PuLPcGnBuWFcjHiIBl0=",
      UserName: "qaterms_pa",
      UserPassword: "P@55w0rd"
    }
  },
  CreateApplicationSession: {
    RequestHeader: {
      Token: null,
      CoordinationId: "NCF-CreateApplicationSession-" + navigator.userAgent + "_" + (new Date().getTime() / 1000)
    },
    CreateApplicationSessionRequestBody: {
      SystemId: "9999",
      SystemPassword: "systemPassword12345678=="
    }
  },
  RenewSession: {
    RequestHeader: {
      Token: null,
      CoordinationId: "NCF-RenewSession-" + navigator.userAgent + "_" + (new Date().getTime() / 1000)
    },
    RenewSessionRequestBody: {
      SystemId: "9999",
      SystemPassword: "systemPassword12345678=="
    }
  },
  RenewSessionProduction: {
    RequestHeader: {
      Token: null,
      CoordinationId: "NCF-RenewSession-" + navigator.userAgent + "_" + (new Date().getTime() / 1000)
    },
    RenewSessionRequestBody: {
      SystemId: "9999",
      SystemPassword: "8da++YMJzWX4RXCJYgf1DJN0PuLPcGnBuWFcjHiIBl0=",
    }
  },
  CreateApplicationSessionProduction: {
    RequestHeader: {
      Token: null,
      CoordinationId: "NCF-CreateApplicationSession-" + navigator.userAgent + "_" + (new Date().getTime() / 1000)
    },
    CreateApplicationSessionRequestBody: {
      SystemId: "9999",
      SystemPassword: "8da++YMJzWX4RXCJYgf1DJN0PuLPcGnBuWFcjHiIBl0="
    }
  },
  SearchForImages2: {
    RequestHeader: {
      Token: null,
      Detail: "",
      CoordinationId: "NCF-SearchForImages-" + navigator.userAgent + "_" + (new Date().getTime() / 1000)
    },
    SearchForImages2RequestBody: {
      Language: "en-us",
      Filter: {
        ImageFamilies: [
            "Creative"
        ]
      },
      Query: {
        SearchPhrase: "dog"
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
  SearchForImages3: {
    RequestHeader: {
      Token: null,
      Detail: "",
      CoordinationId: "NCF-SearchForImages3-" + navigator.userAgent + "_" + (new Date().getTime() / 1000)
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
      CoordinationId: "NCF-SearchForVideos-" + navigator.userAgent + "_" + (new Date().getTime() / 1000)
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
      CoordinationId: "NCF-GetImageDetails-" + navigator.userAgent + "_" + (new Date().getTime() / 1000)
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
      CoordinationId: "NCF-GIDA-" + navigator.userAgent + "_" + (new Date().getTime() / 1000)
    },
    GetImageDownloadAuthorizationsRequestBody: {
      ImageSizes: []
    }
  },
  GetLargestImageDownloadAuthorizations: {
    RequestHeader: {
      Token: null,
      Detail: "",
      CoordinationId: "NCF-GLIDA-" + navigator.userAgent + "_" + (new Date().getTime() / 1000)
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
      CoordinationId: "NCF-CreateLightbox-" + navigator.userAgent + "_" + (new Date().getTime() / 1000)
    },
    CreateLightboxRequestBody: {
      ClientName: "NCF",
      LightboxName: "NCF Lightbox",
      Notes: "This is NCF lightbox",
      ProjectName: "NCF Project"
    }
  },
  CreateLightboxItems:
  {
    RequestHeader: {
      Token: null,
      Detail: "",
      CoordinationId: "NCF-CreateLightboxItems-" + navigator.userAgent + "_" + (new Date().getTime() / 1000)
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
      CoordinationId: "NCF-GetLightboxHeaders-" + navigator.userAgent + "_" + (new Date().getTime() / 1000)
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
      CoordinationId: "NCF-GetLightbox-" + navigator.userAgent + "_" + (new Date().getTime() / 1000)
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
      CoordinationId: "NCF-UpdateLightboxHeader-" + navigator.userAgent + "_" + (new Date().getTime() / 1000)
    },
    UpdateLightboxHeaderRequestBody: {
      LightboxId: null,
      ClientName: "NCF Updated",
      LightboxName: "NCF Lightbox Updated",
      Notes: "This is NCF lightbox Updated",
      ProjectName: "NCF Project Updated"
    }
  },
  DeleteLightboxItems:
  {
    RequestHeader: {
      Token: null,
      Detail: "",
      CoordinationId: "NCF-DeleteLightboxItems-" + navigator.userAgent + "_" + (new Date().getTime() / 1000)
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
      CoordinationId: "NCF-CreateSharedLightbox-" + navigator.userAgent + "_" + (new Date().getTime() / 1000)
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
      CoordinationId: "NCF-DeleteLightbox-" + navigator.userAgent + "_" + (new Date().getTime() / 1000)
    },
    DeleteLightboxRequestBody: {
      LightboxId: null
    }
  },
  CreateCustomer: {
    RequestHeader: {
      Token: null,
      Detail: "",
      CoordinationId: "NCF-CreateCustomer-" + navigator.userAgent + "_" + (new Date().getTime() / 1000)
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
      CoordinationId: "NCF-GetActiveProductOfferings-" + navigator.userAgent + "_" + (new Date().getTime() / 1000)
    }
  },
  GetCountries: {
    RequestHeader: {
      Token: null,
      Detail: "",
      CoordinationId: "NCF-GetCountries-" + navigator.userAgent + "_" + (new Date().getTime() / 1000)
    },
    GetCountriesRequestBody: {
      Language: "de" // German
    }
  },
  GetEventDetails: {
    RequestHeader: {
      Token: null,
      Detail: "",
      CoordinationId: "NCF-GetEventDetails-" + navigator.userAgent + "_" + (new Date().getTime() / 1000)
    },
    GetEventDetailsRequestBody: {
      EventIds: []
    }
  }
};
