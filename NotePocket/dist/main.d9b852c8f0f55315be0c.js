!function(n){var o={};function r(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=n,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=34)}([function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var o=n(8),r=n(17);t.exports=n(4)?function(t,e,n){return o.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var o=n(26)("wks"),r=n(12),i=n(0).Symbol,c="function"==typeof i;(t.exports=function(t){return o[t]||(o[t]=c&&i[t]||(c?i:r)("Symbol."+t))}).store=o},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){t.exports=!n(10)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var y=n(0),m=n(7),h=n(1),g=n(11),b=n(18),x="prototype",N=function(t,e,n){var o,r,i,c,a=t&N.F,u=t&N.G,s=t&N.S,l=t&N.P,f=t&N.B,d=u?y:s?y[e]||(y[e]={}):(y[e]||{})[x],p=u?m:m[e]||(m[e]={}),v=p[x]||(p[x]={});for(o in u&&(n=e),n)i=((r=!a&&d&&void 0!==d[o])?d:n)[o],c=f&&r?b(i,y):l&&"function"==typeof i?b(Function.call,i):i,d&&g(d,o,i,t&N.U),p[o]!=i&&h(p,o,c),l&&v[o]!=i&&(v[o]=i)};y.core=m,N.F=1,N.G=2,N.S=4,N.P=8,N.B=16,N.W=32,N.U=64,N.R=128,t.exports=N},function(t,e){var n=t.exports={version:"2.6.1"};"number"==typeof __e&&(__e=n)},function(t,e,n){var o=n(9),r=n(37),i=n(38),c=Object.defineProperty;e.f=n(4)?Object.defineProperty:function(t,e,n){if(o(t),e=i(e,!0),o(n),r)try{return c(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var o=n(3);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var i=n(0),c=n(1),a=n(5),u=n(12)("src"),o="toString",r=Function[o],s=(""+r).split(o);n(7).inspectSource=function(t){return r.call(t)},(t.exports=function(t,e,n,o){var r="function"==typeof n;r&&(a(n,"name")||c(n,"name",e)),t[e]!==n&&(r&&(a(n,u)||c(n,u,t[e]?""+t[e]:s.join(String(e)))),t===i?t[e]=n:o?t[e]?t[e]=n:c(t,e,n):(delete t[e],c(t,e,n)))})(Function.prototype,o,function(){return"function"==typeof this&&this[u]||r.call(this)})},function(t,e){var n=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+o).toString(36))}},function(t,e){t.exports={}},function(t,e,n){var o=n(20),r=n(23);t.exports=function(t){return o(r(t))}},function(t,e,n){var o=n(26)("keys"),r=n(12);t.exports=function(t){return o[t]||(o[t]=r(t))}},function(t,e,n){var o=n(3),r=n(0).document,i=o(r)&&o(r.createElement);t.exports=function(t){return i?r.createElement(t):{}}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var i=n(39);t.exports=function(o,r,t){if(i(o),void 0===r)return o;switch(t){case 1:return function(t){return o.call(r,t)};case 2:return function(t,e){return o.call(r,t,e)};case 3:return function(t,e,n){return o.call(r,t,e,n)}}return function(){return o.apply(r,arguments)}}},function(t,e,n){var b=n(18),x=n(20),N=n(22),k=n(24),o=n(40);t.exports=function(f,t){var d=1==f,p=2==f,v=3==f,y=4==f,m=6==f,h=5==f||m,g=t||o;return function(t,e,n){for(var o,r,i=N(t),c=x(i),a=b(e,n,3),u=k(c.length),s=0,l=d?g(t,u):p?g(t,0):void 0;s<u;s++)if((h||s in c)&&(r=a(o=c[s],s,i),f))if(d)l[s]=r;else if(r)switch(f){case 3:return!0;case 5:return o;case 6:return s;case 2:l.push(o)}else if(y)return!1;return m?-1:v||y?y:l}}},function(t,e,n){var o=n(21);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var o=n(23);t.exports=function(t){return Object(o(t))}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var o=n(25),r=Math.min;t.exports=function(t){return 0<t?r(o(t),9007199254740991):0}},function(t,e){var n=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(0<t?o:n)(t)}},function(t,e,n){var o=n(7),r=n(0),i="__core-js_shared__",c=r[i]||(r[i]={});(t.exports=function(t,e){return c[t]||(c[t]=void 0!==e?e:{})})("versions",[]).push({version:o.version,mode:n(27)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e){t.exports=!1},function(t,e,n){"use strict";var o=n(10);t.exports=function(t,e){return!!t&&o(function(){e?t.call(null,function(){},1):t.call(null)})}},function(t,e,n){for(var o=n(43),r=n(30),i=n(11),c=n(0),a=n(1),u=n(13),s=n(2),l=s("iterator"),f=s("toStringTag"),d=u.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=r(p),y=0;y<v.length;y++){var m,h=v[y],g=p[h],b=c[h],x=b&&b.prototype;if(x&&(x[l]||a(x,l,d),x[f]||a(x,f,h),u[h]=d,g))for(m in o)x[m]||i(x,m,o[m],!0)}},function(t,e,n){var o=n(50),r=n(31);t.exports=Object.keys||function(t){return o(t,r)}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var o=n(8).f,r=n(5),i=n(2)("toStringTag");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,i)&&o(t,i,{configurable:!0,value:e})}},function(t,e,n){"use strict";var o=n(6),r=n(19)(0),i=n(28)([].forEach,!0);o(o.P+o.F*!i,"Array",{forEach:function(t){return r(this,t,arguments[1])}})},function(t,e,n){t.exports=n(55)},function(t,e,n){},function(t,e,n){"use strict";var o=n(6),r=n(19)(2);o(o.P+o.F*!n(28)([].filter,!0),"Array",{filter:function(t){return r(this,t,arguments[1])}})},function(t,e,n){t.exports=!n(4)&&!n(10)(function(){return 7!=Object.defineProperty(n(16)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(3);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var o=n(41);t.exports=function(t,e){return new(o(t))(e)}},function(t,e,n){var o=n(3),r=n(42),i=n(2)("species");t.exports=function(t){var e;return r(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!r(e.prototype)||(e=void 0),o(e)&&null===(e=e[i])&&(e=void 0)),void 0===e?Array:e}},function(t,e,n){var o=n(21);t.exports=Array.isArray||function(t){return"Array"==o(t)}},function(t,e,n){"use strict";var o=n(44),r=n(45),i=n(13),c=n(14);t.exports=n(46)(Array,"Array",function(t,e){this._t=c(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,r(1)):r(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,e,n){var o=n(2)("unscopables"),r=Array.prototype;null==r[o]&&n(1)(r,o,{}),t.exports=function(t){r[o][t]=!0}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){"use strict";var b=n(27),x=n(6),N=n(11),k=n(1),w=n(13),S=n(47),L=n(32),O=n(54),E=n(2)("iterator"),P=!([].keys&&"next"in[].keys()),T="values",M=function(){return this};t.exports=function(t,e,n,o,r,i,c){S(n,e,o);var a,u,s,l=function(t){if(!P&&t in v)return v[t];switch(t){case"keys":case T:return function(){return new n(this,t)}}return function(){return new n(this,t)}},f=e+" Iterator",d=r==T,p=!1,v=t.prototype,y=v[E]||v["@@iterator"]||r&&v[r],m=y||l(r),h=r?d?l("entries"):m:void 0,g="Array"==e&&v.entries||y;if(g&&(s=O(g.call(new t)))!==Object.prototype&&s.next&&(L(s,f,!0),b||"function"==typeof s[E]||k(s,E,M)),d&&y&&y.name!==T&&(p=!0,m=function(){return y.call(this)}),b&&!c||!P&&!p&&v[E]||k(v,E,m),w[e]=m,w[f]=M,r)if(a={values:d?m:l(T),keys:i?m:l("keys"),entries:h},c)for(u in a)u in v||N(v,u,a[u]);else x(x.P+x.F*(P||p),e,a);return a}},function(t,e,n){"use strict";var o=n(48),r=n(17),i=n(32),c={};n(1)(c,n(2)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=o(c,{next:r(1,n)}),i(t,e+" Iterator")}},function(t,e,o){var r=o(9),i=o(49),c=o(31),a=o(15)("IE_PROTO"),u=function(){},s="prototype",l=function(){var t,e=o(16)("iframe"),n=c.length;for(e.style.display="none",o(53).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),l=t.F;n--;)delete l[s][c[n]];return l()};t.exports=Object.create||function(t,e){var n;return null!==t?(u[s]=r(t),n=new u,u[s]=null,n[a]=t):n=l(),void 0===e?n:i(n,e)}},function(t,e,n){var c=n(8),a=n(9),u=n(30);t.exports=n(4)?Object.defineProperties:function(t,e){a(t);for(var n,o=u(e),r=o.length,i=0;i<r;)c.f(t,n=o[i++],e[n]);return t}},function(t,e,n){var c=n(5),a=n(14),u=n(51)(!1),s=n(15)("IE_PROTO");t.exports=function(t,e){var n,o=a(t),r=0,i=[];for(n in o)n!=s&&c(o,n)&&i.push(n);for(;e.length>r;)c(o,n=e[r++])&&(~u(i,n)||i.push(n));return i}},function(t,e,n){var u=n(14),s=n(24),l=n(52);t.exports=function(a){return function(t,e,n){var o,r=u(t),i=s(r.length),c=l(n,i);if(a&&e!=e){for(;c<i;)if((o=r[c++])!=o)return!0}else for(;c<i;c++)if((a||c in r)&&r[c]===e)return a||c||0;return!a&&-1}}},function(t,e,n){var o=n(25),r=Math.max,i=Math.min;t.exports=function(t,e){return(t=o(t))<0?r(t+e,0):i(t,e)}},function(t,e,n){var o=n(0).document;t.exports=o&&o.documentElement},function(t,e,n){var o=n(5),r=n(22),i=n(15)("IE_PROTO"),c=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=r(t),o(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},function(t,e,n){"use strict";n.r(e);var o={};n.r(o);n(35),n(36),n(29),n(33);var c=function t(e,n,o,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.id=e,this.title=n,this.description=o,this.color=r,this.date=(new Date).toLocaleDateString(),this.isPined=!1},a={casualNotes:[],notesAmount:0},u=function(){return a.casualNotes},s={notesBox:document.getElementById("noteBox"),openModal:document.getElementById("openNote"),closeModal:document.getElementById("closeModal"),modal:document.getElementById("modalNewCard"),modalNoteId:document.getElementById("modalNoteId"),modalNoteTitle:document.getElementById("modalNoteTitle"),modalNoteDescription:document.getElementById("modalNoteDescription"),modalNoteColor:document.getElementById("modalNoteColor"),addNewNote:document.getElementById("addNewNote"),resetModalNote:document.getElementById("resetModal")},r=function(t){s.notesBox.innerHTML="",t.forEach(function(t){var e='<div class="column is-3-desktop is-4-tablet is-6-mobile" id="'.concat(t.id,'">\n      <div class="card ').concat(t.color,'" >\n      <header class="card-header">\n      <p class="card-header-title" >').concat(t.title,'</p>\n      <span class="icon icon--rotate ').concat(t.isPined?"icon--rotatePined":"icon--rotate",'" >\n      <i class="fas fa-thumbtack" id="pinButton" data-id="').concat(t.id,'"></i>\n      </span>\n      <span class="icon" >\n      <i class="fas fa-times-circle has-text-danger" id="deleteButton" data-id="').concat(t.id,'"></i>\n      </span>\n      </header>\n      <div class="card-content">\n      <div class="content" >').concat(t.description,'</div>\n      </div>\n      <footer class="card-footer ">\n      <span class="card__data  card-footer-item " id="noteDate">').concat(t.date,"</span>\n      </footer>\n      </div>\n      </div>");s.notesBox.innerHTML+=e})};function l(t){r(t)}function f(){s.modal.classList.toggle("is-active"),s.addNewNote.textContent="Add",s.modalNoteTitle.value="",s.modalNoteDescription.value="",s.modalNoteColor.options[0].selected=!0}function d(){return{id:s.modalNoteId.value,title:s.modalNoteTitle.value||"Title",description:s.modalNoteDescription.value||"Description",color:s.modalNoteColor.value}}s.openModal.addEventListener("click",f),s.closeModal.addEventListener("click",f),s.addNewNote.addEventListener("click",function(t){t.preventDefault();var e=u(),n=s.addNewNote.textContent;if("Add"===n){console.log("add");var o=d();!function(t){var e=t.title,n=t.description,o=t.color,r="item-".concat(a.notesAmount);switch(o){case"Yellow":o="has-background-warning";break;case"Gray":o="has-background-grey-lighter";break;case"Blue":o="has-background-primary";break;case"Green":o="has-background-success";break;default:o="has-background-warning"}var i=new c(r,e,n,o);a.casualNotes.push(i),console.log(i),a.notesAmount++}(o),l(e),f()}else if("Update"===n){console.log("update");var r=d();i=r,console.log(i),a.casualNotes.forEach(function(t){if(t.id==i.id){switch(t.title=i.title,t.description=i.description,i.color){case"Yellow":t.color="has-background-warning";break;case"Gray":t.color="has-background-grey-lighter";break;case"Blue":t.color="has-background-primary";break;case"Green":t.color="has-background-success";break;default:t.color="has-background-warning"}t.date=(new Date).toLocaleDateString()}}),l(e),f()}var i}),s.resetModalNote.addEventListener("click",function(){s.modalNoteTitle.value="",s.modalNoteDescription.value="",s.modalNoteColor.options[0].selected=!0}),document.body.addEventListener("click",function(t){var e,n,o,r;"deleteButton"===t.target.id?function(t){t.preventDefault();var e=t.target.closest("#".concat(t.target.dataset.id));r=e,console.log(r),a.casualNotes.forEach(function(t,e){t.id===r.id&&a.casualNotes.splice(e,1)}),n=e,o="#".concat(n.id),document.querySelector(o).remove();var n,o;var r}(t):"pinButton"===t.target.id?(function(e){a.casualNotes.forEach(function(t){t.id===e.id&&(t.isPined=!t.isPined)});var t=a.casualNotes.filter(function(t){return!0===t.isPined}),n=a.casualNotes.filter(function(t){return 1!=t.isPined});a.casualNotes=t.concat(n)}((r=t).target.closest("#".concat(r.target.dataset.id))),l(u())):t.target.closest(".card")&&(e=t.target.closest(".column").id,o=e,n=a.casualNotes.filter(function(t){return t.id===o})[0],f(),s.addNewNote.textContent="Update",function(t){switch(s.modalNoteId.value=t.id,s.modalNoteTitle.value=t.title,s.modalNoteDescription.value=t.description,t.color){case"has-background-warning":s.modalNoteColor.options[0].selected=!0;break;case"has-background-grey-lighter":s.modalNoteColor.options[1].selected=!0;break;case"has-background-success":s.modalNoteColor.options[2].selected=!0;break;case"has-background-primary":s.modalNoteColor.options[3].selected=!0;break;default:s.modalNoteColor.options[0].selected=!0}}(n))})}]);