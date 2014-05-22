String.empty = "";

if (!('contains' in String.prototype)) {
  String.prototype.contains = function (str, startIndex) { return -1 !== String.prototype.indexOf.call(this, str, startIndex); };
};

String.prototype.getQueryValue = function (key) {
  var query = decodeURIComponent(this.replace("?", String.empty));
  var params = query.split("&");
  var i;
  for (i = 0; i < params.length; i += 1) {
    var kvp = params[i].split("=");
    if (kvp.length > 1 && kvp[0] === key) {
      return kvp[1];
    }
  }
  return String.empty;
};

Date.fromJson = function (jsonDate) {
  var regex = /-?\d+/;
  return new Date(parseInt(regex.exec(jsonDate)));
};

if (typeof String.prototype.trim !== 'function') {
  String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, '');
  };
};

$.fn.outerHtml = function (s) {
  return s
        ? this.before(s).remove()
        : $("<p>").append(this.eq(0).clone()).html();
};

(function (jQuery) {
    if (window.XDomainRequest) {
		jQuery.ajaxTransport(function( s ) {
			if ( s.crossDomain && s.async ) {
				if ( s.timeout ) {
					s.xdrTimeout = s.timeout;
					delete s.timeout;
				}
				var xdr;
				return {
					send: function( _, complete ) {
						function callback( status, statusText, responses, responseHeaders ) {
							xdr.onload = xdr.onerror = xdr.ontimeout = jQuery.noop;
							xdr = undefined;
							complete( status, statusText, responses, responseHeaders );
						}
						xdr = new XDomainRequest();
						xdr.onload = function() {
							callback( 200, "OK", { text: xdr.responseText }, "Content-Type: " + xdr.contentType );
						};
						xdr.onerror = function(e) {
							callback( 404, "Not Found" );
						};
						xdr.onprogress = jQuery.noop;
						xdr.ontimeout = function() {
							callback( 0, "timeout" );
						};
						xdr.timeout = s.xdrTimeout || Number.MAX_VALUE;
						xdr.open( s.type, s.url );
						xdr.send( ( s.hasContent && s.data ) || null );
					},
					abort: function() {
						if ( xdr ) {
							xdr.onerror = jQuery.noop;
							xdr.abort();
						}
					}
				};
			}
		});
	}
})(jQuery);
