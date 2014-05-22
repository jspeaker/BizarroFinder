BizarroFinder.Exception = function () {
  var handle = function (message, target) {
    target.html("<p class='error'>Oops! An error occurred.</p><p class='error'>" + message + "</p>");
  };

  return {
    handle: handle
  };
};
