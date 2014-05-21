var BizarroFinder = BizarroFinder || {};

BizarroFinder.namespace = function (namespace) {
  var parts = namespace.split("."),
      parent = BizarroFinder,
      i;

  if (parts[0] === "BizarroFinder") {
    parts = parts.slice(1);
  }

  for (i = 0; i < parts.length; i += 1) {
    if (typeof parent[parts[i]] === "undefined") {
      parent[parts[i]] = {};
    }
    parent = parent[parts[i]];
  }
  return parent;
};