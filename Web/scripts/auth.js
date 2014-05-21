BizarroFinder.Auth = function () {
  var authenticate = function(callback) {
    var target = $("#results");
    var local = document.location.href.indexOf("http://local.") > -1 ? "local." : "";
    var host = local + "auth.bizarrofinder.iontech.org";

    try {
      BizarroFinder.AjaxWrapper().get("http://" + host + "/api/OAuth", target, false, function (response) {
        if (callback) {
          callback(response);
        }
      });
    } catch(ex) {
      target.html("<p class='error'>Oops! An error occurred.</p>");
    }
  };

  var setAuthToken = function(response) {
    BizarroFinder.Authentication.token = response.access_token;
  };

  var init = function () {
    var target = $("#results");
    authenticate(function (response) {
      try {
        setAuthToken(response);
        BizarroFinder.Search().search();
      } catch (exc) {
        target.html("<p class='error'>Oops! An error occurred.</p>");
      }
    });

    window.setInterval(function() {
      BizarroFinder.Auth().authenticate(function (response) {
        try {
          setAuthToken(response);
        } catch (exc) {
          target.html("<p class='error'>Oops! An error occurred.</p>");
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
  token: ""
};
