(function() {

  YUI().use("node", "event", function(Y) {
    Y.one(".one-time-bubble").hide();
    Y.one(".one-time-599").on("mouseenter", function() {
      return Y.one(".one-time-bubble").show();
    });
    return Y.one(".one-time-599").on("mouseleave", function() {
      return Y.one(".one-time-bubble").hide();
    });
  });

}).call(this);
