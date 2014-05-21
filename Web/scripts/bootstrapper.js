BizarroFinder.Bootstrapper = function () {
  var bind = function () {
    $("#search_form").bind("submit", function (e) {
      try {
        BizarroFinder.Search().search();
        window.location.hash = $("#keyword").val();
      } finally {
        e.preventDefault();
      }
    });

    $("#results").delegate(".embed-link", "click", function (e) {
      BizarroFinder.EmbedModal().show(e);
    });

    $("#results").delegate(".image-container img", "click", function (e) {
      BizarroFinder.Preview().show(e);
    });

    $("#embed-modal .modal-close").click(function() {
      BizarroFinder.EmbedModal().hide();
    });

    $(document).click(function () {
      BizarroFinder.Preview().hide();
      BizarroFinder.EmbedModal().hide();
    });

    $("#pagination-control").delegate(".next-page", "click", function () {
      BizarroFinder.Search().search($("#pagination-control div").data("page") + 1);
    });

    $("#pagination-control").delegate(".previous-page", "click", function () {
      BizarroFinder.Search().search($("#pagination-control div").data("page") - 1);
    });

    $("#embed-modal").click(function (e) {
      e.stopPropagation();
    });

    $("#embed-link").delegate("textarea", "click", function () {
      $("#embed-link textarea")[0].focus();
      $("#embed-link textarea")[0].setSelectionRange(0, 9999);
    });

    $("#embed-link").delegate("textarea", "touchend", function () {
      $("#embed-link textarea")[0].focus();
      $("#embed-link textarea")[0].setSelectionRange(0, 9999);
    });
  };

  return {
    bind: bind
  };
};
