/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});
$(document).ready(function(){if($('body')){$('body').addClass('fixed-nav')}
try{var mainNav=$("#nav-main");var navNode=mainNav&&mainNav.find(".navbar");var ulNode=navNode&&navNode.find("ul.navbar-nav");if(ulNode.find("li.dropdown")){ulNode.find("li.dropdown").each(function(i,list){var divDrop=$(list).find("div.dropdown-menu");var divNode=document.createElement(divDrop[0].nodeName);var ul=document.createElement('ul');$(ul)[0].classList="dropdown-list";$(ul).attr({"role":"menu","aria-labelledby":"drop-down-menu"});ul.innerHTML=divDrop[0].innerHTML;divDrop[0].replaceWith(ul,divNode);$(list).find('div').remove()})}
var ddItem=$("ul.dropdown-list a.dropdown-item");if(ddItem){for(var i=0;i<ddItem.length;i+=1){ddItem.slice(i,i+1).wrapAll("<li></li>")}}}catch(ignore){}
try{if($("nav.navbar ul.navbar-nav.navigation")){$("nav.navbar ul.navbar-nav.navigation").addClass("main-menu theme-ddmenu")}
if($("nav.navbar ul.navbar-nav")){$("nav.navbar ul.navbar-nav li.nav-item").removeClass("nav-item")}
if($("nav.navbar ul.navbar-nav.main-menu")){$("nav.navbar ul.navbar-nav.main-menu").attr({"data-animtype":2,"data-animspeed":450})}}catch(ignore){}
try{if($('#nav-main nav.navbar ul.main-menu li.dropdown')){$.each($('#nav-main nav.navbar ul.main-menu li.dropdown a[data-toggle="dropdown"]'),function(index,obj){var arrow=document.createElement('b');$(arrow)[0].classList="mobile-arrow";obj.append(arrow)})}}catch(ignore){}
try{$('#page-header .mini-block').before("<p id='internalbannertagline' class='tagline'></p>");var categoryTag=document.getElementById("internalbannertagline")?document.getElementById("internalbannertagline").innerHTML=internalbannertagline:''}catch(ignore){}});
/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
/**
 * Owl carousel
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;(function($,window,document,undefined){/**
	 * Creates a carousel.
	 * @class The Owl Carousel.
	 * @public
	 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
	 * @param {Object} [options] - The options
	 */
	function Owl(element, options) {

		/**
		 * Current settings for the carousel.
		 * @public
		 */
		this.settings = null;

		/**
		 * Current options set by the caller including defaults.
		 * @public
		 */
		this.options = $.extend({}, Owl.Defaults, options);

		/**
		 * Plugin element.
		 * @public
		 */
		this.$element = $(element);

		/**
		 * Proxied event handlers.
		 * @protected
		 */
		this._handlers = {};

		/**
		 * References to the running plugins of this carousel.
		 * @protected
		 */
		this._plugins = {};

		/**
		 * Currently suppressed events to prevent them from being retriggered.
		 * @protected
		 */
		this._supress = {};

		/**
		 * Absolute current position.
		 * @protected
		 */
		this._current = null;

		/**
		 * Animation speed in milliseconds.
		 * @protected
		 */
		this._speed = null;

		/**
		 * Coordinates of all items in pixel.
		 * @todo The name of this member is missleading.
		 * @protected
		 */
		this._coordinates = [];

		/**
		 * Current breakpoint.
		 * @todo Real media queries would be nice.
		 * @protected
		 */
		this._breakpoint = null;

		/**
		 * Current width of the plugin element.
		 */
		this._width = null;

		/**
		 * All real items.
		 * @protected
		 */
		this._items = [];

		/**
		 * All cloned items.
		 * @protected
		 */
		this._clones = [];

		/**
		 * Merge values of all items.
		 * @todo Maybe this could be part of a plugin.
		 * @protected
		 */
		this._mergers = [];

		/**
		 * Widths of all items.
		 */
		this._widths = [];

		/**
		 * Invalidated parts within the update process.
		 * @protected
		 */
		this._invalidated = {};

		/**
		 * Ordered list of workers for the update process.
		 * @protected
		 */
		this._pipe = [];

		/**
		 * Current state information for the drag operation.
		 * @todo #261
		 * @protected
		 */
		this._drag = {
			time: null,
			target: null,
			pointer: null,
			stage: {
				start: null,
				current: null
			},
			direction: null
		};

		/**
		 * Current state information and their tags.
		 * @type {Object}
		 * @protected
		 */
		this._states = {
			current: {},
			tags: {
				'initializing': ['busy'],
				'animating': ['busy'],
				'dragging': ['interacting']
			}
		};

		$.each(['onResize', 'onThrottledResize'], $.proxy(function (i, handler) {
			this._handlers[handler] = $.proxy(this[handler], this);
		}, this));

		$.each(Owl.Plugins, $.proxy(function (key, plugin) {
			this._plugins[key.charAt(0).toLowerCase() + key.slice(1)] = new plugin(this);
		}, this));

		$.each(Owl.Workers, $.proxy(function (priority, worker) {
			this._pipe.push({
				'filter': worker.filter,
				'run': $.proxy(worker.run, this)
			});
		}, this));

		this.setup();
		this.initialize();
	}

	/**
	 * Default options for the carousel.
	 * @public
	 */
	Owl.Defaults = {
		items: 3,
		loop: false,
		center: false,
		rewind: false,
		checkVisibility: true,

		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,

		margin: 0,
		stagePadding: 0,

		merge: false,
		mergeFit: true,
		autoWidth: false,

		startPosition: 0,
		rtl: false,

		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,

		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,

		fallbackEasing: 'swing',
		slideTransition: '',

		info: false,

		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',

		refreshClass: 'owl-refresh',
		loadedClass: 'owl-loaded',
		loadingClass: 'owl-loading',
		rtlClass: 'owl-rtl',
		responsiveClass: 'owl-responsive',
		dragClass: 'owl-drag',
		itemClass: 'owl-item',
		stageClass: 'owl-stage',
		stageOuterClass: 'owl-stage-outer',
		grabClass: 'owl-grab'
	};

	/**
	 * Enumeration for width.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Width = {
		Default: 'default',
		Inner: 'inner',
		Outer: 'outer'
	};

	/**
	 * Enumeration for types.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Type = {
		Event: 'event',
		State: 'state'
	};

	/**
	 * Contains all registered plugins.
	 * @public
	 */
	Owl.Plugins = {};

	/**
	 * List of workers involved in the update process.
	 */
	Owl.Workers = [{
		filter: ['width', 'settings'],
		run: function () {
			this._width = this.$element.width();
		}
	}, {
		filter: ['width', 'items', 'settings'],
		run: function (cache) {
			cache.current = this._items && this._items[this.relative(this._current)];
		}
	}, {
		filter: ['items', 'settings'],
		run: function () {
			this.$stage.children('.cloned').remove();
		}
	}, {
		filter: ['width', 'items', 'settings'],
		run: function (cache) {
			var margin = this.settings.margin || '',
				grid = !this.settings.autoWidth,
				rtl = this.settings.rtl,
				css = {
					'width': 'auto',
					'margin-left': rtl ? margin : '',
					'margin-right': rtl ? '' : margin
				};

			!grid && this.$stage.children().css(css);

			cache.css = css;
		}
	}, {
		filter: ['width', 'items', 'settings'],
		run: function (cache) {
			var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
				merge = null,
				iterator = this._items.length,
				grid = !this.settings.autoWidth,
				widths = [];

			cache.items = {
				merge: false,
				width: width
			};

			while (iterator--) {
				merge = this._mergers[iterator];
				merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;

				cache.items.merge = merge > 1 || cache.items.merge;

				widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
			}

			this._widths = widths;
		}
	}, {
		filter: ['items', 'settings'],
		run: function () {
			var clones = [],
				items = this._items,
				settings = this.settings,
				// TODO: Should be computed from number of min width items in stage
				view = Math.max(settings.items * 2, 4),
				size = Math.ceil(items.length / 2) * 2,
				repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
				append = '',
				prepend = '';

			repeat /= 2;

			while (repeat > 0) {
				// Switch to only using appended clones
				clones.push(this.normalize(clones.length / 2, true));
				append = append + items[clones[clones.length - 1]][0].outerHTML;
				clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
				prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
				repeat -= 1;
			}

			this._clones = clones;

			$(append).addClass('cloned').appendTo(this.$stage);
			$(prepend).addClass('cloned').prependTo(this.$stage);
		}
	}, {
		filter: ['width', 'items', 'settings'],
		run: function () {
			var rtl = this.settings.rtl ? 1 : -1,
				size = this._clones.length + this._items.length,
				iterator = -1,
				previous = 0,
				current = 0,
				coordinates = [];

			while (++iterator < size) {
				previous = coordinates[iterator - 1] || 0;
				current = this._widths[this.relative(iterator)] + this.settings.margin;
				coordinates.push(previous + current * rtl);
			}

			this._coordinates = coordinates;
		}
	}, {
		filter: ['width', 'items', 'settings'],
		run: function () {
			var padding = this.settings.stagePadding,
				coordinates = this._coordinates,
				css = {
					'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
					'padding-left': padding || '',
					'padding-right': padding || ''
				};

			this.$stage.css(css);
		}
	}, {
		filter: ['width', 'items', 'settings'],
		run: function (cache) {
			var iterator = this._coordinates.length,
				grid = !this.settings.autoWidth,
				items = this.$stage.children();

			if (grid && cache.items.merge) {
				while (iterator--) {
					cache.css.width = this._widths[this.relative(iterator)];
					items.eq(iterator).css(cache.css);
				}
			} else if (grid) {
				cache.css.width = cache.items.width;
				items.css(cache.css);
			}
		}
	}, {
		filter: ['items'],
		run: function () {
			this._coordinates.length < 1 && this.$stage.removeAttr('style');
		}
	}, {
		filter: ['width', 'items', 'settings'],
		run: function (cache) {
			cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
			cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
			this.reset(cache.current);
		}
	}, {
		filter: ['position'],
		run: function () {
			this.animate(this.coordinates(this._current));
		}
	}, {
		filter: ['width', 'position', 'items', 'settings'],
		run: function () {
			var rtl = this.settings.rtl ? 1 : -1,
				padding = this.settings.stagePadding * 2,
				begin = this.coordinates(this.current()) + padding,
				end = begin + this.width() * rtl,
				inner, outer, matches = [],
				i, n;

			for (i = 0, n = this._coordinates.length; i < n; i++) {
				inner = this._coordinates[i - 1] || 0;
				outer = Math.abs(this._coordinates[i]) + padding * rtl;

				if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end))) ||
					(this.op(outer, '<', begin) && this.op(outer, '>', end))) {
					matches.push(i);
				}
			}

			this.$stage.children('.active').removeClass('active');
			this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');

			this.$stage.children('.center').removeClass('center');
			if (this.settings.center) {
				this.$stage.children().eq(this.current()).addClass('center');
			}
		}
	}];

	/**
	 * Create the stage DOM element
	 */
	Owl.prototype.initializeStage = function () {
		this.$stage = this.$element.find('.' + this.settings.stageClass);

		// if the stage is already in the DOM, grab it and skip stage initialization
		if (this.$stage.length) {
			return;
		}

		this.$element.addClass(this.options.loadingClass);

		// create stage
		this.$stage = $('<' + this.settings.stageElement + '>', {
			"class": this.settings.stageClass
		}).wrap($('<div/>', {
			"class": this.settings.stageOuterClass
		}));

		// append stage
		this.$element.append(this.$stage.parent());
	};

	/**
	 * Create item DOM elements
	 */
	Owl.prototype.initializeItems = function () {
		var $items = this.$element.find('.owl-item');

		// if the items are already in the DOM, grab them and skip item initialization
		if ($items.length) {
			this._items = $items.get().map(function (item) {
				return $(item);
			});

			this._mergers = this._items.map(function () {
				return 1;
			});

			this.refresh();

			return;
		}

		// append content
		this.replace(this.$element.children().not(this.$stage.parent()));

		// check visibility
		if (this.isVisible()) {
			// update view
			this.refresh();
		} else {
			// invalidate width
			this.invalidate('width');
		}

		this.$element
			.removeClass(this.options.loadingClass)
			.addClass(this.options.loadedClass);
	};

	/**
	 * Initializes the carousel.
	 * @protected
	 */
	Owl.prototype.initialize = function () {
		this.enter('initializing');
		this.trigger('initialize');

		this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);

		if (this.settings.autoWidth && !this.is('pre-loading')) {
			var imgs, nestedSelector, width;
			imgs = this.$element.find('img');
			nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
			width = this.$element.children(nestedSelector).width();

			if (imgs.length && width <= 0) {
				this.preloadAutoWidthImages(imgs);
			}
		}

		this.initializeStage();
		this.initializeItems();

		// register event handlers
		this.registerEventHandlers();

		this.leave('initializing');
		this.trigger('initialized');
	};

	/**
	 * @returns {Boolean} visibility of $element
	 *                    if you know the carousel will always be visible you can set `checkVisibility` to `false` to
	 *                    prevent the expensive browser layout forced reflow the $element.is(':visible') does
	 */
	Owl.prototype.isVisible = function () {
		return this.settings.checkVisibility ?
			this.$element.is(':visible') :
			true;
	};

	/**
	 * Setups the current settings.
	 * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
	 * @todo Support for media queries by using `matchMedia` would be nice.
	 * @public
	 */
	Owl.prototype.setup = function () {
		var viewport = this.viewport(),
			overwrites = this.options.responsive,
			match = -1,
			settings = null;

		if (!overwrites) {
			settings = $.extend({}, this.options);
		} else {
			$.each(overwrites, function (breakpoint) {
				if (breakpoint <= viewport && breakpoint > match) {
					match = Number(breakpoint);
				}
			});

			settings = $.extend({}, this.options, overwrites[match]);
			if (typeof settings.stagePadding === 'function') {
				settings.stagePadding = settings.stagePadding();
			}
			delete settings.responsive;

			// responsive class
			if (settings.responsiveClass) {
				this.$element.attr('class',
					this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
				);
			}
		}

		this.trigger('change', {
			property: {
				name: 'settings',
				value: settings
			}
		});
		this._breakpoint = match;
		this.settings = settings;
		this.invalidate('settings');
		this.trigger('changed', {
			property: {
				name: 'settings',
				value: this.settings
			}
		});
	};

	/**
	 * Updates option logic if necessery.
	 * @protected
	 */
	Owl.prototype.optionsLogic = function () {
		if (this.settings.autoWidth) {
			this.settings.stagePadding = false;
			this.settings.merge = false;
		}
	};

	/**
	 * Prepares an item before add.
	 * @todo Rename event parameter `content` to `item`.
	 * @protected
	 * @returns {jQuery|HTMLElement} - The item container.
	 */
	Owl.prototype.prepare = function (item) {
		var event = this.trigger('prepare', {
			content: item
		});

		if (!event.data) {
			event.data = $('<' + this.settings.itemElement + '/>')
				.addClass(this.options.itemClass).append(item)
		}

		this.trigger('prepared', {
			content: event.data
		});

		return event.data;
	};

	/**
	 * Updates the view.
	 * @public
	 */
	Owl.prototype.update = function () {
		var i = 0,
			n = this._pipe.length,
			filter = $.proxy(function (p) {
				return this[p]
			}, this._invalidated),
			cache = {};

		while (i < n) {
			if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
				this._pipe[i].run(cache);
			}
			i++;
		}

		this._invalidated = {};

		!this.is('valid') && this.enter('valid');
	};

	/**
	 * Gets the width of the view.
	 * @public
	 * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
	 * @returns {Number} - The width of the view in pixel.
	 */
	Owl.prototype.width = function (dimension) {
		dimension = dimension || Owl.Width.Default;
		switch (dimension) {
			case Owl.Width.Inner:
			case Owl.Width.Outer:
				return this._width;
			default:
				return this._width - this.settings.stagePadding * 2 + this.settings.margin;
		}
	};

	/**
	 * Refreshes the carousel primarily for adaptive purposes.
	 * @public
	 */
	Owl.prototype.refresh = function () {
		this.enter('refreshing');
		this.trigger('refresh');

		this.setup();

		this.optionsLogic();

		this.$element.addClass(this.options.refreshClass);

		this.update();

		this.$element.removeClass(this.options.refreshClass);

		this.leave('refreshing');
		this.trigger('refreshed');
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onThrottledResize = function () {
		window.clearTimeout(this.resizeTimer);
		this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onResize = function () {
		if (!this._items.length) {
			return false;
		}

		if (this._width === this.$element.width()) {
			return false;
		}

		if (!this.isVisible()) {
			return false;
		}

		this.enter('resizing');

		if (this.trigger('resize').isDefaultPrevented()) {
			this.leave('resizing');
			return false;
		}

		this.invalidate('width');

		this.refresh();

		this.leave('resizing');
		this.trigger('resized');
	};

	/**
	 * Registers event handlers.
	 * @todo Check `msPointerEnabled`
	 * @todo #261
	 * @protected
	 */
	Owl.prototype.registerEventHandlers = function () {
		if ($.support.transition) {
			this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
		}

		if (this.settings.responsive !== false) {
			this.on(window, 'resize', this._handlers.onThrottledResize);
		}

		if (this.settings.mouseDrag) {
			this.$element.addClass(this.options.dragClass);
			this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('dragstart.owl.core selectstart.owl.core', function () {
				return false
			});
		}

		if (this.settings.touchDrag) {
			this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
		}
	};

	/**
	 * Handles `touchstart` and `mousedown` events.
	 * @todo Horizontal swipe threshold as option
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragStart = function (event) {
		var stage = null;

		if (event.which === 3) {
			return;
		}

		if ($.support.transform) {
			stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
			stage = {
				x: stage[stage.length === 16 ? 12 : 4],
				y: stage[stage.length === 16 ? 13 : 5]
			};
		} else {
			stage = this.$stage.position();
			stage = {
				x: this.settings.rtl ?
					stage.left + this.$stage.width() - this.width() + this.settings.margin : stage.left,
				y: stage.top
			};
		}

		if (this.is('animating')) {
			$.support.transform ? this.animate(stage.x) : this.$stage.stop()
			this.invalidate('position');
		}

		this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');

		this.speed(0);

		this._drag.time = new Date().getTime();
		this._drag.target = $(event.target);
		this._drag.stage.start = stage;
		this._drag.stage.current = stage;
		this._drag.pointer = this.pointer(event);

		$(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));

		$(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function (event) {
			var delta = this.difference(this._drag.pointer, this.pointer(event));

			$(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));

			if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
				return;
			}

			event.preventDefault();

			this.enter('dragging');
			this.trigger('drag');
		}, this));
	};

	/**
	 * Handles the `touchmove` and `mousemove` events.
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragMove = function (event) {
		var minimum = null,
			maximum = null,
			pull = null,
			delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this.difference(this._drag.stage.start, delta);

		if (!this.is('dragging')) {
			return;
		}

		event.preventDefault();

		if (this.settings.loop) {
			minimum = this.coordinates(this.minimum());
			maximum = this.coordinates(this.maximum() + 1) - minimum;
			stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
		} else {
			minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
			maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
			pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
			stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
		}

		this._drag.stage.current = stage;

		this.animate(stage.x);
	};

	/**
	 * Handles the `touchend` and `mouseup` events.
	 * @todo #261
	 * @todo Threshold for click event
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragEnd = function (event) {
		var delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this._drag.stage.current,
			direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';

		$(document).off('.owl.core');

		this.$element.removeClass(this.options.grabClass);

		if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
			this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
			this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
			this.invalidate('position');
			this.update();

			this._drag.direction = direction;

			if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
				this._drag.target.one('click.owl.core', function () {
					return false;
				});
			}
		}

		if (!this.is('dragging')) {
			return;
		}

		this.leave('dragging');
		this.trigger('dragged');
	};

	/**
	 * Gets absolute position of the closest item for a coordinate.
	 * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
	 * @protected
	 * @param {Number} coordinate - The coordinate in pixel.
	 * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
	 * @return {Number} - The absolute position of the closest item.
	 */
	Owl.prototype.closest = function (coordinate, direction) {
		var position = -1,
			pull = 30,
			width = this.width(),
			coordinates = this.coordinates();

		if (!this.settings.freeDrag) {
			// check closest item
			$.each(coordinates, $.proxy(function (index, value) {
				// on a left pull, check on current index
				if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
					position = index;
					// on a right pull, check on previous index
					// to do so, subtract width from value and set position = index + 1
				} else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
					position = index + 1;
				} else if (this.op(coordinate, '<', value) &&
					this.op(coordinate, '>', coordinates[index + 1] !== undefined ? coordinates[index + 1] : value - width)) {
					position = direction === 'left' ? index + 1 : index;
				}
				return position === -1;
			}, this));
		}

		if (!this.settings.loop) {
			// non loop boundries
			if (this.op(coordinate, '>', coordinates[this.minimum()])) {
				position = coordinate = this.minimum();
			} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
				position = coordinate = this.maximum();
			}
		}

		return position;
	};

	/**
	 * Animates the stage.
	 * @todo #270
	 * @public
	 * @param {Number} coordinate - The coordinate in pixels.
	 */
	Owl.prototype.animate = function (coordinate) {
		var animate = this.speed() > 0;

		this.is('animating') && this.onTransitionEnd();

		if (animate) {
			this.enter('animating');
			this.trigger('translate');
		}

		if ($.support.transform3d && $.support.transition) {
			this.$stage.css({
				transform: 'translate3d(' + coordinate + 'px,0px,0px)',
				transition: (this.speed() / 1000) + 's' + (
					this.settings.slideTransition ? ' ' + this.settings.slideTransition : ''
				)
			});
		} else if (animate) {
			this.$stage.animate({
				left: coordinate + 'px'
			}, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
		} else {
			this.$stage.css({
				left: coordinate + 'px'
			});
		}
	};

	/**
	 * Checks whether the carousel is in a specific state or not.
	 * @param {String} state - The state to check.
	 * @returns {Boolean} - The flag which indicates if the carousel is busy.
	 */
	Owl.prototype.is = function (state) {
		return this._states.current[state] && this._states.current[state] > 0;
	};

	/**
	 * Sets the absolute position of the current item.
	 * @public
	 * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
	 * @returns {Number} - The absolute position of the current item.
	 */
	Owl.prototype.current = function (position) {
		if (position === undefined) {
			return this._current;
		}

		if (this._items.length === 0) {
			return undefined;
		}

		position = this.normalize(position);

		if (this._current !== position) {
			var event = this.trigger('change', {
				property: {
					name: 'position',
					value: position
				}
			});

			if (event.data !== undefined) {
				position = this.normalize(event.data);
			}

			this._current = position;

			this.invalidate('position');

			this.trigger('changed', {
				property: {
					name: 'position',
					value: this._current
				}
			});
		}

		return this._current;
	};

	/**
	 * Invalidates the given part of the update routine.
	 * @param {String} [part] - The part to invalidate.
	 * @returns {Array.<String>} - The invalidated parts.
	 */
	Owl.prototype.invalidate = function (part) {
		if ($.type(part) === 'string') {
			this._invalidated[part] = true;
			this.is('valid') && this.leave('valid');
		}
		return $.map(this._invalidated, function (v, i) {
			return i
		});
	};

	/**
	 * Resets the absolute position of the current item.
	 * @public
	 * @param {Number} position - The absolute position of the new item.
	 */
	Owl.prototype.reset = function (position) {
		position = this.normalize(position);

		if (position === undefined) {
			return;
		}

		this._speed = 0;
		this._current = position;

		this.suppress(['translate', 'translated']);

		this.animate(this.coordinates(position));

		this.release(['translate', 'translated']);
	};

	/**
	 * Normalizes an absolute or a relative position of an item.
	 * @public
	 * @param {Number} position - The absolute or relative position to normalize.
	 * @param {Boolean} [relative=false] - Whether the given position is relative or not.
	 * @returns {Number} - The normalized position.
	 */
	Owl.prototype.normalize = function (position, relative) {
		var n = this._items.length,
			m = relative ? 0 : this._clones.length;

		if (!this.isNumeric(position) || n < 1) {
			position = undefined;
		} else if (position < 0 || position >= n + m) {
			position = ((position - m / 2) % n + n) % n + m / 2;
		}

		return position;
	};

	/**
	 * Converts an absolute position of an item into a relative one.
	 * @public
	 * @param {Number} position - The absolute position to convert.
	 * @returns {Number} - The converted position.
	 */
	Owl.prototype.relative = function (position) {
		position -= this._clones.length / 2;
		return this.normalize(position, true);
	};

	/**
	 * Gets the maximum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.maximum = function (relative) {
		var settings = this.settings,
			maximum = this._coordinates.length,
			iterator,
			reciprocalItemsWidth,
			elementWidth;

		if (settings.loop) {
			maximum = this._clones.length / 2 + this._items.length - 1;
		} else if (settings.autoWidth || settings.merge) {
			iterator = this._items.length;
			if (iterator) {
				reciprocalItemsWidth = this._items[--iterator].width();
				elementWidth = this.$element.width();
				while (iterator--) {
					reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
					if (reciprocalItemsWidth > elementWidth) {
						break;
					}
				}
			}
			maximum = iterator + 1;
		} else if (settings.center) {
			maximum = this._items.length - 1;
		} else {
			maximum = this._items.length - settings.items;
		}

		if (relative) {
			maximum -= this._clones.length / 2;
		}

		return Math.max(maximum, 0);
	};

	/**
	 * Gets the minimum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.minimum = function (relative) {
		return relative ? 0 : this._clones.length / 2;
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.items = function (position) {
		if (position === undefined) {
			return this._items.slice();
		}

		position = this.normalize(position, true);
		return this._items[position];
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.mergers = function (position) {
		if (position === undefined) {
			return this._mergers.slice();
		}

		position = this.normalize(position, true);
		return this._mergers[position];
	};

	/**
	 * Gets the absolute positions of clones for an item.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
	 */
	Owl.prototype.clones = function (position) {
		var odd = this._clones.length / 2,
			even = odd + this._items.length,
			map = function (index) {
				return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2
			};

		if (position === undefined) {
			return $.map(this._clones, function (v, i) {
				return map(i)
			});
		}

		return $.map(this._clones, function (v, i) {
			return v === position ? map(i) : null
		});
	};

	/**
	 * Sets the current animation speed.
	 * @public
	 * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
	 * @returns {Number} - The current animation speed in milliseconds.
	 */
	Owl.prototype.speed = function (speed) {
		if (speed !== undefined) {
			this._speed = speed;
		}

		return this._speed;
	};

	/**
	 * Gets the coordinate of an item.
	 * @todo The name of this method is missleanding.
	 * @public
	 * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
	 * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
	 */
	Owl.prototype.coordinates = function (position) {
		var multiplier = 1,
			newPosition = position - 1,
			coordinate;

		if (position === undefined) {
			return $.map(this._coordinates, $.proxy(function (coordinate, index) {
				return this.coordinates(index);
			}, this));
		}

		if (this.settings.center) {
			if (this.settings.rtl) {
				multiplier = -1;
				newPosition = position + 1;
			}

			coordinate = this._coordinates[position];
			coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
		} else {
			coordinate = this._coordinates[newPosition] || 0;
		}

		coordinate = Math.ceil(coordinate);

		return coordinate;
	};

	/**
	 * Calculates the speed for a translation.
	 * @protected
	 * @param {Number} from - The absolute position of the start item.
	 * @param {Number} to - The absolute position of the target item.
	 * @param {Number} [factor=undefined] - The time factor in milliseconds.
	 * @returns {Number} - The time in milliseconds for the translation.
	 */
	Owl.prototype.duration = function (from, to, factor) {
		if (factor === 0) {
			return 0;
		}

		return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
	};

	/**
	 * Slides to the specified item.
	 * @public
	 * @param {Number} position - The position of the item.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.to = function (position, speed) {
		var current = this.current(),
			revert = null,
			distance = position - this.relative(current),
			direction = (distance > 0) - (distance < 0),
			items = this._items.length,
			minimum = this.minimum(),
			maximum = this.maximum();

		if (this.settings.loop) {
			if (!this.settings.rewind && Math.abs(distance) > items / 2) {
				distance += direction * -1 * items;
			}

			position = current + distance;
			revert = ((position - minimum) % items + items) % items + minimum;

			if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
				current = revert - distance;
				position = revert;
				this.reset(current);
			}
		} else if (this.settings.rewind) {
			maximum += 1;
			position = (position % maximum + maximum) % maximum;
		} else {
			position = Math.max(minimum, Math.min(maximum, position));
		}

		this.speed(this.duration(current, position, speed));
		this.current(position);

		if (this.isVisible()) {
			this.update();
		}
	};

	/**
	 * Slides to the next item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.next = function (speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) + 1, speed);
	};

	/**
	 * Slides to the previous item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.prev = function (speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) - 1, speed);
	};

	/**
	 * Handles the end of an animation.
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onTransitionEnd = function (event) {

		// if css2 animation then event object is undefined
		if (event !== undefined) {
			event.stopPropagation();

			// Catch only owl-stage transitionEnd event
			if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
				return false;
			}
		}

		this.leave('animating');
		this.trigger('translated');
	};

	/**
	 * Gets viewport width.
	 * @protected
	 * @return {Number} - The width in pixel.
	 */
	Owl.prototype.viewport = function () {
		var width;
		if (this.options.responsiveBaseElement !== window) {
			width = $(this.options.responsiveBaseElement).width();
		} else if (window.innerWidth) {
			width = window.innerWidth;
		} else if (document.documentElement && document.documentElement.clientWidth) {
			width = document.documentElement.clientWidth;
		} else {
			console.warn('Can not detect viewport width.');
		}
		return width;
	};

	/**
	 * Replaces the current content.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The new content.
	 */
	Owl.prototype.replace = function (content) {
		this.$stage.empty();
		this._items = [];

		if (content) {
			content = (content instanceof jQuery) ? content : $(content);
		}

		if (this.settings.nestedItemSelector) {
			content = content.find('.' + this.settings.nestedItemSelector);
		}

		content.filter(function () {
			return this.nodeType === 1;
		}).each($.proxy(function (index, item) {
			item = this.prepare(item);
			this.$stage.append(item);
			this._items.push(item);
			this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}, this));

		this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

		this.invalidate('items');
	};

	/**
	 * Adds an item.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The item content to add.
	 * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
	 */
	Owl.prototype.add = function (content, position) {
		var current = this.relative(this._current);

		position = position === undefined ? this._items.length : this.normalize(position, true);
		content = content instanceof jQuery ? content : $(content);

		this.trigger('add', {
			content: content,
			position: position
		});

		content = this.prepare(content);

		if (this._items.length === 0 || position === this._items.length) {
			this._items.length === 0 && this.$stage.append(content);
			this._items.length !== 0 && this._items[position - 1].after(content);
			this._items.push(content);
			this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		} else {
			this._items[position].before(content);
			this._items.splice(position, 0, content);
			this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}

		this._items[current] && this.reset(this._items[current].index());

		this.invalidate('items');

		this.trigger('added', {
			content: content,
			position: position
		});
	};

	/**
	 * Removes an item by its position.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {Number} position - The relative position of the item to remove.
	 */
	Owl.prototype.remove = function (position) {
		position = this.normalize(position, true);

		if (position === undefined) {
			return;
		}

		this.trigger('remove', {
			content: this._items[position],
			position: position
		});

		this._items[position].remove();
		this._items.splice(position, 1);
		this._mergers.splice(position, 1);

		this.invalidate('items');

		this.trigger('removed', {
			content: null,
			position: position
		});
	};

	/**
	 * Preloads images with auto width.
	 * @todo Replace by a more generic approach
	 * @protected
	 */
	Owl.prototype.preloadAutoWidthImages = function (images) {
		images.each($.proxy(function (i, element) {
			this.enter('pre-loading');
			element = $(element);
			$(new Image()).one('load', $.proxy(function (e) {
				element.attr('src', e.target.src);
				element.css('opacity', 1);
				this.leave('pre-loading');
				!this.is('pre-loading') && !this.is('initializing') && this.refresh();
			}, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
		}, this));
	};

	/**
	 * Destroys the carousel.
	 * @public
	 */
	Owl.prototype.destroy = function () {

		this.$element.off('.owl.core');
		this.$stage.off('.owl.core');
		$(document).off('.owl.core');

		if (this.settings.responsive !== false) {
			window.clearTimeout(this.resizeTimer);
			this.off(window, 'resize', this._handlers.onThrottledResize);
		}

		for (var i in this._plugins) {
			this._plugins[i].destroy();
		}

		this.$stage.children('.cloned').remove();

		this.$stage.unwrap();
		this.$stage.children().contents().unwrap();
		this.$stage.children().unwrap();
		this.$stage.remove();
		this.$element
			.removeClass(this.options.refreshClass)
			.removeClass(this.options.loadingClass)
			.removeClass(this.options.loadedClass)
			.removeClass(this.options.rtlClass)
			.removeClass(this.options.dragClass)
			.removeClass(this.options.grabClass)
			.attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
			.removeData('owl.carousel');
	};

	/**
	 * Operators to calculate right-to-left and left-to-right.
	 * @protected
	 * @param {Number} [a] - The left side operand.
	 * @param {String} [o] - The operator.
	 * @param {Number} [b] - The right side operand.
	 */
	Owl.prototype.op = function (a, o, b) {
		var rtl = this.settings.rtl;
		switch (o) {
			case '<':
				return rtl ? a > b : a < b;
			case '>':
				return rtl ? a < b : a > b;
			case '>=':
				return rtl ? a <= b : a >= b;
			case '<=':
				return rtl ? a >= b : a <= b;
			default:
				break;
		}
	};

	/**
	 * Attaches to an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The event handler to attach.
	 * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
	 */
	Owl.prototype.on = function (element, event, listener, capture) {
		if (element.addEventListener) {
			element.addEventListener(event, listener, capture);
		} else if (element.attachEvent) {
			element.attachEvent('on' + event, listener);
		}
	};

	/**
	 * Detaches from an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The attached event handler to detach.
	 * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
	 */
	Owl.prototype.off = function (element, event, listener, capture) {
		if (element.removeEventListener) {
			element.removeEventListener(event, listener, capture);
		} else if (element.detachEvent) {
			element.detachEvent('on' + event, listener);
		}
	};

	/**
	 * Triggers a public event.
	 * @todo Remove `status`, `relatedTarget` should be used instead.
	 * @protected
	 * @param {String} name - The event name.
	 * @param {*} [data=null] - The event data.
	 * @param {String} [namespace=carousel] - The event namespace.
	 * @param {String} [state] - The state which is associated with the event.
	 * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
	 * @returns {Event} - The event arguments.
	 */
	Owl.prototype.trigger = function (name, data, namespace, state, enter) {
		var status = {
				item: {
					count: this._items.length,
					index: this.current()
				}
			},
			handler = $.camelCase(
				$.grep(['on', name, namespace], function (v) {
					return v
				})
				.join('-').toLowerCase()
			),
			event = $.Event(
				[name, 'owl', namespace || 'carousel'].join('.').toLowerCase(),
				$.extend({
					relatedTarget: this
				}, status, data)
			);

		if (!this._supress[name]) {
			$.each(this._plugins, function (name, plugin) {
				if (plugin.onTrigger) {
					plugin.onTrigger(event);
				}
			});

			this.register({
				type: Owl.Type.Event,
				name: name
			});
			this.$element.trigger(event);

			if (this.settings && typeof this.settings[handler] === 'function') {
				this.settings[handler].call(this, event);
			}
		}

		return event;
	};

	/**
	 * Enters a state.
	 * @param name - The state name.
	 */
	Owl.prototype.enter = function (name) {
		$.each([name].concat(this._states.tags[name] || []), $.proxy(function (i, name) {
			if (this._states.current[name] === undefined) {
				this._states.current[name] = 0;
			}

			this._states.current[name]++;
		}, this));
	};

	/**
	 * Leaves a state.
	 * @param name - The state name.
	 */
	Owl.prototype.leave = function (name) {
		$.each([name].concat(this._states.tags[name] || []), $.proxy(function (i, name) {
			this._states.current[name]--;
		}, this));
	};

	/**
	 * Registers an event or state.
	 * @public
	 * @param {Object} object - The event or state to register.
	 */
	Owl.prototype.register = function (object) {
		if (object.type === Owl.Type.Event) {
			if (!$.event.special[object.name]) {
				$.event.special[object.name] = {};
			}

			if (!$.event.special[object.name].owl) {
				var _default = $.event.special[object.name]._default;
				$.event.special[object.name]._default = function (e) {
					if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
						return _default.apply(this, arguments);
					}
					return e.namespace && e.namespace.indexOf('owl') > -1;
				};
				$.event.special[object.name].owl = true;
			}
		} else if (object.type === Owl.Type.State) {
			if (!this._states.tags[object.name]) {
				this._states.tags[object.name] = object.tags;
			} else {
				this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
			}

			this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function (tag, i) {
				return $.inArray(tag, this._states.tags[object.name]) === i;
			}, this));
		}
	};

	/**
	 * Suppresses events.
	 * @protected
	 * @param {Array.<String>} events - The events to suppress.
	 */
	Owl.prototype.suppress = function (events) {
		$.each(events, $.proxy(function (index, event) {
			this._supress[event] = true;
		}, this));
	};

	/**
	 * Releases suppressed events.
	 * @protected
	 * @param {Array.<String>} events - The events to release.
	 */
	Owl.prototype.release = function (events) {
		$.each(events, $.proxy(function (index, event) {
			delete this._supress[event];
		}, this));
	};

	/**
	 * Gets unified pointer coordinates from event.
	 * @todo #261
	 * @protected
	 * @param {Event} - The `mousedown` or `touchstart` event.
	 * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
	 */
	Owl.prototype.pointer = function (event) {
		var result = {
			x: null,
			y: null
		};

		event = event.originalEvent || event || window.event;

		event = event.touches && event.touches.length ?
			event.touches[0] : event.changedTouches && event.changedTouches.length ?
			event.changedTouches[0] : event;

		if (event.pageX) {
			result.x = event.pageX;
			result.y = event.pageY;
		} else {
			result.x = event.clientX;
			result.y = event.clientY;
		}

		return result;
	};

	/**
	 * Determines if the input is a Number or something that can be coerced to a Number
	 * @protected
	 * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
	 * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
	 */
	Owl.prototype.isNumeric = function (number) {
		return !isNaN(parseFloat(number));
	};

	/**
	 * Gets the difference of two vectors.
	 * @todo #261
	 * @protected
	 * @param {Object} - The first vector.
	 * @param {Object} - The second vector.
	 * @returns {Object} - The difference.
	 */
	Owl.prototype.difference = function (first, second) {
		return {
			x: first.x - second.x,
			y: first.y - second.y
		};
	};

	/**
	 * The jQuery Plugin for the Owl Carousel
	 * @todo Navigation plugin `next` and `prev`
	 * @public
	 */
	$.fn.owlCarousel = function (option) {
		var args = Array.prototype.slice.call(arguments, 1);

		return this.each(function () {
			var $this = $(this),
				data = $this.data('owl.carousel');

			if (!data) {
				data = new Owl(this, typeof option == 'object' && option);
				$this.data('owl.carousel', data);

				$.each([
					'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
				], function (i, event) {
					data.register({
						type: Owl.Type.Event,
						name: event
					});
					data.$element.on(event + '.owl.carousel.core', $.proxy(function (e) {
						if (e.namespace && e.relatedTarget !== this) {
							this.suppress([event]);
							data[event].apply(this, [].slice.call(arguments, 1));
							this.release([event]);
						}
					}, data));
				});
			}

			if (typeof option == 'string' && option.charAt(0) !== '_') {
				data[option].apply(data, args);
			}
		});
	};

	/**
	 * The constructor for the jQuery Plugin
	 * @public
	 */
	$.fn.owlCarousel.Constructor = Owl;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoRefresh Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){/**
	 * Creates the auto refresh plugin.
	 * @class The Auto Refresh Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoRefresh = function (carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Refresh interval.
		 * @protected
		 * @type {number}
		 */
		this._interval = null;

		/**
		 * Whether the element is currently visible or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._visible = null;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._core.settings.autoRefresh) {
					this.watch();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoRefresh.Defaults = {
		autoRefresh: true,
		autoRefreshInterval: 500
	};

	/**
	 * Watches the element.
	 */
	AutoRefresh.prototype.watch = function () {
		if (this._interval) {
			return;
		}

		this._visible = this._core.isVisible();
		this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
	};

	/**
	 * Refreshes the element.
	 */
	AutoRefresh.prototype.refresh = function () {
		if (this._core.isVisible() === this._visible) {
			return;
		}

		this._visible = !this._visible;

		this._core.$element.toggleClass('owl-hidden', !this._visible);

		this._visible && (this._core.invalidate('width') && this._core.refresh());
	};

	/**
	 * Destroys the plugin.
	 */
	AutoRefresh.prototype.destroy = function () {
		var handler, property;

		window.clearInterval(this._interval);

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;

})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){/**
	 * Creates the lazy plugin.
	 * @class The Lazy Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Lazy = function (carousel) {

		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Already loaded items.
		 * @protected
		 * @type {Array.<jQuery>}
		 */
		this._loaded = [];

		/**
		 * Event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function (e) {
				if (!e.namespace) {
					return;
				}

				if (!this._core.settings || !this._core.settings.lazyLoad) {
					return;
				}

				if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
					var settings = this._core.settings,
						n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
						i = ((settings.center && n * -1) || 0),
						position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
						clones = this._core.clones().length,
						load = $.proxy(function (i, v) {
							this.load(v)
						}, this);
					//TODO: Need documentation for this new option
					if (settings.lazyLoadEager > 0) {
						n += settings.lazyLoadEager;
						// If the carousel is looping also preload images that are to the "left"
						if (settings.loop) {
							position -= settings.lazyLoadEager;
							n++;
						}
					}

					while (i++ < n) {
						this.load(clones / 2 + this._core.relative(position));
						clones && $.each(this._core.clones(this._core.relative(position)), load);
						position++;
					}
				}
			}, this)
		};

		// set the default options
		this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

		// register event handler
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Lazy.Defaults = {
		lazyLoad: false,
		lazyLoadEager: 0
	};

	/**
	 * Loads all resources of an item at the specified position.
	 * @param {Number} position - The absolute position of the item.
	 * @protected
	 */
	Lazy.prototype.load = function (position) {
		var $item = this._core.$stage.children().eq(position),
			$elements = $item && $item.find('.owl-lazy');

		if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
			return;
		}

		$elements.each($.proxy(function (index, element) {
			var $element = $(element),
				image,
				url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src') || $element.attr('data-srcset');

			this._core.trigger('load', {
				element: $element,
				url: url
			}, 'lazy');

			if ($element.is('img')) {
				$element.one('load.owl.lazy', $.proxy(function () {
					$element.css('opacity', 1);
					this._core.trigger('loaded', {
						element: $element,
						url: url
					}, 'lazy');
				}, this)).attr('src', url);
			} else if ($element.is('source')) {
				$element.one('load.owl.lazy', $.proxy(function () {
					this._core.trigger('loaded', {
						element: $element,
						url: url
					}, 'lazy');
				}, this)).attr('srcset', url);
			} else {
				image = new Image();
				image.onload = $.proxy(function () {
					$element.css({
						'background-image': 'url("' + url + '")',
						'opacity': '1'
					});
					this._core.trigger('loaded', {
						element: $element,
						url: url
					}, 'lazy');
				}, this);
				image.src = url;
			}
		}, this));

		this._loaded.push($item.get(0));
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Lazy.prototype.destroy = function () {
		var handler, property;

		for (handler in this.handlers) {
			this._core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){/**
	 * Creates the auto height plugin.
	 * @class The Auto Height Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoHeight = function (carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		this._previousHeight = null;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._core.settings.autoHeight) {
					this.update();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._core.settings.autoHeight && e.property.name === 'position') {
					this.update();
				}
			}, this),
			'loaded.owl.lazy': $.proxy(function (e) {
				if (e.namespace && this._core.settings.autoHeight &&
					e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
					this.update();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
		this._intervalId = null;
		var refThis = this;

		// These changes have been taken from a PR by gavrochelegnou proposed in #1575
		// and have been made compatible with the latest jQuery version
		$(window).on('load', function () {
			if (refThis._core.settings.autoHeight) {
				refThis.update();
			}
		});

		// Autoresize the height of the carousel when window is resized
		// When carousel has images, the height is dependent on the width
		// and should also change on resize
		$(window).resize(function () {
			if (refThis._core.settings.autoHeight) {
				if (refThis._intervalId != null) {
					clearTimeout(refThis._intervalId);
				}

				refThis._intervalId = setTimeout(function () {
					refThis.update();
				}, 250);
			}
		});

	};

	/**
	 * Default options.
	 * @public
	 */
	AutoHeight.Defaults = {
		autoHeight: false,
		autoHeightClass: 'owl-height'
	};

	/**
	 * Updates the view.
	 */
	AutoHeight.prototype.update = function () {
		var start = this._core._current,
			end = start + this._core.settings.items,
			lazyLoadEnabled = this._core.settings.lazyLoad,
			visible = this._core.$stage.children().toArray().slice(start, end),
			heights = [],
			maxheight = 0;

		$.each(visible, function (index, item) {
			heights.push($(item).height());
		});

		maxheight = Math.max.apply(null, heights);

		if (maxheight <= 1 && lazyLoadEnabled && this._previousHeight) {
			maxheight = this._previousHeight;
		}

		this._previousHeight = maxheight;

		this._core.$stage.parent()
			.height(maxheight)
			.addClass(this._core.settings.autoHeightClass);
	};

	AutoHeight.prototype.destroy = function () {
		var handler, property;

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] !== 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){/**
	 * Creates the video plugin.
	 * @class The Video Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Video = function (carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Cache all video URLs.
		 * @protected
		 * @type {Object}
		 */
		this._videos = {};

		/**
		 * Current playing item.
		 * @protected
		 * @type {jQuery}
		 */
		this._playing = null;

		/**
		 * All event handlers.
		 * @todo The cloned content removale is too late
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function (e) {
				if (e.namespace) {
					this._core.register({
						type: 'state',
						name: 'playing',
						tags: ['interacting']
					});
				}
			}, this),
			'resize.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
					e.preventDefault();
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._core.is('resizing')) {
					this._core.$stage.find('.cloned .owl-video-frame').remove();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function (e) {
				if (e.namespace && e.property.name === 'position' && this._playing) {
					this.stop();
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function (e) {
				if (!e.namespace) {
					return;
				}

				var $element = $(e.content).find('.owl-video');

				if ($element.length) {
					$element.css('display', 'none');
					this.fetch($element, $(e.content));
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Video.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);

		this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function (e) {
			this.play(e);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Video.Defaults = {
		video: false,
		videoHeight: false,
		videoWidth: false
	};

	/**
	 * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {jQuery} item - The item containing the video.
	 */
	Video.prototype.fetch = function (target, item) {
		var type = (function () {
				if (target.attr('data-vimeo-id')) {
					return 'vimeo';
				} else if (target.attr('data-vzaar-id')) {
					return 'vzaar'
				} else {
					return 'youtube';
				}
			})(),
			id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
			width = target.attr('data-width') || this._core.settings.videoWidth,
			height = target.attr('data-height') || this._core.settings.videoHeight,
			url = target.attr('href');

		if (url) {

			/*
					Parses the id's out of the following urls (and probably more):
					https://www.youtube.com/watch?v=:id
					https://youtu.be/:id
					https://vimeo.com/:id
					https://vimeo.com/channels/:channel/:id
					https://vimeo.com/groups/:group/videos/:id
					https://app.vzaar.com/videos/:id

					Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
			*/

			id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

			if (id[3].indexOf('youtu') > -1) {
				type = 'youtube';
			} else if (id[3].indexOf('vimeo') > -1) {
				type = 'vimeo';
			} else if (id[3].indexOf('vzaar') > -1) {
				type = 'vzaar';
			} else {
				throw new Error('Video URL not supported.');
			}
			id = id[6];
		} else {
			throw new Error('Missing video URL.');
		}

		this._videos[url] = {
			type: type,
			id: id,
			width: width,
			height: height
		};

		item.attr('data-video', url);

		this.thumbnail(target, this._videos[url]);
	};

	/**
	 * Creates video thumbnail.
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {Object} info - The video info object.
	 * @see `fetch`
	 */
	Video.prototype.thumbnail = function (target, video) {
		var tnLink,
			icon,
			path,
			dimensions = video.width && video.height ? 'width:' + video.width + 'px;height:' + video.height + 'px;' : '',
			customTn = target.find('img'),
			srcType = 'src',
			lazyClass = '',
			settings = this._core.settings,
			create = function (path) {
				icon = '<div class="owl-video-play-icon"></div>';

				if (settings.lazyLoad) {
					tnLink = $('<div/>', {
						"class": 'owl-video-tn ' + lazyClass,
						"srcType": path
					});
				} else {
					tnLink = $('<div/>', {
						"class": "owl-video-tn",
						"style": 'opacity:1;background-image:url(' + path + ')'
					});
				}
				target.after(tnLink);
				target.after(icon);
			};

		// wrap video content into owl-video-wrapper div
		target.wrap($('<div/>', {
			"class": "owl-video-wrapper",
			"style": dimensions
		}));

		if (this._core.settings.lazyLoad) {
			srcType = 'data-src';
			lazyClass = 'owl-lazy';
		}

		// custom thumbnail
		if (customTn.length) {
			create(customTn.attr(srcType));
			customTn.remove();
			return false;
		}

		if (video.type === 'youtube') {
			path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
			create(path);
		} else if (video.type === 'vimeo') {
			$.ajax({
				type: 'GET',
				url: '//vimeo.com/api/v2/video/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function (data) {
					path = data[0].thumbnail_large;
					create(path);
				}
			});
		} else if (video.type === 'vzaar') {
			$.ajax({
				type: 'GET',
				url: '//vzaar.com/api/videos/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function (data) {
					path = data.framegrab_url;
					create(path);
				}
			});
		}
	};

	/**
	 * Stops the current video.
	 * @public
	 */
	Video.prototype.stop = function () {
		this._core.trigger('stop', null, 'video');
		this._playing.find('.owl-video-frame').remove();
		this._playing.removeClass('owl-video-playing');
		this._playing = null;
		this._core.leave('playing');
		this._core.trigger('stopped', null, 'video');
	};

	/**
	 * Starts the current video.
	 * @public
	 * @param {Event} event - The event arguments.
	 */
	Video.prototype.play = function (event) {
		var target = $(event.target),
			item = target.closest('.' + this._core.settings.itemClass),
			video = this._videos[item.attr('data-video')],
			width = video.width || '100%',
			height = video.height || this._core.$stage.height(),
			html,
			iframe;

		if (this._playing) {
			return;
		}

		this._core.enter('playing');
		this._core.trigger('play', null, 'video');

		item = this._core.items(this._core.relative(item.index()));

		this._core.reset(item.index());

		html = $('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>');
		html.attr('height', height);
		html.attr('width', width);
		if (video.type === 'youtube') {
			html.attr('src', '//www.youtube.com/embed/' + video.id + '?autoplay=1&rel=0&v=' + video.id);
		} else if (video.type === 'vimeo') {
			html.attr('src', '//player.vimeo.com/video/' + video.id + '?autoplay=1');
		} else if (video.type === 'vzaar') {
			html.attr('src', '//view.vzaar.com/' + video.id + '/player?autoplay=true');
		}

		iframe = $(html).wrap('<div class="owl-video-frame" />').insertAfter(item.find('.owl-video'));

		this._playing = item.addClass('owl-video-playing');
	};

	/**
	 * Checks whether an video is currently in full screen mode or not.
	 * @todo Bad style because looks like a readonly method but changes members.
	 * @protected
	 * @returns {Boolean}
	 */
	Video.prototype.isInFullScreen = function () {
		var element = document.fullscreenElement || document.mozFullScreenElement ||
			document.webkitFullscreenElement;

		return element && $(element).parent().hasClass('owl-video-frame');
	};

	/**
	 * Destroys the plugin.
	 */
	Video.prototype.destroy = function () {
		var handler, property;

		this._core.$element.off('click.owl.video');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Video = Video;

})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){/**
	 * Creates the animate plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Animate = function (scope) {
		this.core = scope;
		this.core.options = $.extend({}, Animate.Defaults, this.core.options);
		this.swapping = true;
		this.previous = undefined;
		this.next = undefined;

		this.handlers = {
			'change.owl.carousel': $.proxy(function (e) {
				if (e.namespace && e.property.name == 'position') {
					this.previous = this.core.current();
					this.next = e.property.value;
				}
			}, this),
			'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function (e) {
				if (e.namespace) {
					this.swapping = e.type == 'translated';
				}
			}, this),
			'translate.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
					this.swap();
				}
			}, this)
		};

		this.core.$element.on(this.handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Animate.Defaults = {
		animateOut: false,
		animateIn: false
	};

	/**
	 * Toggles the animation classes whenever an translations starts.
	 * @protected
	 * @returns {Boolean|undefined}
	 */
	Animate.prototype.swap = function () {

		if (this.core.settings.items !== 1) {
			return;
		}

		if (!$.support.animation || !$.support.transition) {
			return;
		}

		this.core.speed(0);

		var left,
			clear = $.proxy(this.clear, this),
			previous = this.core.$stage.children().eq(this.previous),
			next = this.core.$stage.children().eq(this.next),
			incoming = this.core.settings.animateIn,
			outgoing = this.core.settings.animateOut;

		if (this.core.current() === this.previous) {
			return;
		}

		if (outgoing) {
			left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
			previous.one($.support.animation.end, clear)
				.css({
					'left': left + 'px'
				})
				.addClass('animated owl-animated-out')
				.addClass(outgoing);
		}

		if (incoming) {
			next.one($.support.animation.end, clear)
				.addClass('animated owl-animated-in')
				.addClass(incoming);
		}
	};

	Animate.prototype.clear = function (e) {
		$(e.target).css({
				'left': ''
			})
			.removeClass('animated owl-animated-out owl-animated-in')
			.removeClass(this.core.settings.animateIn)
			.removeClass(this.core.settings.animateOut);
		this.core.onTransitionEnd();
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Animate.prototype.destroy = function () {
		var handler, property;

		for (handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @author David Deutsch
 * @author Tom De Caluwé
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){/**
	 * Creates the autoplay plugin.
	 * @class The Autoplay Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Autoplay = function (carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * The autoplay timeout id.
		 * @type {Number}
		 */
		this._call = null;

		/**
		 * Depending on the state of the plugin, this variable contains either
		 * the start time of the timer or the current timer value if it's
		 * paused. Since we start in a paused state we initialize the timer
		 * value.
		 * @type {Number}
		 */
		this._time = 0;

		/**
		 * Stores the timeout currently used.
		 * @type {Number}
		 */
		this._timeout = 0;

		/**
		 * Indicates whenever the autoplay is paused.
		 * @type {Boolean}
		 */
		this._paused = true;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'changed.owl.carousel': $.proxy(function (e) {
				if (e.namespace && e.property.name === 'settings') {
					if (this._core.settings.autoplay) {
						this.play();
					} else {
						this.stop();
					}
				} else if (e.namespace && e.property.name === 'position' && this._paused) {
					// Reset the timer. This code is triggered when the position
					// of the carousel was changed through user interaction.
					this._time = 0;
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._core.settings.autoplay) {
					this.play();
				}
			}, this),
			'play.owl.autoplay': $.proxy(function (e, t, s) {
				if (e.namespace) {
					this.play(t, s);
				}
			}, this),
			'stop.owl.autoplay': $.proxy(function (e) {
				if (e.namespace) {
					this.stop();
				}
			}, this),
			'mouseover.owl.autoplay': $.proxy(function () {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'mouseleave.owl.autoplay': $.proxy(function () {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.play();
				}
			}, this),
			'touchstart.owl.core': $.proxy(function () {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'touchend.owl.core': $.proxy(function () {
				if (this._core.settings.autoplayHoverPause) {
					this.play();
				}
			}, this)
		};

		// register event handlers
		this._core.$element.on(this._handlers);

		// set default options
		this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
	};

	/**
	 * Default options.
	 * @public
	 */
	Autoplay.Defaults = {
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		autoplaySpeed: false
	};

	/**
	 * Transition to the next slide and set a timeout for the next transition.
	 * @private
	 * @param {Number} [speed] - The animation speed for the animations.
	 */
	Autoplay.prototype._next = function (speed) {
		this._call = window.setTimeout(
			$.proxy(this._next, this, speed),
			this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()
		);

		if (this._core.is('interacting') || document.hidden) {
			return;
		}
		this._core.next(speed || this._core.settings.autoplaySpeed);
	}

	/**
	 * Reads the current timer value when the timer is playing.
	 * @public
	 */
	Autoplay.prototype.read = function () {
		return new Date().getTime() - this._time;
	};

	/**
	 * Starts the autoplay.
	 * @public
	 * @param {Number} [timeout] - The interval before the next animation starts.
	 * @param {Number} [speed] - The animation speed for the animations.
	 */
	Autoplay.prototype.play = function (timeout, speed) {
		var elapsed;

		if (!this._core.is('rotating')) {
			this._core.enter('rotating');
		}

		timeout = timeout || this._core.settings.autoplayTimeout;

		// Calculate the elapsed time since the last transition. If the carousel
		// wasn't playing this calculation will yield zero.
		elapsed = Math.min(this._time % (this._timeout || timeout), timeout);

		if (this._paused) {
			// Start the clock.
			this._time = this.read();
			this._paused = false;
		} else {
			// Clear the active timeout to allow replacement.
			window.clearTimeout(this._call);
		}

		// Adjust the origin of the timer to match the new timeout value.
		this._time += this.read() % timeout - elapsed;

		this._timeout = timeout;
		this._call = window.setTimeout($.proxy(this._next, this, speed), timeout - elapsed);
	};

	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.stop = function () {
		if (this._core.is('rotating')) {
			// Reset the clock.
			this._time = 0;
			this._paused = true;

			window.clearTimeout(this._call);
			this._core.leave('rotating');
		}
	};

	/**
	 * Pauses the autoplay.
	 * @public
	 */
	Autoplay.prototype.pause = function () {
		if (this._core.is('rotating') && !this._paused) {
			// Pause the clock.
			this._time = this.read();
			this._paused = true;

			window.clearTimeout(this._call);
		}
	};

	/**
	 * Destroys the plugin.
	 */
	Autoplay.prototype.destroy = function () {
		var handler, property;

		this.stop();

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){'use strict';/**
	 * Creates the navigation plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} carousel - The Owl Carousel.
	 */
	var Navigation = function (carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Indicates whether the plugin is initialized or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._initialized = false;

		/**
		 * The current paging indexes.
		 * @protected
		 * @type {Array}
		 */
		this._pages = [];

		/**
		 * All DOM elements of the user interface.
		 * @protected
		 * @type {Object}
		 */
		this._controls = {};

		/**
		 * Markup for an indicator.
		 * @protected
		 * @type {Array.<String>}
		 */
		this._templates = [];

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * Overridden methods of the carousel.
		 * @protected
		 * @type {Object}
		 */
		this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		};

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'prepared.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
						$(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
				}
			}, this),
			'added.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 0, this._templates.pop());
				}
			}, this),
			'remove.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 1);
				}
			}, this),
			'changed.owl.carousel': $.proxy(function (e) {
				if (e.namespace && e.property.name == 'position') {
					this.draw();
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function (e) {
				if (e.namespace && !this._initialized) {
					this._core.trigger('initialize', null, 'navigation');
					this.initialize();
					this.update();
					this.draw();
					this._initialized = true;
					this._core.trigger('initialized', null, 'navigation');
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._initialized) {
					this._core.trigger('refresh', null, 'navigation');
					this.update();
					this.draw();
					this._core.trigger('refreshed', null, 'navigation');
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

		// register event handlers
		this.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 * @todo Rename `slideBy` to `navBy`
	 */
	Navigation.Defaults = {
		nav: false,
		navText: [
			'<span aria-label="' + 'Previous' + '">‹</span>',
			'<span aria-label="' + 'Next' + '">›</span>'
		],
		navSpeed: false,
		navElement: 'button type="button" role="presentation"',
		navContainer: false,
		navContainerClass: 'owl-nav',
		navClass: [
			'owl-prev',
			'owl-next'
		],
		slideBy: 1,
		dotClass: 'owl-dot',
		dotsClass: 'owl-dots',
		dots: true,
		dotsEach: false,
		dotsData: false,
		dotsSpeed: false,
		dotsContainer: false
	};

	/**
	 * Initializes the layout of the plugin and extends the carousel.
	 * @protected
	 */
	Navigation.prototype.initialize = function () {
		var override,
			settings = this._core.settings;

		// create DOM structure for relative navigation
		this._controls.$relative = (settings.navContainer ? $(settings.navContainer) :
			$('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$previous = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[0])
			.html(settings.navText[0])
			.prependTo(this._controls.$relative)
			.on('click', $.proxy(function (e) {
				this.prev(settings.navSpeed);
			}, this));
		this._controls.$next = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[1])
			.html(settings.navText[1])
			.appendTo(this._controls.$relative)
			.on('click', $.proxy(function (e) {
				this.next(settings.navSpeed);
			}, this));

		// create DOM structure for absolute navigation
		if (!settings.dotsData) {
			this._templates = [$('<button role="button">')
				.addClass(settings.dotClass)
				.append($('<span>'))
				.prop('outerHTML')
			];
		}

		this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer) :
			$('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$absolute.on('click', 'button', $.proxy(function (e) {
			var index = $(e.target).parent().is(this._controls.$absolute) ?
				$(e.target).index() : $(e.target).parent().index();

			e.preventDefault();

			this.to(index, settings.dotsSpeed);
		}, this));

		/*$el.on('focusin', function() {
			$(document).off(".carousel");

			$(document).on('keydown.carousel', function(e) {
				if(e.keyCode == 37) {
					$el.trigger('prev.owl')
				}
				if(e.keyCode == 39) {
					$el.trigger('next.owl')
				}
			});
		});*/

		// override public methods of the carousel
		for (override in this._overrides) {
			this._core[override] = $.proxy(this[override], this);
		}
	};

	/**
	 * Destroys the plugin.
	 * @protected
	 */
	Navigation.prototype.destroy = function () {
		var handler, control, property, override, settings;
		settings = this._core.settings;

		for (handler in this._handlers) {
			this.$element.off(handler, this._handlers[handler]);
		}
		for (control in this._controls) {
			if (control === '$relative' && settings.navContainer) {
				this._controls[control].html('');
			} else {
				this._controls[control].remove();
			}
		}
		for (override in this.overides) {
			this._core[override] = this._overrides[override];
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	/**
	 * Updates the internal state.
	 * @protected
	 */
	Navigation.prototype.update = function () {
		var i, j, k,
			lower = this._core.clones().length / 2,
			upper = lower + this._core.items().length,
			maximum = this._core.maximum(true),
			settings = this._core.settings,
			size = settings.center || settings.autoWidth || settings.dotsData ?
			1 : settings.dotsEach || settings.items;

		if (settings.slideBy !== 'page') {
			settings.slideBy = Math.min(settings.slideBy, settings.items);
		}

		if (settings.dots || settings.slideBy == 'page') {
			this._pages = [];

			for (i = lower, j = 0, k = 0; i < upper; i++) {
				if (j >= size || j === 0) {
					this._pages.push({
						start: Math.min(maximum, i - lower),
						end: i - lower + size - 1
					});
					if (Math.min(maximum, i - lower) === maximum) {
						break;
					}
					j = 0, ++k;
				}
				j += this._core.mergers(this._core.relative(i));
			}
		}
	};

	/**
	 * Draws the user interface.
	 * @todo The option `dotsData` wont work.
	 * @protected
	 */
	Navigation.prototype.draw = function () {
		var difference,
			settings = this._core.settings,
			disabled = this._core.items().length <= settings.items,
			index = this._core.relative(this._core.current()),
			loop = settings.loop || settings.rewind;

		this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);

		if (settings.nav) {
			this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
			this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
		}

		this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);

		if (settings.dots) {
			difference = this._pages.length - this._controls.$absolute.children().length;

			if (settings.dotsData && difference !== 0) {
				this._controls.$absolute.html(this._templates.join(''));
			} else if (difference > 0) {
				this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
			} else if (difference < 0) {
				this._controls.$absolute.children().slice(difference).remove();
			}

			this._controls.$absolute.find('.active').removeClass('active');
			this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
		}
	};

	/**
	 * Extends event data.
	 * @protected
	 * @param {Event} event - The event object which gets thrown.
	 */
	Navigation.prototype.onTrigger = function (event) {
		var settings = this._core.settings;

		event.page = {
			index: $.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: settings && (settings.center || settings.autoWidth || settings.dotsData ?
				1 : settings.dotsEach || settings.items)
		};
	};

	/**
	 * Gets the current page position of the carousel.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.current = function () {
		var current = this._core.relative(this._core.current());
		return $.grep(this._pages, $.proxy(function (page, index) {
			return page.start <= current && page.end >= current;
		}, this)).pop();
	};

	/**
	 * Gets the current succesor/predecessor position.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.getPosition = function (successor) {
		var position, length,
			settings = this._core.settings;

		if (settings.slideBy == 'page') {
			position = $.inArray(this.current(), this._pages);
			length = this._pages.length;
			successor ? ++position : --position;
			position = this._pages[((position % length) + length) % length].start;
		} else {
			position = this._core.relative(this._core.current());
			length = this._core.items().length;
			successor ? position += settings.slideBy : position -= settings.slideBy;
		}

		return position;
	};

	/**
	 * Slides to the next item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.next = function (speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
	};

	/**
	 * Slides to the previous item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.prev = function (speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
	};

	/**
	 * Slides to the specified item or page.
	 * @public
	 * @param {Number} position - The position of the item or page.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
	 */
	Navigation.prototype.to = function (position, speed, standard) {
		var length;

		if (!standard && this._pages.length) {
			length = this._pages.length;
			$.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
		} else {
			$.proxy(this._overrides.to, this._core)(position, speed);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){'use strict';/**
	 * Creates the hash plugin.
	 * @class The Hash Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Hash = function (carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Hash index for the items.
		 * @protected
		 * @type {Object}
		 */
		this._hashes = {};

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._core.settings.startPosition === 'URLHash') {
					$(window).trigger('hashchange.owl.navigation');
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function (e) {
				if (e.namespace) {
					var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');

					if (!hash) {
						return;
					}

					this._hashes[hash] = e.content;
				}
			}, this),
			'changed.owl.carousel': $.proxy(function (e) {
				if (e.namespace && e.property.name === 'position') {
					var current = this._core.items(this._core.relative(this._core.current())),
						hash = $.map(this._hashes, function (item, hash) {
							return item === current ? hash : null;
						}).join();

					if (!hash || window.location.hash.slice(1) === hash) {
						return;
					}

					window.location.hash = hash;
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Hash.Defaults, this._core.options);

		// register the event handlers
		this.$element.on(this._handlers);

		// register event listener for hash navigation
		$(window).on('hashchange.owl.navigation', $.proxy(function (e) {
			var hash = window.location.hash.substring(1),
				items = this._core.$stage.children(),
				position = this._hashes[hash] && items.index(this._hashes[hash]);

			if (position === undefined || position === this._core.current()) {
				return;
			}

			this._core.to(this._core.relative(position), false, true);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Hash.Defaults = {
		URLhashListener: false
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Hash.prototype.destroy = function () {
		var handler, property;

		$(window).off('hashchange.owl.navigation');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

})(window.Zepto || window.jQuery, window, document);

/**
 * Support Plugin
 *
 * @version 2.3.4
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){var style=$('<support>').get(0).style,prefixes='Webkit Moz O ms'.split(' '),events={transition:{end:{WebkitTransition:'webkitTransitionEnd',MozTransition:'transitionend',OTransition:'oTransitionEnd',transition:'transitionend'}},animation:{end:{WebkitAnimation:'webkitAnimationEnd',MozAnimation:'animationend',OAnimation:'oAnimationEnd',animation:'animationend'}}},tests={csstransforms:function(){return!!test('transform')},csstransforms3d:function(){return!!test('perspective')},csstransitions:function(){return!!test('transition')},cssanimations:function(){return!!test('animation')}};function test(property,prefixed){var result=!1,upper=property.charAt(0).toUpperCase()+property.slice(1);$.each((property+' '+prefixes.join(upper+' ')+upper).split(' '),function(i,property){if(style[property]!==undefined){result=prefixed?property:!0;return!1}});return result}
function prefixed(property){return test(property,!0)}
if(tests.csstransitions()){$.support.transition=new String(prefixed('transition'))
$.support.transition.end=events.transition.end[$.support.transition]}
if(tests.cssanimations()){$.support.animation=new String(prefixed('animation'))
$.support.animation.end=events.animation.end[$.support.animation]}
if(tests.csstransforms()){$.support.transform=new String(prefixed('transform'));$.support.transform3d=tests.csstransforms3d()}})(window.Zepto||window.jQuery,window,document);
!function(e,s){"use strict";var t,o,n,i,r,a,h,l,p,u,f,c,d,v,m,y,C,w,g=(n="sf-breadcrumb",i="sf-js-enabled",r="sf-with-ul",a="sf-arrows",(o=/^(?![\w\W]*Windows Phone)[\w\W]*(iPhone|iPad|iPod)/i.test(navigator.userAgent))&&e("html").css("cursor","pointer").on("click",e.noop),h=o,l="behavior"in(t=document.documentElement.style)&&"fill"in t&&/iemobile/i.test(navigator.userAgent),p=!!s.PointerEvent,u=function(e,s,t){var o=i;s.cssArrows&&(o+=" "+a),e[t?"addClass":"removeClass"](o)},f=function(e,s){var t=s?"addClass":"removeClass";e.children("a")[t](r)},c=function(e){var s=e.css("ms-touch-action"),t=e.css("touch-action");t="pan-y"===(t=t||s)?"auto":"pan-y",e.css({"ms-touch-action":t,"touch-action":t})},d=function(e){return e.closest("."+i)},v=function(e){return d(e).data("sfOptions")},m=function(){var s=e(this),t=v(s);t&&clearTimeout(t.sfTimer),s.siblings().superfish("hide").end().superfish("show")},y=function(s){s.retainPath=e.inArray(this[0],s.$path)>-1,this.superfish("hide"),this.parents("."+s.hoverClass).length||(s.onIdle.call(d(this)),s.$path.length&&e.proxy(m,s.$path)())},C=function(){var s=e(this),t=v(s);h?e.proxy(y,s,t)():t&&(clearTimeout(t.sfTimer),t.sfTimer=setTimeout(e.proxy(y,s,t),t.delay))},w=function(s){var t=e(this),o=v(t),n=t.siblings(s.data.popUpSelector);if(o&&!1===o.onHandleTouch.call(n))return this;n.length>0&&n.is(":hidden")&&(t.one("click.superfish",!1),"MSPointerDown"===s.type||"pointerdown"===s.type?t.trigger("focus"):e.proxy(m,t.parent("li"))())},{hide:function(s){if(this.length){var t=v(this);if(!t)return this;var o=!0===t.retainPath?t.$path:"",n=this.find("li."+t.hoverClass).add(this).not(o).removeClass(t.hoverClass).children(t.popUpSelector),i=t.speedOut;if(s&&(n.show(),i=0),t.retainPath=!1,!1===t.onBeforeHide.call(n))return this;n.stop(!0,!0).animate(t.animationOut,i,function(){var s=e(this);t.onHide.call(s)})}return this},show:function(){var e=v(this);if(!e)return this;var s=this.addClass(e.hoverClass).children(e.popUpSelector);return!1===e.onBeforeShow.call(s)?this:(s.stop(!0,!0).animate(e.animation,e.speed,function(){e.onShow.call(s)}),this)},destroy:function(){return this.each(function(){var s,t=e(this),o=t.data("sfOptions");if(!o)return!1;s=t.find(o.popUpSelector).parent("li"),clearTimeout(o.sfTimer),u(t,o),f(s),c(t),t.off(".superfish").off(".hoverIntent"),s.children(o.popUpSelector).attr("style",function(e,s){return s.replace(/display[^;]+;?/g,"")}),o.$path.removeClass(o.hoverClass+" "+n).addClass(o.pathClass),t.find("."+o.hoverClass).removeClass(o.hoverClass),o.onDestroy.call(t),t.removeData("sfOptions")})},init:function(s){return this.each(function(){var t=e(this);if(t.data("sfOptions"))return!1;var o,i=e.extend({},e.fn.superfish.defaults,s),r=t.find(i.popUpSelector).parent("li");i.$path=(o=i,t.find("li."+o.pathClass).slice(0,o.pathLevels).addClass(o.hoverClass+" "+n).filter(function(){return e(this).children(o.popUpSelector).hide().show().length}).removeClass(o.pathClass)),t.data("sfOptions",i),u(t,i,!0),f(r,!0),c(t),function(s,t){var o="li:has("+t.popUpSelector+")";e.fn.hoverIntent&&!t.disableHI?s.hoverIntent(m,C,o):s.on("mouseenter.superfish",o,m).on("mouseleave.superfish",o,C);var n="MSPointerDown.superfish";p&&(n="pointerdown.superfish"),h||(n+=" touchend.superfish"),l&&(n+=" mousedown.superfish"),s.on("focusin.superfish","li",m).on("focusout.superfish","li",C).on(n,"a",t,w)}(t,i),r.not("."+n).superfish("hide",!0),i.onInit.call(this)})}});e.fn.superfish=function(s,t){return g[s]?g[s].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof s&&s?e.error("Method "+s+" does not exist on jQuery.fn.superfish"):g.init.apply(this,arguments)},e.fn.superfish.defaults={popUpSelector:"ul,.sf-mega",hoverClass:"sfHover",pathClass:"overrideThisToUse",pathLevels:1,delay:800,animation:{opacity:"show"},animationOut:{opacity:"hide"},speed:"normal",speedOut:"fast",cssArrows:!0,disableHI:!1,onInit:e.noop,onBeforeShow:e.noop,onShow:e.noop,onBeforeHide:e.noop,onHide:e.noop,onIdle:e.noop,onDestroy:e.noop,onHandleTouch:e.noop}}(jQuery,window);
jQuery(document).ready(function($){$('.theme-ddmenu').each(function(){var menuList=$(this),animType=menuList.data('animtype'),animSpeed=menuList.data('animspeed'),mobileArr=menuList.find('.mobile-arrow');menuList.superfish({popUpSelector:'ul',hoverClass:'mb2ctm-hover',animation:animType==2?{height:'show'}:{opacity:'show'},speed:animSpeed,speedOut:'fast',cssArrows:!1});menuOnHover(menuList);$(window).on('resize',function(){menuOnHover(menuList)});mobileArr.click(function(e){e.preventDefault();$(this).parent().siblings('ul').slideToggle(250);$(this).toggleClass('active')})
function menuOnHover(list){var w=(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth);if(w<=768){list.removeClass('sf-js-enabled');list.removeClass('desk-menu');list.addClass('mobile-menu')}else{list.addClass('sf-js-enabled');list.removeClass('mobile-menu');list.addClass('desk-menu');list.find('.mobile-arrow').removeClass('active');list.find('.mobile-arrow').parent().siblings('ul').hide()}}})
function customAccordion(header,content){header.click(function(e){e.preventDefault();e.stopImmediatePropagation();$(this).toggleClass('active');content.slideToggle(250)})};$(document).on('click','.show-menu',function(e){e.preventDefault();e.stopImmediatePropagation();var menuList=$(this).parent().parent().find('.navigation-wrapper').find('.theme-ddmenu');menuList.slideToggle(250)});setTimeout(function(){makeFixedNavigation()},10);$(window).scroll(function(){makeFixedNavigation()})
function makeFixedNavigation(){var win=$(window),offsetEl=$('.fixed-nav-element');if(offsetEl.length!=0&&$('body').hasClass('fixed-nav')){var fixedEl=$('#nav-main'),fixedElWrap=fixedEl.parent(),elOffset=offsetEl.offset().top,fixElHeight=fixedEl.outerHeight(!0);if(win.scrollTop()>elOffset){fixedEl.addClass('navbar-fixed-top');offsetEl.css({height:fixElHeight})}else{fixedEl.removeClass('navbar-fixed-top');offsetEl.css({height:0})}}}});
$(document).ready(function(){try{if($("form#signup")){$("form#signup").parents(".mt-3").addClass("signup-section")}
if($("form#login")){$("form#login").parents(".justify-content-center").addClass("login-section")}
if($('body.pagelayout-login')){$('body.pagelayout-login .col-md-5')?$('body.pagelayout-login .col-md-5').addClass('col-12 login-wrapper').removeClass('col-md-5'):'';var textCenter=$('body.pagelayout-login .login-wrapper:last-child')?$('body.pagelayout-login .login-wrapper:last-child').addClass('text-center'):'';var centerText=$('body.pagelayout-login .justify-content-center:last-child')?$('body.pagelayout-login .justify-content-center:last-child').addClass('text-center'):'';var buttonBlock=$('body.pagelayout-login .justify-content-center:last-child .btn')?$('body.pagelayout-login .justify-content-center:last-child .btn').addClass('btn-block orcolor'):'';$('body.pagelayout-login .col-xl-6')?$('body.pagelayout-login .col-xl-6').addClass('col-xl-12').removeClass('col-xl-6'):''}}catch(ignore){}});
(function(global,factory){typeof exports==='object'&&typeof module!=='undefined'?module.exports=factory():typeof define==='function'&&define.amd?define(factory):(global=global||self,global.SimpleBar=factory())}(this,function(){'use strict';var aFunction=function(it){if(typeof it!='function'){throw TypeError(String(it)+' is not a function')}
return it};var bindContext=function(fn,that,length){aFunction(fn);if(that===undefined)return fn;switch(length){case 0:return function(){return fn.call(that)};case 1:return function(a){return fn.call(that,a)};case 2:return function(a,b){return fn.call(that,a,b)};case 3:return function(a,b,c){return fn.call(that,a,b,c)}}
return function(){return fn.apply(that,arguments)}};var fails=function(exec){try{return!!exec()}catch(error){return!0}};var toString={}.toString;var classofRaw=function(it){return toString.call(it).slice(8,-1)};var split=''.split;var indexedObject=fails(function(){return!Object('z').propertyIsEnumerable(0)})?function(it){return classofRaw(it)=='String'?split.call(it,''):Object(it)}:Object;var requireObjectCoercible=function(it){if(it==undefined)throw TypeError("Can't call method on "+it);return it};var toObject=function(argument){return Object(requireObjectCoercible(argument))};var ceil=Math.ceil;var floor=Math.floor;var toInteger=function(argument){return isNaN(argument=+argument)?0:(argument>0?floor:ceil)(argument)};var min=Math.min;var toLength=function(argument){return argument>0?min(toInteger(argument),0x1FFFFFFFFFFFFF):0};var isObject=function(it){return typeof it==='object'?it!==null:typeof it==='function'};var isArray=Array.isArray||function isArray(arg){return classofRaw(arg)=='Array'};var commonjsGlobal=typeof globalThis!=='undefined'?globalThis:typeof window!=='undefined'?window:typeof global!=='undefined'?global:typeof self!=='undefined'?self:{};function createCommonjsModule(fn,module){return module={exports:{}},fn(module,module.exports),module.exports}
var global$1=typeof window=='object'&&window&&window.Math==Math?window:typeof self=='object'&&self&&self.Math==Math?self:Function('return this')();var descriptors=!fails(function(){return Object.defineProperty({},'a',{get:function(){return 7}}).a!=7});var document$1=global$1.document;var exist=isObject(document$1)&&isObject(document$1.createElement);var documentCreateElement=function(it){return exist?document$1.createElement(it):{}};var ie8DomDefine=!descriptors&&!fails(function(){return Object.defineProperty(documentCreateElement('div'),'a',{get:function(){return 7}}).a!=7});var anObject=function(it){if(!isObject(it)){throw TypeError(String(it)+' is not an object')}
return it};var toPrimitive=function(it,S){if(!isObject(it))return it;var fn,val;if(S&&typeof(fn=it.toString)=='function'&&!isObject(val=fn.call(it)))return val;if(typeof(fn=it.valueOf)=='function'&&!isObject(val=fn.call(it)))return val;if(!S&&typeof(fn=it.toString)=='function'&&!isObject(val=fn.call(it)))return val;throw TypeError("Can't convert object to primitive value")};var nativeDefineProperty=Object.defineProperty;var f=descriptors?nativeDefineProperty:function defineProperty(O,P,Attributes){anObject(O);P=toPrimitive(P,!0);anObject(Attributes);if(ie8DomDefine)try{return nativeDefineProperty(O,P,Attributes)}catch(error){}
if('get' in Attributes||'set' in Attributes)throw TypeError('Accessors not supported');if('value' in Attributes)O[P]=Attributes.value;return O};var objectDefineProperty={f:f};var createPropertyDescriptor=function(bitmap,value){return{enumerable:!(bitmap&1),configurable:!(bitmap&2),writable:!(bitmap&4),value:value}};var hide=descriptors?function(object,key,value){return objectDefineProperty.f(object,key,createPropertyDescriptor(1,value))}:function(object,key,value){object[key]=value;return object};var setGlobal=function(key,value){try{hide(global$1,key,value)}catch(error){global$1[key]=value}
return value};var shared=createCommonjsModule(function(module){var SHARED='__core-js_shared__';var store=global$1[SHARED]||setGlobal(SHARED,{});(module.exports=function(key,value){return store[key]||(store[key]=value!==undefined?value:{})})('versions',[]).push({version:'3.0.1',mode:'global',copyright:'© 2019 Denis Pushkarev (zloirock.ru)'})});var id=0;var postfix=Math.random();var uid=function(key){return'Symbol('.concat(key===undefined?'':key,')_',(++id+postfix).toString(36))};var nativeSymbol=!fails(function(){return!String(Symbol())});var store=shared('wks');var Symbol$1=global$1.Symbol;var wellKnownSymbol=function(name){return store[name]||(store[name]=nativeSymbol&&Symbol$1[name]||(nativeSymbol?Symbol$1:uid)('Symbol.'+name))};var SPECIES=wellKnownSymbol('species');var arraySpeciesCreate=function(originalArray,length){var C;if(isArray(originalArray)){C=originalArray.constructor;if(typeof C=='function'&&(C===Array||isArray(C.prototype)))C=undefined;else if(isObject(C)){C=C[SPECIES];if(C===null)C=undefined}}
return new(C===undefined?Array:C)(length===0?0:length)};var arrayMethods=function(TYPE,specificCreate){var IS_MAP=TYPE==1;var IS_FILTER=TYPE==2;var IS_SOME=TYPE==3;var IS_EVERY=TYPE==4;var IS_FIND_INDEX=TYPE==6;var NO_HOLES=TYPE==5||IS_FIND_INDEX;var create=specificCreate||arraySpeciesCreate;return function($this,callbackfn,that){var O=toObject($this);var self=indexedObject(O);var boundFunction=bindContext(callbackfn,that,3);var length=toLength(self.length);var index=0;var target=IS_MAP?create($this,length):IS_FILTER?create($this,0):undefined;var value,result;for(;length>index;index++)
if(NO_HOLES||index in self){value=self[index];result=boundFunction(value,index,O);if(TYPE){if(IS_MAP)target[index]=result;else if(result)switch(TYPE){case 3:return!0;case 5:return value;case 6:return index;case 2:target.push(value)}else if(IS_EVERY)return!1}}
return IS_FIND_INDEX?-1:IS_SOME||IS_EVERY?IS_EVERY:target}};var SPECIES$1=wellKnownSymbol('species');var arrayMethodHasSpeciesSupport=function(METHOD_NAME){return!fails(function(){var array=[];var constructor=array.constructor={};constructor[SPECIES$1]=function(){return{foo:1}};return array[METHOD_NAME](Boolean).foo!==1})};var nativePropertyIsEnumerable={}.propertyIsEnumerable;var nativeGetOwnPropertyDescriptor=Object.getOwnPropertyDescriptor;var NASHORN_BUG=nativeGetOwnPropertyDescriptor&&!nativePropertyIsEnumerable.call({1:2},1);var f$1=NASHORN_BUG?function propertyIsEnumerable(V){var descriptor=nativeGetOwnPropertyDescriptor(this,V);return!!descriptor&&descriptor.enumerable}:nativePropertyIsEnumerable;var objectPropertyIsEnumerable={f:f$1};var toIndexedObject=function(it){return indexedObject(requireObjectCoercible(it))};var hasOwnProperty={}.hasOwnProperty;var has=function(it,key){return hasOwnProperty.call(it,key)};var nativeGetOwnPropertyDescriptor$1=Object.getOwnPropertyDescriptor;var f$2=descriptors?nativeGetOwnPropertyDescriptor$1:function getOwnPropertyDescriptor(O,P){O=toIndexedObject(O);P=toPrimitive(P,!0);if(ie8DomDefine)try{return nativeGetOwnPropertyDescriptor$1(O,P)}catch(error){}
if(has(O,P))return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O,P),O[P])};var objectGetOwnPropertyDescriptor={f:f$2};var functionToString=shared('native-function-to-string',Function.toString);var WeakMap$1=global$1.WeakMap;var nativeWeakMap=typeof WeakMap$1==='function'&&/native code/.test(functionToString.call(WeakMap$1));var shared$1=shared('keys');var sharedKey=function(key){return shared$1[key]||(shared$1[key]=uid(key))};var hiddenKeys={};var WeakMap$2=global$1.WeakMap;var set,get,has$1;var enforce=function(it){return has$1(it)?get(it):set(it,{})};var getterFor=function(TYPE){return function(it){var state;if(!isObject(it)||(state=get(it)).type!==TYPE){throw TypeError('Incompatible receiver, '+TYPE+' required')}
return state}};if(nativeWeakMap){var store$1=new WeakMap$2();var wmget=store$1.get;var wmhas=store$1.has;var wmset=store$1.set;set=function(it,metadata){wmset.call(store$1,it,metadata);return metadata};get=function(it){return wmget.call(store$1,it)||{}};has$1=function(it){return wmhas.call(store$1,it)}}else{var STATE=sharedKey('state');hiddenKeys[STATE]=!0;set=function(it,metadata){hide(it,STATE,metadata);return metadata};get=function(it){return has(it,STATE)?it[STATE]:{}};has$1=function(it){return has(it,STATE)}}
var internalState={set:set,get:get,has:has$1,enforce:enforce,getterFor:getterFor};var redefine=createCommonjsModule(function(module){var getInternalState=internalState.get;var enforceInternalState=internalState.enforce;var TEMPLATE=String(functionToString).split('toString');shared('inspectSource',function(it){return functionToString.call(it)});(module.exports=function(O,key,value,options){var unsafe=options?!!options.unsafe:!1;var simple=options?!!options.enumerable:!1;var noTargetGet=options?!!options.noTargetGet:!1;if(typeof value=='function'){if(typeof key=='string'&&!has(value,'name'))hide(value,'name',key);enforceInternalState(value).source=TEMPLATE.join(typeof key=='string'?key:'')}
if(O===global$1){if(simple)O[key]=value;else setGlobal(key,value);return}else if(!unsafe){delete O[key]}else if(!noTargetGet&&O[key]){simple=!0}
if(simple)O[key]=value;else hide(O,key,value)})(Function.prototype,'toString',function toString(){return typeof this=='function'&&getInternalState(this).source||functionToString.call(this)})});var max=Math.max;var min$1=Math.min;var toAbsoluteIndex=function(index,length){var integer=toInteger(index);return integer<0?max(integer+length,0):min$1(integer,length)};var arrayIncludes=function(IS_INCLUDES){return function($this,el,fromIndex){var O=toIndexedObject($this);var length=toLength(O.length);var index=toAbsoluteIndex(fromIndex,length);var value;if(IS_INCLUDES&&el!=el)
while(length>index){value=O[index++];if(value!=value)return!0}else for(;length>index;index++)
if(IS_INCLUDES||index in O){if(O[index]===el)return IS_INCLUDES||index||0}
return!IS_INCLUDES&&-1}};var arrayIndexOf=arrayIncludes(!1);var objectKeysInternal=function(object,names){var O=toIndexedObject(object);var i=0;var result=[];var key;for(key in O)!has(hiddenKeys,key)&&has(O,key)&&result.push(key);while(names.length>i)
if(has(O,key=names[i++])){~arrayIndexOf(result,key)||result.push(key)}
return result};var enumBugKeys=['constructor','hasOwnProperty','isPrototypeOf','propertyIsEnumerable','toLocaleString','toString','valueOf'];var hiddenKeys$1=enumBugKeys.concat('length','prototype');var f$3=Object.getOwnPropertyNames||function getOwnPropertyNames(O){return objectKeysInternal(O,hiddenKeys$1)};var objectGetOwnPropertyNames={f:f$3};var f$4=Object.getOwnPropertySymbols;var objectGetOwnPropertySymbols={f:f$4};var Reflect=global$1.Reflect;var ownKeys=Reflect&&Reflect.ownKeys||function ownKeys(it){var keys=objectGetOwnPropertyNames.f(anObject(it));var getOwnPropertySymbols=objectGetOwnPropertySymbols.f;return getOwnPropertySymbols?keys.concat(getOwnPropertySymbols(it)):keys};var copyConstructorProperties=function(target,source){var keys=ownKeys(source);var defineProperty=objectDefineProperty.f;var getOwnPropertyDescriptor=objectGetOwnPropertyDescriptor.f;for(var i=0;i<keys.length;i++){var key=keys[i];if(!has(target,key))defineProperty(target,key,getOwnPropertyDescriptor(source,key))}};var replacement=/#|\.prototype\./;var isForced=function(feature,detection){var value=data[normalize(feature)];return value==POLYFILL?!0:value==NATIVE?!1:typeof detection=='function'?fails(detection):!!detection};var normalize=isForced.normalize=function(string){return String(string).replace(replacement,'.').toLowerCase()};var data=isForced.data={};var NATIVE=isForced.NATIVE='N';var POLYFILL=isForced.POLYFILL='P';var isForced_1=isForced;var getOwnPropertyDescriptor=objectGetOwnPropertyDescriptor.f;var _export=function(options,source){var TARGET=options.target;var GLOBAL=options.global;var STATIC=options.stat;var FORCED,target,key,targetProperty,sourceProperty,descriptor;if(GLOBAL){target=global$1}else if(STATIC){target=global$1[TARGET]||setGlobal(TARGET,{})}else{target=(global$1[TARGET]||{}).prototype}
if(target)
for(key in source){sourceProperty=source[key];if(options.noTargetGet){descriptor=getOwnPropertyDescriptor(target,key);targetProperty=descriptor&&descriptor.value}else targetProperty=target[key];FORCED=isForced_1(GLOBAL?key:TARGET+(STATIC?'.':'#')+key,options.forced);if(!FORCED&&targetProperty!==undefined){if(typeof sourceProperty===typeof targetProperty)continue;copyConstructorProperties(sourceProperty,targetProperty)}
if(options.sham||(targetProperty&&targetProperty.sham)){hide(sourceProperty,'sham',!0)}
redefine(target,key,sourceProperty,options)}};var internalFilter=arrayMethods(2);var SPECIES_SUPPORT=arrayMethodHasSpeciesSupport('filter');_export({target:'Array',proto:!0,forced:!SPECIES_SUPPORT},{filter:function filter(callbackfn){return internalFilter(this,callbackfn,arguments[1])}});var sloppyArrayMethod=function(METHOD_NAME,argument){var method=[][METHOD_NAME];return!method||!fails(function(){method.call(null,argument||function(){throw 1},1)})};var nativeForEach=[].forEach;var internalForEach=arrayMethods(0);var SLOPPY_METHOD=sloppyArrayMethod('forEach');var arrayForEach=SLOPPY_METHOD?function forEach(callbackfn){return internalForEach(this,callbackfn,arguments[1])}:nativeForEach;_export({target:'Array',proto:!0,forced:[].forEach!=arrayForEach},{forEach:arrayForEach});var arrayReduce=function(that,callbackfn,argumentsLength,memo,isRight){aFunction(callbackfn);var O=toObject(that);var self=indexedObject(O);var length=toLength(O.length);var index=isRight?length-1:0;var i=isRight?-1:1;if(argumentsLength<2)
while(!0){if(index in self){memo=self[index];index+=i;break}
index+=i;if(isRight?index<0:length<=index){throw TypeError('Reduce of empty array with no initial value')}}
for(;isRight?index>=0:length>index;index+=i)
if(index in self){memo=callbackfn(memo,self[index],index,O)}
return memo};var SLOPPY_METHOD$1=sloppyArrayMethod('reduce');_export({target:'Array',proto:!0,forced:SLOPPY_METHOD$1},{reduce:function reduce(callbackfn){return arrayReduce(this,callbackfn,arguments.length,arguments[1],!1)}});var defineProperty=objectDefineProperty.f;var FunctionPrototype=Function.prototype;var FunctionPrototypeToString=FunctionPrototype.toString;var nameRE=/^\s*function ([^ (]*)/;var NAME='name';if(descriptors&&!(NAME in FunctionPrototype)){defineProperty(FunctionPrototype,NAME,{configurable:!0,get:function(){try{return FunctionPrototypeToString.call(this).match(nameRE)[1]}catch(error){return''}}})}
var objectKeys=Object.keys||function keys(O){return objectKeysInternal(O,enumBugKeys)};var nativeAssign=Object.assign;var objectAssign=!nativeAssign||fails(function(){var A={};var B={};var symbol=Symbol();var alphabet='abcdefghijklmnopqrst';A[symbol]=7;alphabet.split('').forEach(function(chr){B[chr]=chr});return nativeAssign({},A)[symbol]!=7||objectKeys(nativeAssign({},B)).join('')!=alphabet})?function assign(target,source){var T=toObject(target);var argumentsLength=arguments.length;var index=1;var getOwnPropertySymbols=objectGetOwnPropertySymbols.f;var propertyIsEnumerable=objectPropertyIsEnumerable.f;while(argumentsLength>index){var S=indexedObject(arguments[index++]);var keys=getOwnPropertySymbols?objectKeys(S).concat(getOwnPropertySymbols(S)):objectKeys(S);var length=keys.length;var j=0;var key;while(length>j)
if(propertyIsEnumerable.call(S,key=keys[j++]))T[key]=S[key]}
return T}:nativeAssign;_export({target:'Object',stat:!0,forced:Object.assign!==objectAssign},{assign:objectAssign});var whitespaces='\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';var whitespace='['+whitespaces+']';var ltrim=RegExp('^'+whitespace+whitespace+'*');var rtrim=RegExp(whitespace+whitespace+'*$');var stringTrim=function(string,TYPE){string=String(requireObjectCoercible(string));if(TYPE&1)string=string.replace(ltrim,'');if(TYPE&2)string=string.replace(rtrim,'');return string};var nativeParseInt=global$1.parseInt;var hex=/^[-+]?0[xX]/;var FORCED=nativeParseInt(whitespaces+'08')!==8||nativeParseInt(whitespaces+'0x16')!==22;var _parseInt=FORCED?function parseInt(str,radix){var string=stringTrim(String(str),3);return nativeParseInt(string,(radix>>>0)||(hex.test(string)?16:10))}:nativeParseInt;_export({global:!0,forced:parseInt!=_parseInt},{parseInt:_parseInt});var regexpFlags=function(){var that=anObject(this);var result='';if(that.global)result+='g';if(that.ignoreCase)result+='i';if(that.multiline)result+='m';if(that.unicode)result+='u';if(that.sticky)result+='y';return result};var nativeExec=RegExp.prototype.exec;var nativeReplace=String.prototype.replace;var patchedExec=nativeExec;var UPDATES_LAST_INDEX_WRONG=(function(){var re1=/a/;var re2=/b*/g;nativeExec.call(re1,'a');nativeExec.call(re2,'a');return re1.lastIndex!==0||re2.lastIndex!==0})();var NPCG_INCLUDED=/()??/.exec('')[1]!==undefined;var PATCH=UPDATES_LAST_INDEX_WRONG||NPCG_INCLUDED;if(PATCH){patchedExec=function exec(str){var re=this;var lastIndex,reCopy,match,i;if(NPCG_INCLUDED){reCopy=new RegExp('^'+re.source+'$(?!\\s)',regexpFlags.call(re))}
if(UPDATES_LAST_INDEX_WRONG)lastIndex=re.lastIndex;match=nativeExec.call(re,str);if(UPDATES_LAST_INDEX_WRONG&&match){re.lastIndex=re.global?match.index+match[0].length:lastIndex}
if(NPCG_INCLUDED&&match&&match.length>1){nativeReplace.call(match[0],reCopy,function(){for(i=1;i<arguments.length-2;i++){if(arguments[i]===undefined)match[i]=undefined}})}
return match}}
var regexpExec=patchedExec;_export({target:'RegExp',proto:!0,forced:/./.exec!==regexpExec},{exec:regexpExec});var stringAt=function(that,pos,CONVERT_TO_STRING){var S=String(requireObjectCoercible(that));var position=toInteger(pos);var size=S.length;var first,second;if(position<0||position>=size)return CONVERT_TO_STRING?'':undefined;first=S.charCodeAt(position);return first<0xD800||first>0xDBFF||position+1===size||(second=S.charCodeAt(position+1))<0xDC00||second>0xDFFF?CONVERT_TO_STRING?S.charAt(position):first:CONVERT_TO_STRING?S.slice(position,position+2):(first-0xD800<<10)+(second-0xDC00)+0x10000};var advanceStringIndex=function(S,index,unicode){return index+(unicode?stringAt(S,index,!0).length:1)};var regexpExecAbstract=function(R,S){var exec=R.exec;if(typeof exec==='function'){var result=exec.call(R,S);if(typeof result!=='object'){throw TypeError('RegExp exec method returned something other than an Object or null')}
return result}
if(classofRaw(R)!=='RegExp'){throw TypeError('RegExp#exec called on incompatible receiver')}
return regexpExec.call(R,S)};var SPECIES$2=wellKnownSymbol('species');var REPLACE_SUPPORTS_NAMED_GROUPS=!fails(function(){var re=/./;re.exec=function(){var result=[];result.groups={a:'7'};return result};return''.replace(re,'$<a>')!=='7'});var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC=!fails(function(){var re=/(?:)/;var originalExec=re.exec;re.exec=function(){return originalExec.apply(this,arguments)};var result='ab'.split(re);return result.length!==2||result[0]!=='a'||result[1]!=='b'});var fixRegexpWellKnownSymbolLogic=function(KEY,length,exec,sham){var SYMBOL=wellKnownSymbol(KEY);var DELEGATES_TO_SYMBOL=!fails(function(){var O={};O[SYMBOL]=function(){return 7};return''[KEY](O)!=7});var DELEGATES_TO_EXEC=DELEGATES_TO_SYMBOL&&!fails(function(){var execCalled=!1;var re=/a/;re.exec=function(){execCalled=!0;return null};if(KEY==='split'){re.constructor={};re.constructor[SPECIES$2]=function(){return re}}
re[SYMBOL]('');return!execCalled});if(!DELEGATES_TO_SYMBOL||!DELEGATES_TO_EXEC||(KEY==='replace'&&!REPLACE_SUPPORTS_NAMED_GROUPS)||(KEY==='split'&&!SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)){var nativeRegExpMethod=/./[SYMBOL];var methods=exec(SYMBOL,''[KEY],function(nativeMethod,regexp,str,arg2,forceStringMethod){if(regexp.exec===regexpExec){if(DELEGATES_TO_SYMBOL&&!forceStringMethod){return{done:!0,value:nativeRegExpMethod.call(regexp,str,arg2)}}
return{done:!0,value:nativeMethod.call(str,regexp,arg2)}}
return{done:!1}});var stringMethod=methods[0];var regexMethod=methods[1];redefine(String.prototype,KEY,stringMethod);redefine(RegExp.prototype,SYMBOL,length==2?function(string,arg){return regexMethod.call(string,this,arg)}:function(string){return regexMethod.call(string,this)});if(sham)hide(RegExp.prototype[SYMBOL],'sham',!0)}};fixRegexpWellKnownSymbolLogic('match',1,function(MATCH,nativeMatch,maybeCallNative){return[function match(regexp){var O=requireObjectCoercible(this);var matcher=regexp==undefined?undefined:regexp[MATCH];return matcher!==undefined?matcher.call(regexp,O):new RegExp(regexp)[MATCH](String(O))},function(regexp){var res=maybeCallNative(nativeMatch,regexp,this);if(res.done)return res.value;var rx=anObject(regexp);var S=String(this);if(!rx.global)return regexpExecAbstract(rx,S);var fullUnicode=rx.unicode;rx.lastIndex=0;var A=[];var n=0;var result;while((result=regexpExecAbstract(rx,S))!==null){var matchStr=String(result[0]);A[n]=matchStr;if(matchStr==='')rx.lastIndex=advanceStringIndex(S,toLength(rx.lastIndex),fullUnicode);n++}
return n===0?null:A}]});var max$1=Math.max;var min$2=Math.min;var floor$1=Math.floor;var SUBSTITUTION_SYMBOLS=/\$([$&`']|\d\d?|<[^>]*>)/g;var SUBSTITUTION_SYMBOLS_NO_NAMED=/\$([$&`']|\d\d?)/g;var maybeToString=function(it){return it===undefined?it:String(it)};fixRegexpWellKnownSymbolLogic('replace',2,function(REPLACE,nativeReplace,maybeCallNative){return[function replace(searchValue,replaceValue){var O=requireObjectCoercible(this);var replacer=searchValue==undefined?undefined:searchValue[REPLACE];return replacer!==undefined?replacer.call(searchValue,O,replaceValue):nativeReplace.call(String(O),searchValue,replaceValue)},function(regexp,replaceValue){var res=maybeCallNative(nativeReplace,regexp,this,replaceValue);if(res.done)return res.value;var rx=anObject(regexp);var S=String(this);var functionalReplace=typeof replaceValue==='function';if(!functionalReplace)replaceValue=String(replaceValue);var global=rx.global;if(global){var fullUnicode=rx.unicode;rx.lastIndex=0}
var results=[];while(!0){var result=regexpExecAbstract(rx,S);if(result===null)break;results.push(result);if(!global)break;var matchStr=String(result[0]);if(matchStr==='')rx.lastIndex=advanceStringIndex(S,toLength(rx.lastIndex),fullUnicode)}
var accumulatedResult='';var nextSourcePosition=0;for(var i=0;i<results.length;i++){result=results[i];var matched=String(result[0]);var position=max$1(min$2(toInteger(result.index),S.length),0);var captures=[];for(var j=1;j<result.length;j++)captures.push(maybeToString(result[j]));var namedCaptures=result.groups;if(functionalReplace){var replacerArgs=[matched].concat(captures,position,S);if(namedCaptures!==undefined)replacerArgs.push(namedCaptures);var replacement=String(replaceValue.apply(undefined,replacerArgs))}else{replacement=getSubstitution(matched,S,position,captures,namedCaptures,replaceValue)}
if(position>=nextSourcePosition){accumulatedResult+=S.slice(nextSourcePosition,position)+replacement;nextSourcePosition=position+matched.length}}
return accumulatedResult+S.slice(nextSourcePosition)}];function getSubstitution(matched,str,position,captures,namedCaptures,replacement){var tailPos=position+matched.length;var m=captures.length;var symbols=SUBSTITUTION_SYMBOLS_NO_NAMED;if(namedCaptures!==undefined){namedCaptures=toObject(namedCaptures);symbols=SUBSTITUTION_SYMBOLS}
return nativeReplace.call(replacement,symbols,function(match,ch){var capture;switch(ch.charAt(0)){case '$':return'$';case '&':return matched;case '`':return str.slice(0,position);case "'":return str.slice(tailPos);case '<':capture=namedCaptures[ch.slice(1,-1)];break;default:var n=+ch;if(n===0)return match;if(n>m){var f=floor$1(n/10);if(f===0)return match;if(f<=m)return captures[f-1]===undefined?ch.charAt(1):captures[f-1]+ch.charAt(1);return match}
capture=captures[n-1]}
return capture===undefined?'':capture})}});var domIterables={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0};for(var COLLECTION_NAME in domIterables){var Collection=global$1[COLLECTION_NAME];var CollectionPrototype=Collection&&Collection.prototype;if(CollectionPrototype&&CollectionPrototype.forEach!==arrayForEach)try{hide(CollectionPrototype,'forEach',arrayForEach)}catch(error){CollectionPrototype.forEach=arrayForEach}}
var FUNC_ERROR_TEXT='Expected a function';var NAN=0/0;var symbolTag='[object Symbol]';var reTrim=/^\s+|\s+$/g;var reIsBadHex=/^[-+]0x[0-9a-f]+$/i;var reIsBinary=/^0b[01]+$/i;var reIsOctal=/^0o[0-7]+$/i;var freeParseInt=parseInt;var freeGlobal=typeof commonjsGlobal=='object'&&commonjsGlobal&&commonjsGlobal.Object===Object&&commonjsGlobal;var freeSelf=typeof self=='object'&&self&&self.Object===Object&&self;var root=freeGlobal||freeSelf||Function('return this')();var objectProto=Object.prototype;var objectToString=objectProto.toString;var nativeMax=Math.max,nativeMin=Math.min;var now=function(){return root.Date.now()};function debounce(func,wait,options){var lastArgs,lastThis,maxWait,result,timerId,lastCallTime,lastInvokeTime=0,leading=!1,maxing=!1,trailing=!0;if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT)}
wait=toNumber(wait)||0;if(isObject$1(options)){leading=!!options.leading;maxing='maxWait' in options;maxWait=maxing?nativeMax(toNumber(options.maxWait)||0,wait):maxWait;trailing='trailing' in options?!!options.trailing:trailing}
function invokeFunc(time){var args=lastArgs,thisArg=lastThis;lastArgs=lastThis=undefined;lastInvokeTime=time;result=func.apply(thisArg,args);return result}
function leadingEdge(time){lastInvokeTime=time;timerId=setTimeout(timerExpired,wait);return leading?invokeFunc(time):result}
function remainingWait(time){var timeSinceLastCall=time-lastCallTime,timeSinceLastInvoke=time-lastInvokeTime,result=wait-timeSinceLastCall;return maxing?nativeMin(result,maxWait-timeSinceLastInvoke):result}
function shouldInvoke(time){var timeSinceLastCall=time-lastCallTime,timeSinceLastInvoke=time-lastInvokeTime;return(lastCallTime===undefined||(timeSinceLastCall>=wait)||(timeSinceLastCall<0)||(maxing&&timeSinceLastInvoke>=maxWait))}
function timerExpired(){var time=now();if(shouldInvoke(time)){return trailingEdge(time)}
timerId=setTimeout(timerExpired,remainingWait(time))}
function trailingEdge(time){timerId=undefined;if(trailing&&lastArgs){return invokeFunc(time)}
lastArgs=lastThis=undefined;return result}
function cancel(){if(timerId!==undefined){clearTimeout(timerId)}
lastInvokeTime=0;lastArgs=lastCallTime=lastThis=timerId=undefined}
function flush(){return timerId===undefined?result:trailingEdge(now())}
function debounced(){var time=now(),isInvoking=shouldInvoke(time);lastArgs=arguments;lastThis=this;lastCallTime=time;if(isInvoking){if(timerId===undefined){return leadingEdge(lastCallTime)}
if(maxing){timerId=setTimeout(timerExpired,wait);return invokeFunc(lastCallTime)}}
if(timerId===undefined){timerId=setTimeout(timerExpired,wait)}
return result}
debounced.cancel=cancel;debounced.flush=flush;return debounced}
function throttle(func,wait,options){var leading=!0,trailing=!0;if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT)}
if(isObject$1(options)){leading='leading' in options?!!options.leading:leading;trailing='trailing' in options?!!options.trailing:trailing}
return debounce(func,wait,{'leading':leading,'maxWait':wait,'trailing':trailing})}
function isObject$1(value){var type=typeof value;return!!value&&(type=='object'||type=='function')}
function isObjectLike(value){return!!value&&typeof value=='object'}
function isSymbol(value){return typeof value=='symbol'||(isObjectLike(value)&&objectToString.call(value)==symbolTag)}
function toNumber(value){if(typeof value=='number'){return value}
if(isSymbol(value)){return NAN}
if(isObject$1(value)){var other=typeof value.valueOf=='function'?value.valueOf():value;value=isObject$1(other)?(other+''):other}
if(typeof value!='string'){return value===0?value:+value}
value=value.replace(reTrim,'');var isBinary=reIsBinary.test(value);return(isBinary||reIsOctal.test(value))?freeParseInt(value.slice(2),isBinary?2:8):(reIsBadHex.test(value)?NAN:+value)}
var lodash_throttle=throttle;var FUNC_ERROR_TEXT$1='Expected a function';var NAN$1=0/0;var symbolTag$1='[object Symbol]';var reTrim$1=/^\s+|\s+$/g;var reIsBadHex$1=/^[-+]0x[0-9a-f]+$/i;var reIsBinary$1=/^0b[01]+$/i;var reIsOctal$1=/^0o[0-7]+$/i;var freeParseInt$1=parseInt;var freeGlobal$1=typeof commonjsGlobal=='object'&&commonjsGlobal&&commonjsGlobal.Object===Object&&commonjsGlobal;var freeSelf$1=typeof self=='object'&&self&&self.Object===Object&&self;var root$1=freeGlobal$1||freeSelf$1||Function('return this')();var objectProto$1=Object.prototype;var objectToString$1=objectProto$1.toString;var nativeMax$1=Math.max,nativeMin$1=Math.min;var now$1=function(){return root$1.Date.now()};function debounce$1(func,wait,options){var lastArgs,lastThis,maxWait,result,timerId,lastCallTime,lastInvokeTime=0,leading=!1,maxing=!1,trailing=!0;if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT$1)}
wait=toNumber$1(wait)||0;if(isObject$2(options)){leading=!!options.leading;maxing='maxWait' in options;maxWait=maxing?nativeMax$1(toNumber$1(options.maxWait)||0,wait):maxWait;trailing='trailing' in options?!!options.trailing:trailing}
function invokeFunc(time){var args=lastArgs,thisArg=lastThis;lastArgs=lastThis=undefined;lastInvokeTime=time;result=func.apply(thisArg,args);return result}
function leadingEdge(time){lastInvokeTime=time;timerId=setTimeout(timerExpired,wait);return leading?invokeFunc(time):result}
function remainingWait(time){var timeSinceLastCall=time-lastCallTime,timeSinceLastInvoke=time-lastInvokeTime,result=wait-timeSinceLastCall;return maxing?nativeMin$1(result,maxWait-timeSinceLastInvoke):result}
function shouldInvoke(time){var timeSinceLastCall=time-lastCallTime,timeSinceLastInvoke=time-lastInvokeTime;return(lastCallTime===undefined||(timeSinceLastCall>=wait)||(timeSinceLastCall<0)||(maxing&&timeSinceLastInvoke>=maxWait))}
function timerExpired(){var time=now$1();if(shouldInvoke(time)){return trailingEdge(time)}
timerId=setTimeout(timerExpired,remainingWait(time))}
function trailingEdge(time){timerId=undefined;if(trailing&&lastArgs){return invokeFunc(time)}
lastArgs=lastThis=undefined;return result}
function cancel(){if(timerId!==undefined){clearTimeout(timerId)}
lastInvokeTime=0;lastArgs=lastCallTime=lastThis=timerId=undefined}
function flush(){return timerId===undefined?result:trailingEdge(now$1())}
function debounced(){var time=now$1(),isInvoking=shouldInvoke(time);lastArgs=arguments;lastThis=this;lastCallTime=time;if(isInvoking){if(timerId===undefined){return leadingEdge(lastCallTime)}
if(maxing){timerId=setTimeout(timerExpired,wait);return invokeFunc(lastCallTime)}}
if(timerId===undefined){timerId=setTimeout(timerExpired,wait)}
return result}
debounced.cancel=cancel;debounced.flush=flush;return debounced}
function isObject$2(value){var type=typeof value;return!!value&&(type=='object'||type=='function')}
function isObjectLike$1(value){return!!value&&typeof value=='object'}
function isSymbol$1(value){return typeof value=='symbol'||(isObjectLike$1(value)&&objectToString$1.call(value)==symbolTag$1)}
function toNumber$1(value){if(typeof value=='number'){return value}
if(isSymbol$1(value)){return NAN$1}
if(isObject$2(value)){var other=typeof value.valueOf=='function'?value.valueOf():value;value=isObject$2(other)?(other+''):other}
if(typeof value!='string'){return value===0?value:+value}
value=value.replace(reTrim$1,'');var isBinary=reIsBinary$1.test(value);return(isBinary||reIsOctal$1.test(value))?freeParseInt$1(value.slice(2),isBinary?2:8):(reIsBadHex$1.test(value)?NAN$1:+value)}
var lodash_debounce=debounce$1;var FUNC_ERROR_TEXT$2='Expected a function';var HASH_UNDEFINED='__lodash_hash_undefined__';var funcTag='[object Function]',genTag='[object GeneratorFunction]';var reRegExpChar=/[\\^$.*+?()[\]{}|]/g;var reIsHostCtor=/^\[object .+?Constructor\]$/;var freeGlobal$2=typeof commonjsGlobal=='object'&&commonjsGlobal&&commonjsGlobal.Object===Object&&commonjsGlobal;var freeSelf$2=typeof self=='object'&&self&&self.Object===Object&&self;var root$2=freeGlobal$2||freeSelf$2||Function('return this')();function getValue(object,key){return object==null?undefined:object[key]}
function isHostObject(value){var result=!1;if(value!=null&&typeof value.toString!='function'){try{result=!!(value+'')}catch(e){}}
return result}
var arrayProto=Array.prototype,funcProto=Function.prototype,objectProto$2=Object.prototype;var coreJsData=root$2['__core-js_shared__'];var maskSrcKey=(function(){var uid=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||'');return uid?('Symbol(src)_1.'+uid):''}());var funcToString=funcProto.toString;var hasOwnProperty$1=objectProto$2.hasOwnProperty;var objectToString$2=objectProto$2.toString;var reIsNative=RegExp('^'+funcToString.call(hasOwnProperty$1).replace(reRegExpChar,'\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$');var splice=arrayProto.splice;var Map$1=getNative(root$2,'Map'),nativeCreate=getNative(Object,'create');function Hash(entries){var index=-1,length=entries?entries.length:0;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1])}}
function hashClear(){this.__data__=nativeCreate?nativeCreate(null):{}}
function hashDelete(key){return this.has(key)&&delete this.__data__[key]}
function hashGet(key){var data=this.__data__;if(nativeCreate){var result=data[key];return result===HASH_UNDEFINED?undefined:result}
return hasOwnProperty$1.call(data,key)?data[key]:undefined}
function hashHas(key){var data=this.__data__;return nativeCreate?data[key]!==undefined:hasOwnProperty$1.call(data,key)}
function hashSet(key,value){var data=this.__data__;data[key]=(nativeCreate&&value===undefined)?HASH_UNDEFINED:value;return this}
Hash.prototype.clear=hashClear;Hash.prototype['delete']=hashDelete;Hash.prototype.get=hashGet;Hash.prototype.has=hashHas;Hash.prototype.set=hashSet;function ListCache(entries){var index=-1,length=entries?entries.length:0;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1])}}
function listCacheClear(){this.__data__=[]}
function listCacheDelete(key){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){return!1}
var lastIndex=data.length-1;if(index==lastIndex){data.pop()}else{splice.call(data,index,1)}
return!0}
function listCacheGet(key){var data=this.__data__,index=assocIndexOf(data,key);return index<0?undefined:data[index][1]}
function listCacheHas(key){return assocIndexOf(this.__data__,key)>-1}
function listCacheSet(key,value){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){data.push([key,value])}else{data[index][1]=value}
return this}
ListCache.prototype.clear=listCacheClear;ListCache.prototype['delete']=listCacheDelete;ListCache.prototype.get=listCacheGet;ListCache.prototype.has=listCacheHas;ListCache.prototype.set=listCacheSet;function MapCache(entries){var index=-1,length=entries?entries.length:0;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1])}}
function mapCacheClear(){this.__data__={'hash':new Hash,'map':new(Map$1||ListCache),'string':new Hash}}
function mapCacheDelete(key){return getMapData(this,key)['delete'](key)}
function mapCacheGet(key){return getMapData(this,key).get(key)}
function mapCacheHas(key){return getMapData(this,key).has(key)}
function mapCacheSet(key,value){getMapData(this,key).set(key,value);return this}
MapCache.prototype.clear=mapCacheClear;MapCache.prototype['delete']=mapCacheDelete;MapCache.prototype.get=mapCacheGet;MapCache.prototype.has=mapCacheHas;MapCache.prototype.set=mapCacheSet;function assocIndexOf(array,key){var length=array.length;while(length--){if(eq(array[length][0],key)){return length}}
return-1}
function baseIsNative(value){if(!isObject$3(value)||isMasked(value)){return!1}
var pattern=(isFunction(value)||isHostObject(value))?reIsNative:reIsHostCtor;return pattern.test(toSource(value))}
function getMapData(map,key){var data=map.__data__;return isKeyable(key)?data[typeof key=='string'?'string':'hash']:data.map}
function getNative(object,key){var value=getValue(object,key);return baseIsNative(value)?value:undefined}
function isKeyable(value){var type=typeof value;return(type=='string'||type=='number'||type=='symbol'||type=='boolean')?(value!=='__proto__'):(value===null)}
function isMasked(func){return!!maskSrcKey&&(maskSrcKey in func)}
function toSource(func){if(func!=null){try{return funcToString.call(func)}catch(e){}
try{return(func+'')}catch(e){}}
return''}
function memoize(func,resolver){if(typeof func!='function'||(resolver&&typeof resolver!='function')){throw new TypeError(FUNC_ERROR_TEXT$2)}
var memoized=function(){var args=arguments,key=resolver?resolver.apply(this,args):args[0],cache=memoized.cache;if(cache.has(key)){return cache.get(key)}
var result=func.apply(this,args);memoized.cache=cache.set(key,result);return result};memoized.cache=new(memoize.Cache||MapCache);return memoized}
memoize.Cache=MapCache;function eq(value,other){return value===other||(value!==value&&other!==other)}
function isFunction(value){var tag=isObject$3(value)?objectToString$2.call(value):'';return tag==funcTag||tag==genTag}
function isObject$3(value){var type=typeof value;return!!value&&(type=='object'||type=='function')}
var lodash_memoize=memoize;var MapShim=(function(){if(typeof Map!=='undefined'){return Map}
function getIndex(arr,key){var result=-1;arr.some(function(entry,index){if(entry[0]===key){result=index;return!0}
return!1});return result}
return(function(){function class_1(){this.__entries__=[]}
Object.defineProperty(class_1.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0});class_1.prototype.get=function(key){var index=getIndex(this.__entries__,key);var entry=this.__entries__[index];return entry&&entry[1]};class_1.prototype.set=function(key,value){var index=getIndex(this.__entries__,key);if(~index){this.__entries__[index][1]=value}else{this.__entries__.push([key,value])}};class_1.prototype.delete=function(key){var entries=this.__entries__;var index=getIndex(entries,key);if(~index){entries.splice(index,1)}};class_1.prototype.has=function(key){return!!~getIndex(this.__entries__,key)};class_1.prototype.clear=function(){this.__entries__.splice(0)};class_1.prototype.forEach=function(callback,ctx){if(ctx===void 0){ctx=null}
for(var _i=0,_a=this.__entries__;_i<_a.length;_i++){var entry=_a[_i];callback.call(ctx,entry[1],entry[0])}};return class_1}())})();var isBrowser=typeof window!=='undefined'&&typeof document!=='undefined'&&window.document===document;var global$1$1=(function(){if(typeof global!=='undefined'&&global.Math===Math){return global}
if(typeof self!=='undefined'&&self.Math===Math){return self}
if(typeof window!=='undefined'&&window.Math===Math){return window}
return Function('return this')()})();var requestAnimationFrame$1=(function(){if(typeof requestAnimationFrame==='function'){return requestAnimationFrame.bind(global$1$1)}
return function(callback){return setTimeout(function(){return callback(Date.now())},1000/60)}})();var trailingTimeout=2;function throttle$1(callback,delay){var leadingCall=!1,trailingCall=!1,lastCallTime=0;function resolvePending(){if(leadingCall){leadingCall=!1;callback()}
if(trailingCall){proxy()}}
function timeoutCallback(){requestAnimationFrame$1(resolvePending)}
function proxy(){var timeStamp=Date.now();if(leadingCall){if(timeStamp-lastCallTime<trailingTimeout){return}
trailingCall=!0}else{leadingCall=!0;trailingCall=!1;setTimeout(timeoutCallback,delay)}
lastCallTime=timeStamp}
return proxy}
var REFRESH_DELAY=20;var transitionKeys=['top','right','bottom','left','width','height','size','weight'];var mutationObserverSupported=typeof MutationObserver!=='undefined';var ResizeObserverController=(function(){function ResizeObserverController(){this.connected_=!1;this.mutationEventsAdded_=!1;this.mutationsObserver_=null;this.observers_=[];this.onTransitionEnd_=this.onTransitionEnd_.bind(this);this.refresh=throttle$1(this.refresh.bind(this),REFRESH_DELAY)}
ResizeObserverController.prototype.addObserver=function(observer){if(!~this.observers_.indexOf(observer)){this.observers_.push(observer)}
if(!this.connected_){this.connect_()}};ResizeObserverController.prototype.removeObserver=function(observer){var observers=this.observers_;var index=observers.indexOf(observer);if(~index){observers.splice(index,1)}
if(!observers.length&&this.connected_){this.disconnect_()}};ResizeObserverController.prototype.refresh=function(){var changesDetected=this.updateObservers_();if(changesDetected){this.refresh()}};ResizeObserverController.prototype.updateObservers_=function(){var activeObservers=this.observers_.filter(function(observer){return observer.gatherActive(),observer.hasActive()});activeObservers.forEach(function(observer){return observer.broadcastActive()});return activeObservers.length>0};ResizeObserverController.prototype.connect_=function(){if(!isBrowser||this.connected_){return}
document.addEventListener('transitionend',this.onTransitionEnd_);window.addEventListener('resize',this.refresh);if(mutationObserverSupported){this.mutationsObserver_=new MutationObserver(this.refresh);this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})}else{document.addEventListener('DOMSubtreeModified',this.refresh);this.mutationEventsAdded_=!0}
this.connected_=!0};ResizeObserverController.prototype.disconnect_=function(){if(!isBrowser||!this.connected_){return}
document.removeEventListener('transitionend',this.onTransitionEnd_);window.removeEventListener('resize',this.refresh);if(this.mutationsObserver_){this.mutationsObserver_.disconnect()}
if(this.mutationEventsAdded_){document.removeEventListener('DOMSubtreeModified',this.refresh)}
this.mutationsObserver_=null;this.mutationEventsAdded_=!1;this.connected_=!1};ResizeObserverController.prototype.onTransitionEnd_=function(_a){var _b=_a.propertyName,propertyName=_b===void 0?'':_b;var isReflowProperty=transitionKeys.some(function(key){return!!~propertyName.indexOf(key)});if(isReflowProperty){this.refresh()}};ResizeObserverController.getInstance=function(){if(!this.instance_){this.instance_=new ResizeObserverController()}
return this.instance_};ResizeObserverController.instance_=null;return ResizeObserverController}());var defineConfigurable=(function(target,props){for(var _i=0,_a=Object.keys(props);_i<_a.length;_i++){var key=_a[_i];Object.defineProperty(target,key,{value:props[key],enumerable:!1,writable:!1,configurable:!0})}
return target});var getWindowOf=(function(target){var ownerGlobal=target&&target.ownerDocument&&target.ownerDocument.defaultView;return ownerGlobal||global$1$1});var emptyRect=createRectInit(0,0,0,0);function toFloat(value){return parseFloat(value)||0}
function getBordersSize(styles){var positions=[];for(var _i=1;_i<arguments.length;_i++){positions[_i-1]=arguments[_i]}
return positions.reduce(function(size,position){var value=styles['border-'+position+'-width'];return size+toFloat(value)},0)}
function getPaddings(styles){var positions=['top','right','bottom','left'];var paddings={};for(var _i=0,positions_1=positions;_i<positions_1.length;_i++){var position=positions_1[_i];var value=styles['padding-'+position];paddings[position]=toFloat(value)}
return paddings}
function getSVGContentRect(target){var bbox=target.getBBox();return createRectInit(0,0,bbox.width,bbox.height)}
function getHTMLElementContentRect(target){var clientWidth=target.clientWidth,clientHeight=target.clientHeight;if(!clientWidth&&!clientHeight){return emptyRect}
var styles=getWindowOf(target).getComputedStyle(target);var paddings=getPaddings(styles);var horizPad=paddings.left+paddings.right;var vertPad=paddings.top+paddings.bottom;var width=toFloat(styles.width),height=toFloat(styles.height);if(styles.boxSizing==='border-box'){if(Math.round(width+horizPad)!==clientWidth){width-=getBordersSize(styles,'left','right')+horizPad}
if(Math.round(height+vertPad)!==clientHeight){height-=getBordersSize(styles,'top','bottom')+vertPad}}
if(!isDocumentElement(target)){var vertScrollbar=Math.round(width+horizPad)-clientWidth;var horizScrollbar=Math.round(height+vertPad)-clientHeight;if(Math.abs(vertScrollbar)!==1){width-=vertScrollbar}
if(Math.abs(horizScrollbar)!==1){height-=horizScrollbar}}
return createRectInit(paddings.left,paddings.top,width,height)}
var isSVGGraphicsElement=(function(){if(typeof SVGGraphicsElement!=='undefined'){return function(target){return target instanceof getWindowOf(target).SVGGraphicsElement}}
return function(target){return(target instanceof getWindowOf(target).SVGElement&&typeof target.getBBox==='function')}})();function isDocumentElement(target){return target===getWindowOf(target).document.documentElement}
function getContentRect(target){if(!isBrowser){return emptyRect}
if(isSVGGraphicsElement(target)){return getSVGContentRect(target)}
return getHTMLElementContentRect(target)}
function createReadOnlyRect(_a){var x=_a.x,y=_a.y,width=_a.width,height=_a.height;var Constr=typeof DOMRectReadOnly!=='undefined'?DOMRectReadOnly:Object;var rect=Object.create(Constr.prototype);defineConfigurable(rect,{x:x,y:y,width:width,height:height,top:y,right:x+width,bottom:height+y,left:x});return rect}
function createRectInit(x,y,width,height){return{x:x,y:y,width:width,height:height}}
var ResizeObservation=(function(){function ResizeObservation(target){this.broadcastWidth=0;this.broadcastHeight=0;this.contentRect_=createRectInit(0,0,0,0);this.target=target}
ResizeObservation.prototype.isActive=function(){var rect=getContentRect(this.target);this.contentRect_=rect;return(rect.width!==this.broadcastWidth||rect.height!==this.broadcastHeight)};ResizeObservation.prototype.broadcastRect=function(){var rect=this.contentRect_;this.broadcastWidth=rect.width;this.broadcastHeight=rect.height;return rect};return ResizeObservation}());var ResizeObserverEntry=(function(){function ResizeObserverEntry(target,rectInit){var contentRect=createReadOnlyRect(rectInit);defineConfigurable(this,{target:target,contentRect:contentRect})}
return ResizeObserverEntry}());var ResizeObserverSPI=(function(){function ResizeObserverSPI(callback,controller,callbackCtx){this.activeObservations_=[];this.observations_=new MapShim();if(typeof callback!=='function'){throw new TypeError('The callback provided as parameter 1 is not a function.')}
this.callback_=callback;this.controller_=controller;this.callbackCtx_=callbackCtx}
ResizeObserverSPI.prototype.observe=function(target){if(!arguments.length){throw new TypeError('1 argument required, but only 0 present.')}
if(typeof Element==='undefined'||!(Element instanceof Object)){return}
if(!(target instanceof getWindowOf(target).Element)){throw new TypeError('parameter 1 is not of type "Element".')}
var observations=this.observations_;if(observations.has(target)){return}
observations.set(target,new ResizeObservation(target));this.controller_.addObserver(this);this.controller_.refresh()};ResizeObserverSPI.prototype.unobserve=function(target){if(!arguments.length){throw new TypeError('1 argument required, but only 0 present.')}
if(typeof Element==='undefined'||!(Element instanceof Object)){return}
if(!(target instanceof getWindowOf(target).Element)){throw new TypeError('parameter 1 is not of type "Element".')}
var observations=this.observations_;if(!observations.has(target)){return}
observations.delete(target);if(!observations.size){this.controller_.removeObserver(this)}};ResizeObserverSPI.prototype.disconnect=function(){this.clearActive();this.observations_.clear();this.controller_.removeObserver(this)};ResizeObserverSPI.prototype.gatherActive=function(){var _this=this;this.clearActive();this.observations_.forEach(function(observation){if(observation.isActive()){_this.activeObservations_.push(observation)}})};ResizeObserverSPI.prototype.broadcastActive=function(){if(!this.hasActive()){return}
var ctx=this.callbackCtx_;var entries=this.activeObservations_.map(function(observation){return new ResizeObserverEntry(observation.target,observation.broadcastRect())});this.callback_.call(ctx,entries,ctx);this.clearActive()};ResizeObserverSPI.prototype.clearActive=function(){this.activeObservations_.splice(0)};ResizeObserverSPI.prototype.hasActive=function(){return this.activeObservations_.length>0};return ResizeObserverSPI}());var observers=typeof WeakMap!=='undefined'?new WeakMap():new MapShim();var ResizeObserver=(function(){function ResizeObserver(callback){if(!(this instanceof ResizeObserver)){throw new TypeError('Cannot call a class as a function.')}
if(!arguments.length){throw new TypeError('1 argument required, but only 0 present.')}
var controller=ResizeObserverController.getInstance();var observer=new ResizeObserverSPI(callback,controller,this);observers.set(this,observer)}
return ResizeObserver}());['observe','unobserve','disconnect'].forEach(function(method){ResizeObserver.prototype[method]=function(){var _a;return(_a=observers.get(this))[method].apply(_a,arguments)}});var index=(function(){if(typeof global$1$1.ResizeObserver!=='undefined'){return global$1$1.ResizeObserver}
return ResizeObserver})();var canUseDOM=!!(typeof window!=='undefined'&&window.document&&window.document.createElement);var canUseDom=canUseDOM;function scrollbarWidth(){if(typeof document==='undefined'){return 0}
var body=document.body;var box=document.createElement('div');var boxStyle=box.style;boxStyle.position='fixed';boxStyle.left=0;boxStyle.visibility='hidden';boxStyle.overflowY='scroll';body.appendChild(box);var width=box.getBoundingClientRect().right;body.removeChild(box);return width}
var SimpleBar=function(){function SimpleBar(element,options){var _this=this;this.onScroll=function(){if(!_this.scrollXTicking){window.requestAnimationFrame(_this.scrollX);_this.scrollXTicking=!0}
if(!_this.scrollYTicking){window.requestAnimationFrame(_this.scrollY);_this.scrollYTicking=!0}};this.scrollX=function(){if(_this.axis.x.isOverflowing){_this.showScrollbar('x');_this.positionScrollbar('x')}
_this.scrollXTicking=!1};this.scrollY=function(){if(_this.axis.y.isOverflowing){_this.showScrollbar('y');_this.positionScrollbar('y')}
_this.scrollYTicking=!1};this.onMouseEnter=function(){_this.showScrollbar('x');_this.showScrollbar('y')};this.onMouseMove=function(e){_this.mouseX=e.clientX;_this.mouseY=e.clientY;if(_this.axis.x.isOverflowing||_this.axis.x.forceVisible){_this.onMouseMoveForAxis('x')}
if(_this.axis.y.isOverflowing||_this.axis.y.forceVisible){_this.onMouseMoveForAxis('y')}};this.onMouseLeave=function(){_this.onMouseMove.cancel();if(_this.axis.x.isOverflowing||_this.axis.x.forceVisible){_this.onMouseLeaveForAxis('x')}
if(_this.axis.y.isOverflowing||_this.axis.y.forceVisible){_this.onMouseLeaveForAxis('y')}
_this.mouseX=-1;_this.mouseY=-1};this.onWindowResize=function(){_this.scrollbarWidth=scrollbarWidth();_this.hideNativeScrollbar()};this.hideScrollbars=function(){_this.axis.x.track.rect=_this.axis.x.track.el.getBoundingClientRect();_this.axis.y.track.rect=_this.axis.y.track.el.getBoundingClientRect();if(!_this.isWithinBounds(_this.axis.y.track.rect)){_this.axis.y.scrollbar.el.classList.remove(_this.classNames.visible);_this.axis.y.isVisible=!1}
if(!_this.isWithinBounds(_this.axis.x.track.rect)){_this.axis.x.scrollbar.el.classList.remove(_this.classNames.visible);_this.axis.x.isVisible=!1}};this.onPointerEvent=function(e){var isWithinBoundsY,isWithinBoundsX;_this.axis.x.scrollbar.rect=_this.axis.x.scrollbar.el.getBoundingClientRect();_this.axis.y.scrollbar.rect=_this.axis.y.scrollbar.el.getBoundingClientRect();if(_this.axis.x.isOverflowing||_this.axis.x.forceVisible){isWithinBoundsX=_this.isWithinBounds(_this.axis.x.scrollbar.rect)}
if(_this.axis.y.isOverflowing||_this.axis.y.forceVisible){isWithinBoundsY=_this.isWithinBounds(_this.axis.y.scrollbar.rect)}
if(isWithinBoundsY||isWithinBoundsX){e.preventDefault();e.stopPropagation();if(e.type==='mousedown'){if(isWithinBoundsY){_this.onDragStart(e,'y')}
if(isWithinBoundsX){_this.onDragStart(e,'x')}}}};this.drag=function(e){var eventOffset;var track=_this.axis[_this.draggedAxis].track;var trackSize=track.rect[_this.axis[_this.draggedAxis].sizeAttr];var scrollbar=_this.axis[_this.draggedAxis].scrollbar;e.preventDefault();e.stopPropagation();if(_this.draggedAxis==='y'){eventOffset=e.pageY}else{eventOffset=e.pageX}
var dragPos=eventOffset-track.rect[_this.axis[_this.draggedAxis].offsetAttr]-_this.axis[_this.draggedAxis].dragOffset;var dragPerc=dragPos/track.rect[_this.axis[_this.draggedAxis].sizeAttr];var scrollPos=dragPerc*_this.contentWrapperEl[_this.axis[_this.draggedAxis].scrollSizeAttr];if(_this.draggedAxis==='x'){scrollPos=_this.isRtl&&SimpleBar.getRtlHelpers().isRtlScrollbarInverted?scrollPos-(trackSize+scrollbar.size):scrollPos;scrollPos=_this.isRtl&&SimpleBar.getRtlHelpers().isRtlScrollingInverted?-scrollPos:scrollPos}
_this.contentWrapperEl[_this.axis[_this.draggedAxis].scrollOffsetAttr]=scrollPos};this.onEndDrag=function(e){e.preventDefault();e.stopPropagation();_this.el.classList.remove(_this.classNames.dragging);document.removeEventListener('mousemove',_this.drag,!0);document.removeEventListener('mouseup',_this.onEndDrag,!0);_this.removePreventClickId=window.setTimeout(function(){document.removeEventListener('click',_this.preventClick,!0);document.removeEventListener('dblclick',_this.preventClick,!0);_this.removePreventClickId=null})};this.preventClick=function(e){e.preventDefault();e.stopPropagation()};this.el=element;this.flashTimeout;this.contentEl;this.contentWrapperEl;this.offsetEl;this.maskEl;this.globalObserver;this.mutationObserver;this.resizeObserver;this.scrollbarWidth;this.minScrollbarWidth=20;this.options=Object.assign({},SimpleBar.defaultOptions,options);this.classNames=Object.assign({},SimpleBar.defaultOptions.classNames,this.options.classNames);this.isRtl;this.axis={x:{scrollOffsetAttr:'scrollLeft',sizeAttr:'width',scrollSizeAttr:'scrollWidth',offsetAttr:'left',overflowAttr:'overflowX',dragOffset:0,isOverflowing:!0,isVisible:!1,forceVisible:!1,track:{},scrollbar:{}},y:{scrollOffsetAttr:'scrollTop',sizeAttr:'height',scrollSizeAttr:'scrollHeight',offsetAttr:'top',overflowAttr:'overflowY',dragOffset:0,isOverflowing:!0,isVisible:!1,forceVisible:!1,track:{},scrollbar:{}}};this.removePreventClickId=null;if(this.el.SimpleBar){return}
this.recalculate=lodash_throttle(this.recalculate.bind(this),64);this.onMouseMove=lodash_throttle(this.onMouseMove.bind(this),64);this.hideScrollbars=lodash_debounce(this.hideScrollbars.bind(this),this.options.timeout);this.onWindowResize=lodash_debounce(this.onWindowResize.bind(this),64,{leading:!0});SimpleBar.getRtlHelpers=lodash_memoize(SimpleBar.getRtlHelpers);this.init()}
SimpleBar.getRtlHelpers=function getRtlHelpers(){var dummyDiv=document.createElement('div');dummyDiv.innerHTML='<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';var scrollbarDummyEl=dummyDiv.firstElementChild;document.body.appendChild(scrollbarDummyEl);var dummyContainerChild=scrollbarDummyEl.firstElementChild;scrollbarDummyEl.scrollLeft=0;var dummyContainerOffset=SimpleBar.getOffset(scrollbarDummyEl);var dummyContainerChildOffset=SimpleBar.getOffset(dummyContainerChild);scrollbarDummyEl.scrollLeft=999;var dummyContainerScrollOffsetAfterScroll=SimpleBar.getOffset(dummyContainerChild);return{isRtlScrollingInverted:dummyContainerOffset.left!==dummyContainerChildOffset.left&&dummyContainerChildOffset.left-dummyContainerScrollOffsetAfterScroll.left!==0,isRtlScrollbarInverted:dummyContainerOffset.left!==dummyContainerChildOffset.left}};SimpleBar.initHtmlApi=function initHtmlApi(){this.initDOMLoadedElements=this.initDOMLoadedElements.bind(this);if(typeof MutationObserver!=='undefined'){this.globalObserver=new MutationObserver(function(mutations){mutations.forEach(function(mutation){Array.prototype.forEach.call(mutation.addedNodes,function(addedNode){if(addedNode.nodeType===1){if(addedNode.hasAttribute('data-simplebar')){!addedNode.SimpleBar&&new SimpleBar(addedNode,SimpleBar.getElOptions(addedNode))}else{Array.prototype.forEach.call(addedNode.querySelectorAll('[data-simplebar]'),function(el){!el.SimpleBar&&new SimpleBar(el,SimpleBar.getElOptions(el))})}}});Array.prototype.forEach.call(mutation.removedNodes,function(removedNode){if(removedNode.nodeType===1){if(removedNode.hasAttribute('data-simplebar')){removedNode.SimpleBar&&removedNode.SimpleBar.unMount()}else{Array.prototype.forEach.call(removedNode.querySelectorAll('[data-simplebar]'),function(el){el.SimpleBar&&el.SimpleBar.unMount()})}}})})});this.globalObserver.observe(document,{childList:!0,subtree:!0})}
if(document.readyState==='complete'||document.readyState!=='loading'&&!document.documentElement.doScroll){window.setTimeout(this.initDOMLoadedElements)}else{document.addEventListener('DOMContentLoaded',this.initDOMLoadedElements);window.addEventListener('load',this.initDOMLoadedElements)}};SimpleBar.getElOptions=function getElOptions(el){var options=Array.prototype.reduce.call(el.attributes,function(acc,attribute){var option=attribute.name.match(/data-simplebar-(.+)/);if(option){var key=option[1].replace(/\W+(.)/g,function(x,chr){return chr.toUpperCase()});switch(attribute.value){case 'true':acc[key]=!0;break;case 'false':acc[key]=!1;break;case undefined:acc[key]=!0;break;default:acc[key]=attribute.value}}
return acc},{});return options};SimpleBar.removeObserver=function removeObserver(){this.globalObserver.disconnect()};SimpleBar.initDOMLoadedElements=function initDOMLoadedElements(){document.removeEventListener('DOMContentLoaded',this.initDOMLoadedElements);window.removeEventListener('load',this.initDOMLoadedElements);Array.prototype.forEach.call(document.querySelectorAll('[data-simplebar]'),function(el){if(!el.SimpleBar)new SimpleBar(el,SimpleBar.getElOptions(el))})};SimpleBar.getOffset=function getOffset(el){var rect=el.getBoundingClientRect();return{top:rect.top+(window.pageYOffset||document.documentElement.scrollTop),left:rect.left+(window.pageXOffset||document.documentElement.scrollLeft)}};var _proto=SimpleBar.prototype;_proto.init=function init(){this.el.SimpleBar=this;if(canUseDom){this.initDOM();this.scrollbarWidth=scrollbarWidth();this.recalculate();this.initListeners()}};_proto.initDOM=function initDOM(){var _this2=this;if(Array.prototype.filter.call(this.el.children,function(child){return child.classList.contains(_this2.classNames.wrapper)}).length){this.wrapperEl=this.el.querySelector("."+this.classNames.wrapper);this.contentWrapperEl=this.el.querySelector("."+this.classNames.contentWrapper);this.offsetEl=this.el.querySelector("."+this.classNames.offset);this.maskEl=this.el.querySelector("."+this.classNames.mask);this.contentEl=this.el.querySelector("."+this.classNames.contentEl);this.placeholderEl=this.el.querySelector("."+this.classNames.placeholder);this.heightAutoObserverWrapperEl=this.el.querySelector("."+this.classNames.heightAutoObserverWrapperEl);this.heightAutoObserverEl=this.el.querySelector("."+this.classNames.heightAutoObserverEl);this.axis.x.track.el=this.el.querySelector("."+this.classNames.track+"."+this.classNames.horizontal);this.axis.y.track.el=this.el.querySelector("."+this.classNames.track+"."+this.classNames.vertical)}else{this.wrapperEl=document.createElement('div');this.contentWrapperEl=document.createElement('div');this.offsetEl=document.createElement('div');this.maskEl=document.createElement('div');this.contentEl=document.createElement('div');this.placeholderEl=document.createElement('div');this.heightAutoObserverWrapperEl=document.createElement('div');this.heightAutoObserverEl=document.createElement('div');this.wrapperEl.classList.add(this.classNames.wrapper);this.contentWrapperEl.classList.add(this.classNames.contentWrapper);this.offsetEl.classList.add(this.classNames.offset);this.maskEl.classList.add(this.classNames.mask);this.contentEl.classList.add(this.classNames.contentEl);this.placeholderEl.classList.add(this.classNames.placeholder);this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl);this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl);while(this.el.firstChild){this.contentEl.appendChild(this.el.firstChild)}
this.contentWrapperEl.appendChild(this.contentEl);this.offsetEl.appendChild(this.contentWrapperEl);this.maskEl.appendChild(this.offsetEl);this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl);this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl);this.wrapperEl.appendChild(this.maskEl);this.wrapperEl.appendChild(this.placeholderEl);this.el.appendChild(this.wrapperEl)}
if(!this.axis.x.track.el||!this.axis.y.track.el){var track=document.createElement('div');var scrollbar=document.createElement('div');track.classList.add(this.classNames.track);scrollbar.classList.add(this.classNames.scrollbar);track.appendChild(scrollbar);this.axis.x.track.el=track.cloneNode(!0);this.axis.x.track.el.classList.add(this.classNames.horizontal);this.axis.y.track.el=track.cloneNode(!0);this.axis.y.track.el.classList.add(this.classNames.vertical);this.el.appendChild(this.axis.x.track.el);this.el.appendChild(this.axis.y.track.el)}
this.axis.x.scrollbar.el=this.axis.x.track.el.querySelector("."+this.classNames.scrollbar);this.axis.y.scrollbar.el=this.axis.y.track.el.querySelector("."+this.classNames.scrollbar);if(!this.options.autoHide){this.axis.x.scrollbar.el.classList.add(this.classNames.visible);this.axis.y.scrollbar.el.classList.add(this.classNames.visible)}
this.el.setAttribute('data-simplebar','init')};_proto.initListeners=function initListeners(){var _this3=this;if(this.options.autoHide){this.el.addEventListener('mouseenter',this.onMouseEnter)}['mousedown','click','dblclick','touchstart','touchend','touchmove'].forEach(function(e){_this3.el.addEventListener(e,_this3.onPointerEvent,!0)});this.el.addEventListener('mousemove',this.onMouseMove);this.el.addEventListener('mouseleave',this.onMouseLeave);this.contentWrapperEl.addEventListener('scroll',this.onScroll);window.addEventListener('resize',this.onWindowResize);this.resizeObserver=new index(this.recalculate);this.resizeObserver.observe(this.el);this.resizeObserver.observe(this.contentEl)};_proto.recalculate=function recalculate(){var isHeightAuto=this.heightAutoObserverEl.offsetHeight<=1;var isWidthAuto=this.heightAutoObserverEl.offsetWidth<=1;this.elStyles=window.getComputedStyle(this.el);this.isRtl=this.elStyles.direction==='rtl';this.contentEl.style.padding=this.elStyles.paddingTop+" "+this.elStyles.paddingRight+" "+this.elStyles.paddingBottom+" "+this.elStyles.paddingLeft;this.wrapperEl.style.margin="-"+this.elStyles.paddingTop+" -"+this.elStyles.paddingRight+" -"+this.elStyles.paddingBottom+" -"+this.elStyles.paddingLeft;this.contentWrapperEl.style.height=isHeightAuto?'auto':'100%';this.placeholderEl.style.width=isWidthAuto?this.contentEl.offsetWidth+"px":'auto';this.placeholderEl.style.height=this.contentEl.scrollHeight+"px";this.axis.x.isOverflowing=this.contentWrapperEl.scrollWidth>this.contentWrapperEl.offsetWidth;this.axis.y.isOverflowing=this.contentWrapperEl.scrollHeight>this.contentWrapperEl.offsetHeight;this.axis.x.isOverflowing=this.elStyles.overflowX==='hidden'?!1:this.axis.x.isOverflowing;this.axis.y.isOverflowing=this.elStyles.overflowY==='hidden'?!1:this.axis.y.isOverflowing;this.axis.x.forceVisible=this.options.forceVisible==='x'||this.options.forceVisible===!0;this.axis.y.forceVisible=this.options.forceVisible==='y'||this.options.forceVisible===!0;this.hideNativeScrollbar();this.axis.x.track.rect=this.axis.x.track.el.getBoundingClientRect();this.axis.y.track.rect=this.axis.y.track.el.getBoundingClientRect();this.axis.x.scrollbar.size=this.getScrollbarSize('x');this.axis.y.scrollbar.size=this.getScrollbarSize('y');this.axis.x.scrollbar.el.style.width=this.axis.x.scrollbar.size+"px";this.axis.y.scrollbar.el.style.height=this.axis.y.scrollbar.size+"px";this.positionScrollbar('x');this.positionScrollbar('y');this.toggleTrackVisibility('x');this.toggleTrackVisibility('y')};_proto.getScrollbarSize=function getScrollbarSize(axis){if(axis===void 0){axis='y'}
var contentSize=this.scrollbarWidth?this.contentWrapperEl[this.axis[axis].scrollSizeAttr]:this.contentWrapperEl[this.axis[axis].scrollSizeAttr]-this.minScrollbarWidth;var trackSize=this.axis[axis].track.rect[this.axis[axis].sizeAttr];var scrollbarSize;if(!this.axis[axis].isOverflowing){return}
var scrollbarRatio=trackSize/contentSize;scrollbarSize=Math.max(~~(scrollbarRatio*trackSize),this.options.scrollbarMinSize);if(this.options.scrollbarMaxSize){scrollbarSize=Math.min(scrollbarSize,this.options.scrollbarMaxSize)}
return scrollbarSize};_proto.positionScrollbar=function positionScrollbar(axis){if(axis===void 0){axis='y'}
var contentSize=this.contentWrapperEl[this.axis[axis].scrollSizeAttr];var trackSize=this.axis[axis].track.rect[this.axis[axis].sizeAttr];var hostSize=parseInt(this.elStyles[this.axis[axis].sizeAttr],10);var scrollbar=this.axis[axis].scrollbar;var scrollOffset=this.contentWrapperEl[this.axis[axis].scrollOffsetAttr];scrollOffset=axis==='x'&&this.isRtl&&SimpleBar.getRtlHelpers().isRtlScrollingInverted?-scrollOffset:scrollOffset;var scrollPourcent=scrollOffset/(contentSize-hostSize);var handleOffset=~~((trackSize-scrollbar.size)*scrollPourcent);handleOffset=axis==='x'&&this.isRtl&&SimpleBar.getRtlHelpers().isRtlScrollbarInverted?handleOffset+(trackSize-scrollbar.size):handleOffset;scrollbar.el.style.transform=axis==='x'?"translate3d("+handleOffset+"px, 0, 0)":"translate3d(0, "+handleOffset+"px, 0)"};_proto.toggleTrackVisibility=function toggleTrackVisibility(axis){if(axis===void 0){axis='y'}
var track=this.axis[axis].track.el;var scrollbar=this.axis[axis].scrollbar.el;if(this.axis[axis].isOverflowing||this.axis[axis].forceVisible){track.style.visibility='visible';this.contentWrapperEl.style[this.axis[axis].overflowAttr]='scroll'}else{track.style.visibility='hidden';this.contentWrapperEl.style[this.axis[axis].overflowAttr]='hidden'}
if(this.axis[axis].isOverflowing){scrollbar.style.display='block'}else{scrollbar.style.display='none'}};_proto.hideNativeScrollbar=function hideNativeScrollbar(){this.offsetEl.style[this.isRtl?'left':'right']=this.axis.y.isOverflowing||this.axis.y.forceVisible?"-"+(this.scrollbarWidth||this.minScrollbarWidth)+"px":0;this.offsetEl.style.bottom=this.axis.x.isOverflowing||this.axis.x.forceVisible?"-"+(this.scrollbarWidth||this.minScrollbarWidth)+"px":0;if(!this.scrollbarWidth){var paddingDirection=[this.isRtl?'paddingLeft':'paddingRight'];this.contentWrapperEl.style[paddingDirection]=this.axis.y.isOverflowing||this.axis.y.forceVisible?this.minScrollbarWidth+"px":0;this.contentWrapperEl.style.paddingBottom=this.axis.x.isOverflowing||this.axis.x.forceVisible?this.minScrollbarWidth+"px":0}};_proto.onMouseMoveForAxis=function onMouseMoveForAxis(axis){if(axis===void 0){axis='y'}
this.axis[axis].track.rect=this.axis[axis].track.el.getBoundingClientRect();this.axis[axis].scrollbar.rect=this.axis[axis].scrollbar.el.getBoundingClientRect();var isWithinScrollbarBoundsX=this.isWithinBounds(this.axis[axis].scrollbar.rect);if(isWithinScrollbarBoundsX){this.axis[axis].scrollbar.el.classList.add(this.classNames.hover)}else{this.axis[axis].scrollbar.el.classList.remove(this.classNames.hover)}
if(this.isWithinBounds(this.axis[axis].track.rect)){this.showScrollbar(axis);this.axis[axis].track.el.classList.add(this.classNames.hover)}else{this.axis[axis].track.el.classList.remove(this.classNames.hover)}};_proto.onMouseLeaveForAxis=function onMouseLeaveForAxis(axis){if(axis===void 0){axis='y'}
this.axis[axis].track.el.classList.remove(this.classNames.hover);this.axis[axis].scrollbar.el.classList.remove(this.classNames.hover)};_proto.showScrollbar=function showScrollbar(axis){if(axis===void 0){axis='y'}
var scrollbar=this.axis[axis].scrollbar.el;if(!this.axis[axis].isVisible){scrollbar.classList.add(this.classNames.visible);this.axis[axis].isVisible=!0}
if(this.options.autoHide){this.hideScrollbars()}};_proto.onDragStart=function onDragStart(e,axis){if(axis===void 0){axis='y'}
var scrollbar=this.axis[axis].scrollbar.el;var eventOffset=axis==='y'?e.pageY:e.pageX;this.axis[axis].dragOffset=eventOffset-scrollbar.getBoundingClientRect()[this.axis[axis].offsetAttr];this.draggedAxis=axis;this.el.classList.add(this.classNames.dragging);document.addEventListener('mousemove',this.drag,!0);document.addEventListener('mouseup',this.onEndDrag,!0);if(this.removePreventClickId===null){document.addEventListener('click',this.preventClick,!0);document.addEventListener('dblclick',this.preventClick,!0)}else{window.clearTimeout(this.removePreventClickId);this.removePreventClickId=null}};_proto.getContentElement=function getContentElement(){return this.contentEl};_proto.getScrollElement=function getScrollElement(){return this.contentWrapperEl};_proto.removeListeners=function removeListeners(){var _this4=this;if(this.options.autoHide){this.el.removeEventListener('mouseenter',this.onMouseEnter)}['mousedown','click','dblclick','touchstart','touchend','touchmove'].forEach(function(e){_this4.el.removeEventListener(e,_this4.onPointerEvent)});this.el.removeEventListener('mousemove',this.onMouseMove);this.el.removeEventListener('mouseleave',this.onMouseLeave);this.contentWrapperEl.removeEventListener('scroll',this.onScroll);window.removeEventListener('resize',this.onWindowResize);this.mutationObserver&&this.mutationObserver.disconnect();this.resizeObserver.disconnect();this.recalculate.cancel();this.onMouseMove.cancel();this.hideScrollbars.cancel();this.onWindowResize.cancel()};_proto.unMount=function unMount(){this.removeListeners();this.el.SimpleBar=null};_proto.isChildNode=function isChildNode(el){if(el===null)return!1;if(el===this.el)return!0;return this.isChildNode(el.parentNode)};_proto.isWithinBounds=function isWithinBounds(bbox){return this.mouseX>=bbox.left&&this.mouseX<=bbox.left+bbox.width&&this.mouseY>=bbox.top&&this.mouseY<=bbox.top+bbox.height};return SimpleBar}();SimpleBar.defaultOptions={autoHide:!0,forceVisible:!1,classNames:{contentEl:'simplebar-content',contentWrapper:'simplebar-content-wrapper',offset:'simplebar-offset',mask:'simplebar-mask',wrapper:'simplebar-wrapper',placeholder:'simplebar-placeholder',scrollbar:'simplebar-scrollbar',track:'simplebar-track',heightAutoObserverWrapperEl:'simplebar-height-auto-observer-wrapper',heightAutoObserverEl:'simplebar-height-auto-observer',visible:'simplebar-visible',horizontal:'simplebar-horizontal',vertical:'simplebar-vertical',hover:'simplebar-hover',dragging:'simplebar-dragging'},scrollbarMinSize:25,scrollbarMaxSize:0,timeout:1000};if(canUseDom){SimpleBar.initHtmlApi()}
return SimpleBar}));
$(document).ready(function(){try{var frontpageCategoryNames=$('#frontpage-category-names').html();if(typeof frontpageCategoryNames!=='undefined'&&frontpageCategoryNames!==null){$('.defaultcategories > .container').prepend('<div id="frontpage-category-names">'+frontpageCategoryNames+'</div>');$('#region-main #frontpage-category-names').css({'display':'none'})}
var frontpageCategoryNames=$('#frontpage-category-names').html();if(typeof frontpageCategoryNames!=='undefined'&&frontpageCategoryNames!==null){$('.customcategories').prepend('<div id="frontpage-category-names">'+frontpageCategoryNames+'</div>');$('#region-main #frontpage-category-names').css({'display':'none'})};if(typeof frontpageCategoryNames==="undefined"){$('.customcategories,.defaultcategories').css({'display':'none'})}
if($('#region-main #frontpage-category-names')){$('#region-main #frontpage-category-names').remove()}
if($('#frontpage-category-names > h2'));$('#frontpage-category-names > h2').addClass('all');var elements=document.getElementsByClassName('all');if(elements){for(var i=0;i<elements.length;i++){if(elements[i].innerHTML=='Course categories'){elements[i].innerHTML="Online course categories";break}}}
$('#frontpage-category-names h2.all').after("<p id='categorytagline' class='tagline'></p>");var categoryTag=document.getElementById("categorytagline")?document.getElementById("categorytagline").innerHTML=categorytagline:'';if($(".customcategories")){$(".customcategories").append("<a class='seeall btn' href='course/'>View all categories <i class='fa fa-long-arrow-right' aria-hidden='true'></i></a>")}
$('.customcategories .subcategories:first').addClass('row');$(".customcategories .category[data-depth='1']").wrapAll("<div id='CustomCategories' class='owl-carousel owl-theme owl-loaded owl-drag'></div>");$(".customcategories .category").addClass("item");$(".owl-item:first").addClass("active");if($('#CustomCategories')){if($('body').hasClass('dir-rtl')===!0){$('#CustomCategories').addClass('owl-rtl');$("#CustomCategories").owlCarousel({rtl:!0,navigation:!0,autoplay:!0,slideSpeed:300,paginationSpeed:400,dots:!1,responsiveClass:!0,responsive:{0:{items:1,nav:!0},600:{items:2,nav:!0,},1000:{items:5,nav:!0,}}})}else{$("#CustomCategories").owlCarousel({rtl:!1,navigation:!0,autoplay:!0,slideSpeed:300,paginationSpeed:400,dots:!1,responsiveClass:!0,responsive:{0:{items:1,nav:!0},600:{items:2,nav:!0,},1000:{items:5,nav:!0,}}})}}
var customCateg=jQuery(".customcategories");if(customCateg){var subCateg=customCateg&&customCateg.find(".subcategories");var ownItem=subCateg&&subCateg.find(".owl-item");var categoryItem=ownItem&&ownItem.find('.category');categoryItem.each(function(index,obj){var numOfCourse=jQuery(obj).find(".numberofcourse").eq(0);var orgContent=numOfCourse.html();var numContent=orgContent!==undefined?orgContent.replace(/[\])}[{(]/g,'').trim():'';var num=numContent!==""?parseInt(numContent):'';var contentNode=jQuery(obj).find('.content');var course=num!==1?"courses":"course";if(num!==''){jQuery("<span class='course-num'>"+num+" "+course+"</span>").insertAfter(contentNode)}else{jQuery("<span class='course-num'>0 course</span>").insertAfter(contentNode)}
numOfCourse.addClass('hidden')})}}catch(ignore){}
try{var courseSearch=$('#coursesearch').html();if(typeof courseSearch!=='undefined'&&courseSearch!==null){if($('.searchcourses > .container')){$('.searchcourses > .container').append('<form id="coursesearch" action="./course/search.php">'+courseSearch+'</div>')}
if($('#region-main #coursesearch')){$('#region-main #coursesearch').remove()}};if($('#coursesearch').length===0){$('#page .searchcourses').remove()}}catch(ignore){}
try{var frontpageAvailableCourseList=$('#frontpage-available-course-list').html();if(typeof frontpageAvailableCourseList!=='undefined'&&frontpageAvailableCourseList!==null){if($('#allcourses')){$('#allcourses > .container').append('<div id="frontpage-available-course-list">'+frontpageAvailableCourseList+'</div>')}
if($('#region-main #frontpage-available-course-list')){$('#region-main #frontpage-available-course-list').remove()}};if($('#frontpage-available-course-list').length===0){if($('#page #allcourses')){$('#page #allcourses').remove()}}
if($('#frontpage-available-course-list > h2')){$('#frontpage-available-course-list h2')[0].innerHTML="Courses We Provided";$('#frontpage-available-course-list > h2').after('<p id="allcoursestagline" class="tagline"></p>');var allCoursesTag=document.getElementById("allcoursestagline")?document.getElementById("allcoursestagline").innerHTML=allcoursestagline:''}}catch(ignore){}
try{var showChar=55;var ellipsestext="";var moretext="...More";var lesstext="...Less";$('.frontpage-course-list-all .content .summary, .frontpage-course-list-enrolled .content .summary, #CustomCategories .category .categorydescription').each(function(index,obj){var tHTML="";var teachers=$(obj).find('.teachers');if(teachers.length>0){var tHTML=teachers.html()}
if($(this).children('.teachers')){$(this).children('.teachers').remove()}
var content=$(this).html();if(content.length>showChar){content=strip(content);function strip(html){var tmp=document.createElement("DIV");tmp.innerHTML=html;return tmp.textContent||tmp.innerText}
var c=content.substr(0,showChar);var h=content.substr(showChar,content.length-showChar);var html=c+'<span class="moreellipses">'+ellipsestext+' </span><span class="morecontent"><span>'+h+"<ul class='teachers'>"+tHTML+"</ul>"+'</span>  <a href="" class="morelink">'+moretext+'</a></span>';$(this).html(html);var teachersNode=$(this).children('.morecontent').children('span').children('.teachers');if(teachersNode){var tInnerHTML=teachersNode.html();if(tInnerHTML===""){teachersNode.remove()}}}})}catch(ignore){}
try{var mainWrapper=$('.frontpage-course-list-all, .frontpage-course-list-enrolled, .course_category_tree');if(mainWrapper){mainWrapper.each(function(ind,obj){var coursebox=$(obj).find('.coursebox');if(coursebox){coursebox.each(function(index,obj){var courseimage=$(obj).find('.content .courseimage');var summaryNode=$(obj).find('.content .summary');var teacherNode=$(obj).find('.content ul.teachers');var moreContentNode=summaryNode&&summaryNode.find(".morecontent span");var findDiv=$(obj).find('.info');if(courseimage.length>0){courseimage.insertBefore(findDiv)}else{$(obj).find('.content').addClass("nonimage")}
if(findDiv&&summaryNode){findDiv.insertBefore(summaryNode)}
if(teacherNode.length>0&&moreContentNode.length>0){moreContentNode.append(teacherNode)}})}})}
if($(".frontpage-course-list-all > .coursebox")){$("#allcourses .frontpage-course-list-all > .coursebox").wrapAll("<div id='allOurCourses' class='owl-carousel owl-theme owl-loaded owl-drag'></div>");$(".frontpage-course-list-all > .coursebox").addClass("item");$(".owl-item:first").addClass("active")}
if($('#allOurCourses')){if($('body').hasClass('dir-rtl')===!0){$('#allOurCourses').addClass('owl-rtl');$("#allOurCourses").owlCarousel({rtl:!0,navigation:!0,autoplay:!0,slideSpeed:300,paginationSpeed:400,dots:!1,responsiveClass:!0,responsive:{0:{items:1,nav:!0},600:{items:2,nav:!0,},1000:{items:4,nav:!0,}}})}else{$("#allOurCourses").owlCarousel({rtl:!1,navigation:!0,autoplay:!0,slideSpeed:300,paginationSpeed:400,dots:!1,responsiveClass:!0,responsive:{0:{items:1,nav:!0},600:{items:2,nav:!0,},1000:{items:4,nav:!0,}}})}}
if($("#owl-demo > .owl-nav")){$("#owl-demo > .owl-nav").insertBefore(".frontpage-course-list-all > .owl-carousel")}
if($('.paging-morelink > a')){$('.paging-morelink > a').addClass('paging-morelink-link')}
var elements=document.getElementsByClassName('paging-morelink-link');if(elements){for(var i=0;i<elements.length;i++){if(elements[i].innerHTML=='All courses'){elements[i].innerHTML="View all courses";break}}}
if($('.paging-morelink > a')){$(".paging-morelink > a").append("<i class='fa fa-long-arrow-right' aria-hidden='true'></i>")}}catch(ignore){}
try{var fpageCourseListAll=$("#frontpage-available-course-list");var fpageAllCourse=fpageCourseListAll&&fpageCourseListAll.find(".frontpage-course-list-all");var owlItem=fpageAllCourse&&fpageAllCourse.find(".owl-item .coursebox");owlItem.each(function(j,node){$(node).mouseenter(function(event){event.stopPropagation();if($(event.currentTarget).find('.content').length>0){var contentTag=$(event.currentTarget).find('.content');if(contentTag.find(".info h3.coursename a").length>0){var courseNameTag=contentTag&&contentTag.find(".info h3.coursename a");var hrefTag=courseNameTag&&courseNameTag[0].href;var summaryTag=contentTag&&contentTag.find(".summary");if(summaryTag){if(contentTag.find('.visitlink').length===0){$("<div class='visitlink'><a href=' "+hrefTag+"'><span>Enter<i class='fa fa-arrow-circle-o-right' aria-hidden='true'></i></span></a></div>").insertAfter(summaryTag)}}}}})})}catch(ignore){}
try{if($('#frontpage-available-course-list .coursebox .content')||$('#frontpage-course-list .coursebox .content')){$.each($('#frontpage-available-course-list .coursebox .content, #frontpage-course-list .coursebox .content'),function(index,item){$(item).attr('data-simplebar',"init")})}}catch(ignore){}
var siteNewsForum=$('#site-news-forum').html();if(typeof siteNewsForum!=='undefined'&&siteNewsForum!==null){if($('.news-col8')){$('.news-col8').append('<div id="site-news-forum">'+siteNewsForum+'</div>')}
if($('#region-main #site-news-forum')){$('#region-main #site-news-forum').remove()}};if($('#site-news-forum').length===0){$('#page .news-col8').remove()}
if($('#site-news-forum')){$('#site-news-forum .forum-post-container').addClass('clearfix')}
if($('#site-news-forum h2').length!==0){$('#site-news-forum h2')[0].innerHTML="Latest News"}
try{var frontpageCourseList=$('#frontpage-course-list').html();if(typeof frontpageCourseList!=='undefined'&&frontpageCourseList!==null){if($('#enrolledcourses')){$('#enrolledcourses > .container').append('<div id="frontpage-course-list">'+frontpageCourseList+'</div>')}
if($('#region-main #frontpage-course-list')){$('#region-main #frontpage-course-list').remove()}};if($('#frontpage-course-list').length===0){if($('#page #enrolledcourses')){$('#page #enrolledcourses').remove()}}
if($('#frontpage-course-list > h2')){$('#frontpage-course-list h2')[0].innerHTML="Enrolled Courses";$('#frontpage-course-list > h2').after('<p id="mycoursestagline" class="tagline"></p>');var myCoursesTag=document.getElementById("mycoursestagline")?document.getElementById("mycoursestagline").innerHTML=mycoursestagline:''}
if($(".frontpage-course-list-enrolled > .coursebox")){$("#enrolledcourses .frontpage-course-list-enrolled > .coursebox").wrapAll("<div id='myEnrolledCourses' class='owl-carousel owl-theme owl-loaded owl-drag'></div>");$(".frontpage-course-list-enrolled > .coursebox").addClass("item");$(".owl-item:first").addClass("active")}
if($('#myEnrolledCourses')){if($('body').hasClass('dir-rtl')===!0){$('#myEnrolledCourses').addClass('owl-rtl');$("#myEnrolledCourses").owlCarousel({rtl:!0,navigation:!0,autoplay:!0,slideSpeed:300,paginationSpeed:400,dots:!1,responsiveClass:!0,responsive:{0:{items:1,nav:!0},600:{items:2,nav:!0,},1000:{items:4,nav:!0,}}})}else{$("#myEnrolledCourses").owlCarousel({rtl:!1,navigation:!0,autoplay:!0,slideSpeed:300,paginationSpeed:400,dots:!1,responsiveClass:!0,responsive:{0:{items:1,nav:!0},600:{items:2,nav:!0,},1000:{items:4,nav:!0,}}})}}
if($("#owl-demo > .owl-nav")){$("#owl-demo > .owl-nav").insertBefore(".frontpage-course-list-enrolled > .owl-carousel")}
if($('.paging-morelink > a')){$('.paging-morelink > a').addClass('paging-morelink-link')}
var elements=document.getElementsByClassName('paging-morelink-link');if(elements){for(var i=0;i<elements.length;i++){if(elements[i].innerHTML=='All courses'){elements[i].innerHTML="View all courses";break}}}}catch(ignore){}
try{var fpageCourseList=$("#frontpage-course-list");var fpageEnrolledCourse=fpageCourseList&&fpageCourseList.find(".frontpage-course-list-enrolled");var owlItem=fpageEnrolledCourse&&fpageEnrolledCourse.find(".owl-item .coursebox");owlItem.each(function(j,node){$(node).mouseenter(function(event){event.stopPropagation();var contentTag=$(event.currentTarget).find('.content');var courseNameTag=contentTag&&contentTag.find(".info h3.coursename a");var hrefTag=courseNameTag&&courseNameTag[0].href;var summaryTag=contentTag&&contentTag.find(".summary");if(summaryTag){if(contentTag.find('.visitlink').length===0){$("<div class='visitlink'><a href=' "+hrefTag+"'><span>Enter<i class='fa fa-arrow-circle-o-right' aria-hidden='true'></i></span></a></div>").insertAfter(summaryTag)}}})})}catch(ignore){}
$("body#page-calendar-view .calendar-controls").addClass("clearfix");try{$(".morelink").click(function(){if($(this).hasClass("less")){$(this).removeClass("less");$(this).html(moretext)}else{$(this).addClass("less");$(this).html(lesstext)}
$(this).parent().prev().toggle();$(this).prev().toggle();return!1})}catch(ignore){}
var selectedClass="";$(".fil-cat").click(function(){selectedClass=$(this).attr("data-rel");$("#portfolio").fadeTo(100,0.1);$("#portfolio div").not("."+selectedClass).fadeOut().removeClass('scale-anm');setTimeout(function(){$("."+selectedClass).fadeIn().addClass('scale-anm');$("#portfolio").fadeTo(300,1)},300)})});
$(document).ready(function(){try{jQuery(window).scroll(function(){if(jQuery(this).scrollTop()>100){jQuery('.scrollup').fadeIn()}else{jQuery('.scrollup').fadeOut()}});jQuery('.scrollup').click(function(){jQuery("html, body").animate({scrollTop:0},600);return!1})
$(window).scroll(function(){if($(this).scrollTop()>100){$('#backtotop ').fadeIn()}else{$('#backtotop').fadeOut()}});$('#backtotop a').click(function(e){e.preventDefault();$("html, body").animate({top:0});return!1})}catch(ignore){}});
document.getElementsByClassName("teacher-slider").length>0&&(!function(e,t,n){var l;i=new function(){this.init=function(){var n=Math.max(t.documentElement.clientWidth,e.innerWidth||0),o=t.getElementsByClassName("teacher-slider")[0].children,l=null;n>1024?(l=o[2],i(l,"zoom")):(l=o[1],i(l,"zoom"))};var n=function(t){var n=t.getBoundingClientRect(),i=n.top+n.height/5,o=i>=0&&i<=e.innerHeight,l=(i=n.bottom-n.height/5)>=0&&i<=e.innerHeight;return o||l};this.elementVisibleInViewPort=n,this.addEventToTarget=function(e,n,i){if(!(n instanceof HTMLElement&&"function"==typeof i&&"string"==typeof e))return console.warn("Invalid function invocation!"),!1;t.addEventListener?n.addEventListener(e,i):t.attachEvent&&n.attachEvent("on"+e.toUpperCase,i)};var i=function(e,t){$(e).addClass(t)};this.addClass=i;var o=function(e,t){$(e).removeClass(t)};this.removeClass=o,this.hasClass=function(e,t){return $(e).hasClass(t)};var l,r,a,c,s,d,u,m,f,v,h,g,I=function(e){return t.getElementById(e)};this.getElementById=I,this.Counter=function(e,t,n){var i=I(t);if(i){var o=n/50,l=Math.ceil(e/o),r=!0;i.style.opacity=.4,this.visibleOnScroll=function(t){t&&r&&a(i,e,l)};var a=function(e,t,n){r=!1;var i=0;e.style.opacity=.4;var l=.6/o,a=setInterval(function(){e.style.opacity=Number(e.style.opacity)+l,i+=n,e.innerHTML=Number(i).toLocaleString("en-IN"),i>=t&&(e.innerHTML=Number(t).toLocaleString("en-IN"),e.style.opacity=1,clearInterval(a))},50)}}},this.Slider=function(){var e=0,i={sliderId:null,nextBtnId:null,prevBtnId:null,autoPlay:!1,preNextAction:null,postNextAction:null,prePrevAction:null,postPrevAction:null,autoPlayTimeInterval:null,activeItemScale:0};this.init=function(){var t=$("#"+i.sliderId+" ul li").length*(e=$("#"+i.sliderId+" ul li").width());if(i&&i.activeItemScale&&(t+=e*(i.activeItemScale-1)),$("#"+i.sliderId+" ul").css({width:t,marginLeft:-e}),$("#"+i.sliderId+" ul li:last-child").prependTo("#"+i.sliderId+" ul"),i&&i.autoPlay&&n(I(i.sliderId))){var o=this;setTimeout(function(){o.sliderViewOnScroll(!0)},500)}},this.setSliderConfig=function(e){i=e};var l=null;this.startAutoPlay=function(){l&&r();var e=this;l=setInterval(function(){e.moveRightEventHandler()},i.autoPlayTimeInterval)};var r=function(){clearInterval(l),l=null};this.moveLeftEventHandler=function(e){i&&i.prePrevAction&&"function"==typeof i.prePrevAction&&i.prePrevAction(e),this.moveLeft(),i&&i.postPrevAction&&"function"==typeof i.postPrevAction&&i.postPrevAction(e)},this.moveRightEventHandler=function(e){i&&i.preNextAction&&"function"==typeof i.preNextAction&&i.preNextAction(e),this.moveRight(),i&&i.postNextAction&&"function"==typeof i.postNextAction&&i.postNextAction(e)},this.sliderViewOnScroll=function(e){e?l||(this.startAutoPlay(),this.moveRightEventHandler()):r()},this.mouseOverOnSlider=function(e){r()},this.mouseOutOnSlider=function(e){!l&&this.startAutoPlay()},this.moveLeft=function(){$("#"+i.sliderId+" ul").animate({left:+e},500,function(){$("#"+i.prevBtnId),o(t.getElementById(i.prevBtnId),"disable"),$("#"+i.sliderId+" ul li:last-child").prependTo("#"+i.sliderId+" ul"),$("#"+i.sliderId+" ul").css("left","")})},this.moveRight=function(){$("#"+i.sliderId+" ul").animate({left:-e},500,function(){o(t.getElementById(i.nextBtnId),"disable"),$("#"+i.sliderId+" ul li:first-child").appendTo("#"+i.sliderId+" ul"),$("#"+i.sliderId+" ul").css("left","")})}},this.teacherSliderAnimation=(v={zoomClass:null,zoomOutClass:null,commentDOMId:null},h=function(e){var n=t.getElementsByClassName(v.zoomClass)[0];"LEFT"==e?(i(n.previousElementSibling,v.zoomClass),o(n.previousElementSibling,v.zoomOutClass)):(i(n.nextElementSibling,v.zoomClass),o(n.nextElementSibling,v.zoomOutClass)),setTimeout(function(){i(n,v.zoomOutClass),o(n,v.zoomClass),g()},50)},g=function(){var e=t.getElementsByClassName(v.zoomClass)[0];t.getElementById(v.commentDOMId).textContent='"'+e.getAttribute("data-comment")+'"'},{setAnimationConfig:function(e){v=e},moveSilderRight:function(e){var t;(t=e)&&i(t.target,"disable"),setTimeout(function(){h("RIGHT")},100)},moveSilderLeft:function(e){var t;(t=e)&&i(t.target,"disable"),setTimeout(function(){h("LEFT")},100)},changeTeacherComment:function(){}}),this.newsAnimation=(a=null,c={containerDOMId:null,activeClass:null,timeInterval:0,newsHeadPicId:null,newsCommentId:null},s=function(){a&&d(),a=setInterval(function(){m(!0)},c.timeInterval)},d=function(){clearInterval(a),a=null},u=function(e){e?a||s():d()},m=function(e){var t=I(c.containerDOMId).children,n=null;for(var i in t)if($(t[i]).hasClass(c.activeClass)){n=null!=t[i].nextElementSibling?t[i].nextElementSibling:t[0],o(t[i],c.activeClass),e&&f(n);break}},f=function(e){i(e,c.activeClass),I(c.newsHeadPicId).src=e.firstElementChild.src,I(c.newsCommentId).textContent='"'+e.getAttribute("data-comment")+'"'},{init:function(){var e;e=I(c.containerDOMId).children[0],f(e),n(I(c.containerDOMId))&&u(!0)},setNewsConfig:function(e){c=e},newsViewOnScroll:function(e){u(e)},mouseOverOnNews:function(){d()},mouseOutOnNews:function(){!a&&s()},newsSelectionHandler:function(e){!function(e){if(e.target==e.currentTarget)return!1;d(),m(!1);var t=e.target.src?e.target.parentNode:e.target;f(t)}(e)}}),this.windowScrollModule=(r=[],{windowScrollConfigObj:function(){return r},addToWindowScrollConfigObj:function(e){r.push(e)},removeWindowScrollConfigObj:function(e){for(var t=0;t<r.length;t++)if(r[t].id===e){r.splice(t,1);break}},windowScrollHandler:function(){!l||clearTimeout(l),l=setTimeout(function(){!function(){for(var e in r){var t=I(r[e].id);t&&n(t)?r[e].callback&&"function"==typeof r[e].callback&&r[e].callback(!0):r[e].callback&&"function"==typeof r[e].callback&&r[e].callback(!1)}}()},200)}})},s=new function(){this.init=function(){},this.gAnalytics=(r=function(e,t,n,i){},{sendGAEvent:function(e,t,n,i){r(e,t,n,i)}})},o=(l=i,{init:function(){!function(){l.init();var n={};n={id:"first-section",enable:!0,callback:l.showGotoTop},l.windowScrollModule.addToWindowScrollConfigObj(n);var i=l.getElementById("first-section");l.elementVisibleInViewPort(i),e.onscroll=l.windowScrollModule.windowScrollHandler,$("#v-popup-container").load("/static/tags/vPopup.html?ver="),l.teacherSliderAnimation.setAnimationConfig({zoomClass:"zoom",zoomOutClass:"zoom-out",commentDOMId:"teacher-comment"}),l.teacherSliderAnimation.changeTeacherComment();var o=new l.Slider,r={sliderId:"teachers-slider",teacherSliderId:"teacher-slider-wrapper",nextBtnId:"next-teacher",prevBtnId:"prev-teacher",autoPlay:!0,preNextAction:l.teacherSliderAnimation.moveSilderRight,postNextAction:null,prePrevAction:l.teacherSliderAnimation.moveSilderLeft,postPrevAction:null,autoPlayTimeInterval:4e3,activeItemScale:1.5};o.setSliderConfig(r),o.init(),n={id:"teacher-slider-wrapper",enable:!0,callback:function(e){o.sliderViewOnScroll(e)}},l.windowScrollModule.addToWindowScrollConfigObj(n),l.addEventToTarget("click",l.getElementById(r.prevBtnId),function(e){o.moveLeftEventHandler(e),s.gAnalytics.sendGAEvent("CLICK","TEACHER_SLIDER_PREVIOUS",1)}),l.addEventToTarget("click",l.getElementById(r.nextBtnId),function(e){o.moveRightEventHandler(e),s.gAnalytics.sendGAEvent("CLICK","TEACHER_SLIDER_NEXT",1)}),l.getElementById(r.sliderId).onmouseover=function(){o.mouseOverOnSlider()},l.getElementById(r.sliderId).onmouseout=function(){o.mouseOutOnSlider()};for(var a=l.getElementById(r.teacherSliderId).querySelectorAll("li div img"),c=0;c<a.length;c++)l.addEventToTarget("click",a[c],function(e){});new l.Slider,l.newsAnimation.setNewsConfig({containerDOMId:"news-list-container",activeClass:"active",timeInterval:6e3,newsHeadPicId:"news-head-image",newsCommentId:"news-comment"}),l.addEventToTarget("click",l.getElementById("news-list-container"),function(e){if(e.target==e.currentTarget)return!1;l.newsAnimation.newsSelectionHandler(e);var n=t.getElementsByClassName("active")[0].firstElementChild.getAttribute("alt");s.gAnalytics.sendGAEvent("NEWS_SELECT",n,1)})}()}})}(window,document),$(document).ready(function(){console.log("Document is now ready for go ahead!!"),o.init()}))