/**
 * autoScrollDown plugin for Etherpad.
 * client-side JS hooks file.
 * @author Benoit Lathiere
 * @sourcefile hooks.js
 */
/**
 * see http://etherpad.org/doc/v1.3.0/#index_postaceinit
 */
exports.postAceInit = function(hook, context) {		//context.ace, context.pad
	autoScrollDown.init();
};
exports.acePostWriteDomLineHTML = function(hook, context) { // context.node: the DOM node that just got written to the page
	autoScrollDown.autoscroll();
};