!function(s){var a="execute";function e(t){return function(e){try{t(e)}catch(e){o("reportError",{message:e})}}}function o(e,t){var a,o=[];for(a in t=void 0===t?{}:t)t.hasOwnProperty(a)&&o.push(encodeURIComponent(a)+"="+encodeURIComponent(t[a]));e="?src="+ref+";action="+e+";"+o.join(";");window.location=e}function t(e){var t=s(e.currentTarget).data("btn-id");switch(a){case"load":o("loadCode",{id:t});break;case"save":o("saveCode",{id:t,code:s("#code-input").val()});break;case"execute":o("executeCode",{id:t})}n("execute")}function n(e){e!==a&&("execute"==e&&(s("#butt-save").removeClass("active"),s("#butt-load").removeClass("active")),"load"==e&&(s("#butt-save").removeClass("active"),s("#butt-load").addClass("active")),"save"==e&&(s("#butt-load").removeClass("active"),s("#butt-save").addClass("active")),a=e)}function c(){n("load")}function r(){n("save")}function d(e){o("abortCode",{id:e,message:"Aborted by user"})}function i(e){o("reservoir",{id:s(e.currentTarget||e.target||e.srcElement).data("id")})}window.onload=function(){o("getUIState"),s("#butt-load").on("click",e(c)),s("#butt-save").on("click",e(r)),s("#butt-abort").on("click",e(d)),s(".btn-c").on("click",e(t)),s(".reservoir-button").on("click",e(i))},window.loadCodeCallback=function(){n("execute")},window.saveCodeCallback=function(){n("execute")},window.setUIState=function(e){var t,a;for(e=JSON.parse(e),t=1;t<=10;t++){var o=s("#reservoir-"+t);e.reservoirs[t]?o.addClass("btn-primary").removeClass("btn-default"):o.addClass("btn-default").removeClass("btn-primary")}for(t=1;t<=6;t++){var n=s("#butt-"+t);e.buttons[t]?n.addClass("btn-success").removeClass("btn-default"):n.addClass("btn-default").removeClass("btn-success")}a=(a=decodeURIComponent(e.output))||"",s("#code-input").html(a),s("#sx-input").val(e.sx),s("#tx-input").val(e.tx),s("#ax-input").val(e.ax)},window.setRef=function(e){ref=e}}(jQuery);