BizarroFinder.modalDebugger = $("#debugger");

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
  var embedModal = $("#embed-modal");

  var oembed = function (e, callback) {
    var embedUrl = $(e.currentTarget).closest("li").data("embed-url");
    BizarroFinder.AjaxWrapper().get(embedUrl, $("#embed-modal textarea"), false, function (response) {
      if (callback) {
        callback(e, response);
      }
    });
  };

  var setEmbedModalProperties = function (e, response) {
    $("#embed-modal textarea").val(response.html);
    BizarroFinder.ModalPositioner().set(e, embedModal);
    embedModal.show();
    $("#embed-link textarea")[0].focus();
    $("#embed-link textarea")[0].setSelectionRange(0, 9999);
  };

  var hide = function () {
    try {
      embedModal.hide();
    } catch (ex) {
      BizarroFinder.Exception().handle(ex.message, BizarroFinder.modalDebugger);
    }
  };

  var show = function (e) {
    try {
      e.stopPropagation();
      BizarroFinder.Preview().hide();
      oembed(e, setEmbedModalProperties);
    } catch (ex) {
      BizarroFinder.Exception().handle(ex.message, BizarroFinder.modalDebugger);
    }
  };

  return {
    show: show,
    hide: hide
  };
};

BizarroFinder.Preview = function () {
  var show = function (e) {
    try {
      var previewModal = $(e.currentTarget).closest("li").find("div.preview");
      e.stopPropagation();
      BizarroFinder.EmbedModal().hide();
      hide();

      BizarroFinder.ModalPositioner().set(e, previewModal);
      previewModal.show();
    } catch (ex) {
      BizarroFinder.Exception().handle(ex.message, BizarroFinder.modalDebugger);
    }
  };

  var hide = function () {
    try {
      $("div.preview").hide();
    } catch (ex) {
      BizarroFinder.Exception().handle(ex.message, BizarroFinder.modalDebugger);
    }
  };

  return {
    show: show,
    hide: hide
  };
};