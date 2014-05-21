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
      error: function (xhr, status, error) {
        target.html("<p class='error'>" + xhr.status + " " + xhr.statusText + "</p>");
      }
    };

    try {
      $.ajax(ajaxObject);
    } catch (e) {
      // todo: handle error
    }
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
          error: function (xhr, status, error) {
            target.html("<p class='error'>" + xhr.status + " " + xhr.statusText + "</p>");
          }
        };

    try {
      $.ajax(ajaxObject);
    } catch (e) {
      target.html("<p class='error'>" + e.message + "</p>");
    }
  }

  function spinner(target) {
    target.html("<div class='spinner'><img src='/images/loading.gif' /></div>");
  }

  return {
    post: post,
    get: get
  };
};
