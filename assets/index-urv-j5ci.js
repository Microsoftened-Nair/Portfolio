(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();var qg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Yg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var pp={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */(function(s){(function(e,t){s.exports=e.document?t(e,!0):function(n){if(!n.document)throw new Error("jQuery requires a window with a document");return t(n)}})(typeof window<"u"?window:qg,function(e,t){var n=[],i=Object.getPrototypeOf,r=n.slice,o=n.flat?function(c){return n.flat.call(c)}:function(c){return n.concat.apply([],c)},a=n.push,l=n.indexOf,u={},f=u.toString,d=u.hasOwnProperty,m=d.toString,v=m.call(Object),S={},y=function(h){return typeof h=="function"&&typeof h.nodeType!="number"&&typeof h.item!="function"},x=function(h){return h!=null&&h===h.window},g=e.document,C={type:!0,src:!0,nonce:!0,noModule:!0};function A(c,h,_){_=_||g;var b,T,M=_.createElement("script");if(M.text=c,h)for(b in C)T=h[b]||h.getAttribute&&h.getAttribute(b),T&&M.setAttribute(b,T);_.head.appendChild(M).parentNode.removeChild(M)}function R(c){return c==null?c+"":typeof c=="object"||typeof c=="function"?u[f.call(c)]||"object":typeof c}var N="3.7.1",O=/HTML$/i,p=function(c,h){return new p.fn.init(c,h)};p.fn=p.prototype={jquery:N,constructor:p,length:0,toArray:function(){return r.call(this)},get:function(c){return c==null?r.call(this):c<0?this[c+this.length]:this[c]},pushStack:function(c){var h=p.merge(this.constructor(),c);return h.prevObject=this,h},each:function(c){return p.each(this,c)},map:function(c){return this.pushStack(p.map(this,function(h,_){return c.call(h,_,h)}))},slice:function(){return this.pushStack(r.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(p.grep(this,function(c,h){return(h+1)%2}))},odd:function(){return this.pushStack(p.grep(this,function(c,h){return h%2}))},eq:function(c){var h=this.length,_=+c+(c<0?h:0);return this.pushStack(_>=0&&_<h?[this[_]]:[])},end:function(){return this.prevObject||this.constructor()},push:a,sort:n.sort,splice:n.splice},p.extend=p.fn.extend=function(){var c,h,_,b,T,M,w=arguments[0]||{},B=1,F=arguments.length,W=!1;for(typeof w=="boolean"&&(W=w,w=arguments[B]||{},B++),typeof w!="object"&&!y(w)&&(w={}),B===F&&(w=this,B--);B<F;B++)if((c=arguments[B])!=null)for(h in c)b=c[h],!(h==="__proto__"||w===b)&&(W&&b&&(p.isPlainObject(b)||(T=Array.isArray(b)))?(_=w[h],T&&!Array.isArray(_)?M=[]:!T&&!p.isPlainObject(_)?M={}:M=_,T=!1,w[h]=p.extend(W,M,b)):b!==void 0&&(w[h]=b));return w},p.extend({expando:"jQuery"+(N+Math.random()).replace(/\D/g,""),isReady:!0,error:function(c){throw new Error(c)},noop:function(){},isPlainObject:function(c){var h,_;return!c||f.call(c)!=="[object Object]"?!1:(h=i(c),h?(_=d.call(h,"constructor")&&h.constructor,typeof _=="function"&&m.call(_)===v):!0)},isEmptyObject:function(c){var h;for(h in c)return!1;return!0},globalEval:function(c,h,_){A(c,{nonce:h&&h.nonce},_)},each:function(c,h){var _,b=0;if(G(c))for(_=c.length;b<_&&h.call(c[b],b,c[b])!==!1;b++);else for(b in c)if(h.call(c[b],b,c[b])===!1)break;return c},text:function(c){var h,_="",b=0,T=c.nodeType;if(!T)for(;h=c[b++];)_+=p.text(h);return T===1||T===11?c.textContent:T===9?c.documentElement.textContent:T===3||T===4?c.nodeValue:_},makeArray:function(c,h){var _=h||[];return c!=null&&(G(Object(c))?p.merge(_,typeof c=="string"?[c]:c):a.call(_,c)),_},inArray:function(c,h,_){return h==null?-1:l.call(h,c,_)},isXMLDoc:function(c){var h=c&&c.namespaceURI,_=c&&(c.ownerDocument||c).documentElement;return!O.test(h||_&&_.nodeName||"HTML")},merge:function(c,h){for(var _=+h.length,b=0,T=c.length;b<_;b++)c[T++]=h[b];return c.length=T,c},grep:function(c,h,_){for(var b,T=[],M=0,w=c.length,B=!_;M<w;M++)b=!h(c[M],M),b!==B&&T.push(c[M]);return T},map:function(c,h,_){var b,T,M=0,w=[];if(G(c))for(b=c.length;M<b;M++)T=h(c[M],M,_),T!=null&&w.push(T);else for(M in c)T=h(c[M],M,_),T!=null&&w.push(T);return o(w)},guid:1,support:S}),typeof Symbol=="function"&&(p.fn[Symbol.iterator]=n[Symbol.iterator]),p.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(c,h){u["[object "+h+"]"]=h.toLowerCase()});function G(c){var h=!!c&&"length"in c&&c.length,_=R(c);return y(c)||x(c)?!1:_==="array"||h===0||typeof h=="number"&&h>0&&h-1 in c}function E(c,h){return c.nodeName&&c.nodeName.toLowerCase()===h.toLowerCase()}var D=n.pop,Z=n.sort,q=n.splice,$="[\\x20\\t\\r\\n\\f]",k=new RegExp("^"+$+"+|((?:^|[^\\\\])(?:\\\\.)*)"+$+"+$","g");p.contains=function(c,h){var _=h&&h.parentNode;return c===_||!!(_&&_.nodeType===1&&(c.contains?c.contains(_):c.compareDocumentPosition&&c.compareDocumentPosition(_)&16))};var X=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function Y(c,h){return h?c==="\0"?"�":c.slice(0,-1)+"\\"+c.charCodeAt(c.length-1).toString(16)+" ":"\\"+c}p.escapeSelector=function(c){return(c+"").replace(X,Y)};var le=g,ce=a;(function(){var c,h,_,b,T,M=ce,w,B,F,W,oe,de=p.expando,J=0,Se=0,nt=Da(),wt=Da(),_t=Da(),Cn=Da(),pn=function(I,H){return I===H&&(T=!0),0},Oi="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",Ii="(?:\\\\[\\da-fA-F]{1,6}"+$+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",St="\\["+$+"*("+Ii+")(?:"+$+"*([*^$|!~]?=)"+$+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Ii+"))|)"+$+"*\\]",Jr=":("+Ii+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+St+")*)|.*)\\)|)",Rt=new RegExp($+"+","g"),tn=new RegExp("^"+$+"*,"+$+"*"),Fo=new RegExp("^"+$+"*([>+~]|"+$+")"+$+"*"),oc=new RegExp($+"|>"),Ui=new RegExp(Jr),Bo=new RegExp("^"+Ii+"$"),Fi={ID:new RegExp("^#("+Ii+")"),CLASS:new RegExp("^\\.("+Ii+")"),TAG:new RegExp("^("+Ii+"|[*])"),ATTR:new RegExp("^"+St),PSEUDO:new RegExp("^"+Jr),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+$+"*(even|odd|(([+-]|)(\\d*)n|)"+$+"*(?:([+-]|)"+$+"*(\\d+)|))"+$+"*\\)|)","i"),bool:new RegExp("^(?:"+Oi+")$","i"),needsContext:new RegExp("^"+$+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+$+"*((?:-\\d)?\\d*)"+$+"*\\)|)(?=[^-]|$)","i")},_r=/^(?:input|select|textarea|button)$/i,vr=/^h\d$/i,ai=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ac=/[+~]/,Qi=new RegExp("\\\\[\\da-fA-F]{1,6}"+$+"?|\\\\([^\\r\\n\\f])","g"),$i=function(I,H){var K="0x"+I.slice(1)-65536;return H||(K<0?String.fromCharCode(K+65536):String.fromCharCode(K>>10|55296,K&1023|56320))},zg=function(){xr()},Hg=Oa(function(I){return I.disabled===!0&&E(I,"fieldset")},{dir:"parentNode",next:"legend"});function Gg(){try{return w.activeElement}catch{}}try{M.apply(n=r.call(le.childNodes),le.childNodes),n[le.childNodes.length].nodeType}catch{M={apply:function(H,K){ce.apply(H,r.call(K))},call:function(H){ce.apply(H,r.call(arguments,1))}}}function It(I,H,K,ie){var he,Ae,De,ke,Ne,yt,tt,rt=H&&H.ownerDocument,bt=H?H.nodeType:9;if(K=K||[],typeof I!="string"||!I||bt!==1&&bt!==9&&bt!==11)return K;if(!ie&&(xr(H),H=H||w,F)){if(bt!==11&&(Ne=ai.exec(I)))if(he=Ne[1]){if(bt===9)if(De=H.getElementById(he)){if(De.id===he)return M.call(K,De),K}else return K;else if(rt&&(De=rt.getElementById(he))&&It.contains(H,De)&&De.id===he)return M.call(K,De),K}else{if(Ne[2])return M.apply(K,H.getElementsByTagName(I)),K;if((he=Ne[3])&&H.getElementsByClassName)return M.apply(K,H.getElementsByClassName(he)),K}if(!Cn[I+" "]&&(!W||!W.test(I))){if(tt=I,rt=H,bt===1&&(oc.test(I)||Fo.test(I))){for(rt=ac.test(I)&&lc(H.parentNode)||H,(rt!=H||!S.scope)&&((ke=H.getAttribute("id"))?ke=p.escapeSelector(ke):H.setAttribute("id",ke=de)),yt=ko(I),Ae=yt.length;Ae--;)yt[Ae]=(ke?"#"+ke:":scope")+" "+Na(yt[Ae]);tt=yt.join(",")}try{return M.apply(K,rt.querySelectorAll(tt)),K}catch{Cn(I,!0)}finally{ke===de&&H.removeAttribute("id")}}}return Wf(I.replace(k,"$1"),H,K,ie)}function Da(){var I=[];function H(K,ie){return I.push(K+" ")>h.cacheLength&&delete H[I.shift()],H[K+" "]=ie}return H}function Ti(I){return I[de]=!0,I}function Os(I){var H=w.createElement("fieldset");try{return!!I(H)}catch{return!1}finally{H.parentNode&&H.parentNode.removeChild(H),H=null}}function Vg(I){return function(H){return E(H,"input")&&H.type===I}}function Wg(I){return function(H){return(E(H,"input")||E(H,"button"))&&H.type===I}}function Gf(I){return function(H){return"form"in H?H.parentNode&&H.disabled===!1?"label"in H?"label"in H.parentNode?H.parentNode.disabled===I:H.disabled===I:H.isDisabled===I||H.isDisabled!==!I&&Hg(H)===I:H.disabled===I:"label"in H?H.disabled===I:!1}}function Qr(I){return Ti(function(H){return H=+H,Ti(function(K,ie){for(var he,Ae=I([],K.length,H),De=Ae.length;De--;)K[he=Ae[De]]&&(K[he]=!(ie[he]=K[he]))})})}function lc(I){return I&&typeof I.getElementsByTagName<"u"&&I}function xr(I){var H,K=I?I.ownerDocument||I:le;return K==w||K.nodeType!==9||!K.documentElement||(w=K,B=w.documentElement,F=!p.isXMLDoc(w),oe=B.matches||B.webkitMatchesSelector||B.msMatchesSelector,B.msMatchesSelector&&le!=w&&(H=w.defaultView)&&H.top!==H&&H.addEventListener("unload",zg),S.getById=Os(function(ie){return B.appendChild(ie).id=p.expando,!w.getElementsByName||!w.getElementsByName(p.expando).length}),S.disconnectedMatch=Os(function(ie){return oe.call(ie,"*")}),S.scope=Os(function(){return w.querySelectorAll(":scope")}),S.cssHas=Os(function(){try{return w.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),S.getById?(h.filter.ID=function(ie){var he=ie.replace(Qi,$i);return function(Ae){return Ae.getAttribute("id")===he}},h.find.ID=function(ie,he){if(typeof he.getElementById<"u"&&F){var Ae=he.getElementById(ie);return Ae?[Ae]:[]}}):(h.filter.ID=function(ie){var he=ie.replace(Qi,$i);return function(Ae){var De=typeof Ae.getAttributeNode<"u"&&Ae.getAttributeNode("id");return De&&De.value===he}},h.find.ID=function(ie,he){if(typeof he.getElementById<"u"&&F){var Ae,De,ke,Ne=he.getElementById(ie);if(Ne){if(Ae=Ne.getAttributeNode("id"),Ae&&Ae.value===ie)return[Ne];for(ke=he.getElementsByName(ie),De=0;Ne=ke[De++];)if(Ae=Ne.getAttributeNode("id"),Ae&&Ae.value===ie)return[Ne]}return[]}}),h.find.TAG=function(ie,he){return typeof he.getElementsByTagName<"u"?he.getElementsByTagName(ie):he.querySelectorAll(ie)},h.find.CLASS=function(ie,he){if(typeof he.getElementsByClassName<"u"&&F)return he.getElementsByClassName(ie)},W=[],Os(function(ie){var he;B.appendChild(ie).innerHTML="<a id='"+de+"' href='' disabled='disabled'></a><select id='"+de+"-\r\\' disabled='disabled'><option selected=''></option></select>",ie.querySelectorAll("[selected]").length||W.push("\\["+$+"*(?:value|"+Oi+")"),ie.querySelectorAll("[id~="+de+"-]").length||W.push("~="),ie.querySelectorAll("a#"+de+"+*").length||W.push(".#.+[+~]"),ie.querySelectorAll(":checked").length||W.push(":checked"),he=w.createElement("input"),he.setAttribute("type","hidden"),ie.appendChild(he).setAttribute("name","D"),B.appendChild(ie).disabled=!0,ie.querySelectorAll(":disabled").length!==2&&W.push(":enabled",":disabled"),he=w.createElement("input"),he.setAttribute("name",""),ie.appendChild(he),ie.querySelectorAll("[name='']").length||W.push("\\["+$+"*name"+$+"*="+$+`*(?:''|"")`)}),S.cssHas||W.push(":has"),W=W.length&&new RegExp(W.join("|")),pn=function(ie,he){if(ie===he)return T=!0,0;var Ae=!ie.compareDocumentPosition-!he.compareDocumentPosition;return Ae||(Ae=(ie.ownerDocument||ie)==(he.ownerDocument||he)?ie.compareDocumentPosition(he):1,Ae&1||!S.sortDetached&&he.compareDocumentPosition(ie)===Ae?ie===w||ie.ownerDocument==le&&It.contains(le,ie)?-1:he===w||he.ownerDocument==le&&It.contains(le,he)?1:b?l.call(b,ie)-l.call(b,he):0:Ae&4?-1:1)}),w}It.matches=function(I,H){return It(I,null,null,H)},It.matchesSelector=function(I,H){if(xr(I),F&&!Cn[H+" "]&&(!W||!W.test(H)))try{var K=oe.call(I,H);if(K||S.disconnectedMatch||I.document&&I.document.nodeType!==11)return K}catch{Cn(H,!0)}return It(H,w,null,[I]).length>0},It.contains=function(I,H){return(I.ownerDocument||I)!=w&&xr(I),p.contains(I,H)},It.attr=function(I,H){(I.ownerDocument||I)!=w&&xr(I);var K=h.attrHandle[H.toLowerCase()],ie=K&&d.call(h.attrHandle,H.toLowerCase())?K(I,H,!F):void 0;return ie!==void 0?ie:I.getAttribute(H)},It.error=function(I){throw new Error("Syntax error, unrecognized expression: "+I)},p.uniqueSort=function(I){var H,K=[],ie=0,he=0;if(T=!S.sortStable,b=!S.sortStable&&r.call(I,0),Z.call(I,pn),T){for(;H=I[he++];)H===I[he]&&(ie=K.push(he));for(;ie--;)q.call(I,K[ie],1)}return b=null,I},p.fn.uniqueSort=function(){return this.pushStack(p.uniqueSort(r.apply(this)))},h=p.expr={cacheLength:50,createPseudo:Ti,match:Fi,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(I){return I[1]=I[1].replace(Qi,$i),I[3]=(I[3]||I[4]||I[5]||"").replace(Qi,$i),I[2]==="~="&&(I[3]=" "+I[3]+" "),I.slice(0,4)},CHILD:function(I){return I[1]=I[1].toLowerCase(),I[1].slice(0,3)==="nth"?(I[3]||It.error(I[0]),I[4]=+(I[4]?I[5]+(I[6]||1):2*(I[3]==="even"||I[3]==="odd")),I[5]=+(I[7]+I[8]||I[3]==="odd")):I[3]&&It.error(I[0]),I},PSEUDO:function(I){var H,K=!I[6]&&I[2];return Fi.CHILD.test(I[0])?null:(I[3]?I[2]=I[4]||I[5]||"":K&&Ui.test(K)&&(H=ko(K,!0))&&(H=K.indexOf(")",K.length-H)-K.length)&&(I[0]=I[0].slice(0,H),I[2]=K.slice(0,H)),I.slice(0,3))}},filter:{TAG:function(I){var H=I.replace(Qi,$i).toLowerCase();return I==="*"?function(){return!0}:function(K){return E(K,H)}},CLASS:function(I){var H=nt[I+" "];return H||(H=new RegExp("(^|"+$+")"+I+"("+$+"|$)"))&&nt(I,function(K){return H.test(typeof K.className=="string"&&K.className||typeof K.getAttribute<"u"&&K.getAttribute("class")||"")})},ATTR:function(I,H,K){return function(ie){var he=It.attr(ie,I);return he==null?H==="!=":H?(he+="",H==="="?he===K:H==="!="?he!==K:H==="^="?K&&he.indexOf(K)===0:H==="*="?K&&he.indexOf(K)>-1:H==="$="?K&&he.slice(-K.length)===K:H==="~="?(" "+he.replace(Rt," ")+" ").indexOf(K)>-1:H==="|="?he===K||he.slice(0,K.length+1)===K+"-":!1):!0}},CHILD:function(I,H,K,ie,he){var Ae=I.slice(0,3)!=="nth",De=I.slice(-4)!=="last",ke=H==="of-type";return ie===1&&he===0?function(Ne){return!!Ne.parentNode}:function(Ne,yt,tt){var rt,bt,Ke,Vt,Xn,Ln=Ae!==De?"nextSibling":"previousSibling",li=Ne.parentNode,Bi=ke&&Ne.nodeName.toLowerCase(),Is=!tt&&!ke,Bn=!1;if(li){if(Ae){for(;Ln;){for(Ke=Ne;Ke=Ke[Ln];)if(ke?E(Ke,Bi):Ke.nodeType===1)return!1;Xn=Ln=I==="only"&&!Xn&&"nextSibling"}return!0}if(Xn=[De?li.firstChild:li.lastChild],De&&Is){for(bt=li[de]||(li[de]={}),rt=bt[I]||[],Vt=rt[0]===J&&rt[1],Bn=Vt&&rt[2],Ke=Vt&&li.childNodes[Vt];Ke=++Vt&&Ke&&Ke[Ln]||(Bn=Vt=0)||Xn.pop();)if(Ke.nodeType===1&&++Bn&&Ke===Ne){bt[I]=[J,Vt,Bn];break}}else if(Is&&(bt=Ne[de]||(Ne[de]={}),rt=bt[I]||[],Vt=rt[0]===J&&rt[1],Bn=Vt),Bn===!1)for(;(Ke=++Vt&&Ke&&Ke[Ln]||(Bn=Vt=0)||Xn.pop())&&!((ke?E(Ke,Bi):Ke.nodeType===1)&&++Bn&&(Is&&(bt=Ke[de]||(Ke[de]={}),bt[I]=[J,Bn]),Ke===Ne)););return Bn-=he,Bn===ie||Bn%ie===0&&Bn/ie>=0}}},PSEUDO:function(I,H){var K,ie=h.pseudos[I]||h.setFilters[I.toLowerCase()]||It.error("unsupported pseudo: "+I);return ie[de]?ie(H):ie.length>1?(K=[I,I,"",H],h.setFilters.hasOwnProperty(I.toLowerCase())?Ti(function(he,Ae){for(var De,ke=ie(he,H),Ne=ke.length;Ne--;)De=l.call(he,ke[Ne]),he[De]=!(Ae[De]=ke[Ne])}):function(he){return ie(he,0,K)}):ie}},pseudos:{not:Ti(function(I){var H=[],K=[],ie=hc(I.replace(k,"$1"));return ie[de]?Ti(function(he,Ae,De,ke){for(var Ne,yt=ie(he,null,ke,[]),tt=he.length;tt--;)(Ne=yt[tt])&&(he[tt]=!(Ae[tt]=Ne))}):function(he,Ae,De){return H[0]=he,ie(H,null,De,K),H[0]=null,!K.pop()}}),has:Ti(function(I){return function(H){return It(I,H).length>0}}),contains:Ti(function(I){return I=I.replace(Qi,$i),function(H){return(H.textContent||p.text(H)).indexOf(I)>-1}}),lang:Ti(function(I){return Bo.test(I||"")||It.error("unsupported lang: "+I),I=I.replace(Qi,$i).toLowerCase(),function(H){var K;do if(K=F?H.lang:H.getAttribute("xml:lang")||H.getAttribute("lang"))return K=K.toLowerCase(),K===I||K.indexOf(I+"-")===0;while((H=H.parentNode)&&H.nodeType===1);return!1}}),target:function(I){var H=e.location&&e.location.hash;return H&&H.slice(1)===I.id},root:function(I){return I===B},focus:function(I){return I===Gg()&&w.hasFocus()&&!!(I.type||I.href||~I.tabIndex)},enabled:Gf(!1),disabled:Gf(!0),checked:function(I){return E(I,"input")&&!!I.checked||E(I,"option")&&!!I.selected},selected:function(I){return I.parentNode&&I.parentNode.selectedIndex,I.selected===!0},empty:function(I){for(I=I.firstChild;I;I=I.nextSibling)if(I.nodeType<6)return!1;return!0},parent:function(I){return!h.pseudos.empty(I)},header:function(I){return vr.test(I.nodeName)},input:function(I){return _r.test(I.nodeName)},button:function(I){return E(I,"input")&&I.type==="button"||E(I,"button")},text:function(I){var H;return E(I,"input")&&I.type==="text"&&((H=I.getAttribute("type"))==null||H.toLowerCase()==="text")},first:Qr(function(){return[0]}),last:Qr(function(I,H){return[H-1]}),eq:Qr(function(I,H,K){return[K<0?K+H:K]}),even:Qr(function(I,H){for(var K=0;K<H;K+=2)I.push(K);return I}),odd:Qr(function(I,H){for(var K=1;K<H;K+=2)I.push(K);return I}),lt:Qr(function(I,H,K){var ie;for(K<0?ie=K+H:K>H?ie=H:ie=K;--ie>=0;)I.push(ie);return I}),gt:Qr(function(I,H,K){for(var ie=K<0?K+H:K;++ie<H;)I.push(ie);return I})}},h.pseudos.nth=h.pseudos.eq;for(c in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})h.pseudos[c]=Vg(c);for(c in{submit:!0,reset:!0})h.pseudos[c]=Wg(c);function Vf(){}Vf.prototype=h.filters=h.pseudos,h.setFilters=new Vf;function ko(I,H){var K,ie,he,Ae,De,ke,Ne,yt=wt[I+" "];if(yt)return H?0:yt.slice(0);for(De=I,ke=[],Ne=h.preFilter;De;){(!K||(ie=tn.exec(De)))&&(ie&&(De=De.slice(ie[0].length)||De),ke.push(he=[])),K=!1,(ie=Fo.exec(De))&&(K=ie.shift(),he.push({value:K,type:ie[0].replace(k," ")}),De=De.slice(K.length));for(Ae in h.filter)(ie=Fi[Ae].exec(De))&&(!Ne[Ae]||(ie=Ne[Ae](ie)))&&(K=ie.shift(),he.push({value:K,type:Ae,matches:ie}),De=De.slice(K.length));if(!K)break}return H?De.length:De?It.error(I):wt(I,ke).slice(0)}function Na(I){for(var H=0,K=I.length,ie="";H<K;H++)ie+=I[H].value;return ie}function Oa(I,H,K){var ie=H.dir,he=H.next,Ae=he||ie,De=K&&Ae==="parentNode",ke=Se++;return H.first?function(Ne,yt,tt){for(;Ne=Ne[ie];)if(Ne.nodeType===1||De)return I(Ne,yt,tt);return!1}:function(Ne,yt,tt){var rt,bt,Ke=[J,ke];if(tt){for(;Ne=Ne[ie];)if((Ne.nodeType===1||De)&&I(Ne,yt,tt))return!0}else for(;Ne=Ne[ie];)if(Ne.nodeType===1||De)if(bt=Ne[de]||(Ne[de]={}),he&&E(Ne,he))Ne=Ne[ie]||Ne;else{if((rt=bt[Ae])&&rt[0]===J&&rt[1]===ke)return Ke[2]=rt[2];if(bt[Ae]=Ke,Ke[2]=I(Ne,yt,tt))return!0}return!1}}function cc(I){return I.length>1?function(H,K,ie){for(var he=I.length;he--;)if(!I[he](H,K,ie))return!1;return!0}:I[0]}function Xg(I,H,K){for(var ie=0,he=H.length;ie<he;ie++)It(I,H[ie],K);return K}function Ia(I,H,K,ie,he){for(var Ae,De=[],ke=0,Ne=I.length,yt=H!=null;ke<Ne;ke++)(Ae=I[ke])&&(!K||K(Ae,ie,he))&&(De.push(Ae),yt&&H.push(ke));return De}function uc(I,H,K,ie,he,Ae){return ie&&!ie[de]&&(ie=uc(ie)),he&&!he[de]&&(he=uc(he,Ae)),Ti(function(De,ke,Ne,yt){var tt,rt,bt,Ke,Vt=[],Xn=[],Ln=ke.length,li=De||Xg(H||"*",Ne.nodeType?[Ne]:Ne,[]),Bi=I&&(De||!H)?Ia(li,Vt,I,Ne,yt):li;if(K?(Ke=he||(De?I:Ln||ie)?[]:ke,K(Bi,Ke,Ne,yt)):Ke=Bi,ie)for(tt=Ia(Ke,Xn),ie(tt,[],Ne,yt),rt=tt.length;rt--;)(bt=tt[rt])&&(Ke[Xn[rt]]=!(Bi[Xn[rt]]=bt));if(De){if(he||I){if(he){for(tt=[],rt=Ke.length;rt--;)(bt=Ke[rt])&&tt.push(Bi[rt]=bt);he(null,Ke=[],tt,yt)}for(rt=Ke.length;rt--;)(bt=Ke[rt])&&(tt=he?l.call(De,bt):Vt[rt])>-1&&(De[tt]=!(ke[tt]=bt))}}else Ke=Ia(Ke===ke?Ke.splice(Ln,Ke.length):Ke),he?he(null,ke,Ke,yt):M.apply(ke,Ke)})}function fc(I){for(var H,K,ie,he=I.length,Ae=h.relative[I[0].type],De=Ae||h.relative[" "],ke=Ae?1:0,Ne=Oa(function(rt){return rt===H},De,!0),yt=Oa(function(rt){return l.call(H,rt)>-1},De,!0),tt=[function(rt,bt,Ke){var Vt=!Ae&&(Ke||bt!=_)||((H=bt).nodeType?Ne(rt,bt,Ke):yt(rt,bt,Ke));return H=null,Vt}];ke<he;ke++)if(K=h.relative[I[ke].type])tt=[Oa(cc(tt),K)];else{if(K=h.filter[I[ke].type].apply(null,I[ke].matches),K[de]){for(ie=++ke;ie<he&&!h.relative[I[ie].type];ie++);return uc(ke>1&&cc(tt),ke>1&&Na(I.slice(0,ke-1).concat({value:I[ke-2].type===" "?"*":""})).replace(k,"$1"),K,ke<ie&&fc(I.slice(ke,ie)),ie<he&&fc(I=I.slice(ie)),ie<he&&Na(I))}tt.push(K)}return cc(tt)}function jg(I,H){var K=H.length>0,ie=I.length>0,he=function(Ae,De,ke,Ne,yt){var tt,rt,bt,Ke=0,Vt="0",Xn=Ae&&[],Ln=[],li=_,Bi=Ae||ie&&h.find.TAG("*",yt),Is=J+=li==null?1:Math.random()||.1,Bn=Bi.length;for(yt&&(_=De==w||De||yt);Vt!==Bn&&(tt=Bi[Vt])!=null;Vt++){if(ie&&tt){for(rt=0,!De&&tt.ownerDocument!=w&&(xr(tt),ke=!F);bt=I[rt++];)if(bt(tt,De||w,ke)){M.call(Ne,tt);break}yt&&(J=Is)}K&&((tt=!bt&&tt)&&Ke--,Ae&&Xn.push(tt))}if(Ke+=Vt,K&&Vt!==Ke){for(rt=0;bt=H[rt++];)bt(Xn,Ln,De,ke);if(Ae){if(Ke>0)for(;Vt--;)Xn[Vt]||Ln[Vt]||(Ln[Vt]=D.call(Ne));Ln=Ia(Ln)}M.apply(Ne,Ln),yt&&!Ae&&Ln.length>0&&Ke+H.length>1&&p.uniqueSort(Ne)}return yt&&(J=Is,_=li),Xn};return K?Ti(he):he}function hc(I,H){var K,ie=[],he=[],Ae=_t[I+" "];if(!Ae){for(H||(H=ko(I)),K=H.length;K--;)Ae=fc(H[K]),Ae[de]?ie.push(Ae):he.push(Ae);Ae=_t(I,jg(he,ie)),Ae.selector=I}return Ae}function Wf(I,H,K,ie){var he,Ae,De,ke,Ne,yt=typeof I=="function"&&I,tt=!ie&&ko(I=yt.selector||I);if(K=K||[],tt.length===1){if(Ae=tt[0]=tt[0].slice(0),Ae.length>2&&(De=Ae[0]).type==="ID"&&H.nodeType===9&&F&&h.relative[Ae[1].type]){if(H=(h.find.ID(De.matches[0].replace(Qi,$i),H)||[])[0],H)yt&&(H=H.parentNode);else return K;I=I.slice(Ae.shift().value.length)}for(he=Fi.needsContext.test(I)?0:Ae.length;he--&&(De=Ae[he],!h.relative[ke=De.type]);)if((Ne=h.find[ke])&&(ie=Ne(De.matches[0].replace(Qi,$i),ac.test(Ae[0].type)&&lc(H.parentNode)||H))){if(Ae.splice(he,1),I=ie.length&&Na(Ae),!I)return M.apply(K,ie),K;break}}return(yt||hc(I,tt))(ie,H,!F,K,!H||ac.test(I)&&lc(H.parentNode)||H),K}S.sortStable=de.split("").sort(pn).join("")===de,xr(),S.sortDetached=Os(function(I){return I.compareDocumentPosition(w.createElement("fieldset"))&1}),p.find=It,p.expr[":"]=p.expr.pseudos,p.unique=p.uniqueSort,It.compile=hc,It.select=Wf,It.setDocument=xr,It.tokenize=ko,It.escape=p.escapeSelector,It.getText=p.text,It.isXML=p.isXMLDoc,It.selectors=p.expr,It.support=p.support,It.uniqueSort=p.uniqueSort})();var fe=function(c,h,_){for(var b=[],T=_!==void 0;(c=c[h])&&c.nodeType!==9;)if(c.nodeType===1){if(T&&p(c).is(_))break;b.push(c)}return b},me=function(c,h){for(var _=[];c;c=c.nextSibling)c.nodeType===1&&c!==h&&_.push(c);return _},Te=p.expr.match.needsContext,Me=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function ae(c,h,_){return y(h)?p.grep(c,function(b,T){return!!h.call(b,T,b)!==_}):h.nodeType?p.grep(c,function(b){return b===h!==_}):typeof h!="string"?p.grep(c,function(b){return l.call(h,b)>-1!==_}):p.filter(h,c,_)}p.filter=function(c,h,_){var b=h[0];return _&&(c=":not("+c+")"),h.length===1&&b.nodeType===1?p.find.matchesSelector(b,c)?[b]:[]:p.find.matches(c,p.grep(h,function(T){return T.nodeType===1}))},p.fn.extend({find:function(c){var h,_,b=this.length,T=this;if(typeof c!="string")return this.pushStack(p(c).filter(function(){for(h=0;h<b;h++)if(p.contains(T[h],this))return!0}));for(_=this.pushStack([]),h=0;h<b;h++)p.find(c,T[h],_);return b>1?p.uniqueSort(_):_},filter:function(c){return this.pushStack(ae(this,c||[],!1))},not:function(c){return this.pushStack(ae(this,c||[],!0))},is:function(c){return!!ae(this,typeof c=="string"&&Te.test(c)?p(c):c||[],!1).length}});var _e,Le=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,We=p.fn.init=function(c,h,_){var b,T;if(!c)return this;if(_=_||_e,typeof c=="string")if(c[0]==="<"&&c[c.length-1]===">"&&c.length>=3?b=[null,c,null]:b=Le.exec(c),b&&(b[1]||!h))if(b[1]){if(h=h instanceof p?h[0]:h,p.merge(this,p.parseHTML(b[1],h&&h.nodeType?h.ownerDocument||h:g,!0)),Me.test(b[1])&&p.isPlainObject(h))for(b in h)y(this[b])?this[b](h[b]):this.attr(b,h[b]);return this}else return T=g.getElementById(b[2]),T&&(this[0]=T,this.length=1),this;else return!h||h.jquery?(h||_).find(c):this.constructor(h).find(c);else{if(c.nodeType)return this[0]=c,this.length=1,this;if(y(c))return _.ready!==void 0?_.ready(c):c(p)}return p.makeArray(c,this)};We.prototype=p.fn,_e=p(g);var Ve=/^(?:parents|prev(?:Until|All))/,at={children:!0,contents:!0,next:!0,prev:!0};p.fn.extend({has:function(c){var h=p(c,this),_=h.length;return this.filter(function(){for(var b=0;b<_;b++)if(p.contains(this,h[b]))return!0})},closest:function(c,h){var _,b=0,T=this.length,M=[],w=typeof c!="string"&&p(c);if(!Te.test(c)){for(;b<T;b++)for(_=this[b];_&&_!==h;_=_.parentNode)if(_.nodeType<11&&(w?w.index(_)>-1:_.nodeType===1&&p.find.matchesSelector(_,c))){M.push(_);break}}return this.pushStack(M.length>1?p.uniqueSort(M):M)},index:function(c){return c?typeof c=="string"?l.call(p(c),this[0]):l.call(this,c.jquery?c[0]:c):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(c,h){return this.pushStack(p.uniqueSort(p.merge(this.get(),p(c,h))))},addBack:function(c){return this.add(c==null?this.prevObject:this.prevObject.filter(c))}});function lt(c,h){for(;(c=c[h])&&c.nodeType!==1;);return c}p.each({parent:function(c){var h=c.parentNode;return h&&h.nodeType!==11?h:null},parents:function(c){return fe(c,"parentNode")},parentsUntil:function(c,h,_){return fe(c,"parentNode",_)},next:function(c){return lt(c,"nextSibling")},prev:function(c){return lt(c,"previousSibling")},nextAll:function(c){return fe(c,"nextSibling")},prevAll:function(c){return fe(c,"previousSibling")},nextUntil:function(c,h,_){return fe(c,"nextSibling",_)},prevUntil:function(c,h,_){return fe(c,"previousSibling",_)},siblings:function(c){return me((c.parentNode||{}).firstChild,c)},children:function(c){return me(c.firstChild)},contents:function(c){return c.contentDocument!=null&&i(c.contentDocument)?c.contentDocument:(E(c,"template")&&(c=c.content||c),p.merge([],c.childNodes))}},function(c,h){p.fn[c]=function(_,b){var T=p.map(this,h,_);return c.slice(-5)!=="Until"&&(b=_),b&&typeof b=="string"&&(T=p.filter(b,T)),this.length>1&&(at[c]||p.uniqueSort(T),Ve.test(c)&&T.reverse()),this.pushStack(T)}});var He=/[^\x20\t\r\n\f]+/g;function Mt(c){var h={};return p.each(c.match(He)||[],function(_,b){h[b]=!0}),h}p.Callbacks=function(c){c=typeof c=="string"?Mt(c):p.extend({},c);var h,_,b,T,M=[],w=[],B=-1,F=function(){for(T=T||c.once,b=h=!0;w.length;B=-1)for(_=w.shift();++B<M.length;)M[B].apply(_[0],_[1])===!1&&c.stopOnFalse&&(B=M.length,_=!1);c.memory||(_=!1),h=!1,T&&(_?M=[]:M="")},W={add:function(){return M&&(_&&!h&&(B=M.length-1,w.push(_)),function oe(de){p.each(de,function(J,Se){y(Se)?(!c.unique||!W.has(Se))&&M.push(Se):Se&&Se.length&&R(Se)!=="string"&&oe(Se)})}(arguments),_&&!h&&F()),this},remove:function(){return p.each(arguments,function(oe,de){for(var J;(J=p.inArray(de,M,J))>-1;)M.splice(J,1),J<=B&&B--}),this},has:function(oe){return oe?p.inArray(oe,M)>-1:M.length>0},empty:function(){return M&&(M=[]),this},disable:function(){return T=w=[],M=_="",this},disabled:function(){return!M},lock:function(){return T=w=[],!_&&!h&&(M=_=""),this},locked:function(){return!!T},fireWith:function(oe,de){return T||(de=de||[],de=[oe,de.slice?de.slice():de],w.push(de),h||F()),this},fire:function(){return W.fireWith(this,arguments),this},fired:function(){return!!b}};return W};function Q(c){return c}function on(c){throw c}function Ye(c,h,_,b){var T;try{c&&y(T=c.promise)?T.call(c).done(h).fail(_):c&&y(T=c.then)?T.call(c,h,_):h.apply(void 0,[c].slice(b))}catch(M){_.apply(void 0,[M])}}p.extend({Deferred:function(c){var h=[["notify","progress",p.Callbacks("memory"),p.Callbacks("memory"),2],["resolve","done",p.Callbacks("once memory"),p.Callbacks("once memory"),0,"resolved"],["reject","fail",p.Callbacks("once memory"),p.Callbacks("once memory"),1,"rejected"]],_="pending",b={state:function(){return _},always:function(){return T.done(arguments).fail(arguments),this},catch:function(M){return b.then(null,M)},pipe:function(){var M=arguments;return p.Deferred(function(w){p.each(h,function(B,F){var W=y(M[F[4]])&&M[F[4]];T[F[1]](function(){var oe=W&&W.apply(this,arguments);oe&&y(oe.promise)?oe.promise().progress(w.notify).done(w.resolve).fail(w.reject):w[F[0]+"With"](this,W?[oe]:arguments)})}),M=null}).promise()},then:function(M,w,B){var F=0;function W(oe,de,J,Se){return function(){var nt=this,wt=arguments,_t=function(){var pn,Oi;if(!(oe<F)){if(pn=J.apply(nt,wt),pn===de.promise())throw new TypeError("Thenable self-resolution");Oi=pn&&(typeof pn=="object"||typeof pn=="function")&&pn.then,y(Oi)?Se?Oi.call(pn,W(F,de,Q,Se),W(F,de,on,Se)):(F++,Oi.call(pn,W(F,de,Q,Se),W(F,de,on,Se),W(F,de,Q,de.notifyWith))):(J!==Q&&(nt=void 0,wt=[pn]),(Se||de.resolveWith)(nt,wt))}},Cn=Se?_t:function(){try{_t()}catch(pn){p.Deferred.exceptionHook&&p.Deferred.exceptionHook(pn,Cn.error),oe+1>=F&&(J!==on&&(nt=void 0,wt=[pn]),de.rejectWith(nt,wt))}};oe?Cn():(p.Deferred.getErrorHook?Cn.error=p.Deferred.getErrorHook():p.Deferred.getStackHook&&(Cn.error=p.Deferred.getStackHook()),e.setTimeout(Cn))}}return p.Deferred(function(oe){h[0][3].add(W(0,oe,y(B)?B:Q,oe.notifyWith)),h[1][3].add(W(0,oe,y(M)?M:Q)),h[2][3].add(W(0,oe,y(w)?w:on))}).promise()},promise:function(M){return M!=null?p.extend(M,b):b}},T={};return p.each(h,function(M,w){var B=w[2],F=w[5];b[w[1]]=B.add,F&&B.add(function(){_=F},h[3-M][2].disable,h[3-M][3].disable,h[0][2].lock,h[0][3].lock),B.add(w[3].fire),T[w[0]]=function(){return T[w[0]+"With"](this===T?void 0:this,arguments),this},T[w[0]+"With"]=B.fireWith}),b.promise(T),c&&c.call(T,T),T},when:function(c){var h=arguments.length,_=h,b=Array(_),T=r.call(arguments),M=p.Deferred(),w=function(B){return function(F){b[B]=this,T[B]=arguments.length>1?r.call(arguments):F,--h||M.resolveWith(b,T)}};if(h<=1&&(Ye(c,M.done(w(_)).resolve,M.reject,!h),M.state()==="pending"||y(T[_]&&T[_].then)))return M.then();for(;_--;)Ye(T[_],w(_),M.reject);return M.promise()}});var st=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;p.Deferred.exceptionHook=function(c,h){e.console&&e.console.warn&&c&&st.test(c.name)&&e.console.warn("jQuery.Deferred exception: "+c.message,c.stack,h)},p.readyException=function(c){e.setTimeout(function(){throw c})};var Be=p.Deferred();p.fn.ready=function(c){return Be.then(c).catch(function(h){p.readyException(h)}),this},p.extend({isReady:!1,readyWait:1,ready:function(c){(c===!0?--p.readyWait:p.isReady)||(p.isReady=!0,!(c!==!0&&--p.readyWait>0)&&Be.resolveWith(g,[p]))}}),p.ready.then=Be.then;function Bt(){g.removeEventListener("DOMContentLoaded",Bt),e.removeEventListener("load",Bt),p.ready()}g.readyState==="complete"||g.readyState!=="loading"&&!g.documentElement.doScroll?e.setTimeout(p.ready):(g.addEventListener("DOMContentLoaded",Bt),e.addEventListener("load",Bt));var Je=function(c,h,_,b,T,M,w){var B=0,F=c.length,W=_==null;if(R(_)==="object"){T=!0;for(B in _)Je(c,h,B,_[B],!0,M,w)}else if(b!==void 0&&(T=!0,y(b)||(w=!0),W&&(w?(h.call(c,b),h=null):(W=h,h=function(oe,de,J){return W.call(p(oe),J)})),h))for(;B<F;B++)h(c[B],_,w?b:b.call(c[B],B,h(c[B],_)));return T?c:W?h.call(c):F?h(c[0],_):M},U=/^-ms-/,L=/-([a-z])/g;function re(c,h){return h.toUpperCase()}function ve(c){return c.replace(U,"ms-").replace(L,re)}var xe=function(c){return c.nodeType===1||c.nodeType===9||!+c.nodeType};function be(){this.expando=p.expando+be.uid++}be.uid=1,be.prototype={cache:function(c){var h=c[this.expando];return h||(h={},xe(c)&&(c.nodeType?c[this.expando]=h:Object.defineProperty(c,this.expando,{value:h,configurable:!0}))),h},set:function(c,h,_){var b,T=this.cache(c);if(typeof h=="string")T[ve(h)]=_;else for(b in h)T[ve(b)]=h[b];return T},get:function(c,h){return h===void 0?this.cache(c):c[this.expando]&&c[this.expando][ve(h)]},access:function(c,h,_){return h===void 0||h&&typeof h=="string"&&_===void 0?this.get(c,h):(this.set(c,h,_),_!==void 0?_:h)},remove:function(c,h){var _,b=c[this.expando];if(b!==void 0){if(h!==void 0)for(Array.isArray(h)?h=h.map(ve):(h=ve(h),h=h in b?[h]:h.match(He)||[]),_=h.length;_--;)delete b[h[_]];(h===void 0||p.isEmptyObject(b))&&(c.nodeType?c[this.expando]=void 0:delete c[this.expando])}},hasData:function(c){var h=c[this.expando];return h!==void 0&&!p.isEmptyObject(h)}};var pe=new be,Ee=new be,Ue=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Qe=/[A-Z]/g;function dt(c){return c==="true"?!0:c==="false"?!1:c==="null"?null:c===+c+""?+c:Ue.test(c)?JSON.parse(c):c}function ye(c,h,_){var b;if(_===void 0&&c.nodeType===1)if(b="data-"+h.replace(Qe,"-$&").toLowerCase(),_=c.getAttribute(b),typeof _=="string"){try{_=dt(_)}catch{}Ee.set(c,h,_)}else _=void 0;return _}p.extend({hasData:function(c){return Ee.hasData(c)||pe.hasData(c)},data:function(c,h,_){return Ee.access(c,h,_)},removeData:function(c,h){Ee.remove(c,h)},_data:function(c,h,_){return pe.access(c,h,_)},_removeData:function(c,h){pe.remove(c,h)}}),p.fn.extend({data:function(c,h){var _,b,T,M=this[0],w=M&&M.attributes;if(c===void 0){if(this.length&&(T=Ee.get(M),M.nodeType===1&&!pe.get(M,"hasDataAttrs"))){for(_=w.length;_--;)w[_]&&(b=w[_].name,b.indexOf("data-")===0&&(b=ve(b.slice(5)),ye(M,b,T[b])));pe.set(M,"hasDataAttrs",!0)}return T}return typeof c=="object"?this.each(function(){Ee.set(this,c)}):Je(this,function(B){var F;if(M&&B===void 0)return F=Ee.get(M,c),F!==void 0||(F=ye(M,c),F!==void 0)?F:void 0;this.each(function(){Ee.set(this,c,B)})},null,h,arguments.length>1,null,!0)},removeData:function(c){return this.each(function(){Ee.remove(this,c)})}}),p.extend({queue:function(c,h,_){var b;if(c)return h=(h||"fx")+"queue",b=pe.get(c,h),_&&(!b||Array.isArray(_)?b=pe.access(c,h,p.makeArray(_)):b.push(_)),b||[]},dequeue:function(c,h){h=h||"fx";var _=p.queue(c,h),b=_.length,T=_.shift(),M=p._queueHooks(c,h),w=function(){p.dequeue(c,h)};T==="inprogress"&&(T=_.shift(),b--),T&&(h==="fx"&&_.unshift("inprogress"),delete M.stop,T.call(c,w,M)),!b&&M&&M.empty.fire()},_queueHooks:function(c,h){var _=h+"queueHooks";return pe.get(c,_)||pe.access(c,_,{empty:p.Callbacks("once memory").add(function(){pe.remove(c,[h+"queue",_])})})}}),p.fn.extend({queue:function(c,h){var _=2;return typeof c!="string"&&(h=c,c="fx",_--),arguments.length<_?p.queue(this[0],c):h===void 0?this:this.each(function(){var b=p.queue(this,c,h);p._queueHooks(this,c),c==="fx"&&b[0]!=="inprogress"&&p.dequeue(this,c)})},dequeue:function(c){return this.each(function(){p.dequeue(this,c)})},clearQueue:function(c){return this.queue(c||"fx",[])},promise:function(c,h){var _,b=1,T=p.Deferred(),M=this,w=this.length,B=function(){--b||T.resolveWith(M,[M])};for(typeof c!="string"&&(h=c,c=void 0),c=c||"fx";w--;)_=pe.get(M[w],c+"queueHooks"),_&&_.empty&&(b++,_.empty.add(B));return B(),T.promise(h)}});var Lt=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ct=new RegExp("^(?:([+-])=|)("+Lt+")([a-z%]*)$","i"),qe=["Top","Right","Bottom","Left"],ze=g.documentElement,Ie=function(c){return p.contains(c.ownerDocument,c)},ft={composed:!0};ze.getRootNode&&(Ie=function(c){return p.contains(c.ownerDocument,c)||c.getRootNode(ft)===c.ownerDocument});var At=function(c,h){return c=h||c,c.style.display==="none"||c.style.display===""&&Ie(c)&&p.css(c,"display")==="none"};function Xt(c,h,_,b){var T,M,w=20,B=b?function(){return b.cur()}:function(){return p.css(c,h,"")},F=B(),W=_&&_[3]||(p.cssNumber[h]?"":"px"),oe=c.nodeType&&(p.cssNumber[h]||W!=="px"&&+F)&&ct.exec(p.css(c,h));if(oe&&oe[3]!==W){for(F=F/2,W=W||oe[3],oe=+F||1;w--;)p.style(c,h,oe+W),(1-M)*(1-(M=B()/F||.5))<=0&&(w=0),oe=oe/M;oe=oe*2,p.style(c,h,oe+W),_=_||[]}return _&&(oe=+oe||+F||0,T=_[1]?oe+(_[1]+1)*_[2]:+_[2],b&&(b.unit=W,b.start=oe,b.end=T)),T}var pt={};function we(c){var h,_=c.ownerDocument,b=c.nodeName,T=pt[b];return T||(h=_.body.appendChild(_.createElement(b)),T=p.css(h,"display"),h.parentNode.removeChild(h),T==="none"&&(T="block"),pt[b]=T,T)}function z(c,h){for(var _,b,T=[],M=0,w=c.length;M<w;M++)b=c[M],b.style&&(_=b.style.display,h?(_==="none"&&(T[M]=pe.get(b,"display")||null,T[M]||(b.style.display="")),b.style.display===""&&At(b)&&(T[M]=we(b))):_!=="none"&&(T[M]="none",pe.set(b,"display",_)));for(M=0;M<w;M++)T[M]!=null&&(c[M].style.display=T[M]);return c}p.fn.extend({show:function(){return z(this,!0)},hide:function(){return z(this)},toggle:function(c){return typeof c=="boolean"?c?this.show():this.hide():this.each(function(){At(this)?p(this).show():p(this).hide()})}});var Re=/^(?:checkbox|radio)$/i,Pe=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,$e=/^$|^module$|\/(?:java|ecma)script/i;(function(){var c=g.createDocumentFragment(),h=c.appendChild(g.createElement("div")),_=g.createElement("input");_.setAttribute("type","radio"),_.setAttribute("checked","checked"),_.setAttribute("name","t"),h.appendChild(_),S.checkClone=h.cloneNode(!0).cloneNode(!0).lastChild.checked,h.innerHTML="<textarea>x</textarea>",S.noCloneChecked=!!h.cloneNode(!0).lastChild.defaultValue,h.innerHTML="<option></option>",S.option=!!h.lastChild})();var Fe={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Fe.tbody=Fe.tfoot=Fe.colgroup=Fe.caption=Fe.thead,Fe.th=Fe.td,S.option||(Fe.optgroup=Fe.option=[1,"<select multiple='multiple'>","</select>"]);function mt(c,h){var _;return typeof c.getElementsByTagName<"u"?_=c.getElementsByTagName(h||"*"):typeof c.querySelectorAll<"u"?_=c.querySelectorAll(h||"*"):_=[],h===void 0||h&&E(c,h)?p.merge([c],_):_}function Dt(c,h){for(var _=0,b=c.length;_<b;_++)pe.set(c[_],"globalEval",!h||pe.get(h[_],"globalEval"))}var an=/<|&#?\w+;/;function xn(c,h,_,b,T){for(var M,w,B,F,W,oe,de=h.createDocumentFragment(),J=[],Se=0,nt=c.length;Se<nt;Se++)if(M=c[Se],M||M===0)if(R(M)==="object")p.merge(J,M.nodeType?[M]:M);else if(!an.test(M))J.push(h.createTextNode(M));else{for(w=w||de.appendChild(h.createElement("div")),B=(Pe.exec(M)||["",""])[1].toLowerCase(),F=Fe[B]||Fe._default,w.innerHTML=F[1]+p.htmlPrefilter(M)+F[2],oe=F[0];oe--;)w=w.lastChild;p.merge(J,w.childNodes),w=de.firstChild,w.textContent=""}for(de.textContent="",Se=0;M=J[Se++];){if(b&&p.inArray(M,b)>-1){T&&T.push(M);continue}if(W=Ie(M),w=mt(de.appendChild(M),"script"),W&&Dt(w),_)for(oe=0;M=w[oe++];)$e.test(M.type||"")&&_.push(M)}return de}var Ot=/^([^.]*)(?:\.(.+)|)/;function $t(){return!0}function En(){return!1}function Cs(c,h,_,b,T,M){var w,B;if(typeof h=="object"){typeof _!="string"&&(b=b||_,_=void 0);for(B in h)Cs(c,B,_,b,h[B],M);return c}if(b==null&&T==null?(T=_,b=_=void 0):T==null&&(typeof _=="string"?(T=b,b=void 0):(T=b,b=_,_=void 0)),T===!1)T=En;else if(!T)return c;return M===1&&(w=T,T=function(F){return p().off(F),w.apply(this,arguments)},T.guid=w.guid||(w.guid=p.guid++)),c.each(function(){p.event.add(this,h,T,b,_)})}p.event={global:{},add:function(c,h,_,b,T){var M,w,B,F,W,oe,de,J,Se,nt,wt,_t=pe.get(c);if(xe(c))for(_.handler&&(M=_,_=M.handler,T=M.selector),T&&p.find.matchesSelector(ze,T),_.guid||(_.guid=p.guid++),(F=_t.events)||(F=_t.events=Object.create(null)),(w=_t.handle)||(w=_t.handle=function(Cn){return typeof p<"u"&&p.event.triggered!==Cn.type?p.event.dispatch.apply(c,arguments):void 0}),h=(h||"").match(He)||[""],W=h.length;W--;)B=Ot.exec(h[W])||[],Se=wt=B[1],nt=(B[2]||"").split(".").sort(),Se&&(de=p.event.special[Se]||{},Se=(T?de.delegateType:de.bindType)||Se,de=p.event.special[Se]||{},oe=p.extend({type:Se,origType:wt,data:b,handler:_,guid:_.guid,selector:T,needsContext:T&&p.expr.match.needsContext.test(T),namespace:nt.join(".")},M),(J=F[Se])||(J=F[Se]=[],J.delegateCount=0,(!de.setup||de.setup.call(c,b,nt,w)===!1)&&c.addEventListener&&c.addEventListener(Se,w)),de.add&&(de.add.call(c,oe),oe.handler.guid||(oe.handler.guid=_.guid)),T?J.splice(J.delegateCount++,0,oe):J.push(oe),p.event.global[Se]=!0)},remove:function(c,h,_,b,T){var M,w,B,F,W,oe,de,J,Se,nt,wt,_t=pe.hasData(c)&&pe.get(c);if(!(!_t||!(F=_t.events))){for(h=(h||"").match(He)||[""],W=h.length;W--;){if(B=Ot.exec(h[W])||[],Se=wt=B[1],nt=(B[2]||"").split(".").sort(),!Se){for(Se in F)p.event.remove(c,Se+h[W],_,b,!0);continue}for(de=p.event.special[Se]||{},Se=(b?de.delegateType:de.bindType)||Se,J=F[Se]||[],B=B[2]&&new RegExp("(^|\\.)"+nt.join("\\.(?:.*\\.|)")+"(\\.|$)"),w=M=J.length;M--;)oe=J[M],(T||wt===oe.origType)&&(!_||_.guid===oe.guid)&&(!B||B.test(oe.namespace))&&(!b||b===oe.selector||b==="**"&&oe.selector)&&(J.splice(M,1),oe.selector&&J.delegateCount--,de.remove&&de.remove.call(c,oe));w&&!J.length&&((!de.teardown||de.teardown.call(c,nt,_t.handle)===!1)&&p.removeEvent(c,Se,_t.handle),delete F[Se])}p.isEmptyObject(F)&&pe.remove(c,"handle events")}},dispatch:function(c){var h,_,b,T,M,w,B=new Array(arguments.length),F=p.event.fix(c),W=(pe.get(this,"events")||Object.create(null))[F.type]||[],oe=p.event.special[F.type]||{};for(B[0]=F,h=1;h<arguments.length;h++)B[h]=arguments[h];if(F.delegateTarget=this,!(oe.preDispatch&&oe.preDispatch.call(this,F)===!1)){for(w=p.event.handlers.call(this,F,W),h=0;(T=w[h++])&&!F.isPropagationStopped();)for(F.currentTarget=T.elem,_=0;(M=T.handlers[_++])&&!F.isImmediatePropagationStopped();)(!F.rnamespace||M.namespace===!1||F.rnamespace.test(M.namespace))&&(F.handleObj=M,F.data=M.data,b=((p.event.special[M.origType]||{}).handle||M.handler).apply(T.elem,B),b!==void 0&&(F.result=b)===!1&&(F.preventDefault(),F.stopPropagation()));return oe.postDispatch&&oe.postDispatch.call(this,F),F.result}},handlers:function(c,h){var _,b,T,M,w,B=[],F=h.delegateCount,W=c.target;if(F&&W.nodeType&&!(c.type==="click"&&c.button>=1)){for(;W!==this;W=W.parentNode||this)if(W.nodeType===1&&!(c.type==="click"&&W.disabled===!0)){for(M=[],w={},_=0;_<F;_++)b=h[_],T=b.selector+" ",w[T]===void 0&&(w[T]=b.needsContext?p(T,this).index(W)>-1:p.find(T,this,null,[W]).length),w[T]&&M.push(b);M.length&&B.push({elem:W,handlers:M})}}return W=this,F<h.length&&B.push({elem:W,handlers:h.slice(F)}),B},addProp:function(c,h){Object.defineProperty(p.Event.prototype,c,{enumerable:!0,configurable:!0,get:y(h)?function(){if(this.originalEvent)return h(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[c]},set:function(_){Object.defineProperty(this,c,{enumerable:!0,configurable:!0,writable:!0,value:_})}})},fix:function(c){return c[p.expando]?c:new p.Event(c)},special:{load:{noBubble:!0},click:{setup:function(c){var h=this||c;return Re.test(h.type)&&h.click&&E(h,"input")&&Rs(h,"click",!0),!1},trigger:function(c){var h=this||c;return Re.test(h.type)&&h.click&&E(h,"input")&&Rs(h,"click"),!0},_default:function(c){var h=c.target;return Re.test(h.type)&&h.click&&E(h,"input")&&pe.get(h,"click")||E(h,"a")}},beforeunload:{postDispatch:function(c){c.result!==void 0&&c.originalEvent&&(c.originalEvent.returnValue=c.result)}}}};function Rs(c,h,_){if(!_){pe.get(c,h)===void 0&&p.event.add(c,h,$t);return}pe.set(c,h,!1),p.event.add(c,h,{namespace:!1,handler:function(b){var T,M=pe.get(this,h);if(b.isTrigger&1&&this[h]){if(M)(p.event.special[h]||{}).delegateType&&b.stopPropagation();else if(M=r.call(arguments),pe.set(this,h,M),this[h](),T=pe.get(this,h),pe.set(this,h,!1),M!==T)return b.stopImmediatePropagation(),b.preventDefault(),T}else M&&(pe.set(this,h,p.event.trigger(M[0],M.slice(1),this)),b.stopPropagation(),b.isImmediatePropagationStopped=$t)}})}p.removeEvent=function(c,h,_){c.removeEventListener&&c.removeEventListener(h,_)},p.Event=function(c,h){if(!(this instanceof p.Event))return new p.Event(c,h);c&&c.type?(this.originalEvent=c,this.type=c.type,this.isDefaultPrevented=c.defaultPrevented||c.defaultPrevented===void 0&&c.returnValue===!1?$t:En,this.target=c.target&&c.target.nodeType===3?c.target.parentNode:c.target,this.currentTarget=c.currentTarget,this.relatedTarget=c.relatedTarget):this.type=c,h&&p.extend(this,h),this.timeStamp=c&&c.timeStamp||Date.now(),this[p.expando]=!0},p.Event.prototype={constructor:p.Event,isDefaultPrevented:En,isPropagationStopped:En,isImmediatePropagationStopped:En,isSimulated:!1,preventDefault:function(){var c=this.originalEvent;this.isDefaultPrevented=$t,c&&!this.isSimulated&&c.preventDefault()},stopPropagation:function(){var c=this.originalEvent;this.isPropagationStopped=$t,c&&!this.isSimulated&&c.stopPropagation()},stopImmediatePropagation:function(){var c=this.originalEvent;this.isImmediatePropagationStopped=$t,c&&!this.isSimulated&&c.stopImmediatePropagation(),this.stopPropagation()}},p.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},p.event.addProp),p.each({focus:"focusin",blur:"focusout"},function(c,h){function _(b){if(g.documentMode){var T=pe.get(this,"handle"),M=p.event.fix(b);M.type=b.type==="focusin"?"focus":"blur",M.isSimulated=!0,T(b),M.target===M.currentTarget&&T(M)}else p.event.simulate(h,b.target,p.event.fix(b))}p.event.special[c]={setup:function(){var b;if(Rs(this,c,!0),g.documentMode)b=pe.get(this,h),b||this.addEventListener(h,_),pe.set(this,h,(b||0)+1);else return!1},trigger:function(){return Rs(this,c),!0},teardown:function(){var b;if(g.documentMode)b=pe.get(this,h)-1,b?pe.set(this,h,b):(this.removeEventListener(h,_),pe.remove(this,h));else return!1},_default:function(b){return pe.get(b.target,c)},delegateType:h},p.event.special[h]={setup:function(){var b=this.ownerDocument||this.document||this,T=g.documentMode?this:b,M=pe.get(T,h);M||(g.documentMode?this.addEventListener(h,_):b.addEventListener(c,_,!0)),pe.set(T,h,(M||0)+1)},teardown:function(){var b=this.ownerDocument||this.document||this,T=g.documentMode?this:b,M=pe.get(T,h)-1;M?pe.set(T,h,M):(g.documentMode?this.removeEventListener(h,_):b.removeEventListener(c,_,!0),pe.remove(T,h))}}}),p.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(c,h){p.event.special[c]={delegateType:h,bindType:h,handle:function(_){var b,T=this,M=_.relatedTarget,w=_.handleObj;return(!M||M!==T&&!p.contains(T,M))&&(_.type=w.origType,b=w.handler.apply(this,arguments),_.type=h),b}}}),p.fn.extend({on:function(c,h,_,b){return Cs(this,c,h,_,b)},one:function(c,h,_,b){return Cs(this,c,h,_,b,1)},off:function(c,h,_){var b,T;if(c&&c.preventDefault&&c.handleObj)return b=c.handleObj,p(c.delegateTarget).off(b.namespace?b.origType+"."+b.namespace:b.origType,b.selector,b.handler),this;if(typeof c=="object"){for(T in c)this.off(T,h,c[T]);return this}return(h===!1||typeof h=="function")&&(_=h,h=void 0),_===!1&&(_=En),this.each(function(){p.event.remove(this,c,_,h)})}});var Ls=/<script|<style|<link/i,Ca=/checked\s*(?:[^=]|=\s*.checked.)/i,Ps=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Do(c,h){return E(c,"table")&&E(h.nodeType!==11?h:h.firstChild,"tr")&&p(c).children("tbody")[0]||c}function Ra(c){return c.type=(c.getAttribute("type")!==null)+"/"+c.type,c}function Zl(c){return(c.type||"").slice(0,5)==="true/"?c.type=c.type.slice(5):c.removeAttribute("type"),c}function La(c,h){var _,b,T,M,w,B,F;if(h.nodeType===1){if(pe.hasData(c)&&(M=pe.get(c),F=M.events,F)){pe.remove(h,"handle events");for(T in F)for(_=0,b=F[T].length;_<b;_++)p.event.add(h,T,F[T][_])}Ee.hasData(c)&&(w=Ee.access(c),B=p.extend({},w),Ee.set(h,B))}}function Jl(c,h){var _=h.nodeName.toLowerCase();_==="input"&&Re.test(c.type)?h.checked=c.checked:(_==="input"||_==="textarea")&&(h.defaultValue=c.defaultValue)}function P(c,h,_,b){h=o(h);var T,M,w,B,F,W,oe=0,de=c.length,J=de-1,Se=h[0],nt=y(Se);if(nt||de>1&&typeof Se=="string"&&!S.checkClone&&Ca.test(Se))return c.each(function(wt){var _t=c.eq(wt);nt&&(h[0]=Se.call(this,wt,_t.html())),P(_t,h,_,b)});if(de&&(T=xn(h,c[0].ownerDocument,!1,c,b),M=T.firstChild,T.childNodes.length===1&&(T=M),M||b)){for(w=p.map(mt(T,"script"),Ra),B=w.length;oe<de;oe++)F=T,oe!==J&&(F=p.clone(F,!0,!0),B&&p.merge(w,mt(F,"script"))),_.call(c[oe],F,oe);if(B)for(W=w[w.length-1].ownerDocument,p.map(w,Zl),oe=0;oe<B;oe++)F=w[oe],$e.test(F.type||"")&&!pe.access(F,"globalEval")&&p.contains(W,F)&&(F.src&&(F.type||"").toLowerCase()!=="module"?p._evalUrl&&!F.noModule&&p._evalUrl(F.src,{nonce:F.nonce||F.getAttribute("nonce")},W):A(F.textContent.replace(Ps,""),F,W))}return c}function j(c,h,_){for(var b,T=h?p.filter(h,c):c,M=0;(b=T[M])!=null;M++)!_&&b.nodeType===1&&p.cleanData(mt(b)),b.parentNode&&(_&&Ie(b)&&Dt(mt(b,"script")),b.parentNode.removeChild(b));return c}p.extend({htmlPrefilter:function(c){return c},clone:function(c,h,_){var b,T,M,w,B=c.cloneNode(!0),F=Ie(c);if(!S.noCloneChecked&&(c.nodeType===1||c.nodeType===11)&&!p.isXMLDoc(c))for(w=mt(B),M=mt(c),b=0,T=M.length;b<T;b++)Jl(M[b],w[b]);if(h)if(_)for(M=M||mt(c),w=w||mt(B),b=0,T=M.length;b<T;b++)La(M[b],w[b]);else La(c,B);return w=mt(B,"script"),w.length>0&&Dt(w,!F&&mt(c,"script")),B},cleanData:function(c){for(var h,_,b,T=p.event.special,M=0;(_=c[M])!==void 0;M++)if(xe(_)){if(h=_[pe.expando]){if(h.events)for(b in h.events)T[b]?p.event.remove(_,b):p.removeEvent(_,b,h.handle);_[pe.expando]=void 0}_[Ee.expando]&&(_[Ee.expando]=void 0)}}}),p.fn.extend({detach:function(c){return j(this,c,!0)},remove:function(c){return j(this,c)},text:function(c){return Je(this,function(h){return h===void 0?p.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=h)})},null,c,arguments.length)},append:function(){return P(this,arguments,function(c){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var h=Do(this,c);h.appendChild(c)}})},prepend:function(){return P(this,arguments,function(c){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var h=Do(this,c);h.insertBefore(c,h.firstChild)}})},before:function(){return P(this,arguments,function(c){this.parentNode&&this.parentNode.insertBefore(c,this)})},after:function(){return P(this,arguments,function(c){this.parentNode&&this.parentNode.insertBefore(c,this.nextSibling)})},empty:function(){for(var c,h=0;(c=this[h])!=null;h++)c.nodeType===1&&(p.cleanData(mt(c,!1)),c.textContent="");return this},clone:function(c,h){return c=c??!1,h=h??c,this.map(function(){return p.clone(this,c,h)})},html:function(c){return Je(this,function(h){var _=this[0]||{},b=0,T=this.length;if(h===void 0&&_.nodeType===1)return _.innerHTML;if(typeof h=="string"&&!Ls.test(h)&&!Fe[(Pe.exec(h)||["",""])[1].toLowerCase()]){h=p.htmlPrefilter(h);try{for(;b<T;b++)_=this[b]||{},_.nodeType===1&&(p.cleanData(mt(_,!1)),_.innerHTML=h);_=0}catch{}}_&&this.empty().append(h)},null,c,arguments.length)},replaceWith:function(){var c=[];return P(this,arguments,function(h){var _=this.parentNode;p.inArray(this,c)<0&&(p.cleanData(mt(this)),_&&_.replaceChild(h,this))},c)}}),p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(c,h){p.fn[c]=function(_){for(var b,T=[],M=p(_),w=M.length-1,B=0;B<=w;B++)b=B===w?this:this.clone(!0),p(M[B])[h](b),a.apply(T,b.get());return this.pushStack(T)}});var ne=new RegExp("^("+Lt+")(?!px)[a-z%]+$","i"),se=/^--/,ee=function(c){var h=c.ownerDocument.defaultView;return(!h||!h.opener)&&(h=e),h.getComputedStyle(c)},Oe=function(c,h,_){var b,T,M={};for(T in h)M[T]=c.style[T],c.style[T]=h[T];b=_.call(c);for(T in h)c.style[T]=M[T];return b},Ge=new RegExp(qe.join("|"),"i");(function(){function c(){if(W){F.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",W.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ze.appendChild(F).appendChild(W);var oe=e.getComputedStyle(W);_=oe.top!=="1%",B=h(oe.marginLeft)===12,W.style.right="60%",M=h(oe.right)===36,b=h(oe.width)===36,W.style.position="absolute",T=h(W.offsetWidth/3)===12,ze.removeChild(F),W=null}}function h(oe){return Math.round(parseFloat(oe))}var _,b,T,M,w,B,F=g.createElement("div"),W=g.createElement("div");W.style&&(W.style.backgroundClip="content-box",W.cloneNode(!0).style.backgroundClip="",S.clearCloneStyle=W.style.backgroundClip==="content-box",p.extend(S,{boxSizingReliable:function(){return c(),b},pixelBoxStyles:function(){return c(),M},pixelPosition:function(){return c(),_},reliableMarginLeft:function(){return c(),B},scrollboxSize:function(){return c(),T},reliableTrDimensions:function(){var oe,de,J,Se;return w==null&&(oe=g.createElement("table"),de=g.createElement("tr"),J=g.createElement("div"),oe.style.cssText="position:absolute;left:-11111px;border-collapse:separate",de.style.cssText="box-sizing:content-box;border:1px solid",de.style.height="1px",J.style.height="9px",J.style.display="block",ze.appendChild(oe).appendChild(de).appendChild(J),Se=e.getComputedStyle(de),w=parseInt(Se.height,10)+parseInt(Se.borderTopWidth,10)+parseInt(Se.borderBottomWidth,10)===de.offsetHeight,ze.removeChild(oe)),w}}))})();function Xe(c,h,_){var b,T,M,w,B=se.test(h),F=c.style;return _=_||ee(c),_&&(w=_.getPropertyValue(h)||_[h],B&&w&&(w=w.replace(k,"$1")||void 0),w===""&&!Ie(c)&&(w=p.style(c,h)),!S.pixelBoxStyles()&&ne.test(w)&&Ge.test(h)&&(b=F.width,T=F.minWidth,M=F.maxWidth,F.minWidth=F.maxWidth=F.width=w,w=_.width,F.width=b,F.minWidth=T,F.maxWidth=M)),w!==void 0?w+"":w}function et(c,h){return{get:function(){if(c()){delete this.get;return}return(this.get=h).apply(this,arguments)}}}var ht=["Webkit","Moz","ms"],it=g.createElement("div").style,ot={};function Kt(c){for(var h=c[0].toUpperCase()+c.slice(1),_=ht.length;_--;)if(c=ht[_]+h,c in it)return c}function An(c){var h=p.cssProps[c]||ot[c];return h||(c in it?c:ot[c]=Kt(c)||c)}var ln=/^(none|table(?!-c[ea]).+)/,yi={position:"absolute",visibility:"hidden",display:"block"},Gt={letterSpacing:"0",fontWeight:"400"};function gt(c,h,_){var b=ct.exec(h);return b?Math.max(0,b[2]-(_||0))+(b[3]||"px"):h}function Yr(c,h,_,b,T,M){var w=h==="width"?1:0,B=0,F=0,W=0;if(_===(b?"border":"content"))return 0;for(;w<4;w+=2)_==="margin"&&(W+=p.css(c,_+qe[w],!0,T)),b?(_==="content"&&(F-=p.css(c,"padding"+qe[w],!0,T)),_!=="margin"&&(F-=p.css(c,"border"+qe[w]+"Width",!0,T))):(F+=p.css(c,"padding"+qe[w],!0,T),_!=="padding"?F+=p.css(c,"border"+qe[w]+"Width",!0,T):B+=p.css(c,"border"+qe[w]+"Width",!0,T));return!b&&M>=0&&(F+=Math.max(0,Math.ceil(c["offset"+h[0].toUpperCase()+h.slice(1)]-M-F-B-.5))||0),F+W}function jt(c,h,_){var b=ee(c),T=!S.boxSizingReliable()||_,M=T&&p.css(c,"boxSizing",!1,b)==="border-box",w=M,B=Xe(c,h,b),F="offset"+h[0].toUpperCase()+h.slice(1);if(ne.test(B)){if(!_)return B;B="auto"}return(!S.boxSizingReliable()&&M||!S.reliableTrDimensions()&&E(c,"tr")||B==="auto"||!parseFloat(B)&&p.css(c,"display",!1,b)==="inline")&&c.getClientRects().length&&(M=p.css(c,"boxSizing",!1,b)==="border-box",w=F in c,w&&(B=c[F])),B=parseFloat(B)||0,B+Yr(c,h,_||(M?"border":"content"),w,b,B)+"px"}p.extend({cssHooks:{opacity:{get:function(c,h){if(h){var _=Xe(c,"opacity");return _===""?"1":_}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(c,h,_,b){if(!(!c||c.nodeType===3||c.nodeType===8||!c.style)){var T,M,w,B=ve(h),F=se.test(h),W=c.style;if(F||(h=An(B)),w=p.cssHooks[h]||p.cssHooks[B],_!==void 0){if(M=typeof _,M==="string"&&(T=ct.exec(_))&&T[1]&&(_=Xt(c,h,T),M="number"),_==null||_!==_)return;M==="number"&&!F&&(_+=T&&T[3]||(p.cssNumber[B]?"":"px")),!S.clearCloneStyle&&_===""&&h.indexOf("background")===0&&(W[h]="inherit"),(!w||!("set"in w)||(_=w.set(c,_,b))!==void 0)&&(F?W.setProperty(h,_):W[h]=_)}else return w&&"get"in w&&(T=w.get(c,!1,b))!==void 0?T:W[h]}},css:function(c,h,_,b){var T,M,w,B=ve(h),F=se.test(h);return F||(h=An(B)),w=p.cssHooks[h]||p.cssHooks[B],w&&"get"in w&&(T=w.get(c,!0,_)),T===void 0&&(T=Xe(c,h,b)),T==="normal"&&h in Gt&&(T=Gt[h]),_===""||_?(M=parseFloat(T),_===!0||isFinite(M)?M||0:T):T}}),p.each(["height","width"],function(c,h){p.cssHooks[h]={get:function(_,b,T){if(b)return ln.test(p.css(_,"display"))&&(!_.getClientRects().length||!_.getBoundingClientRect().width)?Oe(_,yi,function(){return jt(_,h,T)}):jt(_,h,T)},set:function(_,b,T){var M,w=ee(_),B=!S.scrollboxSize()&&w.position==="absolute",F=B||T,W=F&&p.css(_,"boxSizing",!1,w)==="border-box",oe=T?Yr(_,h,T,W,w):0;return W&&B&&(oe-=Math.ceil(_["offset"+h[0].toUpperCase()+h.slice(1)]-parseFloat(w[h])-Yr(_,h,"border",!1,w)-.5)),oe&&(M=ct.exec(b))&&(M[3]||"px")!=="px"&&(_.style[h]=b,b=p.css(_,h)),gt(_,b,oe)}}}),p.cssHooks.marginLeft=et(S.reliableMarginLeft,function(c,h){if(h)return(parseFloat(Xe(c,"marginLeft"))||c.getBoundingClientRect().left-Oe(c,{marginLeft:0},function(){return c.getBoundingClientRect().left}))+"px"}),p.each({margin:"",padding:"",border:"Width"},function(c,h){p.cssHooks[c+h]={expand:function(_){for(var b=0,T={},M=typeof _=="string"?_.split(" "):[_];b<4;b++)T[c+qe[b]+h]=M[b]||M[b-2]||M[0];return T}},c!=="margin"&&(p.cssHooks[c+h].set=gt)}),p.fn.extend({css:function(c,h){return Je(this,function(_,b,T){var M,w,B={},F=0;if(Array.isArray(b)){for(M=ee(_),w=b.length;F<w;F++)B[b[F]]=p.css(_,b[F],!1,M);return B}return T!==void 0?p.style(_,b,T):p.css(_,b)},c,h,arguments.length>1)}});function en(c,h,_,b,T){return new en.prototype.init(c,h,_,b,T)}p.Tween=en,en.prototype={constructor:en,init:function(c,h,_,b,T,M){this.elem=c,this.prop=_,this.easing=T||p.easing._default,this.options=h,this.start=this.now=this.cur(),this.end=b,this.unit=M||(p.cssNumber[_]?"":"px")},cur:function(){var c=en.propHooks[this.prop];return c&&c.get?c.get(this):en.propHooks._default.get(this)},run:function(c){var h,_=en.propHooks[this.prop];return this.options.duration?this.pos=h=p.easing[this.easing](c,this.options.duration*c,0,1,this.options.duration):this.pos=h=c,this.now=(this.end-this.start)*h+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),_&&_.set?_.set(this):en.propHooks._default.set(this),this}},en.prototype.init.prototype=en.prototype,en.propHooks={_default:{get:function(c){var h;return c.elem.nodeType!==1||c.elem[c.prop]!=null&&c.elem.style[c.prop]==null?c.elem[c.prop]:(h=p.css(c.elem,c.prop,""),!h||h==="auto"?0:h)},set:function(c){p.fx.step[c.prop]?p.fx.step[c.prop](c):c.elem.nodeType===1&&(p.cssHooks[c.prop]||c.elem.style[An(c.prop)]!=null)?p.style(c.elem,c.prop,c.now+c.unit):c.elem[c.prop]=c.now}}},en.propHooks.scrollTop=en.propHooks.scrollLeft={set:function(c){c.elem.nodeType&&c.elem.parentNode&&(c.elem[c.prop]=c.now)}},p.easing={linear:function(c){return c},swing:function(c){return .5-Math.cos(c*Math.PI)/2},_default:"swing"},p.fx=en.prototype.init,p.fx.step={};var Ji,Ni,No=/^(?:toggle|show|hide)$/,yn=/queueHooks$/;function bi(){Ni&&(g.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(bi):e.setTimeout(bi,p.fx.interval),p.fx.tick())}function Ds(){return e.setTimeout(function(){Ji=void 0}),Ji=Date.now()}function wn(c,h){var _,b=0,T={height:c};for(h=h?1:0;b<4;b+=2-h)_=qe[b],T["margin"+_]=T["padding"+_]=c;return h&&(T.opacity=T.width=c),T}function Ns(c,h,_){for(var b,T=(Si.tweeners[h]||[]).concat(Si.tweeners["*"]),M=0,w=T.length;M<w;M++)if(b=T[M].call(_,h,c))return b}function Ql(c,h,_){var b,T,M,w,B,F,W,oe,de="width"in h||"height"in h,J=this,Se={},nt=c.style,wt=c.nodeType&&At(c),_t=pe.get(c,"fxshow");_.queue||(w=p._queueHooks(c,"fx"),w.unqueued==null&&(w.unqueued=0,B=w.empty.fire,w.empty.fire=function(){w.unqueued||B()}),w.unqueued++,J.always(function(){J.always(function(){w.unqueued--,p.queue(c,"fx").length||w.empty.fire()})}));for(b in h)if(T=h[b],No.test(T)){if(delete h[b],M=M||T==="toggle",T===(wt?"hide":"show"))if(T==="show"&&_t&&_t[b]!==void 0)wt=!0;else continue;Se[b]=_t&&_t[b]||p.style(c,b)}if(F=!p.isEmptyObject(h),!(!F&&p.isEmptyObject(Se))){de&&c.nodeType===1&&(_.overflow=[nt.overflow,nt.overflowX,nt.overflowY],W=_t&&_t.display,W==null&&(W=pe.get(c,"display")),oe=p.css(c,"display"),oe==="none"&&(W?oe=W:(z([c],!0),W=c.style.display||W,oe=p.css(c,"display"),z([c]))),(oe==="inline"||oe==="inline-block"&&W!=null)&&p.css(c,"float")==="none"&&(F||(J.done(function(){nt.display=W}),W==null&&(oe=nt.display,W=oe==="none"?"":oe)),nt.display="inline-block")),_.overflow&&(nt.overflow="hidden",J.always(function(){nt.overflow=_.overflow[0],nt.overflowX=_.overflow[1],nt.overflowY=_.overflow[2]})),F=!1;for(b in Se)F||(_t?"hidden"in _t&&(wt=_t.hidden):_t=pe.access(c,"fxshow",{display:W}),M&&(_t.hidden=!wt),wt&&z([c],!0),J.done(function(){wt||z([c]),pe.remove(c,"fxshow");for(b in Se)p.style(c,b,Se[b])})),F=Ns(wt?_t[b]:0,b,J),b in _t||(_t[b]=F.start,wt&&(F.end=F.start,F.start=0))}}function Pa(c,h){var _,b,T,M,w;for(_ in c)if(b=ve(_),T=h[b],M=c[_],Array.isArray(M)&&(T=M[1],M=c[_]=M[0]),_!==b&&(c[b]=M,delete c[_]),w=p.cssHooks[b],w&&"expand"in w){M=w.expand(M),delete c[b];for(_ in M)_ in c||(c[_]=M[_],h[_]=T)}else h[b]=T}function Si(c,h,_){var b,T,M=0,w=Si.prefilters.length,B=p.Deferred().always(function(){delete F.elem}),F=function(){if(T)return!1;for(var de=Ji||Ds(),J=Math.max(0,W.startTime+W.duration-de),Se=J/W.duration||0,nt=1-Se,wt=0,_t=W.tweens.length;wt<_t;wt++)W.tweens[wt].run(nt);return B.notifyWith(c,[W,nt,J]),nt<1&&_t?J:(_t||B.notifyWith(c,[W,1,0]),B.resolveWith(c,[W]),!1)},W=B.promise({elem:c,props:p.extend({},h),opts:p.extend(!0,{specialEasing:{},easing:p.easing._default},_),originalProperties:h,originalOptions:_,startTime:Ji||Ds(),duration:_.duration,tweens:[],createTween:function(de,J){var Se=p.Tween(c,W.opts,de,J,W.opts.specialEasing[de]||W.opts.easing);return W.tweens.push(Se),Se},stop:function(de){var J=0,Se=de?W.tweens.length:0;if(T)return this;for(T=!0;J<Se;J++)W.tweens[J].run(1);return de?(B.notifyWith(c,[W,1,0]),B.resolveWith(c,[W,de])):B.rejectWith(c,[W,de]),this}}),oe=W.props;for(Pa(oe,W.opts.specialEasing);M<w;M++)if(b=Si.prefilters[M].call(W,c,oe,W.opts),b)return y(b.stop)&&(p._queueHooks(W.elem,W.opts.queue).stop=b.stop.bind(b)),b;return p.map(oe,Ns,W),y(W.opts.start)&&W.opts.start.call(c,W),W.progress(W.opts.progress).done(W.opts.done,W.opts.complete).fail(W.opts.fail).always(W.opts.always),p.fx.timer(p.extend(F,{elem:c,anim:W,queue:W.opts.queue})),W}p.Animation=p.extend(Si,{tweeners:{"*":[function(c,h){var _=this.createTween(c,h);return Xt(_.elem,c,ct.exec(h),_),_}]},tweener:function(c,h){y(c)?(h=c,c=["*"]):c=c.match(He);for(var _,b=0,T=c.length;b<T;b++)_=c[b],Si.tweeners[_]=Si.tweeners[_]||[],Si.tweeners[_].unshift(h)},prefilters:[Ql],prefilter:function(c,h){h?Si.prefilters.unshift(c):Si.prefilters.push(c)}}),p.speed=function(c,h,_){var b=c&&typeof c=="object"?p.extend({},c):{complete:_||!_&&h||y(c)&&c,duration:c,easing:_&&h||h&&!y(h)&&h};return p.fx.off?b.duration=0:typeof b.duration!="number"&&(b.duration in p.fx.speeds?b.duration=p.fx.speeds[b.duration]:b.duration=p.fx.speeds._default),(b.queue==null||b.queue===!0)&&(b.queue="fx"),b.old=b.complete,b.complete=function(){y(b.old)&&b.old.call(this),b.queue&&p.dequeue(this,b.queue)},b},p.fn.extend({fadeTo:function(c,h,_,b){return this.filter(At).css("opacity",0).show().end().animate({opacity:h},c,_,b)},animate:function(c,h,_,b){var T=p.isEmptyObject(c),M=p.speed(h,_,b),w=function(){var B=Si(this,p.extend({},c),M);(T||pe.get(this,"finish"))&&B.stop(!0)};return w.finish=w,T||M.queue===!1?this.each(w):this.queue(M.queue,w)},stop:function(c,h,_){var b=function(T){var M=T.stop;delete T.stop,M(_)};return typeof c!="string"&&(_=h,h=c,c=void 0),h&&this.queue(c||"fx",[]),this.each(function(){var T=!0,M=c!=null&&c+"queueHooks",w=p.timers,B=pe.get(this);if(M)B[M]&&B[M].stop&&b(B[M]);else for(M in B)B[M]&&B[M].stop&&yn.test(M)&&b(B[M]);for(M=w.length;M--;)w[M].elem===this&&(c==null||w[M].queue===c)&&(w[M].anim.stop(_),T=!1,w.splice(M,1));(T||!_)&&p.dequeue(this,c)})},finish:function(c){return c!==!1&&(c=c||"fx"),this.each(function(){var h,_=pe.get(this),b=_[c+"queue"],T=_[c+"queueHooks"],M=p.timers,w=b?b.length:0;for(_.finish=!0,p.queue(this,c,[]),T&&T.stop&&T.stop.call(this,!0),h=M.length;h--;)M[h].elem===this&&M[h].queue===c&&(M[h].anim.stop(!0),M.splice(h,1));for(h=0;h<w;h++)b[h]&&b[h].finish&&b[h].finish.call(this);delete _.finish})}}),p.each(["toggle","show","hide"],function(c,h){var _=p.fn[h];p.fn[h]=function(b,T,M){return b==null||typeof b=="boolean"?_.apply(this,arguments):this.animate(wn(h,!0),b,T,M)}}),p.each({slideDown:wn("show"),slideUp:wn("hide"),slideToggle:wn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(c,h){p.fn[c]=function(_,b,T){return this.animate(h,_,b,T)}}),p.timers=[],p.fx.tick=function(){var c,h=0,_=p.timers;for(Ji=Date.now();h<_.length;h++)c=_[h],!c()&&_[h]===c&&_.splice(h--,1);_.length||p.fx.stop(),Ji=void 0},p.fx.timer=function(c){p.timers.push(c),p.fx.start()},p.fx.interval=13,p.fx.start=function(){Ni||(Ni=!0,bi())},p.fx.stop=function(){Ni=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fn.delay=function(c,h){return c=p.fx&&p.fx.speeds[c]||c,h=h||"fx",this.queue(h,function(_,b){var T=e.setTimeout(_,c);b.stop=function(){e.clearTimeout(T)}})},function(){var c=g.createElement("input"),h=g.createElement("select"),_=h.appendChild(g.createElement("option"));c.type="checkbox",S.checkOn=c.value!=="",S.optSelected=_.selected,c=g.createElement("input"),c.value="t",c.type="radio",S.radioValue=c.value==="t"}();var Df,Oo=p.expr.attrHandle;p.fn.extend({attr:function(c,h){return Je(this,p.attr,c,h,arguments.length>1)},removeAttr:function(c){return this.each(function(){p.removeAttr(this,c)})}}),p.extend({attr:function(c,h,_){var b,T,M=c.nodeType;if(!(M===3||M===8||M===2)){if(typeof c.getAttribute>"u")return p.prop(c,h,_);if((M!==1||!p.isXMLDoc(c))&&(T=p.attrHooks[h.toLowerCase()]||(p.expr.match.bool.test(h)?Df:void 0)),_!==void 0){if(_===null){p.removeAttr(c,h);return}return T&&"set"in T&&(b=T.set(c,_,h))!==void 0?b:(c.setAttribute(h,_+""),_)}return T&&"get"in T&&(b=T.get(c,h))!==null?b:(b=p.find.attr(c,h),b??void 0)}},attrHooks:{type:{set:function(c,h){if(!S.radioValue&&h==="radio"&&E(c,"input")){var _=c.value;return c.setAttribute("type",h),_&&(c.value=_),h}}}},removeAttr:function(c,h){var _,b=0,T=h&&h.match(He);if(T&&c.nodeType===1)for(;_=T[b++];)c.removeAttribute(_)}}),Df={set:function(c,h,_){return h===!1?p.removeAttr(c,_):c.setAttribute(_,_),_}},p.each(p.expr.match.bool.source.match(/\w+/g),function(c,h){var _=Oo[h]||p.find.attr;Oo[h]=function(b,T,M){var w,B,F=T.toLowerCase();return M||(B=Oo[F],Oo[F]=w,w=_(b,T,M)!=null?F:null,Oo[F]=B),w}});var bg=/^(?:input|select|textarea|button)$/i,Sg=/^(?:a|area)$/i;p.fn.extend({prop:function(c,h){return Je(this,p.prop,c,h,arguments.length>1)},removeProp:function(c){return this.each(function(){delete this[p.propFix[c]||c]})}}),p.extend({prop:function(c,h,_){var b,T,M=c.nodeType;if(!(M===3||M===8||M===2))return(M!==1||!p.isXMLDoc(c))&&(h=p.propFix[h]||h,T=p.propHooks[h]),_!==void 0?T&&"set"in T&&(b=T.set(c,_,h))!==void 0?b:c[h]=_:T&&"get"in T&&(b=T.get(c,h))!==null?b:c[h]},propHooks:{tabIndex:{get:function(c){var h=p.find.attr(c,"tabindex");return h?parseInt(h,10):bg.test(c.nodeName)||Sg.test(c.nodeName)&&c.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),S.optSelected||(p.propHooks.selected={get:function(c){var h=c.parentNode;return h&&h.parentNode&&h.parentNode.selectedIndex,null},set:function(c){var h=c.parentNode;h&&(h.selectedIndex,h.parentNode&&h.parentNode.selectedIndex)}}),p.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){p.propFix[this.toLowerCase()]=this});function Kr(c){var h=c.match(He)||[];return h.join(" ")}function Zr(c){return c.getAttribute&&c.getAttribute("class")||""}function $l(c){return Array.isArray(c)?c:typeof c=="string"?c.match(He)||[]:[]}p.fn.extend({addClass:function(c){var h,_,b,T,M,w;return y(c)?this.each(function(B){p(this).addClass(c.call(this,B,Zr(this)))}):(h=$l(c),h.length?this.each(function(){if(b=Zr(this),_=this.nodeType===1&&" "+Kr(b)+" ",_){for(M=0;M<h.length;M++)T=h[M],_.indexOf(" "+T+" ")<0&&(_+=T+" ");w=Kr(_),b!==w&&this.setAttribute("class",w)}}):this)},removeClass:function(c){var h,_,b,T,M,w;return y(c)?this.each(function(B){p(this).removeClass(c.call(this,B,Zr(this)))}):arguments.length?(h=$l(c),h.length?this.each(function(){if(b=Zr(this),_=this.nodeType===1&&" "+Kr(b)+" ",_){for(M=0;M<h.length;M++)for(T=h[M];_.indexOf(" "+T+" ")>-1;)_=_.replace(" "+T+" "," ");w=Kr(_),b!==w&&this.setAttribute("class",w)}}):this):this.attr("class","")},toggleClass:function(c,h){var _,b,T,M,w=typeof c,B=w==="string"||Array.isArray(c);return y(c)?this.each(function(F){p(this).toggleClass(c.call(this,F,Zr(this),h),h)}):typeof h=="boolean"&&B?h?this.addClass(c):this.removeClass(c):(_=$l(c),this.each(function(){if(B)for(M=p(this),T=0;T<_.length;T++)b=_[T],M.hasClass(b)?M.removeClass(b):M.addClass(b);else(c===void 0||w==="boolean")&&(b=Zr(this),b&&pe.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||c===!1?"":pe.get(this,"__className__")||""))}))},hasClass:function(c){var h,_,b=0;for(h=" "+c+" ";_=this[b++];)if(_.nodeType===1&&(" "+Kr(Zr(_))+" ").indexOf(h)>-1)return!0;return!1}});var Tg=/\r/g;p.fn.extend({val:function(c){var h,_,b,T=this[0];return arguments.length?(b=y(c),this.each(function(M){var w;this.nodeType===1&&(b?w=c.call(this,M,p(this).val()):w=c,w==null?w="":typeof w=="number"?w+="":Array.isArray(w)&&(w=p.map(w,function(B){return B==null?"":B+""})),h=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()],(!h||!("set"in h)||h.set(this,w,"value")===void 0)&&(this.value=w))})):T?(h=p.valHooks[T.type]||p.valHooks[T.nodeName.toLowerCase()],h&&"get"in h&&(_=h.get(T,"value"))!==void 0?_:(_=T.value,typeof _=="string"?_.replace(Tg,""):_??"")):void 0}}),p.extend({valHooks:{option:{get:function(c){var h=p.find.attr(c,"value");return h??Kr(p.text(c))}},select:{get:function(c){var h,_,b,T=c.options,M=c.selectedIndex,w=c.type==="select-one",B=w?null:[],F=w?M+1:T.length;for(M<0?b=F:b=w?M:0;b<F;b++)if(_=T[b],(_.selected||b===M)&&!_.disabled&&(!_.parentNode.disabled||!E(_.parentNode,"optgroup"))){if(h=p(_).val(),w)return h;B.push(h)}return B},set:function(c,h){for(var _,b,T=c.options,M=p.makeArray(h),w=T.length;w--;)b=T[w],(b.selected=p.inArray(p.valHooks.option.get(b),M)>-1)&&(_=!0);return _||(c.selectedIndex=-1),M}}}}),p.each(["radio","checkbox"],function(){p.valHooks[this]={set:function(c,h){if(Array.isArray(h))return c.checked=p.inArray(p(c).val(),h)>-1}},S.checkOn||(p.valHooks[this].get=function(c){return c.getAttribute("value")===null?"on":c.value})});var Io=e.location,Nf={guid:Date.now()},ec=/\?/;p.parseXML=function(c){var h,_;if(!c||typeof c!="string")return null;try{h=new e.DOMParser().parseFromString(c,"text/xml")}catch{}return _=h&&h.getElementsByTagName("parsererror")[0],(!h||_)&&p.error("Invalid XML: "+(_?p.map(_.childNodes,function(b){return b.textContent}).join(`
`):c)),h};var Of=/^(?:focusinfocus|focusoutblur)$/,If=function(c){c.stopPropagation()};p.extend(p.event,{trigger:function(c,h,_,b){var T,M,w,B,F,W,oe,de,J=[_||g],Se=d.call(c,"type")?c.type:c,nt=d.call(c,"namespace")?c.namespace.split("."):[];if(M=de=w=_=_||g,!(_.nodeType===3||_.nodeType===8)&&!Of.test(Se+p.event.triggered)&&(Se.indexOf(".")>-1&&(nt=Se.split("."),Se=nt.shift(),nt.sort()),F=Se.indexOf(":")<0&&"on"+Se,c=c[p.expando]?c:new p.Event(Se,typeof c=="object"&&c),c.isTrigger=b?2:3,c.namespace=nt.join("."),c.rnamespace=c.namespace?new RegExp("(^|\\.)"+nt.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,c.result=void 0,c.target||(c.target=_),h=h==null?[c]:p.makeArray(h,[c]),oe=p.event.special[Se]||{},!(!b&&oe.trigger&&oe.trigger.apply(_,h)===!1))){if(!b&&!oe.noBubble&&!x(_)){for(B=oe.delegateType||Se,Of.test(B+Se)||(M=M.parentNode);M;M=M.parentNode)J.push(M),w=M;w===(_.ownerDocument||g)&&J.push(w.defaultView||w.parentWindow||e)}for(T=0;(M=J[T++])&&!c.isPropagationStopped();)de=M,c.type=T>1?B:oe.bindType||Se,W=(pe.get(M,"events")||Object.create(null))[c.type]&&pe.get(M,"handle"),W&&W.apply(M,h),W=F&&M[F],W&&W.apply&&xe(M)&&(c.result=W.apply(M,h),c.result===!1&&c.preventDefault());return c.type=Se,!b&&!c.isDefaultPrevented()&&(!oe._default||oe._default.apply(J.pop(),h)===!1)&&xe(_)&&F&&y(_[Se])&&!x(_)&&(w=_[F],w&&(_[F]=null),p.event.triggered=Se,c.isPropagationStopped()&&de.addEventListener(Se,If),_[Se](),c.isPropagationStopped()&&de.removeEventListener(Se,If),p.event.triggered=void 0,w&&(_[F]=w)),c.result}},simulate:function(c,h,_){var b=p.extend(new p.Event,_,{type:c,isSimulated:!0});p.event.trigger(b,null,h)}}),p.fn.extend({trigger:function(c,h){return this.each(function(){p.event.trigger(c,h,this)})},triggerHandler:function(c,h){var _=this[0];if(_)return p.event.trigger(c,h,_,!0)}});var Mg=/\[\]$/,Uf=/\r?\n/g,Eg=/^(?:submit|button|image|reset|file)$/i,Ag=/^(?:input|select|textarea|keygen)/i;function tc(c,h,_,b){var T;if(Array.isArray(h))p.each(h,function(M,w){_||Mg.test(c)?b(c,w):tc(c+"["+(typeof w=="object"&&w!=null?M:"")+"]",w,_,b)});else if(!_&&R(h)==="object")for(T in h)tc(c+"["+T+"]",h[T],_,b);else b(c,h)}p.param=function(c,h){var _,b=[],T=function(M,w){var B=y(w)?w():w;b[b.length]=encodeURIComponent(M)+"="+encodeURIComponent(B??"")};if(c==null)return"";if(Array.isArray(c)||c.jquery&&!p.isPlainObject(c))p.each(c,function(){T(this.name,this.value)});else for(_ in c)tc(_,c[_],h,T);return b.join("&")},p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var c=p.prop(this,"elements");return c?p.makeArray(c):this}).filter(function(){var c=this.type;return this.name&&!p(this).is(":disabled")&&Ag.test(this.nodeName)&&!Eg.test(c)&&(this.checked||!Re.test(c))}).map(function(c,h){var _=p(this).val();return _==null?null:Array.isArray(_)?p.map(_,function(b){return{name:h.name,value:b.replace(Uf,`\r
`)}}):{name:h.name,value:_.replace(Uf,`\r
`)}}).get()}});var wg=/%20/g,Cg=/#.*$/,Rg=/([?&])_=[^&]*/,Lg=/^(.*?):[ \t]*([^\r\n]*)$/mg,Pg=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Dg=/^(?:GET|HEAD)$/,Ng=/^\/\//,Ff={},nc={},Bf="*/".concat("*"),ic=g.createElement("a");ic.href=Io.href;function kf(c){return function(h,_){typeof h!="string"&&(_=h,h="*");var b,T=0,M=h.toLowerCase().match(He)||[];if(y(_))for(;b=M[T++];)b[0]==="+"?(b=b.slice(1)||"*",(c[b]=c[b]||[]).unshift(_)):(c[b]=c[b]||[]).push(_)}}function zf(c,h,_,b){var T={},M=c===nc;function w(B){var F;return T[B]=!0,p.each(c[B]||[],function(W,oe){var de=oe(h,_,b);if(typeof de=="string"&&!M&&!T[de])return h.dataTypes.unshift(de),w(de),!1;if(M)return!(F=de)}),F}return w(h.dataTypes[0])||!T["*"]&&w("*")}function rc(c,h){var _,b,T=p.ajaxSettings.flatOptions||{};for(_ in h)h[_]!==void 0&&((T[_]?c:b||(b={}))[_]=h[_]);return b&&p.extend(!0,c,b),c}function Og(c,h,_){for(var b,T,M,w,B=c.contents,F=c.dataTypes;F[0]==="*";)F.shift(),b===void 0&&(b=c.mimeType||h.getResponseHeader("Content-Type"));if(b){for(T in B)if(B[T]&&B[T].test(b)){F.unshift(T);break}}if(F[0]in _)M=F[0];else{for(T in _){if(!F[0]||c.converters[T+" "+F[0]]){M=T;break}w||(w=T)}M=M||w}if(M)return M!==F[0]&&F.unshift(M),_[M]}function Ig(c,h,_,b){var T,M,w,B,F,W={},oe=c.dataTypes.slice();if(oe[1])for(w in c.converters)W[w.toLowerCase()]=c.converters[w];for(M=oe.shift();M;)if(c.responseFields[M]&&(_[c.responseFields[M]]=h),!F&&b&&c.dataFilter&&(h=c.dataFilter(h,c.dataType)),F=M,M=oe.shift(),M){if(M==="*")M=F;else if(F!=="*"&&F!==M){if(w=W[F+" "+M]||W["* "+M],!w){for(T in W)if(B=T.split(" "),B[1]===M&&(w=W[F+" "+B[0]]||W["* "+B[0]],w)){w===!0?w=W[T]:W[T]!==!0&&(M=B[0],oe.unshift(B[1]));break}}if(w!==!0)if(w&&c.throws)h=w(h);else try{h=w(h)}catch(de){return{state:"parsererror",error:w?de:"No conversion from "+F+" to "+M}}}}return{state:"success",data:h}}p.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Io.href,type:"GET",isLocal:Pg.test(Io.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Bf,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":p.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(c,h){return h?rc(rc(c,p.ajaxSettings),h):rc(p.ajaxSettings,c)},ajaxPrefilter:kf(Ff),ajaxTransport:kf(nc),ajax:function(c,h){typeof c=="object"&&(h=c,c=void 0),h=h||{};var _,b,T,M,w,B,F,W,oe,de,J=p.ajaxSetup({},h),Se=J.context||J,nt=J.context&&(Se.nodeType||Se.jquery)?p(Se):p.event,wt=p.Deferred(),_t=p.Callbacks("once memory"),Cn=J.statusCode||{},pn={},Oi={},Ii="canceled",St={readyState:0,getResponseHeader:function(Rt){var tn;if(F){if(!M)for(M={};tn=Lg.exec(T);)M[tn[1].toLowerCase()+" "]=(M[tn[1].toLowerCase()+" "]||[]).concat(tn[2]);tn=M[Rt.toLowerCase()+" "]}return tn==null?null:tn.join(", ")},getAllResponseHeaders:function(){return F?T:null},setRequestHeader:function(Rt,tn){return F==null&&(Rt=Oi[Rt.toLowerCase()]=Oi[Rt.toLowerCase()]||Rt,pn[Rt]=tn),this},overrideMimeType:function(Rt){return F==null&&(J.mimeType=Rt),this},statusCode:function(Rt){var tn;if(Rt)if(F)St.always(Rt[St.status]);else for(tn in Rt)Cn[tn]=[Cn[tn],Rt[tn]];return this},abort:function(Rt){var tn=Rt||Ii;return _&&_.abort(tn),Jr(0,tn),this}};if(wt.promise(St),J.url=((c||J.url||Io.href)+"").replace(Ng,Io.protocol+"//"),J.type=h.method||h.type||J.method||J.type,J.dataTypes=(J.dataType||"*").toLowerCase().match(He)||[""],J.crossDomain==null){B=g.createElement("a");try{B.href=J.url,B.href=B.href,J.crossDomain=ic.protocol+"//"+ic.host!=B.protocol+"//"+B.host}catch{J.crossDomain=!0}}if(J.data&&J.processData&&typeof J.data!="string"&&(J.data=p.param(J.data,J.traditional)),zf(Ff,J,h,St),F)return St;W=p.event&&J.global,W&&p.active++===0&&p.event.trigger("ajaxStart"),J.type=J.type.toUpperCase(),J.hasContent=!Dg.test(J.type),b=J.url.replace(Cg,""),J.hasContent?J.data&&J.processData&&(J.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(J.data=J.data.replace(wg,"+")):(de=J.url.slice(b.length),J.data&&(J.processData||typeof J.data=="string")&&(b+=(ec.test(b)?"&":"?")+J.data,delete J.data),J.cache===!1&&(b=b.replace(Rg,"$1"),de=(ec.test(b)?"&":"?")+"_="+Nf.guid+++de),J.url=b+de),J.ifModified&&(p.lastModified[b]&&St.setRequestHeader("If-Modified-Since",p.lastModified[b]),p.etag[b]&&St.setRequestHeader("If-None-Match",p.etag[b])),(J.data&&J.hasContent&&J.contentType!==!1||h.contentType)&&St.setRequestHeader("Content-Type",J.contentType),St.setRequestHeader("Accept",J.dataTypes[0]&&J.accepts[J.dataTypes[0]]?J.accepts[J.dataTypes[0]]+(J.dataTypes[0]!=="*"?", "+Bf+"; q=0.01":""):J.accepts["*"]);for(oe in J.headers)St.setRequestHeader(oe,J.headers[oe]);if(J.beforeSend&&(J.beforeSend.call(Se,St,J)===!1||F))return St.abort();if(Ii="abort",_t.add(J.complete),St.done(J.success),St.fail(J.error),_=zf(nc,J,h,St),!_)Jr(-1,"No Transport");else{if(St.readyState=1,W&&nt.trigger("ajaxSend",[St,J]),F)return St;J.async&&J.timeout>0&&(w=e.setTimeout(function(){St.abort("timeout")},J.timeout));try{F=!1,_.send(pn,Jr)}catch(Rt){if(F)throw Rt;Jr(-1,Rt)}}function Jr(Rt,tn,Fo,oc){var Ui,Bo,Fi,_r,vr,ai=tn;F||(F=!0,w&&e.clearTimeout(w),_=void 0,T=oc||"",St.readyState=Rt>0?4:0,Ui=Rt>=200&&Rt<300||Rt===304,Fo&&(_r=Og(J,St,Fo)),!Ui&&p.inArray("script",J.dataTypes)>-1&&p.inArray("json",J.dataTypes)<0&&(J.converters["text script"]=function(){}),_r=Ig(J,_r,St,Ui),Ui?(J.ifModified&&(vr=St.getResponseHeader("Last-Modified"),vr&&(p.lastModified[b]=vr),vr=St.getResponseHeader("etag"),vr&&(p.etag[b]=vr)),Rt===204||J.type==="HEAD"?ai="nocontent":Rt===304?ai="notmodified":(ai=_r.state,Bo=_r.data,Fi=_r.error,Ui=!Fi)):(Fi=ai,(Rt||!ai)&&(ai="error",Rt<0&&(Rt=0))),St.status=Rt,St.statusText=(tn||ai)+"",Ui?wt.resolveWith(Se,[Bo,ai,St]):wt.rejectWith(Se,[St,ai,Fi]),St.statusCode(Cn),Cn=void 0,W&&nt.trigger(Ui?"ajaxSuccess":"ajaxError",[St,J,Ui?Bo:Fi]),_t.fireWith(Se,[St,ai]),W&&(nt.trigger("ajaxComplete",[St,J]),--p.active||p.event.trigger("ajaxStop")))}return St},getJSON:function(c,h,_){return p.get(c,h,_,"json")},getScript:function(c,h){return p.get(c,void 0,h,"script")}}),p.each(["get","post"],function(c,h){p[h]=function(_,b,T,M){return y(b)&&(M=M||T,T=b,b=void 0),p.ajax(p.extend({url:_,type:h,dataType:M,data:b,success:T},p.isPlainObject(_)&&_))}}),p.ajaxPrefilter(function(c){var h;for(h in c.headers)h.toLowerCase()==="content-type"&&(c.contentType=c.headers[h]||"")}),p._evalUrl=function(c,h,_){return p.ajax({url:c,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(b){p.globalEval(b,h,_)}})},p.fn.extend({wrapAll:function(c){var h;return this[0]&&(y(c)&&(c=c.call(this[0])),h=p(c,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&h.insertBefore(this[0]),h.map(function(){for(var _=this;_.firstElementChild;)_=_.firstElementChild;return _}).append(this)),this},wrapInner:function(c){return y(c)?this.each(function(h){p(this).wrapInner(c.call(this,h))}):this.each(function(){var h=p(this),_=h.contents();_.length?_.wrapAll(c):h.append(c)})},wrap:function(c){var h=y(c);return this.each(function(_){p(this).wrapAll(h?c.call(this,_):c)})},unwrap:function(c){return this.parent(c).not("body").each(function(){p(this).replaceWith(this.childNodes)}),this}}),p.expr.pseudos.hidden=function(c){return!p.expr.pseudos.visible(c)},p.expr.pseudos.visible=function(c){return!!(c.offsetWidth||c.offsetHeight||c.getClientRects().length)},p.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var Ug={0:200,1223:204},Uo=p.ajaxSettings.xhr();S.cors=!!Uo&&"withCredentials"in Uo,S.ajax=Uo=!!Uo,p.ajaxTransport(function(c){var h,_;if(S.cors||Uo&&!c.crossDomain)return{send:function(b,T){var M,w=c.xhr();if(w.open(c.type,c.url,c.async,c.username,c.password),c.xhrFields)for(M in c.xhrFields)w[M]=c.xhrFields[M];c.mimeType&&w.overrideMimeType&&w.overrideMimeType(c.mimeType),!c.crossDomain&&!b["X-Requested-With"]&&(b["X-Requested-With"]="XMLHttpRequest");for(M in b)w.setRequestHeader(M,b[M]);h=function(B){return function(){h&&(h=_=w.onload=w.onerror=w.onabort=w.ontimeout=w.onreadystatechange=null,B==="abort"?w.abort():B==="error"?typeof w.status!="number"?T(0,"error"):T(w.status,w.statusText):T(Ug[w.status]||w.status,w.statusText,(w.responseType||"text")!=="text"||typeof w.responseText!="string"?{binary:w.response}:{text:w.responseText},w.getAllResponseHeaders()))}},w.onload=h(),_=w.onerror=w.ontimeout=h("error"),w.onabort!==void 0?w.onabort=_:w.onreadystatechange=function(){w.readyState===4&&e.setTimeout(function(){h&&_()})},h=h("abort");try{w.send(c.hasContent&&c.data||null)}catch(B){if(h)throw B}},abort:function(){h&&h()}}}),p.ajaxPrefilter(function(c){c.crossDomain&&(c.contents.script=!1)}),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(c){return p.globalEval(c),c}}}),p.ajaxPrefilter("script",function(c){c.cache===void 0&&(c.cache=!1),c.crossDomain&&(c.type="GET")}),p.ajaxTransport("script",function(c){if(c.crossDomain||c.scriptAttrs){var h,_;return{send:function(b,T){h=p("<script>").attr(c.scriptAttrs||{}).prop({charset:c.scriptCharset,src:c.url}).on("load error",_=function(M){h.remove(),_=null,M&&T(M.type==="error"?404:200,M.type)}),g.head.appendChild(h[0])},abort:function(){_&&_()}}}});var Hf=[],sc=/(=)\?(?=&|$)|\?\?/;p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var c=Hf.pop()||p.expando+"_"+Nf.guid++;return this[c]=!0,c}}),p.ajaxPrefilter("json jsonp",function(c,h,_){var b,T,M,w=c.jsonp!==!1&&(sc.test(c.url)?"url":typeof c.data=="string"&&(c.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&sc.test(c.data)&&"data");if(w||c.dataTypes[0]==="jsonp")return b=c.jsonpCallback=y(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,w?c[w]=c[w].replace(sc,"$1"+b):c.jsonp!==!1&&(c.url+=(ec.test(c.url)?"&":"?")+c.jsonp+"="+b),c.converters["script json"]=function(){return M||p.error(b+" was not called"),M[0]},c.dataTypes[0]="json",T=e[b],e[b]=function(){M=arguments},_.always(function(){T===void 0?p(e).removeProp(b):e[b]=T,c[b]&&(c.jsonpCallback=h.jsonpCallback,Hf.push(b)),M&&y(T)&&T(M[0]),M=T=void 0}),"script"}),S.createHTMLDocument=function(){var c=g.implementation.createHTMLDocument("").body;return c.innerHTML="<form></form><form></form>",c.childNodes.length===2}(),p.parseHTML=function(c,h,_){if(typeof c!="string")return[];typeof h=="boolean"&&(_=h,h=!1);var b,T,M;return h||(S.createHTMLDocument?(h=g.implementation.createHTMLDocument(""),b=h.createElement("base"),b.href=g.location.href,h.head.appendChild(b)):h=g),T=Me.exec(c),M=!_&&[],T?[h.createElement(T[1])]:(T=xn([c],h,M),M&&M.length&&p(M).remove(),p.merge([],T.childNodes))},p.fn.load=function(c,h,_){var b,T,M,w=this,B=c.indexOf(" ");return B>-1&&(b=Kr(c.slice(B)),c=c.slice(0,B)),y(h)?(_=h,h=void 0):h&&typeof h=="object"&&(T="POST"),w.length>0&&p.ajax({url:c,type:T||"GET",dataType:"html",data:h}).done(function(F){M=arguments,w.html(b?p("<div>").append(p.parseHTML(F)).find(b):F)}).always(_&&function(F,W){w.each(function(){_.apply(this,M||[F.responseText,W,F])})}),this},p.expr.pseudos.animated=function(c){return p.grep(p.timers,function(h){return c===h.elem}).length},p.offset={setOffset:function(c,h,_){var b,T,M,w,B,F,W,oe=p.css(c,"position"),de=p(c),J={};oe==="static"&&(c.style.position="relative"),B=de.offset(),M=p.css(c,"top"),F=p.css(c,"left"),W=(oe==="absolute"||oe==="fixed")&&(M+F).indexOf("auto")>-1,W?(b=de.position(),w=b.top,T=b.left):(w=parseFloat(M)||0,T=parseFloat(F)||0),y(h)&&(h=h.call(c,_,p.extend({},B))),h.top!=null&&(J.top=h.top-B.top+w),h.left!=null&&(J.left=h.left-B.left+T),"using"in h?h.using.call(c,J):de.css(J)}},p.fn.extend({offset:function(c){if(arguments.length)return c===void 0?this:this.each(function(T){p.offset.setOffset(this,c,T)});var h,_,b=this[0];if(b)return b.getClientRects().length?(h=b.getBoundingClientRect(),_=b.ownerDocument.defaultView,{top:h.top+_.pageYOffset,left:h.left+_.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var c,h,_,b=this[0],T={top:0,left:0};if(p.css(b,"position")==="fixed")h=b.getBoundingClientRect();else{for(h=this.offset(),_=b.ownerDocument,c=b.offsetParent||_.documentElement;c&&(c===_.body||c===_.documentElement)&&p.css(c,"position")==="static";)c=c.parentNode;c&&c!==b&&c.nodeType===1&&(T=p(c).offset(),T.top+=p.css(c,"borderTopWidth",!0),T.left+=p.css(c,"borderLeftWidth",!0))}return{top:h.top-T.top-p.css(b,"marginTop",!0),left:h.left-T.left-p.css(b,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var c=this.offsetParent;c&&p.css(c,"position")==="static";)c=c.offsetParent;return c||ze})}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(c,h){var _=h==="pageYOffset";p.fn[c]=function(b){return Je(this,function(T,M,w){var B;if(x(T)?B=T:T.nodeType===9&&(B=T.defaultView),w===void 0)return B?B[h]:T[M];B?B.scrollTo(_?B.pageXOffset:w,_?w:B.pageYOffset):T[M]=w},c,b,arguments.length)}}),p.each(["top","left"],function(c,h){p.cssHooks[h]=et(S.pixelPosition,function(_,b){if(b)return b=Xe(_,h),ne.test(b)?p(_).position()[h]+"px":b})}),p.each({Height:"height",Width:"width"},function(c,h){p.each({padding:"inner"+c,content:h,"":"outer"+c},function(_,b){p.fn[b]=function(T,M){var w=arguments.length&&(_||typeof T!="boolean"),B=_||(T===!0||M===!0?"margin":"border");return Je(this,function(F,W,oe){var de;return x(F)?b.indexOf("outer")===0?F["inner"+c]:F.document.documentElement["client"+c]:F.nodeType===9?(de=F.documentElement,Math.max(F.body["scroll"+c],de["scroll"+c],F.body["offset"+c],de["offset"+c],de["client"+c])):oe===void 0?p.css(F,W,B):p.style(F,W,oe,B)},h,w?T:void 0,w)}})}),p.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(c,h){p.fn[h]=function(_){return this.on(h,_)}}),p.fn.extend({bind:function(c,h,_){return this.on(c,null,h,_)},unbind:function(c,h){return this.off(c,null,h)},delegate:function(c,h,_,b){return this.on(h,c,_,b)},undelegate:function(c,h,_){return arguments.length===1?this.off(c,"**"):this.off(h,c||"**",_)},hover:function(c,h){return this.on("mouseenter",c).on("mouseleave",h||c)}}),p.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(c,h){p.fn[h]=function(_,b){return arguments.length>0?this.on(h,null,_,b):this.trigger(h)}});var Fg=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;p.proxy=function(c,h){var _,b,T;if(typeof h=="string"&&(_=c[h],h=c,c=_),!!y(c))return b=r.call(arguments,2),T=function(){return c.apply(h||this,b.concat(r.call(arguments)))},T.guid=c.guid=c.guid||p.guid++,T},p.holdReady=function(c){c?p.readyWait++:p.ready(!0)},p.isArray=Array.isArray,p.parseJSON=JSON.parse,p.nodeName=E,p.isFunction=y,p.isWindow=x,p.camelCase=ve,p.type=R,p.now=Date.now,p.isNumeric=function(c){var h=p.type(c);return(h==="number"||h==="string")&&!isNaN(c-parseFloat(c))},p.trim=function(c){return c==null?"":(c+"").replace(Fg,"$1")};var Bg=e.jQuery,kg=e.$;return p.noConflict=function(c){return e.$===p&&(e.$=kg),c&&e.jQuery===p&&(e.jQuery=Bg),p},typeof t>"u"&&(e.jQuery=e.$=p),p})})(pp);var Kg=pp.exports;const ue=Yg(Kg);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xu="160",Zg=0,Xf=1,Jg=2,mp=1,gp=2,or=3,qi=0,Wn=1,Hi=2,fr=0,ao=1,yl=2,jf=3,qf=4,Qg=5,ls=100,$g=101,e_=102,Yf=103,Kf=104,t_=200,n_=201,i_=202,r_=203,lu=204,cu=205,s_=206,o_=207,a_=208,l_=209,c_=210,u_=211,f_=212,h_=213,d_=214,p_=0,m_=1,g_=2,bl=3,__=4,v_=5,x_=6,y_=7,_p=0,b_=1,S_=2,Or=0,vp=1,xp=2,yp=3,ju=4,T_=5,bp=6,Zf="attached",M_="detached",Sp=300,po=301,mo=302,uu=303,fu=304,zl=306,xs=1e3,pi=1001,Sl=1002,hn=1003,hu=1004,ml=1005,Hn=1006,Tp=1007,ys=1008,Ir=1009,E_=1010,A_=1011,qu=1012,Mp=1013,Cr=1014,cr=1015,Ci=1016,Ep=1017,Ap=1018,hs=1020,w_=1021,mi=1023,C_=1024,R_=1025,ds=1026,go=1027,L_=1028,wp=1029,P_=1030,Cp=1031,Rp=1033,dc=33776,pc=33777,mc=33778,gc=33779,Jf=35840,Qf=35841,$f=35842,eh=35843,Lp=36196,th=37492,nh=37496,ih=37808,rh=37809,sh=37810,oh=37811,ah=37812,lh=37813,ch=37814,uh=37815,fh=37816,hh=37817,dh=37818,ph=37819,mh=37820,gh=37821,_c=36492,_h=36494,vh=36495,D_=36283,xh=36284,yh=36285,bh=36286,ua=2300,_o=2301,vc=2302,Sh=2400,Th=2401,Mh=2402,N_=2500,O_=0,Pp=1,du=2,Dp=3e3,ps=3001,I_=3200,U_=3201,Np=0,F_=1,gi="",Yt="srgb",gn="srgb-linear",Yu="display-p3",Hl="display-p3-linear",Tl="linear",Wt="srgb",Ml="rec709",El="p3",Us=7680,Eh=519,B_=512,k_=513,z_=514,Op=515,H_=516,G_=517,V_=518,W_=519,pu=35044,Ah="300 es",mu=1035,ur=2e3,Al=2001;class Co{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wh=1234567;const ea=Math.PI/180,vo=180/Math.PI;function Ri(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[t&63|128]+Pn[t>>8&255]+"-"+Pn[t>>16&255]+Pn[t>>24&255]+Pn[n&255]+Pn[n>>8&255]+Pn[n>>16&255]+Pn[n>>24&255]).toLowerCase()}function Nn(s,e,t){return Math.max(e,Math.min(t,s))}function Ku(s,e){return(s%e+e)%e}function X_(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function j_(s,e,t){return s!==e?(t-s)/(e-s):0}function ta(s,e,t){return(1-t)*s+t*e}function q_(s,e,t,n){return ta(s,e,1-Math.exp(-t*n))}function Y_(s,e=1){return e-Math.abs(Ku(s,e*2)-e)}function K_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Z_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function J_(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Q_(s,e){return s+Math.random()*(e-s)}function $_(s){return s*(.5-Math.random())}function ev(s){s!==void 0&&(wh=s);let e=wh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function tv(s){return s*ea}function nv(s){return s*vo}function gu(s){return(s&s-1)===0&&s!==0}function iv(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function wl(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function rv(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),u=r((e+n)/2),f=o((e+n)/2),d=r((e-n)/2),m=o((e-n)/2),v=r((n-e)/2),S=o((n-e)/2);switch(i){case"XYX":s.set(a*f,l*d,l*m,a*u);break;case"YZY":s.set(l*m,a*f,l*d,a*u);break;case"ZXZ":s.set(l*d,l*m,a*f,a*u);break;case"XZX":s.set(a*f,l*S,l*v,a*u);break;case"YXY":s.set(l*v,a*f,l*S,a*u);break;case"ZYZ":s.set(l*S,l*v,a*f,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Gi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function kt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const sv={DEG2RAD:ea,RAD2DEG:vo,generateUUID:Ri,clamp:Nn,euclideanModulo:Ku,mapLinear:X_,inverseLerp:j_,lerp:ta,damp:q_,pingpong:Y_,smoothstep:K_,smootherstep:Z_,randInt:J_,randFloat:Q_,randFloatSpread:$_,seededRandom:ev,degToRad:tv,radToDeg:nv,isPowerOfTwo:gu,ceilPowerOfTwo:iv,floorPowerOfTwo:wl,setQuaternionFromProperEuler:rv,normalize:kt,denormalize:Gi};class Ze{constructor(e=0,t=0){Ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Nn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xt{constructor(e,t,n,i,r,o,a,l,u){xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,u)}set(e,t,n,i,r,o,a,l,u){const f=this.elements;return f[0]=e,f[1]=i,f[2]=a,f[3]=t,f[4]=r,f[5]=l,f[6]=n,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],u=n[1],f=n[4],d=n[7],m=n[2],v=n[5],S=n[8],y=i[0],x=i[3],g=i[6],C=i[1],A=i[4],R=i[7],N=i[2],O=i[5],p=i[8];return r[0]=o*y+a*C+l*N,r[3]=o*x+a*A+l*O,r[6]=o*g+a*R+l*p,r[1]=u*y+f*C+d*N,r[4]=u*x+f*A+d*O,r[7]=u*g+f*R+d*p,r[2]=m*y+v*C+S*N,r[5]=m*x+v*A+S*O,r[8]=m*g+v*R+S*p,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8];return t*o*f-t*a*u-n*r*f+n*a*l+i*r*u-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],d=f*o-a*u,m=a*l-f*r,v=u*r-o*l,S=t*d+n*m+i*v;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/S;return e[0]=d*y,e[1]=(i*u-f*n)*y,e[2]=(a*n-i*o)*y,e[3]=m*y,e[4]=(f*t-i*l)*y,e[5]=(i*r-a*t)*y,e[6]=v*y,e[7]=(n*l-u*t)*y,e[8]=(o*t-n*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),u=Math.sin(r);return this.set(n*l,n*u,-n*(l*o+u*a)+o+e,-i*u,i*l,-i*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(xc.makeScale(e,t)),this}rotate(e){return this.premultiply(xc.makeRotation(-e)),this}translate(e,t){return this.premultiply(xc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xc=new xt;function Ip(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function fa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ov(){const s=fa("canvas");return s.style.display="block",s}const Ch={};function na(s){s in Ch||(Ch[s]=!0,console.warn(s))}const Rh=new xt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Lh=new xt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ua={[gn]:{transfer:Tl,primaries:Ml,toReference:s=>s,fromReference:s=>s},[Yt]:{transfer:Wt,primaries:Ml,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Hl]:{transfer:Tl,primaries:El,toReference:s=>s.applyMatrix3(Lh),fromReference:s=>s.applyMatrix3(Rh)},[Yu]:{transfer:Wt,primaries:El,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Lh),fromReference:s=>s.applyMatrix3(Rh).convertLinearToSRGB()}},av=new Set([gn,Hl]),Pt={enabled:!0,_workingColorSpace:gn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!av.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Ua[e].toReference,i=Ua[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Ua[s].primaries},getTransfer:function(s){return s===gi?Tl:Ua[s].transfer}};function lo(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function yc(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Fs;class Up{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fs===void 0&&(Fs=fa("canvas")),Fs.width=e.width,Fs.height=e.height;const n=Fs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Fs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=lo(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(lo(t[n]/255)*255):t[n]=lo(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lv=0;class Fp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lv++}),this.uuid=Ri(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(bc(i[o].image)):r.push(bc(i[o]))}else r=bc(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function bc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Up.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cv=0;class mn extends Co{constructor(e=mn.DEFAULT_IMAGE,t=mn.DEFAULT_MAPPING,n=pi,i=pi,r=Hn,o=ys,a=mi,l=Ir,u=mn.DEFAULT_ANISOTROPY,f=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cv++}),this.uuid=Ri(),this.name="",this.source=new Fp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(na("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===ps?Yt:gi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xs:e.x=e.x-Math.floor(e.x);break;case pi:e.x=e.x<0?0:1;break;case Sl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xs:e.y=e.y-Math.floor(e.y);break;case pi:e.y=e.y<0?0:1;break;case Sl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return na("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Yt?ps:Dp}set encoding(e){na("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ps?Yt:gi}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=Sp;mn.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,t=0,n=0,i=1){Ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,u=l[0],f=l[4],d=l[8],m=l[1],v=l[5],S=l[9],y=l[2],x=l[6],g=l[10];if(Math.abs(f-m)<.01&&Math.abs(d-y)<.01&&Math.abs(S-x)<.01){if(Math.abs(f+m)<.1&&Math.abs(d+y)<.1&&Math.abs(S+x)<.1&&Math.abs(u+v+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(u+1)/2,R=(v+1)/2,N=(g+1)/2,O=(f+m)/4,p=(d+y)/4,G=(S+x)/4;return A>R&&A>N?A<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(A),i=O/n,r=p/n):R>N?R<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(R),n=O/i,r=G/i):N<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(N),n=p/r,i=G/r),this.set(n,i,r,t),this}let C=Math.sqrt((x-S)*(x-S)+(d-y)*(d-y)+(m-f)*(m-f));return Math.abs(C)<.001&&(C=1),this.x=(x-S)/C,this.y=(d-y)/C,this.z=(m-f)/C,this.w=Math.acos((u+v+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uv extends Co{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(na("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ps?Yt:gi),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new mn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Fp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jn extends uv{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Bp extends mn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fv extends mn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],u=n[i+1],f=n[i+2],d=n[i+3];const m=r[o+0],v=r[o+1],S=r[o+2],y=r[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=f,e[t+3]=d;return}if(a===1){e[t+0]=m,e[t+1]=v,e[t+2]=S,e[t+3]=y;return}if(d!==y||l!==m||u!==v||f!==S){let x=1-a;const g=l*m+u*v+f*S+d*y,C=g>=0?1:-1,A=1-g*g;if(A>Number.EPSILON){const N=Math.sqrt(A),O=Math.atan2(N,g*C);x=Math.sin(x*O)/N,a=Math.sin(a*O)/N}const R=a*C;if(l=l*x+m*R,u=u*x+v*R,f=f*x+S*R,d=d*x+y*R,x===1-a){const N=1/Math.sqrt(l*l+u*u+f*f+d*d);l*=N,u*=N,f*=N,d*=N}}e[t]=l,e[t+1]=u,e[t+2]=f,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],u=n[i+2],f=n[i+3],d=r[o],m=r[o+1],v=r[o+2],S=r[o+3];return e[t]=a*S+f*d+l*v-u*m,e[t+1]=l*S+f*m+u*d-a*v,e[t+2]=u*S+f*v+a*m-l*d,e[t+3]=f*S-a*d-l*m-u*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(n/2),f=a(i/2),d=a(r/2),m=l(n/2),v=l(i/2),S=l(r/2);switch(o){case"XYZ":this._x=m*f*d+u*v*S,this._y=u*v*d-m*f*S,this._z=u*f*S+m*v*d,this._w=u*f*d-m*v*S;break;case"YXZ":this._x=m*f*d+u*v*S,this._y=u*v*d-m*f*S,this._z=u*f*S-m*v*d,this._w=u*f*d+m*v*S;break;case"ZXY":this._x=m*f*d-u*v*S,this._y=u*v*d+m*f*S,this._z=u*f*S+m*v*d,this._w=u*f*d-m*v*S;break;case"ZYX":this._x=m*f*d-u*v*S,this._y=u*v*d+m*f*S,this._z=u*f*S-m*v*d,this._w=u*f*d+m*v*S;break;case"YZX":this._x=m*f*d+u*v*S,this._y=u*v*d+m*f*S,this._z=u*f*S-m*v*d,this._w=u*f*d-m*v*S;break;case"XZY":this._x=m*f*d-u*v*S,this._y=u*v*d-m*f*S,this._z=u*f*S+m*v*d,this._w=u*f*d+m*v*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],u=t[2],f=t[6],d=t[10],m=n+a+d;if(m>0){const v=.5/Math.sqrt(m+1);this._w=.25/v,this._x=(f-l)*v,this._y=(r-u)*v,this._z=(o-i)*v}else if(n>a&&n>d){const v=2*Math.sqrt(1+n-a-d);this._w=(f-l)/v,this._x=.25*v,this._y=(i+o)/v,this._z=(r+u)/v}else if(a>d){const v=2*Math.sqrt(1+a-n-d);this._w=(r-u)/v,this._x=(i+o)/v,this._y=.25*v,this._z=(l+f)/v}else{const v=2*Math.sqrt(1+d-n-a);this._w=(o-i)/v,this._x=(r+u)/v,this._y=(l+f)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,u=t._z,f=t._w;return this._x=n*f+o*a+i*u-r*l,this._y=i*f+o*l+r*a-n*u,this._z=r*f+o*u+n*l-i*a,this._w=o*f-n*a-i*l-r*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const v=1-t;return this._w=v*o+t*this._w,this._x=v*n+t*this._x,this._y=v*i+t*this._y,this._z=v*r+t*this._z,this.normalize(),this}const u=Math.sqrt(l),f=Math.atan2(u,a),d=Math.sin((1-t)*f)/u,m=Math.sin(t*f)/u;return this._w=o*d+this._w*m,this._x=n*d+this._x*m,this._y=i*d+this._y*m,this._z=r*d+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,n=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ph.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ph.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*i-a*n),f=2*(a*t-r*i),d=2*(r*n-o*t);return this.x=t+l*u+o*d-a*f,this.y=n+l*f+a*u-r*d,this.z=i+l*d+r*f-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Sc.copy(this).projectOnVector(e),this.sub(Sc)}reflect(e){return this.sub(Sc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Nn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sc=new V,Ph=new Gr;class pr{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Mi):Mi.fromBufferAttribute(r,o),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fa.copy(n.boundingBox)),Fa.applyMatrix4(e.matrixWorld),this.union(Fa)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zo),Ba.subVectors(this.max,zo),Bs.subVectors(e.a,zo),ks.subVectors(e.b,zo),zs.subVectors(e.c,zo),yr.subVectors(ks,Bs),br.subVectors(zs,ks),$r.subVectors(Bs,zs);let t=[0,-yr.z,yr.y,0,-br.z,br.y,0,-$r.z,$r.y,yr.z,0,-yr.x,br.z,0,-br.x,$r.z,0,-$r.x,-yr.y,yr.x,0,-br.y,br.x,0,-$r.y,$r.x,0];return!Tc(t,Bs,ks,zs,Ba)||(t=[1,0,0,0,1,0,0,0,1],!Tc(t,Bs,ks,zs,Ba))?!1:(ka.crossVectors(yr,br),t=[ka.x,ka.y,ka.z],Tc(t,Bs,ks,zs,Ba))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(er[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),er[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),er[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),er[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),er[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),er[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),er[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),er[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(er),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const er=[new V,new V,new V,new V,new V,new V,new V,new V],Mi=new V,Fa=new pr,Bs=new V,ks=new V,zs=new V,yr=new V,br=new V,$r=new V,zo=new V,Ba=new V,ka=new V,es=new V;function Tc(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){es.fromArray(s,r);const a=i.x*Math.abs(es.x)+i.y*Math.abs(es.y)+i.z*Math.abs(es.z),l=e.dot(es),u=t.dot(es),f=n.dot(es);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>a)return!1}return!0}const hv=new pr,Ho=new V,Mc=new V;class Ki{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):hv.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ho.subVectors(e,this.center);const t=Ho.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ho,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ho.copy(e.center).add(Mc)),this.expandByPoint(Ho.copy(e.center).sub(Mc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const tr=new V,Ec=new V,za=new V,Sr=new V,Ac=new V,Ha=new V,wc=new V;class ya{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,tr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=tr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(tr.copy(this.origin).addScaledVector(this.direction,t),tr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ec.copy(e).add(t).multiplyScalar(.5),za.copy(t).sub(e).normalize(),Sr.copy(this.origin).sub(Ec);const r=e.distanceTo(t)*.5,o=-this.direction.dot(za),a=Sr.dot(this.direction),l=-Sr.dot(za),u=Sr.lengthSq(),f=Math.abs(1-o*o);let d,m,v,S;if(f>0)if(d=o*l-a,m=o*a-l,S=r*f,d>=0)if(m>=-S)if(m<=S){const y=1/f;d*=y,m*=y,v=d*(d+o*m+2*a)+m*(o*d+m+2*l)+u}else m=r,d=Math.max(0,-(o*m+a)),v=-d*d+m*(m+2*l)+u;else m=-r,d=Math.max(0,-(o*m+a)),v=-d*d+m*(m+2*l)+u;else m<=-S?(d=Math.max(0,-(-o*r+a)),m=d>0?-r:Math.min(Math.max(-r,-l),r),v=-d*d+m*(m+2*l)+u):m<=S?(d=0,m=Math.min(Math.max(-r,-l),r),v=m*(m+2*l)+u):(d=Math.max(0,-(o*r+a)),m=d>0?r:Math.min(Math.max(-r,-l),r),v=-d*d+m*(m+2*l)+u);else m=o>0?-r:r,d=Math.max(0,-(o*m+a)),v=-d*d+m*(m+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Ec).addScaledVector(za,m),v}intersectSphere(e,t){tr.subVectors(e.center,this.origin);const n=tr.dot(this.direction),i=tr.dot(tr)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const u=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,m=this.origin;return u>=0?(n=(e.min.x-m.x)*u,i=(e.max.x-m.x)*u):(n=(e.max.x-m.x)*u,i=(e.min.x-m.x)*u),f>=0?(r=(e.min.y-m.y)*f,o=(e.max.y-m.y)*f):(r=(e.max.y-m.y)*f,o=(e.min.y-m.y)*f),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-m.z)*d,l=(e.max.z-m.z)*d):(a=(e.max.z-m.z)*d,l=(e.min.z-m.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,tr)!==null}intersectTriangle(e,t,n,i,r){Ac.subVectors(t,e),Ha.subVectors(n,e),wc.crossVectors(Ac,Ha);let o=this.direction.dot(wc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Sr.subVectors(this.origin,e);const l=a*this.direction.dot(Ha.crossVectors(Sr,Ha));if(l<0)return null;const u=a*this.direction.dot(Ac.cross(Sr));if(u<0||l+u>o)return null;const f=-a*Sr.dot(wc);return f<0?null:this.at(f/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,n,i,r,o,a,l,u,f,d,m,v,S,y,x){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,u,f,d,m,v,S,y,x)}set(e,t,n,i,r,o,a,l,u,f,d,m,v,S,y,x){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=u,g[6]=f,g[10]=d,g[14]=m,g[3]=v,g[7]=S,g[11]=y,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Hs.setFromMatrixColumn(e,0).length(),r=1/Hs.setFromMatrixColumn(e,1).length(),o=1/Hs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),u=Math.sin(i),f=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const m=o*f,v=o*d,S=a*f,y=a*d;t[0]=l*f,t[4]=-l*d,t[8]=u,t[1]=v+S*u,t[5]=m-y*u,t[9]=-a*l,t[2]=y-m*u,t[6]=S+v*u,t[10]=o*l}else if(e.order==="YXZ"){const m=l*f,v=l*d,S=u*f,y=u*d;t[0]=m+y*a,t[4]=S*a-v,t[8]=o*u,t[1]=o*d,t[5]=o*f,t[9]=-a,t[2]=v*a-S,t[6]=y+m*a,t[10]=o*l}else if(e.order==="ZXY"){const m=l*f,v=l*d,S=u*f,y=u*d;t[0]=m-y*a,t[4]=-o*d,t[8]=S+v*a,t[1]=v+S*a,t[5]=o*f,t[9]=y-m*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const m=o*f,v=o*d,S=a*f,y=a*d;t[0]=l*f,t[4]=S*u-v,t[8]=m*u+y,t[1]=l*d,t[5]=y*u+m,t[9]=v*u-S,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const m=o*l,v=o*u,S=a*l,y=a*u;t[0]=l*f,t[4]=y-m*d,t[8]=S*d+v,t[1]=d,t[5]=o*f,t[9]=-a*f,t[2]=-u*f,t[6]=v*d+S,t[10]=m-y*d}else if(e.order==="XZY"){const m=o*l,v=o*u,S=a*l,y=a*u;t[0]=l*f,t[4]=-d,t[8]=u*f,t[1]=m*d+y,t[5]=o*f,t[9]=v*d-S,t[2]=S*d-v,t[6]=a*f,t[10]=y*d+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dv,e,pv)}lookAt(e,t,n){const i=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Tr.crossVectors(n,$n),Tr.lengthSq()===0&&(Math.abs(n.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Tr.crossVectors(n,$n)),Tr.normalize(),Ga.crossVectors($n,Tr),i[0]=Tr.x,i[4]=Ga.x,i[8]=$n.x,i[1]=Tr.y,i[5]=Ga.y,i[9]=$n.y,i[2]=Tr.z,i[6]=Ga.z,i[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],u=n[12],f=n[1],d=n[5],m=n[9],v=n[13],S=n[2],y=n[6],x=n[10],g=n[14],C=n[3],A=n[7],R=n[11],N=n[15],O=i[0],p=i[4],G=i[8],E=i[12],D=i[1],Z=i[5],q=i[9],$=i[13],k=i[2],X=i[6],Y=i[10],le=i[14],ce=i[3],fe=i[7],me=i[11],Te=i[15];return r[0]=o*O+a*D+l*k+u*ce,r[4]=o*p+a*Z+l*X+u*fe,r[8]=o*G+a*q+l*Y+u*me,r[12]=o*E+a*$+l*le+u*Te,r[1]=f*O+d*D+m*k+v*ce,r[5]=f*p+d*Z+m*X+v*fe,r[9]=f*G+d*q+m*Y+v*me,r[13]=f*E+d*$+m*le+v*Te,r[2]=S*O+y*D+x*k+g*ce,r[6]=S*p+y*Z+x*X+g*fe,r[10]=S*G+y*q+x*Y+g*me,r[14]=S*E+y*$+x*le+g*Te,r[3]=C*O+A*D+R*k+N*ce,r[7]=C*p+A*Z+R*X+N*fe,r[11]=C*G+A*q+R*Y+N*me,r[15]=C*E+A*$+R*le+N*Te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],u=e[13],f=e[2],d=e[6],m=e[10],v=e[14],S=e[3],y=e[7],x=e[11],g=e[15];return S*(+r*l*d-i*u*d-r*a*m+n*u*m+i*a*v-n*l*v)+y*(+t*l*v-t*u*m+r*o*m-i*o*v+i*u*f-r*l*f)+x*(+t*u*d-t*a*v-r*o*d+n*o*v+r*a*f-n*u*f)+g*(-i*a*f-t*l*d+t*a*m+i*o*d-n*o*m+n*l*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],d=e[9],m=e[10],v=e[11],S=e[12],y=e[13],x=e[14],g=e[15],C=d*x*u-y*m*u+y*l*v-a*x*v-d*l*g+a*m*g,A=S*m*u-f*x*u-S*l*v+o*x*v+f*l*g-o*m*g,R=f*y*u-S*d*u+S*a*v-o*y*v-f*a*g+o*d*g,N=S*d*l-f*y*l-S*a*m+o*y*m+f*a*x-o*d*x,O=t*C+n*A+i*R+r*N;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const p=1/O;return e[0]=C*p,e[1]=(y*m*r-d*x*r-y*i*v+n*x*v+d*i*g-n*m*g)*p,e[2]=(a*x*r-y*l*r+y*i*u-n*x*u-a*i*g+n*l*g)*p,e[3]=(d*l*r-a*m*r-d*i*u+n*m*u+a*i*v-n*l*v)*p,e[4]=A*p,e[5]=(f*x*r-S*m*r+S*i*v-t*x*v-f*i*g+t*m*g)*p,e[6]=(S*l*r-o*x*r-S*i*u+t*x*u+o*i*g-t*l*g)*p,e[7]=(o*m*r-f*l*r+f*i*u-t*m*u-o*i*v+t*l*v)*p,e[8]=R*p,e[9]=(S*d*r-f*y*r-S*n*v+t*y*v+f*n*g-t*d*g)*p,e[10]=(o*y*r-S*a*r+S*n*u-t*y*u-o*n*g+t*a*g)*p,e[11]=(f*a*r-o*d*r-f*n*u+t*d*u+o*n*v-t*a*v)*p,e[12]=N*p,e[13]=(f*y*i-S*d*i+S*n*m-t*y*m-f*n*x+t*d*x)*p,e[14]=(S*a*i-o*y*i-S*n*l+t*y*l+o*n*x-t*a*x)*p,e[15]=(o*d*i-f*a*i+f*n*l-t*d*l-o*n*m+t*a*m)*p,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,u=r*o,f=r*a;return this.set(u*o+n,u*a-i*l,u*l+i*a,0,u*a+i*l,f*a+n,f*l-i*o,0,u*l-i*a,f*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,u=r+r,f=o+o,d=a+a,m=r*u,v=r*f,S=r*d,y=o*f,x=o*d,g=a*d,C=l*u,A=l*f,R=l*d,N=n.x,O=n.y,p=n.z;return i[0]=(1-(y+g))*N,i[1]=(v+R)*N,i[2]=(S-A)*N,i[3]=0,i[4]=(v-R)*O,i[5]=(1-(m+g))*O,i[6]=(x+C)*O,i[7]=0,i[8]=(S+A)*p,i[9]=(x-C)*p,i[10]=(1-(m+y))*p,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Hs.set(i[0],i[1],i[2]).length();const o=Hs.set(i[4],i[5],i[6]).length(),a=Hs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Ei.copy(this);const u=1/r,f=1/o,d=1/a;return Ei.elements[0]*=u,Ei.elements[1]*=u,Ei.elements[2]*=u,Ei.elements[4]*=f,Ei.elements[5]*=f,Ei.elements[6]*=f,Ei.elements[8]*=d,Ei.elements[9]*=d,Ei.elements[10]*=d,t.setFromRotationMatrix(Ei),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=ur){const l=this.elements,u=2*r/(t-e),f=2*r/(n-i),d=(t+e)/(t-e),m=(n+i)/(n-i);let v,S;if(a===ur)v=-(o+r)/(o-r),S=-2*o*r/(o-r);else if(a===Al)v=-o/(o-r),S=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=ur){const l=this.elements,u=1/(t-e),f=1/(n-i),d=1/(o-r),m=(t+e)*u,v=(n+i)*f;let S,y;if(a===ur)S=(o+r)*d,y=-2*d;else if(a===Al)S=r*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-m,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-v,l[2]=0,l[6]=0,l[10]=y,l[14]=-S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Hs=new V,Ei=new ut,dv=new V(0,0,0),pv=new V(1,1,1),Tr=new V,Ga=new V,$n=new V,Dh=new ut,Nh=new Gr;class Gl{constructor(e=0,t=0,n=0,i=Gl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],u=i[5],f=i[9],d=i[2],m=i[6],v=i[10];switch(t){case"XYZ":this._y=Math.asin(Nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,v),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(m,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Nn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,v),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Nn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-d,v),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Nn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(m,v),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,v));break;case"XZY":this._z=Math.asin(-Nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-f,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Dh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nh.setFromEuler(this),this.setFromQuaternion(Nh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gl.DEFAULT_ORDER="XYZ";class Zu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mv=0;const Oh=new V,Gs=new Gr,nr=new ut,Va=new V,Go=new V,gv=new V,_v=new Gr,Ih=new V(1,0,0),Uh=new V(0,1,0),Fh=new V(0,0,1),vv={type:"added"},xv={type:"removed"};class Qt extends Co{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mv++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qt.DEFAULT_UP.clone();const e=new V,t=new Gl,n=new Gr,i=new V(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ut},normalMatrix:{value:new xt}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.premultiply(Gs),this}rotateX(e){return this.rotateOnAxis(Ih,e)}rotateY(e){return this.rotateOnAxis(Uh,e)}rotateZ(e){return this.rotateOnAxis(Fh,e)}translateOnAxis(e,t){return Oh.copy(e).applyQuaternion(this.quaternion),this.position.add(Oh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ih,e)}translateY(e){return this.translateOnAxis(Uh,e)}translateZ(e){return this.translateOnAxis(Fh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(nr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Va.copy(e):Va.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nr.lookAt(Go,Va,this.up):nr.lookAt(Va,Go,this.up),this.quaternion.setFromRotationMatrix(nr),i&&(nr.extractRotation(i.matrixWorld),Gs.setFromRotationMatrix(nr),this.quaternion.premultiply(Gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(vv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xv)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),nr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),nr.multiply(e.parent.matrixWorld)),e.applyMatrix4(nr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,e,gv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,_v,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const d=l[u];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),f=o(e.images),d=o(e.shapes),m=o(e.skeletons),v=o(e.animations),S=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),f.length>0&&(n.images=f),d.length>0&&(n.shapes=d),m.length>0&&(n.skeletons=m),v.length>0&&(n.animations=v),S.length>0&&(n.nodes=S)}return n.object=i,n;function o(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Qt.DEFAULT_UP=new V(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ai=new V,ir=new V,Cc=new V,rr=new V,Vs=new V,Ws=new V,Bh=new V,Rc=new V,Lc=new V,Pc=new V;let Wa=!1;class wi{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ai.subVectors(e,t),i.cross(Ai);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Ai.subVectors(i,t),ir.subVectors(n,t),Cc.subVectors(e,t);const o=Ai.dot(Ai),a=Ai.dot(ir),l=Ai.dot(Cc),u=ir.dot(ir),f=ir.dot(Cc),d=o*u-a*a;if(d===0)return r.set(0,0,0),null;const m=1/d,v=(u*l-a*f)*m,S=(o*f-a*l)*m;return r.set(1-v-S,S,v)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,rr)===null?!1:rr.x>=0&&rr.y>=0&&rr.x+rr.y<=1}static getUV(e,t,n,i,r,o,a,l){return Wa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wa=!0),this.getInterpolation(e,t,n,i,r,o,a,l)}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,rr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,rr.x),l.addScaledVector(o,rr.y),l.addScaledVector(a,rr.z),l)}static isFrontFacing(e,t,n,i){return Ai.subVectors(n,t),ir.subVectors(e,t),Ai.cross(ir).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ai.subVectors(this.c,this.b),ir.subVectors(this.a,this.b),Ai.cross(ir).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Wa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wa=!0),wi.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return wi.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Vs.subVectors(i,n),Ws.subVectors(r,n),Rc.subVectors(e,n);const l=Vs.dot(Rc),u=Ws.dot(Rc);if(l<=0&&u<=0)return t.copy(n);Lc.subVectors(e,i);const f=Vs.dot(Lc),d=Ws.dot(Lc);if(f>=0&&d<=f)return t.copy(i);const m=l*d-f*u;if(m<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(n).addScaledVector(Vs,o);Pc.subVectors(e,r);const v=Vs.dot(Pc),S=Ws.dot(Pc);if(S>=0&&v<=S)return t.copy(r);const y=v*u-l*S;if(y<=0&&u>=0&&S<=0)return a=u/(u-S),t.copy(n).addScaledVector(Ws,a);const x=f*S-v*d;if(x<=0&&d-f>=0&&v-S>=0)return Bh.subVectors(r,i),a=(d-f)/(d-f+(v-S)),t.copy(i).addScaledVector(Bh,a);const g=1/(x+y+m);return o=y*g,a=m*g,t.copy(n).addScaledVector(Vs,o).addScaledVector(Ws,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const kp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mr={h:0,s:0,l:0},Xa={h:0,s:0,l:0};function Dc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}let je=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Pt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Pt.workingColorSpace){if(e=Ku(e,1),t=Nn(t,0,1),n=Nn(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Dc(o,r,e+1/3),this.g=Dc(o,r,e),this.b=Dc(o,r,e-1/3)}return Pt.toWorkingColorSpace(this,i),this}setStyle(e,t=Yt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){const n=kp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=lo(e.r),this.g=lo(e.g),this.b=lo(e.b),this}copyLinearToSRGB(e){return this.r=yc(e.r),this.g=yc(e.g),this.b=yc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return Pt.fromWorkingColorSpace(Dn.copy(this),e),Math.round(Nn(Dn.r*255,0,255))*65536+Math.round(Nn(Dn.g*255,0,255))*256+Math.round(Nn(Dn.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.fromWorkingColorSpace(Dn.copy(this),t);const n=Dn.r,i=Dn.g,r=Dn.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,u;const f=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=f<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,t=Pt.workingColorSpace){return Pt.fromWorkingColorSpace(Dn.copy(this),t),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=Yt){Pt.fromWorkingColorSpace(Dn.copy(this),e);const t=Dn.r,n=Dn.g,i=Dn.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Mr),this.setHSL(Mr.h+e,Mr.s+t,Mr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mr),e.getHSL(Xa);const n=ta(Mr.h,Xa.h,t),i=ta(Mr.s,Xa.s,t),r=ta(Mr.l,Xa.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Dn=new je;je.NAMES=kp;let yv=0;class Xi extends Co{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yv++}),this.uuid=Ri(),this.name="",this.type="Material",this.blending=ao,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lu,this.blendDst=cu,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=bl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ao&&(n.blending=this.blending),this.side!==qi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==lu&&(n.blendSrc=this.blendSrc),this.blendDst!==cu&&(n.blendDst=this.blendDst),this.blendEquation!==ls&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bl&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Eh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Us&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Us&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Us&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Rr extends Xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_p,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const cn=new V,ja=new Ze;class Rn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=pu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=cr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ja.fromBufferAttribute(this,t),ja.applyMatrix3(e),this.setXY(t,ja.x,ja.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix3(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Gi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=kt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gi(t,this.array)),t}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gi(t,this.array)),t}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gi(t,this.array)),t}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),i=kt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),i=kt(i,this.array),r=kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pu&&(e.usage=this.usage),e}}class zp extends Rn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Hp extends Rn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class qn extends Rn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let bv=0;const ci=new ut,Nc=new Qt,Xs=new V,ei=new pr,Vo=new pr,bn=new V;class oi extends Co{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bv++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ip(e)?Hp:zp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new xt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,t,n){return ci.makeTranslation(e,t,n),this.applyMatrix4(ci),this}scale(e,t,n){return ci.makeScale(e,t,n),this.applyMatrix4(ci),this}lookAt(e){return Nc.lookAt(e),Nc.updateMatrix(),this.applyMatrix4(Nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new qn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];ei.setFromBufferAttribute(r),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ki);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(e){const n=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Vo.setFromBufferAttribute(a),this.morphTargetsRelative?(bn.addVectors(ei.min,Vo.min),ei.expandByPoint(bn),bn.addVectors(ei.max,Vo.max),ei.expandByPoint(bn)):(ei.expandByPoint(Vo.min),ei.expandByPoint(Vo.max))}ei.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)bn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(bn));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)bn.fromBufferAttribute(a,u),l&&(Xs.fromBufferAttribute(e,u),bn.add(Xs)),i=Math.max(i,n.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],f=[];for(let D=0;D<a;D++)u[D]=new V,f[D]=new V;const d=new V,m=new V,v=new V,S=new Ze,y=new Ze,x=new Ze,g=new V,C=new V;function A(D,Z,q){d.fromArray(i,D*3),m.fromArray(i,Z*3),v.fromArray(i,q*3),S.fromArray(o,D*2),y.fromArray(o,Z*2),x.fromArray(o,q*2),m.sub(d),v.sub(d),y.sub(S),x.sub(S);const $=1/(y.x*x.y-x.x*y.y);isFinite($)&&(g.copy(m).multiplyScalar(x.y).addScaledVector(v,-y.y).multiplyScalar($),C.copy(v).multiplyScalar(y.x).addScaledVector(m,-x.x).multiplyScalar($),u[D].add(g),u[Z].add(g),u[q].add(g),f[D].add(C),f[Z].add(C),f[q].add(C))}let R=this.groups;R.length===0&&(R=[{start:0,count:n.length}]);for(let D=0,Z=R.length;D<Z;++D){const q=R[D],$=q.start,k=q.count;for(let X=$,Y=$+k;X<Y;X+=3)A(n[X+0],n[X+1],n[X+2])}const N=new V,O=new V,p=new V,G=new V;function E(D){p.fromArray(r,D*3),G.copy(p);const Z=u[D];N.copy(Z),N.sub(p.multiplyScalar(p.dot(Z))).normalize(),O.crossVectors(G,Z);const $=O.dot(f[D])<0?-1:1;l[D*4]=N.x,l[D*4+1]=N.y,l[D*4+2]=N.z,l[D*4+3]=$}for(let D=0,Z=R.length;D<Z;++D){const q=R[D],$=q.start,k=q.count;for(let X=$,Y=$+k;X<Y;X+=3)E(n[X+0]),E(n[X+1]),E(n[X+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Rn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,v=n.count;m<v;m++)n.setXYZ(m,0,0,0);const i=new V,r=new V,o=new V,a=new V,l=new V,u=new V,f=new V,d=new V;if(e)for(let m=0,v=e.count;m<v;m+=3){const S=e.getX(m+0),y=e.getX(m+1),x=e.getX(m+2);i.fromBufferAttribute(t,S),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,x),f.subVectors(o,r),d.subVectors(i,r),f.cross(d),a.fromBufferAttribute(n,S),l.fromBufferAttribute(n,y),u.fromBufferAttribute(n,x),a.add(f),l.add(f),u.add(f),n.setXYZ(S,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(x,u.x,u.y,u.z)}else for(let m=0,v=t.count;m<v;m+=3)i.fromBufferAttribute(t,m+0),r.fromBufferAttribute(t,m+1),o.fromBufferAttribute(t,m+2),f.subVectors(o,r),d.subVectors(i,r),f.cross(d),n.setXYZ(m+0,f.x,f.y,f.z),n.setXYZ(m+1,f.x,f.y,f.z),n.setXYZ(m+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bn.fromBufferAttribute(e,t),bn.normalize(),e.setXYZ(t,bn.x,bn.y,bn.z)}toNonIndexed(){function e(a,l){const u=a.array,f=a.itemSize,d=a.normalized,m=new u.constructor(l.length*f);let v=0,S=0;for(let y=0,x=l.length;y<x;y++){a.isInterleavedBufferAttribute?v=l[y]*a.data.stride+a.offset:v=l[y]*f;for(let g=0;g<f;g++)m[S++]=u[v++]}return new Rn(m,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new oi,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],u=e(l,n);t.setAttribute(a,u)}const r=this.morphAttributes;for(const a in r){const l=[],u=r[a];for(let f=0,d=u.length;f<d;f++){const m=u[f],v=e(m,n);l.push(v)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const u=n[l];e.data.attributes[l]=u.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let d=0,m=u.length;d<m;d++){const v=u[d];f.push(v.toJSON(e.data))}f.length>0&&(i[l]=f,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const u in i){const f=i[u];this.setAttribute(u,f.clone(t))}const r=e.morphAttributes;for(const u in r){const f=[],d=r[u];for(let m=0,v=d.length;m<v;m++)f.push(d[m].clone(t));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kh=new ut,ts=new ya,qa=new Ki,zh=new V,js=new V,qs=new V,Ys=new V,Oc=new V,Ya=new V,Ka=new Ze,Za=new Ze,Ja=new Ze,Hh=new V,Gh=new V,Vh=new V,Qa=new V,$a=new V;class Vn extends Qt{constructor(e=new oi,t=new Rr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Ya.set(0,0,0);for(let l=0,u=r.length;l<u;l++){const f=a[l],d=r[l];f!==0&&(Oc.fromBufferAttribute(d,e),o?Ya.addScaledVector(Oc,f):Ya.addScaledVector(Oc.sub(t),f))}t.add(Ya)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qa.copy(n.boundingSphere),qa.applyMatrix4(r),ts.copy(e.ray).recast(e.near),!(qa.containsPoint(ts.origin)===!1&&(ts.intersectSphere(qa,zh)===null||ts.origin.distanceToSquared(zh)>(e.far-e.near)**2))&&(kh.copy(r).invert(),ts.copy(e.ray).applyMatrix4(kh),!(n.boundingBox!==null&&ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ts)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,u=r.attributes.uv,f=r.attributes.uv1,d=r.attributes.normal,m=r.groups,v=r.drawRange;if(a!==null)if(Array.isArray(o))for(let S=0,y=m.length;S<y;S++){const x=m[S],g=o[x.materialIndex],C=Math.max(x.start,v.start),A=Math.min(a.count,Math.min(x.start+x.count,v.start+v.count));for(let R=C,N=A;R<N;R+=3){const O=a.getX(R),p=a.getX(R+1),G=a.getX(R+2);i=el(this,g,e,n,u,f,d,O,p,G),i&&(i.faceIndex=Math.floor(R/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const S=Math.max(0,v.start),y=Math.min(a.count,v.start+v.count);for(let x=S,g=y;x<g;x+=3){const C=a.getX(x),A=a.getX(x+1),R=a.getX(x+2);i=el(this,o,e,n,u,f,d,C,A,R),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let S=0,y=m.length;S<y;S++){const x=m[S],g=o[x.materialIndex],C=Math.max(x.start,v.start),A=Math.min(l.count,Math.min(x.start+x.count,v.start+v.count));for(let R=C,N=A;R<N;R+=3){const O=R,p=R+1,G=R+2;i=el(this,g,e,n,u,f,d,O,p,G),i&&(i.faceIndex=Math.floor(R/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const S=Math.max(0,v.start),y=Math.min(l.count,v.start+v.count);for(let x=S,g=y;x<g;x+=3){const C=x,A=x+1,R=x+2;i=el(this,o,e,n,u,f,d,C,A,R),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}}}function Sv(s,e,t,n,i,r,o,a){let l;if(e.side===Wn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===qi,a),l===null)return null;$a.copy(a),$a.applyMatrix4(s.matrixWorld);const u=t.ray.origin.distanceTo($a);return u<t.near||u>t.far?null:{distance:u,point:$a.clone(),object:s}}function el(s,e,t,n,i,r,o,a,l,u){s.getVertexPosition(a,js),s.getVertexPosition(l,qs),s.getVertexPosition(u,Ys);const f=Sv(s,e,t,n,js,qs,Ys,Qa);if(f){i&&(Ka.fromBufferAttribute(i,a),Za.fromBufferAttribute(i,l),Ja.fromBufferAttribute(i,u),f.uv=wi.getInterpolation(Qa,js,qs,Ys,Ka,Za,Ja,new Ze)),r&&(Ka.fromBufferAttribute(r,a),Za.fromBufferAttribute(r,l),Ja.fromBufferAttribute(r,u),f.uv1=wi.getInterpolation(Qa,js,qs,Ys,Ka,Za,Ja,new Ze),f.uv2=f.uv1),o&&(Hh.fromBufferAttribute(o,a),Gh.fromBufferAttribute(o,l),Vh.fromBufferAttribute(o,u),f.normal=wi.getInterpolation(Qa,js,qs,Ys,Hh,Gh,Vh,new V),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new V,materialIndex:0};wi.getNormal(js,qs,Ys,d.normal),f.face=d}return f}class ba extends oi{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],u=[],f=[],d=[];let m=0,v=0;S("z","y","x",-1,-1,n,t,e,o,r,0),S("z","y","x",1,-1,n,t,-e,o,r,1),S("x","z","y",1,1,e,n,t,i,o,2),S("x","z","y",1,-1,e,n,-t,i,o,3),S("x","y","z",1,-1,e,t,n,i,r,4),S("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new qn(u,3)),this.setAttribute("normal",new qn(f,3)),this.setAttribute("uv",new qn(d,2));function S(y,x,g,C,A,R,N,O,p,G,E){const D=R/p,Z=N/G,q=R/2,$=N/2,k=O/2,X=p+1,Y=G+1;let le=0,ce=0;const fe=new V;for(let me=0;me<Y;me++){const Te=me*Z-$;for(let Me=0;Me<X;Me++){const ae=Me*D-q;fe[y]=ae*C,fe[x]=Te*A,fe[g]=k,u.push(fe.x,fe.y,fe.z),fe[y]=0,fe[x]=0,fe[g]=O>0?1:-1,f.push(fe.x,fe.y,fe.z),d.push(Me/p),d.push(1-me/G),le+=1}}for(let me=0;me<G;me++)for(let Te=0;Te<p;Te++){const Me=m+Te+X*me,ae=m+Te+X*(me+1),_e=m+(Te+1)+X*(me+1),Le=m+(Te+1)+X*me;l.push(Me,ae,Le),l.push(ae,_e,Le),ce+=6}a.addGroup(v,ce,E),v+=ce,m+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ba(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xo(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function zn(s){const e={};for(let t=0;t<s.length;t++){const n=xo(s[t]);for(const i in n)e[i]=n[i]}return e}function Tv(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Gp(s){return s.getRenderTarget()===null?s.outputColorSpace:Pt.workingColorSpace}const Li={clone:xo,merge:zn};var Mv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ev=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dn extends Xi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mv,this.fragmentShader=Ev,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xo(e.uniforms),this.uniformsGroups=Tv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Vp extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=ur}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class On extends Vp{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ea*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vo*2*Math.atan(Math.tan(ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ea*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/u,i*=o.width/l,n*=o.height/u}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ks=-90,Zs=1;class Av extends Qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new On(Ks,Zs,e,t);i.layers=this.layers,this.add(i);const r=new On(Ks,Zs,e,t);r.layers=this.layers,this.add(r);const o=new On(Ks,Zs,e,t);o.layers=this.layers,this.add(o);const a=new On(Ks,Zs,e,t);a.layers=this.layers,this.add(a);const l=new On(Ks,Zs,e,t);l.layers=this.layers,this.add(l);const u=new On(Ks,Zs,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const u of t)this.remove(u);if(e===ur)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Al)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,u,f]=this.children,d=e.getRenderTarget(),m=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,u),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,i),e.render(t,f),e.setRenderTarget(d,m,v),e.xr.enabled=S,n.texture.needsPMREMUpdate=!0}}class Wp extends mn{constructor(e,t,n,i,r,o,a,l,u,f){e=e!==void 0?e:[],t=t!==void 0?t:po,super(e,t,n,i,r,o,a,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wv extends jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(na("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ps?Yt:gi),this.texture=new Wp(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Hn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ba(5,5,5),r=new dn({name:"CubemapFromEquirect",uniforms:xo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wn,blending:fr});r.uniforms.tEquirect.value=t;const o=new Vn(i,r),a=t.minFilter;return t.minFilter===ys&&(t.minFilter=Hn),new Av(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Ic=new V,Cv=new V,Rv=new xt;class Ar{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ic.subVectors(n,t).cross(Cv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ic),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Rv.getNormalMatrix(e),i=this.coplanarPoint(Ic).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ns=new Ki,tl=new V;class Ju{constructor(e=new Ar,t=new Ar,n=new Ar,i=new Ar,r=new Ar,o=new Ar){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ur){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],u=i[4],f=i[5],d=i[6],m=i[7],v=i[8],S=i[9],y=i[10],x=i[11],g=i[12],C=i[13],A=i[14],R=i[15];if(n[0].setComponents(l-r,m-u,x-v,R-g).normalize(),n[1].setComponents(l+r,m+u,x+v,R+g).normalize(),n[2].setComponents(l+o,m+f,x+S,R+C).normalize(),n[3].setComponents(l-o,m-f,x-S,R-C).normalize(),n[4].setComponents(l-a,m-d,x-y,R-A).normalize(),t===ur)n[5].setComponents(l+a,m+d,x+y,R+A).normalize();else if(t===Al)n[5].setComponents(a,d,y,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(e){return ns.center.set(0,0,0),ns.radius=.7071067811865476,ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(tl.x=i.normal.x>0?e.max.x:e.min.x,tl.y=i.normal.y>0?e.max.y:e.min.y,tl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(tl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xp(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Lv(s,e){const t=e.isWebGL2,n=new WeakMap;function i(u,f){const d=u.array,m=u.usage,v=d.byteLength,S=s.createBuffer();s.bindBuffer(f,S),s.bufferData(f,d,m),u.onUploadCallback();let y;if(d instanceof Float32Array)y=s.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)y=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=s.SHORT;else if(d instanceof Uint32Array)y=s.UNSIGNED_INT;else if(d instanceof Int32Array)y=s.INT;else if(d instanceof Int8Array)y=s.BYTE;else if(d instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:S,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:v}}function r(u,f,d){const m=f.array,v=f._updateRange,S=f.updateRanges;if(s.bindBuffer(d,u),v.count===-1&&S.length===0&&s.bufferSubData(d,0,m),S.length!==0){for(let y=0,x=S.length;y<x;y++){const g=S[y];t?s.bufferSubData(d,g.start*m.BYTES_PER_ELEMENT,m,g.start,g.count):s.bufferSubData(d,g.start*m.BYTES_PER_ELEMENT,m.subarray(g.start,g.start+g.count))}f.clearUpdateRanges()}v.count!==-1&&(t?s.bufferSubData(d,v.offset*m.BYTES_PER_ELEMENT,m,v.offset,v.count):s.bufferSubData(d,v.offset*m.BYTES_PER_ELEMENT,m.subarray(v.offset,v.offset+v.count)),v.count=-1),f.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=n.get(u);f&&(s.deleteBuffer(f.buffer),n.delete(u))}function l(u,f){if(u.isGLBufferAttribute){const m=n.get(u);(!m||m.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=n.get(u);if(d===void 0)n.set(u,i(u,f));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,u,f),d.version=u.version}}return{get:o,remove:a,update:l}}class Vl extends oi{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),u=a+1,f=l+1,d=e/a,m=t/l,v=[],S=[],y=[],x=[];for(let g=0;g<f;g++){const C=g*m-o;for(let A=0;A<u;A++){const R=A*d-r;S.push(R,-C,0),y.push(0,0,1),x.push(A/a),x.push(1-g/l)}}for(let g=0;g<l;g++)for(let C=0;C<a;C++){const A=C+u*g,R=C+u*(g+1),N=C+1+u*(g+1),O=C+1+u*g;v.push(A,R,O),v.push(R,N,O)}this.setIndex(v),this.setAttribute("position",new qn(S,3)),this.setAttribute("normal",new qn(y,3)),this.setAttribute("uv",new qn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vl(e.width,e.height,e.widthSegments,e.heightSegments)}}var Pv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Nv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ov=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Iv=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Uv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Bv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kv=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Hv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Wv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Xv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,qv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$v=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,e0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,t0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,n0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,i0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,r0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,s0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,o0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,a0="gl_FragColor = linearToOutputTexel( gl_FragColor );",l0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,c0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,u0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,f0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,h0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,d0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,p0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,m0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,g0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,v0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,x0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,y0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,b0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,S0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,T0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,M0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,E0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,A0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,w0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,C0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,R0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,L0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,P0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,D0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,N0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,O0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,I0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,F0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,B0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,k0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,z0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,H0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,G0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,V0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,W0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,X0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,j0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,q0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Y0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,K0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Z0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ex=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ix=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ox=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ax=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ux=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,dx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,px=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_x=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ex=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Rx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Px=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ix=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ux=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Fx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Bx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Xx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Kx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Jx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Qx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$x=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ey=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ty=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ny=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ry=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ay=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ly=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vt={alphahash_fragment:Pv,alphahash_pars_fragment:Dv,alphamap_fragment:Nv,alphamap_pars_fragment:Ov,alphatest_fragment:Iv,alphatest_pars_fragment:Uv,aomap_fragment:Fv,aomap_pars_fragment:Bv,batching_pars_vertex:kv,batching_vertex:zv,begin_vertex:Hv,beginnormal_vertex:Gv,bsdfs:Vv,iridescence_fragment:Wv,bumpmap_pars_fragment:Xv,clipping_planes_fragment:jv,clipping_planes_pars_fragment:qv,clipping_planes_pars_vertex:Yv,clipping_planes_vertex:Kv,color_fragment:Zv,color_pars_fragment:Jv,color_pars_vertex:Qv,color_vertex:$v,common:e0,cube_uv_reflection_fragment:t0,defaultnormal_vertex:n0,displacementmap_pars_vertex:i0,displacementmap_vertex:r0,emissivemap_fragment:s0,emissivemap_pars_fragment:o0,colorspace_fragment:a0,colorspace_pars_fragment:l0,envmap_fragment:c0,envmap_common_pars_fragment:u0,envmap_pars_fragment:f0,envmap_pars_vertex:h0,envmap_physical_pars_fragment:M0,envmap_vertex:d0,fog_vertex:p0,fog_pars_vertex:m0,fog_fragment:g0,fog_pars_fragment:_0,gradientmap_pars_fragment:v0,lightmap_fragment:x0,lightmap_pars_fragment:y0,lights_lambert_fragment:b0,lights_lambert_pars_fragment:S0,lights_pars_begin:T0,lights_toon_fragment:E0,lights_toon_pars_fragment:A0,lights_phong_fragment:w0,lights_phong_pars_fragment:C0,lights_physical_fragment:R0,lights_physical_pars_fragment:L0,lights_fragment_begin:P0,lights_fragment_maps:D0,lights_fragment_end:N0,logdepthbuf_fragment:O0,logdepthbuf_pars_fragment:I0,logdepthbuf_pars_vertex:U0,logdepthbuf_vertex:F0,map_fragment:B0,map_pars_fragment:k0,map_particle_fragment:z0,map_particle_pars_fragment:H0,metalnessmap_fragment:G0,metalnessmap_pars_fragment:V0,morphcolor_vertex:W0,morphnormal_vertex:X0,morphtarget_pars_vertex:j0,morphtarget_vertex:q0,normal_fragment_begin:Y0,normal_fragment_maps:K0,normal_pars_fragment:Z0,normal_pars_vertex:J0,normal_vertex:Q0,normalmap_pars_fragment:$0,clearcoat_normal_fragment_begin:ex,clearcoat_normal_fragment_maps:tx,clearcoat_pars_fragment:nx,iridescence_pars_fragment:ix,opaque_fragment:rx,packing:sx,premultiplied_alpha_fragment:ox,project_vertex:ax,dithering_fragment:lx,dithering_pars_fragment:cx,roughnessmap_fragment:ux,roughnessmap_pars_fragment:fx,shadowmap_pars_fragment:hx,shadowmap_pars_vertex:dx,shadowmap_vertex:px,shadowmask_pars_fragment:mx,skinbase_vertex:gx,skinning_pars_vertex:_x,skinning_vertex:vx,skinnormal_vertex:xx,specularmap_fragment:yx,specularmap_pars_fragment:bx,tonemapping_fragment:Sx,tonemapping_pars_fragment:Tx,transmission_fragment:Mx,transmission_pars_fragment:Ex,uv_pars_fragment:Ax,uv_pars_vertex:wx,uv_vertex:Cx,worldpos_vertex:Rx,background_vert:Lx,background_frag:Px,backgroundCube_vert:Dx,backgroundCube_frag:Nx,cube_vert:Ox,cube_frag:Ix,depth_vert:Ux,depth_frag:Fx,distanceRGBA_vert:Bx,distanceRGBA_frag:kx,equirect_vert:zx,equirect_frag:Hx,linedashed_vert:Gx,linedashed_frag:Vx,meshbasic_vert:Wx,meshbasic_frag:Xx,meshlambert_vert:jx,meshlambert_frag:qx,meshmatcap_vert:Yx,meshmatcap_frag:Kx,meshnormal_vert:Zx,meshnormal_frag:Jx,meshphong_vert:Qx,meshphong_frag:$x,meshphysical_vert:ey,meshphysical_frag:ty,meshtoon_vert:ny,meshtoon_frag:iy,points_vert:ry,points_frag:sy,shadow_vert:oy,shadow_frag:ay,sprite_vert:ly,sprite_frag:cy},Ce={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},zi={basic:{uniforms:zn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:zn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new je(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:zn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:zn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:zn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new je(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:zn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:zn([Ce.points,Ce.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:zn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:zn([Ce.common,Ce.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:zn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:zn([Ce.sprite,Ce.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distanceRGBA:{uniforms:zn([Ce.common,Ce.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distanceRGBA_vert,fragmentShader:vt.distanceRGBA_frag},shadow:{uniforms:zn([Ce.lights,Ce.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};zi.physical={uniforms:zn([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const nl={r:0,b:0,g:0};function uy(s,e,t,n,i,r,o){const a=new je(0);let l=r===!0?0:1,u,f,d=null,m=0,v=null;function S(x,g){let C=!1,A=g.isScene===!0?g.background:null;A&&A.isTexture&&(A=(g.backgroundBlurriness>0?t:e).get(A)),A===null?y(a,l):A&&A.isColor&&(y(A,1),C=!0);const R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||C)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),A&&(A.isCubeTexture||A.mapping===zl)?(f===void 0&&(f=new Vn(new ba(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:xo(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(N,O,p){this.matrixWorld.copyPosition(p.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),f.material.uniforms.envMap.value=A,f.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,f.material.toneMapped=Pt.getTransfer(A.colorSpace)!==Wt,(d!==A||m!==A.version||v!==s.toneMapping)&&(f.material.needsUpdate=!0,d=A,m=A.version,v=s.toneMapping),f.layers.enableAll(),x.unshift(f,f.geometry,f.material,0,0,null)):A&&A.isTexture&&(u===void 0&&(u=new Vn(new Vl(2,2),new dn({name:"BackgroundMaterial",uniforms:xo(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=A,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=Pt.getTransfer(A.colorSpace)!==Wt,A.matrixAutoUpdate===!0&&A.updateMatrix(),u.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||m!==A.version||v!==s.toneMapping)&&(u.material.needsUpdate=!0,d=A,m=A.version,v=s.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null))}function y(x,g){x.getRGB(nl,Gp(s)),n.buffers.color.setClear(nl.r,nl.g,nl.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(x,g=1){a.set(x),l=g,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,y(a,l)},render:S}}function fy(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=x(null);let u=l,f=!1;function d(k,X,Y,le,ce){let fe=!1;if(o){const me=y(le,Y,X);u!==me&&(u=me,v(u.object)),fe=g(k,le,Y,ce),fe&&C(k,le,Y,ce)}else{const me=X.wireframe===!0;(u.geometry!==le.id||u.program!==Y.id||u.wireframe!==me)&&(u.geometry=le.id,u.program=Y.id,u.wireframe=me,fe=!0)}ce!==null&&t.update(ce,s.ELEMENT_ARRAY_BUFFER),(fe||f)&&(f=!1,G(k,X,Y,le),ce!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(ce).buffer))}function m(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function v(k){return n.isWebGL2?s.bindVertexArray(k):r.bindVertexArrayOES(k)}function S(k){return n.isWebGL2?s.deleteVertexArray(k):r.deleteVertexArrayOES(k)}function y(k,X,Y){const le=Y.wireframe===!0;let ce=a[k.id];ce===void 0&&(ce={},a[k.id]=ce);let fe=ce[X.id];fe===void 0&&(fe={},ce[X.id]=fe);let me=fe[le];return me===void 0&&(me=x(m()),fe[le]=me),me}function x(k){const X=[],Y=[],le=[];for(let ce=0;ce<i;ce++)X[ce]=0,Y[ce]=0,le[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:Y,attributeDivisors:le,object:k,attributes:{},index:null}}function g(k,X,Y,le){const ce=u.attributes,fe=X.attributes;let me=0;const Te=Y.getAttributes();for(const Me in Te)if(Te[Me].location>=0){const _e=ce[Me];let Le=fe[Me];if(Le===void 0&&(Me==="instanceMatrix"&&k.instanceMatrix&&(Le=k.instanceMatrix),Me==="instanceColor"&&k.instanceColor&&(Le=k.instanceColor)),_e===void 0||_e.attribute!==Le||Le&&_e.data!==Le.data)return!0;me++}return u.attributesNum!==me||u.index!==le}function C(k,X,Y,le){const ce={},fe=X.attributes;let me=0;const Te=Y.getAttributes();for(const Me in Te)if(Te[Me].location>=0){let _e=fe[Me];_e===void 0&&(Me==="instanceMatrix"&&k.instanceMatrix&&(_e=k.instanceMatrix),Me==="instanceColor"&&k.instanceColor&&(_e=k.instanceColor));const Le={};Le.attribute=_e,_e&&_e.data&&(Le.data=_e.data),ce[Me]=Le,me++}u.attributes=ce,u.attributesNum=me,u.index=le}function A(){const k=u.newAttributes;for(let X=0,Y=k.length;X<Y;X++)k[X]=0}function R(k){N(k,0)}function N(k,X){const Y=u.newAttributes,le=u.enabledAttributes,ce=u.attributeDivisors;Y[k]=1,le[k]===0&&(s.enableVertexAttribArray(k),le[k]=1),ce[k]!==X&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,X),ce[k]=X)}function O(){const k=u.newAttributes,X=u.enabledAttributes;for(let Y=0,le=X.length;Y<le;Y++)X[Y]!==k[Y]&&(s.disableVertexAttribArray(Y),X[Y]=0)}function p(k,X,Y,le,ce,fe,me){me===!0?s.vertexAttribIPointer(k,X,Y,ce,fe):s.vertexAttribPointer(k,X,Y,le,ce,fe)}function G(k,X,Y,le){if(n.isWebGL2===!1&&(k.isInstancedMesh||le.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;A();const ce=le.attributes,fe=Y.getAttributes(),me=X.defaultAttributeValues;for(const Te in fe){const Me=fe[Te];if(Me.location>=0){let ae=ce[Te];if(ae===void 0&&(Te==="instanceMatrix"&&k.instanceMatrix&&(ae=k.instanceMatrix),Te==="instanceColor"&&k.instanceColor&&(ae=k.instanceColor)),ae!==void 0){const _e=ae.normalized,Le=ae.itemSize,We=t.get(ae);if(We===void 0)continue;const Ve=We.buffer,at=We.type,lt=We.bytesPerElement,He=n.isWebGL2===!0&&(at===s.INT||at===s.UNSIGNED_INT||ae.gpuType===Mp);if(ae.isInterleavedBufferAttribute){const Mt=ae.data,Q=Mt.stride,on=ae.offset;if(Mt.isInstancedInterleavedBuffer){for(let Ye=0;Ye<Me.locationSize;Ye++)N(Me.location+Ye,Mt.meshPerAttribute);k.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let Ye=0;Ye<Me.locationSize;Ye++)R(Me.location+Ye);s.bindBuffer(s.ARRAY_BUFFER,Ve);for(let Ye=0;Ye<Me.locationSize;Ye++)p(Me.location+Ye,Le/Me.locationSize,at,_e,Q*lt,(on+Le/Me.locationSize*Ye)*lt,He)}else{if(ae.isInstancedBufferAttribute){for(let Mt=0;Mt<Me.locationSize;Mt++)N(Me.location+Mt,ae.meshPerAttribute);k.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Mt=0;Mt<Me.locationSize;Mt++)R(Me.location+Mt);s.bindBuffer(s.ARRAY_BUFFER,Ve);for(let Mt=0;Mt<Me.locationSize;Mt++)p(Me.location+Mt,Le/Me.locationSize,at,_e,Le*lt,Le/Me.locationSize*Mt*lt,He)}}else if(me!==void 0){const _e=me[Te];if(_e!==void 0)switch(_e.length){case 2:s.vertexAttrib2fv(Me.location,_e);break;case 3:s.vertexAttrib3fv(Me.location,_e);break;case 4:s.vertexAttrib4fv(Me.location,_e);break;default:s.vertexAttrib1fv(Me.location,_e)}}}}O()}function E(){q();for(const k in a){const X=a[k];for(const Y in X){const le=X[Y];for(const ce in le)S(le[ce].object),delete le[ce];delete X[Y]}delete a[k]}}function D(k){if(a[k.id]===void 0)return;const X=a[k.id];for(const Y in X){const le=X[Y];for(const ce in le)S(le[ce].object),delete le[ce];delete X[Y]}delete a[k.id]}function Z(k){for(const X in a){const Y=a[X];if(Y[k.id]===void 0)continue;const le=Y[k.id];for(const ce in le)S(le[ce].object),delete le[ce];delete Y[k.id]}}function q(){$(),f=!0,u!==l&&(u=l,v(u.object))}function $(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:q,resetDefaultState:$,dispose:E,releaseStatesOfGeometry:D,releaseStatesOfProgram:Z,initAttributes:A,enableAttribute:R,disableUnusedAttributes:O}}function hy(s,e,t,n){const i=n.isWebGL2;let r;function o(f){r=f}function a(f,d){s.drawArrays(r,f,d),t.update(d,r,1)}function l(f,d,m){if(m===0)return;let v,S;if(i)v=s,S="drawArraysInstanced";else if(v=e.get("ANGLE_instanced_arrays"),S="drawArraysInstancedANGLE",v===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[S](r,f,d,m),t.update(d,r,m)}function u(f,d,m){if(m===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let S=0;S<m;S++)this.render(f[S],d[S]);else{v.multiDrawArraysWEBGL(r,f,0,d,0,m);let S=0;for(let y=0;y<m;y++)S+=d[y];t.update(S,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function dy(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const p=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(p.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(p){if(p==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";p="mediump"}return p==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),f=t.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),g=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,R=o||e.has("OES_texture_float"),N=A&&R,O=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:x,maxVaryings:g,maxFragmentUniforms:C,vertexTextures:A,floatFragmentTextures:R,floatVertexTextures:N,maxSamples:O}}function py(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Ar,a=new xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,m){const v=d.length!==0||m||n!==0||i;return i=m,n=d.length,v},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,m){t=f(d,m,0)},this.setState=function(d,m,v){const S=d.clippingPlanes,y=d.clipIntersection,x=d.clipShadows,g=s.get(d);if(!i||S===null||S.length===0||r&&!x)r?f(null):u();else{const C=r?0:n,A=C*4;let R=g.clippingState||null;l.value=R,R=f(S,m,A,v);for(let N=0;N!==A;++N)R[N]=t[N];g.clippingState=R,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=C}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(d,m,v,S){const y=d!==null?d.length:0;let x=null;if(y!==0){if(x=l.value,S!==!0||x===null){const g=v+y*4,C=m.matrixWorldInverse;a.getNormalMatrix(C),(x===null||x.length<g)&&(x=new Float32Array(g));for(let A=0,R=v;A!==y;++A,R+=4)o.copy(d[A]).applyMatrix4(C,a),o.normal.toArray(x,R),x[R+3]=o.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,x}}function my(s){let e=new WeakMap;function t(o,a){return a===uu?o.mapping=po:a===fu&&(o.mapping=mo),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===uu||a===fu)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new wv(l.height/2);return u.fromEquirectangularTexture(s,o),e.set(o,u),o.addEventListener("dispose",i),t(u.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Wl extends Vp{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const no=4,Wh=[.125,.215,.35,.446,.526,.582],cs=20,Uc=new Wl,Xh=new je;let Fc=null,Bc=0,kc=0;const os=(1+Math.sqrt(5))/2,Js=1/os,jh=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,os,Js),new V(0,os,-Js),new V(Js,0,os),new V(-Js,0,os),new V(os,Js,0),new V(-os,Js,0)];class qh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Fc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),kc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fc,Bc,kc),e.scissorTest=!1,il(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===po||e.mapping===mo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),kc=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:Ci,format:mi,colorSpace:gn,depthBuffer:!1},i=Yh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gy(r)),this._blurMaterial=_y(r,e,t)}return i}_compileMaterial(e){const t=new Vn(this._lodPlanes[0],e);this._renderer.compile(t,Uc)}_sceneToCubeUV(e,t,n,i){const a=new On(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,m=f.toneMapping;f.getClearColor(Xh),f.toneMapping=Or,f.autoClear=!1;const v=new Rr({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),S=new Vn(new ba,v);let y=!1;const x=e.background;x?x.isColor&&(v.color.copy(x),e.background=null,y=!0):(v.color.copy(Xh),y=!0);for(let g=0;g<6;g++){const C=g%3;C===0?(a.up.set(0,l[g],0),a.lookAt(u[g],0,0)):C===1?(a.up.set(0,0,l[g]),a.lookAt(0,u[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,u[g]));const A=this._cubeSize;il(i,C*A,g>2?A:0,A,A),f.setRenderTarget(i),y&&f.render(S,a),f.render(e,a)}S.geometry.dispose(),S.material.dispose(),f.toneMapping=m,f.autoClear=d,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===po||e.mapping===mo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kh());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Vn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;il(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Uc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=jh[(i-1)%jh.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new Vn(this._lodPlanes[i],u),m=u.uniforms,v=this._sizeLods[n]-1,S=isFinite(r)?Math.PI/(2*v):2*Math.PI/(2*cs-1),y=r/S,x=isFinite(r)?1+Math.floor(f*y):cs;x>cs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${cs}`);const g=[];let C=0;for(let p=0;p<cs;++p){const G=p/y,E=Math.exp(-G*G/2);g.push(E),p===0?C+=E:p<x&&(C+=2*E)}for(let p=0;p<g.length;p++)g[p]=g[p]/C;m.envMap.value=e.texture,m.samples.value=x,m.weights.value=g,m.latitudinal.value=o==="latitudinal",a&&(m.poleAxis.value=a);const{_lodMax:A}=this;m.dTheta.value=S,m.mipInt.value=A-n;const R=this._sizeLods[i],N=3*R*(i>A-no?i-A+no:0),O=4*(this._cubeSize-R);il(t,N,O,3*R,2*R),l.setRenderTarget(t),l.render(d,Uc)}}function gy(s){const e=[],t=[],n=[];let i=s;const r=s-no+1+Wh.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-no?l=Wh[o-s+no-1]:o===0&&(l=0),n.push(l);const u=1/(a-2),f=-u,d=1+u,m=[f,f,d,f,d,d,f,f,d,d,f,d],v=6,S=6,y=3,x=2,g=1,C=new Float32Array(y*S*v),A=new Float32Array(x*S*v),R=new Float32Array(g*S*v);for(let O=0;O<v;O++){const p=O%3*2/3-1,G=O>2?0:-1,E=[p,G,0,p+2/3,G,0,p+2/3,G+1,0,p,G,0,p+2/3,G+1,0,p,G+1,0];C.set(E,y*S*O),A.set(m,x*S*O);const D=[O,O,O,O,O,O];R.set(D,g*S*O)}const N=new oi;N.setAttribute("position",new Rn(C,y)),N.setAttribute("uv",new Rn(A,x)),N.setAttribute("faceIndex",new Rn(R,g)),e.push(N),i>no&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Yh(s,e,t){const n=new jn(s,e,t);return n.texture.mapping=zl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function il(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function _y(s,e,t){const n=new Float32Array(cs),i=new V(0,1,0);return new dn({name:"SphericalGaussianBlur",defines:{n:cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function Kh(){return new dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function Zh(){return new dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function Qu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function vy(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,u=l===uu||l===fu,f=l===po||l===mo;if(u||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new qh(s)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||f&&d&&i(d)){t===null&&(t=new qh(s));const m=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,m),a.addEventListener("dispose",r),m.texture}else return null}}}return a}function i(a){let l=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&l++;return l===u}function r(a){const l=a.target;l.removeEventListener("dispose",r);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function xy(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function yy(s,e,t,n){const i={},r=new WeakMap;function o(d){const m=d.target;m.index!==null&&e.remove(m.index);for(const S in m.attributes)e.remove(m.attributes[S]);for(const S in m.morphAttributes){const y=m.morphAttributes[S];for(let x=0,g=y.length;x<g;x++)e.remove(y[x])}m.removeEventListener("dispose",o),delete i[m.id];const v=r.get(m);v&&(e.remove(v),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function a(d,m){return i[m.id]===!0||(m.addEventListener("dispose",o),i[m.id]=!0,t.memory.geometries++),m}function l(d){const m=d.attributes;for(const S in m)e.update(m[S],s.ARRAY_BUFFER);const v=d.morphAttributes;for(const S in v){const y=v[S];for(let x=0,g=y.length;x<g;x++)e.update(y[x],s.ARRAY_BUFFER)}}function u(d){const m=[],v=d.index,S=d.attributes.position;let y=0;if(v!==null){const C=v.array;y=v.version;for(let A=0,R=C.length;A<R;A+=3){const N=C[A+0],O=C[A+1],p=C[A+2];m.push(N,O,O,p,p,N)}}else if(S!==void 0){const C=S.array;y=S.version;for(let A=0,R=C.length/3-1;A<R;A+=3){const N=A+0,O=A+1,p=A+2;m.push(N,O,O,p,p,N)}}else return;const x=new(Ip(m)?Hp:zp)(m,1);x.version=y;const g=r.get(d);g&&e.remove(g),r.set(d,x)}function f(d){const m=r.get(d);if(m){const v=d.index;v!==null&&m.version<v.version&&u(d)}else u(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function by(s,e,t,n){const i=n.isWebGL2;let r;function o(v){r=v}let a,l;function u(v){a=v.type,l=v.bytesPerElement}function f(v,S){s.drawElements(r,S,a,v*l),t.update(S,r,1)}function d(v,S,y){if(y===0)return;let x,g;if(i)x=s,g="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[g](r,S,a,v*l,y),t.update(S,r,y)}function m(v,S,y){if(y===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let g=0;g<y;g++)this.render(v[g]/l,S[g]);else{x.multiDrawElementsWEBGL(r,S,0,a,v,0,y);let g=0;for(let C=0;C<y;C++)g+=S[C];t.update(g,r,1)}}this.setMode=o,this.setIndex=u,this.render=f,this.renderInstances=d,this.renderMultiDraw=m}function Sy(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Ty(s,e){return s[0]-e[0]}function My(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Ey(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new Ft,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,f,d){const m=u.morphTargetInfluences;if(e.isWebGL2===!0){const S=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,y=S!==void 0?S.length:0;let x=r.get(f);if(x===void 0||x.count!==y){let X=function(){$.dispose(),r.delete(f),f.removeEventListener("dispose",X)};var v=X;x!==void 0&&x.texture.dispose();const A=f.morphAttributes.position!==void 0,R=f.morphAttributes.normal!==void 0,N=f.morphAttributes.color!==void 0,O=f.morphAttributes.position||[],p=f.morphAttributes.normal||[],G=f.morphAttributes.color||[];let E=0;A===!0&&(E=1),R===!0&&(E=2),N===!0&&(E=3);let D=f.attributes.position.count*E,Z=1;D>e.maxTextureSize&&(Z=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const q=new Float32Array(D*Z*4*y),$=new Bp(q,D,Z,y);$.type=cr,$.needsUpdate=!0;const k=E*4;for(let Y=0;Y<y;Y++){const le=O[Y],ce=p[Y],fe=G[Y],me=D*Z*4*Y;for(let Te=0;Te<le.count;Te++){const Me=Te*k;A===!0&&(o.fromBufferAttribute(le,Te),q[me+Me+0]=o.x,q[me+Me+1]=o.y,q[me+Me+2]=o.z,q[me+Me+3]=0),R===!0&&(o.fromBufferAttribute(ce,Te),q[me+Me+4]=o.x,q[me+Me+5]=o.y,q[me+Me+6]=o.z,q[me+Me+7]=0),N===!0&&(o.fromBufferAttribute(fe,Te),q[me+Me+8]=o.x,q[me+Me+9]=o.y,q[me+Me+10]=o.z,q[me+Me+11]=fe.itemSize===4?o.w:1)}}x={count:y,texture:$,size:new Ze(D,Z)},r.set(f,x),f.addEventListener("dispose",X)}let g=0;for(let A=0;A<m.length;A++)g+=m[A];const C=f.morphTargetsRelative?1:1-g;d.getUniforms().setValue(s,"morphTargetBaseInfluence",C),d.getUniforms().setValue(s,"morphTargetInfluences",m),d.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}else{const S=m===void 0?0:m.length;let y=n[f.id];if(y===void 0||y.length!==S){y=[];for(let R=0;R<S;R++)y[R]=[R,0];n[f.id]=y}for(let R=0;R<S;R++){const N=y[R];N[0]=R,N[1]=m[R]}y.sort(My);for(let R=0;R<8;R++)R<S&&y[R][1]?(a[R][0]=y[R][0],a[R][1]=y[R][1]):(a[R][0]=Number.MAX_SAFE_INTEGER,a[R][1]=0);a.sort(Ty);const x=f.morphAttributes.position,g=f.morphAttributes.normal;let C=0;for(let R=0;R<8;R++){const N=a[R],O=N[0],p=N[1];O!==Number.MAX_SAFE_INTEGER&&p?(x&&f.getAttribute("morphTarget"+R)!==x[O]&&f.setAttribute("morphTarget"+R,x[O]),g&&f.getAttribute("morphNormal"+R)!==g[O]&&f.setAttribute("morphNormal"+R,g[O]),i[R]=p,C+=p):(x&&f.hasAttribute("morphTarget"+R)===!0&&f.deleteAttribute("morphTarget"+R),g&&f.hasAttribute("morphNormal"+R)===!0&&f.deleteAttribute("morphNormal"+R),i[R]=0)}const A=f.morphTargetsRelative?1:1-C;d.getUniforms().setValue(s,"morphTargetBaseInfluence",A),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Ay(s,e,t,n){let i=new WeakMap;function r(l){const u=n.render.frame,f=l.geometry,d=e.get(l,f);if(i.get(d)!==u&&(e.update(d),i.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==u&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,u))),l.isSkinnedMesh){const m=l.skeleton;i.get(m)!==u&&(m.update(),i.set(m,u))}return d}function o(){i=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:r,dispose:o}}class jp extends mn{constructor(e,t,n,i,r,o,a,l,u,f){if(f=f!==void 0?f:ds,f!==ds&&f!==go)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===ds&&(n=Cr),n===void 0&&f===go&&(n=hs),super(null,i,r,o,a,l,f,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:hn,this.minFilter=l!==void 0?l:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const qp=new mn,Yp=new jp(1,1);Yp.compareFunction=Op;const Kp=new Bp,Zp=new fv,Jp=new Wp,Jh=[],Qh=[],$h=new Float32Array(16),ed=new Float32Array(9),td=new Float32Array(4);function Ro(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Jh[i];if(r===void 0&&(r=new Float32Array(i),Jh[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function _n(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function vn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Xl(s,e){let t=Qh[e];t===void 0&&(t=new Int32Array(e),Qh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function wy(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Cy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;s.uniform2fv(this.addr,e),vn(t,e)}}function Ry(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_n(t,e))return;s.uniform3fv(this.addr,e),vn(t,e)}}function Ly(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;s.uniform4fv(this.addr,e),vn(t,e)}}function Py(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(_n(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),vn(t,e)}else{if(_n(t,n))return;td.set(n),s.uniformMatrix2fv(this.addr,!1,td),vn(t,n)}}function Dy(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(_n(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),vn(t,e)}else{if(_n(t,n))return;ed.set(n),s.uniformMatrix3fv(this.addr,!1,ed),vn(t,n)}}function Ny(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(_n(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),vn(t,e)}else{if(_n(t,n))return;$h.set(n),s.uniformMatrix4fv(this.addr,!1,$h),vn(t,n)}}function Oy(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Iy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;s.uniform2iv(this.addr,e),vn(t,e)}}function Uy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;s.uniform3iv(this.addr,e),vn(t,e)}}function Fy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;s.uniform4iv(this.addr,e),vn(t,e)}}function By(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function ky(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;s.uniform2uiv(this.addr,e),vn(t,e)}}function zy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;s.uniform3uiv(this.addr,e),vn(t,e)}}function Hy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;s.uniform4uiv(this.addr,e),vn(t,e)}}function Gy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?Yp:qp;t.setTexture2D(e||r,i)}function Vy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Zp,i)}function Wy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Jp,i)}function Xy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Kp,i)}function jy(s){switch(s){case 5126:return wy;case 35664:return Cy;case 35665:return Ry;case 35666:return Ly;case 35674:return Py;case 35675:return Dy;case 35676:return Ny;case 5124:case 35670:return Oy;case 35667:case 35671:return Iy;case 35668:case 35672:return Uy;case 35669:case 35673:return Fy;case 5125:return By;case 36294:return ky;case 36295:return zy;case 36296:return Hy;case 35678:case 36198:case 36298:case 36306:case 35682:return Gy;case 35679:case 36299:case 36307:return Vy;case 35680:case 36300:case 36308:case 36293:return Wy;case 36289:case 36303:case 36311:case 36292:return Xy}}function qy(s,e){s.uniform1fv(this.addr,e)}function Yy(s,e){const t=Ro(e,this.size,2);s.uniform2fv(this.addr,t)}function Ky(s,e){const t=Ro(e,this.size,3);s.uniform3fv(this.addr,t)}function Zy(s,e){const t=Ro(e,this.size,4);s.uniform4fv(this.addr,t)}function Jy(s,e){const t=Ro(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Qy(s,e){const t=Ro(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function $y(s,e){const t=Ro(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function eb(s,e){s.uniform1iv(this.addr,e)}function tb(s,e){s.uniform2iv(this.addr,e)}function nb(s,e){s.uniform3iv(this.addr,e)}function ib(s,e){s.uniform4iv(this.addr,e)}function rb(s,e){s.uniform1uiv(this.addr,e)}function sb(s,e){s.uniform2uiv(this.addr,e)}function ob(s,e){s.uniform3uiv(this.addr,e)}function ab(s,e){s.uniform4uiv(this.addr,e)}function lb(s,e,t){const n=this.cache,i=e.length,r=Xl(t,i);_n(n,r)||(s.uniform1iv(this.addr,r),vn(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||qp,r[o])}function cb(s,e,t){const n=this.cache,i=e.length,r=Xl(t,i);_n(n,r)||(s.uniform1iv(this.addr,r),vn(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Zp,r[o])}function ub(s,e,t){const n=this.cache,i=e.length,r=Xl(t,i);_n(n,r)||(s.uniform1iv(this.addr,r),vn(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Jp,r[o])}function fb(s,e,t){const n=this.cache,i=e.length,r=Xl(t,i);_n(n,r)||(s.uniform1iv(this.addr,r),vn(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Kp,r[o])}function hb(s){switch(s){case 5126:return qy;case 35664:return Yy;case 35665:return Ky;case 35666:return Zy;case 35674:return Jy;case 35675:return Qy;case 35676:return $y;case 5124:case 35670:return eb;case 35667:case 35671:return tb;case 35668:case 35672:return nb;case 35669:case 35673:return ib;case 5125:return rb;case 36294:return sb;case 36295:return ob;case 36296:return ab;case 35678:case 36198:case 36298:case 36306:case 35682:return lb;case 35679:case 36299:case 36307:return cb;case 35680:case 36300:case 36308:case 36293:return ub;case 36289:case 36303:case 36311:case 36292:return fb}}class db{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=jy(t.type)}}class pb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hb(t.type)}}class mb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const zc=/(\w+)(\])?(\[|\.)?/g;function nd(s,e){s.seq.push(e),s.map[e.id]=e}function gb(s,e,t){const n=s.name,i=n.length;for(zc.lastIndex=0;;){const r=zc.exec(n),o=zc.lastIndex;let a=r[1];const l=r[2]==="]",u=r[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===i){nd(t,u===void 0?new db(a,s,e):new pb(a,s,e));break}else{let d=t.map[a];d===void 0&&(d=new mb(a),nd(t,d)),t=d}}}class gl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);gb(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function id(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const _b=37297;let vb=0;function xb(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function yb(s){const e=Pt.getPrimaries(Pt.workingColorSpace),t=Pt.getPrimaries(s);let n;switch(e===t?n="":e===El&&t===Ml?n="LinearDisplayP3ToLinearSRGB":e===Ml&&t===El&&(n="LinearSRGBToLinearDisplayP3"),s){case gn:case Hl:return[n,"LinearTransferOETF"];case Yt:case Yu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function rd(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+xb(s.getShaderSource(e),o)}else return i}function bb(s,e){const t=yb(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Sb(s,e){let t;switch(e){case vp:t="Linear";break;case xp:t="Reinhard";break;case yp:t="OptimizedCineon";break;case ju:t="ACESFilmic";break;case bp:t="AgX";break;case T_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Tb(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(io).join(`
`)}function Mb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(io).join(`
`)}function Eb(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ab(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function io(s){return s!==""}function sd(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function od(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wb=/^[ \t]*#include +<([\w\d./]+)>/gm;function _u(s){return s.replace(wb,Rb)}const Cb=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Rb(s,e){let t=vt[e];if(t===void 0){const n=Cb.get(e);if(n!==void 0)t=vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return _u(t)}const Lb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ad(s){return s.replace(Lb,Pb)}function Pb(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ld(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Db(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===mp?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===gp?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===or&&(e="SHADOWMAP_TYPE_VSM"),e}function Nb(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case po:case mo:e="ENVMAP_TYPE_CUBE";break;case zl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ob(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case mo:e="ENVMAP_MODE_REFRACTION";break}return e}function Ib(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case _p:e="ENVMAP_BLENDING_MULTIPLY";break;case b_:e="ENVMAP_BLENDING_MIX";break;case S_:e="ENVMAP_BLENDING_ADD";break}return e}function Ub(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Fb(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Db(t),u=Nb(t),f=Ob(t),d=Ib(t),m=Ub(t),v=t.isWebGL2?"":Tb(t),S=Mb(t),y=Eb(r),x=i.createProgram();let g,C,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(io).join(`
`),g.length>0&&(g+=`
`),C=[v,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(io).join(`
`),C.length>0&&(C+=`
`)):(g=[ld(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(io).join(`
`),C=[v,ld(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Or?"#define TONE_MAPPING":"",t.toneMapping!==Or?vt.tonemapping_pars_fragment:"",t.toneMapping!==Or?Sb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,bb("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(io).join(`
`)),o=_u(o),o=sd(o,t),o=od(o,t),a=_u(a),a=sd(a,t),a=od(a,t),o=ad(o),a=ad(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,g=[S,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,C=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ah?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ah?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+C);const R=A+g+o,N=A+C+a,O=id(i,i.VERTEX_SHADER,R),p=id(i,i.FRAGMENT_SHADER,N);i.attachShader(x,O),i.attachShader(x,p),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function G(q){if(s.debug.checkShaderErrors){const $=i.getProgramInfoLog(x).trim(),k=i.getShaderInfoLog(O).trim(),X=i.getShaderInfoLog(p).trim();let Y=!0,le=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,O,p);else{const ce=rd(i,O,"vertex"),fe=rd(i,p,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Program Info Log: `+$+`
`+ce+`
`+fe)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(k===""||X==="")&&(le=!1);le&&(q.diagnostics={runnable:Y,programLog:$,vertexShader:{log:k,prefix:g},fragmentShader:{log:X,prefix:C}})}i.deleteShader(O),i.deleteShader(p),E=new gl(i,x),D=Ab(i,x)}let E;this.getUniforms=function(){return E===void 0&&G(this),E};let D;this.getAttributes=function(){return D===void 0&&G(this),D};let Z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Z===!1&&(Z=i.getProgramParameter(x,_b)),Z},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vb++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=O,this.fragmentShader=p,this}let Bb=0;class kb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new zb(e),t.set(e,n)),n}}class zb{constructor(e){this.id=Bb++,this.code=e,this.usedTimes=0}}function Hb(s,e,t,n,i,r,o){const a=new Zu,l=new kb,u=[],f=i.isWebGL2,d=i.logarithmicDepthBuffer,m=i.vertexTextures;let v=i.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return E===0?"uv":`uv${E}`}function x(E,D,Z,q,$){const k=q.fog,X=$.geometry,Y=E.isMeshStandardMaterial?q.environment:null,le=(E.isMeshStandardMaterial?t:e).get(E.envMap||Y),ce=le&&le.mapping===zl?le.image.height:null,fe=S[E.type];E.precision!==null&&(v=i.getMaxPrecision(E.precision),v!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",v,"instead."));const me=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Te=me!==void 0?me.length:0;let Me=0;X.morphAttributes.position!==void 0&&(Me=1),X.morphAttributes.normal!==void 0&&(Me=2),X.morphAttributes.color!==void 0&&(Me=3);let ae,_e,Le,We;if(fe){const xn=zi[fe];ae=xn.vertexShader,_e=xn.fragmentShader}else ae=E.vertexShader,_e=E.fragmentShader,l.update(E),Le=l.getVertexShaderID(E),We=l.getFragmentShaderID(E);const Ve=s.getRenderTarget(),at=$.isInstancedMesh===!0,lt=$.isBatchedMesh===!0,He=!!E.map,Mt=!!E.matcap,Q=!!le,on=!!E.aoMap,Ye=!!E.lightMap,st=!!E.bumpMap,Be=!!E.normalMap,Bt=!!E.displacementMap,Je=!!E.emissiveMap,U=!!E.metalnessMap,L=!!E.roughnessMap,re=E.anisotropy>0,ve=E.clearcoat>0,xe=E.iridescence>0,be=E.sheen>0,pe=E.transmission>0,Ee=re&&!!E.anisotropyMap,Ue=ve&&!!E.clearcoatMap,Qe=ve&&!!E.clearcoatNormalMap,dt=ve&&!!E.clearcoatRoughnessMap,ye=xe&&!!E.iridescenceMap,Lt=xe&&!!E.iridescenceThicknessMap,ct=be&&!!E.sheenColorMap,qe=be&&!!E.sheenRoughnessMap,ze=!!E.specularMap,Ie=!!E.specularColorMap,ft=!!E.specularIntensityMap,At=pe&&!!E.transmissionMap,Xt=pe&&!!E.thicknessMap,pt=!!E.gradientMap,we=!!E.alphaMap,z=E.alphaTest>0,Re=!!E.alphaHash,Pe=!!E.extensions,$e=!!X.attributes.uv1,Fe=!!X.attributes.uv2,mt=!!X.attributes.uv3;let Dt=Or;return E.toneMapped&&(Ve===null||Ve.isXRRenderTarget===!0)&&(Dt=s.toneMapping),{isWebGL2:f,shaderID:fe,shaderType:E.type,shaderName:E.name,vertexShader:ae,fragmentShader:_e,defines:E.defines,customVertexShaderID:Le,customFragmentShaderID:We,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:v,batching:lt,instancing:at,instancingColor:at&&$.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:Ve===null?s.outputColorSpace:Ve.isXRRenderTarget===!0?Ve.texture.colorSpace:gn,map:He,matcap:Mt,envMap:Q,envMapMode:Q&&le.mapping,envMapCubeUVHeight:ce,aoMap:on,lightMap:Ye,bumpMap:st,normalMap:Be,displacementMap:m&&Bt,emissiveMap:Je,normalMapObjectSpace:Be&&E.normalMapType===F_,normalMapTangentSpace:Be&&E.normalMapType===Np,metalnessMap:U,roughnessMap:L,anisotropy:re,anisotropyMap:Ee,clearcoat:ve,clearcoatMap:Ue,clearcoatNormalMap:Qe,clearcoatRoughnessMap:dt,iridescence:xe,iridescenceMap:ye,iridescenceThicknessMap:Lt,sheen:be,sheenColorMap:ct,sheenRoughnessMap:qe,specularMap:ze,specularColorMap:Ie,specularIntensityMap:ft,transmission:pe,transmissionMap:At,thicknessMap:Xt,gradientMap:pt,opaque:E.transparent===!1&&E.blending===ao,alphaMap:we,alphaTest:z,alphaHash:Re,combine:E.combine,mapUv:He&&y(E.map.channel),aoMapUv:on&&y(E.aoMap.channel),lightMapUv:Ye&&y(E.lightMap.channel),bumpMapUv:st&&y(E.bumpMap.channel),normalMapUv:Be&&y(E.normalMap.channel),displacementMapUv:Bt&&y(E.displacementMap.channel),emissiveMapUv:Je&&y(E.emissiveMap.channel),metalnessMapUv:U&&y(E.metalnessMap.channel),roughnessMapUv:L&&y(E.roughnessMap.channel),anisotropyMapUv:Ee&&y(E.anisotropyMap.channel),clearcoatMapUv:Ue&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:Qe&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:qe&&y(E.sheenRoughnessMap.channel),specularMapUv:ze&&y(E.specularMap.channel),specularColorMapUv:Ie&&y(E.specularColorMap.channel),specularIntensityMapUv:ft&&y(E.specularIntensityMap.channel),transmissionMapUv:At&&y(E.transmissionMap.channel),thicknessMapUv:Xt&&y(E.thicknessMap.channel),alphaMapUv:we&&y(E.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Be||re),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,vertexUv1s:$e,vertexUv2s:Fe,vertexUv3s:mt,pointsUvs:$.isPoints===!0&&!!X.attributes.uv&&(He||we),fog:!!k,useFog:E.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:$.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Me,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&Z.length>0,shadowMapType:s.shadowMap.type,toneMapping:Dt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:He&&E.map.isVideoTexture===!0&&Pt.getTransfer(E.map.colorSpace)===Wt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Hi,flipSided:E.side===Wn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:Pe&&E.extensions.derivatives===!0,extensionFragDepth:Pe&&E.extensions.fragDepth===!0,extensionDrawBuffers:Pe&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:Pe&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Pe&&E.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:f||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function g(E){const D=[];if(E.shaderID?D.push(E.shaderID):(D.push(E.customVertexShaderID),D.push(E.customFragmentShaderID)),E.defines!==void 0)for(const Z in E.defines)D.push(Z),D.push(E.defines[Z]);return E.isRawShaderMaterial===!1&&(C(D,E),A(D,E),D.push(s.outputColorSpace)),D.push(E.customProgramCacheKey),D.join()}function C(E,D){E.push(D.precision),E.push(D.outputColorSpace),E.push(D.envMapMode),E.push(D.envMapCubeUVHeight),E.push(D.mapUv),E.push(D.alphaMapUv),E.push(D.lightMapUv),E.push(D.aoMapUv),E.push(D.bumpMapUv),E.push(D.normalMapUv),E.push(D.displacementMapUv),E.push(D.emissiveMapUv),E.push(D.metalnessMapUv),E.push(D.roughnessMapUv),E.push(D.anisotropyMapUv),E.push(D.clearcoatMapUv),E.push(D.clearcoatNormalMapUv),E.push(D.clearcoatRoughnessMapUv),E.push(D.iridescenceMapUv),E.push(D.iridescenceThicknessMapUv),E.push(D.sheenColorMapUv),E.push(D.sheenRoughnessMapUv),E.push(D.specularMapUv),E.push(D.specularColorMapUv),E.push(D.specularIntensityMapUv),E.push(D.transmissionMapUv),E.push(D.thicknessMapUv),E.push(D.combine),E.push(D.fogExp2),E.push(D.sizeAttenuation),E.push(D.morphTargetsCount),E.push(D.morphAttributeCount),E.push(D.numDirLights),E.push(D.numPointLights),E.push(D.numSpotLights),E.push(D.numSpotLightMaps),E.push(D.numHemiLights),E.push(D.numRectAreaLights),E.push(D.numDirLightShadows),E.push(D.numPointLightShadows),E.push(D.numSpotLightShadows),E.push(D.numSpotLightShadowsWithMaps),E.push(D.numLightProbes),E.push(D.shadowMapType),E.push(D.toneMapping),E.push(D.numClippingPlanes),E.push(D.numClipIntersection),E.push(D.depthPacking)}function A(E,D){a.disableAll(),D.isWebGL2&&a.enable(0),D.supportsVertexTextures&&a.enable(1),D.instancing&&a.enable(2),D.instancingColor&&a.enable(3),D.matcap&&a.enable(4),D.envMap&&a.enable(5),D.normalMapObjectSpace&&a.enable(6),D.normalMapTangentSpace&&a.enable(7),D.clearcoat&&a.enable(8),D.iridescence&&a.enable(9),D.alphaTest&&a.enable(10),D.vertexColors&&a.enable(11),D.vertexAlphas&&a.enable(12),D.vertexUv1s&&a.enable(13),D.vertexUv2s&&a.enable(14),D.vertexUv3s&&a.enable(15),D.vertexTangents&&a.enable(16),D.anisotropy&&a.enable(17),D.alphaHash&&a.enable(18),D.batching&&a.enable(19),E.push(a.mask),a.disableAll(),D.fog&&a.enable(0),D.useFog&&a.enable(1),D.flatShading&&a.enable(2),D.logarithmicDepthBuffer&&a.enable(3),D.skinning&&a.enable(4),D.morphTargets&&a.enable(5),D.morphNormals&&a.enable(6),D.morphColors&&a.enable(7),D.premultipliedAlpha&&a.enable(8),D.shadowMapEnabled&&a.enable(9),D.useLegacyLights&&a.enable(10),D.doubleSided&&a.enable(11),D.flipSided&&a.enable(12),D.useDepthPacking&&a.enable(13),D.dithering&&a.enable(14),D.transmission&&a.enable(15),D.sheen&&a.enable(16),D.opaque&&a.enable(17),D.pointsUvs&&a.enable(18),D.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function R(E){const D=S[E.type];let Z;if(D){const q=zi[D];Z=Li.clone(q.uniforms)}else Z=E.uniforms;return Z}function N(E,D){let Z;for(let q=0,$=u.length;q<$;q++){const k=u[q];if(k.cacheKey===D){Z=k,++Z.usedTimes;break}}return Z===void 0&&(Z=new Fb(s,D,E,r),u.push(Z)),Z}function O(E){if(--E.usedTimes===0){const D=u.indexOf(E);u[D]=u[u.length-1],u.pop(),E.destroy()}}function p(E){l.remove(E)}function G(){l.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:R,acquireProgram:N,releaseProgram:O,releaseShaderCache:p,programs:u,dispose:G}}function Gb(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Vb(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function cd(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ud(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(d,m,v,S,y,x){let g=s[e];return g===void 0?(g={id:d.id,object:d,geometry:m,material:v,groupOrder:S,renderOrder:d.renderOrder,z:y,group:x},s[e]=g):(g.id=d.id,g.object=d,g.geometry=m,g.material=v,g.groupOrder=S,g.renderOrder=d.renderOrder,g.z=y,g.group=x),e++,g}function a(d,m,v,S,y,x){const g=o(d,m,v,S,y,x);v.transmission>0?n.push(g):v.transparent===!0?i.push(g):t.push(g)}function l(d,m,v,S,y,x){const g=o(d,m,v,S,y,x);v.transmission>0?n.unshift(g):v.transparent===!0?i.unshift(g):t.unshift(g)}function u(d,m){t.length>1&&t.sort(d||Vb),n.length>1&&n.sort(m||cd),i.length>1&&i.sort(m||cd)}function f(){for(let d=e,m=s.length;d<m;d++){const v=s[d];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:f,sort:u}}function Wb(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new ud,s.set(n,[o])):i>=r.length?(o=new ud,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Xb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new je};break;case"SpotLight":t={position:new V,direction:new V,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new V,halfWidth:new V,halfHeight:new V};break}return s[e.id]=t,t}}}function jb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let qb=0;function Yb(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Kb(s,e){const t=new Xb,n=jb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new V);const r=new V,o=new ut,a=new ut;function l(f,d){let m=0,v=0,S=0;for(let q=0;q<9;q++)i.probe[q].set(0,0,0);let y=0,x=0,g=0,C=0,A=0,R=0,N=0,O=0,p=0,G=0,E=0;f.sort(Yb);const D=d===!0?Math.PI:1;for(let q=0,$=f.length;q<$;q++){const k=f[q],X=k.color,Y=k.intensity,le=k.distance,ce=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)m+=X.r*Y*D,v+=X.g*Y*D,S+=X.b*Y*D;else if(k.isLightProbe){for(let fe=0;fe<9;fe++)i.probe[fe].addScaledVector(k.sh.coefficients[fe],Y);E++}else if(k.isDirectionalLight){const fe=t.get(k);if(fe.color.copy(k.color).multiplyScalar(k.intensity*D),k.castShadow){const me=k.shadow,Te=n.get(k);Te.shadowBias=me.bias,Te.shadowNormalBias=me.normalBias,Te.shadowRadius=me.radius,Te.shadowMapSize=me.mapSize,i.directionalShadow[y]=Te,i.directionalShadowMap[y]=ce,i.directionalShadowMatrix[y]=k.shadow.matrix,R++}i.directional[y]=fe,y++}else if(k.isSpotLight){const fe=t.get(k);fe.position.setFromMatrixPosition(k.matrixWorld),fe.color.copy(X).multiplyScalar(Y*D),fe.distance=le,fe.coneCos=Math.cos(k.angle),fe.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),fe.decay=k.decay,i.spot[g]=fe;const me=k.shadow;if(k.map&&(i.spotLightMap[p]=k.map,p++,me.updateMatrices(k),k.castShadow&&G++),i.spotLightMatrix[g]=me.matrix,k.castShadow){const Te=n.get(k);Te.shadowBias=me.bias,Te.shadowNormalBias=me.normalBias,Te.shadowRadius=me.radius,Te.shadowMapSize=me.mapSize,i.spotShadow[g]=Te,i.spotShadowMap[g]=ce,O++}g++}else if(k.isRectAreaLight){const fe=t.get(k);fe.color.copy(X).multiplyScalar(Y),fe.halfWidth.set(k.width*.5,0,0),fe.halfHeight.set(0,k.height*.5,0),i.rectArea[C]=fe,C++}else if(k.isPointLight){const fe=t.get(k);if(fe.color.copy(k.color).multiplyScalar(k.intensity*D),fe.distance=k.distance,fe.decay=k.decay,k.castShadow){const me=k.shadow,Te=n.get(k);Te.shadowBias=me.bias,Te.shadowNormalBias=me.normalBias,Te.shadowRadius=me.radius,Te.shadowMapSize=me.mapSize,Te.shadowCameraNear=me.camera.near,Te.shadowCameraFar=me.camera.far,i.pointShadow[x]=Te,i.pointShadowMap[x]=ce,i.pointShadowMatrix[x]=k.shadow.matrix,N++}i.point[x]=fe,x++}else if(k.isHemisphereLight){const fe=t.get(k);fe.skyColor.copy(k.color).multiplyScalar(Y*D),fe.groundColor.copy(k.groundColor).multiplyScalar(Y*D),i.hemi[A]=fe,A++}}C>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=m,i.ambient[1]=v,i.ambient[2]=S;const Z=i.hash;(Z.directionalLength!==y||Z.pointLength!==x||Z.spotLength!==g||Z.rectAreaLength!==C||Z.hemiLength!==A||Z.numDirectionalShadows!==R||Z.numPointShadows!==N||Z.numSpotShadows!==O||Z.numSpotMaps!==p||Z.numLightProbes!==E)&&(i.directional.length=y,i.spot.length=g,i.rectArea.length=C,i.point.length=x,i.hemi.length=A,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=N,i.pointShadowMap.length=N,i.spotShadow.length=O,i.spotShadowMap.length=O,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=N,i.spotLightMatrix.length=O+p-G,i.spotLightMap.length=p,i.numSpotLightShadowsWithMaps=G,i.numLightProbes=E,Z.directionalLength=y,Z.pointLength=x,Z.spotLength=g,Z.rectAreaLength=C,Z.hemiLength=A,Z.numDirectionalShadows=R,Z.numPointShadows=N,Z.numSpotShadows=O,Z.numSpotMaps=p,Z.numLightProbes=E,i.version=qb++)}function u(f,d){let m=0,v=0,S=0,y=0,x=0;const g=d.matrixWorldInverse;for(let C=0,A=f.length;C<A;C++){const R=f[C];if(R.isDirectionalLight){const N=i.directional[m];N.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(g),m++}else if(R.isSpotLight){const N=i.spot[S];N.position.setFromMatrixPosition(R.matrixWorld),N.position.applyMatrix4(g),N.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(g),S++}else if(R.isRectAreaLight){const N=i.rectArea[y];N.position.setFromMatrixPosition(R.matrixWorld),N.position.applyMatrix4(g),a.identity(),o.copy(R.matrixWorld),o.premultiply(g),a.extractRotation(o),N.halfWidth.set(R.width*.5,0,0),N.halfHeight.set(0,R.height*.5,0),N.halfWidth.applyMatrix4(a),N.halfHeight.applyMatrix4(a),y++}else if(R.isPointLight){const N=i.point[v];N.position.setFromMatrixPosition(R.matrixWorld),N.position.applyMatrix4(g),v++}else if(R.isHemisphereLight){const N=i.hemi[x];N.direction.setFromMatrixPosition(R.matrixWorld),N.direction.transformDirection(g),x++}}}return{setup:l,setupView:u,state:i}}function fd(s,e){const t=new Kb(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){t.setup(n,d)}function u(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function Zb(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new fd(s,e),t.set(r,[l])):o>=a.length?(l=new fd(s,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Jb extends Xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=I_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qb extends Xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $b=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function tS(s,e,t){let n=new Ju;const i=new Ze,r=new Ze,o=new Ft,a=new Jb({depthPacking:U_}),l=new Qb,u={},f=t.maxTextureSize,d={[qi]:Wn,[Wn]:qi,[Hi]:Hi},m=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:$b,fragmentShader:eS}),v=m.clone();v.defines.HORIZONTAL_PASS=1;const S=new oi;S.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Vn(S,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mp;let g=this.type;this.render=function(O,p,G){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||O.length===0)return;const E=s.getRenderTarget(),D=s.getActiveCubeFace(),Z=s.getActiveMipmapLevel(),q=s.state;q.setBlending(fr),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const $=g!==or&&this.type===or,k=g===or&&this.type!==or;for(let X=0,Y=O.length;X<Y;X++){const le=O[X],ce=le.shadow;if(ce===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(ce.autoUpdate===!1&&ce.needsUpdate===!1)continue;i.copy(ce.mapSize);const fe=ce.getFrameExtents();if(i.multiply(fe),r.copy(ce.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(r.x=Math.floor(f/fe.x),i.x=r.x*fe.x,ce.mapSize.x=r.x),i.y>f&&(r.y=Math.floor(f/fe.y),i.y=r.y*fe.y,ce.mapSize.y=r.y)),ce.map===null||$===!0||k===!0){const Te=this.type!==or?{minFilter:hn,magFilter:hn}:{};ce.map!==null&&ce.map.dispose(),ce.map=new jn(i.x,i.y,Te),ce.map.texture.name=le.name+".shadowMap",ce.camera.updateProjectionMatrix()}s.setRenderTarget(ce.map),s.clear();const me=ce.getViewportCount();for(let Te=0;Te<me;Te++){const Me=ce.getViewport(Te);o.set(r.x*Me.x,r.y*Me.y,r.x*Me.z,r.y*Me.w),q.viewport(o),ce.updateMatrices(le,Te),n=ce.getFrustum(),R(p,G,ce.camera,le,this.type)}ce.isPointLightShadow!==!0&&this.type===or&&C(ce,G),ce.needsUpdate=!1}g=this.type,x.needsUpdate=!1,s.setRenderTarget(E,D,Z)};function C(O,p){const G=e.update(y);m.defines.VSM_SAMPLES!==O.blurSamples&&(m.defines.VSM_SAMPLES=O.blurSamples,v.defines.VSM_SAMPLES=O.blurSamples,m.needsUpdate=!0,v.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new jn(i.x,i.y)),m.uniforms.shadow_pass.value=O.map.texture,m.uniforms.resolution.value=O.mapSize,m.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(p,null,G,m,y,null),v.uniforms.shadow_pass.value=O.mapPass.texture,v.uniforms.resolution.value=O.mapSize,v.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(p,null,G,v,y,null)}function A(O,p,G,E){let D=null;const Z=G.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(Z!==void 0)D=Z;else if(D=G.isPointLight===!0?l:a,s.localClippingEnabled&&p.clipShadows===!0&&Array.isArray(p.clippingPlanes)&&p.clippingPlanes.length!==0||p.displacementMap&&p.displacementScale!==0||p.alphaMap&&p.alphaTest>0||p.map&&p.alphaTest>0){const q=D.uuid,$=p.uuid;let k=u[q];k===void 0&&(k={},u[q]=k);let X=k[$];X===void 0&&(X=D.clone(),k[$]=X,p.addEventListener("dispose",N)),D=X}if(D.visible=p.visible,D.wireframe=p.wireframe,E===or?D.side=p.shadowSide!==null?p.shadowSide:p.side:D.side=p.shadowSide!==null?p.shadowSide:d[p.side],D.alphaMap=p.alphaMap,D.alphaTest=p.alphaTest,D.map=p.map,D.clipShadows=p.clipShadows,D.clippingPlanes=p.clippingPlanes,D.clipIntersection=p.clipIntersection,D.displacementMap=p.displacementMap,D.displacementScale=p.displacementScale,D.displacementBias=p.displacementBias,D.wireframeLinewidth=p.wireframeLinewidth,D.linewidth=p.linewidth,G.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const q=s.properties.get(D);q.light=G}return D}function R(O,p,G,E,D){if(O.visible===!1)return;if(O.layers.test(p.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&D===or)&&(!O.frustumCulled||n.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,O.matrixWorld);const $=e.update(O),k=O.material;if(Array.isArray(k)){const X=$.groups;for(let Y=0,le=X.length;Y<le;Y++){const ce=X[Y],fe=k[ce.materialIndex];if(fe&&fe.visible){const me=A(O,fe,E,D);O.onBeforeShadow(s,O,p,G,$,me,ce),s.renderBufferDirect(G,null,$,me,O,ce),O.onAfterShadow(s,O,p,G,$,me,ce)}}}else if(k.visible){const X=A(O,k,E,D);O.onBeforeShadow(s,O,p,G,$,X,null),s.renderBufferDirect(G,null,$,X,O,null),O.onAfterShadow(s,O,p,G,$,X,null)}}const q=O.children;for(let $=0,k=q.length;$<k;$++)R(q[$],p,G,E,D)}function N(O){O.target.removeEventListener("dispose",N);for(const G in u){const E=u[G],D=O.target.uuid;D in E&&(E[D].dispose(),delete E[D])}}}function nS(s,e,t){const n=t.isWebGL2;function i(){let z=!1;const Re=new Ft;let Pe=null;const $e=new Ft(0,0,0,0);return{setMask:function(Fe){Pe!==Fe&&!z&&(s.colorMask(Fe,Fe,Fe,Fe),Pe=Fe)},setLocked:function(Fe){z=Fe},setClear:function(Fe,mt,Dt,an,xn){xn===!0&&(Fe*=an,mt*=an,Dt*=an),Re.set(Fe,mt,Dt,an),$e.equals(Re)===!1&&(s.clearColor(Fe,mt,Dt,an),$e.copy(Re))},reset:function(){z=!1,Pe=null,$e.set(-1,0,0,0)}}}function r(){let z=!1,Re=null,Pe=null,$e=null;return{setTest:function(Fe){Fe?lt(s.DEPTH_TEST):He(s.DEPTH_TEST)},setMask:function(Fe){Re!==Fe&&!z&&(s.depthMask(Fe),Re=Fe)},setFunc:function(Fe){if(Pe!==Fe){switch(Fe){case p_:s.depthFunc(s.NEVER);break;case m_:s.depthFunc(s.ALWAYS);break;case g_:s.depthFunc(s.LESS);break;case bl:s.depthFunc(s.LEQUAL);break;case __:s.depthFunc(s.EQUAL);break;case v_:s.depthFunc(s.GEQUAL);break;case x_:s.depthFunc(s.GREATER);break;case y_:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Pe=Fe}},setLocked:function(Fe){z=Fe},setClear:function(Fe){$e!==Fe&&(s.clearDepth(Fe),$e=Fe)},reset:function(){z=!1,Re=null,Pe=null,$e=null}}}function o(){let z=!1,Re=null,Pe=null,$e=null,Fe=null,mt=null,Dt=null,an=null,xn=null;return{setTest:function(Ot){z||(Ot?lt(s.STENCIL_TEST):He(s.STENCIL_TEST))},setMask:function(Ot){Re!==Ot&&!z&&(s.stencilMask(Ot),Re=Ot)},setFunc:function(Ot,$t,En){(Pe!==Ot||$e!==$t||Fe!==En)&&(s.stencilFunc(Ot,$t,En),Pe=Ot,$e=$t,Fe=En)},setOp:function(Ot,$t,En){(mt!==Ot||Dt!==$t||an!==En)&&(s.stencilOp(Ot,$t,En),mt=Ot,Dt=$t,an=En)},setLocked:function(Ot){z=Ot},setClear:function(Ot){xn!==Ot&&(s.clearStencil(Ot),xn=Ot)},reset:function(){z=!1,Re=null,Pe=null,$e=null,Fe=null,mt=null,Dt=null,an=null,xn=null}}}const a=new i,l=new r,u=new o,f=new WeakMap,d=new WeakMap;let m={},v={},S=new WeakMap,y=[],x=null,g=!1,C=null,A=null,R=null,N=null,O=null,p=null,G=null,E=new je(0,0,0),D=0,Z=!1,q=null,$=null,k=null,X=null,Y=null;const le=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,fe=0;const me=s.getParameter(s.VERSION);me.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\d)/.exec(me)[1]),ce=fe>=1):me.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\d)/.exec(me)[1]),ce=fe>=2);let Te=null,Me={};const ae=s.getParameter(s.SCISSOR_BOX),_e=s.getParameter(s.VIEWPORT),Le=new Ft().fromArray(ae),We=new Ft().fromArray(_e);function Ve(z,Re,Pe,$e){const Fe=new Uint8Array(4),mt=s.createTexture();s.bindTexture(z,mt),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Dt=0;Dt<Pe;Dt++)n&&(z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY)?s.texImage3D(Re,0,s.RGBA,1,1,$e,0,s.RGBA,s.UNSIGNED_BYTE,Fe):s.texImage2D(Re+Dt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Fe);return mt}const at={};at[s.TEXTURE_2D]=Ve(s.TEXTURE_2D,s.TEXTURE_2D,1),at[s.TEXTURE_CUBE_MAP]=Ve(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(at[s.TEXTURE_2D_ARRAY]=Ve(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),at[s.TEXTURE_3D]=Ve(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),lt(s.DEPTH_TEST),l.setFunc(bl),Je(!1),U(Xf),lt(s.CULL_FACE),Be(fr);function lt(z){m[z]!==!0&&(s.enable(z),m[z]=!0)}function He(z){m[z]!==!1&&(s.disable(z),m[z]=!1)}function Mt(z,Re){return v[z]!==Re?(s.bindFramebuffer(z,Re),v[z]=Re,n&&(z===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Re),z===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Re)),!0):!1}function Q(z,Re){let Pe=y,$e=!1;if(z)if(Pe=S.get(Re),Pe===void 0&&(Pe=[],S.set(Re,Pe)),z.isWebGLMultipleRenderTargets){const Fe=z.texture;if(Pe.length!==Fe.length||Pe[0]!==s.COLOR_ATTACHMENT0){for(let mt=0,Dt=Fe.length;mt<Dt;mt++)Pe[mt]=s.COLOR_ATTACHMENT0+mt;Pe.length=Fe.length,$e=!0}}else Pe[0]!==s.COLOR_ATTACHMENT0&&(Pe[0]=s.COLOR_ATTACHMENT0,$e=!0);else Pe[0]!==s.BACK&&(Pe[0]=s.BACK,$e=!0);$e&&(t.isWebGL2?s.drawBuffers(Pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Pe))}function on(z){return x!==z?(s.useProgram(z),x=z,!0):!1}const Ye={[ls]:s.FUNC_ADD,[$g]:s.FUNC_SUBTRACT,[e_]:s.FUNC_REVERSE_SUBTRACT};if(n)Ye[Yf]=s.MIN,Ye[Kf]=s.MAX;else{const z=e.get("EXT_blend_minmax");z!==null&&(Ye[Yf]=z.MIN_EXT,Ye[Kf]=z.MAX_EXT)}const st={[t_]:s.ZERO,[n_]:s.ONE,[i_]:s.SRC_COLOR,[lu]:s.SRC_ALPHA,[c_]:s.SRC_ALPHA_SATURATE,[a_]:s.DST_COLOR,[s_]:s.DST_ALPHA,[r_]:s.ONE_MINUS_SRC_COLOR,[cu]:s.ONE_MINUS_SRC_ALPHA,[l_]:s.ONE_MINUS_DST_COLOR,[o_]:s.ONE_MINUS_DST_ALPHA,[u_]:s.CONSTANT_COLOR,[f_]:s.ONE_MINUS_CONSTANT_COLOR,[h_]:s.CONSTANT_ALPHA,[d_]:s.ONE_MINUS_CONSTANT_ALPHA};function Be(z,Re,Pe,$e,Fe,mt,Dt,an,xn,Ot){if(z===fr){g===!0&&(He(s.BLEND),g=!1);return}if(g===!1&&(lt(s.BLEND),g=!0),z!==Qg){if(z!==C||Ot!==Z){if((A!==ls||O!==ls)&&(s.blendEquation(s.FUNC_ADD),A=ls,O=ls),Ot)switch(z){case ao:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case yl:s.blendFunc(s.ONE,s.ONE);break;case jf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case qf:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case ao:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case yl:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case jf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case qf:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}R=null,N=null,p=null,G=null,E.set(0,0,0),D=0,C=z,Z=Ot}return}Fe=Fe||Re,mt=mt||Pe,Dt=Dt||$e,(Re!==A||Fe!==O)&&(s.blendEquationSeparate(Ye[Re],Ye[Fe]),A=Re,O=Fe),(Pe!==R||$e!==N||mt!==p||Dt!==G)&&(s.blendFuncSeparate(st[Pe],st[$e],st[mt],st[Dt]),R=Pe,N=$e,p=mt,G=Dt),(an.equals(E)===!1||xn!==D)&&(s.blendColor(an.r,an.g,an.b,xn),E.copy(an),D=xn),C=z,Z=!1}function Bt(z,Re){z.side===Hi?He(s.CULL_FACE):lt(s.CULL_FACE);let Pe=z.side===Wn;Re&&(Pe=!Pe),Je(Pe),z.blending===ao&&z.transparent===!1?Be(fr):Be(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),l.setFunc(z.depthFunc),l.setTest(z.depthTest),l.setMask(z.depthWrite),a.setMask(z.colorWrite);const $e=z.stencilWrite;u.setTest($e),$e&&(u.setMask(z.stencilWriteMask),u.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),u.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),re(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?lt(s.SAMPLE_ALPHA_TO_COVERAGE):He(s.SAMPLE_ALPHA_TO_COVERAGE)}function Je(z){q!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),q=z)}function U(z){z!==Zg?(lt(s.CULL_FACE),z!==$&&(z===Xf?s.cullFace(s.BACK):z===Jg?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):He(s.CULL_FACE),$=z}function L(z){z!==k&&(ce&&s.lineWidth(z),k=z)}function re(z,Re,Pe){z?(lt(s.POLYGON_OFFSET_FILL),(X!==Re||Y!==Pe)&&(s.polygonOffset(Re,Pe),X=Re,Y=Pe)):He(s.POLYGON_OFFSET_FILL)}function ve(z){z?lt(s.SCISSOR_TEST):He(s.SCISSOR_TEST)}function xe(z){z===void 0&&(z=s.TEXTURE0+le-1),Te!==z&&(s.activeTexture(z),Te=z)}function be(z,Re,Pe){Pe===void 0&&(Te===null?Pe=s.TEXTURE0+le-1:Pe=Te);let $e=Me[Pe];$e===void 0&&($e={type:void 0,texture:void 0},Me[Pe]=$e),($e.type!==z||$e.texture!==Re)&&(Te!==Pe&&(s.activeTexture(Pe),Te=Pe),s.bindTexture(z,Re||at[z]),$e.type=z,$e.texture=Re)}function pe(){const z=Me[Te];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Ee(){try{s.compressedTexImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ue(){try{s.compressedTexImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Qe(){try{s.texSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function dt(){try{s.texSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ye(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Lt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ct(){try{s.texStorage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function qe(){try{s.texStorage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ze(){try{s.texImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ie(){try{s.texImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ft(z){Le.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),Le.copy(z))}function At(z){We.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),We.copy(z))}function Xt(z,Re){let Pe=d.get(Re);Pe===void 0&&(Pe=new WeakMap,d.set(Re,Pe));let $e=Pe.get(z);$e===void 0&&($e=s.getUniformBlockIndex(Re,z.name),Pe.set(z,$e))}function pt(z,Re){const $e=d.get(Re).get(z);f.get(Re)!==$e&&(s.uniformBlockBinding(Re,$e,z.__bindingPointIndex),f.set(Re,$e))}function we(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),m={},Te=null,Me={},v={},S=new WeakMap,y=[],x=null,g=!1,C=null,A=null,R=null,N=null,O=null,p=null,G=null,E=new je(0,0,0),D=0,Z=!1,q=null,$=null,k=null,X=null,Y=null,Le.set(0,0,s.canvas.width,s.canvas.height),We.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:lt,disable:He,bindFramebuffer:Mt,drawBuffers:Q,useProgram:on,setBlending:Be,setMaterial:Bt,setFlipSided:Je,setCullFace:U,setLineWidth:L,setPolygonOffset:re,setScissorTest:ve,activeTexture:xe,bindTexture:be,unbindTexture:pe,compressedTexImage2D:Ee,compressedTexImage3D:Ue,texImage2D:ze,texImage3D:Ie,updateUBOMapping:Xt,uniformBlockBinding:pt,texStorage2D:ct,texStorage3D:qe,texSubImage2D:Qe,texSubImage3D:dt,compressedTexSubImage2D:ye,compressedTexSubImage3D:Lt,scissor:ft,viewport:At,reset:we}}function iS(s,e,t,n,i,r,o){const a=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap;let d;const m=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(U,L){return v?new OffscreenCanvas(U,L):fa("canvas")}function y(U,L,re,ve){let xe=1;if((U.width>ve||U.height>ve)&&(xe=ve/Math.max(U.width,U.height)),xe<1||L===!0)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap){const be=L?wl:Math.floor,pe=be(xe*U.width),Ee=be(xe*U.height);d===void 0&&(d=S(pe,Ee));const Ue=re?S(pe,Ee):d;return Ue.width=pe,Ue.height=Ee,Ue.getContext("2d").drawImage(U,0,0,pe,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+U.width+"x"+U.height+") to ("+pe+"x"+Ee+")."),Ue}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+U.width+"x"+U.height+")."),U;return U}function x(U){return gu(U.width)&&gu(U.height)}function g(U){return a?!1:U.wrapS!==pi||U.wrapT!==pi||U.minFilter!==hn&&U.minFilter!==Hn}function C(U,L){return U.generateMipmaps&&L&&U.minFilter!==hn&&U.minFilter!==Hn}function A(U){s.generateMipmap(U)}function R(U,L,re,ve,xe=!1){if(a===!1)return L;if(U!==null){if(s[U]!==void 0)return s[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let be=L;if(L===s.RED&&(re===s.FLOAT&&(be=s.R32F),re===s.HALF_FLOAT&&(be=s.R16F),re===s.UNSIGNED_BYTE&&(be=s.R8)),L===s.RED_INTEGER&&(re===s.UNSIGNED_BYTE&&(be=s.R8UI),re===s.UNSIGNED_SHORT&&(be=s.R16UI),re===s.UNSIGNED_INT&&(be=s.R32UI),re===s.BYTE&&(be=s.R8I),re===s.SHORT&&(be=s.R16I),re===s.INT&&(be=s.R32I)),L===s.RG&&(re===s.FLOAT&&(be=s.RG32F),re===s.HALF_FLOAT&&(be=s.RG16F),re===s.UNSIGNED_BYTE&&(be=s.RG8)),L===s.RGBA){const pe=xe?Tl:Pt.getTransfer(ve);re===s.FLOAT&&(be=s.RGBA32F),re===s.HALF_FLOAT&&(be=s.RGBA16F),re===s.UNSIGNED_BYTE&&(be=pe===Wt?s.SRGB8_ALPHA8:s.RGBA8),re===s.UNSIGNED_SHORT_4_4_4_4&&(be=s.RGBA4),re===s.UNSIGNED_SHORT_5_5_5_1&&(be=s.RGB5_A1)}return(be===s.R16F||be===s.R32F||be===s.RG16F||be===s.RG32F||be===s.RGBA16F||be===s.RGBA32F)&&e.get("EXT_color_buffer_float"),be}function N(U,L,re){return C(U,re)===!0||U.isFramebufferTexture&&U.minFilter!==hn&&U.minFilter!==Hn?Math.log2(Math.max(L.width,L.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?L.mipmaps.length:1}function O(U){return U===hn||U===hu||U===ml?s.NEAREST:s.LINEAR}function p(U){const L=U.target;L.removeEventListener("dispose",p),E(L),L.isVideoTexture&&f.delete(L)}function G(U){const L=U.target;L.removeEventListener("dispose",G),Z(L)}function E(U){const L=n.get(U);if(L.__webglInit===void 0)return;const re=U.source,ve=m.get(re);if(ve){const xe=ve[L.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&D(U),Object.keys(ve).length===0&&m.delete(re)}n.remove(U)}function D(U){const L=n.get(U);s.deleteTexture(L.__webglTexture);const re=U.source,ve=m.get(re);delete ve[L.__cacheKey],o.memory.textures--}function Z(U){const L=U.texture,re=n.get(U),ve=n.get(L);if(ve.__webglTexture!==void 0&&(s.deleteTexture(ve.__webglTexture),o.memory.textures--),U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(re.__webglFramebuffer[xe]))for(let be=0;be<re.__webglFramebuffer[xe].length;be++)s.deleteFramebuffer(re.__webglFramebuffer[xe][be]);else s.deleteFramebuffer(re.__webglFramebuffer[xe]);re.__webglDepthbuffer&&s.deleteRenderbuffer(re.__webglDepthbuffer[xe])}else{if(Array.isArray(re.__webglFramebuffer))for(let xe=0;xe<re.__webglFramebuffer.length;xe++)s.deleteFramebuffer(re.__webglFramebuffer[xe]);else s.deleteFramebuffer(re.__webglFramebuffer);if(re.__webglDepthbuffer&&s.deleteRenderbuffer(re.__webglDepthbuffer),re.__webglMultisampledFramebuffer&&s.deleteFramebuffer(re.__webglMultisampledFramebuffer),re.__webglColorRenderbuffer)for(let xe=0;xe<re.__webglColorRenderbuffer.length;xe++)re.__webglColorRenderbuffer[xe]&&s.deleteRenderbuffer(re.__webglColorRenderbuffer[xe]);re.__webglDepthRenderbuffer&&s.deleteRenderbuffer(re.__webglDepthRenderbuffer)}if(U.isWebGLMultipleRenderTargets)for(let xe=0,be=L.length;xe<be;xe++){const pe=n.get(L[xe]);pe.__webglTexture&&(s.deleteTexture(pe.__webglTexture),o.memory.textures--),n.remove(L[xe])}n.remove(L),n.remove(U)}let q=0;function $(){q=0}function k(){const U=q;return U>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+i.maxTextures),q+=1,U}function X(U){const L=[];return L.push(U.wrapS),L.push(U.wrapT),L.push(U.wrapR||0),L.push(U.magFilter),L.push(U.minFilter),L.push(U.anisotropy),L.push(U.internalFormat),L.push(U.format),L.push(U.type),L.push(U.generateMipmaps),L.push(U.premultiplyAlpha),L.push(U.flipY),L.push(U.unpackAlignment),L.push(U.colorSpace),L.join()}function Y(U,L){const re=n.get(U);if(U.isVideoTexture&&Bt(U),U.isRenderTargetTexture===!1&&U.version>0&&re.__version!==U.version){const ve=U.image;if(ve===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Le(re,U,L);return}}t.bindTexture(s.TEXTURE_2D,re.__webglTexture,s.TEXTURE0+L)}function le(U,L){const re=n.get(U);if(U.version>0&&re.__version!==U.version){Le(re,U,L);return}t.bindTexture(s.TEXTURE_2D_ARRAY,re.__webglTexture,s.TEXTURE0+L)}function ce(U,L){const re=n.get(U);if(U.version>0&&re.__version!==U.version){Le(re,U,L);return}t.bindTexture(s.TEXTURE_3D,re.__webglTexture,s.TEXTURE0+L)}function fe(U,L){const re=n.get(U);if(U.version>0&&re.__version!==U.version){We(re,U,L);return}t.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture,s.TEXTURE0+L)}const me={[xs]:s.REPEAT,[pi]:s.CLAMP_TO_EDGE,[Sl]:s.MIRRORED_REPEAT},Te={[hn]:s.NEAREST,[hu]:s.NEAREST_MIPMAP_NEAREST,[ml]:s.NEAREST_MIPMAP_LINEAR,[Hn]:s.LINEAR,[Tp]:s.LINEAR_MIPMAP_NEAREST,[ys]:s.LINEAR_MIPMAP_LINEAR},Me={[B_]:s.NEVER,[W_]:s.ALWAYS,[k_]:s.LESS,[Op]:s.LEQUAL,[z_]:s.EQUAL,[V_]:s.GEQUAL,[H_]:s.GREATER,[G_]:s.NOTEQUAL};function ae(U,L,re){if(re?(s.texParameteri(U,s.TEXTURE_WRAP_S,me[L.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,me[L.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,me[L.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,Te[L.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,Te[L.minFilter])):(s.texParameteri(U,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(U,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(L.wrapS!==pi||L.wrapT!==pi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(U,s.TEXTURE_MAG_FILTER,O(L.magFilter)),s.texParameteri(U,s.TEXTURE_MIN_FILTER,O(L.minFilter)),L.minFilter!==hn&&L.minFilter!==Hn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),L.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,Me[L.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ve=e.get("EXT_texture_filter_anisotropic");if(L.magFilter===hn||L.minFilter!==ml&&L.minFilter!==ys||L.type===cr&&e.has("OES_texture_float_linear")===!1||a===!1&&L.type===Ci&&e.has("OES_texture_half_float_linear")===!1)return;(L.anisotropy>1||n.get(L).__currentAnisotropy)&&(s.texParameterf(U,ve.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,i.getMaxAnisotropy())),n.get(L).__currentAnisotropy=L.anisotropy)}}function _e(U,L){let re=!1;U.__webglInit===void 0&&(U.__webglInit=!0,L.addEventListener("dispose",p));const ve=L.source;let xe=m.get(ve);xe===void 0&&(xe={},m.set(ve,xe));const be=X(L);if(be!==U.__cacheKey){xe[be]===void 0&&(xe[be]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,re=!0),xe[be].usedTimes++;const pe=xe[U.__cacheKey];pe!==void 0&&(xe[U.__cacheKey].usedTimes--,pe.usedTimes===0&&D(L)),U.__cacheKey=be,U.__webglTexture=xe[be].texture}return re}function Le(U,L,re){let ve=s.TEXTURE_2D;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(ve=s.TEXTURE_2D_ARRAY),L.isData3DTexture&&(ve=s.TEXTURE_3D);const xe=_e(U,L),be=L.source;t.bindTexture(ve,U.__webglTexture,s.TEXTURE0+re);const pe=n.get(be);if(be.version!==pe.__version||xe===!0){t.activeTexture(s.TEXTURE0+re);const Ee=Pt.getPrimaries(Pt.workingColorSpace),Ue=L.colorSpace===gi?null:Pt.getPrimaries(L.colorSpace),Qe=L.colorSpace===gi||Ee===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,L.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,L.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);const dt=g(L)&&x(L.image)===!1;let ye=y(L.image,dt,!1,i.maxTextureSize);ye=Je(L,ye);const Lt=x(ye)||a,ct=r.convert(L.format,L.colorSpace);let qe=r.convert(L.type),ze=R(L.internalFormat,ct,qe,L.colorSpace,L.isVideoTexture);ae(ve,L,Lt);let Ie;const ft=L.mipmaps,At=a&&L.isVideoTexture!==!0&&ze!==Lp,Xt=pe.__version===void 0||xe===!0,pt=N(L,ye,Lt);if(L.isDepthTexture)ze=s.DEPTH_COMPONENT,a?L.type===cr?ze=s.DEPTH_COMPONENT32F:L.type===Cr?ze=s.DEPTH_COMPONENT24:L.type===hs?ze=s.DEPTH24_STENCIL8:ze=s.DEPTH_COMPONENT16:L.type===cr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),L.format===ds&&ze===s.DEPTH_COMPONENT&&L.type!==qu&&L.type!==Cr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),L.type=Cr,qe=r.convert(L.type)),L.format===go&&ze===s.DEPTH_COMPONENT&&(ze=s.DEPTH_STENCIL,L.type!==hs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),L.type=hs,qe=r.convert(L.type))),Xt&&(At?t.texStorage2D(s.TEXTURE_2D,1,ze,ye.width,ye.height):t.texImage2D(s.TEXTURE_2D,0,ze,ye.width,ye.height,0,ct,qe,null));else if(L.isDataTexture)if(ft.length>0&&Lt){At&&Xt&&t.texStorage2D(s.TEXTURE_2D,pt,ze,ft[0].width,ft[0].height);for(let we=0,z=ft.length;we<z;we++)Ie=ft[we],At?t.texSubImage2D(s.TEXTURE_2D,we,0,0,Ie.width,Ie.height,ct,qe,Ie.data):t.texImage2D(s.TEXTURE_2D,we,ze,Ie.width,Ie.height,0,ct,qe,Ie.data);L.generateMipmaps=!1}else At?(Xt&&t.texStorage2D(s.TEXTURE_2D,pt,ze,ye.width,ye.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ye.width,ye.height,ct,qe,ye.data)):t.texImage2D(s.TEXTURE_2D,0,ze,ye.width,ye.height,0,ct,qe,ye.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){At&&Xt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,pt,ze,ft[0].width,ft[0].height,ye.depth);for(let we=0,z=ft.length;we<z;we++)Ie=ft[we],L.format!==mi?ct!==null?At?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,we,0,0,0,Ie.width,Ie.height,ye.depth,ct,Ie.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,we,ze,Ie.width,Ie.height,ye.depth,0,Ie.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):At?t.texSubImage3D(s.TEXTURE_2D_ARRAY,we,0,0,0,Ie.width,Ie.height,ye.depth,ct,qe,Ie.data):t.texImage3D(s.TEXTURE_2D_ARRAY,we,ze,Ie.width,Ie.height,ye.depth,0,ct,qe,Ie.data)}else{At&&Xt&&t.texStorage2D(s.TEXTURE_2D,pt,ze,ft[0].width,ft[0].height);for(let we=0,z=ft.length;we<z;we++)Ie=ft[we],L.format!==mi?ct!==null?At?t.compressedTexSubImage2D(s.TEXTURE_2D,we,0,0,Ie.width,Ie.height,ct,Ie.data):t.compressedTexImage2D(s.TEXTURE_2D,we,ze,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):At?t.texSubImage2D(s.TEXTURE_2D,we,0,0,Ie.width,Ie.height,ct,qe,Ie.data):t.texImage2D(s.TEXTURE_2D,we,ze,Ie.width,Ie.height,0,ct,qe,Ie.data)}else if(L.isDataArrayTexture)At?(Xt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,pt,ze,ye.width,ye.height,ye.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,ct,qe,ye.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,ze,ye.width,ye.height,ye.depth,0,ct,qe,ye.data);else if(L.isData3DTexture)At?(Xt&&t.texStorage3D(s.TEXTURE_3D,pt,ze,ye.width,ye.height,ye.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,ct,qe,ye.data)):t.texImage3D(s.TEXTURE_3D,0,ze,ye.width,ye.height,ye.depth,0,ct,qe,ye.data);else if(L.isFramebufferTexture){if(Xt)if(At)t.texStorage2D(s.TEXTURE_2D,pt,ze,ye.width,ye.height);else{let we=ye.width,z=ye.height;for(let Re=0;Re<pt;Re++)t.texImage2D(s.TEXTURE_2D,Re,ze,we,z,0,ct,qe,null),we>>=1,z>>=1}}else if(ft.length>0&&Lt){At&&Xt&&t.texStorage2D(s.TEXTURE_2D,pt,ze,ft[0].width,ft[0].height);for(let we=0,z=ft.length;we<z;we++)Ie=ft[we],At?t.texSubImage2D(s.TEXTURE_2D,we,0,0,ct,qe,Ie):t.texImage2D(s.TEXTURE_2D,we,ze,ct,qe,Ie);L.generateMipmaps=!1}else At?(Xt&&t.texStorage2D(s.TEXTURE_2D,pt,ze,ye.width,ye.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ct,qe,ye)):t.texImage2D(s.TEXTURE_2D,0,ze,ct,qe,ye);C(L,Lt)&&A(ve),pe.__version=be.version,L.onUpdate&&L.onUpdate(L)}U.__version=L.version}function We(U,L,re){if(L.image.length!==6)return;const ve=_e(U,L),xe=L.source;t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+re);const be=n.get(xe);if(xe.version!==be.__version||ve===!0){t.activeTexture(s.TEXTURE0+re);const pe=Pt.getPrimaries(Pt.workingColorSpace),Ee=L.colorSpace===gi?null:Pt.getPrimaries(L.colorSpace),Ue=L.colorSpace===gi||pe===Ee?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,L.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,L.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const Qe=L.isCompressedTexture||L.image[0].isCompressedTexture,dt=L.image[0]&&L.image[0].isDataTexture,ye=[];for(let we=0;we<6;we++)!Qe&&!dt?ye[we]=y(L.image[we],!1,!0,i.maxCubemapSize):ye[we]=dt?L.image[we].image:L.image[we],ye[we]=Je(L,ye[we]);const Lt=ye[0],ct=x(Lt)||a,qe=r.convert(L.format,L.colorSpace),ze=r.convert(L.type),Ie=R(L.internalFormat,qe,ze,L.colorSpace),ft=a&&L.isVideoTexture!==!0,At=be.__version===void 0||ve===!0;let Xt=N(L,Lt,ct);ae(s.TEXTURE_CUBE_MAP,L,ct);let pt;if(Qe){ft&&At&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Xt,Ie,Lt.width,Lt.height);for(let we=0;we<6;we++){pt=ye[we].mipmaps;for(let z=0;z<pt.length;z++){const Re=pt[z];L.format!==mi?qe!==null?ft?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,z,0,0,Re.width,Re.height,qe,Re.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,z,Ie,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ft?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,z,0,0,Re.width,Re.height,qe,ze,Re.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,z,Ie,Re.width,Re.height,0,qe,ze,Re.data)}}}else{pt=L.mipmaps,ft&&At&&(pt.length>0&&Xt++,t.texStorage2D(s.TEXTURE_CUBE_MAP,Xt,Ie,ye[0].width,ye[0].height));for(let we=0;we<6;we++)if(dt){ft?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,ye[we].width,ye[we].height,qe,ze,ye[we].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Ie,ye[we].width,ye[we].height,0,qe,ze,ye[we].data);for(let z=0;z<pt.length;z++){const Pe=pt[z].image[we].image;ft?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,z+1,0,0,Pe.width,Pe.height,qe,ze,Pe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,z+1,Ie,Pe.width,Pe.height,0,qe,ze,Pe.data)}}else{ft?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,qe,ze,ye[we]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Ie,qe,ze,ye[we]);for(let z=0;z<pt.length;z++){const Re=pt[z];ft?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,z+1,0,0,qe,ze,Re.image[we]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,z+1,Ie,qe,ze,Re.image[we])}}}C(L,ct)&&A(s.TEXTURE_CUBE_MAP),be.__version=xe.version,L.onUpdate&&L.onUpdate(L)}U.__version=L.version}function Ve(U,L,re,ve,xe,be){const pe=r.convert(re.format,re.colorSpace),Ee=r.convert(re.type),Ue=R(re.internalFormat,pe,Ee,re.colorSpace);if(!n.get(L).__hasExternalTextures){const dt=Math.max(1,L.width>>be),ye=Math.max(1,L.height>>be);xe===s.TEXTURE_3D||xe===s.TEXTURE_2D_ARRAY?t.texImage3D(xe,be,Ue,dt,ye,L.depth,0,pe,Ee,null):t.texImage2D(xe,be,Ue,dt,ye,0,pe,Ee,null)}t.bindFramebuffer(s.FRAMEBUFFER,U),Be(L)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ve,xe,n.get(re).__webglTexture,0,st(L)):(xe===s.TEXTURE_2D||xe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ve,xe,n.get(re).__webglTexture,be),t.bindFramebuffer(s.FRAMEBUFFER,null)}function at(U,L,re){if(s.bindRenderbuffer(s.RENDERBUFFER,U),L.depthBuffer&&!L.stencilBuffer){let ve=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(re||Be(L)){const xe=L.depthTexture;xe&&xe.isDepthTexture&&(xe.type===cr?ve=s.DEPTH_COMPONENT32F:xe.type===Cr&&(ve=s.DEPTH_COMPONENT24));const be=st(L);Be(L)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,be,ve,L.width,L.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,be,ve,L.width,L.height)}else s.renderbufferStorage(s.RENDERBUFFER,ve,L.width,L.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,U)}else if(L.depthBuffer&&L.stencilBuffer){const ve=st(L);re&&Be(L)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ve,s.DEPTH24_STENCIL8,L.width,L.height):Be(L)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ve,s.DEPTH24_STENCIL8,L.width,L.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,U)}else{const ve=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let xe=0;xe<ve.length;xe++){const be=ve[xe],pe=r.convert(be.format,be.colorSpace),Ee=r.convert(be.type),Ue=R(be.internalFormat,pe,Ee,be.colorSpace),Qe=st(L);re&&Be(L)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Qe,Ue,L.width,L.height):Be(L)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Qe,Ue,L.width,L.height):s.renderbufferStorage(s.RENDERBUFFER,Ue,L.width,L.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function lt(U,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,U),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(L.depthTexture).__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)&&(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),Y(L.depthTexture,0);const ve=n.get(L.depthTexture).__webglTexture,xe=st(L);if(L.depthTexture.format===ds)Be(L)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0,xe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0);else if(L.depthTexture.format===go)Be(L)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0,xe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function He(U){const L=n.get(U),re=U.isWebGLCubeRenderTarget===!0;if(U.depthTexture&&!L.__autoAllocateDepthBuffer){if(re)throw new Error("target.depthTexture not supported in Cube render targets");lt(L.__webglFramebuffer,U)}else if(re){L.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)t.bindFramebuffer(s.FRAMEBUFFER,L.__webglFramebuffer[ve]),L.__webglDepthbuffer[ve]=s.createRenderbuffer(),at(L.__webglDepthbuffer[ve],U,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,L.__webglFramebuffer),L.__webglDepthbuffer=s.createRenderbuffer(),at(L.__webglDepthbuffer,U,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Mt(U,L,re){const ve=n.get(U);L!==void 0&&Ve(ve.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),re!==void 0&&He(U)}function Q(U){const L=U.texture,re=n.get(U),ve=n.get(L);U.addEventListener("dispose",G),U.isWebGLMultipleRenderTargets!==!0&&(ve.__webglTexture===void 0&&(ve.__webglTexture=s.createTexture()),ve.__version=L.version,o.memory.textures++);const xe=U.isWebGLCubeRenderTarget===!0,be=U.isWebGLMultipleRenderTargets===!0,pe=x(U)||a;if(xe){re.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(a&&L.mipmaps&&L.mipmaps.length>0){re.__webglFramebuffer[Ee]=[];for(let Ue=0;Ue<L.mipmaps.length;Ue++)re.__webglFramebuffer[Ee][Ue]=s.createFramebuffer()}else re.__webglFramebuffer[Ee]=s.createFramebuffer()}else{if(a&&L.mipmaps&&L.mipmaps.length>0){re.__webglFramebuffer=[];for(let Ee=0;Ee<L.mipmaps.length;Ee++)re.__webglFramebuffer[Ee]=s.createFramebuffer()}else re.__webglFramebuffer=s.createFramebuffer();if(be)if(i.drawBuffers){const Ee=U.texture;for(let Ue=0,Qe=Ee.length;Ue<Qe;Ue++){const dt=n.get(Ee[Ue]);dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&U.samples>0&&Be(U)===!1){const Ee=be?L:[L];re.__webglMultisampledFramebuffer=s.createFramebuffer(),re.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let Ue=0;Ue<Ee.length;Ue++){const Qe=Ee[Ue];re.__webglColorRenderbuffer[Ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,re.__webglColorRenderbuffer[Ue]);const dt=r.convert(Qe.format,Qe.colorSpace),ye=r.convert(Qe.type),Lt=R(Qe.internalFormat,dt,ye,Qe.colorSpace,U.isXRRenderTarget===!0),ct=st(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,Lt,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,re.__webglColorRenderbuffer[Ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(re.__webglDepthRenderbuffer=s.createRenderbuffer(),at(re.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(xe){t.bindTexture(s.TEXTURE_CUBE_MAP,ve.__webglTexture),ae(s.TEXTURE_CUBE_MAP,L,pe);for(let Ee=0;Ee<6;Ee++)if(a&&L.mipmaps&&L.mipmaps.length>0)for(let Ue=0;Ue<L.mipmaps.length;Ue++)Ve(re.__webglFramebuffer[Ee][Ue],U,L,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ue);else Ve(re.__webglFramebuffer[Ee],U,L,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);C(L,pe)&&A(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){const Ee=U.texture;for(let Ue=0,Qe=Ee.length;Ue<Qe;Ue++){const dt=Ee[Ue],ye=n.get(dt);t.bindTexture(s.TEXTURE_2D,ye.__webglTexture),ae(s.TEXTURE_2D,dt,pe),Ve(re.__webglFramebuffer,U,dt,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,0),C(dt,pe)&&A(s.TEXTURE_2D)}t.unbindTexture()}else{let Ee=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(a?Ee=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ee,ve.__webglTexture),ae(Ee,L,pe),a&&L.mipmaps&&L.mipmaps.length>0)for(let Ue=0;Ue<L.mipmaps.length;Ue++)Ve(re.__webglFramebuffer[Ue],U,L,s.COLOR_ATTACHMENT0,Ee,Ue);else Ve(re.__webglFramebuffer,U,L,s.COLOR_ATTACHMENT0,Ee,0);C(L,pe)&&A(Ee),t.unbindTexture()}U.depthBuffer&&He(U)}function on(U){const L=x(U)||a,re=U.isWebGLMultipleRenderTargets===!0?U.texture:[U.texture];for(let ve=0,xe=re.length;ve<xe;ve++){const be=re[ve];if(C(be,L)){const pe=U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Ee=n.get(be).__webglTexture;t.bindTexture(pe,Ee),A(pe),t.unbindTexture()}}}function Ye(U){if(a&&U.samples>0&&Be(U)===!1){const L=U.isWebGLMultipleRenderTargets?U.texture:[U.texture],re=U.width,ve=U.height;let xe=s.COLOR_BUFFER_BIT;const be=[],pe=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ee=n.get(U),Ue=U.isWebGLMultipleRenderTargets===!0;if(Ue)for(let Qe=0;Qe<L.length;Qe++)t.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Qe=0;Qe<L.length;Qe++){be.push(s.COLOR_ATTACHMENT0+Qe),U.depthBuffer&&be.push(pe);const dt=Ee.__ignoreDepthValues!==void 0?Ee.__ignoreDepthValues:!1;if(dt===!1&&(U.depthBuffer&&(xe|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&(xe|=s.STENCIL_BUFFER_BIT)),Ue&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ee.__webglColorRenderbuffer[Qe]),dt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[pe]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[pe])),Ue){const ye=n.get(L[Qe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ye,0)}s.blitFramebuffer(0,0,re,ve,0,0,re,ve,xe,s.NEAREST),u&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,be)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ue)for(let Qe=0;Qe<L.length;Qe++){t.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qe,s.RENDERBUFFER,Ee.__webglColorRenderbuffer[Qe]);const dt=n.get(L[Qe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qe,s.TEXTURE_2D,dt,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}}function st(U){return Math.min(i.maxSamples,U.samples)}function Be(U){const L=n.get(U);return a&&U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function Bt(U){const L=o.render.frame;f.get(U)!==L&&(f.set(U,L),U.update())}function Je(U,L){const re=U.colorSpace,ve=U.format,xe=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||U.format===mu||re!==gn&&re!==gi&&(Pt.getTransfer(re)===Wt?a===!1?e.has("EXT_sRGB")===!0&&ve===mi?(U.format=mu,U.minFilter=Hn,U.generateMipmaps=!1):L=Up.sRGBToLinear(L):(ve!==mi||xe!==Ir)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",re)),L}this.allocateTextureUnit=k,this.resetTextureUnits=$,this.setTexture2D=Y,this.setTexture2DArray=le,this.setTexture3D=ce,this.setTextureCube=fe,this.rebindTextures=Mt,this.setupRenderTarget=Q,this.updateRenderTargetMipmap=on,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=Ve,this.useMultisampledRTT=Be}function rS(s,e,t){const n=t.isWebGL2;function i(r,o=gi){let a;const l=Pt.getTransfer(o);if(r===Ir)return s.UNSIGNED_BYTE;if(r===Ep)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Ap)return s.UNSIGNED_SHORT_5_5_5_1;if(r===E_)return s.BYTE;if(r===A_)return s.SHORT;if(r===qu)return s.UNSIGNED_SHORT;if(r===Mp)return s.INT;if(r===Cr)return s.UNSIGNED_INT;if(r===cr)return s.FLOAT;if(r===Ci)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===w_)return s.ALPHA;if(r===mi)return s.RGBA;if(r===C_)return s.LUMINANCE;if(r===R_)return s.LUMINANCE_ALPHA;if(r===ds)return s.DEPTH_COMPONENT;if(r===go)return s.DEPTH_STENCIL;if(r===mu)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===L_)return s.RED;if(r===wp)return s.RED_INTEGER;if(r===P_)return s.RG;if(r===Cp)return s.RG_INTEGER;if(r===Rp)return s.RGBA_INTEGER;if(r===dc||r===pc||r===mc||r===gc)if(l===Wt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===dc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===pc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===mc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===gc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===dc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===pc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===mc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===gc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Jf||r===Qf||r===$f||r===eh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Jf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Qf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===$f)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===eh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Lp)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===th||r===nh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===th)return l===Wt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===nh)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ih||r===rh||r===sh||r===oh||r===ah||r===lh||r===ch||r===uh||r===fh||r===hh||r===dh||r===ph||r===mh||r===gh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===ih)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===rh)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===sh)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===oh)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ah)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===lh)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ch)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===uh)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===fh)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===hh)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===dh)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ph)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===mh)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===gh)return l===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===_c||r===_h||r===vh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===_c)return l===Wt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===_h)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===vh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===D_||r===xh||r===yh||r===bh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===_c)return a.COMPRESSED_RED_RGTC1_EXT;if(r===xh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===yh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===bh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===hs?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class sS extends On{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class us extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const oS={type:"move"};class Hc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new us,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new us,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new us,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const y of e.hand.values()){const x=t.getJointPose(y,n),g=this._getHandJoint(u,y);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}const f=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],m=f.position.distanceTo(d.position),v=.02,S=.005;u.inputState.pinching&&m>v+S?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&m<=v-S&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(oS)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new us;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class aS extends Co{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,u=null,f=null,d=null,m=null,v=null,S=null;const y=t.getContextAttributes();let x=null,g=null;const C=[],A=[],R=new Ze;let N=null;const O=new On;O.layers.enable(1),O.viewport=new Ft;const p=new On;p.layers.enable(2),p.viewport=new Ft;const G=[O,p],E=new sS;E.layers.enable(1),E.layers.enable(2);let D=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let _e=C[ae];return _e===void 0&&(_e=new Hc,C[ae]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(ae){let _e=C[ae];return _e===void 0&&(_e=new Hc,C[ae]=_e),_e.getGripSpace()},this.getHand=function(ae){let _e=C[ae];return _e===void 0&&(_e=new Hc,C[ae]=_e),_e.getHandSpace()};function q(ae){const _e=A.indexOf(ae.inputSource);if(_e===-1)return;const Le=C[_e];Le!==void 0&&(Le.update(ae.inputSource,ae.frame,u||o),Le.dispatchEvent({type:ae.type,data:ae.inputSource}))}function $(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",k);for(let ae=0;ae<C.length;ae++){const _e=A[ae];_e!==null&&(A[ae]=null,C[ae].disconnect(_e))}D=null,Z=null,e.setRenderTarget(x),v=null,m=null,d=null,i=null,g=null,Me.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){r=ae,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){a=ae,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(ae){u=ae},this.getBaseLayer=function(){return m!==null?m:v},this.getBinding=function(){return d},this.getFrame=function(){return S},this.getSession=function(){return i},this.setSession=async function(ae){if(i=ae,i!==null){if(x=e.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",$),i.addEventListener("inputsourceschange",k),y.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(R),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const _e={antialias:i.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};v=new XRWebGLLayer(i,t,_e),i.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),g=new jn(v.framebufferWidth,v.framebufferHeight,{format:mi,type:Ir,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let _e=null,Le=null,We=null;y.depth&&(We=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=y.stencil?go:ds,Le=y.stencil?hs:Cr);const Ve={colorFormat:t.RGBA8,depthFormat:We,scaleFactor:r};d=new XRWebGLBinding(i,t),m=d.createProjectionLayer(Ve),i.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),g=new jn(m.textureWidth,m.textureHeight,{format:mi,type:Ir,depthTexture:new jp(m.textureWidth,m.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const at=e.properties.get(g);at.__ignoreDepthValues=m.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await i.requestReferenceSpace(a),Me.setContext(i),Me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function k(ae){for(let _e=0;_e<ae.removed.length;_e++){const Le=ae.removed[_e],We=A.indexOf(Le);We>=0&&(A[We]=null,C[We].disconnect(Le))}for(let _e=0;_e<ae.added.length;_e++){const Le=ae.added[_e];let We=A.indexOf(Le);if(We===-1){for(let at=0;at<C.length;at++)if(at>=A.length){A.push(Le),We=at;break}else if(A[at]===null){A[at]=Le,We=at;break}if(We===-1)break}const Ve=C[We];Ve&&Ve.connect(Le)}}const X=new V,Y=new V;function le(ae,_e,Le){X.setFromMatrixPosition(_e.matrixWorld),Y.setFromMatrixPosition(Le.matrixWorld);const We=X.distanceTo(Y),Ve=_e.projectionMatrix.elements,at=Le.projectionMatrix.elements,lt=Ve[14]/(Ve[10]-1),He=Ve[14]/(Ve[10]+1),Mt=(Ve[9]+1)/Ve[5],Q=(Ve[9]-1)/Ve[5],on=(Ve[8]-1)/Ve[0],Ye=(at[8]+1)/at[0],st=lt*on,Be=lt*Ye,Bt=We/(-on+Ye),Je=Bt*-on;_e.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(Je),ae.translateZ(Bt),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert();const U=lt+Bt,L=He+Bt,re=st-Je,ve=Be+(We-Je),xe=Mt*He/L*U,be=Q*He/L*U;ae.projectionMatrix.makePerspective(re,ve,xe,be,U,L),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}function ce(ae,_e){_e===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(_e.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(i===null)return;E.near=p.near=O.near=ae.near,E.far=p.far=O.far=ae.far,(D!==E.near||Z!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),D=E.near,Z=E.far);const _e=ae.parent,Le=E.cameras;ce(E,_e);for(let We=0;We<Le.length;We++)ce(Le[We],_e);Le.length===2?le(E,O,p):E.projectionMatrix.copy(O.projectionMatrix),fe(ae,E,_e)};function fe(ae,_e,Le){Le===null?ae.matrix.copy(_e.matrixWorld):(ae.matrix.copy(Le.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(_e.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(_e.projectionMatrix),ae.projectionMatrixInverse.copy(_e.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=vo*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(m===null&&v===null))return l},this.setFoveation=function(ae){l=ae,m!==null&&(m.fixedFoveation=ae),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=ae)};let me=null;function Te(ae,_e){if(f=_e.getViewerPose(u||o),S=_e,f!==null){const Le=f.views;v!==null&&(e.setRenderTargetFramebuffer(g,v.framebuffer),e.setRenderTarget(g));let We=!1;Le.length!==E.cameras.length&&(E.cameras.length=0,We=!0);for(let Ve=0;Ve<Le.length;Ve++){const at=Le[Ve];let lt=null;if(v!==null)lt=v.getViewport(at);else{const Mt=d.getViewSubImage(m,at);lt=Mt.viewport,Ve===0&&(e.setRenderTargetTextures(g,Mt.colorTexture,m.ignoreDepthValues?void 0:Mt.depthStencilTexture),e.setRenderTarget(g))}let He=G[Ve];He===void 0&&(He=new On,He.layers.enable(Ve),He.viewport=new Ft,G[Ve]=He),He.matrix.fromArray(at.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(at.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(lt.x,lt.y,lt.width,lt.height),Ve===0&&(E.matrix.copy(He.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),We===!0&&E.cameras.push(He)}}for(let Le=0;Le<C.length;Le++){const We=A[Le],Ve=C[Le];We!==null&&Ve!==void 0&&Ve.update(We,_e,u||o)}me&&me(ae,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),S=null}const Me=new Xp;Me.setAnimationLoop(Te),this.setAnimationLoop=function(ae){me=ae},this.dispose=function(){}}}function lS(s,e){function t(x,g){x.matrixAutoUpdate===!0&&x.updateMatrix(),g.value.copy(x.matrix)}function n(x,g){g.color.getRGB(x.fogColor.value,Gp(s)),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function i(x,g,C,A,R){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(x,g):g.isMeshToonMaterial?(r(x,g),d(x,g)):g.isMeshPhongMaterial?(r(x,g),f(x,g)):g.isMeshStandardMaterial?(r(x,g),m(x,g),g.isMeshPhysicalMaterial&&v(x,g,R)):g.isMeshMatcapMaterial?(r(x,g),S(x,g)):g.isMeshDepthMaterial?r(x,g):g.isMeshDistanceMaterial?(r(x,g),y(x,g)):g.isMeshNormalMaterial?r(x,g):g.isLineBasicMaterial?(o(x,g),g.isLineDashedMaterial&&a(x,g)):g.isPointsMaterial?l(x,g,C,A):g.isSpriteMaterial?u(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map,t(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,t(g.alphaMap,x.alphaMapTransform)),g.bumpMap&&(x.bumpMap.value=g.bumpMap,t(g.bumpMap,x.bumpMapTransform),x.bumpScale.value=g.bumpScale,g.side===Wn&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,t(g.normalMap,x.normalMapTransform),x.normalScale.value.copy(g.normalScale),g.side===Wn&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,t(g.displacementMap,x.displacementMapTransform),x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,x.emissiveMapTransform)),g.specularMap&&(x.specularMap.value=g.specularMap,t(g.specularMap,x.specularMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);const C=e.get(g).envMap;if(C&&(x.envMap.value=C,x.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap){x.lightMap.value=g.lightMap;const A=s._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=g.lightMapIntensity*A,t(g.lightMap,x.lightMapTransform)}g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,x.aoMapTransform))}function o(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,g.map&&(x.map.value=g.map,t(g.map,x.mapTransform))}function a(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function l(x,g,C,A){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*C,x.scale.value=A*.5,g.map&&(x.map.value=g.map,t(g.map,x.uvTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,t(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function u(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map,t(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,t(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function f(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function d(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function m(x,g){x.metalness.value=g.metalness,g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,x.metalnessMapTransform)),x.roughness.value=g.roughness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,x.roughnessMapTransform)),e.get(g).envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function v(x,g,C){x.ior.value=g.ior,g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,x.sheenColorMapTransform)),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,x.sheenRoughnessMapTransform))),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,x.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(x.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Wn&&x.clearcoatNormalScale.value.negate())),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,x.iridescenceMapTransform)),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=C.texture,x.transmissionSamplerSize.value.set(C.width,C.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,x.transmissionMapTransform)),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(x.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(x.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,x.specularColorMapTransform)),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,x.specularIntensityMapTransform))}function S(x,g){g.matcap&&(x.matcap.value=g.matcap)}function y(x,g){const C=e.get(g).light;x.referencePosition.value.setFromMatrixPosition(C.matrixWorld),x.nearDistance.value=C.shadow.camera.near,x.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function cS(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(C,A){const R=A.program;n.uniformBlockBinding(C,R)}function u(C,A){let R=i[C.id];R===void 0&&(S(C),R=f(C),i[C.id]=R,C.addEventListener("dispose",x));const N=A.program;n.updateUBOMapping(C,N);const O=e.render.frame;r[C.id]!==O&&(m(C),r[C.id]=O)}function f(C){const A=d();C.__bindingPointIndex=A;const R=s.createBuffer(),N=C.__size,O=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,N,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,A,R),R}function d(){for(let C=0;C<a;C++)if(o.indexOf(C)===-1)return o.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(C){const A=i[C.id],R=C.uniforms,N=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,A);for(let O=0,p=R.length;O<p;O++){const G=Array.isArray(R[O])?R[O]:[R[O]];for(let E=0,D=G.length;E<D;E++){const Z=G[E];if(v(Z,O,E,N)===!0){const q=Z.__offset,$=Array.isArray(Z.value)?Z.value:[Z.value];let k=0;for(let X=0;X<$.length;X++){const Y=$[X],le=y(Y);typeof Y=="number"||typeof Y=="boolean"?(Z.__data[0]=Y,s.bufferSubData(s.UNIFORM_BUFFER,q+k,Z.__data)):Y.isMatrix3?(Z.__data[0]=Y.elements[0],Z.__data[1]=Y.elements[1],Z.__data[2]=Y.elements[2],Z.__data[3]=0,Z.__data[4]=Y.elements[3],Z.__data[5]=Y.elements[4],Z.__data[6]=Y.elements[5],Z.__data[7]=0,Z.__data[8]=Y.elements[6],Z.__data[9]=Y.elements[7],Z.__data[10]=Y.elements[8],Z.__data[11]=0):(Y.toArray(Z.__data,k),k+=le.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,q,Z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function v(C,A,R,N){const O=C.value,p=A+"_"+R;if(N[p]===void 0)return typeof O=="number"||typeof O=="boolean"?N[p]=O:N[p]=O.clone(),!0;{const G=N[p];if(typeof O=="number"||typeof O=="boolean"){if(G!==O)return N[p]=O,!0}else if(G.equals(O)===!1)return G.copy(O),!0}return!1}function S(C){const A=C.uniforms;let R=0;const N=16;for(let p=0,G=A.length;p<G;p++){const E=Array.isArray(A[p])?A[p]:[A[p]];for(let D=0,Z=E.length;D<Z;D++){const q=E[D],$=Array.isArray(q.value)?q.value:[q.value];for(let k=0,X=$.length;k<X;k++){const Y=$[k],le=y(Y),ce=R%N;ce!==0&&N-ce<le.boundary&&(R+=N-ce),q.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=R,R+=le.storage}}}const O=R%N;return O>0&&(R+=N-O),C.__size=R,C.__cache={},this}function y(C){const A={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(A.boundary=4,A.storage=4):C.isVector2?(A.boundary=8,A.storage=8):C.isVector3||C.isColor?(A.boundary=16,A.storage=12):C.isVector4?(A.boundary=16,A.storage=16):C.isMatrix3?(A.boundary=48,A.storage=48):C.isMatrix4?(A.boundary=64,A.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),A}function x(C){const A=C.target;A.removeEventListener("dispose",x);const R=o.indexOf(A.__bindingPointIndex);o.splice(R,1),s.deleteBuffer(i[A.id]),delete i[A.id],delete r[A.id]}function g(){for(const C in i)s.deleteBuffer(i[C]);o=[],i={},r={}}return{bind:l,update:u,dispose:g}}class Qp{constructor(e={}){const{canvas:t=ov(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let m;n!==null?m=n.getContextAttributes().alpha:m=o;const v=new Uint32Array(4),S=new Int32Array(4);let y=null,x=null;const g=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yt,this._useLegacyLights=!1,this.toneMapping=Or,this.toneMappingExposure=1;const A=this;let R=!1,N=0,O=0,p=null,G=-1,E=null;const D=new Ft,Z=new Ft;let q=null;const $=new je(0);let k=0,X=t.width,Y=t.height,le=1,ce=null,fe=null;const me=new Ft(0,0,X,Y),Te=new Ft(0,0,X,Y);let Me=!1;const ae=new Ju;let _e=!1,Le=!1,We=null;const Ve=new ut,at=new Ze,lt=new V,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Mt(){return p===null?le:1}let Q=n;function on(P,j){for(let ne=0;ne<P.length;ne++){const se=P[ne],ee=t.getContext(se,j);if(ee!==null)return ee}return null}try{const P={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xu}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",z,!1),t.addEventListener("webglcontextcreationerror",Re,!1),Q===null){const j=["webgl2","webgl","experimental-webgl"];if(A.isWebGL1Renderer===!0&&j.shift(),Q=on(j,P),Q===null)throw on(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Q instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Q.getShaderPrecisionFormat===void 0&&(Q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Ye,st,Be,Bt,Je,U,L,re,ve,xe,be,pe,Ee,Ue,Qe,dt,ye,Lt,ct,qe,ze,Ie,ft,At;function Xt(){Ye=new xy(Q),st=new dy(Q,Ye,e),Ye.init(st),Ie=new rS(Q,Ye,st),Be=new nS(Q,Ye,st),Bt=new Sy(Q),Je=new Gb,U=new iS(Q,Ye,Be,Je,st,Ie,Bt),L=new my(A),re=new vy(A),ve=new Lv(Q,st),ft=new fy(Q,Ye,ve,st),xe=new yy(Q,ve,Bt,ft),be=new Ay(Q,xe,ve,Bt),ct=new Ey(Q,st,U),dt=new py(Je),pe=new Hb(A,L,re,Ye,st,ft,dt),Ee=new lS(A,Je),Ue=new Wb,Qe=new Zb(Ye,st),Lt=new uy(A,L,re,Be,be,m,l),ye=new tS(A,be,st),At=new cS(Q,Bt,st,Be),qe=new hy(Q,Ye,Bt,st),ze=new by(Q,Ye,Bt,st),Bt.programs=pe.programs,A.capabilities=st,A.extensions=Ye,A.properties=Je,A.renderLists=Ue,A.shadowMap=ye,A.state=Be,A.info=Bt}Xt();const pt=new aS(A,Q);this.xr=pt,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const P=Ye.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Ye.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(P){P!==void 0&&(le=P,this.setSize(X,Y,!1))},this.getSize=function(P){return P.set(X,Y)},this.setSize=function(P,j,ne=!0){if(pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=P,Y=j,t.width=Math.floor(P*le),t.height=Math.floor(j*le),ne===!0&&(t.style.width=P+"px",t.style.height=j+"px"),this.setViewport(0,0,P,j)},this.getDrawingBufferSize=function(P){return P.set(X*le,Y*le).floor()},this.setDrawingBufferSize=function(P,j,ne){X=P,Y=j,le=ne,t.width=Math.floor(P*ne),t.height=Math.floor(j*ne),this.setViewport(0,0,P,j)},this.getCurrentViewport=function(P){return P.copy(D)},this.getViewport=function(P){return P.copy(me)},this.setViewport=function(P,j,ne,se){P.isVector4?me.set(P.x,P.y,P.z,P.w):me.set(P,j,ne,se),Be.viewport(D.copy(me).multiplyScalar(le).floor())},this.getScissor=function(P){return P.copy(Te)},this.setScissor=function(P,j,ne,se){P.isVector4?Te.set(P.x,P.y,P.z,P.w):Te.set(P,j,ne,se),Be.scissor(Z.copy(Te).multiplyScalar(le).floor())},this.getScissorTest=function(){return Me},this.setScissorTest=function(P){Be.setScissorTest(Me=P)},this.setOpaqueSort=function(P){ce=P},this.setTransparentSort=function(P){fe=P},this.getClearColor=function(P){return P.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(P=!0,j=!0,ne=!0){let se=0;if(P){let ee=!1;if(p!==null){const Oe=p.texture.format;ee=Oe===Rp||Oe===Cp||Oe===wp}if(ee){const Oe=p.texture.type,Ge=Oe===Ir||Oe===Cr||Oe===qu||Oe===hs||Oe===Ep||Oe===Ap,Xe=Lt.getClearColor(),et=Lt.getClearAlpha(),ht=Xe.r,it=Xe.g,ot=Xe.b;Ge?(v[0]=ht,v[1]=it,v[2]=ot,v[3]=et,Q.clearBufferuiv(Q.COLOR,0,v)):(S[0]=ht,S[1]=it,S[2]=ot,S[3]=et,Q.clearBufferiv(Q.COLOR,0,S))}else se|=Q.COLOR_BUFFER_BIT}j&&(se|=Q.DEPTH_BUFFER_BIT),ne&&(se|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",z,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),Ue.dispose(),Qe.dispose(),Je.dispose(),L.dispose(),re.dispose(),be.dispose(),ft.dispose(),At.dispose(),pe.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",xn),pt.removeEventListener("sessionend",Ot),We&&(We.dispose(),We=null),$t.stop()};function we(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const P=Bt.autoReset,j=ye.enabled,ne=ye.autoUpdate,se=ye.needsUpdate,ee=ye.type;Xt(),Bt.autoReset=P,ye.enabled=j,ye.autoUpdate=ne,ye.needsUpdate=se,ye.type=ee}function Re(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Pe(P){const j=P.target;j.removeEventListener("dispose",Pe),$e(j)}function $e(P){Fe(P),Je.remove(P)}function Fe(P){const j=Je.get(P).programs;j!==void 0&&(j.forEach(function(ne){pe.releaseProgram(ne)}),P.isShaderMaterial&&pe.releaseShaderCache(P))}this.renderBufferDirect=function(P,j,ne,se,ee,Oe){j===null&&(j=He);const Ge=ee.isMesh&&ee.matrixWorld.determinant()<0,Xe=Zl(P,j,ne,se,ee);Be.setMaterial(se,Ge);let et=ne.index,ht=1;if(se.wireframe===!0){if(et=xe.getWireframeAttribute(ne),et===void 0)return;ht=2}const it=ne.drawRange,ot=ne.attributes.position;let Kt=it.start*ht,An=(it.start+it.count)*ht;Oe!==null&&(Kt=Math.max(Kt,Oe.start*ht),An=Math.min(An,(Oe.start+Oe.count)*ht)),et!==null?(Kt=Math.max(Kt,0),An=Math.min(An,et.count)):ot!=null&&(Kt=Math.max(Kt,0),An=Math.min(An,ot.count));const ln=An-Kt;if(ln<0||ln===1/0)return;ft.setup(ee,se,Xe,ne,et);let yi,Gt=qe;if(et!==null&&(yi=ve.get(et),Gt=ze,Gt.setIndex(yi)),ee.isMesh)se.wireframe===!0?(Be.setLineWidth(se.wireframeLinewidth*Mt()),Gt.setMode(Q.LINES)):Gt.setMode(Q.TRIANGLES);else if(ee.isLine){let gt=se.linewidth;gt===void 0&&(gt=1),Be.setLineWidth(gt*Mt()),ee.isLineSegments?Gt.setMode(Q.LINES):ee.isLineLoop?Gt.setMode(Q.LINE_LOOP):Gt.setMode(Q.LINE_STRIP)}else ee.isPoints?Gt.setMode(Q.POINTS):ee.isSprite&&Gt.setMode(Q.TRIANGLES);if(ee.isBatchedMesh)Gt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else if(ee.isInstancedMesh)Gt.renderInstances(Kt,ln,ee.count);else if(ne.isInstancedBufferGeometry){const gt=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Yr=Math.min(ne.instanceCount,gt);Gt.renderInstances(Kt,ln,Yr)}else Gt.render(Kt,ln)};function mt(P,j,ne){P.transparent===!0&&P.side===Hi&&P.forceSinglePass===!1?(P.side=Wn,P.needsUpdate=!0,Ps(P,j,ne),P.side=qi,P.needsUpdate=!0,Ps(P,j,ne),P.side=Hi):Ps(P,j,ne)}this.compile=function(P,j,ne=null){ne===null&&(ne=P),x=Qe.get(ne),x.init(),C.push(x),ne.traverseVisible(function(ee){ee.isLight&&ee.layers.test(j.layers)&&(x.pushLight(ee),ee.castShadow&&x.pushShadow(ee))}),P!==ne&&P.traverseVisible(function(ee){ee.isLight&&ee.layers.test(j.layers)&&(x.pushLight(ee),ee.castShadow&&x.pushShadow(ee))}),x.setupLights(A._useLegacyLights);const se=new Set;return P.traverse(function(ee){const Oe=ee.material;if(Oe)if(Array.isArray(Oe))for(let Ge=0;Ge<Oe.length;Ge++){const Xe=Oe[Ge];mt(Xe,ne,ee),se.add(Xe)}else mt(Oe,ne,ee),se.add(Oe)}),C.pop(),x=null,se},this.compileAsync=function(P,j,ne=null){const se=this.compile(P,j,ne);return new Promise(ee=>{function Oe(){if(se.forEach(function(Ge){Je.get(Ge).currentProgram.isReady()&&se.delete(Ge)}),se.size===0){ee(P);return}setTimeout(Oe,10)}Ye.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let Dt=null;function an(P){Dt&&Dt(P)}function xn(){$t.stop()}function Ot(){$t.start()}const $t=new Xp;$t.setAnimationLoop(an),typeof self<"u"&&$t.setContext(self),this.setAnimationLoop=function(P){Dt=P,pt.setAnimationLoop(P),P===null?$t.stop():$t.start()},pt.addEventListener("sessionstart",xn),pt.addEventListener("sessionend",Ot),this.render=function(P,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(j),j=pt.getCamera()),P.isScene===!0&&P.onBeforeRender(A,P,j,p),x=Qe.get(P,C.length),x.init(),C.push(x),Ve.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),ae.setFromProjectionMatrix(Ve),Le=this.localClippingEnabled,_e=dt.init(this.clippingPlanes,Le),y=Ue.get(P,g.length),y.init(),g.push(y),En(P,j,0,A.sortObjects),y.finish(),A.sortObjects===!0&&y.sort(ce,fe),this.info.render.frame++,_e===!0&&dt.beginShadows();const ne=x.state.shadowsArray;if(ye.render(ne,P,j),_e===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Lt.render(y,P),x.setupLights(A._useLegacyLights),j.isArrayCamera){const se=j.cameras;for(let ee=0,Oe=se.length;ee<Oe;ee++){const Ge=se[ee];Cs(y,P,Ge,Ge.viewport)}}else Cs(y,P,j);p!==null&&(U.updateMultisampleRenderTarget(p),U.updateRenderTargetMipmap(p)),P.isScene===!0&&P.onAfterRender(A,P,j),ft.resetDefaultState(),G=-1,E=null,C.pop(),C.length>0?x=C[C.length-1]:x=null,g.pop(),g.length>0?y=g[g.length-1]:y=null};function En(P,j,ne,se){if(P.visible===!1)return;if(P.layers.test(j.layers)){if(P.isGroup)ne=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(j);else if(P.isLight)x.pushLight(P),P.castShadow&&x.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||ae.intersectsSprite(P)){se&&lt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Ve);const Ge=be.update(P),Xe=P.material;Xe.visible&&y.push(P,Ge,Xe,ne,lt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||ae.intersectsObject(P))){const Ge=be.update(P),Xe=P.material;if(se&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),lt.copy(P.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),lt.copy(Ge.boundingSphere.center)),lt.applyMatrix4(P.matrixWorld).applyMatrix4(Ve)),Array.isArray(Xe)){const et=Ge.groups;for(let ht=0,it=et.length;ht<it;ht++){const ot=et[ht],Kt=Xe[ot.materialIndex];Kt&&Kt.visible&&y.push(P,Ge,Kt,ne,lt.z,ot)}}else Xe.visible&&y.push(P,Ge,Xe,ne,lt.z,null)}}const Oe=P.children;for(let Ge=0,Xe=Oe.length;Ge<Xe;Ge++)En(Oe[Ge],j,ne,se)}function Cs(P,j,ne,se){const ee=P.opaque,Oe=P.transmissive,Ge=P.transparent;x.setupLightsView(ne),_e===!0&&dt.setGlobalState(A.clippingPlanes,ne),Oe.length>0&&Rs(ee,Oe,j,ne),se&&Be.viewport(D.copy(se)),ee.length>0&&Ls(ee,j,ne),Oe.length>0&&Ls(Oe,j,ne),Ge.length>0&&Ls(Ge,j,ne),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function Rs(P,j,ne,se){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;const Oe=st.isWebGL2;We===null&&(We=new jn(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")?Ci:Ir,minFilter:ys,samples:Oe?4:0})),A.getDrawingBufferSize(at),Oe?We.setSize(at.x,at.y):We.setSize(wl(at.x),wl(at.y));const Ge=A.getRenderTarget();A.setRenderTarget(We),A.getClearColor($),k=A.getClearAlpha(),k<1&&A.setClearColor(16777215,.5),A.clear();const Xe=A.toneMapping;A.toneMapping=Or,Ls(P,ne,se),U.updateMultisampleRenderTarget(We),U.updateRenderTargetMipmap(We);let et=!1;for(let ht=0,it=j.length;ht<it;ht++){const ot=j[ht],Kt=ot.object,An=ot.geometry,ln=ot.material,yi=ot.group;if(ln.side===Hi&&Kt.layers.test(se.layers)){const Gt=ln.side;ln.side=Wn,ln.needsUpdate=!0,Ca(Kt,ne,se,An,ln,yi),ln.side=Gt,ln.needsUpdate=!0,et=!0}}et===!0&&(U.updateMultisampleRenderTarget(We),U.updateRenderTargetMipmap(We)),A.setRenderTarget(Ge),A.setClearColor($,k),A.toneMapping=Xe}function Ls(P,j,ne){const se=j.isScene===!0?j.overrideMaterial:null;for(let ee=0,Oe=P.length;ee<Oe;ee++){const Ge=P[ee],Xe=Ge.object,et=Ge.geometry,ht=se===null?Ge.material:se,it=Ge.group;Xe.layers.test(ne.layers)&&Ca(Xe,j,ne,et,ht,it)}}function Ca(P,j,ne,se,ee,Oe){P.onBeforeRender(A,j,ne,se,ee,Oe),P.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ee.onBeforeRender(A,j,ne,se,P,Oe),ee.transparent===!0&&ee.side===Hi&&ee.forceSinglePass===!1?(ee.side=Wn,ee.needsUpdate=!0,A.renderBufferDirect(ne,j,se,ee,P,Oe),ee.side=qi,ee.needsUpdate=!0,A.renderBufferDirect(ne,j,se,ee,P,Oe),ee.side=Hi):A.renderBufferDirect(ne,j,se,ee,P,Oe),P.onAfterRender(A,j,ne,se,ee,Oe)}function Ps(P,j,ne){j.isScene!==!0&&(j=He);const se=Je.get(P),ee=x.state.lights,Oe=x.state.shadowsArray,Ge=ee.state.version,Xe=pe.getParameters(P,ee.state,Oe,j,ne),et=pe.getProgramCacheKey(Xe);let ht=se.programs;se.environment=P.isMeshStandardMaterial?j.environment:null,se.fog=j.fog,se.envMap=(P.isMeshStandardMaterial?re:L).get(P.envMap||se.environment),ht===void 0&&(P.addEventListener("dispose",Pe),ht=new Map,se.programs=ht);let it=ht.get(et);if(it!==void 0){if(se.currentProgram===it&&se.lightsStateVersion===Ge)return Ra(P,Xe),it}else Xe.uniforms=pe.getUniforms(P),P.onBuild(ne,Xe,A),P.onBeforeCompile(Xe,A),it=pe.acquireProgram(Xe,et),ht.set(et,it),se.uniforms=Xe.uniforms;const ot=se.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(ot.clippingPlanes=dt.uniform),Ra(P,Xe),se.needsLights=Jl(P),se.lightsStateVersion=Ge,se.needsLights&&(ot.ambientLightColor.value=ee.state.ambient,ot.lightProbe.value=ee.state.probe,ot.directionalLights.value=ee.state.directional,ot.directionalLightShadows.value=ee.state.directionalShadow,ot.spotLights.value=ee.state.spot,ot.spotLightShadows.value=ee.state.spotShadow,ot.rectAreaLights.value=ee.state.rectArea,ot.ltc_1.value=ee.state.rectAreaLTC1,ot.ltc_2.value=ee.state.rectAreaLTC2,ot.pointLights.value=ee.state.point,ot.pointLightShadows.value=ee.state.pointShadow,ot.hemisphereLights.value=ee.state.hemi,ot.directionalShadowMap.value=ee.state.directionalShadowMap,ot.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,ot.spotShadowMap.value=ee.state.spotShadowMap,ot.spotLightMatrix.value=ee.state.spotLightMatrix,ot.spotLightMap.value=ee.state.spotLightMap,ot.pointShadowMap.value=ee.state.pointShadowMap,ot.pointShadowMatrix.value=ee.state.pointShadowMatrix),se.currentProgram=it,se.uniformsList=null,it}function Do(P){if(P.uniformsList===null){const j=P.currentProgram.getUniforms();P.uniformsList=gl.seqWithValue(j.seq,P.uniforms)}return P.uniformsList}function Ra(P,j){const ne=Je.get(P);ne.outputColorSpace=j.outputColorSpace,ne.batching=j.batching,ne.instancing=j.instancing,ne.instancingColor=j.instancingColor,ne.skinning=j.skinning,ne.morphTargets=j.morphTargets,ne.morphNormals=j.morphNormals,ne.morphColors=j.morphColors,ne.morphTargetsCount=j.morphTargetsCount,ne.numClippingPlanes=j.numClippingPlanes,ne.numIntersection=j.numClipIntersection,ne.vertexAlphas=j.vertexAlphas,ne.vertexTangents=j.vertexTangents,ne.toneMapping=j.toneMapping}function Zl(P,j,ne,se,ee){j.isScene!==!0&&(j=He),U.resetTextureUnits();const Oe=j.fog,Ge=se.isMeshStandardMaterial?j.environment:null,Xe=p===null?A.outputColorSpace:p.isXRRenderTarget===!0?p.texture.colorSpace:gn,et=(se.isMeshStandardMaterial?re:L).get(se.envMap||Ge),ht=se.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,it=!!ne.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),ot=!!ne.morphAttributes.position,Kt=!!ne.morphAttributes.normal,An=!!ne.morphAttributes.color;let ln=Or;se.toneMapped&&(p===null||p.isXRRenderTarget===!0)&&(ln=A.toneMapping);const yi=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Gt=yi!==void 0?yi.length:0,gt=Je.get(se),Yr=x.state.lights;if(_e===!0&&(Le===!0||P!==E)){const wn=P===E&&se.id===G;dt.setState(se,P,wn)}let jt=!1;se.version===gt.__version?(gt.needsLights&&gt.lightsStateVersion!==Yr.state.version||gt.outputColorSpace!==Xe||ee.isBatchedMesh&&gt.batching===!1||!ee.isBatchedMesh&&gt.batching===!0||ee.isInstancedMesh&&gt.instancing===!1||!ee.isInstancedMesh&&gt.instancing===!0||ee.isSkinnedMesh&&gt.skinning===!1||!ee.isSkinnedMesh&&gt.skinning===!0||ee.isInstancedMesh&&gt.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&gt.instancingColor===!1&&ee.instanceColor!==null||gt.envMap!==et||se.fog===!0&&gt.fog!==Oe||gt.numClippingPlanes!==void 0&&(gt.numClippingPlanes!==dt.numPlanes||gt.numIntersection!==dt.numIntersection)||gt.vertexAlphas!==ht||gt.vertexTangents!==it||gt.morphTargets!==ot||gt.morphNormals!==Kt||gt.morphColors!==An||gt.toneMapping!==ln||st.isWebGL2===!0&&gt.morphTargetsCount!==Gt)&&(jt=!0):(jt=!0,gt.__version=se.version);let en=gt.currentProgram;jt===!0&&(en=Ps(se,j,ee));let Ji=!1,Ni=!1,No=!1;const yn=en.getUniforms(),bi=gt.uniforms;if(Be.useProgram(en.program)&&(Ji=!0,Ni=!0,No=!0),se.id!==G&&(G=se.id,Ni=!0),Ji||E!==P){yn.setValue(Q,"projectionMatrix",P.projectionMatrix),yn.setValue(Q,"viewMatrix",P.matrixWorldInverse);const wn=yn.map.cameraPosition;wn!==void 0&&wn.setValue(Q,lt.setFromMatrixPosition(P.matrixWorld)),st.logarithmicDepthBuffer&&yn.setValue(Q,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&yn.setValue(Q,"isOrthographic",P.isOrthographicCamera===!0),E!==P&&(E=P,Ni=!0,No=!0)}if(ee.isSkinnedMesh){yn.setOptional(Q,ee,"bindMatrix"),yn.setOptional(Q,ee,"bindMatrixInverse");const wn=ee.skeleton;wn&&(st.floatVertexTextures?(wn.boneTexture===null&&wn.computeBoneTexture(),yn.setValue(Q,"boneTexture",wn.boneTexture,U)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ee.isBatchedMesh&&(yn.setOptional(Q,ee,"batchingTexture"),yn.setValue(Q,"batchingTexture",ee._matricesTexture,U));const Ds=ne.morphAttributes;if((Ds.position!==void 0||Ds.normal!==void 0||Ds.color!==void 0&&st.isWebGL2===!0)&&ct.update(ee,ne,en),(Ni||gt.receiveShadow!==ee.receiveShadow)&&(gt.receiveShadow=ee.receiveShadow,yn.setValue(Q,"receiveShadow",ee.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(bi.envMap.value=et,bi.flipEnvMap.value=et.isCubeTexture&&et.isRenderTargetTexture===!1?-1:1),Ni&&(yn.setValue(Q,"toneMappingExposure",A.toneMappingExposure),gt.needsLights&&La(bi,No),Oe&&se.fog===!0&&Ee.refreshFogUniforms(bi,Oe),Ee.refreshMaterialUniforms(bi,se,le,Y,We),gl.upload(Q,Do(gt),bi,U)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(gl.upload(Q,Do(gt),bi,U),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&yn.setValue(Q,"center",ee.center),yn.setValue(Q,"modelViewMatrix",ee.modelViewMatrix),yn.setValue(Q,"normalMatrix",ee.normalMatrix),yn.setValue(Q,"modelMatrix",ee.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const wn=se.uniformsGroups;for(let Ns=0,Ql=wn.length;Ns<Ql;Ns++)if(st.isWebGL2){const Pa=wn[Ns];At.update(Pa,en),At.bind(Pa,en)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return en}function La(P,j){P.ambientLightColor.needsUpdate=j,P.lightProbe.needsUpdate=j,P.directionalLights.needsUpdate=j,P.directionalLightShadows.needsUpdate=j,P.pointLights.needsUpdate=j,P.pointLightShadows.needsUpdate=j,P.spotLights.needsUpdate=j,P.spotLightShadows.needsUpdate=j,P.rectAreaLights.needsUpdate=j,P.hemisphereLights.needsUpdate=j}function Jl(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return p},this.setRenderTargetTextures=function(P,j,ne){Je.get(P.texture).__webglTexture=j,Je.get(P.depthTexture).__webglTexture=ne;const se=Je.get(P);se.__hasExternalTextures=!0,se.__hasExternalTextures&&(se.__autoAllocateDepthBuffer=ne===void 0,se.__autoAllocateDepthBuffer||Ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),se.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,j){const ne=Je.get(P);ne.__webglFramebuffer=j,ne.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(P,j=0,ne=0){p=P,N=j,O=ne;let se=!0,ee=null,Oe=!1,Ge=!1;if(P){const et=Je.get(P);et.__useDefaultFramebuffer!==void 0?(Be.bindFramebuffer(Q.FRAMEBUFFER,null),se=!1):et.__webglFramebuffer===void 0?U.setupRenderTarget(P):et.__hasExternalTextures&&U.rebindTextures(P,Je.get(P.texture).__webglTexture,Je.get(P.depthTexture).__webglTexture);const ht=P.texture;(ht.isData3DTexture||ht.isDataArrayTexture||ht.isCompressedArrayTexture)&&(Ge=!0);const it=Je.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(it[j])?ee=it[j][ne]:ee=it[j],Oe=!0):st.isWebGL2&&P.samples>0&&U.useMultisampledRTT(P)===!1?ee=Je.get(P).__webglMultisampledFramebuffer:Array.isArray(it)?ee=it[ne]:ee=it,D.copy(P.viewport),Z.copy(P.scissor),q=P.scissorTest}else D.copy(me).multiplyScalar(le).floor(),Z.copy(Te).multiplyScalar(le).floor(),q=Me;if(Be.bindFramebuffer(Q.FRAMEBUFFER,ee)&&st.drawBuffers&&se&&Be.drawBuffers(P,ee),Be.viewport(D),Be.scissor(Z),Be.setScissorTest(q),Oe){const et=Je.get(P.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+j,et.__webglTexture,ne)}else if(Ge){const et=Je.get(P.texture),ht=j||0;Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,et.__webglTexture,ne||0,ht)}G=-1},this.readRenderTargetPixels=function(P,j,ne,se,ee,Oe,Ge){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=Je.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ge!==void 0&&(Xe=Xe[Ge]),Xe){Be.bindFramebuffer(Q.FRAMEBUFFER,Xe);try{const et=P.texture,ht=et.format,it=et.type;if(ht!==mi&&Ie.convert(ht)!==Q.getParameter(Q.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ot=it===Ci&&(Ye.has("EXT_color_buffer_half_float")||st.isWebGL2&&Ye.has("EXT_color_buffer_float"));if(it!==Ir&&Ie.convert(it)!==Q.getParameter(Q.IMPLEMENTATION_COLOR_READ_TYPE)&&!(it===cr&&(st.isWebGL2||Ye.has("OES_texture_float")||Ye.has("WEBGL_color_buffer_float")))&&!ot){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=P.width-se&&ne>=0&&ne<=P.height-ee&&Q.readPixels(j,ne,se,ee,Ie.convert(ht),Ie.convert(it),Oe)}finally{const et=p!==null?Je.get(p).__webglFramebuffer:null;Be.bindFramebuffer(Q.FRAMEBUFFER,et)}}},this.copyFramebufferToTexture=function(P,j,ne=0){const se=Math.pow(2,-ne),ee=Math.floor(j.image.width*se),Oe=Math.floor(j.image.height*se);U.setTexture2D(j,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,ne,0,0,P.x,P.y,ee,Oe),Be.unbindTexture()},this.copyTextureToTexture=function(P,j,ne,se=0){const ee=j.image.width,Oe=j.image.height,Ge=Ie.convert(ne.format),Xe=Ie.convert(ne.type);U.setTexture2D(ne,0),Q.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,ne.flipY),Q.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),Q.pixelStorei(Q.UNPACK_ALIGNMENT,ne.unpackAlignment),j.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,se,P.x,P.y,ee,Oe,Ge,Xe,j.image.data):j.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,se,P.x,P.y,j.mipmaps[0].width,j.mipmaps[0].height,Ge,j.mipmaps[0].data):Q.texSubImage2D(Q.TEXTURE_2D,se,P.x,P.y,Ge,Xe,j.image),se===0&&ne.generateMipmaps&&Q.generateMipmap(Q.TEXTURE_2D),Be.unbindTexture()},this.copyTextureToTexture3D=function(P,j,ne,se,ee=0){if(A.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Oe=P.max.x-P.min.x+1,Ge=P.max.y-P.min.y+1,Xe=P.max.z-P.min.z+1,et=Ie.convert(se.format),ht=Ie.convert(se.type);let it;if(se.isData3DTexture)U.setTexture3D(se,0),it=Q.TEXTURE_3D;else if(se.isDataArrayTexture||se.isCompressedArrayTexture)U.setTexture2DArray(se,0),it=Q.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Q.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,se.flipY),Q.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),Q.pixelStorei(Q.UNPACK_ALIGNMENT,se.unpackAlignment);const ot=Q.getParameter(Q.UNPACK_ROW_LENGTH),Kt=Q.getParameter(Q.UNPACK_IMAGE_HEIGHT),An=Q.getParameter(Q.UNPACK_SKIP_PIXELS),ln=Q.getParameter(Q.UNPACK_SKIP_ROWS),yi=Q.getParameter(Q.UNPACK_SKIP_IMAGES),Gt=ne.isCompressedTexture?ne.mipmaps[ee]:ne.image;Q.pixelStorei(Q.UNPACK_ROW_LENGTH,Gt.width),Q.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Gt.height),Q.pixelStorei(Q.UNPACK_SKIP_PIXELS,P.min.x),Q.pixelStorei(Q.UNPACK_SKIP_ROWS,P.min.y),Q.pixelStorei(Q.UNPACK_SKIP_IMAGES,P.min.z),ne.isDataTexture||ne.isData3DTexture?Q.texSubImage3D(it,ee,j.x,j.y,j.z,Oe,Ge,Xe,et,ht,Gt.data):ne.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Q.compressedTexSubImage3D(it,ee,j.x,j.y,j.z,Oe,Ge,Xe,et,Gt.data)):Q.texSubImage3D(it,ee,j.x,j.y,j.z,Oe,Ge,Xe,et,ht,Gt),Q.pixelStorei(Q.UNPACK_ROW_LENGTH,ot),Q.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Kt),Q.pixelStorei(Q.UNPACK_SKIP_PIXELS,An),Q.pixelStorei(Q.UNPACK_SKIP_ROWS,ln),Q.pixelStorei(Q.UNPACK_SKIP_IMAGES,yi),ee===0&&se.generateMipmaps&&Q.generateMipmap(it),Be.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?U.setTextureCube(P,0):P.isData3DTexture?U.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?U.setTexture2DArray(P,0):U.setTexture2D(P,0),Be.unbindTexture()},this.resetState=function(){N=0,O=0,p=null,Be.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ur}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Yu?"display-p3":"srgb",t.unpackColorSpace=Pt.workingColorSpace===Hl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Yt?ps:Dp}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ps?Yt:gn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class uS extends Qp{}uS.prototype.isWebGL1Renderer=!0;class $u{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new je(e),this.near=t,this.far=n}clone(){return new $u(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class fS extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class hS{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=pu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ri()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kn=new V;class ef{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)kn.fromBufferAttribute(this,t),kn.applyMatrix4(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kn.fromBufferAttribute(this,t),kn.applyNormalMatrix(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kn.fromBufferAttribute(this,t),kn.transformDirection(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Gi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Gi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Gi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Gi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),i=kt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),i=kt(i,this.array),r=kt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Rn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ef(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const hd=new V,dd=new Ft,pd=new Ft,dS=new V,md=new ut,rl=new V,Gc=new Ki,gd=new ut,Vc=new ya;class pS extends Vn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Zf,this.bindMatrix=new ut,this.bindMatrixInverse=new ut,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new pr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,rl),this.boundingBox.expandByPoint(rl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ki),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,rl),this.boundingSphere.expandByPoint(rl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gc.copy(this.boundingSphere),Gc.applyMatrix4(i),e.ray.intersectsSphere(Gc)!==!1&&(gd.copy(i).invert(),Vc.copy(e.ray).applyMatrix4(gd),!(this.boundingBox!==null&&Vc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Vc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ft,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Zf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===M_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;dd.fromBufferAttribute(i.attributes.skinIndex,e),pd.fromBufferAttribute(i.attributes.skinWeight,e),hd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=pd.getComponent(r);if(o!==0){const a=dd.getComponent(r);md.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(dS.copy(hd).applyMatrix4(md),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class $p extends Qt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class mS extends mn{constructor(e=null,t=1,n=1,i,r,o,a,l,u=hn,f=hn,d,m){super(null,o,a,l,u,f,i,r,d,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _d=new ut,gS=new ut;class tf{constructor(e=[],t=[]){this.uuid=Ri(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ut)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ut;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:gS;_d.multiplyMatrices(a,t[r]),_d.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new tf(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new mS(t,e,e,mi,cr);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new $p),this.bones.push(o),this.boneInverses.push(new ut().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class vu extends Rn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Qs=new ut,vd=new ut,sl=[],xd=new pr,_S=new ut,Wo=new Vn,Xo=new Ki;class vS extends Vn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new vu(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,_S)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qs),xd.copy(e.boundingBox).applyMatrix4(Qs),this.boundingBox.union(xd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ki),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qs),Xo.copy(e.boundingSphere).applyMatrix4(Qs),this.boundingSphere.union(Xo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Wo.geometry=this.geometry,Wo.material=this.material,Wo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xo.copy(this.boundingSphere),Xo.applyMatrix4(n),e.ray.intersectsSphere(Xo)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Qs),vd.multiplyMatrices(n,Qs),Wo.matrixWorld=vd,Wo.raycast(e,sl);for(let o=0,a=sl.length;o<a;o++){const l=sl[o];l.instanceId=r,l.object=this,t.push(l)}sl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new vu(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class em extends Xi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const yd=new V,bd=new V,Sd=new ut,Wc=new ya,ol=new Ki;class nf extends Qt{constructor(e=new oi,t=new em){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)yd.fromBufferAttribute(t,i-1),bd.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=yd.distanceTo(bd);e.setAttribute("lineDistance",new qn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ol.copy(n.boundingSphere),ol.applyMatrix4(i),ol.radius+=r,e.ray.intersectsSphere(ol)===!1)return;Sd.copy(i).invert(),Wc.copy(e.ray).applyMatrix4(Sd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new V,f=new V,d=new V,m=new V,v=this.isLineSegments?2:1,S=n.index,x=n.attributes.position;if(S!==null){const g=Math.max(0,o.start),C=Math.min(S.count,o.start+o.count);for(let A=g,R=C-1;A<R;A+=v){const N=S.getX(A),O=S.getX(A+1);if(u.fromBufferAttribute(x,N),f.fromBufferAttribute(x,O),Wc.distanceSqToSegment(u,f,m,d)>l)continue;m.applyMatrix4(this.matrixWorld);const G=e.ray.origin.distanceTo(m);G<e.near||G>e.far||t.push({distance:G,point:d.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,o.start),C=Math.min(x.count,o.start+o.count);for(let A=g,R=C-1;A<R;A+=v){if(u.fromBufferAttribute(x,A),f.fromBufferAttribute(x,A+1),Wc.distanceSqToSegment(u,f,m,d)>l)continue;m.applyMatrix4(this.matrixWorld);const O=e.ray.origin.distanceTo(m);O<e.near||O>e.far||t.push({distance:O,point:d.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Td=new V,Md=new V;class xS extends nf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Td.fromBufferAttribute(t,i),Md.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Td.distanceTo(Md);e.setAttribute("lineDistance",new qn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yS extends nf{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class tm extends Xi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ed=new ut,xu=new ya,al=new Ki,ll=new V;class bS extends Qt{constructor(e=new oi,t=new tm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),al.copy(n.boundingSphere),al.applyMatrix4(i),al.radius+=r,e.ray.intersectsSphere(al)===!1)return;Ed.copy(i).invert(),xu.copy(e.ray).applyMatrix4(Ed);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=n.index,d=n.attributes.position;if(u!==null){const m=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let S=m,y=v;S<y;S++){const x=u.getX(S);ll.fromBufferAttribute(d,x),Ad(ll,x,l,i,e,t,this)}}else{const m=Math.max(0,o.start),v=Math.min(d.count,o.start+o.count);for(let S=m,y=v;S<y;S++)ll.fromBufferAttribute(d,S),Ad(ll,S,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ad(s,e,t,n,i,r,o){const a=xu.distanceSqToPoint(s);if(a<t){const l=new V;xu.closestPointToPoint(s,l),l.applyMatrix4(n);const u=i.ray.origin.distanceTo(l);if(u<i.near||u>i.far)return;r.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class rf extends oi{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const u=this;i=Math.floor(i),r=Math.floor(r);const f=[],d=[],m=[],v=[];let S=0;const y=[],x=n/2;let g=0;C(),o===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(f),this.setAttribute("position",new qn(d,3)),this.setAttribute("normal",new qn(m,3)),this.setAttribute("uv",new qn(v,2));function C(){const R=new V,N=new V;let O=0;const p=(t-e)/n;for(let G=0;G<=r;G++){const E=[],D=G/r,Z=D*(t-e)+e;for(let q=0;q<=i;q++){const $=q/i,k=$*l+a,X=Math.sin(k),Y=Math.cos(k);N.x=Z*X,N.y=-D*n+x,N.z=Z*Y,d.push(N.x,N.y,N.z),R.set(X,p,Y).normalize(),m.push(R.x,R.y,R.z),v.push($,1-D),E.push(S++)}y.push(E)}for(let G=0;G<i;G++)for(let E=0;E<r;E++){const D=y[E][G],Z=y[E+1][G],q=y[E+1][G+1],$=y[E][G+1];f.push(D,Z,$),f.push(Z,q,$),O+=6}u.addGroup(g,O,0),g+=O}function A(R){const N=S,O=new Ze,p=new V;let G=0;const E=R===!0?e:t,D=R===!0?1:-1;for(let q=1;q<=i;q++)d.push(0,x*D,0),m.push(0,D,0),v.push(.5,.5),S++;const Z=S;for(let q=0;q<=i;q++){const k=q/i*l+a,X=Math.cos(k),Y=Math.sin(k);p.x=E*Y,p.y=x*D,p.z=E*X,d.push(p.x,p.y,p.z),m.push(0,D,0),O.x=X*.5+.5,O.y=Y*.5*D+.5,v.push(O.x,O.y),S++}for(let q=0;q<i;q++){const $=N+q,k=Z+q;R===!0?f.push(k,k+1,$):f.push(k+1,k,$),G+=3}u.addGroup(g,G,R===!0?1:2),g+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rf(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class SS extends dn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class sf extends Xi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Np,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mr extends sf{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ze(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Nn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function cl(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function TS(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function MS(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function wd(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function nm(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Sa{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ES extends Sa{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sh,endingEnd:Sh}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Th:r=e,a=2*t-n;break;case Mh:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Th:o=e,l=2*n-t;break;case Mh:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const u=(n-t)*.5,f=this.valueSize;this._weightPrev=u/(t-a),this._weightNext=u/(l-n),this._offsetPrev=r*f,this._offsetNext=o*f}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,f=this._offsetPrev,d=this._offsetNext,m=this._weightPrev,v=this._weightNext,S=(n-t)/(i-t),y=S*S,x=y*S,g=-m*x+2*m*y-m*S,C=(1+m)*x+(-1.5-2*m)*y+(-.5+m)*S+1,A=(-1-v)*x+(1.5+v)*y+.5*S,R=v*x-v*y;for(let N=0;N!==a;++N)r[N]=g*o[f+N]+C*o[u+N]+A*o[l+N]+R*o[d+N];return r}}class AS extends Sa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,f=(n-t)/(i-t),d=1-f;for(let m=0;m!==a;++m)r[m]=o[u+m]*d+o[l+m]*f;return r}}class wS extends Sa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Zi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=cl(t,this.TimeBufferType),this.values=cl(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:cl(e.times,Array),values:cl(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new wS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new AS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ES(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ua:t=this.InterpolantFactoryMethodDiscrete;break;case _o:t=this.InterpolantFactoryMethodLinear;break;case vc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ua;case this.InterpolantFactoryMethodLinear:return _o;case this.InterpolantFactoryMethodSmooth:return vc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&TS(i))for(let a=0,l=i.length;a!==l;++a){const u=i[a];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,u),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===vc,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const u=e[a],f=e[a+1];if(u!==f&&(a!==1||u!==e[0]))if(i)l=!0;else{const d=a*n,m=d-n,v=d+n;for(let S=0;S!==n;++S){const y=t[d+S];if(y!==t[m+S]||y!==t[v+S]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*n,m=o*n;for(let v=0;v!==n;++v)t[m+v]=t[d+v]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,u=0;u!==n;++u)t[l+u]=t[a+u];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Zi.prototype.TimeBufferType=Float32Array;Zi.prototype.ValueBufferType=Float32Array;Zi.prototype.DefaultInterpolation=_o;class Lo extends Zi{}Lo.prototype.ValueTypeName="bool";Lo.prototype.ValueBufferType=Array;Lo.prototype.DefaultInterpolation=ua;Lo.prototype.InterpolantFactoryMethodLinear=void 0;Lo.prototype.InterpolantFactoryMethodSmooth=void 0;class im extends Zi{}im.prototype.ValueTypeName="color";class yo extends Zi{}yo.prototype.ValueTypeName="number";class CS extends Sa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let u=e*a;for(let f=u+a;u!==f;u+=4)Gr.slerpFlat(r,0,o,u-a,o,u,l);return r}}class bs extends Zi{InterpolantFactoryMethodLinear(e){return new CS(this.times,this.values,this.getValueSize(),e)}}bs.prototype.ValueTypeName="quaternion";bs.prototype.DefaultInterpolation=_o;bs.prototype.InterpolantFactoryMethodSmooth=void 0;class Po extends Zi{}Po.prototype.ValueTypeName="string";Po.prototype.ValueBufferType=Array;Po.prototype.DefaultInterpolation=ua;Po.prototype.InterpolantFactoryMethodLinear=void 0;Po.prototype.InterpolantFactoryMethodSmooth=void 0;class bo extends Zi{}bo.prototype.ValueTypeName="vector";class RS{constructor(e,t=-1,n,i=N_){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ri(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(PS(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Zi.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],u=[];l.push((a+r-1)%r,a,(a+1)%r),u.push(0,1,0);const f=MS(l);l=wd(l,1,f),u=wd(u,1,f),!i&&l[0]===0&&(l.push(r),u.push(u[0])),o.push(new yo(".morphTargetInfluences["+t[a].name+"]",l,u).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const u=e[a],f=u.name.match(r);if(f&&f.length>1){const d=f[1];let m=i[d];m||(i[d]=m=[]),m.push(u)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,m,v,S,y){if(v.length!==0){const x=[],g=[];nm(v,x,g,S),x.length!==0&&y.push(new d(m,x,g))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const u=e.hierarchy||[];for(let d=0;d<u.length;d++){const m=u[d].keys;if(!(!m||m.length===0))if(m[0].morphTargets){const v={};let S;for(S=0;S<m.length;S++)if(m[S].morphTargets)for(let y=0;y<m[S].morphTargets.length;y++)v[m[S].morphTargets[y]]=-1;for(const y in v){const x=[],g=[];for(let C=0;C!==m[S].morphTargets.length;++C){const A=m[S];x.push(A.time),g.push(A.morphTarget===y?1:0)}i.push(new yo(".morphTargetInfluence["+y+"]",x,g))}l=v.length*o}else{const v=".bones["+t[d].name+"]";n(bo,v+".position",m,"pos",i),n(bs,v+".quaternion",m,"rot",i),n(bo,v+".scale",m,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function LS(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return yo;case"vector":case"vector2":case"vector3":case"vector4":return bo;case"color":return im;case"quaternion":return bs;case"bool":case"boolean":return Lo;case"string":return Po}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function PS(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=LS(s.type);if(s.times===void 0){const t=[],n=[];nm(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Lr={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class rm{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(f){a++,r===!1&&i.onStart!==void 0&&i.onStart(f,o,a),r=!0},this.itemEnd=function(f){o++,i.onProgress!==void 0&&i.onProgress(f,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(f){i.onError!==void 0&&i.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,d){return u.push(f,d),this},this.removeHandler=function(f){const d=u.indexOf(f);return d!==-1&&u.splice(d,2),this},this.getHandler=function(f){for(let d=0,m=u.length;d<m;d+=2){const v=u[d],S=u[d+1];if(v.global&&(v.lastIndex=0),v.test(f))return S}return null}}}const DS=new rm;class Ms{constructor(e){this.manager=e!==void 0?e:DS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ms.DEFAULT_MATERIAL_NAME="__DEFAULT";const sr={};class NS extends Error{constructor(e,t){super(e),this.response=t}}class Cl extends Ms{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Lr.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(sr[e]!==void 0){sr[e].push({onLoad:t,onProgress:n,onError:i});return}sr[e]=[],sr[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const f=sr[e],d=u.body.getReader(),m=u.headers.get("Content-Length")||u.headers.get("X-File-Size"),v=m?parseInt(m):0,S=v!==0;let y=0;const x=new ReadableStream({start(g){C();function C(){d.read().then(({done:A,value:R})=>{if(A)g.close();else{y+=R.byteLength;const N=new ProgressEvent("progress",{lengthComputable:S,loaded:y,total:v});for(let O=0,p=f.length;O<p;O++){const G=f[O];G.onProgress&&G.onProgress(N)}g.enqueue(R),C()}})}}});return new Response(x)}else throw new NS(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(l){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(f=>new DOMParser().parseFromString(f,a));case"json":return u.json();default:if(a===void 0)return u.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),m=d&&d[1]?d[1].toLowerCase():void 0,v=new TextDecoder(m);return u.arrayBuffer().then(S=>v.decode(S))}}}).then(u=>{Lr.add(e,u);const f=sr[e];delete sr[e];for(let d=0,m=f.length;d<m;d++){const v=f[d];v.onLoad&&v.onLoad(u)}}).catch(u=>{const f=sr[e];if(f===void 0)throw this.manager.itemError(e),u;delete sr[e];for(let d=0,m=f.length;d<m;d++){const v=f[d];v.onError&&v.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class OS extends Ms{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Lr.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=fa("img");function l(){f(),Lr.add(e,this),t&&t(this),r.manager.itemEnd(e)}function u(d){f(),i&&i(d),r.manager.itemError(e),r.manager.itemEnd(e)}function f(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class sm extends Ms{constructor(e){super(e)}load(e,t,n,i){const r=new mn,o=new OS(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class jl extends Qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Xc=new ut,Cd=new V,Rd=new V;class of{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ju,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Cd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cd),Rd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rd),t.updateMatrixWorld(),Xc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class IS extends of{constructor(){super(new On(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=vo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class om extends jl{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new IS}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ld=new ut,jo=new V,jc=new V;class US extends of{constructor(){super(new On(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ze(4,2),this._viewportCount=6,this._viewports=[new Ft(2,1,1,1),new Ft(0,1,1,1),new Ft(3,1,1,1),new Ft(1,1,1,1),new Ft(3,0,1,1),new Ft(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),jo.setFromMatrixPosition(e.matrixWorld),n.position.copy(jo),jc.copy(n.position),jc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(jc),n.updateMatrixWorld(),i.makeTranslation(-jo.x,-jo.y,-jo.z),Ld.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ld)}}class FS extends jl{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new US}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class BS extends of{constructor(){super(new Wl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class kS extends jl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.shadow=new BS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class zS extends jl{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class ia{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class HS extends Ms{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Lr.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(u=>{t&&t(u),r.manager.itemEnd(e)}).catch(u=>{i&&i(u)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(u){return Lr.add(e,u),t&&t(u),r.manager.itemEnd(e),u}).catch(function(u){i&&i(u),Lr.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Lr.add(e,l),r.manager.itemStart(e)}}class am{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Pd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Pd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Pd(){return(typeof performance>"u"?Date:performance).now()}const af="\\[\\]\\.:\\/",GS=new RegExp("["+af+"]","g"),lf="[^"+af+"]",VS="[^"+af.replace("\\.","")+"]",WS=/((?:WC+[\/:])*)/.source.replace("WC",lf),XS=/(WCOD+)?/.source.replace("WCOD",VS),jS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lf),qS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lf),YS=new RegExp("^"+WS+XS+jS+qS+"$"),KS=["material","materials","bones","map"];class ZS{constructor(e,t,n){const i=n||Ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ut{constructor(e,t,n){this.path=t,this.parsedPath=n||Ut.parseTrackName(t),this.node=Ut.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ut.Composite(e,t,n):new Ut(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(GS,"")}static parseTrackName(e){const t=YS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);KS.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Ut.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===u){u=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}const o=e[i];if(o===void 0){const u=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ut.Composite=ZS;Ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ut.prototype.GetterByBindingType=[Ut.prototype._getValue_direct,Ut.prototype._getValue_array,Ut.prototype._getValue_arrayElement,Ut.prototype._getValue_toArray];Ut.prototype.SetterByBindingTypeAndVersioning=[[Ut.prototype._setValue_direct,Ut.prototype._setValue_direct_setNeedsUpdate,Ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_array,Ut.prototype._setValue_array_setNeedsUpdate,Ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_arrayElement,Ut.prototype._setValue_arrayElement_setNeedsUpdate,Ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_fromArray,Ut.prototype._setValue_fromArray_setNeedsUpdate,Ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class JS{constructor(e,t,n=0,i=1/0){this.ray=new ya(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Zu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return yu(e,this,n,t),n.sort(Dd),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)yu(e[i],this,n,t);return n.sort(Dd),n}}function Dd(s,e){return s.distance-e.distance}function yu(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)yu(i[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xu);function ar(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function lm(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.12.4
 * https://gsap.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ri={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},So={duration:.5,overwrite:!1,delay:0},cf,Un,nn,_i=1e8,Ht=1/_i,bu=Math.PI*2,QS=bu/4,$S=0,cm=Math.sqrt,eT=Math.cos,tT=Math.sin,Mn=function(e){return typeof e=="string"},rn=function(e){return typeof e=="function"},hr=function(e){return typeof e=="number"},uf=function(e){return typeof e>"u"},Yi=function(e){return typeof e=="object"},Yn=function(e){return e!==!1},ff=function(){return typeof window<"u"},ul=function(e){return rn(e)||Mn(e)},um=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Fn=Array.isArray,Su=/(?:-?\.?\d|\.)+/gi,fm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ro=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,qc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,hm=/[+-]=-?[.\d]+/,dm=/[^,'"\[\]\s]+/gi,nT=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Zt,hi,Tu,hf,si={},Rl={},pm,mm=function(e){return(Rl=Ss(e,si))&&Qn},df=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ha=function(e,t){return!t&&console.warn(e)},gm=function(e,t){return e&&(si[e]=t)&&Rl&&(Rl[e]=t)||si},da=function(){return 0},iT={suppressEvents:!0,isStart:!0,kill:!1},_l={suppressEvents:!0,kill:!1},rT={suppressEvents:!0},pf={},Ur=[],Mu={},_m,ti={},Yc={},Nd=30,vl=[],mf="",gf=function(e){var t=e[0],n,i;if(Yi(t)||rn(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=vl.length;i--&&!vl[i].targetTest(t););n=vl[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Hm(e[i],n)))||e.splice(i,1);return e},ms=function(e){return e._gsap||gf(vi(e))[0]._gsap},vm=function(e,t,n){return(n=e[t])&&rn(n)?e[t]():uf(n)&&e.getAttribute&&e.getAttribute(t)||n},Kn=function(e,t){return(e=e.split(",")).forEach(t)||e},sn=function(e){return Math.round(e*1e5)/1e5||0},Sn=function(e){return Math.round(e*1e7)/1e7||0},co=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},sT=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Ll=function(){var e=Ur.length,t=Ur.slice(0),n,i;for(Mu={},Ur.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},xm=function(e,t,n,i){Ur.length&&!Un&&Ll(),e.render(t,n,i||Un&&t<0&&(e._initted||e._startAt)),Ur.length&&!Un&&Ll()},ym=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(dm).length<2?t:Mn(e)?e.trim():e},bm=function(e){return e},xi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},oT=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ss=function(e,t){for(var n in t)e[n]=t[n];return e},Od=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Yi(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},Pl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ra=function(e){var t=e.parent||Zt,n=e.keyframes?oT(Fn(e.keyframes)):xi;if(Yn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},aT=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Sm=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},ql=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},kr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},gs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},lT=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Eu=function(e,t,n,i){return e._startAt&&(Un?e._startAt.revert(_l):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},cT=function s(e){return!e||e._ts&&s(e.parent)},Id=function(e){return e._repeat?To(e._tTime,e=e.duration()+e._rDelay)*e:0},To=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Dl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Yl=function(e){return e._end=Sn(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ht)||0))},Kl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Sn(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Yl(e),n._dirty||gs(n,e)),e},Tm=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Dl(e.rawTime(),t),(!t._dur||Ta(0,t.totalDuration(),n)-t._tTime>Ht)&&t.render(n,!0)),gs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ht}},Vi=function(e,t,n,i){return t.parent&&kr(t),t._start=Sn((hr(n)?n:n||e!==Zt?fi(e,n,t):e._time)+t._delay),t._end=Sn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Sm(e,t,"_first","_last",e._sort?"_start":0),Au(t)||(e._recent=t),i||Tm(e,t),e._ts<0&&Kl(e,e._tTime),e},Mm=function(e,t){return(si.ScrollTrigger||df("scrollTrigger",t))&&si.ScrollTrigger.create(t,e)},Em=function(e,t,n,i,r){if(vf(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Un&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&_m!==ni.frame)return Ur.push(e),e._lazy=[r,i],1},uT=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},Au=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},fT=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&uT(e)&&!(!e._initted&&Au(e))||(e._ts<0||e._dp._ts<0)&&!Au(e))?0:1,a=e._rDelay,l=0,u,f,d;if(a&&e._repeat&&(l=Ta(0,e._tDur,t),f=To(l,a),e._yoyo&&f&1&&(o=1-o),f!==To(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||Un||i||e._zTime===Ht||!t&&e._zTime){if(!e._initted&&Em(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?Ht:0),n||(n=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&Eu(e,t,n,!0),e._onUpdate&&!n&&ii(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ii(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&kr(e,1),!n&&!Un&&(ii(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},hT=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Mo=function(e,t,n,i){var r=e._repeat,o=Sn(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:Sn(o*(r+1)+e._rDelay*r):o,a>0&&!i&&Kl(e,e._tTime=e._tDur*a),e.parent&&Yl(e),n||gs(e.parent,e),e},Ud=function(e){return e instanceof Gn?gs(e):Mo(e,e._dur)},dT={_start:0,endTime:da,totalDuration:da},fi=function s(e,t,n){var i=e.labels,r=e._recent||dT,o=e.duration()>=_i?r.endTime(!1):e._dur,a,l,u;return Mn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&n&&(l=l/100*(Fn(n)?n[0]:n).totalDuration()),a>1?s(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},sa=function(e,t,n){var i=hr(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Yn(l.vars.inherit)&&l.parent;o.immediateRender=Yn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new fn(t[0],o,t[r+1])},Vr=function(e,t){return e||e===0?t(e):t},Ta=function(e,t,n){return n<e?e:n>t?t:n},In=function(e,t){return!Mn(e)||!(t=nT.exec(e))?"":t[1]},pT=function(e,t,n){return Vr(n,function(i){return Ta(e,t,i)})},wu=[].slice,Am=function(e,t){return e&&Yi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Yi(e[0]))&&!e.nodeType&&e!==hi},mT=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return Mn(i)&&!t||Am(i,1)?(r=n).push.apply(r,vi(i)):n.push(i)})||n},vi=function(e,t,n){return nn&&!t&&nn.selector?nn.selector(e):Mn(e)&&!n&&(Tu||!Eo())?wu.call((t||hf).querySelectorAll(e),0):Fn(e)?mT(e,n):Am(e)?wu.call(e,0):e?[e]:[]},Cu=function(e){return e=vi(e)[0]||ha("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return vi(t,n.querySelectorAll?n:n===e?ha("Invalid scope")||hf.createElement("div"):e)}},wm=function(e){return e.sort(function(){return .5-Math.random()})},Cm=function(e){if(rn(e))return e;var t=Yi(e)?e:{each:e},n=_s(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,u=t.axis,f=i,d=i;return Mn(i)?f=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(f=i[0],d=i[1]),function(m,v,S){var y=(S||t).length,x=o[y],g,C,A,R,N,O,p,G,E;if(!x){if(E=t.grid==="auto"?0:(t.grid||[1,_i])[1],!E){for(p=-_i;p<(p=S[E++].getBoundingClientRect().left)&&E<y;);E<y&&E--}for(x=o[y]=[],g=l?Math.min(E,y)*f-.5:i%E,C=E===_i?0:l?y*d/E-.5:i/E|0,p=0,G=_i,O=0;O<y;O++)A=O%E-g,R=C-(O/E|0),x[O]=N=u?Math.abs(u==="y"?R:A):cm(A*A+R*R),N>p&&(p=N),N<G&&(G=N);i==="random"&&wm(x),x.max=p-G,x.min=G,x.v=y=(parseFloat(t.amount)||parseFloat(t.each)*(E>y?y-1:u?u==="y"?y/E:E:Math.max(E,y/E))||0)*(i==="edges"?-1:1),x.b=y<0?r-y:r,x.u=In(t.amount||t.each)||0,n=n&&y<0?Bm(n):n}return y=(x[m]-x.min)/x.max||0,Sn(x.b+(n?n(y):y)*x.v)+x.u}},Ru=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Sn(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(hr(n)?0:In(n))}},Rm=function(e,t){var n=Fn(e),i,r;return!n&&Yi(e)&&(i=n=e.radius||_i,e.values?(e=vi(e.values),(r=!hr(e[0]))&&(i*=i)):e=Ru(e.increment)),Vr(t,n?rn(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),u=_i,f=0,d=e.length,m,v;d--;)r?(m=e[d].x-a,v=e[d].y-l,m=m*m+v*v):m=Math.abs(e[d]-a),m<u&&(u=m,f=d);return f=!i||u<=i?e[f]:o,r||f===o||hr(o)?f:f+In(o)}:Ru(e))},Lm=function(e,t,n,i){return Vr(Fn(e)?!t:n===!0?!!(n=0):!i,function(){return Fn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},gT=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},_T=function(e,t){return function(n){return e(parseFloat(n))+(t||In(n))}},vT=function(e,t,n){return Dm(e,t,0,1,n)},Pm=function(e,t,n){return Vr(n,function(i){return e[~~t(i)]})},xT=function s(e,t,n){var i=t-e;return Fn(e)?Pm(e,s(0,e.length),t):Vr(n,function(r){return(i+(r-e)%i)%i+e})},yT=function s(e,t,n){var i=t-e,r=i*2;return Fn(e)?Pm(e,s(0,e.length-1),t):Vr(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},pa=function(e){for(var t=0,n="",i,r,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",r=e.substr(i+7,o-i-7).match(a?dm:Su),n+=e.substr(t,i-t)+Lm(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},Dm=function(e,t,n,i,r){var o=t-e,a=i-n;return Vr(r,function(l){return n+((l-e)/o*a||0)})},bT=function s(e,t,n,i){var r=isNaN(e+t)?0:function(v){return(1-v)*e+v*t};if(!r){var o=Mn(e),a={},l,u,f,d,m;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Fn(e)&&!Fn(t)){for(f=[],d=e.length,m=d-2,u=1;u<d;u++)f.push(s(e[u-1],e[u]));d--,r=function(S){S*=d;var y=Math.min(m,~~S);return f[y](S-y)},n=t}else i||(e=Ss(Fn(e)?[]:{},e));if(!f){for(l in t)_f.call(a,e,l,"get",t[l]);r=function(S){return bf(S,a)||(o?e.p:e)}}}return Vr(n,r)},Fd=function(e,t,n){var i=e.labels,r=_i,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},ii=function(e,t,n){var i=e.vars,r=i[t],o=nn,a=e._ctx,l,u,f;if(r)return l=i[t+"Params"],u=i.callbackScope||e,n&&Ur.length&&Ll(),a&&(nn=a),f=l?r.apply(u,l):r.call(u),nn=o,f},Jo=function(e){return kr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Un),e.progress()<1&&ii(e,"onInterrupt"),e},so,Nm=[],Om=function(e){if(ff()&&e){e=!e.name&&e.default||e;var t=e.name,n=rn(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:da,render:bf,add:_f,kill:FT,modifier:UT,rawVars:0},o={targetTest:0,get:0,getSetter:yf,aliases:{},register:0};if(Eo(),e!==i){if(ti[t])return;xi(i,xi(Pl(e,r),o)),Ss(i.prototype,Ss(r,Pl(e,o))),ti[i.prop=t]=i,e.targetTest&&(vl.push(i),pf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}gm(t,i),e.register&&e.register(Qn,i,Zn)}else e&&Nm.push(e)},zt=255,Qo={aqua:[0,zt,zt],lime:[0,zt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,zt],navy:[0,0,128],white:[zt,zt,zt],olive:[128,128,0],yellow:[zt,zt,0],orange:[zt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[zt,0,0],pink:[zt,192,203],cyan:[0,zt,zt],transparent:[zt,zt,zt,0]},Kc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*zt+.5|0},Im=function(e,t,n){var i=e?hr(e)?[e>>16,e>>8&zt,e&zt]:0:Qo.black,r,o,a,l,u,f,d,m,v,S;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Qo[e])i=Qo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&zt,i&zt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&zt,e&zt]}else if(e.substr(0,3)==="hsl"){if(i=S=e.match(Su),!t)l=+i[0]%360/360,u=+i[1]/100,f=+i[2]/100,o=f<=.5?f*(u+1):f+u-f*u,r=f*2-o,i.length>3&&(i[3]*=1),i[0]=Kc(l+1/3,r,o),i[1]=Kc(l,r,o),i[2]=Kc(l-1/3,r,o);else if(~e.indexOf("="))return i=e.match(fm),n&&i.length<4&&(i[3]=1),i}else i=e.match(Su)||Qo.transparent;i=i.map(Number)}return t&&!S&&(r=i[0]/zt,o=i[1]/zt,a=i[2]/zt,d=Math.max(r,o,a),m=Math.min(r,o,a),f=(d+m)/2,d===m?l=u=0:(v=d-m,u=f>.5?v/(2-d-m):v/(d+m),l=d===r?(o-a)/v+(o<a?6:0):d===o?(a-r)/v+2:(r-o)/v+4,l*=60),i[0]=~~(l+.5),i[1]=~~(u*100+.5),i[2]=~~(f*100+.5)),n&&i.length<4&&(i[3]=1),i},Um=function(e){var t=[],n=[],i=-1;return e.split(Fr).forEach(function(r){var o=r.match(ro)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Bd=function(e,t,n){var i="",r=(e+i).match(Fr),o=t?"hsla(":"rgba(",a=0,l,u,f,d;if(!r)return e;if(r=r.map(function(m){return(m=Im(m,t,1))&&o+(t?m[0]+","+m[1]+"%,"+m[2]+"%,"+m[3]:m.join(","))+")"}),n&&(f=Um(e),l=n.c,l.join(i)!==f.c.join(i)))for(u=e.replace(Fr,"1").split(ro),d=u.length-1;a<d;a++)i+=u[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(f.length?f:r.length?r:n).shift());if(!u)for(u=e.split(Fr),d=u.length-1;a<d;a++)i+=u[a]+r[a];return i+u[d]},Fr=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Qo)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),ST=/hsl[a]?\(/,Fm=function(e){var t=e.join(" "),n;if(Fr.lastIndex=0,Fr.test(t))return n=ST.test(t),e[1]=Bd(e[1],n),e[0]=Bd(e[0],n,Um(e[1])),!0},ma,ni=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,u,f,d,m,v,S=function y(x){var g=s()-i,C=x===!0,A,R,N,O;if(g>e&&(n+=g-t),i+=g,N=i-n,A=N-o,(A>0||C)&&(O=++d.frame,m=N-d.time*1e3,d.time=N=N/1e3,o+=A+(A>=r?4:r-A),R=1),C||(l=u(y)),R)for(v=0;v<a.length;v++)a[v](N,m,O,x)};return d={time:0,frame:0,tick:function(){S(!0)},deltaRatio:function(x){return m/(1e3/(x||60))},wake:function(){pm&&(!Tu&&ff()&&(hi=Tu=window,hf=hi.document||{},si.gsap=Qn,(hi.gsapVersions||(hi.gsapVersions=[])).push(Qn.version),mm(Rl||hi.GreenSockGlobals||!hi.gsap&&hi||{}),f=hi.requestAnimationFrame,Nm.forEach(Om)),l&&d.sleep(),u=f||function(x){return setTimeout(x,o-d.time*1e3+1|0)},ma=1,S(2))},sleep:function(){(f?hi.cancelAnimationFrame:clearTimeout)(l),ma=0,u=da},lagSmoothing:function(x,g){e=x||1/0,t=Math.min(g||33,e)},fps:function(x){r=1e3/(x||240),o=d.time*1e3+r},add:function(x,g,C){var A=g?function(R,N,O,p){x(R,N,O,p),d.remove(A)}:x;return d.remove(x),a[C?"unshift":"push"](A),Eo(),A},remove:function(x,g){~(g=a.indexOf(x))&&a.splice(g,1)&&v>=g&&v--},_listeners:a},d}(),Eo=function(){return!ma&&ni.wake()},Et={},TT=/^[\d.\-M][\d.\-,\s]/,MT=/["']/g,ET=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,u;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[i]=isNaN(u)?u.replace(MT,"").trim():+u,i=l.substr(a+1).trim();return t},AT=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},wT=function(e){var t=(e+"").split("("),n=Et[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[ET(t[1])]:AT(e).split(",").map(ym)):Et._CE&&TT.test(e)?Et._CE("",e):n},Bm=function(e){return function(t){return 1-e(1-t)}},km=function s(e,t){for(var n=e._first,i;n;)n instanceof Gn?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},_s=function(e,t){return e&&(rn(e)?e:Et[e]||wT(e))||t},Es=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return Kn(e,function(a){Et[a]=si[a]=r,Et[o=a.toLowerCase()]=n;for(var l in r)Et[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Et[a+"."+l]=r[l]}),r},zm=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Zc=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/bu*(Math.asin(1/i)||0),a=function(f){return f===1?1:i*Math.pow(2,-10*f)*tT((f-o)*r)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:zm(a);return r=bu/r,l.config=function(u,f){return s(e,u,f)},l},Jc=function s(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:zm(n);return i.config=function(r){return s(e,r)},i};Kn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Es(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Et.Linear.easeNone=Et.none=Et.Linear.easeIn;Es("Elastic",Zc("in"),Zc("out"),Zc());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?s*a*a:a<n?s*Math.pow(a-1.5/e,2)+.75:a<i?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};Es("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Es("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});Es("Circ",function(s){return-(cm(1-s*s)-1)});Es("Sine",function(s){return s===1?1:-eT(s*QS)+1});Es("Back",Jc("in"),Jc("out"),Jc());Et.SteppedEase=Et.steps=si.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-Ht;return function(a){return((i*Ta(0,o,a)|0)+r)*n}}};So.ease=Et["quad.out"];Kn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return mf+=s+","+s+"Params,"});var Hm=function(e,t){this.id=$S++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:vm,this.set=t?t.getSetter:yf},ga=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Mo(this,+t.duration,1,1),this.data=t.data,nn&&(this._ctx=nn,nn.data.push(this)),ma||ni.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Mo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Eo(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Kl(this,n),!r._dp||r.parent||Tm(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Vi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ht||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),xm(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Id(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Id(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?To(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Ht?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Dl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ht?0:this._rts,this.totalTime(Ta(-Math.abs(this._delay),this._tDur,r),i!==!1),Yl(this),lT(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Eo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ht&&(this._tTime-=Ht)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Vi(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Yn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Dl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=rT);var i=Un;return Un=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Un=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Ud(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Ud(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(fi(this,n),Yn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Yn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ht:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ht,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Ht)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(r){var o=rn(n)?n:bm,a=function(){var u=i.then;i.then=null,rn(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),r(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){Jo(this)},s}();xi(ga.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ht,_prom:0,_ps:!1,_rts:1});var Gn=function(s){lm(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Yn(n.sortChildren),Zt&&Vi(n.parent||Zt,ar(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Mm(ar(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return sa(0,arguments,this),this},t.from=function(i,r,o){return sa(1,arguments,this),this},t.fromTo=function(i,r,o,a){return sa(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,ra(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new fn(i,r,fi(this,o),1),this},t.call=function(i,r,o){return Vi(this,fn.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,a,l,u,f){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=f,o.parent=this,new fn(i,o,fi(this,l)),this},t.staggerFrom=function(i,r,o,a,l,u,f){return o.runBackwards=1,ra(o).immediateRender=Yn(o.immediateRender),this.staggerTo(i,r,o,a,l,u,f)},t.staggerFromTo=function(i,r,o,a,l,u,f,d){return a.startAt=o,ra(a).immediateRender=Yn(a.immediateRender),this.staggerTo(i,r,a,l,u,f,d)},t.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,f=i<=0?0:Sn(i),d=this._zTime<0!=i<0&&(this._initted||!u),m,v,S,y,x,g,C,A,R,N,O,p;if(this!==Zt&&f>l&&i>=0&&(f=l),f!==this._tTime||o||d){if(a!==this._time&&u&&(f+=this._time-a,i+=this._time-a),m=f,R=this._start,A=this._ts,g=!A,d&&(u||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(O=this._yoyo,x=u+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(x*100+i,r,o);if(m=Sn(f%x),f===l?(y=this._repeat,m=u):(y=~~(f/x),y&&y===f/x&&(m=u,y--),m>u&&(m=u)),N=To(this._tTime,x),!a&&this._tTime&&N!==y&&this._tTime-N*x-this._dur<=0&&(N=y),O&&y&1&&(m=u-m,p=1),y!==N&&!this._lock){var G=O&&N&1,E=G===(O&&y&1);if(y<N&&(G=!G),a=G?0:f%u?u:f,this._lock=1,this.render(a||(p?0:Sn(y*x)),r,!u)._lock=0,this._tTime=f,!r&&this.parent&&ii(this,"onRepeat"),this.vars.repeatRefresh&&!p&&(this.invalidate()._lock=1),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,E&&(this._lock=2,a=G?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!p&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;km(this,p)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(C=hT(this,Sn(a),Sn(m)),C&&(f-=m-(m=C._start))),this._tTime=f,this._time=m,this._act=!A,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&m&&!r&&!y&&(ii(this,"onStart"),this._tTime!==f))return this;if(m>=a&&i>=0)for(v=this._first;v;){if(S=v._next,(v._act||m>=v._start)&&v._ts&&C!==v){if(v.parent!==this)return this.render(i,r,o);if(v.render(v._ts>0?(m-v._start)*v._ts:(v._dirty?v.totalDuration():v._tDur)+(m-v._start)*v._ts,r,o),m!==this._time||!this._ts&&!g){C=0,S&&(f+=this._zTime=-Ht);break}}v=S}else{v=this._last;for(var D=i<0?i:m;v;){if(S=v._prev,(v._act||D<=v._end)&&v._ts&&C!==v){if(v.parent!==this)return this.render(i,r,o);if(v.render(v._ts>0?(D-v._start)*v._ts:(v._dirty?v.totalDuration():v._tDur)+(D-v._start)*v._ts,r,o||Un&&(v._initted||v._startAt)),m!==this._time||!this._ts&&!g){C=0,S&&(f+=this._zTime=D?-Ht:Ht);break}}v=S}}if(C&&!r&&(this.pause(),C.render(m>=a?0:-Ht)._zTime=m>=a?1:-1,this._ts))return this._start=R,Yl(this),this.render(i,r,o);this._onUpdate&&!r&&ii(this,"onUpdate",!0),(f===l&&this._tTime>=this.totalDuration()||!f&&a)&&(R===this._start||Math.abs(A)!==Math.abs(this._ts))&&(this._lock||((i||!u)&&(f===l&&this._ts>0||!f&&this._ts<0)&&kr(this,1),!r&&!(i<0&&!a)&&(f||a||!l)&&(ii(this,f===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(hr(r)||(r=fi(this,r,i)),!(i instanceof ga)){if(Fn(i))return i.forEach(function(a){return o.add(a,r)}),this;if(Mn(i))return this.addLabel(i,r);if(rn(i))i=fn.delayedCall(0,i);else return this}return this!==i?Vi(this,i,r):this},t.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-_i);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof fn?r&&l.push(u):(o&&l.push(u),i&&l.push.apply(l,u.getChildren(!0,r,o)))),u=u._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return Mn(i)?this.removeLabel(i):rn(i)?this.killTweensOf(i):(ql(this,i),i===this._recent&&(this._recent=this._last),gs(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Sn(ni.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=fi(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var a=fn.delayedCall(0,r||da,o);return a.data="isPause",this._hasPause=1,Vi(this,a,fi(this,i))},t.removePause=function(i){var r=this._first;for(i=fi(this,i);r;)r._start===i&&r.data==="isPause"&&kr(r),r=r._next},t.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Pr!==a[l]&&a[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],a=vi(i),l=this._first,u=hr(r),f;l;)l instanceof fn?sT(l._targets,a)&&(u?(!Pr||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(f=l.getTweensOf(a,r)).length&&o.push.apply(o,f),l=l._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,a=fi(o,i),l=r,u=l.startAt,f=l.onStart,d=l.onStartParams,m=l.immediateRender,v,S=fn.to(o,xi({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||Ht,onStart:function(){if(o.pause(),!v){var x=r.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());S._dur!==x&&Mo(S,x,0,1).render(S._time,!0,!0),v=1}f&&f.apply(S,d||[])}},r));return m?S.render(0):S},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,xi({startAt:{time:fi(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Fd(this,fi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Fd(this,fi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ht)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,u;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(u in l)l[u]>=o&&(l[u]+=i);return gs(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),gs(this)},t.totalDuration=function(i){var r=0,o=this,a=o._last,l=_i,u,f,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),f=a._start,f>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Vi(o,a,f-a._delay,1)._lock=0):l=f,f<0&&a._ts&&(r-=f,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=f/o._ts,o._time-=f,o._tTime-=f),o.shiftChildren(-f,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=u;Mo(o,o===Zt&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Zt._ts&&(xm(Zt,Dl(i,Zt)),_m=ni.frame),ni.frame>=Nd){Nd+=ri.autoSleep||120;var r=Zt._first;if((!r||!r._ts)&&ri.autoSleep&&ni._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||ni.sleep()}}},e}(ga);xi(Gn.prototype,{_lock:0,_hasPause:0,_forcing:0});var CT=function(e,t,n,i,r,o,a){var l=new Zn(this._pt,e,t,0,1,qm,null,r),u=0,f=0,d,m,v,S,y,x,g,C;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=pa(i)),o&&(C=[n,i],o(C,e,t),n=C[0],i=C[1]),m=n.match(qc)||[];d=qc.exec(i);)S=d[0],y=i.substring(u,d.index),v?v=(v+1)%5:y.substr(-5)==="rgba("&&(v=1),S!==m[f++]&&(x=parseFloat(m[f-1])||0,l._pt={_next:l._pt,p:y||f===1?y:",",s:x,c:S.charAt(1)==="="?co(x,S)-x:parseFloat(S)-x,m:v&&v<4?Math.round:0},u=qc.lastIndex);return l.c=u<i.length?i.substring(u,i.length):"",l.fp=a,(hm.test(i)||g)&&(l.e=0),this._pt=l,l},_f=function(e,t,n,i,r,o,a,l,u,f){rn(i)&&(i=i(r||0,e,o));var d=e[t],m=n!=="get"?n:rn(d)?u?e[t.indexOf("set")||!rn(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():d,v=rn(d)?u?NT:Xm:xf,S;if(Mn(i)&&(~i.indexOf("random(")&&(i=pa(i)),i.charAt(1)==="="&&(S=co(m,i)+(In(m)||0),(S||S===0)&&(i=S))),!f||m!==i||Lu)return!isNaN(m*i)&&i!==""?(S=new Zn(this._pt,e,t,+m||0,i-(m||0),typeof d=="boolean"?IT:jm,0,v),u&&(S.fp=u),a&&S.modifier(a,this,e),this._pt=S):(!d&&!(t in e)&&df(t,i),CT.call(this,e,t,m,i,v,l||ri.stringFilter,u))},RT=function(e,t,n,i,r){if(rn(e)&&(e=oa(e,r,t,n,i)),!Yi(e)||e.style&&e.nodeType||Fn(e)||um(e))return Mn(e)?oa(e,r,t,n,i):e;var o={},a;for(a in e)o[a]=oa(e[a],r,t,n,i);return o},Gm=function(e,t,n,i,r,o){var a,l,u,f;if(ti[e]&&(a=new ti[e]).init(r,a.rawVars?t[e]:RT(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new Zn(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==so))for(u=n._ptLookup[n._targets.indexOf(r)],f=a._props.length;f--;)u[a._props[f]]=l;return a},Pr,Lu,vf=function s(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,u=i.onUpdate,f=i.runBackwards,d=i.yoyoEase,m=i.keyframes,v=i.autoRevert,S=e._dur,y=e._startAt,x=e._targets,g=e.parent,C=g&&g.data==="nested"?g.vars.targets:x,A=e._overwrite==="auto"&&!cf,R=e.timeline,N,O,p,G,E,D,Z,q,$,k,X,Y,le;if(R&&(!m||!r)&&(r="none"),e._ease=_s(r,So.ease),e._yEase=d?Bm(_s(d===!0?r:d,So.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!R&&!!i.runBackwards,!R||m&&!i.stagger){if(q=x[0]?ms(x[0]).harness:0,Y=q&&i[q.prop],N=Pl(i,pf),y&&(y._zTime<0&&y.progress(1),t<0&&f&&a&&!v?y.render(-1,!0):y.revert(f&&S?_l:iT),y._lazy=0),o){if(kr(e._startAt=fn.set(x,xi({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!y&&Yn(l),startAt:null,delay:0,onUpdate:u&&function(){return ii(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Un||!a&&!v)&&e._startAt.revert(_l),a&&S&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&S&&!y){if(t&&(a=!1),p=xi({overwrite:!1,data:"isFromStart",lazy:a&&!y&&Yn(l),immediateRender:a,stagger:0,parent:g},N),Y&&(p[q.prop]=Y),kr(e._startAt=fn.set(x,p)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Un?e._startAt.revert(_l):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,Ht,Ht);else if(!t)return}for(e._pt=e._ptCache=0,l=S&&Yn(l)||l&&!S,O=0;O<x.length;O++){if(E=x[O],Z=E._gsap||gf(x)[O]._gsap,e._ptLookup[O]=k={},Mu[Z.id]&&Ur.length&&Ll(),X=C===x?O:C.indexOf(E),q&&($=new q).init(E,Y||N,e,X,C)!==!1&&(e._pt=G=new Zn(e._pt,E,$.name,0,1,$.render,$,0,$.priority),$._props.forEach(function(ce){k[ce]=G}),$.priority&&(D=1)),!q||Y)for(p in N)ti[p]&&($=Gm(p,N,e,X,E,C))?$.priority&&(D=1):k[p]=G=_f.call(e,E,p,"get",N[p],X,C,0,i.stringFilter);e._op&&e._op[O]&&e.kill(E,e._op[O]),A&&e._pt&&(Pr=e,Zt.killTweensOf(E,k,e.globalTime(t)),le=!e.parent,Pr=0),e._pt&&l&&(Mu[Z.id]=1)}D&&Ym(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!le,m&&t<=0&&R.render(_i,!0,!0)},LT=function(e,t,n,i,r,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],f,d,m,v;if(!u)for(u=e._ptCache[t]=[],m=e._ptLookup,v=e._targets.length;v--;){if(f=m[v][t],f&&f.d&&f.d._pt)for(f=f.d._pt;f&&f.p!==t&&f.fp!==t;)f=f._next;if(!f)return Lu=1,e.vars[t]="+=0",vf(e,a),Lu=0,l?ha(t+" not eligible for reset"):1;u.push(f)}for(v=u.length;v--;)d=u[v],f=d._pt||d,f.s=(i||i===0)&&!r?i:f.s+(i||0)+o*f.c,f.c=n-f.s,d.e&&(d.e=sn(n)+In(d.e)),d.b&&(d.b=f.s+In(d.b))},PT=function(e,t){var n=e[0]?ms(e[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return t;r=Ss({},t);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},DT=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,a;if(Fn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:r})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},oa=function(e,t,n,i,r){return rn(e)?e.call(t,n,i,r):Mn(e)&&~e.indexOf("random(")?pa(e):e},Vm=mf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Wm={};Kn(Vm+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Wm[s]=1});var fn=function(s){lm(e,s);function e(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:ra(i))||this;var l=a.vars,u=l.duration,f=l.delay,d=l.immediateRender,m=l.stagger,v=l.overwrite,S=l.keyframes,y=l.defaults,x=l.scrollTrigger,g=l.yoyoEase,C=i.parent||Zt,A=(Fn(n)||um(n)?hr(n[0]):"length"in i)?[n]:vi(n),R,N,O,p,G,E,D,Z;if(a._targets=A.length?gf(A):ha("GSAP target "+n+" not found. https://gsap.com",!ri.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=v,S||m||ul(u)||ul(f)){if(i=a.vars,R=a.timeline=new Gn({data:"nested",defaults:y||{},targets:C&&C.data==="nested"?C.vars.targets:A}),R.kill(),R.parent=R._dp=ar(a),R._start=0,m||ul(u)||ul(f)){if(p=A.length,D=m&&Cm(m),Yi(m))for(G in m)~Vm.indexOf(G)&&(Z||(Z={}),Z[G]=m[G]);for(N=0;N<p;N++)O=Pl(i,Wm),O.stagger=0,g&&(O.yoyoEase=g),Z&&Ss(O,Z),E=A[N],O.duration=+oa(u,ar(a),N,E,A),O.delay=(+oa(f,ar(a),N,E,A)||0)-a._delay,!m&&p===1&&O.delay&&(a._delay=f=O.delay,a._start+=f,O.delay=0),R.to(E,O,D?D(N,E,A):0),R._ease=Et.none;R.duration()?u=f=0:a.timeline=0}else if(S){ra(xi(R.vars.defaults,{ease:"none"})),R._ease=_s(S.ease||i.ease||"none");var q=0,$,k,X;if(Fn(S))S.forEach(function(Y){return R.to(A,Y,">")}),R.duration();else{O={};for(G in S)G==="ease"||G==="easeEach"||DT(G,S[G],O,S.easeEach);for(G in O)for($=O[G].sort(function(Y,le){return Y.t-le.t}),q=0,N=0;N<$.length;N++)k=$[N],X={ease:k.e,duration:(k.t-(N?$[N-1].t:0))/100*u},X[G]=k.v,R.to(A,X,q),q+=X.duration;R.duration()<u&&R.to({},{duration:u-R.duration()})}}u||a.duration(u=R.duration())}else a.timeline=0;return v===!0&&!cf&&(Pr=ar(a),Zt.killTweensOf(A),Pr=0),Vi(C,ar(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!u&&!S&&a._start===Sn(C._time)&&Yn(d)&&cT(ar(a))&&C.data!=="nested")&&(a._tTime=-Ht,a.render(Math.max(0,-f)||0)),x&&Mm(ar(a),x),a}var t=e.prototype;return t.render=function(i,r,o){var a=this._time,l=this._tDur,u=this._dur,f=i<0,d=i>l-Ht&&!f?l:i<Ht?0:i,m,v,S,y,x,g,C,A,R;if(!u)fT(this,i,r,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==f){if(m=d,A=this.timeline,this._repeat){if(y=u+this._rDelay,this._repeat<-1&&f)return this.totalTime(y*100+i,r,o);if(m=Sn(d%y),d===l?(S=this._repeat,m=u):(S=~~(d/y),S&&S===Sn(d/y)&&(m=u,S--),m>u&&(m=u)),g=this._yoyo&&S&1,g&&(R=this._yEase,m=u-m),x=To(this._tTime,y),m===a&&!o&&this._initted&&S===x)return this._tTime=d,this;S!==x&&(A&&this._yEase&&km(A,g),this.vars.repeatRefresh&&!g&&!this._lock&&this._time!==u&&this._initted&&(this._lock=o=1,this.render(Sn(y*S),!0).invalidate()._lock=0))}if(!this._initted){if(Em(this,f?i:m,o,r,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&S!==x))return this;if(u!==this._dur)return this.render(i,r,o)}if(this._tTime=d,this._time=m,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=C=(R||this._ease)(m/u),this._from&&(this.ratio=C=1-C),m&&!a&&!r&&!S&&(ii(this,"onStart"),this._tTime!==d))return this;for(v=this._pt;v;)v.r(C,v.d),v=v._next;A&&A.render(i<0?i:!m&&g?-Ht:A._dur*A._ease(m/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(f&&Eu(this,i,r,o),ii(this,"onUpdate")),this._repeat&&S!==x&&this.vars.onRepeat&&!r&&this.parent&&ii(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(f&&!this._onUpdate&&Eu(this,i,!0,!0),(i||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&kr(this,1),!r&&!(f&&!a)&&(d||a||g)&&(ii(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,a,l){ma||ni.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),f;return this._initted||vf(this,u),f=this._ease(u/this._dur),LT(this,i,r,o,a,f,u,l)?this.resetTo(i,r,o,a,1):(Kl(this,0),this.parent||Sm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Jo(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Pr&&Pr.vars.overwrite!==!0)._first||Jo(this),this.parent&&o!==this.timeline.totalDuration()&&Mo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?vi(i):a,u=this._ptLookup,f=this._pt,d,m,v,S,y,x,g;if((!r||r==="all")&&aT(a,l))return r==="all"&&(this._pt=0),Jo(this);for(d=this._op=this._op||[],r!=="all"&&(Mn(r)&&(y={},Kn(r,function(C){return y[C]=1}),r=y),r=PT(a,r)),g=a.length;g--;)if(~l.indexOf(a[g])){m=u[g],r==="all"?(d[g]=r,S=m,v={}):(v=d[g]=d[g]||{},S=r);for(y in S)x=m&&m[y],x&&((!("kill"in x.d)||x.d.kill(y)===!0)&&ql(this,x,"_pt"),delete m[y]),v!=="all"&&(v[y]=1)}return this._initted&&!this._pt&&f&&Jo(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return sa(1,arguments)},e.delayedCall=function(i,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,r,o){return sa(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return Zt.killTweensOf(i,r,o)},e}(ga);xi(fn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Kn("staggerTo,staggerFrom,staggerFromTo",function(s){fn[s]=function(){var e=new Gn,t=wu.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var xf=function(e,t,n){return e[t]=n},Xm=function(e,t,n){return e[t](n)},NT=function(e,t,n,i){return e[t](i.fp,n)},OT=function(e,t,n){return e.setAttribute(t,n)},yf=function(e,t){return rn(e[t])?Xm:uf(e[t])&&e.setAttribute?OT:xf},jm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},IT=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},qm=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},bf=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},UT=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},FT=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?ql(this,t,"_pt"):t.dep||(n=1),t=i;return!n},BT=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Ym=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},Zn=function(){function s(t,n,i,r,o,a,l,u,f){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||jm,this.d=l||this,this.set=u||xf,this.pr=f||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=BT,this.m=n,this.mt=r,this.tween=i},s}();Kn(mf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return pf[s]=1});si.TweenMax=si.TweenLite=fn;si.TimelineLite=si.TimelineMax=Gn;Zt=new Gn({sortChildren:!1,defaults:So,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ri.stringFilter=Fm;var vs=[],xl={},kT=[],kd=0,zT=0,Qc=function(e){return(xl[e]||kT).map(function(t){return t()})},Pu=function(){var e=Date.now(),t=[];e-kd>2&&(Qc("matchMediaInit"),vs.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,u;for(a in i)o=hi.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,u=1);u&&(n.revert(),l&&t.push(n))}),Qc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),kd=e,Qc("matchMedia"))},Km=function(){function s(t,n){this.selector=n&&Cu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=zT++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){rn(n)&&(r=i,i=n,n=rn);var o=this,a=function(){var u=nn,f=o.selector,d;return u&&u!==o&&u.data.push(o),r&&(o.selector=Cu(r)),nn=o,d=i.apply(o,arguments),rn(d)&&o._r.push(d),nn=u,o.selector=f,o.isReverted=!1,d};return o.last=a,n===rn?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=nn;nn=null,n(this),nn=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof fn&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?function(){for(var a=r.getTweens(),l=r.data.length,u;l--;)u=r.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(f){return a.splice(a.indexOf(f),1)}));for(a.map(function(f){return{g:f._dur||f._delay||f._sat&&!f._sat.vars.immediateRender?f.globalTime(0):-1/0,t:f}}).sort(function(f,d){return d.g-f.g||-1/0}).forEach(function(f){return f.t.revert(n)}),l=r.data.length;l--;)u=r.data[l],u instanceof Gn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof fn)&&u.revert&&u.revert(n);r._r.forEach(function(f){return f(n,r)}),r.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=vs.length;o--;)vs[o].id===this.id&&vs.splice(o,1)},e.revert=function(n){this.kill(n||{})},s}(),HT=function(){function s(t){this.contexts=[],this.scope=t}var e=s.prototype;return e.add=function(n,i,r){Yi(n)||(n={matches:n});var o=new Km(0,r||this.scope),a=o.conditions={},l,u,f;nn&&!o.selector&&(o.selector=nn.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(u in n)u==="all"?f=1:(l=hi.matchMedia(n[u]),l&&(vs.indexOf(o)<0&&vs.push(o),(a[u]=l.matches)&&(f=1),l.addListener?l.addListener(Pu):l.addEventListener("change",Pu)));return f&&i(o,function(d){return o.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),Nl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Om(i)})},timeline:function(e){return new Gn(e)},getTweensOf:function(e,t){return Zt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Mn(e)&&(e=vi(e)[0]);var r=ms(e||{}).get,o=n?bm:ym;return n==="native"&&(n=""),e&&(t?o((ti[t]&&ti[t].get||r)(e,t,n,i)):function(a,l,u){return o((ti[a]&&ti[a].get||r)(e,a,l,u))})},quickSetter:function(e,t,n){if(e=vi(e),e.length>1){var i=e.map(function(f){return Qn.quickSetter(f,t,n)}),r=i.length;return function(f){for(var d=r;d--;)i[d](f)}}e=e[0]||{};var o=ti[t],a=ms(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(f){var d=new o;so._pt=0,d.init(e,n?f+n:f,so,0,[e]),d.render(1,d),so._pt&&bf(1,so)}:a.set(e,l);return o?u:function(f){return u(e,l,n?f+n:f,a,1)}},quickTo:function(e,t,n){var i,r=Qn.to(e,Ss((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(l,u,f){return r.resetTo(t,l,u,f)};return o.tween=r,o},isTweening:function(e){return Zt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=_s(e.ease,So.ease)),Od(So,e||{})},config:function(e){return Od(ri,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!ti[a]&&!si[a]&&ha(t+" effect requires "+a+" plugin.")}),Yc[t]=function(a,l,u){return n(vi(a),xi(l||{},r),u)},o&&(Gn.prototype[t]=function(a,l,u){return this.add(Yc[t](a,Yi(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){Et[e]=_s(t)},parseEase:function(e,t){return arguments.length?_s(e,t):Et},getById:function(e){return Zt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Gn(e),i,r;for(n.smoothChildTiming=Yn(e.smoothChildTiming),Zt.remove(n),n._dp=0,n._time=n._tTime=Zt._time,i=Zt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof fn&&i.vars.onComplete===i._targets[0]))&&Vi(n,i,i._start-i._delay),i=r;return Vi(Zt,n,0),n},context:function(e,t){return e?new Km(e,t):nn},matchMedia:function(e){return new HT(e)},matchMediaRefresh:function(){return vs.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Pu()},addEventListener:function(e,t){var n=xl[e]||(xl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=xl[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:xT,wrapYoyo:yT,distribute:Cm,random:Lm,snap:Rm,normalize:vT,getUnit:In,clamp:pT,splitColor:Im,toArray:vi,selector:Cu,mapRange:Dm,pipe:gT,unitize:_T,interpolate:bT,shuffle:wm},install:mm,effects:Yc,ticker:ni,updateRoot:Gn.updateRoot,plugins:ti,globalTimeline:Zt,core:{PropTween:Zn,globals:gm,Tween:fn,Timeline:Gn,Animation:ga,getCache:ms,_removeLinkedListItem:ql,reverting:function(){return Un},context:function(e){return e&&nn&&(nn.data.push(e),e._ctx=nn),nn},suppressOverwrites:function(e){return cf=e}}};Kn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Nl[s]=fn[s]});ni.add(Gn.updateRoot);so=Nl.to({},{duration:0});var GT=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},VT=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=GT(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},$c=function(e,t){return{name:e,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,u;if(Mn(r)&&(l={},Kn(r,function(f){return l[f]=1}),r=l),t){l={};for(u in r)l[u]=t(r[u]);r=l}VT(a,r)}}}},Qn=Nl.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Un?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},$c("roundProps",Ru),$c("modifiers"),$c("snap",Rm))||Nl;fn.version=Gn.version=Qn.version="3.12.4";pm=1;ff()&&Eo();Et.Power0;Et.Power1;Et.Power2;Et.Power3;Et.Power4;Et.Linear;Et.Quad;Et.Cubic;Et.Quart;Et.Quint;Et.Strong;Et.Elastic;Et.Back;Et.SteppedEase;Et.Bounce;Et.Sine;Et.Expo;Et.Circ;/*!
 * CSSPlugin 3.12.4
 * https://gsap.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var zd,Dr,uo,Sf,fs,Hd,Tf,WT=function(){return typeof window<"u"},dr={},as=180/Math.PI,fo=Math.PI/180,$s=Math.atan2,Gd=1e8,Mf=/([A-Z])/g,XT=/(left|right|width|margin|padding|x)/i,jT=/[\s,\(]\S/,Wi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Du=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},qT=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},YT=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},KT=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Zm=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Jm=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},ZT=function(e,t,n){return e.style[t]=n},JT=function(e,t,n){return e.style.setProperty(t,n)},QT=function(e,t,n){return e._gsap[t]=n},$T=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},eM=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},tM=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},Jt="transform",Jn=Jt+"Origin",nM=function s(e,t){var n=this,i=this.target,r=i.style,o=i._gsap;if(e in dr&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Wi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=lr(i,a)}):this.tfm[e]=o.x?o[e]:lr(i,e),e===Jn&&(this.tfm.zOrigin=o.zOrigin);else return Wi.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(Jt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Jn,t,"")),e=Jt}(r||t)&&this.props.push(e,t,r[e])},Qm=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},iM=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Mf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Tf(),(!r||!r.isStart)&&!n[Jt]&&(Qm(n),i.zOrigin&&n[Jn]&&(n[Jn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},$m=function(e,t){var n={target:e,props:[],revert:iM,save:nM};return e._gsap||Qn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},eg,Nu=function(e,t){var n=Dr.createElementNS?Dr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Dr.createElement(e);return n&&n.style?n:Dr.createElement(e)},ji=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Mf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,Ao(t)||t,1)||""},Vd="O,Moz,ms,Ms,Webkit".split(","),Ao=function(e,t,n){var i=t||fs,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Vd[o]+e in r););return o<0?null:(o===3?"ms":o>=0?Vd[o]:"")+e},Ou=function(){WT()&&window.document&&(zd=window,Dr=zd.document,uo=Dr.documentElement,fs=Nu("div")||{style:{}},Nu("div"),Jt=Ao(Jt),Jn=Jt+"Origin",fs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",eg=!!Ao("perspective"),Tf=Qn.core.reverting,Sf=1)},eu=function s(e){var t=Nu("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,o;if(uo.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),uo.removeChild(t),this.style.cssText=r,o},Wd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},tg=function(e){var t;try{t=e.getBBox()}catch{t=eu.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===eu||(t=eu.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Wd(e,["x","cx","x1"])||0,y:+Wd(e,["y","cy","y1"])||0,width:0,height:0}:t},ng=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&tg(e))},Ts=function(e,t){if(t){var n=e.style,i;t in dr&&t!==Jn&&(t=Jt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Mf,"-$1").toLowerCase())):n.removeAttribute(t)}},Nr=function(e,t,n,i,r,o){var a=new Zn(e._pt,t,n,0,1,o?Jm:Zm);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},Xd={deg:1,rad:1,turn:1},rM={grid:1,flex:1},zr=function s(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=fs.style,l=XT.test(t),u=e.tagName.toLowerCase()==="svg",f=(u?"client":"offset")+(l?"Width":"Height"),d=100,m=i==="px",v=i==="%",S,y,x,g;if(i===o||!r||Xd[i]||Xd[o])return r;if(o!=="px"&&!m&&(r=s(e,t,n,"px")),g=e.getCTM&&ng(e),(v||o==="%")&&(dr[t]||~t.indexOf("adius")))return S=g?e.getBBox()[l?"width":"height"]:e[f],sn(v?r/S*d:r/100*S);if(a[l?"width":"height"]=d+(m?o:i),y=~t.indexOf("adius")||i==="em"&&e.appendChild&&!u?e:e.parentNode,g&&(y=(e.ownerSVGElement||{}).parentNode),(!y||y===Dr||!y.appendChild)&&(y=Dr.body),x=y._gsap,x&&v&&x.width&&l&&x.time===ni.time&&!x.uncache)return sn(r/x.width*d);if(v&&(t==="height"||t==="width")){var C=e.style[t];e.style[t]=d+i,S=e[f],C?e.style[t]=C:Ts(e,t)}else(v||o==="%")&&!rM[ji(y,"display")]&&(a.position=ji(e,"position")),y===e&&(a.position="static"),y.appendChild(fs),S=fs[f],y.removeChild(fs),a.position="absolute";return l&&v&&(x=ms(y),x.time=ni.time,x.width=y[f]),sn(m?S*r/d:S&&r?d/S*r:0)},lr=function(e,t,n,i){var r;return Sf||Ou(),t in Wi&&t!=="transform"&&(t=Wi[t],~t.indexOf(",")&&(t=t.split(",")[0])),dr[t]&&t!=="transform"?(r=va(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Il(ji(e,Jn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Ol[t]&&Ol[t](e,t,n)||ji(e,t)||vm(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?zr(e,t,r,n)+n:r},sM=function(e,t,n,i){if(!n||n==="none"){var r=Ao(t,e,1),o=r&&ji(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=ji(e,"borderTopColor"))}var a=new Zn(this._pt,e.style,t,0,1,qm),l=0,u=0,f,d,m,v,S,y,x,g,C,A,R,N;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(y=e.style[t],e.style[t]=i,i=ji(e,t)||i,y?e.style[t]=y:Ts(e,t)),f=[n,i],Fm(f),n=f[0],i=f[1],m=n.match(ro)||[],N=i.match(ro)||[],N.length){for(;d=ro.exec(i);)x=d[0],C=i.substring(l,d.index),S?S=(S+1)%5:(C.substr(-5)==="rgba("||C.substr(-5)==="hsla(")&&(S=1),x!==(y=m[u++]||"")&&(v=parseFloat(y)||0,R=y.substr((v+"").length),x.charAt(1)==="="&&(x=co(v,x)+R),g=parseFloat(x),A=x.substr((g+"").length),l=ro.lastIndex-A.length,A||(A=A||ri.units[t]||R,l===i.length&&(i+=A,a.e+=A)),R!==A&&(v=zr(e,t,y,A)||0),a._pt={_next:a._pt,p:C||u===1?C:",",s:v,c:g-v,m:S&&S<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Jm:Zm;return hm.test(i)&&(a.e=0),this._pt=a,a},jd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},oM=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=jd[n]||n,t[1]=jd[i]||i,t.join(" ")},aM=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,a,l,u;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),u=r.length;--u>-1;)a=r[u],dr[a]&&(l=1,a=a==="transformOrigin"?Jn:Jt),Ts(n,a);l&&(Ts(n,Jt),o&&(o.svg&&n.removeAttribute("transform"),va(n,1),o.uncache=1,Qm(i)))}},Ol={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new Zn(e._pt,t,n,0,0,aM);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},_a=[1,0,0,1,0,0],ig={},rg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},qd=function(e){var t=ji(e,Jt);return rg(t)?_a:t.substr(7).match(fm).map(sn)},Ef=function(e,t){var n=e._gsap||ms(e),i=e.style,r=qd(e),o,a,l,u;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?_a:r):(r===_a&&!e.offsetParent&&e!==uo&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(u=1,a=e.nextElementSibling,uo.appendChild(e)),r=qd(e),l?i.display=l:Ts(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):uo.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Iu=function(e,t,n,i,r,o){var a=e._gsap,l=r||Ef(e,!0),u=a.xOrigin||0,f=a.yOrigin||0,d=a.xOffset||0,m=a.yOffset||0,v=l[0],S=l[1],y=l[2],x=l[3],g=l[4],C=l[5],A=t.split(" "),R=parseFloat(A[0])||0,N=parseFloat(A[1])||0,O,p,G,E;n?l!==_a&&(p=v*x-S*y)&&(G=R*(x/p)+N*(-y/p)+(y*C-x*g)/p,E=R*(-S/p)+N*(v/p)-(v*C-S*g)/p,R=G,N=E):(O=tg(e),R=O.x+(~A[0].indexOf("%")?R/100*O.width:R),N=O.y+(~(A[1]||A[0]).indexOf("%")?N/100*O.height:N)),i||i!==!1&&a.smooth?(g=R-u,C=N-f,a.xOffset=d+(g*v+C*y)-g,a.yOffset=m+(g*S+C*x)-C):a.xOffset=a.yOffset=0,a.xOrigin=R,a.yOrigin=N,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Jn]="0px 0px",o&&(Nr(o,a,"xOrigin",u,R),Nr(o,a,"yOrigin",f,N),Nr(o,a,"xOffset",d,a.xOffset),Nr(o,a,"yOffset",m,a.yOffset)),e.setAttribute("data-svg-origin",R+" "+N)},va=function(e,t){var n=e._gsap||new Hm(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=ji(e,Jn)||"0",f,d,m,v,S,y,x,g,C,A,R,N,O,p,G,E,D,Z,q,$,k,X,Y,le,ce,fe,me,Te,Me,ae,_e,Le;return f=d=m=y=x=g=C=A=R=0,v=S=1,n.svg=!!(e.getCTM&&ng(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Jt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Jt]!=="none"?l[Jt]:"")),i.scale=i.rotate=i.translate="none"),p=Ef(e,n.svg),n.svg&&(n.uncache?(ce=e.getBBox(),u=n.xOrigin-ce.x+"px "+(n.yOrigin-ce.y)+"px",le=""):le=!t&&e.getAttribute("data-svg-origin"),Iu(e,le||u,!!le||n.originIsAbsolute,n.smooth!==!1,p)),N=n.xOrigin||0,O=n.yOrigin||0,p!==_a&&(Z=p[0],q=p[1],$=p[2],k=p[3],f=X=p[4],d=Y=p[5],p.length===6?(v=Math.sqrt(Z*Z+q*q),S=Math.sqrt(k*k+$*$),y=Z||q?$s(q,Z)*as:0,C=$||k?$s($,k)*as+y:0,C&&(S*=Math.abs(Math.cos(C*fo))),n.svg&&(f-=N-(N*Z+O*$),d-=O-(N*q+O*k))):(Le=p[6],ae=p[7],me=p[8],Te=p[9],Me=p[10],_e=p[11],f=p[12],d=p[13],m=p[14],G=$s(Le,Me),x=G*as,G&&(E=Math.cos(-G),D=Math.sin(-G),le=X*E+me*D,ce=Y*E+Te*D,fe=Le*E+Me*D,me=X*-D+me*E,Te=Y*-D+Te*E,Me=Le*-D+Me*E,_e=ae*-D+_e*E,X=le,Y=ce,Le=fe),G=$s(-$,Me),g=G*as,G&&(E=Math.cos(-G),D=Math.sin(-G),le=Z*E-me*D,ce=q*E-Te*D,fe=$*E-Me*D,_e=k*D+_e*E,Z=le,q=ce,$=fe),G=$s(q,Z),y=G*as,G&&(E=Math.cos(G),D=Math.sin(G),le=Z*E+q*D,ce=X*E+Y*D,q=q*E-Z*D,Y=Y*E-X*D,Z=le,X=ce),x&&Math.abs(x)+Math.abs(y)>359.9&&(x=y=0,g=180-g),v=sn(Math.sqrt(Z*Z+q*q+$*$)),S=sn(Math.sqrt(Y*Y+Le*Le)),G=$s(X,Y),C=Math.abs(G)>2e-4?G*as:0,R=_e?1/(_e<0?-_e:_e):0),n.svg&&(le=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!rg(ji(e,Jt)),le&&e.setAttribute("transform",le))),Math.abs(C)>90&&Math.abs(C)<270&&(r?(v*=-1,C+=y<=0?180:-180,y+=y<=0?180:-180):(S*=-1,C+=C<=0?180:-180)),t=t||n.uncache,n.x=f-((n.xPercent=f&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-f)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=m+o,n.scaleX=sn(v),n.scaleY=sn(S),n.rotation=sn(y)+a,n.rotationX=sn(x)+a,n.rotationY=sn(g)+a,n.skewX=C+a,n.skewY=A+a,n.transformPerspective=R+o,(n.zOrigin=parseFloat(u.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Jn]=Il(u)),n.xOffset=n.yOffset=0,n.force3D=ri.force3D,n.renderTransform=n.svg?cM:eg?sg:lM,n.uncache=0,n},Il=function(e){return(e=e.split(" "))[0]+" "+e[1]},tu=function(e,t,n){var i=In(t);return sn(parseFloat(t)+parseFloat(zr(e,"x",n+"px",i)))+i},lM=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,sg(e,t)},is="0deg",qo="0px",rs=") ",sg=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,u=n.rotation,f=n.rotationY,d=n.rotationX,m=n.skewX,v=n.skewY,S=n.scaleX,y=n.scaleY,x=n.transformPerspective,g=n.force3D,C=n.target,A=n.zOrigin,R="",N=g==="auto"&&e&&e!==1||g===!0;if(A&&(d!==is||f!==is)){var O=parseFloat(f)*fo,p=Math.sin(O),G=Math.cos(O),E;O=parseFloat(d)*fo,E=Math.cos(O),o=tu(C,o,p*E*-A),a=tu(C,a,-Math.sin(O)*-A),l=tu(C,l,G*E*-A+A)}x!==qo&&(R+="perspective("+x+rs),(i||r)&&(R+="translate("+i+"%, "+r+"%) "),(N||o!==qo||a!==qo||l!==qo)&&(R+=l!==qo||N?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+rs),u!==is&&(R+="rotate("+u+rs),f!==is&&(R+="rotateY("+f+rs),d!==is&&(R+="rotateX("+d+rs),(m!==is||v!==is)&&(R+="skew("+m+", "+v+rs),(S!==1||y!==1)&&(R+="scale("+S+", "+y+rs),C.style[Jt]=R||"translate(0, 0)"},cM=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,u=n.skewX,f=n.skewY,d=n.scaleX,m=n.scaleY,v=n.target,S=n.xOrigin,y=n.yOrigin,x=n.xOffset,g=n.yOffset,C=n.forceCSS,A=parseFloat(o),R=parseFloat(a),N,O,p,G,E;l=parseFloat(l),u=parseFloat(u),f=parseFloat(f),f&&(f=parseFloat(f),u+=f,l+=f),l||u?(l*=fo,u*=fo,N=Math.cos(l)*d,O=Math.sin(l)*d,p=Math.sin(l-u)*-m,G=Math.cos(l-u)*m,u&&(f*=fo,E=Math.tan(u-f),E=Math.sqrt(1+E*E),p*=E,G*=E,f&&(E=Math.tan(f),E=Math.sqrt(1+E*E),N*=E,O*=E)),N=sn(N),O=sn(O),p=sn(p),G=sn(G)):(N=d,G=m,O=p=0),(A&&!~(o+"").indexOf("px")||R&&!~(a+"").indexOf("px"))&&(A=zr(v,"x",o,"px"),R=zr(v,"y",a,"px")),(S||y||x||g)&&(A=sn(A+S-(S*N+y*p)+x),R=sn(R+y-(S*O+y*G)+g)),(i||r)&&(E=v.getBBox(),A=sn(A+i/100*E.width),R=sn(R+r/100*E.height)),E="matrix("+N+","+O+","+p+","+G+","+A+","+R+")",v.setAttribute("transform",E),C&&(v.style[Jt]=E)},uM=function(e,t,n,i,r){var o=360,a=Mn(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?as:1),u=l-i,f=i+u+"deg",d,m;return a&&(d=r.split("_")[1],d==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),d==="cw"&&u<0?u=(u+o*Gd)%o-~~(u/o)*o:d==="ccw"&&u>0&&(u=(u-o*Gd)%o-~~(u/o)*o)),e._pt=m=new Zn(e._pt,t,n,i,u,qT),m.e=f,m.u="deg",e._props.push(n),m},Yd=function(e,t){for(var n in t)e[n]=t[n];return e},fM=function(e,t,n){var i=Yd({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,u,f,d,m,v,S;i.svg?(u=n.getAttribute("transform"),n.setAttribute("transform",""),o[Jt]=t,a=va(n,1),Ts(n,Jt),n.setAttribute("transform",u)):(u=getComputedStyle(n)[Jt],o[Jt]=t,a=va(n,1),o[Jt]=u);for(l in dr)u=i[l],f=a[l],u!==f&&r.indexOf(l)<0&&(v=In(u),S=In(f),d=v!==S?zr(n,l,u,S):parseFloat(u),m=parseFloat(f),e._pt=new Zn(e._pt,a,l,d,m-d,Du),e._pt.u=S||0,e._props.push(l));Yd(a,i)};Kn("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?s+a:"border"+a+s});Ol[e>1?"border"+s:s]=function(a,l,u,f,d){var m,v;if(arguments.length<4)return m=o.map(function(S){return lr(a,S,u)}),v=m.join(" "),v.split(m[0]).length===5?m[0]:v;m=(f+"").split(" "),v={},o.forEach(function(S,y){return v[S]=m[y]=m[y]||m[(y-1)/2|0]}),a.init(l,v,d)}});var og={name:"css",register:Ou,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,a=e.style,l=n.vars.startAt,u,f,d,m,v,S,y,x,g,C,A,R,N,O,p,G;Sf||Ou(),this.styles=this.styles||$m(e),G=this.styles.props,this.tween=n;for(y in t)if(y!=="autoRound"&&(f=t[y],!(ti[y]&&Gm(y,t,n,i,e,r)))){if(v=typeof f,S=Ol[y],v==="function"&&(f=f.call(n,i,e,r),v=typeof f),v==="string"&&~f.indexOf("random(")&&(f=pa(f)),S)S(this,e,y,f,n)&&(p=1);else if(y.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(y)+"").trim(),f+="",Fr.lastIndex=0,Fr.test(u)||(x=In(u),g=In(f)),g?x!==g&&(u=zr(e,y,u,g)+g):x&&(f+=x),this.add(a,"setProperty",u,f,i,r,0,0,y),o.push(y),G.push(y,0,a[y]);else if(v!=="undefined"){if(l&&y in l?(u=typeof l[y]=="function"?l[y].call(n,i,e,r):l[y],Mn(u)&&~u.indexOf("random(")&&(u=pa(u)),In(u+"")||u==="auto"||(u+=ri.units[y]||In(lr(e,y))||""),(u+"").charAt(1)==="="&&(u=lr(e,y))):u=lr(e,y),m=parseFloat(u),C=v==="string"&&f.charAt(1)==="="&&f.substr(0,2),C&&(f=f.substr(2)),d=parseFloat(f),y in Wi&&(y==="autoAlpha"&&(m===1&&lr(e,"visibility")==="hidden"&&d&&(m=0),G.push("visibility",0,a.visibility),Nr(this,a,"visibility",m?"inherit":"hidden",d?"inherit":"hidden",!d)),y!=="scale"&&y!=="transform"&&(y=Wi[y],~y.indexOf(",")&&(y=y.split(",")[0]))),A=y in dr,A){if(this.styles.save(y),R||(N=e._gsap,N.renderTransform&&!t.parseTransform||va(e,t.parseTransform),O=t.smoothOrigin!==!1&&N.smooth,R=this._pt=new Zn(this._pt,a,Jt,0,1,N.renderTransform,N,0,-1),R.dep=1),y==="scale")this._pt=new Zn(this._pt,N,"scaleY",N.scaleY,(C?co(N.scaleY,C+d):d)-N.scaleY||0,Du),this._pt.u=0,o.push("scaleY",y),y+="X";else if(y==="transformOrigin"){G.push(Jn,0,a[Jn]),f=oM(f),N.svg?Iu(e,f,0,O,0,this):(g=parseFloat(f.split(" ")[2])||0,g!==N.zOrigin&&Nr(this,N,"zOrigin",N.zOrigin,g),Nr(this,a,y,Il(u),Il(f)));continue}else if(y==="svgOrigin"){Iu(e,f,1,O,0,this);continue}else if(y in ig){uM(this,N,y,m,C?co(m,C+f):f);continue}else if(y==="smoothOrigin"){Nr(this,N,"smooth",N.smooth,f);continue}else if(y==="force3D"){N[y]=f;continue}else if(y==="transform"){fM(this,f,e);continue}}else y in a||(y=Ao(y)||y);if(A||(d||d===0)&&(m||m===0)&&!jT.test(f)&&y in a)x=(u+"").substr((m+"").length),d||(d=0),g=In(f)||(y in ri.units?ri.units[y]:x),x!==g&&(m=zr(e,y,u,g)),this._pt=new Zn(this._pt,A?N:a,y,m,(C?co(m,C+d):d)-m,!A&&(g==="px"||y==="zIndex")&&t.autoRound!==!1?KT:Du),this._pt.u=g||0,x!==g&&g!=="%"&&(this._pt.b=u,this._pt.r=YT);else if(y in a)sM.call(this,e,y,u,C?C+f:f);else if(y in e)this.add(e,y,u||e[y],C?C+f:f,i,r);else if(y!=="parseTransform"){df(y,f);continue}A||(y in a?G.push(y,0,a[y]):G.push(y,1,u||e[y])),o.push(y)}}p&&Ym(this)},render:function(e,t){if(t.tween._time||!Tf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:lr,aliases:Wi,getSetter:function(e,t,n){var i=Wi[t];return i&&i.indexOf(",")<0&&(t=i),t in dr&&t!==Jn&&(e._gsap.x||lr(e,"x"))?n&&Hd===n?t==="scale"?$T:QT:(Hd=n||{})&&(t==="scale"?eM:tM):e.style&&!uf(e.style[t])?ZT:~t.indexOf("-")?JT:yf(e,t)},core:{_removeProperty:Ts,_getMatrix:Ef}};Qn.utils.checkPrefix=Ao;Qn.core.getStyleSaver=$m;(function(s,e,t,n){var i=Kn(s+","+e+","+t,function(r){dr[r]=1});Kn(e,function(r){ri.units[r]="deg",ig[r]=1}),Wi[i[13]]=s+","+e,Kn(n,function(r){var o=r.split(":");Wi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Kn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){ri.units[s]="px"});Qn.registerPlugin(og);var Nt=Qn.registerPlugin(og)||Qn;Nt.core.Tween;function Kd(s,e){if(e===O_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===du||e===Pp){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===du)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class hM extends Ms{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new _M(t)}),this.register(function(t){return new AM(t)}),this.register(function(t){return new wM(t)}),this.register(function(t){return new CM(t)}),this.register(function(t){return new xM(t)}),this.register(function(t){return new yM(t)}),this.register(function(t){return new bM(t)}),this.register(function(t){return new SM(t)}),this.register(function(t){return new gM(t)}),this.register(function(t){return new TM(t)}),this.register(function(t){return new vM(t)}),this.register(function(t){return new EM(t)}),this.register(function(t){return new MM(t)}),this.register(function(t){return new pM(t)}),this.register(function(t){return new RM(t)}),this.register(function(t){return new LM(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const u=ia.extractUrlBase(e);o=ia.resolveURL(u,this.path)}else o=ia.extractUrlBase(e);this.manager.itemStart(e);const a=function(u){i?i(u):console.error(u),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Cl(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(u){try{r.parse(u,o,function(f){t(f),r.manager.itemEnd(e)},a)}catch(f){a(f)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===ag){try{o[Tt.KHR_BINARY_GLTF]=new PM(e)}catch(d){i&&i(d);return}r=JSON.parse(o[Tt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new WM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let f=0;f<this.pluginCallbacks.length;f++){const d=this.pluginCallbacks[f](u);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let f=0;f<r.extensionsUsed.length;++f){const d=r.extensionsUsed[f],m=r.extensionsRequired||[];switch(d){case Tt.KHR_MATERIALS_UNLIT:o[d]=new mM;break;case Tt.KHR_DRACO_MESH_COMPRESSION:o[d]=new DM(r,this.dracoLoader);break;case Tt.KHR_TEXTURE_TRANSFORM:o[d]=new NM;break;case Tt.KHR_MESH_QUANTIZATION:o[d]=new OM;break;default:m.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}u.setExtensions(o),u.setPlugins(a),u.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function dM(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class pM{constructor(e){this.parser=e,this.name=Tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let u;const f=new je(16777215);l.color!==void 0&&f.setRGB(l.color[0],l.color[1],l.color[2],gn);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":u=new kS(f),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new FS(f),u.distance=d;break;case"spot":u=new om(f),u.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,u.angle=l.spot.outerConeAngle,u.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return u.position.set(0,0,0),u.decay=2,wr(u,l),l.intensity!==void 0&&(u.intensity=l.intensity),u.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(u),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class mM{constructor(){this.name=Tt.KHR_MATERIALS_UNLIT}getMaterialType(){return Rr}extendParams(e,t,n){const i=[];e.color=new je(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],gn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Yt))}return Promise.all(i)}}class gM{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class _M{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ze(a,a)}return Promise.all(r)}}class vM{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class xM{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new je(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],gn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Yt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class yM{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class bM{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new je().setRGB(a[0],a[1],a[2],gn),Promise.all(r)}}class SM{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mr}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class TM{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new je().setRGB(a[0],a[1],a[2],gn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Yt)),Promise.all(r)}}class MM{constructor(e){this.parser=e,this.name=Tt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class EM{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class AM{constructor(e){this.parser=e,this.name=Tt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class wM{constructor(e){this.parser=e,this.name=Tt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const u=n.options.manager.getHandler(a.uri);u!==null&&(l=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class CM{constructor(e){this.parser=e,this.name=Tt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const u=n.options.manager.getHandler(a.uri);u!==null&&(l=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class RM{constructor(e){this.name=Tt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,u=i.byteLength||0,f=i.count,d=i.byteStride,m=new Uint8Array(a,l,u);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(f,d,m,i.mode,i.filter).then(function(v){return v.buffer}):o.ready.then(function(){const v=new ArrayBuffer(f*d);return o.decodeGltfBuffer(new Uint8Array(v),f,d,m,i.mode,i.filter),v})})}else return null}}class LM{constructor(e){this.name=Tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const u of i.primitives)if(u.mode!==di.TRIANGLES&&u.mode!==di.TRIANGLE_STRIP&&u.mode!==di.TRIANGLE_FAN&&u.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const u in o)a.push(this.parser.getDependency("accessor",o[u]).then(f=>(l[u]=f,l[u])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(u=>{const f=u.pop(),d=f.isGroup?f.children:[f],m=u[0].count,v=[];for(const S of d){const y=new ut,x=new V,g=new Gr,C=new V(1,1,1),A=new vS(S.geometry,S.material,m);for(let R=0;R<m;R++)l.TRANSLATION&&x.fromBufferAttribute(l.TRANSLATION,R),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,R),l.SCALE&&C.fromBufferAttribute(l.SCALE,R),A.setMatrixAt(R,y.compose(x,g,C));for(const R in l)if(R==="_COLOR_0"){const N=l[R];A.instanceColor=new vu(N.array,N.itemSize,N.normalized)}else R!=="TRANSLATION"&&R!=="ROTATION"&&R!=="SCALE"&&S.geometry.setAttribute(R,l[R]);Qt.prototype.copy.call(A,S),this.parser.assignFinalMaterial(A),v.push(A)}return f.isGroup?(f.clear(),f.add(...v),f):v[0]}))}}const ag="glTF",Yo=12,Zd={JSON:1313821514,BIN:5130562};class PM{constructor(e){this.name=Tt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Yo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ag)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Yo,r=new DataView(e,Yo);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Zd.JSON){const u=new Uint8Array(e,Yo+o,a);this.content=n.decode(u)}else if(l===Zd.BIN){const u=Yo+o;this.body=e.slice(u,u+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class DM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},u={};for(const f in o){const d=Uu[f]||f.toLowerCase();a[d]=o[f]}for(const f in e.attributes){const d=Uu[f]||f.toLowerCase();if(o[f]!==void 0){const m=n.accessors[e.attributes[f]],v=ho[m.componentType];u[d]=v.name,l[d]=m.normalized===!0}}return t.getDependency("bufferView",r).then(function(f){return new Promise(function(d,m){i.decodeDracoFile(f,function(v){for(const S in v.attributes){const y=v.attributes[S],x=l[S];x!==void 0&&(y.normalized=x)}d(v)},a,u,gn,m)})})}}class NM{constructor(){this.name=Tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class OM{constructor(){this.name=Tt.KHR_MESH_QUANTIZATION}}class lg extends Sa{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,u=a*3,f=i-t,d=(n-t)/f,m=d*d,v=m*d,S=e*u,y=S-u,x=-2*v+3*m,g=v-m,C=1-x,A=g-m+d;for(let R=0;R!==a;R++){const N=o[y+R+a],O=o[y+R+l]*f,p=o[S+R+a],G=o[S+R]*f;r[R]=C*N+A*O+x*p+g*G}return r}}const IM=new Gr;class UM extends lg{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return IM.fromArray(r).normalize().toArray(r),r}}const di={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ho={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Jd={9728:hn,9729:Hn,9984:hu,9985:Tp,9986:ml,9987:ys},Qd={33071:pi,33648:Sl,10497:xs},nu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Uu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Er={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},FM={CUBICSPLINE:void 0,LINEAR:_o,STEP:ua},iu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function BM(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new sf({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:qi})),s.DefaultMaterial}function ss(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function wr(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function kM(s,e,t){let n=!1,i=!1,r=!1;for(let u=0,f=e.length;u<f;u++){const d=e[u];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let u=0,f=e.length;u<f;u++){const d=e[u];if(n){const m=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;o.push(m)}if(i){const m=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;a.push(m)}if(r){const m=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;l.push(m)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(u){const f=u[0],d=u[1],m=u[2];return n&&(s.morphAttributes.position=f),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=m),s.morphTargetsRelative=!0,s})}function zM(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function HM(s){let e;const t=s.extensions&&s.extensions[Tt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ru(t.attributes):e=s.indices+":"+ru(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+ru(s.targets[n]);return e}function ru(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Fu(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function GM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const VM=new ut;class WM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new dM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new sm(this.options.manager):this.textureLoader=new HS(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Cl(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return ss(r,a,i),wr(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[u,f]of o.children.entries())r(f,a.children[u])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Tt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(ia.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=nu[i.type],a=ho[i.componentType],l=i.normalized===!0,u=new a(i.count*o);return Promise.resolve(new Rn(u,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=nu[i.type],u=ho[i.componentType],f=u.BYTES_PER_ELEMENT,d=f*l,m=i.byteOffset||0,v=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,S=i.normalized===!0;let y,x;if(v&&v!==d){const g=Math.floor(m/v),C="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count;let A=t.cache.get(C);A||(y=new u(a,g*v,i.count*v/f),A=new hS(y,v/f),t.cache.add(C,A)),x=new ef(A,l,m%v/f,S)}else a===null?y=new u(i.count*l):y=new u(a,m,i.count*l),x=new Rn(y,l,S);if(i.sparse!==void 0){const g=nu.SCALAR,C=ho[i.sparse.indices.componentType],A=i.sparse.indices.byteOffset||0,R=i.sparse.values.byteOffset||0,N=new C(o[1],A,i.sparse.count*g),O=new u(o[2],R,i.sparse.count*l);a!==null&&(x=new Rn(x.array.slice(),x.itemSize,x.normalized));for(let p=0,G=N.length;p<G;p++){const E=N[p];if(x.setX(E,O[p*l]),l>=2&&x.setY(E,O[p*l+1]),l>=3&&x.setZ(E,O[p*l+2]),l>=4&&x.setW(E,O[p*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return x})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const u=this.loadImageSource(t,n).then(function(f){f.flipY=!1,f.name=o.name||a.name||"",f.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(f.name=a.uri);const m=(r.samplers||{})[o.sampler]||{};return f.magFilter=Jd[m.magFilter]||Hn,f.minFilter=Jd[m.minFilter]||ys,f.wrapS=Qd[m.wrapS]||xs,f.wrapT=Qd[m.wrapT]||xs,i.associations.set(f,{textures:e}),f}).catch(function(){return null});return this.textureCache[l]=u,u}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",u=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(d){u=!0;const m=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(m),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const f=Promise.resolve(l).then(function(d){return new Promise(function(m,v){let S=m;t.isImageBitmapLoader===!0&&(S=function(y){const x=new mn(y);x.needsUpdate=!0,m(x)}),t.load(ia.resolveURL(d,r.path),S,void 0,v)})}).then(function(d){return u===!0&&a.revokeObjectURL(l),d.userData.mimeType=o.mimeType||GM(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=f,f}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Tt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Tt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Tt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new tm,Xi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new em,Xi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return sf}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},u=[];if(l[Tt.KHR_MATERIALS_UNLIT]){const d=i[Tt.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),u.push(d.extendParams(a,r,t))}else{const d=r.pbrMetallicRoughness||{};if(a.color=new je(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const m=d.baseColorFactor;a.color.setRGB(m[0],m[1],m[2],gn),a.opacity=m[3]}d.baseColorTexture!==void 0&&u.push(t.assignTexture(a,"map",d.baseColorTexture,Yt)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),u.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(m){return m.getMaterialType&&m.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(m){return m.extendMaterialParams&&m.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Hi);const f=r.alphaMode||iu.OPAQUE;if(f===iu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,f===iu.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Rr&&(u.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ze(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;a.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&o!==Rr&&(u.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Rr){const d=r.emissiveFactor;a.emissive=new je().setRGB(d[0],d[1],d[2],gn)}return r.emissiveTexture!==void 0&&o!==Rr&&u.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Yt)),Promise.all(u).then(function(){const d=new o(a);return r.name&&(d.name=r.name),wr(d,r),t.associations.set(d,{materials:e}),r.extensions&&ss(i,d,r),d})}createUniqueName(e){const t=Ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return $d(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const u=e[a],f=HM(u),d=i[f];if(d)o.push(d.promise);else{let m;u.extensions&&u.extensions[Tt.KHR_DRACO_MESH_COMPRESSION]?m=r(u):m=$d(new oi,u,t),i[f]={primitive:u,promise:m},o.push(m)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,u=o.length;l<u;l++){const f=o[l].material===void 0?BM(this.cache):this.getDependency("material",o[l].material);a.push(f)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const u=l.slice(0,l.length-1),f=l[l.length-1],d=[];for(let v=0,S=f.length;v<S;v++){const y=f[v],x=o[v];let g;const C=u[v];if(x.mode===di.TRIANGLES||x.mode===di.TRIANGLE_STRIP||x.mode===di.TRIANGLE_FAN||x.mode===void 0)g=r.isSkinnedMesh===!0?new pS(y,C):new Vn(y,C),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),x.mode===di.TRIANGLE_STRIP?g.geometry=Kd(g.geometry,Pp):x.mode===di.TRIANGLE_FAN&&(g.geometry=Kd(g.geometry,du));else if(x.mode===di.LINES)g=new xS(y,C);else if(x.mode===di.LINE_STRIP)g=new nf(y,C);else if(x.mode===di.LINE_LOOP)g=new yS(y,C);else if(x.mode===di.POINTS)g=new bS(y,C);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(g.geometry.morphAttributes).length>0&&zM(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),wr(g,r),x.extensions&&ss(i,g,x),t.assignFinalMaterial(g),d.push(g)}for(let v=0,S=d.length;v<S;v++)t.associations.set(d[v],{meshes:e,primitives:v});if(d.length===1)return r.extensions&&ss(i,d[0],r),d[0];const m=new us;r.extensions&&ss(i,m,r),t.associations.set(m,{meshes:e});for(let v=0,S=d.length;v<S;v++)m.add(d[v]);return m})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new On(sv.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Wl(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),wr(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let u=0,f=o.length;u<f;u++){const d=o[u];if(d){a.push(d);const m=new ut;r!==null&&m.fromArray(r.array,u*16),l.push(m)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new tf(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],u=[],f=[];for(let d=0,m=i.channels.length;d<m;d++){const v=i.channels[d],S=i.samplers[v.sampler],y=v.target,x=y.node,g=i.parameters!==void 0?i.parameters[S.input]:S.input,C=i.parameters!==void 0?i.parameters[S.output]:S.output;y.node!==void 0&&(o.push(this.getDependency("node",x)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",C)),u.push(S),f.push(y))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(u),Promise.all(f)]).then(function(d){const m=d[0],v=d[1],S=d[2],y=d[3],x=d[4],g=[];for(let C=0,A=m.length;C<A;C++){const R=m[C],N=v[C],O=S[C],p=y[C],G=x[C];if(R===void 0)continue;R.updateMatrix&&R.updateMatrix();const E=n._createAnimationTracks(R,N,O,p,G);if(E)for(let D=0;D<E.length;D++)g.push(E[D])}return new RS(r,void 0,g)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,u=i.weights.length;l<u;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let u=0,f=a.length;u<f;u++)o.push(n.getDependency("node",a[u]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(u){const f=u[0],d=u[1],m=u[2];m!==null&&f.traverse(function(v){v.isSkinnedMesh&&v.bind(m,VM)});for(let v=0,S=d.length;v<S;v++)f.add(d[v]);return f})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(u){return i._getNodeRef(i.cameraCache,r.camera,u)})),i._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){a.push(u)}),this.nodeCache[e]=Promise.all(a).then(function(u){let f;if(r.isBone===!0?f=new $p:u.length>1?f=new us:u.length===1?f=u[0]:f=new Qt,f!==u[0])for(let d=0,m=u.length;d<m;d++)f.add(u[d]);if(r.name&&(f.userData.name=r.name,f.name=o),wr(f,r),r.extensions&&ss(n,f,r),r.matrix!==void 0){const d=new ut;d.fromArray(r.matrix),f.applyMatrix4(d)}else r.translation!==void 0&&f.position.fromArray(r.translation),r.rotation!==void 0&&f.quaternion.fromArray(r.rotation),r.scale!==void 0&&f.scale.fromArray(r.scale);return i.associations.has(f)||i.associations.set(f,{}),i.associations.get(f).nodes=e,f}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new us;n.name&&(r.name=i.createUniqueName(n.name)),wr(r,n),n.extensions&&ss(t,r,n);const o=n.nodes||[],a=[];for(let l=0,u=o.length;l<u;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let f=0,d=l.length;f<d;f++)r.add(l[f]);const u=f=>{const d=new Map;for(const[m,v]of i.associations)(m instanceof Xi||m instanceof mn)&&d.set(m,v);return f.traverse(m=>{const v=i.associations.get(m);v!=null&&d.set(m,v)}),d};return i.associations=u(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];Er[r.path]===Er.weights?e.traverse(function(m){m.morphTargetInfluences&&l.push(m.name?m.name:m.uuid)}):l.push(a);let u;switch(Er[r.path]){case Er.weights:u=yo;break;case Er.rotation:u=bs;break;case Er.position:case Er.scale:u=bo;break;default:switch(n.itemSize){case 1:u=yo;break;case 2:case 3:default:u=bo;break}break}const f=i.interpolation!==void 0?FM[i.interpolation]:_o,d=this._getArrayFromAccessor(n);for(let m=0,v=l.length;m<v;m++){const S=new u(l[m]+"."+Er[r.path],t.array,d,f);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(S),o.push(S)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Fu(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof bs?UM:lg;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function XM(s,e,t){const n=e.attributes,i=new pr;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,u=a.max;if(l!==void 0&&u!==void 0){if(i.set(new V(l[0],l[1],l[2]),new V(u[0],u[1],u[2])),a.normalized){const f=Fu(ho[a.componentType]);i.min.multiplyScalar(f),i.max.multiplyScalar(f)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new V,l=new V;for(let u=0,f=r.length;u<f;u++){const d=r[u];if(d.POSITION!==void 0){const m=t.json.accessors[d.POSITION],v=m.min,S=m.max;if(v!==void 0&&S!==void 0){if(l.setX(Math.max(Math.abs(v[0]),Math.abs(S[0]))),l.setY(Math.max(Math.abs(v[1]),Math.abs(S[1]))),l.setZ(Math.max(Math.abs(v[2]),Math.abs(S[2]))),m.normalized){const y=Fu(ho[m.componentType]);l.multiplyScalar(y)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Ki;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function $d(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=Uu[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Pt.workingColorSpace!==gn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Pt.workingColorSpace}" not supported.`),wr(s,e),XM(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?kM(s,e.targets,t):s})}const su=new WeakMap;class jM extends Ms{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new Cl(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,Yt).catch(n)}decodeDracoFile(e,t,n,i,r=gn,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(su.has(e)){const l=su.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(l=>(i=l,new Promise((u,f)=>{i._callbacks[r]={resolve:u,reject:f},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),su.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new oi;e.index&&t.setIndex(new Rn(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],r=i.name,o=i.array,a=i.itemSize,l=new Rn(o,a);r==="color"&&(this._assignVertexColorSpace(l,i.vertexColorSpace),l.normalized=!(o instanceof Float32Array)),t.setAttribute(r,l)}return t}_assignVertexColorSpace(e,t){if(t!==Yt)return;const n=new je;for(let i=0,r=e.count;i<r;i++)n.fromBufferAttribute(e,i).convertSRGBToLinear(),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new Cl(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=qM.toString(),o=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const o=r.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function qM(){let s,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":s=a.decoderConfig,e=new Promise(function(f){s.onModuleLoaded=function(d){f({draco:d})},DracoDecoderModule(s)});break;case"decode":const l=a.buffer,u=a.taskConfig;e.then(f=>{const d=f.draco,m=new d.Decoder;try{const v=t(d,m,new Int8Array(l),u),S=v.attributes.map(y=>y.array.buffer);v.index&&S.push(v.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:v},S)}catch(v){console.error(v),self.postMessage({type:"error",id:a.id,error:v.message})}finally{d.destroy(m)}});break}};function t(o,a,l,u){const f=u.attributeIDs,d=u.attributeTypes;let m,v;const S=a.GetEncodedGeometryType(l);if(S===o.TRIANGULAR_MESH)m=new o.Mesh,v=a.DecodeArrayToMesh(l,l.byteLength,m);else if(S===o.POINT_CLOUD)m=new o.PointCloud,v=a.DecodeArrayToPointCloud(l,l.byteLength,m);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!v.ok()||m.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+v.error_msg());const y={index:null,attributes:[]};for(const x in f){const g=self[d[x]];let C,A;if(u.useUniqueIDs)A=f[x],C=a.GetAttributeByUniqueId(m,A);else{if(A=a.GetAttributeId(m,o[f[x]]),A===-1)continue;C=a.GetAttribute(m,A)}const R=i(o,a,m,x,g,C);x==="color"&&(R.vertexColorSpace=u.vertexColorSpace),y.attributes.push(R)}return S===o.TRIANGULAR_MESH&&(y.index=n(o,a,m)),o.destroy(m),y}function n(o,a,l){const f=l.num_faces()*3,d=f*4,m=o._malloc(d);a.GetTrianglesUInt32Array(l,d,m);const v=new Uint32Array(o.HEAPF32.buffer,m,f).slice();return o._free(m),{array:v,itemSize:1}}function i(o,a,l,u,f,d){const m=d.num_components(),S=l.num_points()*m,y=S*f.BYTES_PER_ELEMENT,x=r(o,f),g=o._malloc(y);a.GetAttributeDataArrayForAllPoints(l,d,x,y,g);const C=new f(o.HEAPF32.buffer,g,S).slice();return o._free(g),{name:u,array:C,itemSize:m}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}function YM(s){if(s&&!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=s,document.head.appendChild(e),s}}function oo(s,e){var t=s.__state.conversionName.toString(),n=Math.round(s.r),i=Math.round(s.g),r=Math.round(s.b),o=s.a,a=Math.round(s.h),l=s.s.toFixed(1),u=s.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var f=s.hex.toString(16);f.length<6;)f="0"+f;return"#"+f}else{if(t==="CSS_RGB")return"rgb("+n+","+i+","+r+")";if(t==="CSS_RGBA")return"rgba("+n+","+i+","+r+","+o+")";if(t==="HEX")return"0x"+s.hex.toString(16);if(t==="RGB_ARRAY")return"["+n+","+i+","+r+"]";if(t==="RGBA_ARRAY")return"["+n+","+i+","+r+","+o+"]";if(t==="RGB_OBJ")return"{r:"+n+",g:"+i+",b:"+r+"}";if(t==="RGBA_OBJ")return"{r:"+n+",g:"+i+",b:"+r+",a:"+o+"}";if(t==="HSV_OBJ")return"{h:"+a+",s:"+l+",v:"+u+"}";if(t==="HSVA_OBJ")return"{h:"+a+",s:"+l+",v:"+u+",a:"+o+"}"}return"unknown format"}var ep=Array.prototype.forEach,Ko=Array.prototype.slice,ge={BREAK:{},extend:function(e){return this.each(Ko.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach((function(i){this.isUndefined(t[i])||(e[i]=t[i])}).bind(this))},this),e},defaults:function(e){return this.each(Ko.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach((function(i){this.isUndefined(e[i])&&(e[i]=t[i])}).bind(this))},this),e},compose:function(){var e=Ko.call(arguments);return function(){for(var t=Ko.call(arguments),n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},each:function(e,t,n){if(e){if(ep&&e.forEach&&e.forEach===ep)e.forEach(t,n);else if(e.length===e.length+0){var i=void 0,r=void 0;for(i=0,r=e.length;i<r;i++)if(i in e&&t.call(n,e[i],i)===this.BREAK)return}else for(var o in e)if(t.call(n,e[o],o)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,n){var i=void 0;return function(){var r=this,o=arguments;function a(){i=null,n||e.apply(r,o)}var l=n||!i;clearTimeout(i),i=setTimeout(a,t),l&&e.apply(r,o)}},toArray:function(e){return e.toArray?e.toArray():Ko.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(s){function e(t){return s.apply(this,arguments)}return e.toString=function(){return s.toString()},e}(function(s){return isNaN(s)}),isArray:Array.isArray||function(s){return s.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},KM=[{litmus:ge.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:oo},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:oo},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:oo},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:oo}}},{litmus:ge.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:ge.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:ge.isObject,conversions:{RGBA_OBJ:{read:function(e){return ge.isNumber(e.r)&&ge.isNumber(e.g)&&ge.isNumber(e.b)&&ge.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return ge.isNumber(e.r)&&ge.isNumber(e.g)&&ge.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return ge.isNumber(e.h)&&ge.isNumber(e.s)&&ge.isNumber(e.v)&&ge.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return ge.isNumber(e.h)&&ge.isNumber(e.s)&&ge.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],Zo=void 0,fl=void 0,Bu=function(){fl=!1;var e=arguments.length>1?ge.toArray(arguments):arguments[0];return ge.each(KM,function(t){if(t.litmus(e))return ge.each(t.conversions,function(n,i){if(Zo=n.read(e),fl===!1&&Zo!==!1)return fl=Zo,Zo.conversionName=i,Zo.conversion=n,ge.BREAK}),ge.BREAK}),fl},tp=void 0,Ul={hsv_to_rgb:function(e,t,n){var i=Math.floor(e/60)%6,r=e/60-Math.floor(e/60),o=n*(1-t),a=n*(1-r*t),l=n*(1-(1-r)*t),u=[[n,l,o],[a,n,o],[o,n,l],[o,a,n],[l,o,n],[n,o,a]][i];return{r:u[0]*255,g:u[1]*255,b:u[2]*255}},rgb_to_hsv:function(e,t,n){var i=Math.min(e,t,n),r=Math.max(e,t,n),o=r-i,a=void 0,l=void 0;if(r!==0)l=o/r;else return{h:NaN,s:0,v:0};return e===r?a=(t-n)/o:t===r?a=2+(n-e)/o:a=4+(e-t)/o,a/=6,a<0&&(a+=1),{h:a*360,s:l,v:r/255}},rgb_to_hex:function(e,t,n){var i=this.hex_with_component(0,2,e);return i=this.hex_with_component(i,1,t),i=this.hex_with_component(i,0,n),i},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,n){return n<<(tp=t*8)|e&~(255<<tp)}},ZM=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},Pi=function(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")},Di=function(){function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}}(),Hr=function s(e,t,n){e===null&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,t);if(i===void 0){var r=Object.getPrototypeOf(e);return r===null?void 0:s(r,t,n)}else{if("value"in i)return i.value;var o=i.get;return o===void 0?void 0:o.call(n)}},Wr=function(s,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);s.prototype=Object.create(e&&e.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(s,e):s.__proto__=e)},Xr=function(s,e){if(!s)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:s},Tn=function(){function s(){if(Pi(this,s),this.__state=Bu.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return Di(s,[{key:"toString",value:function(){return oo(this)}},{key:"toHexString",value:function(){return oo(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),s}();function Af(s,e,t){Object.defineProperty(s,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(Tn.recalculateRGB(this,e,t),this.__state[e])},set:function(i){this.__state.space!=="RGB"&&(Tn.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=i}})}function wf(s,e){Object.defineProperty(s,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(Tn.recalculateHSV(this),this.__state[e])},set:function(n){this.__state.space!=="HSV"&&(Tn.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=n}})}Tn.recalculateRGB=function(s,e,t){if(s.__state.space==="HEX")s.__state[e]=Ul.component_from_hex(s.__state.hex,t);else if(s.__state.space==="HSV")ge.extend(s.__state,Ul.hsv_to_rgb(s.__state.h,s.__state.s,s.__state.v));else throw new Error("Corrupted color state")};Tn.recalculateHSV=function(s){var e=Ul.rgb_to_hsv(s.r,s.g,s.b);ge.extend(s.__state,{s:e.s,v:e.v}),ge.isNaN(e.h)?ge.isUndefined(s.__state.h)&&(s.__state.h=0):s.__state.h=e.h};Tn.COMPONENTS=["r","g","b","h","s","v","hex","a"];Af(Tn.prototype,"r",2);Af(Tn.prototype,"g",1);Af(Tn.prototype,"b",0);wf(Tn.prototype,"h");wf(Tn.prototype,"s");wf(Tn.prototype,"v");Object.defineProperty(Tn.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(Tn.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=Ul.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var As=function(){function s(e,t){Pi(this,s),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return Di(s,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),s}(),JM={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},cg={};ge.each(JM,function(s,e){ge.each(s,function(t){cg[t]=e})});var QM=/(\d+(\.\d+)?)px/;function ki(s){if(s==="0"||ge.isUndefined(s))return 0;var e=s.match(QM);return ge.isNull(e)?0:parseFloat(e[1])}var te={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,n){var i=n,r=t;ge.isUndefined(r)&&(r=!0),ge.isUndefined(i)&&(i=!0),e.style.position="absolute",r&&(e.style.left=0,e.style.right=0),i&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,n,i){var r=n||{},o=cg[t];if(!o)throw new Error("Event type "+t+" not supported.");var a=document.createEvent(o);switch(o){case"MouseEvents":{var l=r.x||r.clientX||0,u=r.y||r.clientY||0;a.initMouseEvent(t,r.bubbles||!1,r.cancelable||!0,window,r.clickCount||1,0,0,l,u,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var f=a.initKeyboardEvent||a.initKeyEvent;ge.defaults(r,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),f(t,r.bubbles||!1,r.cancelable,window,r.ctrlKey,r.altKey,r.shiftKey,r.metaKey,r.keyCode,r.charCode);break}default:{a.initEvent(t,r.bubbles||!1,r.cancelable||!0);break}}ge.defaults(a,i),e.dispatchEvent(a)},bind:function(e,t,n,i){var r=i||!1;return e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent("on"+t,n),te},unbind:function(e,t,n,i){var r=i||!1;return e.removeEventListener?e.removeEventListener(t,n,r):e.detachEvent&&e.detachEvent("on"+t,n),te},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var n=e.className.split(/ +/);n.indexOf(t)===-1&&(n.push(t),e.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return te},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var n=e.className.split(/ +/),i=n.indexOf(t);i!==-1&&(n.splice(i,1),e.className=n.join(" "))}else e.className=void 0;return te},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return ki(t["border-left-width"])+ki(t["border-right-width"])+ki(t["padding-left"])+ki(t["padding-right"])+ki(t.width)},getHeight:function(e){var t=getComputedStyle(e);return ki(t["border-top-width"])+ki(t["border-bottom-width"])+ki(t["padding-top"])+ki(t["padding-bottom"])+ki(t.height)},getOffset:function(e){var t=e,n={left:0,top:0};if(t.offsetParent)do n.left+=t.offsetLeft,n.top+=t.offsetTop,t=t.offsetParent;while(t);return n},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},ug=function(s){Wr(e,s);function e(t,n){Pi(this,e);var i=Xr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),r=i;i.__prev=i.getValue(),i.__checkbox=document.createElement("input"),i.__checkbox.setAttribute("type","checkbox");function o(){r.setValue(!r.__prev)}return te.bind(i.__checkbox,"change",o,!1),i.domElement.appendChild(i.__checkbox),i.updateDisplay(),i}return Di(e,[{key:"setValue",value:function(n){var i=Hr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),i}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),Hr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(As),$M=function(s){Wr(e,s);function e(t,n,i){Pi(this,e);var r=Xr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=i,a=r;if(r.__select=document.createElement("select"),ge.isArray(o)){var l={};ge.each(o,function(u){l[u]=u}),o=l}return ge.each(o,function(u,f){var d=document.createElement("option");d.innerHTML=f,d.setAttribute("value",u),a.__select.appendChild(d)}),r.updateDisplay(),te.bind(r.__select,"change",function(){var u=this.options[this.selectedIndex].value;a.setValue(u)}),r.domElement.appendChild(r.__select),r}return Di(e,[{key:"setValue",value:function(n){var i=Hr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),i}},{key:"updateDisplay",value:function(){return te.isActive(this.__select)?this:(this.__select.value=this.getValue(),Hr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(As),eE=function(s){Wr(e,s);function e(t,n){Pi(this,e);var i=Xr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),r=i;function o(){r.setValue(r.__input.value)}function a(){r.__onFinishChange&&r.__onFinishChange.call(r,r.getValue())}return i.__input=document.createElement("input"),i.__input.setAttribute("type","text"),te.bind(i.__input,"keyup",o),te.bind(i.__input,"change",o),te.bind(i.__input,"blur",a),te.bind(i.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),i.updateDisplay(),i.domElement.appendChild(i.__input),i}return Di(e,[{key:"updateDisplay",value:function(){return te.isActive(this.__input)||(this.__input.value=this.getValue()),Hr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(As);function np(s){var e=s.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var fg=function(s){Wr(e,s);function e(t,n,i){Pi(this,e);var r=Xr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=i||{};return r.__min=o.min,r.__max=o.max,r.__step=o.step,ge.isUndefined(r.__step)?r.initialValue===0?r.__impliedStep=1:r.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(r.initialValue))/Math.LN10))/10:r.__impliedStep=r.__step,r.__precision=np(r.__impliedStep),r}return Di(e,[{key:"setValue",value:function(n){var i=n;return this.__min!==void 0&&i<this.__min?i=this.__min:this.__max!==void 0&&i>this.__max&&(i=this.__max),this.__step!==void 0&&i%this.__step!==0&&(i=Math.round(i/this.__step)*this.__step),Hr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i)}},{key:"min",value:function(n){return this.__min=n,this}},{key:"max",value:function(n){return this.__max=n,this}},{key:"step",value:function(n){return this.__step=n,this.__impliedStep=n,this.__precision=np(n),this}}]),e}(As);function tE(s,e){var t=Math.pow(10,e);return Math.round(s*t)/t}var Fl=function(s){Wr(e,s);function e(t,n,i){Pi(this,e);var r=Xr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,i));r.__truncationSuspended=!1;var o=r,a=void 0;function l(){var S=parseFloat(o.__input.value);ge.isNaN(S)||o.setValue(S)}function u(){o.__onFinishChange&&o.__onFinishChange.call(o,o.getValue())}function f(){u()}function d(S){var y=a-S.clientY;o.setValue(o.getValue()+y*o.__impliedStep),a=S.clientY}function m(){te.unbind(window,"mousemove",d),te.unbind(window,"mouseup",m),u()}function v(S){te.bind(window,"mousemove",d),te.bind(window,"mouseup",m),a=S.clientY}return r.__input=document.createElement("input"),r.__input.setAttribute("type","text"),te.bind(r.__input,"change",l),te.bind(r.__input,"blur",f),te.bind(r.__input,"mousedown",v),te.bind(r.__input,"keydown",function(S){S.keyCode===13&&(o.__truncationSuspended=!0,this.blur(),o.__truncationSuspended=!1,u())}),r.updateDisplay(),r.domElement.appendChild(r.__input),r}return Di(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():tE(this.getValue(),this.__precision),Hr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(fg);function ip(s,e,t,n,i){return n+(i-n)*((s-e)/(t-e))}var ku=function(s){Wr(e,s);function e(t,n,i,r,o){Pi(this,e);var a=Xr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,{min:i,max:r,step:o})),l=a;a.__background=document.createElement("div"),a.__foreground=document.createElement("div"),te.bind(a.__background,"mousedown",u),te.bind(a.__background,"touchstart",m),te.addClass(a.__background,"slider"),te.addClass(a.__foreground,"slider-fg");function u(y){document.activeElement.blur(),te.bind(window,"mousemove",f),te.bind(window,"mouseup",d),f(y)}function f(y){y.preventDefault();var x=l.__background.getBoundingClientRect();return l.setValue(ip(y.clientX,x.left,x.right,l.__min,l.__max)),!1}function d(){te.unbind(window,"mousemove",f),te.unbind(window,"mouseup",d),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function m(y){y.touches.length===1&&(te.bind(window,"touchmove",v),te.bind(window,"touchend",S),v(y))}function v(y){var x=y.touches[0].clientX,g=l.__background.getBoundingClientRect();l.setValue(ip(x,g.left,g.right,l.__min,l.__max))}function S(){te.unbind(window,"touchmove",v),te.unbind(window,"touchend",S),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return a.updateDisplay(),a.__background.appendChild(a.__foreground),a.domElement.appendChild(a.__background),a}return Di(e,[{key:"updateDisplay",value:function(){var n=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=n*100+"%",Hr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(fg),hg=function(s){Wr(e,s);function e(t,n,i){Pi(this,e);var r=Xr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=r;return r.__button=document.createElement("div"),r.__button.innerHTML=i===void 0?"Fire":i,te.bind(r.__button,"click",function(a){return a.preventDefault(),o.fire(),!1}),te.addClass(r.__button,"button"),r.domElement.appendChild(r.__button),r}return Di(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(As),zu=function(s){Wr(e,s);function e(t,n){Pi(this,e);var i=Xr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));i.__color=new Tn(i.getValue()),i.__temp=new Tn(0);var r=i;i.domElement=document.createElement("div"),te.makeSelectable(i.domElement,!1),i.__selector=document.createElement("div"),i.__selector.className="selector",i.__saturation_field=document.createElement("div"),i.__saturation_field.className="saturation-field",i.__field_knob=document.createElement("div"),i.__field_knob.className="field-knob",i.__field_knob_border="2px solid ",i.__hue_knob=document.createElement("div"),i.__hue_knob.className="hue-knob",i.__hue_field=document.createElement("div"),i.__hue_field.className="hue-field",i.__input=document.createElement("input"),i.__input.type="text",i.__input_textShadow="0 1px 1px ",te.bind(i.__input,"keydown",function(y){y.keyCode===13&&d.call(this)}),te.bind(i.__input,"blur",d),te.bind(i.__selector,"mousedown",function(){te.addClass(this,"drag").bind(window,"mouseup",function(){te.removeClass(r.__selector,"drag")})}),te.bind(i.__selector,"touchstart",function(){te.addClass(this,"drag").bind(window,"touchend",function(){te.removeClass(r.__selector,"drag")})});var o=document.createElement("div");ge.extend(i.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),ge.extend(i.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:i.__field_knob_border+(i.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),ge.extend(i.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),ge.extend(i.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),ge.extend(o.style,{width:"100%",height:"100%",background:"none"}),rp(o,"top","rgba(0,0,0,0)","#000"),ge.extend(i.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),iE(i.__hue_field),ge.extend(i.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:i.__input_textShadow+"rgba(0,0,0,0.7)"}),te.bind(i.__saturation_field,"mousedown",a),te.bind(i.__saturation_field,"touchstart",a),te.bind(i.__field_knob,"mousedown",a),te.bind(i.__field_knob,"touchstart",a),te.bind(i.__hue_field,"mousedown",l),te.bind(i.__hue_field,"touchstart",l);function a(y){v(y),te.bind(window,"mousemove",v),te.bind(window,"touchmove",v),te.bind(window,"mouseup",u),te.bind(window,"touchend",u)}function l(y){S(y),te.bind(window,"mousemove",S),te.bind(window,"touchmove",S),te.bind(window,"mouseup",f),te.bind(window,"touchend",f)}function u(){te.unbind(window,"mousemove",v),te.unbind(window,"touchmove",v),te.unbind(window,"mouseup",u),te.unbind(window,"touchend",u),m()}function f(){te.unbind(window,"mousemove",S),te.unbind(window,"touchmove",S),te.unbind(window,"mouseup",f),te.unbind(window,"touchend",f),m()}function d(){var y=Bu(this.value);y!==!1?(r.__color.__state=y,r.setValue(r.__color.toOriginal())):this.value=r.__color.toString()}function m(){r.__onFinishChange&&r.__onFinishChange.call(r,r.__color.toOriginal())}i.__saturation_field.appendChild(o),i.__selector.appendChild(i.__field_knob),i.__selector.appendChild(i.__saturation_field),i.__selector.appendChild(i.__hue_field),i.__hue_field.appendChild(i.__hue_knob),i.domElement.appendChild(i.__input),i.domElement.appendChild(i.__selector),i.updateDisplay();function v(y){y.type.indexOf("touch")===-1&&y.preventDefault();var x=r.__saturation_field.getBoundingClientRect(),g=y.touches&&y.touches[0]||y,C=g.clientX,A=g.clientY,R=(C-x.left)/(x.right-x.left),N=1-(A-x.top)/(x.bottom-x.top);return N>1?N=1:N<0&&(N=0),R>1?R=1:R<0&&(R=0),r.__color.v=N,r.__color.s=R,r.setValue(r.__color.toOriginal()),!1}function S(y){y.type.indexOf("touch")===-1&&y.preventDefault();var x=r.__hue_field.getBoundingClientRect(),g=y.touches&&y.touches[0]||y,C=g.clientY,A=1-(C-x.top)/(x.bottom-x.top);return A>1?A=1:A<0&&(A=0),r.__color.h=A*360,r.setValue(r.__color.toOriginal()),!1}return i}return Di(e,[{key:"updateDisplay",value:function(){var n=Bu(this.getValue());if(n!==!1){var i=!1;ge.each(Tn.COMPONENTS,function(a){if(!ge.isUndefined(n[a])&&!ge.isUndefined(this.__color.__state[a])&&n[a]!==this.__color.__state[a])return i=!0,{}},this),i&&ge.extend(this.__color.__state,n)}ge.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var r=this.__color.v<.5||this.__color.s>.5?255:0,o=255-r;ge.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+r+","+r+","+r+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,rp(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),ge.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+r+","+r+","+r+")",textShadow:this.__input_textShadow+"rgba("+o+","+o+","+o+",.7)"})}}]),e}(As),nE=["-moz-","-o-","-webkit-","-ms-",""];function rp(s,e,t,n){s.style.background="",ge.each(nE,function(i){s.style.cssText+="background: "+i+"linear-gradient("+e+", "+t+" 0%, "+n+" 100%); "})}function iE(s){s.style.background="",s.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",s.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",s.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",s.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",s.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var rE={load:function(e,t){var n=t||document,i=n.createElement("link");i.type="text/css",i.rel="stylesheet",i.href=e,n.getElementsByTagName("head")[0].appendChild(i)},inject:function(e,t){var n=t||document,i=document.createElement("style");i.type="text/css",i.innerHTML=e;var r=n.getElementsByTagName("head")[0];try{r.appendChild(i)}catch{}}},sE=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,oE=function(e,t){var n=e[t];return ge.isArray(arguments[2])||ge.isObject(arguments[2])?new $M(e,t,arguments[2]):ge.isNumber(n)?ge.isNumber(arguments[2])&&ge.isNumber(arguments[3])?ge.isNumber(arguments[4])?new ku(e,t,arguments[2],arguments[3],arguments[4]):new ku(e,t,arguments[2],arguments[3]):ge.isNumber(arguments[4])?new Fl(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new Fl(e,t,{min:arguments[2],max:arguments[3]}):ge.isString(n)?new eE(e,t):ge.isFunction(n)?new hg(e,t,""):ge.isBoolean(n)?new ug(e,t):null};function aE(s){setTimeout(s,1e3/60)}var lE=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||aE,cE=function(){function s(){Pi(this,s),this.backgroundElement=document.createElement("div"),ge.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),te.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),ge.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;te.bind(this.backgroundElement,"click",function(){e.hide()})}return Di(s,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),ge.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,n=function i(){t.domElement.style.display="none",t.backgroundElement.style.display="none",te.unbind(t.domElement,"webkitTransitionEnd",i),te.unbind(t.domElement,"transitionend",i),te.unbind(t.domElement,"oTransitionEnd",i)};te.bind(this.domElement,"webkitTransitionEnd",n),te.bind(this.domElement,"transitionend",n),te.bind(this.domElement,"oTransitionEnd",n),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-te.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-te.getHeight(this.domElement)/2+"px"}}]),s}(),uE=YM(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);rE.inject(uE);var sp="dg",op=72,ap=20,xa="Default",$o=function(){try{return!!window.localStorage}catch{return!1}}(),aa=void 0,lp=!0,eo=void 0,ou=!1,dg=[],qt=function s(e){var t=this,n=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),te.addClass(this.domElement,sp),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],n=ge.defaults(n,{closeOnTop:!1,autoPlace:!0,width:s.DEFAULT_WIDTH}),n=ge.defaults(n,{resizable:n.autoPlace,hideable:n.autoPlace}),ge.isUndefined(n.load)?n.load={preset:xa}:n.preset&&(n.load.preset=n.preset),ge.isUndefined(n.parent)&&n.hideable&&dg.push(this),n.resizable=ge.isUndefined(n.parent)&&n.resizable,n.autoPlace&&ge.isUndefined(n.scrollable)&&(n.scrollable=!0);var i=$o&&localStorage.getItem(to(this,"isLocal"))==="true",r=void 0,o=void 0;if(Object.defineProperties(this,{parent:{get:function(){return n.parent}},scrollable:{get:function(){return n.scrollable}},autoPlace:{get:function(){return n.autoPlace}},closeOnTop:{get:function(){return n.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:n.load.preset},set:function(m){t.parent?t.getRoot().preset=m:n.load.preset=m,pE(this),t.revert()}},width:{get:function(){return n.width},set:function(m){n.width=m,Vu(t,m)}},name:{get:function(){return n.name},set:function(m){n.name=m,o&&(o.innerHTML=n.name)}},closed:{get:function(){return n.closed},set:function(m){n.closed=m,n.closed?te.addClass(t.__ul,s.CLASS_CLOSED):te.removeClass(t.__ul,s.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=m?s.TEXT_OPEN:s.TEXT_CLOSED)}},load:{get:function(){return n.load}},useLocalStorage:{get:function(){return i},set:function(m){$o&&(i=m,m?te.bind(window,"unload",r):te.unbind(window,"unload",r),localStorage.setItem(to(t,"isLocal"),m))}}}),ge.isUndefined(n.parent)){if(this.closed=n.closed||!1,te.addClass(this.domElement,s.CLASS_MAIN),te.makeSelectable(this.domElement,!1),$o&&i){t.useLocalStorage=!0;var a=localStorage.getItem(to(this,"gui"));a&&(n.load=JSON.parse(a))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=s.TEXT_CLOSED,te.addClass(this.__closeButton,s.CLASS_CLOSE_BUTTON),n.closeOnTop?(te.addClass(this.__closeButton,s.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(te.addClass(this.__closeButton,s.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),te.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{n.closed===void 0&&(n.closed=!0);var l=document.createTextNode(n.name);te.addClass(l,"controller-name"),o=Cf(t,l);var u=function(m){return m.preventDefault(),t.closed=!t.closed,!1};te.addClass(this.__ul,s.CLASS_CLOSED),te.addClass(o,"title"),te.bind(o,"click",u),n.closed||(this.closed=!1)}n.autoPlace&&(ge.isUndefined(n.parent)&&(lp&&(eo=document.createElement("div"),te.addClass(eo,sp),te.addClass(eo,s.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(eo),lp=!1),eo.appendChild(this.domElement),te.addClass(this.domElement,s.CLASS_AUTO_PLACE)),this.parent||Vu(t,n.width)),this.__resizeHandler=function(){t.onResizeDebounced()},te.bind(window,"resize",this.__resizeHandler),te.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),te.bind(this.__ul,"transitionend",this.__resizeHandler),te.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),n.resizable&&dE(this),r=function(){$o&&localStorage.getItem(to(t,"isLocal"))==="true"&&localStorage.setItem(to(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=r;function f(){var d=t.getRoot();d.width+=1,ge.defer(function(){d.width-=1})}n.parent||f()};qt.toggleHide=function(){ou=!ou,ge.each(dg,function(s){s.domElement.style.display=ou?"none":""})};qt.CLASS_AUTO_PLACE="a";qt.CLASS_AUTO_PLACE_CONTAINER="ac";qt.CLASS_MAIN="main";qt.CLASS_CONTROLLER_ROW="cr";qt.CLASS_TOO_TALL="taller-than-window";qt.CLASS_CLOSED="closed";qt.CLASS_CLOSE_BUTTON="close-button";qt.CLASS_CLOSE_TOP="close-top";qt.CLASS_CLOSE_BOTTOM="close-bottom";qt.CLASS_DRAG="drag";qt.DEFAULT_WIDTH=245;qt.TEXT_CLOSED="Close Controls";qt.TEXT_OPEN="Open Controls";qt._keydownHandler=function(s){document.activeElement.type!=="text"&&(s.which===op||s.keyCode===op)&&qt.toggleHide()};te.bind(window,"keydown",qt._keydownHandler,!1);ge.extend(qt.prototype,{add:function(e,t){return la(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return la(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;ge.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&eo.removeChild(this.domElement);var e=this;ge.each(this.__folders,function(t){e.removeFolder(t)}),te.unbind(window,"keydown",qt._keydownHandler,!1),cp(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var n=new qt(t);this.__folders[e]=n;var i=Cf(this,n.domElement);return te.addClass(i,"folder"),n},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],cp(e);var t=this;ge.each(e.__folders,function(n){e.removeFolder(n)}),ge.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=te.getOffset(e.__ul).top,n=0;ge.each(e.__ul.childNodes,function(i){e.autoPlace&&i===e.__save_row||(n+=te.getHeight(i))}),window.innerHeight-t-ap<n?(te.addClass(e.domElement,qt.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-ap+"px"):(te.removeClass(e.domElement,qt.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&ge.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:ge.debounce(function(){this.onResize()},50),remember:function(){if(ge.isUndefined(aa)&&(aa=new cE,aa.domElement.innerHTML=sE),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;ge.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&hE(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&Vu(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=hl(this)),e.folders={},ge.each(this.__folders,function(t,n){e.folders[n]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=hl(this),Hu(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[xa]=hl(this,!0)),this.load.remembered[e]=hl(this),this.preset=e,Gu(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){ge.each(this.__controllers,function(t){this.getRoot().load.remembered?pg(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),ge.each(this.__folders,function(t){t.revert(t)}),e||Hu(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&mg(this.__listening)},updateDisplay:function(){ge.each(this.__controllers,function(e){e.updateDisplay()}),ge.each(this.__folders,function(e){e.updateDisplay()})}});function Cf(s,e,t){var n=document.createElement("li");return e&&n.appendChild(e),t?s.__ul.insertBefore(n,t):s.__ul.appendChild(n),s.onResize(),n}function cp(s){te.unbind(window,"resize",s.__resizeHandler),s.saveToLocalStorageIfPossible&&te.unbind(window,"unload",s.saveToLocalStorageIfPossible)}function Hu(s,e){var t=s.__preset_select[s.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function fE(s,e,t){if(t.__li=e,t.__gui=s,ge.extend(t,{options:function(o){if(arguments.length>1){var a=t.__li.nextElementSibling;return t.remove(),la(s,t.object,t.property,{before:a,factoryArgs:[ge.toArray(arguments)]})}if(ge.isArray(o)||ge.isObject(o)){var l=t.__li.nextElementSibling;return t.remove(),la(s,t.object,t.property,{before:l,factoryArgs:[o]})}},name:function(o){return t.__li.firstElementChild.firstElementChild.innerHTML=o,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof ku){var n=new Fl(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});ge.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(r){var o=t[r],a=n[r];t[r]=n[r]=function(){var l=Array.prototype.slice.call(arguments);return a.apply(n,l),o.apply(t,l)}}),te.addClass(e,"has-slider"),t.domElement.insertBefore(n.domElement,t.domElement.firstElementChild)}else if(t instanceof Fl){var i=function(o){if(ge.isNumber(t.__min)&&ge.isNumber(t.__max)){var a=t.__li.firstElementChild.firstElementChild.innerHTML,l=t.__gui.__listening.indexOf(t)>-1;t.remove();var u=la(s,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return u.name(a),l&&u.listen(),u}return o};t.min=ge.compose(i,t.min),t.max=ge.compose(i,t.max)}else t instanceof ug?(te.bind(e,"click",function(){te.fakeEvent(t.__checkbox,"click")}),te.bind(t.__checkbox,"click",function(r){r.stopPropagation()})):t instanceof hg?(te.bind(e,"click",function(){te.fakeEvent(t.__button,"click")}),te.bind(e,"mouseover",function(){te.addClass(t.__button,"hover")}),te.bind(e,"mouseout",function(){te.removeClass(t.__button,"hover")})):t instanceof zu&&(te.addClass(e,"color"),t.updateDisplay=ge.compose(function(r){return e.style.borderLeftColor=t.__color.toString(),r},t.updateDisplay),t.updateDisplay());t.setValue=ge.compose(function(r){return s.getRoot().__preset_select&&t.isModified()&&Hu(s.getRoot(),!0),r},t.setValue)}function pg(s,e){var t=s.getRoot(),n=t.__rememberedObjects.indexOf(e.object);if(n!==-1){var i=t.__rememberedObjectIndecesToControllers[n];if(i===void 0&&(i={},t.__rememberedObjectIndecesToControllers[n]=i),i[e.property]=e,t.load&&t.load.remembered){var r=t.load.remembered,o=void 0;if(r[s.preset])o=r[s.preset];else if(r[xa])o=r[xa];else return;if(o[n]&&o[n][e.property]!==void 0){var a=o[n][e.property];e.initialValue=a,e.setValue(a)}}}}function la(s,e,t,n){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var i=void 0;if(n.color)i=new zu(e,t);else{var r=[e,t].concat(n.factoryArgs);i=oE.apply(s,r)}n.before instanceof As&&(n.before=n.before.__li),pg(s,i),te.addClass(i.domElement,"c");var o=document.createElement("span");te.addClass(o,"property-name"),o.innerHTML=i.property;var a=document.createElement("div");a.appendChild(o),a.appendChild(i.domElement);var l=Cf(s,a,n.before);return te.addClass(l,qt.CLASS_CONTROLLER_ROW),i instanceof zu?te.addClass(l,"color"):te.addClass(l,ZM(i.getValue())),fE(s,l,i),s.__controllers.push(i),i}function to(s,e){return document.location.href+"."+e}function Gu(s,e,t){var n=document.createElement("option");n.innerHTML=e,n.value=e,s.__preset_select.appendChild(n),t&&(s.__preset_select.selectedIndex=s.__preset_select.length-1)}function up(s,e){e.style.display=s.useLocalStorage?"block":"none"}function hE(s){var e=s.__save_row=document.createElement("li");te.addClass(s.domElement,"has-save"),s.__ul.insertBefore(e,s.__ul.firstChild),te.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",te.addClass(t,"button gears");var n=document.createElement("span");n.innerHTML="Save",te.addClass(n,"button"),te.addClass(n,"save");var i=document.createElement("span");i.innerHTML="New",te.addClass(i,"button"),te.addClass(i,"save-as");var r=document.createElement("span");r.innerHTML="Revert",te.addClass(r,"button"),te.addClass(r,"revert");var o=s.__preset_select=document.createElement("select");if(s.load&&s.load.remembered?ge.each(s.load.remembered,function(d,m){Gu(s,m,m===s.preset)}):Gu(s,xa,!1),te.bind(o,"change",function(){for(var d=0;d<s.__preset_select.length;d++)s.__preset_select[d].innerHTML=s.__preset_select[d].value;s.preset=this.value}),e.appendChild(o),e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(r),$o){var a=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),u=document.getElementById("dg-save-locally");u.style.display="block",localStorage.getItem(to(s,"isLocal"))==="true"&&l.setAttribute("checked","checked"),up(s,a),te.bind(l,"change",function(){s.useLocalStorage=!s.useLocalStorage,up(s,a)})}var f=document.getElementById("dg-new-constructor");te.bind(f,"keydown",function(d){d.metaKey&&(d.which===67||d.keyCode===67)&&aa.hide()}),te.bind(t,"click",function(){f.innerHTML=JSON.stringify(s.getSaveObject(),void 0,2),aa.show(),f.focus(),f.select()}),te.bind(n,"click",function(){s.save()}),te.bind(i,"click",function(){var d=prompt("Enter a new preset name.");d&&s.saveAs(d)}),te.bind(r,"click",function(){s.revert()})}function dE(s){var e=void 0;s.__resize_handle=document.createElement("div"),ge.extend(s.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(r){return r.preventDefault(),s.width+=e-r.clientX,s.onResize(),e=r.clientX,!1}function n(){te.removeClass(s.__closeButton,qt.CLASS_DRAG),te.unbind(window,"mousemove",t),te.unbind(window,"mouseup",n)}function i(r){return r.preventDefault(),e=r.clientX,te.addClass(s.__closeButton,qt.CLASS_DRAG),te.bind(window,"mousemove",t),te.bind(window,"mouseup",n),!1}te.bind(s.__resize_handle,"mousedown",i),te.bind(s.__closeButton,"mousedown",i),s.domElement.insertBefore(s.__resize_handle,s.domElement.firstElementChild)}function Vu(s,e){s.domElement.style.width=e+"px",s.__save_row&&s.autoPlace&&(s.__save_row.style.width=e+"px"),s.__closeButton&&(s.__closeButton.style.width=e+"px")}function hl(s,e){var t={};return ge.each(s.__rememberedObjects,function(n,i){var r={},o=s.__rememberedObjectIndecesToControllers[i];ge.each(o,function(a,l){r[l]=e?a.initialValue:a.getValue()}),t[i]=r}),t}function pE(s){for(var e=0;e<s.__preset_select.length;e++)s.__preset_select[e].value===s.preset&&(s.__preset_select.selectedIndex=e)}function mg(s){s.length!==0&&lE.call(window,function(){mg(s)}),ge.each(s,function(e){e.updateDisplay()})}class mE extends Vn{constructor(e,t={}){super(e),this.isWater=!0;const n=this,i=t.textureWidth!==void 0?t.textureWidth:512,r=t.textureHeight!==void 0?t.textureHeight:512,o=t.clipBias!==void 0?t.clipBias:0,a=t.alpha!==void 0?t.alpha:1,l=t.time!==void 0?t.time:0,u=t.waterNormals!==void 0?t.waterNormals:null,f=t.sunDirection!==void 0?t.sunDirection:new V(.70707,.70707,0),d=new je(t.sunColor!==void 0?t.sunColor:16777215),m=new je(t.waterColor!==void 0?t.waterColor:8355711),v=t.eye!==void 0?t.eye:new V(0,0,0),S=t.distortionScale!==void 0?t.distortionScale:20,y=t.side!==void 0?t.side:qi,x=t.fog!==void 0?t.fog:!1,g=new Ar,C=new V,A=new V,R=new V,N=new ut,O=new V(0,0,-1),p=new Ft,G=new V,E=new V,D=new Ft,Z=new ut,q=new On,$=new jn(i,r),k={name:"MirrorShader",uniforms:Li.merge([Ce.fog,Ce.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new ut},sunColor:{value:new je(8355711)},sunDirection:{value:new V(.70707,.70707,0)},eye:{value:new V},waterColor:{value:new je(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.3;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>	
				}`},X=new dn({name:k.name,uniforms:Li.clone(k.uniforms),vertexShader:k.vertexShader,fragmentShader:k.fragmentShader,lights:!0,side:y,fog:x});X.uniforms.mirrorSampler.value=$.texture,X.uniforms.textureMatrix.value=Z,X.uniforms.alpha.value=a,X.uniforms.time.value=l,X.uniforms.normalSampler.value=u,X.uniforms.sunColor.value=d,X.uniforms.waterColor.value=m,X.uniforms.sunDirection.value=f,X.uniforms.distortionScale.value=S,X.uniforms.eye.value=v,n.material=X,n.onBeforeRender=function(Y,le,ce){if(A.setFromMatrixPosition(n.matrixWorld),R.setFromMatrixPosition(ce.matrixWorld),N.extractRotation(n.matrixWorld),C.set(0,0,1),C.applyMatrix4(N),G.subVectors(A,R),G.dot(C)>0)return;G.reflect(C).negate(),G.add(A),N.extractRotation(ce.matrixWorld),O.set(0,0,-1),O.applyMatrix4(N),O.add(R),E.subVectors(A,O),E.reflect(C).negate(),E.add(A),q.position.copy(G),q.up.set(0,1,0),q.up.applyMatrix4(N),q.up.reflect(C),q.lookAt(E),q.far=ce.far,q.updateMatrixWorld(),q.projectionMatrix.copy(ce.projectionMatrix),Z.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),Z.multiply(q.projectionMatrix),Z.multiply(q.matrixWorldInverse),g.setFromNormalAndCoplanarPoint(C,A),g.applyMatrix4(q.matrixWorldInverse),p.set(g.normal.x,g.normal.y,g.normal.z,g.constant);const fe=q.projectionMatrix;D.x=(Math.sign(p.x)+fe.elements[8])/fe.elements[0],D.y=(Math.sign(p.y)+fe.elements[9])/fe.elements[5],D.z=-1,D.w=(1+fe.elements[10])/fe.elements[14],p.multiplyScalar(2/p.dot(D)),fe.elements[2]=p.x,fe.elements[6]=p.y,fe.elements[10]=p.z+1-o,fe.elements[14]=p.w,v.setFromMatrixPosition(ce.matrixWorld);const me=Y.getRenderTarget(),Te=Y.xr.enabled,Me=Y.shadowMap.autoUpdate;n.visible=!1,Y.xr.enabled=!1,Y.shadowMap.autoUpdate=!1,Y.setRenderTarget($),Y.state.buffers.depth.setMask(!0),Y.autoClear===!1&&Y.clear(),Y.render(le,q),n.visible=!0,Y.xr.enabled=Te,Y.shadowMap.autoUpdate=Me,Y.setRenderTarget(me);const ae=ce.viewport;ae!==void 0&&Y.state.viewport(ae)}}}const gg={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class jr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const gE=new Wl(-1,1,1,-1,0,1);class _E extends oi{constructor(){super(),this.setAttribute("position",new qn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new qn([0,2,0,0,2,0],2))}}const vE=new _E;class Ma{constructor(e){this._mesh=new Vn(vE,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,gE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class _g extends jr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof dn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Li.clone(e.uniforms),this.material=new dn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ma(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class fp extends jr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class xE extends jr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class yE{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ze);this._width=n.width,this._height=n.height,t=new jn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ci}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new _g(gg),this.copyPass.material.blending=fr,this.clock=new am}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}fp!==void 0&&(o instanceof fp?n=!0:o instanceof xE&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ze);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class bE extends jr{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new je}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const SE={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new je(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class wo extends jr{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Ze(e.x,e.y):new Ze(256,256),this.clearColor=new je(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new jn(r,o,{type:Ci}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const m=new jn(r,o,{type:Ci});m.texture.name="UnrealBloomPass.h"+d,m.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(m);const v=new jn(r,o,{type:Ci});v.texture.name="UnrealBloomPass.v"+d,v.texture.generateMipmaps=!1,this.renderTargetsVertical.push(v),r=Math.round(r/2),o=Math.round(o/2)}const a=SE;this.highPassUniforms=Li.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new dn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new Ze(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const f=gg;this.copyUniforms=Li.clone(f.uniforms),this.blendMaterial=new dn({uniforms:this.copyUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader,blending:yl,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new je,this.oldClearAlpha=1,this.basic=new Rr,this.fsQuad=new Ma(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Ze(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=wo.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=wo.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new dn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ze(.5,.5)},direction:{value:new Ze(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new dn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}wo.BlurDirectionX=new Ze(1,0);wo.BlurDirectionY=new Ze(0,1);const TE={name:"ACESFilmicToneMappingShader",uniforms:{tDiffuse:{value:null},exposure:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define saturate(a) clamp( a, 0.0, 1.0 )

		uniform sampler2D tDiffuse;

		uniform float exposure;

		varying vec2 vUv;

		vec3 RRTAndODTFit( vec3 v ) {

			vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
			vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
			return a / b;

		}

		vec3 ACESFilmicToneMapping( vec3 color ) {

		// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT
			const mat3 ACESInputMat = mat3(
				vec3( 0.59719, 0.07600, 0.02840 ), // transposed from source
				vec3( 0.35458, 0.90834, 0.13383 ),
				vec3( 0.04823, 0.01566, 0.83777 )
			);

		// ODT_SAT => XYZ => D60_2_D65 => sRGB
			const mat3 ACESOutputMat = mat3(
				vec3(  1.60475, -0.10208, -0.00327 ), // transposed from source
				vec3( -0.53108,  1.10813, -0.07276 ),
				vec3( -0.07367, -0.00605,  1.07602 )
			);

			color = ACESInputMat * color;

		// Apply RRT and ODT
			color = RRTAndODTFit( color );

			color = ACESOutputMat * color;

		// Clamp to [0, 1]
			return saturate( color );

		}

		void main() {

			vec4 tex = texture2D( tDiffuse, vUv );

			tex.rgb *= exposure / 0.6; // pre-exposed, outside of the tone mapping function

			gl_FragColor = vec4( ACESFilmicToneMapping( tex.rgb ), tex.a );

		}`},ME={name:"FilmShader",uniforms:{tDiffuse:{value:null},time:{value:0},intensity:{value:.5},grayscale:{value:!1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		uniform float intensity;
		uniform bool grayscale;
		uniform float time;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 base = texture2D( tDiffuse, vUv );

			float noise = rand( fract( vUv + time ) );

			vec3 color = base.rgb + base.rgb * clamp( 0.1 + noise, 0.0, 1.0 );

			color = mix( base.rgb, color, intensity );

			if ( grayscale ) {

				color = vec3( luminance( color ) ); // assuming linear-srgb

			}

			gl_FragColor = vec4( color, base.a );

		}`};class EE extends jr{constructor(e=.5,t=!1){super();const n=ME;this.uniforms=Li.clone(n.uniforms),this.material=new dn({name:n.name,uniforms:this.uniforms,vertexShader:n.vertexShader,fragmentShader:n.fragmentShader}),this.uniforms.intensity.value=e,this.uniforms.grayscale.value=t,this.fsQuad=new Ma(this.material)}render(e,t,n,i){this.uniforms.tDiffuse.value=n.texture,this.uniforms.time.value+=i,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const dl={name:"SMAAEdgesShader",defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new Ze(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},pl={name:"SMAAWeightsShader",defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new Ze(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},au={name:"SMAABlendShader",uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new Ze(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`};class AE extends jr{constructor(e,t){super(),this.edgesRT=new jn(e,t,{depthBuffer:!1,type:Ci}),this.edgesRT.texture.name="SMAAPass.edges",this.weightsRT=new jn(e,t,{depthBuffer:!1,type:Ci}),this.weightsRT.texture.name="SMAAPass.weights";const n=this,i=new Image;i.src=this.getAreaTexture(),i.onload=function(){n.areaTexture.needsUpdate=!0},this.areaTexture=new mn,this.areaTexture.name="SMAAPass.area",this.areaTexture.image=i,this.areaTexture.minFilter=Hn,this.areaTexture.generateMipmaps=!1,this.areaTexture.flipY=!1;const r=new Image;r.src=this.getSearchTexture(),r.onload=function(){n.searchTexture.needsUpdate=!0},this.searchTexture=new mn,this.searchTexture.name="SMAAPass.search",this.searchTexture.image=r,this.searchTexture.magFilter=hn,this.searchTexture.minFilter=hn,this.searchTexture.generateMipmaps=!1,this.searchTexture.flipY=!1,this.uniformsEdges=Li.clone(dl.uniforms),this.uniformsEdges.resolution.value.set(1/e,1/t),this.materialEdges=new dn({defines:Object.assign({},dl.defines),uniforms:this.uniformsEdges,vertexShader:dl.vertexShader,fragmentShader:dl.fragmentShader}),this.uniformsWeights=Li.clone(pl.uniforms),this.uniformsWeights.resolution.value.set(1/e,1/t),this.uniformsWeights.tDiffuse.value=this.edgesRT.texture,this.uniformsWeights.tArea.value=this.areaTexture,this.uniformsWeights.tSearch.value=this.searchTexture,this.materialWeights=new dn({defines:Object.assign({},pl.defines),uniforms:this.uniformsWeights,vertexShader:pl.vertexShader,fragmentShader:pl.fragmentShader}),this.uniformsBlend=Li.clone(au.uniforms),this.uniformsBlend.resolution.value.set(1/e,1/t),this.uniformsBlend.tDiffuse.value=this.weightsRT.texture,this.materialBlend=new dn({uniforms:this.uniformsBlend,vertexShader:au.vertexShader,fragmentShader:au.fragmentShader}),this.fsQuad=new Ma(null)}render(e,t,n){this.uniformsEdges.tDiffuse.value=n.texture,this.fsQuad.material=this.materialEdges,e.setRenderTarget(this.edgesRT),this.clear&&e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialWeights,e.setRenderTarget(this.weightsRT),this.clear&&e.clear(),this.fsQuad.render(e),this.uniformsBlend.tColor.value=n.texture,this.fsQuad.material=this.materialBlend,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}setSize(e,t){this.edgesRT.setSize(e,t),this.weightsRT.setSize(e,t),this.materialEdges.uniforms.resolution.value.set(1/e,1/t),this.materialWeights.uniforms.resolution.value.set(1/e,1/t),this.materialBlend.uniforms.resolution.value.set(1/e,1/t)}getAreaTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAIwCAIAAACOVPcQAACBeklEQVR42u39W4xlWXrnh/3WWvuciIzMrKxrV8/0rWbY0+SQFKcb4owIkSIFCjY9AC1BT/LYBozRi+EX+cV+8IMsYAaCwRcBwjzMiw2jAWtgwC8WR5Q8mDFHZLNHTarZGrLJJllt1W2qKrsumZWZcTvn7L3W54e1vrXX3vuciLPPORFR1XE2EomorB0nVuz//r71re/y/1eMvb4Cb3N11xV/PP/2v4UBAwJG/7H8urx6/25/Gf8O5hypMQ0EEEQwAqLfoN/Z+97f/SW+/NvcgQk4sGBJK6H7N4PFVL+K+e0N11yNfkKvwUdwdlUAXPHHL38oa15f/i/46Ih6SuMSPmLAYAwyRKn7dfMGH97jaMFBYCJUgotIC2YAdu+LyW9vvubxAP8kAL8H/koAuOKP3+q6+xGnd5kdYCeECnGIJViwGJMAkQKfDvB3WZxjLKGh8VSCCzhwEWBpMc5/kBbjawT4HnwJfhr+pPBIu7uu+OOTo9vsmtQcniMBGkKFd4jDWMSCRUpLjJYNJkM+IRzQ+PQvIeAMTrBS2LEiaiR9b/5PuT6Ap/AcfAFO4Y3dA3DFH7/VS+M8k4baEAQfMI4QfbVDDGIRg7GKaIY52qAjTAgTvGBAPGIIghOCYAUrGFNgzA7Q3QhgCwfwAnwe5vDejgG44o/fbm1C5ZlYQvQDARPAIQGxCWBM+wWl37ZQESb4gImexGMDouhGLx1Cst0Saa4b4AqO4Hk4gxo+3DHAV/nx27p3JziPM2pVgoiia5MdEzCGULprIN7gEEeQ5IQxEBBBQnxhsDb5auGmAAYcHMA9eAAz8PBol8/xij9+C4Djlim4gJjWcwZBhCBgMIIYxGAVIkH3ZtcBuLdtRFMWsPGoY9rN+HoBji9VBYdwD2ZQg4cnO7OSq/z4rU5KKdwVbFAjNojCQzTlCLPFSxtamwh2jMUcEgg2Wm/6XgErIBhBckQtGN3CzbVacERgCnfgLswhnvqf7QyAq/z4rRZm1YglYE3affGITaZsdIe2FmMIpnOCap25I6jt2kCwCW0D1uAD9sZctNGXcQIHCkINDQgc78aCr+zjtw3BU/ijdpw3zhCwcaONwBvdeS2YZKkJNJsMPf2JKEvC28RXxxI0ASJyzQCjCEQrO4Q7sFArEzjZhaFc4cdv+/JFdKULM4px0DfUBI2hIsy06BqLhGTQEVdbfAIZXYMPesq6VoCHICzUyjwInO4Y411//LYLs6TDa9wvg2CC2rElgAnpTBziThxaL22MYhzfkghz6GAs2VHbbdM91VZu1MEEpupMMwKyVTb5ij9+u4VJG/5EgEMMmFF01cFai3isRbKbzb+YaU/MQbAm2XSMoUPAmvZzbuKYRIFApbtlrfFuUGd6vq2hXNnH78ZLh/iFhsQG3T4D1ib7k5CC6vY0DCbtrohgLEIClXiGtl10zc0CnEGIhhatLBva7NP58Tvw0qE8yWhARLQ8h4+AhQSP+I4F5xoU+VilGRJs6wnS7ruti/4KvAY/CfdgqjsMy4pf8fodQO8/gnuX3f/3xi3om1/h7THr+co3x93PP9+FBUfbNUjcjEmhcrkT+8K7ml7V10Jo05mpIEFy1NmCJWx9SIKKt+EjAL4Ez8EBVOB6havuT/rByPvHXK+9zUcfcbb254+9fydJknYnRr1oGfdaiAgpxu1Rx/Rek8KISftx3L+DfsLWAANn8Hvw0/AFeAGO9DFV3c6D+CcWbL8Dj9e7f+T1k8AZv/d7+PXWM/Z+VvdCrIvuAKO09RpEEQJM0Ci6+B4xhTWr4cZNOvhktabw0ta0rSJmqz3Yw5/AKXwenod7cAhTmBSPKf6JBdvH8IP17h95pXqw50/+BFnj88fev4NchyaK47OPhhtI8RFSvAfDSNh0Ck0p2gLxGkib5NJj/JWCr90EWQJvwBzO4AHcgztwAFN1evHPUVGwfXON+0debT1YeGON9Yy9/63X+OguiwmhIhQhD7l4sMqlG3D86Suc3qWZ4rWjI1X7u0Ytw6x3rIMeIOPDprfe2XzNgyj6PahhBjO4C3e6puDgXrdg+/5l948vF3bqwZetZ+z9Rx9zdIY5pInPK4Nk0t+l52xdK2B45Qd87nM8fsD5EfUhIcJcERw4RdqqH7Yde5V7m1vhNmtedkz6EDzUMF/2jJYWbC+4fzzA/Y+/8PPH3j9dcBAPIRP8JLXd5BpAu03aziOL3VVHZzz3CXWDPWd+SH2AnxIqQoTZpo9Ckc6HIrFbAbzNmlcg8Ag8NFDDAhbJvTBZXbC94P7t68EXfv6o+21gUtPETU7bbkLxvNKRFG2+KXzvtObonPP4rBvsgmaKj404DlshFole1Glfh02fE7bYR7dZ82oTewIBGn1Md6CG6YUF26X376oevOLzx95vhUmgblI6LBZwTCDY7vMq0op5WVXgsObOXJ+1x3qaBl9j1FeLxbhU9w1F+Wiba6s1X/TBz1LnUfuYDi4r2C69f1f14BWfP+p+W2GFKuC9phcELMYRRLur9DEZTUdEH+iEqWdaM7X4WOoPGI+ZYD2+wcQ+y+ioHUZ9dTDbArzxmi/bJI9BND0Ynd6lBdve/butBw8+f/T9D3ABa3AG8W3VPX4hBin+bj8dMMmSpp5pg7fJ6xrBFE2WQQEWnV8Qg3FbAWzYfM1rREEnmvkN2o1+acG2d/9u68GDzx91v3mAjb1zkpqT21OipPKO0b9TO5W0nTdOmAQm0TObts3aBKgwARtoPDiCT0gHgwnbArzxmtcLc08HgF1asN0C4Ms/fvD5I+7PhfqyXE/b7RbbrGyRQRT9ARZcwAUmgdoz0ehJ9Fn7QAhUjhDAQSw0bV3T3WbNa59jzmiP6GsWbGXDX2ytjy8+f9T97fiBPq9YeLdBmyuizZHaqXITnXiMUEEVcJ7K4j3BFPurtB4bixW8wTpweL8DC95szWMOqucFYGsWbGU7p3TxxxefP+r+oTVktxY0v5hbq3KiOKYnY8ddJVSBxuMMVffNbxwIOERShst73HZ78DZrHpmJmH3K6sGz0fe3UUj0eyRrSCGTTc+rjVNoGzNSv05srAxUBh8IhqChiQgVNIIBH3AVPnrsnXQZbLTm8ammv8eVXn/vWpaTem5IXRlt+U/LA21zhSb9cye6jcOfCnOwhIAYXAMVTUNV0QhVha9xjgA27ODJbLbmitt3tRN80lqG6N/khgot4ZVlOyO4WNg3OIMzhIZQpUEHieg2im6F91hB3I2tubql6BYNN9Hj5S7G0G2tahslBWKDnOiIvuAEDzakDQKDNFQT6gbn8E2y4BBubM230YIpBnDbMa+y3dx0n1S0BtuG62lCCXwcY0F72T1VRR3t2ONcsmDjbmzNt9RFs2LO2hQNyb022JisaI8rAWuw4HI3FuAIhZdOGIcdjLJvvObqlpqvWTJnnQbyi/1M9O8UxWhBs//H42I0q1Yb/XPGONzcmm+ri172mHKvZBpHkJaNJz6v9jxqiklDj3U4CA2ugpAaYMWqNXsdXbmJNd9egCnJEsphXNM+MnK3m0FCJ5S1kmJpa3DgPVbnQnPGWIDspW9ozbcO4K/9LkfaQO2KHuqlfFXSbdNzcEcwoqNEFE9zcIXu9/6n/ym/BC/C3aJLzEKPuYVlbFnfhZ8kcWxV3dbv4bKl28566wD+8C53aw49lTABp9PWbsB+knfc/Li3eVizf5vv/xmvnPKg5ihwKEwlrcHqucuVcVOxEv8aH37E3ZqpZypUulrHEtIWKUr+txHg+ojZDGlwnqmkGlzcVi1dLiNSJiHjfbRNOPwKpx9TVdTn3K05DBx4psIk4Ei8aCkJahRgffk4YnEXe07T4H2RR1u27E6wfQsBDofUgjFUFnwC2AiVtA+05J2zpiDK2Oa0c5fmAecN1iJzmpqFZxqYBCYhFTCsUNEmUnIcZ6aEA5rQVhEywG6w7HSW02XfOoBlQmjwulOFQAg66SvJblrTEX1YtJ3uG15T/BH1OfOQeuR8g/c0gdpT5fx2SKbs9EfHTKdM8A1GaJRHLVIwhcGyydZsbifAFVKl5EMKNU2Hryo+06BeTgqnxzYjThVySDikbtJPieco75lYfKAJOMEZBTjoITuWHXXZVhcUDIS2hpiXHV9Ku4u44bN5OYLDOkJo8w+xJSMbhBRHEdEs9JZUCkQrPMAvaHyLkxgkEHxiNkx/x2YB0mGsQ8EUWj/stW5YLhtS5SMu+/YBbNPDCkGTUybN8krRLBGPlZkVOA0j+a1+rkyQKWGaPHPLZOkJhioQYnVZ2hS3zVxMtgC46KuRwbJNd9nV2PHgb36F194ecf/Yeu2vAFe5nm/bRBFrnY4BauE8ERmZRFUn0k8hbftiVYSKMEme2dJCJSCGYAlNqh87bXOPdUkGy24P6d1ll21MBqqx48Fvv8ZHH8HZFY7j/uAq1xMJUFqCSUlJPmNbIiNsmwuMs/q9CMtsZsFO6SprzCS1Z7QL8xCQClEelpjTduDMsmWD8S1PT152BtvmIGvUeDA/yRn83u/x0/4qxoPHjx+PXY9pqX9bgMvh/Nz9kpP4pOe1/fYf3axUiMdHLlPpZCNjgtNFAhcHEDxTumNONhHrBduW+vOyY++70WWnPXj98eA4kOt/mj/5E05l9+O4o8ePx67HFqyC+qSSnyselqjZGaVK2TadbFLPWAQ4NBhHqDCCV7OTpo34AlSSylPtIdd2AJZlyzYQrDJ5lcWGNceD80CunPLGGzsfD+7wRb95NevJI5docQ3tgCyr5bGnyaPRlmwNsFELViOOx9loebGNq2moDOKpHLVP5al2cymWHbkfzGXL7kfRl44H9wZy33tvt+PB/Xnf93e+nh5ZlU18wCiRUa9m7kib9LYuOk+hudQNbxwm0AQqbfloimaB2lM5fChex+ylMwuTbfmXQtmWlenZljbdXTLuOxjI/fDDHY4Hjx8/Hrse0zXfPFxbUN1kKqSCCSk50m0Ajtx3ub9XHBKHXESb8iO6E+qGytF4nO0OG3SXzbJlhxBnKtKyl0NwybjvYCD30aMdjgePHz8eu56SVTBbgxJMliQ3Oauwg0QHxXE2Ez/EIReLdQj42Gzb4CLS0YJD9xUx7bsi0vJi5mUbW1QzL0h0PFk17rtiIPfJk52MB48fPx67npJJwyrBa2RCCQRTbGZSPCxTPOiND4G2pYyOQ4h4jINIJh5wFU1NFZt+IsZ59LSnDqBjZ2awbOku+yInunLcd8VA7rNnOxkPHj9+PGY9B0MWJJNozOJmlglvDMXDEozdhQWbgs/U6oBanGzLrdSNNnZFjOkmbi5bNt1lX7JLLhn3vXAg9/h4y/Hg8ePHI9dzQMEkWCgdRfYykYKnkP7D4rIujsujaKPBsB54vE2TS00ccvFY/Tth7JXeq1hz+qgVy04sAJawTsvOknHfCwdyT062HA8eP348Zj0vdoXF4pilKa2BROed+9fyw9rWRXeTFXESMOanvDZfJuJaSXouQdMdDJZtekZcLLvEeK04d8m474UDuaenW44Hjx8/Xns9YYqZpszGWB3AN/4VHw+k7WSFtJ3Qicuqb/NlVmgXWsxh570xg2UwxUw3WfO6B5nOuO8aA7lnZxuPB48fPx6znm1i4bsfcbaptF3zNT78eFPtwi1OaCNOqp1x3zUGcs/PN++AGD1+fMXrSVm2baTtPhPahbPhA71wIHd2bXzRa69nG+3CraTtPivahV/55tXWg8fyRY/9AdsY8VbSdp8V7cKrrgdfM//z6ILQFtJ2nxHtwmuoB4/kf74+gLeRtvvMaBdeSz34+vifx0YG20jbfTa0C6+tHrwe//NmOG0L8EbSdp8R7cLrrQe/996O+ai3ujQOskpTNULa7jOjXXj99eCd8lHvoFiwsbTdZ0a78PrrwTvlo966pLuRtB2fFe3Cm6oHP9kNH/W2FryxtN1nTLvwRurBO+Kj3pWXHidtx2dFu/Bm68Fb81HvykuPlrb7LGkX3mw9eGs+6h1Y8MbSdjegXcguQLjmevDpTQLMxtJ2N6NdyBZu9AbrwVvwUW+LbteULUpCdqm0HTelXbhNPe8G68Gb8lFvVfYfSNuxvrTdTWoXbozAzdaDZzfkorOj1oxVxlIMlpSIlpLrt8D4hrQL17z+c3h6hU/wv4Q/utps4+bm+6P/hIcf0JwQ5oQGPBL0eKPTYEXTW+eL/2DKn73J9BTXYANG57hz1cEMviVf/4tf5b/6C5pTQkMIWoAq7hTpOJjtAM4pxKu5vg5vXeUrtI09/Mo/5H+4z+Mp5xULh7cEm2QbRP2tFIKR7WM3fPf/jZ3SWCqLM2l4NxID5zB72HQXv3jj/8mLR5xXNA5v8EbFQEz7PpRfl1+MB/hlAN65qgDn3wTgH13hK7T59bmP+NIx1SHHU84nLOITt3iVz8mNO+lPrjGAnBFqmioNn1mTyk1ta47R6d4MrX7tjrnjYUpdUbv2rVr6YpVfsGG58AG8Ah9eyUN8CX4WfgV+G8LVWPDGb+Zd4cU584CtqSbMKxauxTg+dyn/LkVgA+IR8KHtejeFKRtTmLLpxN6mYVLjYxwXf5x2VofiZcp/lwKk4wGOpYDnoIZPdg/AAbwMfx0+ge9dgZvYjuqKe4HnGnykYo5TvJbG0Vj12JagRhwKa44H95ShkZa5RyLGGdfYvG7aw1TsF6iapPAS29mNS3NmsTQZCmgTzFwgL3upCTgtBTRwvGMAKrgLn4evwin8+afJRcff+8izUGUM63GOOuAs3tJkw7J4kyoNreqrpO6cYLQeFUd7TTpr5YOTLc9RUUogUOVJQ1GYJaFLAW0oTmKyYS46ZooP4S4EON3xQ5zC8/CX4CnM4c1PE8ApexpoYuzqlP3d4S3OJP8ZDK7cKWNaTlqmgDiiHwl1YsE41w1zT4iRTm3DBqxvOUsbMKKDa/EHxagtnta072ejc3DOIh5ojvh8l3tk1JF/AV6FU6jh3U8HwEazLgdCLYSQ+MYiAI2ltomkzttUb0gGHdSUUgsIYjTzLG3mObX4FBRaYtpDVNZrih9TgTeYOBxsEnN1gOCTM8Bsw/ieMc75w9kuAT6A+/AiHGvN/+Gn4KRkiuzpNNDYhDGFndWRpE6SVfm8U5bxnSgVV2jrg6JCKmneqey8VMFgq2+AM/i4L4RUbfSi27lNXZ7R7W9RTcq/q9fk4Xw3AMQd4I5ifAZz8FcVtm9SAom/dyN4lczJQW/kC42ZrHgcCoIf1oVMKkVItmMBi9cOeNHGLqOZk+QqQmrbc5YmYgxELUUN35z2iohstgfLIFmcMV7s4CFmI74L9+EFmGsi+tGnAOD4Yk9gIpo01Y4cA43BWGygMdr4YZekG3OBIUXXNukvJS8tqa06e+lSDCtnqqMFu6hWHXCF+WaYt64m9QBmNxi7Ioy7D+fa1yHw+FMAcPt7SysFLtoG4PXAk7JOA3aAxBRqUiAdU9Yp5lK3HLSRFtOim0sa8euEt08xvKjYjzeJ2GU7YawexrnKI9tmobInjFXCewpwriY9+RR4aaezFhMhGCppKwom0ChrgFlKzyPKkGlTW1YQrE9HJqu8hKGgMc6hVi5QRq0PZxNfrYNgE64utmRv6KKHRpxf6VDUaOvNP5jCEx5q185My/7RKz69UQu2im5k4/eownpxZxNLwiZ1AZTO2ZjWjkU9uaB2HFn6Q3u0JcsSx/qV9hTEApRzeBLDJQXxYmTnq7bdLa3+uqFrxLJ5w1TehnNHx5ECvCh2g2c3hHH5YsfdaSKddztfjQ6imKFGSyFwlLzxEGPp6r5IevVjk1AMx3wMqi1NxDVjLBiPs9tbsCkIY5we5/ML22zrCScFxnNtzsr9Wcc3CnD+pYO+4VXXiDE0oc/vQQ/fDK3oPESJMYXNmJa/DuloJZkcTpcYE8lIH8Dz8DJMiynNC86Mb2lNaaqP/+L7f2fcE/yP7/Lde8xfgSOdMxvOixZf/9p3+M4hT1+F+zApxg9XfUvYjc8qX2lfOOpK2gNRtB4flpFu9FTKCp2XJRgXnX6olp1zyYjTKJSkGmLE2NjUr1bxFM4AeAAHBUFIeSLqXR+NvH/M9fOnfHzOD2vCSyQJKzfgsCh+yi/Mmc35F2fUrw7miW33W9hBD1vpuUojFphIyvg7aTeoymDkIkeW3XLHmguMzbIAJejN6B5MDrhipE2y6SoFRO/AK/AcHHZHNIfiWrEe/C6cr3f/yOvrQKB+zMM55/GQdLDsR+ifr5Fiuu+/y+M78LzOE5dsNuXC3PYvYWd8NXvphLSkJIasrlD2/HOqQ+RjcRdjKTGWYhhVUm4yxlyiGPuMsZR7sMCHUBeTuNWA7if+ifXgc/hovftHXs/DV+Fvwe+f8shzMiMcweFgBly3//vwJfg5AN4450fn1Hd1Rm1aBLu22Dy3y3H2+OqMemkbGZ4jozcDjJf6596xOLpC0eMTHbKnxLxH27uZ/bMTGs2jOaMOY4m87CfQwF0dw53oa1k80JRuz/XgS+8fX3N9Af4qPIMfzKgCp4H5TDGe9GGeFPzSsZz80SlPTxXjgwJmC45njzgt2vbQ4b4OAdUK4/vWhO8d8v6EE8fMUsfakXbPpFJeLs2ubM/qdm/la3WP91uWhxXHjoWhyRUq2iJ/+5mA73zwIIo+LoZ/SgvIRjAd1IMvvn98PfgOvAJfhhm8scAKVWDuaRaK8aQ9f7vuPDH6Bj47ZXau7rqYJ66mTDwEDU6lLbCjCK0qTXyl5mnDoeNRxanj3FJbaksTk0faXxHxLrssgPkWB9LnA/MFleXcJozzjwsUvUG0X/QCve51qkMDXp9mtcyOy3rwBfdvVJK7D6/ACSzg3RoruIq5UDeESfEmVclDxnniU82vxMLtceD0hGZWzBNPMM/jSPne2OVatiTKUpY5vY7gc0LdUAWeWM5tH+O2I66AOWw9xT2BuyRVLGdoDHUsVRXOo/c+ZdRXvFfnxWyIV4upFLCl9eAL7h8Zv0QH8Ry8pA2cHzQpGesctVA37ZtklBTgHjyvdSeKY/RZw/kJMk0Y25cSNRWSigQtlULPTw+kzuJPeYEkXjQRpoGZobYsLF79pyd1dMRHInbgFTZqNLhDqiIsTNpoex2WLcy0/X6rHcdMMQvFSd5dWA++4P7xv89deACnmr36uGlL69bRCL6BSZsS6c0TU2TKK5gtWCzgAOOwQcurqk9j8whvziZSMLcq5hbuwBEsYjopUBkqw1yYBGpLA97SRElEmx5MCInBY5vgLk94iKqSWmhIGmkJ4Bi9m4L645J68LyY4wsFYBfUg5feP/6gWWm58IEmKQM89hq7KsZNaKtP5TxxrUZZVkNmMJtjbKrGxLNEbHPJxhqy7lAmbC32ZqeF6lTaknRWcYaFpfLUBh/rwaQycCCJmW15Kstv6jRHyJFry2C1ahkkIW0LO75s61+owxK1y3XqweX9m5YLM2DPFeOjn/iiqCKJ+yKXF8t5Yl/kNsqaSCryxPq5xWTFIaP8KSW0RYxqupaUf0RcTNSSdJZGcKYdYA6kdtrtmyBckfKXwqk0pHpUHlwWaffjNRBYFPUDWa8e3Lt/o0R0CdisKDM89cX0pvRHEfM8ca4t0s2Xx4kgo91MPQJ/0c9MQYq0co8MBh7bz1fio0UUHLR4aAIOvOmoYO6kwlEVODSSTliWtOtH6sPkrtctF9ZtJ9GIerBskvhdVS5cFNv9s1BU0AbdUgdK4FG+dRnjFmDTzniRMdZO1QhzMK355vigbdkpz9P6qjUGE5J2qAcXmwJ20cZUiAD0z+pGMx6xkzJkmEf40Hr4qZfVg2XzF9YOyoV5BjzVkUJngKf8lgNYwKECEHrCNDrWZzMlflS3yBhr/InyoUgBc/lKT4pxVrrC6g1YwcceK3BmNxZcAtz3j5EIpqguh9H6wc011YN75cKDLpFDxuwkrPQmUwW4KTbj9mZTwBwLq4aQMUZbHm1rylJ46dzR0dua2n3RYCWZsiHROeywyJGR7mXKlpryyCiouY56sFkBWEnkEB/raeh/Sw4162KeuAxMQpEkzy5alMY5wamMsWKKrtW2WpEWNnReZWONKWjrdsKZarpFjqCslq773PLmEhM448Pc3+FKr1+94vv/rfw4tEcu+lKTBe4kZSdijBrykwv9vbCMPcLQTygBjzVckSLPRVGslqdunwJ4oegtFOYb4SwxNgWLCmD7T9kVjTv5YDgpo0XBmN34Z/rEHp0sgyz7lngsrm4lvMm2Mr1zNOJYJ5cuxuQxwMGJq/TP5emlb8fsQBZviK4t8hFL+zbhtlpwaRSxQRWfeETjuauPsdGxsBVdO7nmP4xvzSoT29pRl7kGqz+k26B3Oy0YNV+SXbbQas1ctC/GarskRdFpKczVAF1ZXnLcpaMuzVe6lZ2g/1ndcvOVgRG3sdUAY1bKD6achijMPdMxV4muKVorSpiDHituH7rSTs7n/4y5DhRXo4FVBN4vO/zbAcxhENzGbHCzU/98Mcx5e7a31kWjw9FCe/zNeYyQjZsWb1uc7U33pN4Mji6hCLhivqfa9Ss6xLg031AgfesA/l99m9fgvnaF9JoE6bYKmkGNK3aPbHB96w3+DnxFm4hs0drLsk7U8kf/N/CvwQNtllna0rjq61sH8L80HAuvwH1tvBy2ChqWSCaYTaGN19sTvlfzFD6n+iKTbvtayfrfe9ueWh6GJFoxLdr7V72a5ZpvHcCPDzma0wTO4EgbLyedxstO81n57LYBOBzyfsOhUKsW1J1BB5vr/tz8RyqOFylQP9Tvst2JALsC5lsH8PyQ40DV4ANzYa4dedNiKNR1s+x2wwbR7q4/4cTxqEk4LWDebfisuo36JXLiWFjOtLrlNWh3K1rRS4xvHcDNlFnNmWBBAl5SWaL3oPOfnvbr5pdjVnEaeBJSYjuLEkyLLsWhKccadmOphZkOPgVdalj2QpSmfOsADhMWE2ZBu4+EEJI4wKTAuCoC4xwQbWXBltpxbjkXJtKxxabo9e7tyhlgb6gNlSbUpMh+l/FaqzVwewGu8BW1Zx7pTpQDJUjb8tsUTW6+GDXbMn3mLbXlXJiGdggxFAoUrtPS3wE4Nk02UZG2OOzlk7fRs7i95QCLo3E0jtrjnM7SR3uS1p4qtS2nJ5OwtQVHgOvArLBFijZUV9QtSl8dAY5d0E0hM0w3HS2DpIeB6m/A1+HfhJcGUq4sOxH+x3f5+VO+Ds9rYNI7zPXOYWPrtf8bYMx6fuOAX5jzNR0PdsuON+X1f7EERxMJJoU6GkTEWBvVolVlb5lh3tKCg6Wx1IbaMDdJ+9sUCc5KC46hKGCk3IVOS4TCqdBNfUs7Kd4iXf2RjnT/LLysJy3XDcHLh/vde3x8DoGvwgsa67vBk91G5Pe/HbOe7xwym0NXbtiuuDkGO2IJDh9oQvJ4cY4vdoqLDuoH9Zl2F/ofsekn8lkuhIlhQcffUtSjytFyp++p6NiE7Rqx/lodgKVoceEp/CP4FfjrquZaTtj2AvH5K/ywpn7M34K/SsoYDAdIN448I1/0/wveW289T1/lX5xBzc8N5IaHr0XMOQdHsIkDuJFifj20pBm5jzwUv9e2FhwRsvhAbalCIuIw3bhJihY3p6nTFFIZgiSYjfTf3aXuOjmeGn4bPoGvwl+CFzTRczBIuHBEeImHc37/lGfwZR0cXzVDOvaKfNHvwe+suZ771K/y/XcBlsoN996JpBhoE2toYxOznNEOS5TJc6Id5GEXLjrWo+LEWGNpPDU4WAwsIRROu+1vM+0oW37z/MBN9kqHnSArwPfgFJ7Cq/Ai3Ie7g7ncmI09v8sjzw9mzOAEXoIHxURueaAce5V80f/DOuuZwHM8vsMb5wBzOFWM7wymTXPAEvm4vcFpZ2ut0VZRjkiP2MlmLd6DIpbGSiHOjdnUHN90hRYmhTnmvhzp1iKDNj+b7t5hi79lWGwQ+HN9RsfFMy0FXbEwhfuczKgCbyxYwBmcFhhvo/7a44v+i3XWcwDP86PzpGQYdWh7csP5dBvZ1jNzdxC8pBGuxqSW5vw40nBpj5JhMwvOzN0RWqERHMr4Lv1kWX84xLR830G3j6yqZ1a8UstTlW+qJPOZ+sZ7xZPKTJLhiNOAFd6tk+jrTH31ncLOxid8+nzRb128HhUcru/y0Wn6iT254YPC6FtVSIMoW2sk727AhvTtrWKZTvgsmckfXYZWeNRXx/3YQ2OUxLDrbHtN11IwrgXT6c8dATDwLniYwxzO4RzuQqTKSC5gAofMZ1QBK3zQ4JWobFbcvJm87FK+6JXrKahLn54m3p+McXzzYtP8VF/QpJuh1OwieElEoI1pRxPS09FBrkq2tWCU59+HdhNtTIqKm8EBrw2RTOEDpG3IKo2Y7mFdLm3ZeVjYwVw11o/oznceMve4CgMfNym/utA/d/ILMR7gpXzRy9eDsgLcgbs8O2Va1L0zzIdwGGemTBuwROHeoMShkUc7P+ISY3KH5ZZeWqO8mFTxQYeXTNuzvvK5FGPdQfuu00DwYFY9dyhctEt+OJDdnucfpmyhzUJzfsJjr29l8S0bXBfwRS9ZT26tmMIdZucch5ZboMz3Nio3nIOsYHCGoDT4kUA9MiXEp9Xsui1S8th/kbWIrMBxDGLodWUQIWcvnXy+9M23xPiSMOiRPqM+YMXkUN3gXFrZJwXGzUaMpJfyRS9ZT0lPe8TpScuRlbMHeUmlaKDoNuy62iWNTWNFYjoxFzuJs8oR+RhRx7O4SVNSXpa0ZJQ0K1LAHDQ+D9IepkMXpcsq5EVCvClBUIzDhDoyKwDw1Lc59GbTeORivugw1IcuaEOaGWdNm+Ps5fQ7/tm0DjMegq3yM3vb5j12qUId5UZD2oxDSEWOZMSqFl/W+5oynWDa/aI04tJRQ2eTXusg86SQVu/nwSYwpW6wLjlqIzwLuxGIvoAvul0PS+ZNz0/akp/pniO/8JDnGyaCkzbhl6YcqmK/69prxPqtpx2+Km9al9sjL+rwMgHw4jE/C8/HQ3m1vBuL1fldbzd8mOueVJ92syqdEY4KJjSCde3mcRw2TA6szxedn+zwhZMps0XrqEsiUjnC1hw0TELC2Ek7uAAdzcheXv1BYLagspxpzSAoZZUsIzIq35MnFQ9DOrlNB30jq3L4pkhccKUAA8/ocvN1Rzx9QyOtERs4CVsJRK/DF71kPYrxYsGsm6RMh4cps5g1DOmM54Ly1ii0Hd3Y/BMk8VWFgBVmhqrkJCPBHAolwZaWzLR9Vb7bcWdX9NyUYE+uB2BKfuaeBUcjDljbYVY4DdtsVWvzRZdWnyUzDpjNl1Du3aloAjVJTNDpcIOVVhrHFF66lLfJL1zJr9PQ2nFJSBaKoDe+sAvLufZVHVzYh7W0h/c6AAZ+7Tvj6q9j68G/cTCS/3n1vLKHZwNi+P+pS0WkZNMBMUl+LDLuiE4omZy71r3UFMwNJV+VJ/GC5ixVUkBStsT4gGKh0Gm4Oy3qvq7Lbmq24nPdDuDR9deR11XzP4vFu3TYzfnIyiSVmgizUYGqkIXNdKTY9pgb9D2Ix5t0+NHkVzCdU03suWkkVZAoCONCn0T35gAeW38de43mf97sMOpSvj4aa1KYUm58USI7Wxxes03bAZdRzk6UtbzMaCQ6IxO0dy7X+XsjoD16hpsBeGz9dfzHj+R/Hp8nCxZRqkEDTaCKCSywjiaoMJ1TITE9eg7Jqnq8HL6gDwiZb0u0V0Rr/rmvqjxKuaLCX7ZWXTvAY+uvm3z8CP7nzVpngqrJpZKwWnCUjIviYVlirlGOzPLI3SMVyp/elvBUjjDkNhrtufFFErQ8pmdSlbK16toBHlt/HV8uHMX/vEGALkV3RJREiSlopxwdMXOZPLZ+ix+kAHpMKIk8UtE1ygtquttwxNhphrIZ1IBzjGF3IIGxGcBj6q8bHJBG8T9vdsoWrTFEuebEZuVxhhClH6P5Zo89OG9fwHNjtNQTpD0TG9PJLEYqvEY6Rlxy+ZZGfL0Aj62/bnQCXp//eeM4KzfQVJbgMQbUjlMFIm6TpcfWlZje7NBSV6IsEVmumWIbjiloUzQX9OzYdo8L1wjw2PrrpimONfmfNyzKklrgnEkSzT5QWYQW40YShyzqsRmMXbvVxKtGuYyMKaU1ugenLDm5Ily4iT14fP11Mx+xJv+zZ3MvnfdFqxU3a1W/FTB4m3Qfsyc1XUcdVhDeUDZXSFHHLQj/Y5jtC7ZqM0CXGwB4bP11i3LhOvzPGygYtiUBiwQV/4wFO0majijGsafHyRLu0yG6q35cL1rOpVxr2s5cM2jJYMCdc10Aj6q/blRpWJ//+dmm5psMl0KA2+AFRx9jMe2WbC4jQxnikd4DU8TwUjRVacgdlhmr3bpddzuJ9zXqr2xnxJfzP29RexdtjDVZqzkqa6PyvcojGrfkXiJ8SEtml/nYskicv0ivlxbqjemwUjMw5evdg8fUX9nOiC/lf94Q2i7MURk9nW1MSj5j8eAyV6y5CN2S6qbnw3vdA1Iwq+XOSCl663udN3IzLnrt+us25cI1+Z83SXQUldqQq0b5XOT17bGpLd6ssN1VMPf8c+jG8L3NeCnMdF+Ra3fRa9dft39/LuZ/3vwHoHrqGmQFafmiQw6eyzMxS05K4bL9uA+SKUQzCnSDkqOGokXyJvbgJ/BHI+qvY69//4rl20NsmK2ou2dTsyIALv/91/8n3P2Aao71WFGi8KKv1fRC5+J67Q/507/E/SOshqN5TsmYIjVt+kcjAx98iz/4SaojbIV1rexE7/C29HcYD/DX4a0rBOF5VTu7omsb11L/AWcVlcVZHSsqGuXLLp9ha8I//w3Mv+T4Ew7nTBsmgapoCrNFObIcN4pf/Ob/mrvHTGqqgAupL8qWjWPS9m/31jAe4DjA+4+uCoQoT/zOzlrNd3qd4SdphFxsUvYwGWbTWtISc3wNOWH+kHBMfc6kpmpwPgHWwqaSUG2ZWWheYOGQGaHB+eQ/kn6b3pOgLV+ODSn94wDvr8Bvb70/LLuiPPEr8OGVWfDmr45PZyccEmsVXZGe1pRNX9SU5+AVQkNTIVPCHF/jGmyDC9j4R9LfWcQvfiETmgMMUCMN1uNCakkweZsowdYobiMSlnKA93u7NzTXlSfe+SVbfnPQXmg9LpYAQxpwEtONyEyaueWM4FPjjyjG3uOaFmBTWDNgBXGEiQpsaWhnAqIijB07Dlsy3fUGeP989xbWkyf+FF2SNEtT1E0f4DYYVlxFlbaSMPIRMk/3iMU5pME2SIWJvjckciebkQuIRRyhUvkHg/iUljG5kzVog5hV7vIlCuBrmlhvgPfNHQM8lCf+FEGsYbMIBC0qC9a0uuy2wLXVbLBaP5kjHokCRxapkQyzI4QEcwgYHRZBp+XEFTqXFuNVzMtjXLJgX4gAid24Hjwc4N3dtVSe+NNiwTrzH4WVUOlDobUqr1FuAgYllc8pmzoVrELRHSIW8ViPxNy4xwjBpyR55I6J220qQTZYR4guvUICJiSpr9gFFle4RcF/OMB7BRiX8sSfhpNSO3lvEZCQfLUVTKT78Ek1LRLhWN+yLyTnp8qWUZ46b6vxdRGXfHVqx3eI75YaLa4iNNiK4NOW7wPW6lhbSOF9/M9qw8e/aoB3d156qTzxp8pXx5BKAsYSTOIIiPkp68GmTq7sZtvyzBQaRLNxIZ+paozHWoLFeExIhRBrWitHCAHrCF7/thhD8JhYz84wg93QRV88wLuLY8zF8sQ36qF1J455bOlgnELfshKVxYOXKVuKx0jaj22sczTQqPqtV/XDgpswmGTWWMSDw3ssyUunLLrVPGjYRsH5ggHeHSWiV8kT33ycFSfMgkoOK8apCye0J6VW6GOYvffgU9RWsukEi2kUV2nl4dOYUzRik9p7bcA4ggdJ53LxKcEe17B1R8eqAd7dOepV8sTXf5lhejoL85hUdhDdknPtKHFhljOT+bdq0hxbm35p2nc8+Ja1Iw+tJykgp0EWuAAZYwMVwac5KzYMslhvgHdHRrxKnvhTYcfKsxTxtTETkjHO7rr3zjoV25lAQHrqpV7bTiy2aXMmUhTBnKS91jhtR3GEoF0oLnWhWNnYgtcc4N0FxlcgT7yz3TgNIKkscx9jtV1ZKpWW+Ub1tc1eOv5ucdgpx+FJy9pgbLE7xDyXb/f+hLHVGeitHOi6A7ybo3sF8sS7w7cgdk0nJaOn3hLj3uyD0Zp5pazFIUXUpuTTU18d1EPkDoX8SkmWTnVIozEdbTcZjoqxhNHf1JrSS/AcvHjZ/SMHhL/7i5z+POsTUh/8BvNfYMTA8n+yU/MlTZxSJDRStqvEuLQKWwDctMTQogUDyQRoTQG5Kc6oQRE1yV1jCA7ri7jdZyK0sYTRjCR0Hnnd+y7nHxNgTULqw+8wj0mQKxpYvhjm9uSUxg+TTy7s2GtLUGcywhXSKZN275GsqlclX90J6bRI1aouxmgL7Q0Nen5ziM80SqMIo8cSOo+8XplT/5DHNWsSUr/6lLN/QQ3rDyzLruEW5enpf7KqZoShEduuSFOV7DLX7Ye+GmXb6/hnNNqKsVXuMDFpb9Y9eH3C6NGEzuOuI3gpMH/I6e+zDiH1fXi15t3vA1czsLws0TGEtmPEJdiiFPwlwKbgLHAFk4P6ZyPdymYYHGE0dutsChQBl2JcBFlrEkY/N5bQeXQ18gjunuMfMfsBlxJSx3niO485fwO4fGD5T/+3fPQqkneWVdwnw/3bMPkW9Wbqg+iC765Zk+xcT98ibKZc2EdgHcLoF8cSOo/Oc8fS+OyEULF4g4sJqXVcmfMfsc7A8v1/yfGXmL9I6Fn5pRwZhsPv0TxFNlAfZCvG+Oohi82UC5f/2IsJo0cTOm9YrDoKhFPEUr/LBYTUNht9zelHXDqwfPCIw4owp3mOcIQcLttWXFe3VZ/j5H3cIc0G6oPbCR+6Y2xF2EC5cGUm6wKC5tGEzhsWqw5hNidUiKX5gFWE1GXh4/Qplw4sVzOmx9QxU78g3EF6wnZlEN4FzJ1QPSLEZz1KfXC7vd8ssGdIbNUYpVx4UapyFUHzJoTOo1McSkeNn1M5MDQfs4qQuhhX5vQZFw8suwWTcyYTgioISk2YdmkhehG4PkE7w51inyAGGaU+uCXADabGzJR1fn3lwkty0asIo8cROm9Vy1g0yDxxtPvHDAmpu+PKnM8Ix1wwsGw91YJqhteaWgjYBmmQiebmSpwKKzE19hx7jkzSWOm66oPbzZ8Yj6kxVSpYjVAuvLzYMCRo3oTQecOOjjgi3NQ4l9K5/hOGhNTdcWVOTrlgYNkEXINbpCkBRyqhp+LdRB3g0OU6rMfW2HPCFFMV9nSp+uB2woepdbLBuJQyaw/ZFysXrlXwHxI0b0LovEkiOpXGA1Ijagf+KUNC6rKNa9bQnLFqYNkEnMc1uJrg2u64ELPBHpkgWbmwKpJoDhMwNbbGzAp7Yg31wS2T5rGtzit59PrKhesWG550CZpHEzpv2NGRaxlNjbMqpmEIzygJqQfjypycs2pg2cS2RY9r8HUqkqdEgKTWtWTKoRvOBPDYBltja2SO0RGjy9UHtxwRjA11ujbKF+ti5cIR9eCnxUg6owidtyoU5tK4NLji5Q3HCtiyF2IqLGYsHViOXTXOYxucDqG0HyttqYAKqYo3KTY1ekyDXRAm2AWh9JmsVh/ccg9WJ2E8YjG201sPq5ULxxX8n3XLXuMInbft2mk80rRGjCGctJ8/GFdmEQ9Ug4FlE1ll1Y7jtiraqm5Fe04VV8lvSVBL8hiPrfFVd8+7QH3Qbu2ipTVi8cvSGivc9cj8yvH11YMHdNSERtuOslM97feYFOPKzGcsI4zW0YGAbTAOaxCnxdfiYUmVWslxiIblCeAYr9VYR1gM7GmoPrilunSxxeT3DN/2eBQ9H11+nk1adn6VK71+5+Jfct4/el10/7KBZfNryUunWSCPxPECk1rdOv1WVSrQmpC+Tl46YD3ikQYcpunSQgzVB2VHFhxHVGKDgMEY5GLlQnP7FMDzw7IacAWnO6sBr12u+XanW2AO0wQ8pknnFhsL7KYIqhkEPmEXFkwaN5KQphbkUmG72wgw7WSm9RiL9QT925hkjiVIIhphFS9HKI6/8QAjlpXqg9W2C0apyaVDwKQwrwLY3j6ADR13ZyUNByQXHQu6RY09Hu6zMqXRaNZGS/KEJs0cJEe9VH1QdvBSJv9h09eiRmy0V2uJcqHcShcdvbSNg5fxkenkVprXM9rDVnX24/y9MVtncvbKY706anNl3ASll9a43UiacVquXGhvq4s2FP62NGKfQLIQYu9q1WmdMfmUrDGt8eDS0cXozH/fjmUH6Jruvm50hBDSaEU/2Ru2LEN/dl006TSc/g7tfJERxGMsgDUEr104pfWH9lQaN+M4KWQjwZbVc2rZVNHsyHal23wZtIs2JJqtIc/WLXXRFCpJkfE9jvWlfFbsNQ9pP5ZBS0zKh4R0aMFj1IjTcTnvi0Zz2rt7NdvQb2mgbju1plsH8MmbnEk7KbK0b+wC2iy3aX3szW8xeZvDwET6hWZYwqTXSSG+wMETKum0Dq/q+x62gt2ua2ppAo309TRk9TPazfV3qL9H8z7uhGqGqxNVg/FKx0HBl9OVUORn8Q8Jx9gFttGQUDr3tzcXX9xGgN0EpzN9mdZ3GATtPhL+CjxFDmkeEU6x56kqZRusLzALXVqkCN7zMEcqwjmywDQ6OhyUe0Xao1Qpyncrg6wKp9XfWDsaZplElvQ/b3sdweeghorwBDlHzgk1JmMc/wiERICVy2VJFdMjFuLQSp3S0W3+sngt2njwNgLssFGVQdJ0tu0KH4ky1LW4yrbkuaA6Iy9oz/qEMMXMMDWyIHhsAyFZc2peV9hc7kiKvfULxCl9iddfRK1f8kk9qvbdOoBtOg7ZkOZ5MsGrSHsokgLXUp9y88smniwWyuFSIRVmjplga3yD8Uij5QS1ZiM4U3Qw5QlSm2bXjFe6jzzBFtpg+/YBbLAWG7OPynNjlCw65fukGNdkJRf7yM1fOxVzbxOJVocFoYIaGwH22mIQkrvu1E2nGuebxIgW9U9TSiukPGU+Lt++c3DJPKhyhEEbXCQLUpae2exiKy6tMPe9mDRBFCEMTWrtwxN8qvuGnt6MoihKWS5NSyBhbH8StXoAz8PLOrRgLtOT/+4vcu+7vDLnqNvztOq7fmd8sMmY9Xzn1zj8Dq8+XVdu2Nv0IIySgEdQo3xVHps3Q5i3fLFsV4aiqzAiBhbgMDEd1uh8qZZ+lwhjkgokkOIv4xNJmyncdfUUzgB4oFMBtiu71Xumpz/P+cfUP+SlwFExwWW62r7b+LSPxqxn/gvMZ5z9C16t15UbNlq+jbGJtco7p8wbYlL4alSyfWdeuu0j7JA3JFNuVAwtst7F7FhWBbPFNKIUORndWtLraFLmMu7KFVDDOzqkeaiN33YAW/r76wR4XDN/yN1z7hejPau06EddkS/6XThfcz1fI/4K736fO48vlxt2PXJYFaeUkFS8U15XE3428xdtn2kc8GQlf1vkIaNRRnOMvLTWrZbElEHeLWi1o0dlKPAh1MVgbbVquPJ5+Cr8LU5/H/+I2QlHIU2ClXM9G8v7Rr7oc/hozfUUgsPnb3D+I+7WF8kNO92GY0SNvuxiE+2Bt8prVJTkzE64sfOstxuwfxUUoyk8VjcTlsqe2qITSFoSj6Epd4KsT6BZOWmtgE3hBfir8IzZDwgV4ZTZvD8VvPHERo8v+vL1DASHTz/i9OlKueHDjK5Rnx/JB1Vb1ioXdBra16dmt7dgik10yA/FwJSVY6XjA3oy4SqM2frqDPPSRMex9qs3XQtoWxMj7/Er8GWYsXgjaVz4OYumP2+9kbxvny/6kvWsEBw+fcb5bInc8APdhpOSs01tEqIkoiZjbAqKMruLbJYddHuHFRIyJcbdEdbl2sVLaySygunutBg96Y2/JjKRCdyHV+AEFtTvIpbKIXOamknYSiB6KV/0JetZITgcjjk5ZdaskBtWO86UF0ap6ozGXJk2WNiRUlCPFir66lzdm/SLSuK7EUdPz8f1z29Skq6F1fXg8+5UVR6bszncP4Tn4KUkkdJ8UFCY1zR1i8RmL/qQL3rlei4THG7OODlnKko4oI01kd3CaM08Ia18kC3GNoVaO9iDh+hWxSyTXFABXoau7Q6q9OxYg/OVEMw6jdbtSrJ9cBcewGmaZmg+bvkUnUUaGr+ZfnMH45Ivevl61hMcXsxYLFTu1hTm2zViCp7u0o5l+2PSUh9bDj6FgYypufBDhqK2+oXkiuHFHR3zfj+9PtA8oR0xnqX8qn+sx3bFODSbbF0X8EUvWQ8jBIcjo5bRmLOljDNtcqNtOe756h3l0VhKa9hDd2l1eqmsnh0MNMT/Cqnx6BInumhLT8luljzQ53RiJeA/0dxe5NK0o2fA1+GLXr6eNQWHNUOJssQaTRlGpLHKL9fD+IrQzTOMZS9fNQD4AnRNVxvTdjC+fJdcDDWQcyB00B0t9BDwTxXgaAfzDZ/DBXzRnfWMFRwuNqocOmX6OKNkY63h5n/fFcB28McVHqnXZVI27K0i4rDLNE9lDKV/rT+udVbD8dFFu2GGZ8mOt0kAXcoX3ZkIWVtw+MNf5NjR2FbivROHmhV1/pj2egv/fMGIOWTIWrV3Av8N9imV9IWml36H6cUjqEWNv9aNc+veb2sH46PRaHSuMBxvtW+twxctq0z+QsHhux8Q7rCY4Ct8lqsx7c6Sy0dl5T89rIeEuZKoVctIk1hNpfavER6yyH1Vvm3MbsUHy4ab4hWr/OZPcsRBphnaV65/ZcdYPNNwsjN/djlf9NqCw9U5ExCPcdhKxUgLSmfROpLp4WSUr8ojdwbncbvCf+a/YzRaEc6QOvXcGO256TXc5Lab9POvB+AWY7PigWYjzhifbovuunzRawsO24ZqQQAqguBtmpmPB7ysXJfyDDaV/aPGillgz1MdQg4u5MYaEtBNNHFjkRlSpd65lp4hd2AVPTfbV7FGpyIOfmNc/XVsPfg7vzaS/3nkvLL593ANLvMuRMGpQIhiF7kUEW9QDpAUbTWYBcbp4WpacHHY1aacqQyjGZS9HI3yCBT9kUZJhVOD+zUDvEH9ddR11fzPcTDQ5TlgB0KwqdXSavk9BC0pKp0WmcuowSw07VXmXC5guzSa4p0UvRw2lbDiYUx0ExJJRzWzi6Gm8cnEkfXXsdcG/M/jAJa0+bmCgdmQ9CYlNlSYZOKixmRsgiFxkrmW4l3KdFKv1DM8tk6WxPYJZhUUzcd8Kdtgrw/gkfXXDT7+avmfVak32qhtkg6NVdUS5wgkru1YzIkSduTW1FDwVWV3JQVJVuieTc0y4iDpFwc7/BvSalvKdQM8sv662cevz/+8sQVnjVAT0W2wLllw1JiMhJRxgDjCjLQsOzSFSgZqx7lAW1JW0e03yAD3asC+GD3NbQhbe+mN5GXH1F83KDOM4n/e5JIuH4NpdQARrFPBVptUNcjj4cVMcFSRTE2NpR1LEYbYMmfWpXgP9KejaPsLUhuvLCsVXznAG9dfx9SR1ud/3hZdCLHb1GMdPqRJgqDmm76mHbvOXDtiO2QPUcKo/TWkQ0i2JFXpBoo7vij1i1Lp3ADAo+qvG3V0rM//vFnnTE4hxd5Ka/Cor5YEdsLVJyKtDgVoHgtW11pWSjolPNMnrlrVj9Fv2Qn60twMwKPqr+N/wvr8z5tZcDsDrv06tkqyzESM85Ycv6XBWA2birlNCXrI6VbD2lx2L0vQO0QVTVVLH4SE67fgsfVXv8n7sz7/85Z7cMtbE6f088wSaR4kCkCm10s6pKbJhfqiUNGLq+0gLWC6eUAZFPnLjwqtKd8EwGvWX59t7iPW4X/eAN1svgRVSY990YZg06BD1ohLMtyFTI4pKTJsS9xREq9EOaPWiO2gpms7397x6nQJkbh+Fz2q/rqRROX6/M8bJrqlVW4l6JEptKeUFuMYUbtCQ7CIttpGc6MY93x1r1vgAnRXvY5cvwWPqb9uWQm+lP95QxdNMeWhOq1x0Db55C7GcUv2ZUuN6n8iKzsvOxibC//Yfs9Na8r2Rlz02vXXDT57FP/zJi66/EJSmsJKa8QxnoqW3VLQ+jZVUtJwJ8PNX1NQCwfNgdhhHD9on7PdRdrdGPF28rJr1F+3LBdeyv+8yYfLoMYet1vX4upNAjVvwOUWnlNXJXlkzk5Il6kqeoiL0C07qno+/CYBXq/+utlnsz7/Mzvy0tmI4zm4ag23PRN3t/CWryoUVJGm+5+K8RJ0V8Hc88/XHUX/HfiAq7t+BH+x6v8t438enWmdJwFA6ZINriLGKv/95f8lT9/FnyA1NMVEvQyaXuu+gz36f/DD73E4pwqpLcvm/o0Vle78n//+L/NPvoefp1pTJye6e4A/D082FERa5/opeH9zpvh13cNm19/4v/LDe5xMWTi8I0Ta0qKlK27AS/v3/r+/x/2GO9K2c7kVMonDpq7//jc5PKCxeNPpFVzaRr01wF8C4Pu76hXuX18H4LduTr79guuFD3n5BHfI+ZRFhY8w29TYhbbLi/bvBdqKE4fUgg1pBKnV3FEaCWOWyA+m3WpORZr/j+9TKJtW8yBTF2/ZEODI9/QavHkVdGFp/Pjn4Q+u5hXapsP5sOH+OXXA1LiKuqJxiMNbhTkbdJTCy4llEt6NnqRT4dhg1V3nbdrm6dYMecA1yTOL4PWTE9L5VzPFlLBCvlG58AhehnN4uHsAYinyJ+AZ/NkVvELbfOBUuOO5syBIEtiqHU1k9XeISX5bsimrkUUhnGDxourN8SgUsCZVtKyGbyGzHXdjOhsAvOAswSRyIBddRdEZWP6GZhNK/yjwew9ehBo+3jEADu7Ay2n8mDc+TS7awUHg0OMzR0LABhqLD4hJEh/BEGyBdGlSJoXYXtr+3HS4ijzVpgi0paWXtdruGTknXBz+11qT1Q2inxaTzQCO46P3lfLpyS4fou2PH/PupwZgCxNhGlj4IvUuWEsTkqMWm6i4xCSMc9N1RDQoCVcuGItJ/MRWefais+3synowi/dESgJjkilnWnBTGvRWmaw8oR15257t7CHmCf8HOn7cwI8+NQBXMBEmAa8PMRemrNCEhLGEhDQKcGZWS319BX9PFBEwGTbRBhLbDcaV3drFcDqk5kCTd2JF1Wp0HraqBx8U0wwBTnbpCadwBA/gTH/CDrcCs93LV8E0YlmmcyQRQnjBa8JESmGUfIjK/7fkaDJpmD2QptFNVJU1bbtIAjjWQizepOKptRjbzR9Kag6xZmMLLjHOtcLT3Tx9o/0EcTT1XN3E45u24AiwEypDJXihKjQxjLprEwcmRKclaDNZCVqr/V8mYWyFADbusiY5hvgFoU2vio49RgJLn5OsReRFN6tabeetiiy0V7KFHT3HyZLx491u95sn4K1QQSPKM9hNT0wMVvAWbzDSVdrKw4zRjZMyJIHkfq1VAVCDl/bUhNKlGq0zGr05+YAceXVPCttVk0oqjVwMPt+BBefx4yPtGVkUsqY3CHDPiCM5ngupUwCdbkpd8kbPrCWHhkmtIKLEetF2499eS1jZlIPGYnlcPXeM2KD9vLS0bW3ktYNqUllpKLn5ZrsxlIzxvDu5eHxzGLctkZLEY4PgSOg2IUVVcUONzUDBEpRaMoXNmUc0tFZrTZquiLyKxrSm3DvIW9Fil+AkhXu5PhEPx9mUNwqypDvZWdKlhIJQY7vn2OsnmBeOWnYZ0m1iwbbw1U60by5om47iHRV6fOgzjMf/DAZrlP40Z7syxpLK0lJ0gqaAK1c2KQKu7tabTXkLFz0sCftuwX++MyNeNn68k5Buq23YQhUh0SNTJa1ioQ0p4nUG2y0XilF1JqODqdImloPS4Bp111DEWT0jJjVv95uX9BBV7eB3bUWcu0acSVM23YZdd8R8UbQUxJ9wdu3oMuhdt929ME+mh6JXJ8di2RxbTi6TbrDquqV4aUKR2iwT6aZbyOwEXN3DUsWr8Hn4EhwNyHuXHh7/pdaUjtR7vnDh/d8c9xD/s5f501eQ1+CuDiCvGhk1AN/4Tf74RfxPwD3toLarR0zNtsnPzmS64KIRk861dMWCU8ArasG9T9H0ZBpsDGnjtAOM2+/LuIb2iIUGXNgl5ZmKD/Tw8TlaAuihaFP5yrw18v4x1898zIdP+DDAX1bM3GAMvPgRP/cJn3zCW013nrhHkrITyvYuwOUkcHuKlRSW5C6rzIdY4ppnF7J8aAJbQepgbJYBjCY9usGXDKQxq7RZfh9eg5d1UHMVATRaD/4BHK93/1iAgYZ/+jqPn8Dn4UExmWrpa3+ZOK6MvM3bjwfzxNWA2dhs8+51XHSPJiaAhGSpWevEs5xHLXcEGFXYiCONySH3fPWq93JIsBiSWvWyc3CAN+EcXoT7rCSANloPPoa31rt/5PUA/gp8Q/jDD3hyrjzlR8VkanfOvB1XPubt17vzxAfdSVbD1pzAnfgyF3ycadOTOTXhpEUoLC1HZyNGW3dtmjeXgr2r56JNmRwdNNWaQVBddd6rh4MhviEB9EFRD/7RGvePvCbwAL4Mx/D6M541hHO4D3e7g6PafdcZVw689z7NGTwo5om7A8sPhccT6qKcl9NJl9aM/9kX+e59Hh1yPqGuCCZxuITcsmNaJ5F7d0q6J3H48TO1/+M57085q2icdu2U+W36Ldllz9Agiv4YGljoEN908EzvDOrBF98/vtJwCC/BF2AG75xxEmjmMIcjxbjoaxqOK3/4hPOZzhMPBpYPG44CM0dTVm1LjLtUWWVz1Bcf8tEx0zs8O2A2YVHRxKYOiy/aOVoAaMu0i7ubu43njjmd4ibMHU1sIDHaQNKrZND/FZYdk54oCXetjq7E7IVl9eAL7t+oHnwXXtLx44czzoRFHBztYVwtH1d+NOMkupZ5MTM+gUmq90X+Bh9zjRlmaQ+m7YMqUL/veemcecAtOJ0yq1JnVlN27di2E0+Klp1tAJ4KRw1eMI7aJjsO3R8kPSI3fUFXnIOfdQe86sIIVtWDL7h//Ok6vj8vwDk08NEcI8zz7OhBy+WwalzZeZ4+0XniRfst9pAJqQHDGLzVQ2pheZnnv1OWhwO43/AgcvAEXEVVpa4db9sGvNK8wjaENHkfFQ4Ci5i7dqnQlPoLQrHXZDvO3BIXZbJOBrOaEbML6sFL798I4FhKihjHMsPjBUZYCMFr6nvaArxqXPn4lCa+cHfSa2cP27g3Z3ziYTRrcbQNGLQmGF3F3cBdzzzX7AILx0IB9rbwn9kx2G1FW3Inic+ZLIsVvKR8Zwfj0l1fkqo8LWY1M3IX14OX3r9RKTIO+d9XzAI8qRPGPn/4NC2n6o4rN8XJ82TOIvuVA8zLKUHRFgBCetlDZlqR1gLKjS39xoE7Bt8UvA6BxuEDjU3tFsEijgA+615tmZkXKqiEENrh41iLDDZNq4pKTWR3LZfnos81LOuNa15cD956vLMsJd1rqYp51gDUQqMYm2XsxnUhD2jg1DM7SeuJxxgrmpfISSXVIJIS5qJJSvJPEQ49DQTVIbYWJ9QWa/E2+c/oPK1drmC7WSfJRNKBO5Yjvcp7Gc3dmmI/Xh1kDTEuiSnWqQf37h+fTMhGnDf6dsS8SQfQWlqqwXXGlc/PEZ/SC5mtzIV0nAshlQdM/LvUtYutrEZ/Y+EAFtq1k28zQhOwLr1AIeANzhF8t9qzTdZf2qRKO6MWE9ohBYwibbOmrFtNmg3mcS+tB28xv2uKd/agYCvOP+GkSc+0lr7RXzyufL7QbkUpjLjEWFLqOIkAGu2B0tNlO9Eau2W1qcOUvVRgKzypKIQZ5KI3q0MLzqTNRYqiZOqmtqloIRlmkBHVpHmRYV6/HixbO6UC47KOFJnoMrVyr7wYz+SlW6GUaghYbY1I6kkxA2W1fSJokUdSh2LQ1GAimRGm0MT+uu57H5l7QgOWxERpO9moLRPgTtquWCfFlGlIjQaRly9odmzMOWY+IBO5tB4sW/0+VWGUh32qYk79EidWKrjWuiLpiVNGFWFRJVktyeXWmbgBBzVl8anPuXyNJlBJOlKLTgAbi/EYHVHxWiDaVR06GnHQNpJcWcK2jJtiCfG2sEHLzuI66sGrMK47nPIInPnu799935aOK2cvmvubrE38ZzZjrELCmXM2hM7UcpXD2oC3+ECVp7xtIuxptJ0jUr3sBmBS47TVxlvJ1Sqb/E0uLdvLj0lLr29ypdd/eMX3f6lrxGlKwKQxEGvw0qHbkbwrF3uHKwVENbIV2wZ13kNEF6zD+x24aLNMfDTCbDPnEikZFyTNttxWBXDaBuM8KtI2rmaMdUY7cXcUPstqTGvBGSrFWIpNMfbdea990bvAOC1YX0qbc6smDS1mPxSJoW4fwEXvjMmhlijDRq6qale6aJEuFGoppYDoBELQzLBuh/mZNx7jkinv0EtnUp50lO9hbNK57lZaMAWuWR5Yo9/kYwcYI0t4gWM47Umnl3YmpeBPqSyNp3K7s2DSAS/39KRuEN2bS4xvowV3dFRMx/VFcp2Yp8w2nTO9hCXtHG1kF1L4KlrJr2wKfyq77R7MKpFKzWlY9UkhYxyHWW6nBWPaudvEAl3CGcNpSXPZ6R9BbBtIl6cHL3gIBi+42CYXqCx1gfGWe7Ap0h3luyXdt1MKy4YUT9xSF01G16YEdWsouW9mgDHd3veyA97H+Ya47ZmEbqMY72oPztCGvK0onL44AvgC49saZKkWRz4veWljE1FHjbRJaWv6ZKKtl875h4CziFCZhG5rx7tefsl0aRT1bMHZjm8dwL/6u7wCRysaQblQoG5yAQN5zpatMNY/+yf8z+GLcH/Qn0iX2W2oEfXP4GvwQHuIL9AYGnaO3zqAX6946nkgqZNnUhx43DIdQtMFeOPrgy/y3Yd85HlJWwjLFkU3kFwq28xPnuPhMWeS+tDLV9Otllq7pQCf3uXJDN9wFDiUTgefHaiYbdfi3b3u8+iY6TnzhgehI1LTe8lcd7s1wJSzKbahCRxKKztTLXstGAiu3a6rPuQs5pk9TWAan5f0BZmGf7Ylxzzk/A7PAs4QPPPAHeFQ2hbFHszlgZuKZsJcUmbDC40sEU403cEjczstOEypa+YxevL4QBC8oRYqWdK6b7sK25tfE+oDZgtOQ2Jg8T41HGcBE6fTWHn4JtHcu9S7uYgU5KSCkl/mcnq+5/YBXOEr6lCUCwOTOM1taOI8mSxx1NsCXBEmLKbMAg5MkwbLmpBaFOPrNSlO2HnLiEqW3tHEwd8AeiQLmn+2gxjC3k6AxREqvKcJbTEzlpLiw4rNZK6oJdidbMMGX9FULKr0AkW+2qDEPBNNm5QAt2Ik2nftNWHetubosHLo2nG4vQA7GkcVCgVCgaDixHqo9UUn1A6OshapaNR/LPRYFV8siT1cCtJE0k/3WtaNSuUZYKPnsVIW0xXWnMUxq5+En4Kvw/MqQmVXnAXj9Z+9zM98zM/Agy7F/qqj2Nh67b8HjFnPP3iBn/tkpdzwEJX/whIcQUXOaikeliCRGUk7tiwF0rItwMEhjkZ309hikFoRAmLTpEXWuHS6y+am/KB/fM50aLEhGnSMwkpxzOov4H0AvgovwJ1iGzDLtJn/9BU+fAINfwUe6FHSLhu83viV/+/HrOePX+STT2B9uWGbrMHHLldRBlhS/CJQmcRxJFqZica01XixAZsYiH1uolZxLrR/SgxVIJjkpQP4PE9sE59LKLr7kltSBogS5tyszzH8Fvw8/AS8rNOg0xUS9fIaHwb+6et8Q/gyvKRjf5OusOzGx8evA/BP4IP11uN/grca5O0lcsPLJ5YjwI4QkJBOHa0WdMZYGxPbh2W2nR9v3WxEWqgp/G3+6VZbRLSAAZ3BhdhAaUL33VUSw9yjEsvbaQ9u4A/gGXwZXoEHOuU1GSj2chf+Mo+f8IcfcAxfIKVmyunRbYQVnoevwgfw3TXXcw++xNuP4fhyueEUNttEduRVaDttddoP0eSxLe2LENk6itYxlrxBNBYrNNKSQmeaLcm9c8UsaB5WyO6675yyQIAWSDpBVoA/gxmcwEvwoDv0m58UE7gHn+fJOa8/Ywan8EKRfjsopF83eCglX/Sfr7OeaRoQfvt1CGvIDccH5BCvw1sWIzRGC/66t0VTcLZQZtm6PlAasbOJ9iwWtUo7biktTSIPxnR24jxP1ZKaqq+2RcXM9OrBAm/AAs7hDJ5bNmGb+KIfwCs8a3jnjBrOFeMjHSCdbKr+2uOLfnOd9eiA8Hvvwwq54VbP2OqwkB48Ytc4YEOiH2vTXqodabfWEOzso4qxdbqD5L6tbtNPECqbhnA708DZH4QOJUXqScmUlks7Ot6FBuZw3n2mEbaUX7kDzxHOOQk8nKWMzAzu6ZZ8sOFw4RK+6PcuXo9tB4SbMz58ApfKDXf3szjNIIbGpD5TKTRxGkEMLjLl+K3wlWXBsCUxIDU+jbOiysESqAy1MGUJpXgwbTWzNOVEziIXZrJ+VIztl1PUBxTSo0dwn2bOmfDRPD3TRTGlfbCJvO9KvuhL1hMHhB9wPuPRLGHcdOWG2xc0U+5bQtAJT0nRTewXL1pgk2+rZAdeWmz3jxAqfNQQdzTlbF8uJ5ecEIWvTkevAHpwz7w78QujlD/Lr491bD8/1vhM2yrUQRrWXNQY4fGilfctMWYjL72UL/qS9eiA8EmN88nbNdour+PBbbAjOjIa4iBhfFg6rxeKdEGcL6p3EWR1Qq2Qkhs2DrnkRnmN9tG2EAqmgPw6hoL7Oza7B+3SCrR9tRftko+Lsf2F/mkTndN2LmzuMcKTuj/mX2+4Va3ki16+nnJY+S7MefpkidxwnV+4wkXH8TKnX0tsYzYp29DOOoSW1nf7nTh2akYiWmcJOuTidSaqESrTYpwjJJNVGQr+rLI7WsqerHW6Kp/oM2pKuV7T1QY9gjqlZp41/WfKpl56FV/0kvXQFRyeQ83xaTu5E8p5dNP3dUF34ihyI3GSpeCsywSh22ZJdWto9winhqifb7VRvgktxp13vyjrS0EjvrRfZ62uyqddSWaWYlwTPAtJZ2oZ3j/Sgi/mi+6vpzesfAcWNA0n8xVyw90GVFGuZjTXEQy+6GfLGLMLL523f5E0OmxVjDoOuRiH91RKU+vtoCtH7TgmvBLvtFXWLW15H9GTdVw8ow4IlRLeHECN9ym1e9K0I+Cbnhgv4Yu+aD2HaQJ80XDqOzSGAV4+4yCqBxrsJAX6ZTIoX36QnvzhhzzMfFW2dZVLOJfo0zbce5OvwXMFaZ81mOnlTVXpDZsQNuoYWveketKb5+6JOOsgX+NTm7H49fUTlx+WLuWL7qxnOFh4BxpmJx0p2gDzA/BUARuS6phR+pUsY7MMboAHx5xNsSVfVZcYSwqCKrqon7zM+8ecCkeS4nm3rINuaWvVNnMRI1IRpxTqx8PZUZ0Br/UEduo3B3hNvmgZfs9gQPj8vIOxd2kndir3awvJ6BLvoUuOfFWNYB0LR1OQJoUySKb9IlOBx74q1+ADC2G6rOdmFdJcD8BkfualA+BdjOOzP9uUhGUEX/TwhZsUduwRr8wNuXKurCixLBgpQI0mDbJr9dIqUuV+92ngkJZ7xduCk2yZKbfWrH1VBiTg9VdzsgRjW3CVXCvAwDd+c1z9dWw9+B+8MJL/eY15ZQ/HqvTwVdsZn5WQsgRRnMaWaecu3jFvMBEmgg+FJFZsnSl0zjB9OqPYaBD7qmoVyImFvzi41usesV0julaAR9dfR15Xzv9sEruRDyk1nb+QaLU67T885GTls6YgcY+UiMa25M/pwGrbCfzkvR3e0jjtuaFtnwuagHTSb5y7boBH119HXhvwP487jJLsLJ4XnUkHX5sLbS61dpiAXRoZSCrFJ+EjpeU3puVfitngYNo6PJrAigKktmwjyQdZpfq30mmtulaAx9Zfx15Xzv+cyeuiBFUs9zq8Kq+XB9a4PVvph3GV4E3y8HENJrN55H1X2p8VyqSKwVusJDKzXOZzplWdzBUFK9e+B4+uv468xvI/b5xtSAkBHQaPvtqWzllVvEOxPbuiE6+j2pvjcKsbvI7txnRErgfH7LdXqjq0IokKzga14GzQ23SSbCQvO6r+Or7SMIr/efOkkqSdMnj9mBx2DRsiY29Uj6+qK9ZrssCKaptR6HKURdwUYeUWA2kPzVKQO8ku2nU3Anhs/XWkBx3F/7wJtCTTTIKftthue1ty9xvNYLY/zo5KSbIuKbXpbEdSyeRyYdAIwKY2neyoc3+k1XUaufYga3T9daMUx/r8z1s10ITknIO0kuoMt+TB8jK0lpayqqjsJ2qtXAYwBU932zinimgmd6mTRDnQfr88q36NAI+tv24E8Pr8zxtasBqx0+xHH9HhlrwsxxNUfKOHQaZBITNf0uccj8GXiVmXAuPEAKSdN/4GLHhs/XWj92dN/uetNuBMnVR+XWDc25JLjo5Mg5IZIq226tmCsip2zZliL213YrTlL2hcFjpCduyim3M7/eB16q/blQsv5X/esDRbtJeabLIosWy3ycavwLhtxdWzbMmHiBTiVjJo6lCLjXZsi7p9PEPnsq6X6wd4bP11i0rD5fzPm/0A6brrIsllenZs0lCJlU4abakR59enZKrKe3BZihbTxlyZ2zl1+g0wvgmA166/bhwDrcn/7Ddz0eWZuJvfSESug6NzZsox3Z04FIxz0mUjMwVOOVTq1CQ0AhdbBGVdjG/CgsfUX7esJl3K/7ytWHRv683praW/8iDOCqWLLhpljDY1ZpzK75QiaZoOTpLKl60auHS/97oBXrv+umU9+FL+5+NtLFgjqVLCdbmj7pY5zPCPLOHNCwXGOcLquOhi8CmCWvbcuO73XmMUPab+ug3A6/A/78Bwe0bcS2+tgHn4J5pyS2WbOck0F51Vq3LcjhLvZ67p1ABbaL2H67bg78BfjKi/jr3+T/ABV3ilLmNXTI2SpvxWBtt6/Z//D0z/FXaGbSBgylzlsEGp+5//xrd4/ae4d8DUUjlslfIYS3t06HZpvfQtvv0N7AHWqtjP2pW08QD/FLy//da38vo8PNlKHf5y37Dxdfe/oj4kVIgFq3koLReSR76W/bx//n9k8jonZxzWTANVwEniDsg87sOSd/z7//PvMp3jQiptGVWFX2caezzAXwfgtzYUvbr0iozs32c3Uge7varH+CNE6cvEYmzbPZ9hMaYDdjK4V2iecf6EcEbdUDVUARda2KzO/JtCuDbNQB/iTeL0EG1JSO1jbXS+nLxtPMDPw1fh5+EPrgSEKE/8Gry5A73ui87AmxwdatyMEBCPNOCSKUeRZ2P6Myb5MRvgCHmA9ywsMifU+AYXcB6Xa5GibUC5TSyerxyh0j6QgLVpdyhfArRTTLqQjwe4HOD9s92D4Ap54odXAPBWLAwB02igG5Kkc+piN4lvODIFGAZgT+EO4Si1s7fjSR7vcQETUkRm9O+MXyo9OYhfe4xt9STQ2pcZRLayCV90b4D3jR0DYAfyxJ+eywg2IL7NTMXna7S/RpQ63JhWEM8U41ZyQGjwsVS0QBrEKLu8xwZsbi4wLcCT+OGidPIOCe1PiSc9Qt+go+vYqB7cG+B9d8cAD+WJPz0Am2gxXgU9IneOqDpAAXOsOltVuMzpdakJXrdPCzXiNVUpCeOos5cxnpQT39G+XVLhs1osQVvJKPZyNq8HDwd4d7pNDuWJPxVX7MSzqUDU6gfadKiNlUFTzLeFHHDlzO4kpa7aiKhBPGKwOqxsBAmYkOIpipyXcQSPlRTf+Tii0U3EJGaZsDER2qoB3h2hu0qe+NNwUooYU8y5mILbJe6OuX+2FTKy7bieTDAemaQyQ0CPthljSWO+xmFDIYiESjM5xKd6Ik5lvLq5GrQ3aCMLvmCA9wowLuWJb9xF59hVVP6O0CrBi3ZjZSNOvRy+I6klNVRJYRBaEzdN+imiUXQ8iVF8fsp+W4JXw7WISW7fDh7lptWkCwZ4d7QTXyBPfJMYK7SijjFppGnlIVJBJBYj7eUwtiP1IBXGI1XCsjNpbjENVpSAJ2hq2LTywEly3hUYazt31J8w2+aiLx3g3fohXixPfOMYm6zCGs9LVo9MoW3MCJE7R5u/WsOIjrqBoHUO0bJE9vxBpbhsd3+Nb4/vtPCZ4oZYCitNeYuC/8UDvDvy0qvkiW/cgqNqRyzqSZa/s0mqNGjtKOoTm14zZpUauiQgVfqtQiZjq7Q27JNaSK5ExRcrGCXO1FJYh6jR6CFqK7bZdQZ4t8g0rSlPfP1RdBtqaa9diqtzJkQ9duSryi2brQXbxDwbRUpFMBHjRj8+Nt7GDKgvph9okW7LX47gu0SpGnnFQ1S1lYldOsC7hYteR574ZuKs7Ei1lBsfdz7IZoxzzCVmmVqaSySzQbBVAWDek+N4jh9E/4VqZrJjPwiv9BC1XcvOWgO8275CVyBPvAtTVlDJfZkaZGU7NpqBogAj/xEHkeAuJihWYCxGN6e8+9JtSegFXF1TrhhLGP1fak3pebgPz192/8gB4d/6WT7+GdYnpH7hH/DJzzFiYPn/vjW0SgNpTNuPIZoAEZv8tlGw4+RLxy+ZjnKa5NdFoC7UaW0aduoYse6+bXg1DLg6UfRYwmhGEjqPvF75U558SANrElK/+MdpXvmqBpaXOa/MTZaa1DOcSiLaw9j0NNNst3c+63c7EKTpkvKHzu6bPbP0RkuHAVcbRY8ijP46MIbQeeT1mhA+5PV/inyDdQipf8LTvMXbwvoDy7IruDNVZKTfV4CTSRUYdybUCnGU7KUTDxLgCknqUm5aAW6/1p6eMsOYsphLzsHrE0Y/P5bQedx1F/4yPHnMB3/IOoTU9+BL8PhtjuFKBpZXnYNJxTuv+2XqolKR2UQgHhS5novuxVySJhBNRF3SoKK1XZbbXjVwWNyOjlqWJjrWJIy+P5bQedyldNScP+HZ61xKSK3jyrz+NiHG1hcOLL/+P+PDF2gOkekKGiNWKgJ+8Z/x8Iv4DdQHzcpZyF4v19I27w9/yPGDFQvmEpKtqv/TLiWMfn4sofMm9eAH8Ao0zzh7h4sJqYtxZd5/D7hkYPneDzl5idlzNHcIB0jVlQ+8ULzw/nc5/ojzl2juE0apD7LRnJxe04dMz2iOCFNtGFpTuXA5AhcTRo8mdN4kz30nVjEC4YTZQy4gpC7GlTlrePKhGsKKgeXpCYeO0MAd/GH7yKQUlXPLOasOH3FnSphjHuDvEu4gB8g66oNbtr6eMbFIA4fIBJkgayoXriw2XEDQPJrQeROAlY6aeYOcMf+IVYTU3XFlZufMHinGywaW3YLpObVBAsbjF4QJMsVUSayjk4voPsHJOQfPWDhCgDnmDl6XIRerD24HsGtw86RMHOLvVSHrKBdeVE26gKB5NKHzaIwLOmrqBWJYZDLhASG16c0Tn+CdRhWDgWXnqRZUTnPIHuMJTfLVpkoYy5CzylHVTGZMTwkGAo2HBlkQplrJX6U+uF1wZz2uwS1SQ12IqWaPuO4baZaEFBdukksJmkcTOm+YJSvoqPFzxFA/YUhIvWxcmSdPWTWwbAKVp6rxTtPFUZfKIwpzm4IoMfaYQLWgmlG5FME2gdBgm+J7J+rtS/XBbaVLsR7bpPQnpMFlo2doWaVceHk9+MkyguZNCJ1He+kuHTWyQAzNM5YSUg/GlTk9ZunAsg1qELVOhUSAK0LABIJHLKbqaEbHZLL1VA3VgqoiOKXYiS+HRyaEKgsfIqX64HYWbLRXy/qWoylIV9gudL1OWBNgBgTNmxA6b4txDT4gi3Ri7xFSLxtXpmmYnzAcWDZgY8d503LFogz5sbonDgkKcxGsWsE1OI+rcQtlgBBCSOKD1mtqYpIU8cTvBmAT0yZe+zUzeY92fYjTtGipXLhuR0ePoHk0ofNWBX+lo8Z7pAZDk8mEw5L7dVyZZoE/pTewbI6SNbiAL5xeygW4xPRuLCGbhcO4RIeTMFYHEJkYyEO9HmJfXMDEj/LaH781wHHZEtqSQ/69UnGpzH7LKIAZEDSPJnTesJTUa+rwTepI9dLJEawYV+ZkRn9g+QirD8vF8Mq0jFQ29js6kCS3E1+jZIhgPNanHdHFqFvPJLHqFwQqbIA4jhDxcNsOCCQLDomaL/dr5lyJaJU6FxPFjO3JOh3kVMcROo8u+C+jo05GjMF3P3/FuDLn5x2M04xXULPwaS6hBYki+MrMdZJSgPHlcB7nCR5bJ9Kr5ACUn9jk5kivdd8tk95SOGrtqu9lr2IhK65ZtEl7ZKrp7DrqwZfRUSN1el7+7NJxZbywOC8neNKTch5vsTEMNsoCCqHBCqIPRjIPkm0BjvFODGtto99rCl+d3wmHkW0FPdpZtC7MMcVtGFQjJLX5bdQ2+x9ypdc313uj8xlsrfuLgWXz1cRhZvJYX0iNVBRcVcmCXZs6aEf3RQF2WI/TcCbKmGU3IOoDJGDdDub0+hYckt6PlGu2BcxmhbTdj/klhccLGJMcqRjMJP1jW2ETqLSWJ/29MAoORluJ+6LPffBZbi5gqi5h6catQpmOT7/OFf5UorRpLzCqcMltBLhwd1are3kztrSzXO0LUbXRQcdLh/RdSZ+swRm819REDrtqzC4es6Gw4JCKlSnjYVpo0xeq33PrADbFLL3RuCmObVmPN+24kfa+AojDuM4umKe2QwCf6EN906HwjujaitDs5o0s1y+k3lgbT2W2i7FJdnwbLXhJUBq/9liTctSmFC/0OqUinb0QddTWamtjbHRFuWJJ6NpqZ8vO3fZJ37Db+2GkaPYLGHs7XTTdiFQJ68SkVJFVmY6McR5UycflNCsccHFaV9FNbR4NttLxw4pQ7wJd066Z0ohVbzihaxHVExd/ay04oxUKWt+AsdiQ9OUyZ2krzN19IZIwafSTFgIBnMV73ADj7V/K8u1MaY2sJp2HWm0f41tqwajEvdHWOJs510MaAqN4aoSiPCXtN2KSi46dUxHdaMquar82O1x5jqhDGvqmoE9LfxcY3zqA7/x3HA67r9ZG4O6Cuxu12/+TP+eLP+I+HErqDDCDVmBDO4larujNe7x8om2rMug0MX0rL1+IWwdwfR+p1TNTyNmVJ85ljWzbWuGv8/C7HD/izjkHNZNYlhZcUOKVzKFUxsxxN/kax+8zPWPSFKw80rJr9Tizyj3o1gEsdwgWGoxPezDdZ1TSENE1dLdNvuKL+I84nxKesZgxXVA1VA1OcL49dFlpFV5yJMhzyCmNQ+a4BqusPJ2bB+xo8V9u3x48VVIEPS/mc3DvAbXyoYr6VgDfh5do5hhHOCXMqBZUPhWYbWZECwVJljLgMUWOCB4MUuMaxGNUQDVI50TQ+S3kFgIcu2qKkNSHVoM0SHsgoZxP2d5HH8B9woOk4x5bPkKtAHucZsdykjxuIpbUrSILgrT8G7G5oCW+K0990o7E3T6AdW4TilH5kDjds+H64kS0mz24grtwlzDHBJqI8YJQExotPvoC4JBq0lEjjQkyBZ8oH2LnRsQ4Hu1QsgDTJbO8fQDnllitkxuVskoiKbRF9VwzMDvxHAdwB7mD9yCplhHFEyUWHx3WtwCbSMMTCUCcEmSGlg4gTXkHpZXWQ7kpznK3EmCHiXInqndkQjunG5kxTKEeGye7jWz9cyMR2mGiFQ15ENRBTbCp+Gh86vAyASdgmJq2MC6hoADQ3GosP0QHbnMHjyBQvQqfhy/BUbeHd5WY/G/9LK/8Ka8Jd7UFeNWEZvzPb458Dn8DGLOe3/wGL/4xP+HXlRt+M1PE2iLhR8t+lfgxsuh7AfO2AOf+owWhSZRYQbd622hbpKWKuU+XuvNzP0OseRDa+mObgDHJUSc/pKx31QdKffQ5OIJpt8GWjlgTwMc/w5MPCR/yl1XC2a2Yut54SvOtMev55Of45BOat9aWG27p2ZVORRvnEk1hqWMVUmqa7S2YtvlIpspuF1pt0syuZS2NV14mUidCSfzQzg+KqvIYCMljIx2YK2AO34fX4GWdu5xcIAb8MzTw+j/lyWM+Dw/gjs4GD6ehNgA48kX/AI7XXM/XAN4WHr+9ntywqoCakCqmKP0rmQrJJEErG2Upg1JObr01lKQy4jskWalKYfJ/EDLMpjNSHFEUAde2fltaDgmrNaWQ9+AAb8I5vKjz3L1n1LriB/BXkG/wwR9y/oRX4LlioHA4LzP2inzRx/DWmutRweFjeP3tNeSGlaE1Fde0OS11yOpmbIp2u/jF1n2RRZviJM0yBT3IZl2HWImKjQOxIyeU325b/qWyU9Moj1o07tS0G7qJDoGHg5m8yeCxMoEH8GU45tnrNM84D2l297DQ9t1YP7jki/7RmutRweEA77/HWXOh3HCxkRgldDQkAjNTMl2Iloc1qN5JfJeeTlyTRzxURTdn1Ixv2uKjs12AbdEWlBtmVdk2k7FFwj07PCZ9XAwW3dG+8xKzNFr4EnwBZpy9Qzhh3jDXebBpYcpuo4fQ44u+fD1dweEnHzI7v0xuuOALRUV8rXpFyfSTQYkhd7IHm07jpyhlkCmI0ALYqPTpUxXS+z4jgDj1Pflvmz5ecuItpIBxyTHpSTGWd9g1ApfD/bvwUhL4nT1EzqgX7cxfCcNmb3mPL/qi9SwTHJ49oj5ZLjccbTG3pRmlYi6JCG0mQrAt1+i2UXTZ2dv9IlQpN5naMYtviaXlTrFpoMsl3bOAFEa8sqPj2WCMrx3Yjx99qFwO59Aw/wgx+HlqNz8oZvA3exRDvuhL1jMQHPaOJ0+XyA3fp1OfM3qObEVdhxjvynxNMXQV4+GJyvOEFqeQBaIbbO7i63rpxCltdZShPFxkjM2FPVkn3TG+Rp9pO3l2RzFegGfxGDHIAh8SteR0C4HopXzRF61nheDw6TFN05Ebvq8M3VKKpGjjO6r7nhudTEGMtYM92HTDaR1FDMXJ1eThsbKfywyoWwrzRSXkc51flG3vIid62h29bIcFbTGhfV+faaB+ohj7dPN0C2e2lC96+XouFByen9AsunLDJZ9z7NExiUc0OuoYW6UZkIyx2YUR2z6/TiRjyKMx5GbbjLHvHuf7YmtKghf34LJfx63Yg8vrvN2zC7lY0x0tvKezo4HmGYDU+Gab6dFL+KI761lDcNifcjLrrr9LWZJctG1FfU1uwhoQE22ObjdfkSzY63CbU5hzs21WeTddH2BaL11Gi7lVdlxP1nkxqhnKhVY6knS3EPgVGg1JpN5cP/hivujOelhXcPj8HC/LyI6MkteVjlolBdMmF3a3DbsuAYhL44dxzthWSN065xxUd55Lmf0wRbOYOqH09/o9WbO2VtFdaMb4qBgtFJoT1SqoN8wPXMoXLb3p1PUEhxfnnLzGzBI0Ku7FxrKsNJj/8bn/H8fPIVOd3rfrklUB/DOeO+nkghgSPzrlPxluCMtOnDL4Yml6dK1r3vsgMxgtPOrMFUZbEUbTdIzii5beq72G4PD0DKnwjmBULUVFmy8t+k7fZ3pKc0Q4UC6jpVRqS9Umv8bxw35flZVOU1X7qkjnhZlsMbk24qQ6Hz7QcuL6sDC0iHHki96Uh2UdvmgZnjIvExy2TeJdMDZNSbdZyAHe/Yd1xsQhHiKzjh7GxQ4yqMPaywPkjMamvqrYpmO7Knad+ZQC5msCuAPWUoxrxVhrGv7a+KLXFhyONdTMrZ7ke23qiO40ZJUyzgYyX5XyL0mV7NiUzEs9mjtbMN0dERqwyAJpigad0B3/zRV7s4PIfXSu6YV/MK7+OrYe/JvfGMn/PHJe2fyUdtnFrKRNpXV0Y2559aWPt/G4BlvjTMtXlVIWCnNyA3YQBDmYIodFz41PvXPSa6rq9lWZawZ4dP115HXV/M/tnFkkrBOdzg6aP4pID+MZnTJ1SuuB6iZlyiox4HT2y3YBtkUKWooacBQUDTpjwaDt5poBHl1/HXltwP887lKKXxNUEyPqpGTyA699UqY/lt9yGdlUKra0fFWS+36iylVWrAyd7Uw0CZM0z7xKTOduznLIjG2Hx8cDPLb+OvK6Bv7n1DYci4CxUuRxrjBc0bb4vD3rN5Zz36ntLb83eVJIB8LiIzCmn6SMPjlX+yNlTjvIGjs+QzHPf60Aj62/jrzG8j9vYMFtm1VoRWCJdmw7z9N0t+c8cxZpPeK4aTRicS25QhrVtUp7U578chk4q04Wx4YoQSjFryUlpcQ1AbxZ/XVMknIU//OGl7Q6z9Zpxi0+3yFhSkjUDpnCIUhLWVX23KQ+L9vKvFKI0ZWFQgkDLvBoylrHNVmaw10zwCPrr5tlodfnf94EWnQ0lFRWy8pW9LbkLsyUVDc2NSTHGDtnD1uMtchjbCeb1mpxFP0YbcClhzdLu6lfO8Bj6q+bdT2sz/+8SZCV7VIxtt0DUn9L7r4cLYWDSXnseEpOGFuty0qbOVlS7NNzs5FOGJUqQpl2Q64/yBpZf90sxbE+//PGdZ02HSipCbmD6NItmQ4Lk5XUrGpDMkhbMm2ZVheNYV+VbUWTcv99+2NyX1VoafSuC+AN6q9bFIMv5X/eagNWXZxEa9JjlMwNWb00akGUkSoepp1/yRuuqHGbUn3UdBSTxBU6SEVklzWRUkPndVvw2PrrpjvxOvzPmwHc0hpmq82npi7GRro8dXp0KXnUQmhZbRL7NEVp1uuZmO45vuzKsHrktS3GLWXODVjw+vXXLYx4Hf7njRPd0i3aoAGX6W29GnaV5YdyDj9TFkakje7GHYzDoObfddHtOSpoi2SmzJHrB3hM/XUDDEbxP2/oosszcRlehWXUvzHv4TpBVktHqwenFo8uLVmy4DKLa5d3RtLrmrM3aMFr1183E4sewf+85VWeg1c5ag276NZrM9IJVNcmLEvDNaV62aq+14IAOGFsBt973Ra8Xv11YzXwNfmft7Jg2oS+XOyoC8/cwzi66Dhmgk38kUmP1CUiYWOX1bpD2zWXt2FCp7uq8703APAa9dfNdscR/M/bZLIyouVxqJfeWvG9Je+JVckHQ9+CI9NWxz+blX/KYYvO5n2tAP/vrlZ7+8/h9y+9qeB/Hnt967e5mevX10rALDWK//FaAT5MXdBXdP0C/BAes792c40H+AiAp1e1oH8HgH94g/Lttx1gp63op1eyoM/Bvw5/G/7xFbqJPcCXnmBiwDPb/YKO4FX4OjyCb289db2/Noqicw4i7N6TVtoz8tNwDH+8x/i6Ae7lmaQVENzJFb3Di/BFeAwz+Is9SjeQySpPqbLFlNmyz47z5a/AF+AYFvDmHqibSXTEzoT4Gc3OALaqAP4KPFUJ6n+1x+rGAM6Zd78bgJ0a8QN4GU614vxwD9e1Amy6CcskNrczLx1JIp6HE5UZD/DBHrFr2oNlgG4Odv226BodoryjGJ9q2T/AR3vQrsOCS0ctXZi3ruLlhpFDJYl4HmYtjQCP9rhdn4suySLKDt6wLcC52h8xPlcjju1fn+yhuw4LZsAGUuo2b4Fx2UwQu77uqRHXGtg92aN3tQCbFexc0uk93vhTXbct6y7MulLycoUljx8ngDMBg1tvJjAazpEmOtxlzclvj1vQf1Tx7QlPDpGpqgtdSKz/d9/hdy1vTfFHSmC9dGDZbLiezz7Ac801HirGZsWjydfZyPvHXL/Y8Mjzg8BxTZiuwKz4Eb8sBE9zznszmjvFwHKPIWUnwhqfVRcd4Ck0K6ate48m1oOfrX3/yOtvAsJ8zsPAM89sjnddmuLuDPjX9Bu/L7x7xpMzFk6nWtyQfPg278Gn4Aekz2ZgOmU9eJ37R14vwE/BL8G3aibCiWMWWDQ0ZtkPMnlcGeAu/Ag+8ZyecU5BPuy2ILD+sQqyZhAKmn7XZd+jIMTN9eBL7x95xVLSX4On8EcNlXDqmBlqS13jG4LpmGbkF/0CnOi3H8ETOIXzmnmtb0a16Tzxj1sUvQCBiXZGDtmB3KAefPH94xcUa/6vwRn80GOFyjEXFpba4A1e8KQfFF+259tx5XS4egYn8fQsLGrqGrHbztr+uByTahWuL1NUGbDpsnrwBfePPwHHIf9X4RnM4Z2ABWdxUBlqQ2PwhuDxoS0vvqB1JzS0P4h2nA/QgTrsJFn+Y3AOjs9JFC07CGWX1oNX3T/yHOzgDjwPn1PM3g9Jk9lZrMEpxnlPmBbjyo2+KFXRU52TJM/2ALcY57RUzjObbjqxVw++4P6RAOf58pcVsw9Daje3htriYrpDOonre3CudSe6bfkTEgHBHuDiyu5MCsc7BHhYDx7ePxLjqigXZsw+ijMHFhuwBmtoTPtOxOrTvYJDnC75dnUbhfwu/ZW9AgYd+peL68HD+0emKquiXHhWjJg/UrkJYzuiaL3E9aI/ytrCvAd4GcYZMCkSQxfUg3v3j8c4e90j5ZTPdvmJJGHnOCI2nHS8081X013pHuBlV1gB2MX1YNmWLHqqGN/TWmG0y6clJWthxNUl48q38Bi8vtMKyzzpFdSDhxZ5WBA5ZLt8Jv3895DduBlgbPYAj8C4B8hO68FDkoh5lydC4FiWvBOVqjYdqjiLv92t8yPDjrDaiHdUD15qkSURSGmXJwOMSxWAXYwr3zaAufJ66l+94vv3AO+vPcD7aw/w/toDvL/2AO+vPcD7aw/wHuD9tQd4f+0B3l97gPfXHuD9tQd4f+0B3l97gG8LwP8G/AL8O/A5OCq0Ys2KIdv/qOIXG/4mvFAMF16gZD+2Xvu/B8as5+8bfllWyg0zaNO5bfXj6vfhhwD86/Aq3NfRS9t9WPnhfnvCIw/CT8GLcFTMnpntdF/z9V+PWc/vWoIH+FL3Znv57PitcdGP4R/C34avw5fgRVUInCwbsn1yyA8C8zm/BH8NXoXnVE6wVPjdeCI38kX/3+Ct9dbz1pTmHFRu+Hm4O9Ch3clr99negxfwj+ER/DR8EV6B5+DuQOnTgUw5rnkY+FbNU3gNXh0o/JYTuWOvyBf9FvzX663HH/HejO8LwAl8Hl5YLTd8q7sqA3wbjuExfAFegQdwfyDoSkWY8swzEf6o4Qyewefg+cHNbqMQruSL/u/WWc+E5g7vnnEXgDmcDeSGb/F4cBcCgT+GGRzDU3hZYburAt9TEtHgbM6JoxJ+6NMzzTcf6c2bycv2+KK/f+l6LBzw5IwfqZJhA3M472pWT/ajKxnjv4AFnMEpnBTPND6s2J7qHbPAqcMK74T2mZ4VGB9uJA465It+/eL1WKhYOD7xHOkr1ajK7d0C4+ke4Hy9qXZwpgLr+Znm/uNFw8xQOSy8H9IzjUrd9+BIfenYaylf9FsXr8fBAadnPIEDna8IBcwlxnuA0/Wv6GAWPd7dDIKjMdSWueAsBj4M7TOd06qBbwDwKr7oleuxMOEcTuEZTHWvDYUO7aHqAe0Bbq+HEFRzOz7WVoTDQkVds7A4sIIxfCQdCefFRoIOF/NFL1mPab/nvOakSL/Q1aFtNpUb/nFOVX6gzyg/1nISyDfUhsokIzaBR9Kxm80s5mK+6P56il1jXic7nhQxsxSm3OwBHl4fFdLqi64nDQZvqE2at7cWAp/IVvrN6/BFL1mPhYrGMBfOi4PyjuSGf6wBBh7p/FZTghCNWGgMzlBbrNJoPJX2mW5mwZfyRffXo7OFi5pZcS4qZUrlViptrXtw+GQoyhDPS+ANjcGBNRiLCQDPZPMHuiZfdFpPSTcQwwKYdRNqpkjm7AFeeT0pJzALgo7g8YYGrMHS0iocy+YTm2vyRUvvpXCIpQ5pe666TJrcygnScUf/p0NDs/iAI/nqDHC8TmQT8x3NF91l76oDdQGwu61Z6E0ABv7uO1dbf/37Zlv+Zw/Pbh8f1s4Avur6657/+YYBvur6657/+YYBvur6657/+YYBvur6657/+aYBvuL6657/+VMA8FXWX/f8zzcN8BXXX/f8zzcNMFdbf93zP38KLPiK6697/uebtuArrr/u+Z9vGmCusP6653/+1FjwVdZf9/zPN7oHX339dc//fNMu+irrr3v+50+Bi+Zq6697/uebA/jz8Pudf9ht/fWv517J/XUzAP8C/BAeX9WCDrUpZ3/dEMBxgPcfbtTVvsYV5Yn32u03B3Ac4P3b8I+vxNBKeeL9dRMAlwO83959qGO78sT769oB7g3w/vGVYFzKE++v6wV4OMD7F7tckFkmT7y/rhHgpQO8b+4Y46XyxPvrugBeNcB7BRiX8sT767oAvmCA9woAHsoT76+rBJjLBnh3txOvkifeX1dswZcO8G6N7sXyxPvr6i340gHe3TnqVfLE++uKAb50gHcXLnrX8sR7gNdPRqwzwLu7Y/FO5Yn3AK9jXCMGeHdgxDuVJ75VAI8ljP7PAb3/RfjcZfePHBB+79dpfpH1CanN30d+mT1h9GqAxxJGM5LQeeQ1+Tb+EQJrElLb38VHQ94TRq900aMIo8cSOo+8Dp8QfsB8zpqE1NO3OI9Zrj1h9EV78PqE0WMJnUdeU6E+Jjyk/hbrEFIfeWbvId8H9oTRFwdZaxJGvziW0Hn0gqYB/wyZ0PwRlxJST+BOw9m77Amj14ii1yGM/txYQudN0qDzGe4EqfA/5GJCagsHcPaEPWH0esekSwmjRxM6b5JEcZ4ww50ilvAOFxBSx4yLW+A/YU8YvfY5+ALC6NGEzhtmyZoFZoarwBLeZxUhtY4rc3bKnjB6TKJjFUHzJoTOozF2YBpsjcyxDgzhQ1YRUse8+J4wenwmaylB82hC5w0zoRXUNXaRBmSMQUqiWSWkLsaVqc/ZE0aPTFUuJWgeTei8SfLZQeMxNaZSIzbII4aE1Nmr13P2hNHjc9E9guYNCZ032YlNwESMLcZiLQHkE4aE1BFg0yAR4z1h9AiAGRA0jyZ03tyIxWMajMPWBIsxYJCnlITU5ShiHYdZ94TR4wCmSxg9jtB5KyPGYzymAYexWEMwAPIsAdYdV6aObmNPGD0aYLoEzaMJnTc0Ygs+YDw0GAtqxBjkuP38bMRWCHn73xNGjz75P73WenCEJnhwyVe3AEe8TtKdJcYhBl97wuhNAObK66lvD/9J9NS75v17wuitAN5fe4D31x7g/bUHeH/tAd5fe4D3AO+vPcD7aw/w/toDvL/2AO+vPcD7aw/w/toDvAd4f/24ABzZ8o+KLsSLS+Pv/TqTb3P4hKlQrTGh+fbIBT0Axqznnb+L/V2mb3HkN5Mb/nEHeK7d4IcDld6lmDW/iH9E+AH1MdOw/Jlu2T1xNmY98sv4wHnD7D3uNHu54WUuOsBTbQuvBsPT/UfzNxGYzwkP8c+Yz3C+r/i6DcyRL/rZ+utRwWH5PmfvcvYEt9jLDS/bg0/B64DWKrQM8AL8FPwS9beQCe6EMKNZYJol37jBMy35otdaz0Bw2H/C2Smc7+WGB0HWDELBmOByA3r5QONo4V+DpzR/hFS4U8wMW1PXNB4TOqYz9urxRV++ntWCw/U59Ty9ebdWbrgfRS9AYKKN63ZokZVygr8GZ/gfIhZXIXPsAlNjPOLBby5c1eOLvmQ9lwkOy5x6QV1j5TYqpS05JtUgUHUp5toHGsVfn4NX4RnMCe+AxTpwmApTYxqMxwfCeJGjpXzRF61nbcHhUBPqWze9svwcHJ+S6NPscKrEjug78Dx8Lj3T8D4YxGIdxmJcwhi34fzZUr7olevZCw5vkOhoClq5zBPZAnygD/Tl9EzDh6kl3VhsHYcDEb+hCtJSvuiV69kLDm+WycrOTArHmB5/VYyP6jOVjwgGawk2zQOaTcc1L+aLXrKeveDwZqlKrw8U9Y1p66uK8dEzdYwBeUQAY7DbyYNezBfdWQ97weEtAKYQg2xJIkuveAT3dYeLGH+ShrWNwZgN0b2YL7qznr3g8JYAo5bQBziPjx7BPZ0d9RCQp4UZbnFdzBddor4XHN4KYMrB2qHFRIzzcLAHQZ5the5ovui94PCWAPefaYnxIdzRwdHCbuR4B+tbiy96Lzi8E4D7z7S0mEPd+eqO3cT53Z0Y8SV80XvB4Z0ADJi/f7X113f+7p7/+UYBvur6657/+YYBvur6657/+aYBvuL6657/+aYBvuL6657/+aYBvuL6657/+aYBvuL6657/+VMA8FXWX/f8z58OgK+y/rrnf75RgLna+uue//lTA/CV1V/3/M837aKvvv6653++UQvmauuve/7nTwfAV1N/3fM/fzr24Cuuv+75nz8FFnxl9dc9//MOr/8/glixwRuUfM4AAAAASUVORK5CYII="}getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}dispose(){this.edgesRT.dispose(),this.weightsRT.dispose(),this.areaTexture.dispose(),this.searchTexture.dispose(),this.materialEdges.dispose(),this.materialWeights.dispose(),this.materialBlend.dispose(),this.fsQuad.dispose()}}const wE={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class CE extends jr{constructor(){super();const e=wE;this.uniforms=Li.clone(e.uniforms),this.material=new SS({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ma(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Pt.getTransfer(this._outputColorSpace)===Wt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===vp?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===xp?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===yp?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ju?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===bp&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const RE=function(){var s=["varying vec3 vNormal;","varying vec3 vWorldPosition;","void main(){","// compute intensity","vNormal        = normalize( normalMatrix * normal );","vec4 worldPosition = modelMatrix * vec4( position, 1.0 );","vWorldPosition     = worldPosition.xyz;","// set gl_Position","gl_Position    = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join(`
`),e=["varying vec3       vNormal;","varying vec3       vWorldPosition;","uniform vec3       lightColor;","uniform vec3       spotPosition;","uniform float      attenuation;","uniform float      anglePower;","void main(){","float intensity;","intensity  = distance(vWorldPosition, spotPosition)/attenuation;","intensity  = 1.0 - clamp(intensity, 0.0, 1.0);","vec3 normal    = vec3(vNormal.x, vNormal.y, abs(vNormal.z));","float angleIntensity   = pow( dot(normal, vec3(0.0, 0.0, 1.0)), anglePower );","intensity  = intensity * angleIntensity;","gl_FragColor   = vec4( lightColor, intensity);","}"].join(`
`),t=new dn({uniforms:{attenuation:{type:"f",value:100},anglePower:{type:"f",value:2.6},spotPosition:{type:"v3",value:new V(0,0,0)},lightColor:{type:"c",value:new je("cyan")}},vertexShader:s,fragmentShader:e,side:Wn,blending:yl,transparent:!0,depthWrite:!1});return t},gr=new fS;gr.fog=new $u(0,.1,200);const Ct=new On(75,window.innerWidth/window.innerHeight,.1,1e3),Ea=new Qp({canvas:document.querySelector("#bg"),antialias:!0,powerPreference:"high-performance",toneMapping:ju});Ea.shadowMap.enabled=!0;Ea.shadowMap.type=gp;Ea.setPixelRatio(window.devicePixelRatio);Ea.setSize(window.innerWidth,window.innerHeight);Ct.position.z=54;window.addEventListener("resize",function(){render.setSize(window.innerWidth,window.innerHeight),Ct.aspect=window.innerWidth/window.innerHeight,Ct.updateProjectionMatrix()});const LE=document.getElementById("progress-container-content"),Aa=new rm;var hp;Aa.onProgress=function(s,e,t){hp=e/t*100,LE.innerText=Math.round(hp)+"%"};Aa.onLoad=function(){ue(".progress-container").fadeOut(),ue("#main_title").fadeIn()};let qr,vg,dp;const ui={A:{direction:0,steepness:.2,wavelength:40},B:{direction:30,steepness:.2,wavelength:15},C:{direction:60,steepness:.2,wavelength:15}},PE=new Vl(512,512,512,512);qr=new mE(PE,{textureWidth:512,textureHeight:512,waterNormals:new sm(Aa).load("waternormals.jpg",function(s){s.wrapS=s.wrapT=xs}),sunDirection:new V,sunColor:0,waterColor:0,distortionScale:2,fog:gr.fog!==void 0});qr.rotation.x=-Math.PI/2;qr.material.onBeforeCompile=function(s){s.uniforms.waveA={value:[Math.sin(ui.A.direction*Math.PI/180),Math.cos(ui.A.direction*Math.PI/180),ui.A.steepness,ui.A.wavelength]},s.uniforms.waveB={value:[Math.sin(ui.B.direction*Math.PI/180),Math.cos(ui.B.direction*Math.PI/180),ui.B.steepness,ui.B.wavelength]},s.uniforms.waveC={value:[Math.sin(ui.C.direction*Math.PI/180),Math.cos(ui.C.direction*Math.PI/180),ui.C.steepness,ui.C.wavelength]},s.vertexShader=document.getElementById("vertexShader").textContent,s.fragmentShader=document.getElementById("fragmentShader").textContent};qr.traverse(s=>{s.isMesh&&(s.castShadow=!0,s.receiveShadow=!0)});qr.position.set(0,0,-200);gr.add(qr);qr.position.y=-15;const Br=new om(16777215,25e4);Br.castShadow=!0;Br.shadow.bias=-1e-4;Br.position.set(-15,28,15);Br.decay=3;gr.add(Br);let Wu;const Rf=new jM(Aa);Rf.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.7/");Rf.setDecoderConfig({type:"js"});const Lf=new hM(Aa);Lf.setDRACOLoader(Rf);Lf.load("megh.glb",function(s){Wu=s,s.scene.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),gr.add(s.scene),s.scene.scale.set(5,5,5),s.scene.position.set(0,0,0),s.scene.rotation.set(0,0,0)},void 0,function(s){console.error(s)});var Bl=new rf(.1,5,15,500,20,!0);Bl.applyMatrix4(new ut().makeTranslation(0,-Bl.parameters.height/2,0));Bl.applyMatrix4(new ut().makeRotationX(-Math.PI/2));var Pf=RE(),wa=new Vn(Bl,Pf);wa.position.set(Br.position.x,Br.position.y,Br.position.z);wa.lookAt(new V(0,0,0));wa.scale.set(10,10,10);Pf.uniforms.lightColor.value.set("white");Pf.uniforms.spotPosition.value=wa.position;gr.add(wa);Lf.load("arches.glb",function(s){s.scene,gr.add(s.scene),s.scene.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),s.scene.scale.set(10,10,10),s.scene.position.set(-29.5,-12.53,-300)},void 0,function(s){console.error(s)});const ca=new zS(16777215,5,25,75);ca.position.set(0,34,-328);ca.lookAt(0,ca.position.y-10,ca.position.z);gr.add(ca);const ws=new yE(Ea),DE=new bE(gr,Ct),NE=new EE(.7),OE=new wo(new Ze(window.innerWidth,window.innerHeight),.3,.5,0),xg=new AE;xg.renderToScreen=!0;const IE=TE,UE=new _g(IE);ws.addPass(UE);ws.addPass(DE);ws.addPass(NE);ws.addPass(OE);ws.addPass(xg);const FE=new CE;ws.addPass(FE);vg=new am;let un=0;const BE=document.getElementById("proceed"),kE=document.getElementById("back");BE.addEventListener("mousedown",function(){un+=1,un==1&&(ue("#main_title").fadeOut(),setTimeout(()=>{ue("#second_title").fadeIn()},3e3),Nt.to(Ct.position,{z:-254,duration:3,ease:"power1.inOut"}),Nt.to(Ct.rotation,{y:0,duration:3,ease:"power1.inOut"}),ue("#proceed").css("left","633px"),ue("#proceed:hover").css("left","633px"),ue("#back").fadeIn(),ue("#back").css("left","725px"),ue("#back:hover").css("left","725px")),un==2&&(ue("#second_title").fadeOut(),setTimeout(()=>{ue(".item1").fadeIn()},1500),ue(".item2").fadeOut(),ue("#proceed").fadeOut(),ue("#back").fadeOut(),setTimeout(()=>{ue("#proceed").fadeIn()},1500),setTimeout(()=>{ue("#back").fadeIn()},1500),Nt.to(Ct.position,{x:-15,z:-300,duration:1.5,ease:"power1.inOut"}),Nt.to(Ct.rotation,{y:1.57075,duration:1.5,ease:"power1.inOut"})),un==3&&(ue(".item1").fadeOut(),setTimeout(()=>{ue(".item2").fadeIn()},1500),ue("#proceed").fadeOut(),ue("#back").fadeOut(),setTimeout(()=>{ue("#proceed").fadeIn()},1500),setTimeout(()=>{ue("#back").fadeIn()},1500),Nt.to(Ct.position,{z:-328,duration:1.5,ease:"power1.inOut"}),ue("#logo").css("filter","brightness(0)")),un==4&&(ue(".item2").fadeOut(),setTimeout(()=>{ue(".item3").fadeIn()},1500),ue("#proceed").fadeOut(),ue("#back").fadeOut(),setTimeout(()=>{ue("#proceed").fadeIn()},1500),setTimeout(()=>{ue("#back").fadeIn()},1500),Nt.to(Ct.position,{z:-358,duration:1.5,ease:"power1.inOut"})),un==5&&(ue(".item3").fadeOut(),setTimeout(()=>{ue(".item4").fadeIn()},1500),ue("#proceed").fadeOut(),ue("#back").fadeOut(),setTimeout(()=>{ue("#proceed").fadeIn()},1500),setTimeout(()=>{ue("#back").fadeIn()},1500),Nt.to(Ct.rotation,{y:0,duration:1.5,ease:"power1.inOut"}),Nt.to(Ct.position,{x:0,duration:1.5,ease:"power1.inOut"}),ue("#logo").css("filter","brightness(1)")),un==6&&(ue(".item4").fadeOut(),setTimeout(()=>{ue(".item5").fadeIn()},1500),ue("#proceed").fadeOut(),ue("#back").fadeOut(),setTimeout(()=>{ue("#proceed").fadeIn()},1500),setTimeout(()=>{ue("#back").fadeIn()},1500),Nt.to(Ct.position,{x:15,duration:1.5,ease:"power1.inOut"}),Nt.to(Ct.rotation,{y:-1.57075,duration:1.5,ease:"power1.inOut"})),un==7&&(ue(".item5").fadeOut(),setTimeout(()=>{ue(".item6").fadeIn()},1500),ue("#proceed").fadeOut(),ue("#back").fadeOut(),setTimeout(()=>{ue("#proceed").fadeIn()},1500),setTimeout(()=>{ue("#back").fadeIn()},1500),Nt.to(Ct.position,{z:-328,duration:1.5,ease:"power1.inOut"}),ue("#logo").css("filter","brightness(0)")),un==8&&(ue(".item6").fadeOut(),setTimeout(()=>{ue(".item7").fadeIn()},1500),ue("#proceed").fadeOut(),ue("#back").fadeOut(),setTimeout(()=>{ue("#back").fadeIn()},1500),ue("#back").css("left","684px"),Nt.to(Ct.position,{z:-300,duration:1.5,ease:"power1.inOut"}))});kE.addEventListener("mousedown",function(){un-=1,un==0&&(Nt.to(Ct.position,{x:0,z:54,duration:3,ease:"power1.inOut"}),ue("#second_title").fadeOut(),setTimeout(()=>{ue("#main_title").fadeIn()},3e3),Nt.to(Ct.rotation,{y:0,duration:3,ease:"power1.inOut"}),ue("#proceed").css("left","684px"),ue("#proceed:hover").css("left","684px"),ue("#back").fadeOut(),ue("#back").css("left","684px"),ue("#back:hover").css("left","684px")),un==1&&(ue("#main_title").fadeOut(),ue(".item1").fadeOut(),Nt.to(Ct.position,{x:0,z:-254,duration:3,ease:"power1.inOut"}),setTimeout(()=>{ue("#second_title").fadeIn()},3e3),Nt.to(Ct.rotation,{y:0,duration:3,ease:"power1.inOut"})),un==2&&(ue(".item2").fadeOut(),ue("#second_title").fadeOut(),setTimeout(()=>{ue(".item1").fadeIn()},1500),ue("#proceed").fadeOut(),ue("#back").fadeOut(),setTimeout(()=>{ue("#proceed").fadeIn()},1500),setTimeout(()=>{ue("#back").fadeIn()},1500),Nt.to(Ct.position,{x:-15,z:-300,duration:1.5,ease:"power1.inOut"}),Nt.to(Ct.rotation,{y:1.57075,duration:1.5,ease:"power1.inOut"}),ue("#logo").css("filter","brightness(1)")),un==3&&(ue(".item3").fadeOut(),setTimeout(()=>{ue(".item2").fadeIn()},1500),ue("#proceed").fadeOut(),ue("#back").fadeOut(),setTimeout(()=>{ue("#proceed").fadeIn()},1500),setTimeout(()=>{ue("#back").fadeIn()},1500),Nt.to(Ct.position,{z:-328,duration:1.5,ease:"power1.inOut"}),ue("#logo").css("filter","brightness(0)")),un==4&&(ue(".item4").fadeOut(),setTimeout(()=>{ue(".item3").fadeIn()},1500),ue("#proceed").fadeOut(),ue("#back").fadeOut(),setTimeout(()=>{ue("#proceed").fadeIn()},1500),setTimeout(()=>{ue("#back").fadeIn()},1500),Nt.to(Ct.position,{x:-15,z:-358,duration:1.5,ease:"power1.inOut"}),Nt.to(Ct.rotation,{y:1.57075,duration:1.5,ease:"power1.inOut"}),ue("#logo").css("filter","brightness(0)")),un==5&&(ue(".item5").fadeOut(),setTimeout(()=>{ue(".item4").fadeIn()},1500),ue("#proceed").fadeOut(),ue("#back").fadeOut(),setTimeout(()=>{ue("#proceed").fadeIn()},1500),setTimeout(()=>{ue("#back").fadeIn()},1500),Nt.to(Ct.rotation,{y:0,duration:1.5,ease:"power1.inOut"}),Nt.to(Ct.position,{x:0,duration:1.5,ease:"power1.inOut"}),ue("#logo").css("filter","brightness(1)")),un==6&&(ue(".item6").fadeOut(),setTimeout(()=>{ue(".item5").fadeIn()},1500),ue("#proceed").fadeOut(),ue("#back").fadeOut(),setTimeout(()=>{ue("#proceed").fadeIn()},1500),setTimeout(()=>{ue("#back").fadeIn()},1500),Nt.to(Ct.position,{x:15,z:-358,duration:1.5,ease:"power1.inOut"}),Nt.to(Ct.rotation,{y:-1.57075,duration:1.5,ease:"power1.inOut"}),ue("#logo").css("filter","brightness(1)")),un==7&&(ue(".item7").fadeOut(),setTimeout(()=>{ue(".item6").fadeIn()},1500),ue("#proceed").fadeOut(),ue("#back").fadeOut(),setTimeout(()=>{ue("#proceed").fadeIn()},1500),setTimeout(()=>{ue("#back").fadeIn()},1500),Nt.to(Ct.position,{z:-328,duration:1.5,ease:"power1.inOut"}),ue("#logo").css("filter","brightness(0)")),un==8&&(ue("#proceed").fadeOut(),ue("#back").fadeOut(),setTimeout(()=>{ue("#back").fadeIn()},1500),Nt.to(Ct.position,{z:-300,duration:1.5,ease:"power1.inOut"}))});const zE=document.getElementById("logo");zE.addEventListener("click",function(){un=0,Nt.to(Ct.position,{z:54,x:0,duration:3,ease:"power1.inOut"}),Nt.to(Ct.rotation,{x:0,y:0,duration:3,ease:"power1.inOut"}),ue("#second_title").fadeOut(),ue(".item1").fadeOut(),ue(".item2").fadeOut(),ue(".item3").fadeOut(),ue(".item4").fadeOut(),ue(".item5").fadeOut(),ue(".item6").fadeOut(),ue(".item7").fadeOut(),setTimeout(()=>{ue("#main_title").fadeIn()},3e3),ue("#logo").css("filter","brightness(1)"),ue("#proceed").css("left","684px"),ue("#proceed:hover").css("left","684px"),ue("#back").fadeOut()});const HE=document.getElementById("skull");HE.addEventListener("click",function(){ue(".menu").slideDown().fadeIn()});ue("#exit-menu").on("click",function(){ue(".menu").slideUp()});new JS;const kl=new Ze;function GE(s){kl.x=s.clientX-window.innerWidth/2,kl.y=-(s.clientY-window.innerHeight/2)}function yg(){Wu&&Wu.scene.lookAt(kl.x*.08,kl.y*.08,Ct.position.z),ws.render(),dp=vg.getDelta(),qr.material.uniforms.time.value+=dp,window.addEventListener("pointermove",GE),requestAnimationFrame(yg)}yg();
