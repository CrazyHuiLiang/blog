require('code-prettify/src/prettify.css');
require('code-prettify');

document.body.onload = function() {
	var pres = document.querySelectorAll('.highlight .code pre');
	for(var i=0; i<pres.length; i++) {
		var pre = pres[i];
		pre.classList.add('prettyprint')
	}
	PR.prettyPrint();
};
