BizarroFinder.Search = function () {
  var uri = BizarroFinder.AjaxWrapperBuilder().operationUri(BizarroFinder.Operation.SearchForImages3);
  var resultsUrl = "/scripts/templates/results.html";
  var paginationUrl = "/scripts/templates/pagination.html";

  function random(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
  }

  var createQuery = function (page, pageSize) {
    var sortIndex, sortOrders;
    var phrase = $("#keyword").val();
    if (!page) {
      page = 1;
    }

    var query = BizarroFinder.Request.SearchForImages3;
    query.RequestHeader.Token = BizarroFinder.Authentication.token;
    query.SearchForImagesRequestBody.Query.SearchPhrase = phrase + " bizarre";
    query.SearchForImagesRequestBody.Filter.EmbedContentOnly = "true";
    query.SearchForImagesRequestBody.Filter.ExcludeNudity = "true";
    query.SearchForImagesRequestBody.ResultOptions.ItemCount = pageSize;
    query.SearchForImagesRequestBody.ResultOptions.ItemStartNumber = (pageSize * page) - (pageSize - 1);

    sortIndex = random(0, 2) - 1;
    sortOrders = ["MostRecent", "MostPopular"];
    query.SearchForImagesRequestBody.ResultOptions.CreativeSortOrder = sortOrders[sortIndex];

    return query;
  };

  var search = function (page) {
    var target = $("#results");
    var pageSize = 75;

    var params = {
      Data: JSON.stringify(createQuery(page, pageSize)),
      Url: uri
    };

    try {
      BizarroFinder.AjaxWrapper().post(params, target, true, function (response) {
        if (response.ResponseHeader.Status === "error") {
          BizarroFinder.Exception().handle(response.ResponseHeader.StatusList[0].Message, target);
        }
        simpleTemplate.renderJson(resultsUrl, response, target, function () {
          var paginationData = {
            page: Math.ceil(response.SearchForImagesResult.ItemStartNumber / pageSize),
            pages: Math.ceil(response.SearchForImagesResult.ItemTotalCount / pageSize)
          };
          simpleTemplate.renderJson(paginationUrl, paginationData, $("#pagination-control"), function () {
          });
        });
      });
    } catch (ex) {
      BizarroFinder.Exception().handle(ex.message, target);
    }
  };

  return {
    search: search
  };
};