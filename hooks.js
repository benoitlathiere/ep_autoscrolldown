/**
 * AutoScrollDown plugin for Etherpad.
 * server-side file.
 * @author Benoit Lathiere
 * @filesource hooks.js
 */
var eejs = require("ep_etherpad-lite/node/eejs");
var settings = require('ep_etherpad-lite/node/utils/Settings');
exports.eejsBlock_scripts = function(hook_name, args, cb){
	args.content += "<script type='text/javascript' src='../static/plugins/ep_autoscrolldown/static/js/jquery-3.3.1.min.js'></script>";
	args.content += "<script>$.noConflict();</script>";	//required to avoid bug..
	args.content += "<script type='text/javascript' src='../static/plugins/ep_autoscrolldown/static/js/autoscrolldown.js'></script>";
	return cb();
};
exports.eejsBlock_editbarMenuLeft = function(hook_name, args, cb){
	if(!settings.ep_autoscrolldown || settings.ep_autoscrolldown.displaybutton)
		args.content = args.content + eejs.require("ep_autoscrolldown/templates/editbarButtons.ejs",{},module);
	return cb();
};
exports.eejsBlock_mySettings = function (hook_name, args, cb) {
    var checked_state = '';	//default: not checked
    args.content = args.content + eejs.require('ep_autoscrolldown/templates/autoscrolldown_entry.ejs',{});
    return cb();
};
exports.clientVars = function(hook, context, callback)
{
	// return the setting to the clientVars, sending the value
	if (settings.ep_autoscrolldown)
		return callback({ "ep_autoscrolldown_settings": settings.ep_autoscrolldown });
};
