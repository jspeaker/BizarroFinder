BizarroFinder.AjaxWrapperBuilder = function () {
  var operationUri = function (operation) {
    var host = BizarroFinder.BaseUri;
    return operation.protocol + "://" + host + operation.route + operation.operation;
  };

  return {
    operationUri: operationUri
  };
};
