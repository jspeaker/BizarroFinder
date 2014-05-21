BizarroFinder.Ui = function() {
  var init = function () {
    var phrase = document.location.hash.replace("#", String.empty);
    if (phrase) {
      $("#keyword").val(phrase);
    }
  };

  return {
    init: init
  };
};