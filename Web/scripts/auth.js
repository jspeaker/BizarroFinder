BizarroFinder.Auth = function () {
  var target = $("#results");
  var authenticate = function (callback) {
    try {
      var operation = BizarroFinder.Operation.OAuthProxy;
      BizarroFinder.AjaxWrapper().get(operation.protocol + "://" + BizarroFinder.baseAuthUri() + operation.route + operation.operation, target, false, function (response) {
        if (response.status !== 200) {
          BizarroFinder.Exception().handle(response.status + " " + response.reason, target);
          return;
        }

        if (callback) {
          callback(response);
        }
      });
    } catch(ex) {
      BizarroFinder.Exception().handle(ex.message, target);
    }
  };

  var setAuthToken = function (response) {
    try {
      BizarroFinder.Authentication.token = response.access_token;
    } catch (ex) {
      BizarroFinder.Exception().handle(ex.message, target);
    }
  };

  var init = function () {
    authenticate(function (response) {
      try {
        setAuthToken(response);
        BizarroFinder.Search().search();
      } catch (ex) {
        BizarroFinder.Exception().handle(ex.message, target);
      }
    });

    window.setInterval(function() {
      BizarroFinder.Auth().authenticate(function (response) {
        try {
          setAuthToken(response);
        } catch (ex) {
          BizarroFinder.Exception().handle(ex.message, target);
        }
      });
    }, 1740000);
  };

  return {
    init: init,
    authenticate: authenticate
  };
};

BizarroFinder.Authentication = {
  token: String.empty
};
