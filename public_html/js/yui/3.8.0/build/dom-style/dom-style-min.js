/*
YUI 3.8.0 (build 5744)
Copyright 2012 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/
YUI.add("dom-style",function(e,t){(function(e){var t="documentElement",n="defaultView",r="ownerDocument",i="style",s="float",o="cssFloat",u="styleFloat",a="transparent",f="getComputedStyle",l="getBoundingClientRect",c=e.config.win,h=e.config.doc,p=undefined,d=e.DOM,v="transform",m="transformOrigin",g=["WebkitTransform","MozTransform","OTransform","msTransform"],y=/color$/i,b=/width|height|top|left|right|bottom|margin|padding/i;e.Array.each(g,function(e){e in h[t].style&&(v=e,m=e+"Origin")}),e.mix(d,{DEFAULT_UNIT:"px",CUSTOM_STYLES:{},setStyle:function(e,t,n,r){r=r||e.style;var i=d.CUSTOM_STYLES;if(r){n===null||n===""?n="":!isNaN(new Number(n))&&b.test(t)&&(n+=d.DEFAULT_UNIT);if(t in i){if(i[t].set){i[t].set(e,n,r);return}typeof i[t]=="string"&&(t=i[t])}else t===""&&(t="cssText",n="");r[t]=n}},getStyle:function(e,t,n){n=n||e.style;var r=d.CUSTOM_STYLES,i="";if(n){if(t in r){if(r[t].get)return r[t].get(e,t,n);typeof r[t]=="string"&&(t=r[t])}i=n[t],i===""&&(i=d[f](e,t))}return i},setStyles:function(t,n){var r=t.style;e.each(n,function(e,n){d.setStyle(t,n,e,r)},d)},getComputedStyle:function(e,t){var s="",o=e[r],u;return e[i]&&o[n]&&o[n][f]&&(u=o[n][f](e,null),u&&(s=u[t])),s}}),h[t][i][o]!==p?d.CUSTOM_STYLES[s]=o:h[t][i][u]!==p&&(d.CUSTOM_STYLES[s]=u),e.UA.opera&&(d[f]=function(t,i){var s=t[r][n],o=s[f](t,"")[i];return y.test(i)&&(o=e.Color.toRGB(o)),o}),e.UA.webkit&&(d[f]=function(e,t){var i=e[r][n],s=i[f](e,"")[t];return s==="rgba(0, 0, 0, 0)"&&(s=a),s}),e.DOM._getAttrOffset=function(t,n){var r=e.DOM[f](t,n),i=t.offsetParent,s,o,u;return r==="auto"&&(s=e.DOM.getStyle(t,"position"),s==="static"||s==="relative"?r=0:i&&i[l]&&(o=i[l]()[n],u=t[l]()[n],n==="left"||n==="top"?r=u-o:r=o-t[l]()[n])),r},e.DOM._getOffset=function(e){var t,n=null;return e&&(t=d.getStyle(e,"position"),n=[parseInt(d[f](e,"left"),10),parseInt(d[f](e,"top"),10)],isNaN(n[0])&&(n[0]=parseInt(d.getStyle(e,"left"),10),isNaN(n[0])&&(n[0]=t==="relative"?0:e.offsetLeft||0)),isNaN(n[1])&&(n[1]=parseInt(d.getStyle(e,"top"),10),isNaN(n[1])&&(n[1]=t==="relative"?0:e.offsetTop||0))),n},d.CUSTOM_STYLES.transform={set:function(e,t,n){n[v]=t},get:function(e,t){return d[f](e,v)}},d.CUSTOM_STYLES.transformOrigin={set:function(e,t,n){n[m]=t},get:function(e,t){return d[f](e,m)}}})(e),function(e){var t=parseInt,n=RegExp;e.Color={KEYWORDS:{black:"000",silver:"c0c0c0",gray:"808080",white:"fff",maroon:"800000",red:"f00",purple:"800080",fuchsia:"f0f",green:"008000",lime:"0f0",olive:"808000",yellow:"ff0",navy:"000080",blue:"00f",teal:"008080",aqua:"0ff"},re_RGB:/^rgb\(([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\)$/i,re_hex:/^#?([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})$/i,re_hex3:/([0-9A-F])/gi,toRGB:function(r){return e.Color.re_RGB.test(r)||(r=e.Color.toHex(r)),e.Color.re_hex.exec(r)&&(r="rgb("+[t(n.$1,16),t(n.$2,16),t(n.$3,16)].join(", ")+")"),r},toHex:function(t){t=e.Color.KEYWORDS[t]||t;if(e.Color.re_RGB.exec(t)){t=[Number(n.$1).toString(16),Number(n.$2).toString(16),Number(n.$3).toString(16)];for(var r=0;r<t.length;r++)t[r].length<2&&(t[r]="0"+t[r]);t=t.join("")}return t.length<6&&(t=t.replace(e.Color.re_hex3,"$1$1")),t!=="transparent"&&t.indexOf("#")<0&&(t="#"+t),t.toUpperCase()}}}(e)},"3.8.0",{requires:["dom-base"]});
