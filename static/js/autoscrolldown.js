/**
 * autoScrollDown plugin for Etherpad.
 * client-side JS file.
 * @author Beonit Lathiere
 * @filesource autoscrolldown.js
 */

var autoScrollDown = (function(){
	
	var active = false;
	var newY = 1000;
	var param = null;
	var option = $('html body * input#options-autoScrollDown');
	var sets = {onload : null, readonly: null}
	function getURLParameter(name) {
	    if (name===''){
	    	return '';
	    }
	    return decodeURIComponent((new RegExp('[?|&]'+name+'='+'([^&;]+?)(&|#|;|$)').exec(window.location.search)||[,""])[1].replace(/\+/g,'%20'))||'';
	}
	return{
		init : function(){
			active = false;
			sets.onload = clientVars.ep_autoscrolldown_settings.onload || false;
			sets.lock = clientVars.ep_autoscrolldown_settings.lock || false;
			sets.readonly = clientVars.readonly;
			option = $('html body * input#options-autoScrollDown');
			option.prop("disabled", sets.lock);
			console.log('init autoscrolldown', sets.onload, sets.readonly, sets.lock);
			var me = this;
			param = getURLParameter('autoscrolldown');
			if (param=='true'||param=='1' || sets.onload=="on" || (sets.onload=="readonly" && sets.readonly==true)) {
				console.info('enable autoscrolldown')
				active = true;
				option.prop('checked',true);
			}
			//checkbox setting
			$('html body * input#options-autoScrollDown').on('click',function() {
				autoScrollDown.change();
			});
			//button to scroll once
			$('html body * button#buttonicon-autoscrolldown').on('click',function() {
				autoScrollDown.scroll();
			});
		},
		change : function(){
			active = $('html body * input#options-autoScrollDown').prop('checked');
			if(active===true){
				this.scroll();
			}else{
				console.info('disable autoscrolldown')
			}
		},
		autoscroll : function(){
			if(active===true){
				this.scroll();
			}
		},
		scroll:function(){
			//console.info(navigator.userAgent);
			if(window.navigator.userAgent.toLowerCase().indexOf('edge')>-1){	//Edge, test 24.9.2018
				//console.info('hello edge');
				var frame = document.getElementsByName("ace_outer")[0];
				var frameDoc = frame.contentDocument;
				var target = frameDoc.getElementById("outerdocbody");
				frameDoc.scrollingElement.scrollTop = target.parentNode.offsetHeight;
				/*var outerdoc = jQuery('iframe[name="ace_outer"]').contents().find('#outerdocbody');
				newY += outerdoc.height();
				outerdoc.scrollingElement.scrollTo(newY);*/
			/*}else if(false && navigator.appVersion.toLowerCase().indexOf('chrome')>-1){	//Chrome, @deprecated
				var outerdoc = jQuery('iframe[name="ace_outer"]').contents().find('#outerdocbody');
				newY += outerdoc.height();
				outerdoc.animate({scrollTop: newY}, 2000);*/
			}else{	//FF, Opera, MSIE, Chrome
				var outerdocHTML = $('iframe[name="ace_outer"]').contents().find('#outerdocbody').parent();
				var inner = $('iframe[name="ace_outer"]').contents().find('#outerdocbody').contents();	//the height varies with the content
				newY += inner.height();
				outerdocHTML.animate({scrollTop: newY}, 2000); // needed for FF
			}
		},
	};
})();
