var triggerError=attachErrorHandler("stationNamer",!0);$(document).ready(function(){var e=$("#stationNameChanger"),t=e.find(".input-area"),i=$("#station-name"),n=t.find(".error-message"),r=t.find('button[type="submit"]'),a=t.find(".randomise"),o=$.parseJSON($("#whitelist-json").text()),s=[],l=!1,d=!1,m=0,u=!1,c=[].concat(o.Admins,o["Frontier Locations"],o["Frontier Bodies"],o["Sol System Bodies"],o.Organizations,o.Countries,o.Directions,o.Greek,o["Military Letters"],o["Misc. Nonsense"],o.Nouns,o.Numbers,o["Petting Zoo Animals"],o.Verbs),h="<h2>Whitelist</h2>";$.each(o,function(e,n){h+="<h3>"+e+"</h3>",h+="<p>",$.each(n,function(e,t){h+=t.toLowerCase()+(e<n.length-1?", ":""),s.push(t.toLowerCase())}),h+="</p>"}),$(".whitelist").html(h),$("#content").nanoScroller();function f(){l=!0,i.removeClass("error").addClass("valid"),n.html("&nbsp;"),r.removeAttr("disabled")}function v(e){l=!1,i.removeClass("valid").addClass("error"),n.html(e),r.attr("disabled","disabled")}function g(e){return e[Math.floor(Math.random()*e.length)]}i.on("keyup",function(){var e=$.trim(i.val());if(e.length<1||e.length>m)return v("Name must be between 0 and "+(m+1)+" characters.");if(u)return f();for(var t=e.split(" "),n=0;n<t.length;n++){var r=t[n];if(!$.isNumeric(r)&&-1===$.inArray(r.toLowerCase(),s))return v('"'+r+'" is an invalid word!')}f()}),a.on("click",function(){var e=function(){for(var e,t=g(o.Prefixes),n=g(o.Adjectives),r=g(o.Suffixes),i=(t+n+r).length+3,a=!1;!a;)a=(e=g(c)).length<=m-i;return t+" "+n+" "+e+" "+r}();i.val(e).trigger("keyup")}),t.on("submit",function(e){e.preventDefault(),d||l&&(d=!0,window.location=t.attr("action")+$.param({newName:$.trim(i.val())}))}),m=parseInt(i.attr("maxlength")),u="1"===$("#admin-user").val(),i.focus(),u&&e.find(".tips").addClass("admin-mode").html("Admin mode is on, there are no restrictions, go nuts!")});