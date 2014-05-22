BizarroFinder.AjaxWrapper = function () {
  function get(url, target, showSpinner, callback) {
    if (showSpinner) {
      spinner(target);
    }

    var ajaxObject = {
      type: 'GET',
      url: url,
      contentType: 'application/json; charset=utf-8',
      success: callback,
      error: function (xhr) {
        BizarroFinder.Exception().handle(xhr.status + " " + xhr.statusText, target);
      }
    };

    $.ajax(ajaxObject);
  };

  function post(params, target, showSpinner, callback) {
    if (showSpinner) {
      spinner(target);
    }

    var ajaxObject =
        {
          async: true,
          crossDomain: true,
          type: 'POST',
          url: params.Url,
          contentType: 'application/json; charset=utf-8',
          data: params.Data,
          dataType: 'json',
          cache: false,
          success: callback,
          error: function (xhr) {
            BizarroFinder.Exception().handle(xhr.status + " " + xhr.statusText, target);
          }
        };

    $.ajax(ajaxObject);
  };

  function spinner(target) {
    target.html("<div class='spinner'><img src='/images/loading.gif' /></div>");
  };

  return {
    post: post,
    get: get
  };
};
