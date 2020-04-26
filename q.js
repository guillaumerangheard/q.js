this.Q=(function(D){
	var _tS=function(a){
			return Object.prototype.toString.call(a);
		},
		_ctx=function(a){
			a="[object String]"===_tS(a)?D.querySelector(a):a;
			a=a.length===a.length&&"[object Number]"===_tS(a)?a[0]:a;
			return a&&1===a.nodeType?a:D;
		};
	return function(s,c){
		return _ctx(c).querySelectorAll(s);
	};
})(document);
