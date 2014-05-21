
BizarroFinder.ModalPositioner = function () {
  var set = function (e, targetElement) {
    var left = ($(window).width() / 2) - (targetElement.width() / 2);
    var top = ($(window).height() / 2) - (targetElement.height() / 2) + window.scrollY;
    targetElement.css("top", top);
    targetElement.css("left", left);
  };

  return {
    set: set
  };
};

BizarroFinder.EmbedModal = function () {
  var hide = function () {
    $("#embed-modal").hide();
  };

  var show = function (e) {
    var targetElement, embedUrl;

    e.stopPropagation();
    BizarroFinder.Preview().hide();

    // get the embed html from oembed
    embedUrl = $(e.currentTarget).closest("li").data("embed-url");
    BizarroFinder.AjaxWrapper().get(embedUrl, $("#embed-modal textarea"), false, function (response) {
      $("#embed-modal textarea").html(response.html);

      targetElement = $("#embed-modal");
      BizarroFinder.ModalPositioner().set(e, targetElement);
      targetElement.show();
      $("#embed-link textarea")[0].focus();
      $("#embed-link textarea")[0].setSelectionRange(0, 9999);
    });
  };

  return {
    show: show,
    hide: hide
  };
};

BizarroFinder.Preview = function () {
  var show = function (e) {
    e.stopPropagation();
    BizarroFinder.EmbedModal().hide();
    hide();

    var targetElement = $(e.currentTarget).closest("li").find("div.preview");
    BizarroFinder.ModalPositioner().set(e, targetElement);
    targetElement.show();
  };

  var hide = function () {
    $("div.preview").hide();
  };

  return {
    show: show,
    hide: hide
  };
};