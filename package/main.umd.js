!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.friendly=e():t.friendly=e()}(self,(function(){return(()=>{var t={147:(t,e,s)=>{t.exports=s(949)},242:(t,e,s)=>{"use strict";var i=s(184),a=s(183),r=s(694),n=s(859),o=s(629),h=s(104),c=s(26),u=s(368);t.exports=function(t){return new Promise((function(e,s){var l=t.data,d=t.headers;i.isFormData(l)&&delete d["Content-Type"];var f=new XMLHttpRequest;if(t.auth){var p=t.auth.username||"",v=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";d.Authorization="Basic "+btoa(p+":"+v)}var g=o(t.baseURL,t.url);if(f.open(t.method.toUpperCase(),n(g,t.params,t.paramsSerializer),!0),f.timeout=t.timeout,f.onreadystatechange=function(){if(f&&4===f.readyState&&(0!==f.status||f.responseURL&&0===f.responseURL.indexOf("file:"))){var i="getAllResponseHeaders"in f?h(f.getAllResponseHeaders()):null,r={data:t.responseType&&"text"!==t.responseType?f.response:f.responseText,status:f.status,statusText:f.statusText,headers:i,config:t,request:f};a(e,s,r),f=null}},f.onabort=function(){f&&(s(u("Request aborted",t,"ECONNABORTED",f)),f=null)},f.onerror=function(){s(u("Network Error",t,null,f)),f=null},f.ontimeout=function(){var e="timeout of "+t.timeout+"ms exceeded";t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),s(u(e,t,"ECONNABORTED",f)),f=null},i.isStandardBrowserEnv()){var m=(t.withCredentials||c(g))&&t.xsrfCookieName?r.read(t.xsrfCookieName):void 0;m&&(d[t.xsrfHeaderName]=m)}if("setRequestHeader"in f&&i.forEach(d,(function(t,e){void 0===l&&"content-type"===e.toLowerCase()?delete d[e]:f.setRequestHeader(e,t)})),i.isUndefined(t.withCredentials)||(f.withCredentials=!!t.withCredentials),t.responseType)try{f.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&f.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&f.upload&&f.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then((function(t){f&&(f.abort(),s(t),f=null)})),l||(l=null),f.send(l)}))}},949:(t,e,s)=>{"use strict";var i=s(184),a=s(76),r=s(596),n=s(227);function o(t){var e=new r(t),s=a(r.prototype.request,e);return i.extend(s,r.prototype,e),i.extend(s,e),s}var h=o(s(221));h.Axios=r,h.create=function(t){return o(n(h.defaults,t))},h.Cancel=s(313),h.CancelToken=s(15),h.isCancel=s(207),h.all=function(t){return Promise.all(t)},h.spread=s(232),h.isAxiosError=s(782),t.exports=h,t.exports.default=h},313:t=>{"use strict";function e(t){this.message=t}e.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},e.prototype.__CANCEL__=!0,t.exports=e},15:(t,e,s)=>{"use strict";var i=s(313);function a(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var s=this;t((function(t){s.reason||(s.reason=new i(t),e(s.reason))}))}a.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},a.source=function(){var t;return{token:new a((function(e){t=e})),cancel:t}},t.exports=a},207:t=>{"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},596:(t,e,s)=>{"use strict";var i=s(184),a=s(859),r=s(159),n=s(755),o=s(227);function h(t){this.defaults=t,this.interceptors={request:new r,response:new r}}h.prototype.request=function(t){"string"==typeof t?(t=arguments[1]||{}).url=arguments[0]:t=t||{},(t=o(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var e=[n,void 0],s=Promise.resolve(t);for(this.interceptors.request.forEach((function(t){e.unshift(t.fulfilled,t.rejected)})),this.interceptors.response.forEach((function(t){e.push(t.fulfilled,t.rejected)}));e.length;)s=s.then(e.shift(),e.shift());return s},h.prototype.getUri=function(t){return t=o(this.defaults,t),a(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},i.forEach(["delete","get","head","options"],(function(t){h.prototype[t]=function(e,s){return this.request(o(s||{},{method:t,url:e,data:(s||{}).data}))}})),i.forEach(["post","put","patch"],(function(t){h.prototype[t]=function(e,s,i){return this.request(o(i||{},{method:t,url:e,data:s}))}})),t.exports=h},159:(t,e,s)=>{"use strict";var i=s(184);function a(){this.handlers=[]}a.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},a.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},a.prototype.forEach=function(t){i.forEach(this.handlers,(function(e){null!==e&&t(e)}))},t.exports=a},629:(t,e,s)=>{"use strict";var i=s(867),a=s(677);t.exports=function(t,e){return t&&!i(e)?a(t,e):e}},368:(t,e,s)=>{"use strict";var i=s(205);t.exports=function(t,e,s,a,r){var n=new Error(t);return i(n,e,s,a,r)}},755:(t,e,s)=>{"use strict";var i=s(184),a=s(154),r=s(207),n=s(221);function o(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){return o(t),t.headers=t.headers||{},t.data=a(t.data,t.headers,t.transformRequest),t.headers=i.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),i.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]})),(t.adapter||n.adapter)(t).then((function(e){return o(t),e.data=a(e.data,e.headers,t.transformResponse),e}),(function(e){return r(e)||(o(t),e&&e.response&&(e.response.data=a(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))}},205:t=>{"use strict";t.exports=function(t,e,s,i,a){return t.config=e,s&&(t.code=s),t.request=i,t.response=a,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},t}},227:(t,e,s)=>{"use strict";var i=s(184);t.exports=function(t,e){e=e||{};var s={},a=["url","method","data"],r=["headers","auth","proxy","params"],n=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],o=["validateStatus"];function h(t,e){return i.isPlainObject(t)&&i.isPlainObject(e)?i.merge(t,e):i.isPlainObject(e)?i.merge({},e):i.isArray(e)?e.slice():e}function c(a){i.isUndefined(e[a])?i.isUndefined(t[a])||(s[a]=h(void 0,t[a])):s[a]=h(t[a],e[a])}i.forEach(a,(function(t){i.isUndefined(e[t])||(s[t]=h(void 0,e[t]))})),i.forEach(r,c),i.forEach(n,(function(a){i.isUndefined(e[a])?i.isUndefined(t[a])||(s[a]=h(void 0,t[a])):s[a]=h(void 0,e[a])})),i.forEach(o,(function(i){i in e?s[i]=h(t[i],e[i]):i in t&&(s[i]=h(void 0,t[i]))}));var u=a.concat(r).concat(n).concat(o),l=Object.keys(t).concat(Object.keys(e)).filter((function(t){return-1===u.indexOf(t)}));return i.forEach(l,c),s}},183:(t,e,s)=>{"use strict";var i=s(368);t.exports=function(t,e,s){var a=s.config.validateStatus;s.status&&a&&!a(s.status)?e(i("Request failed with status code "+s.status,s.config,null,s.request,s)):t(s)}},154:(t,e,s)=>{"use strict";var i=s(184);t.exports=function(t,e,s){return i.forEach(s,(function(s){t=s(t,e)})),t}},221:(t,e,s)=>{"use strict";var i=s(184),a=s(890),r={"Content-Type":"application/x-www-form-urlencoded"};function n(t,e){!i.isUndefined(t)&&i.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var o,h={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(o=s(242)),o),transformRequest:[function(t,e){return a(e,"Accept"),a(e,"Content-Type"),i.isFormData(t)||i.isArrayBuffer(t)||i.isBuffer(t)||i.isStream(t)||i.isFile(t)||i.isBlob(t)?t:i.isArrayBufferView(t)?t.buffer:i.isURLSearchParams(t)?(n(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):i.isObject(t)?(n(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};i.forEach(["delete","get","head"],(function(t){h.headers[t]={}})),i.forEach(["post","put","patch"],(function(t){h.headers[t]=i.merge(r)})),t.exports=h},76:t=>{"use strict";t.exports=function(t,e){return function(){for(var s=new Array(arguments.length),i=0;i<s.length;i++)s[i]=arguments[i];return t.apply(e,s)}}},859:(t,e,s)=>{"use strict";var i=s(184);function a(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,s){if(!e)return t;var r;if(s)r=s(e);else if(i.isURLSearchParams(e))r=e.toString();else{var n=[];i.forEach(e,(function(t,e){null!=t&&(i.isArray(t)?e+="[]":t=[t],i.forEach(t,(function(t){i.isDate(t)?t=t.toISOString():i.isObject(t)&&(t=JSON.stringify(t)),n.push(a(e)+"="+a(t))})))})),r=n.join("&")}if(r){var o=t.indexOf("#");-1!==o&&(t=t.slice(0,o)),t+=(-1===t.indexOf("?")?"?":"&")+r}return t}},677:t=>{"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},694:(t,e,s)=>{"use strict";var i=s(184);t.exports=i.isStandardBrowserEnv()?{write:function(t,e,s,a,r,n){var o=[];o.push(t+"="+encodeURIComponent(e)),i.isNumber(s)&&o.push("expires="+new Date(s).toGMTString()),i.isString(a)&&o.push("path="+a),i.isString(r)&&o.push("domain="+r),!0===n&&o.push("secure"),document.cookie=o.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},867:t=>{"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},782:t=>{"use strict";t.exports=function(t){return"object"==typeof t&&!0===t.isAxiosError}},26:(t,e,s)=>{"use strict";var i=s(184);t.exports=i.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),s=document.createElement("a");function a(t){var i=t;return e&&(s.setAttribute("href",i),i=s.href),s.setAttribute("href",i),{href:s.href,protocol:s.protocol?s.protocol.replace(/:$/,""):"",host:s.host,search:s.search?s.search.replace(/^\?/,""):"",hash:s.hash?s.hash.replace(/^#/,""):"",hostname:s.hostname,port:s.port,pathname:"/"===s.pathname.charAt(0)?s.pathname:"/"+s.pathname}}return t=a(window.location.href),function(e){var s=i.isString(e)?a(e):e;return s.protocol===t.protocol&&s.host===t.host}}():function(){return!0}},890:(t,e,s)=>{"use strict";var i=s(184);t.exports=function(t,e){i.forEach(t,(function(s,i){i!==e&&i.toUpperCase()===e.toUpperCase()&&(t[e]=s,delete t[i])}))}},104:(t,e,s)=>{"use strict";var i=s(184),a=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,s,r,n={};return t?(i.forEach(t.split("\n"),(function(t){if(r=t.indexOf(":"),e=i.trim(t.substr(0,r)).toLowerCase(),s=i.trim(t.substr(r+1)),e){if(n[e]&&a.indexOf(e)>=0)return;n[e]="set-cookie"===e?(n[e]?n[e]:[]).concat([s]):n[e]?n[e]+", "+s:s}})),n):n}},232:t=>{"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},184:(t,e,s)=>{"use strict";var i=s(76),a=Object.prototype.toString;function r(t){return"[object Array]"===a.call(t)}function n(t){return void 0===t}function o(t){return null!==t&&"object"==typeof t}function h(t){if("[object Object]"!==a.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype}function c(t){return"[object Function]"===a.call(t)}function u(t,e){if(null!=t)if("object"!=typeof t&&(t=[t]),r(t))for(var s=0,i=t.length;s<i;s++)e.call(null,t[s],s,t);else for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.call(null,t[a],a,t)}t.exports={isArray:r,isArrayBuffer:function(t){return"[object ArrayBuffer]"===a.call(t)},isBuffer:function(t){return null!==t&&!n(t)&&null!==t.constructor&&!n(t.constructor)&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)},isFormData:function(t){return"undefined"!=typeof FormData&&t instanceof FormData},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:o,isPlainObject:h,isUndefined:n,isDate:function(t){return"[object Date]"===a.call(t)},isFile:function(t){return"[object File]"===a.call(t)},isBlob:function(t){return"[object Blob]"===a.call(t)},isFunction:c,isStream:function(t){return o(t)&&c(t.pipe)},isURLSearchParams:function(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:u,merge:function t(){var e={};function s(s,i){h(e[i])&&h(s)?e[i]=t(e[i],s):h(s)?e[i]=t({},s):r(s)?e[i]=s.slice():e[i]=s}for(var i=0,a=arguments.length;i<a;i++)u(arguments[i],s);return e},extend:function(t,e,s){return u(e,(function(e,a){t[a]=s&&"function"==typeof e?i(e,s):e})),t},trim:function(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(t){return 65279===t.charCodeAt(0)&&(t=t.slice(1)),t}}},877:(t,e,s)=>{var i=s(570),a=s(171),r=a;r.v1=i,r.v4=a,t.exports=r},327:t=>{for(var e=[],s=0;s<256;++s)e[s]=(s+256).toString(16).substr(1);t.exports=function(t,s){var i=s||0,a=e;return[a[t[i++]],a[t[i++]],a[t[i++]],a[t[i++]],"-",a[t[i++]],a[t[i++]],"-",a[t[i++]],a[t[i++]],"-",a[t[i++]],a[t[i++]],"-",a[t[i++]],a[t[i++]],a[t[i++]],a[t[i++]],a[t[i++]],a[t[i++]]].join("")}},217:t=>{var e="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(e){var s=new Uint8Array(16);t.exports=function(){return e(s),s}}else{var i=new Array(16);t.exports=function(){for(var t,e=0;e<16;e++)0==(3&e)&&(t=4294967296*Math.random()),i[e]=t>>>((3&e)<<3)&255;return i}}},570:(t,e,s)=>{var i,a,r=s(217),n=s(327),o=0,h=0;t.exports=function(t,e,s){var c=e&&s||0,u=e||[],l=(t=t||{}).node||i,d=void 0!==t.clockseq?t.clockseq:a;if(null==l||null==d){var f=r();null==l&&(l=i=[1|f[0],f[1],f[2],f[3],f[4],f[5]]),null==d&&(d=a=16383&(f[6]<<8|f[7]))}var p=void 0!==t.msecs?t.msecs:(new Date).getTime(),v=void 0!==t.nsecs?t.nsecs:h+1,g=p-o+(v-h)/1e4;if(g<0&&void 0===t.clockseq&&(d=d+1&16383),(g<0||p>o)&&void 0===t.nsecs&&(v=0),v>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");o=p,h=v,a=d;var m=(1e4*(268435455&(p+=122192928e5))+v)%4294967296;u[c++]=m>>>24&255,u[c++]=m>>>16&255,u[c++]=m>>>8&255,u[c++]=255&m;var y=p/4294967296*1e4&268435455;u[c++]=y>>>8&255,u[c++]=255&y,u[c++]=y>>>24&15|16,u[c++]=y>>>16&255,u[c++]=d>>>8|128,u[c++]=255&d;for(var w=0;w<6;++w)u[c+w]=l[w];return e||n(u)}},171:(t,e,s)=>{var i=s(217),a=s(327);t.exports=function(t,e,s){var r=e&&s||0;"string"==typeof t&&(e="binary"===t?new Array(16):null,t=null);var n=(t=t||{}).random||(t.rng||i)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,e)for(var o=0;o<16;++o)e[r+o]=n[o];return e||a(n)}}},e={};function s(i){var a=e[i];if(void 0!==a)return a.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,s),r.exports}s.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return s.d(e,{a:e}),e},s.d=(t,e)=>{for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),s.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var i={};return(()=>{"use strict";s.r(i),s.d(i,{GamePadFactory:()=>j});var t={};s.r(t),s.d(t,{keyup:()=>k,switchStatus:()=>S,updateDB:()=>A,walkDown:()=>O,walkLeft:()=>_,walkRight:()=>T,walkUp:()=>E});class e{constructor(){this.subscribers={}}subscribe(t,e){this.subscribers[t]||(this.subscribers[t]=[]),this.subscribers[t].push(e)}unsubscribe(t,e){if(!t)return!1;if(!this.subscribers[t])return!0;if(e){var s=this.subscribers[t].indexOf(e);return s>0&&(this.subscribers[t]=this.subscribers[t].splice(s,1),!0)}return this.subscribers[t]=[],!0}trigger(t,e){this.subscribers[t]&&this.subscribers[t].map((function(t){t(e)}))}}const a="CONNECTED";var r=s(147),n=s.n(r);class o{constructor(t){this.loadQueue=[],this.status="INIT",this.dbName="$MPANDA.GAME.ASSETS",this.dbVersion=1,this.tableName=null,this.CanvasManager=t}async init(){var t=this.open(),e=this;return t.onsuccess=async t=>{this.status=a,e.CanvasManager.preloadSprints()},t.onupgradeneeded=async function(t){if(console.log("Upgraded!"),!t.target.result.objectStoreNames.contains("Frames")){var s=t.target.result.createObjectStore("Frames",{keyPath:"id",autoIncrement:!0});s.createIndex("ID","id",{unique:!0}),s.createIndex("Base64","base64",{unique:!1})}await e.download(),e.CanvasManager.preloadSprints(),e.status="UPGRADED"},this}async download(){this.status="DOWNLOADING",await n()({url:"/api/v1/game/init",method:"post"}).then((async t=>{const{data:e}=t;this.setTableName("Frames");var s=e.Data;for(var i in s){var a={id:i,base64:s[i]};await this.add(a)}})),this.status=a}open(){return this.status="CONNECTING",window.indexedDB.open(this.dbName,this.dbVersion)}addToQueue(t,e){this.loadQueue.push({assets:t,path:e})}setTableName(t){this.tableName=t}async add(t){if(null===this.tableName)throw new Error("未设置查询表");var e=this.open(),s=this.tableName;e.onsuccess=function(e){var i=e.target.result.transaction([s],"readwrite").objectStore(s).add(t);i.onsuccess=function(t){},i.onerror=function(t){throw new Error(JSON.stringify(t))}}}async get(t,e){if(null===this.tableName)throw new Error("未设置查询表");var s=this.tableName;return new Promise(((i,a)=>{this.open().onsuccess=function(r){var n=r.target.result.transaction([s],"readwrite").objectStore(s);n.index(t);var o=n.get(e);o.onsuccess=function(s){s.target.result?i(s.target.result):a(`未获取到数据! index:${t}, value: ${e}`)},o.onerror=function(t){a(JSON.stringify(t))}}}))}async dropDB(){window.indexedDB.deleteDatabase(this.dbName)}}const h="$ws.event.newborn",c="$ws.event.update",u="$ws.event.update.users",l="$ws.event.leave",d="$ws.event.listen";class f{constructor({$event:t,data:e,from:s,to:i="ALL"}){this.$event=t,this.data=e,this.from=s,this.to=i}}const p={MAP:"MAP",CHARACTER:"CHARACTER",CURSOR:"CURSOR",ITEM:"ITEM",WINDOW:"WINDOW",MOB:"MOB",NPC:"NPC"};var v=s(877);class g{constructor(){this.img=null}}const m={Player:{INIT:"init",WALK_LEFT:"walk.left",WALK_RIGHT:"walk.right",STAND:"stand"}};class y{constructor(t){this._beforeInit(),this.id=t||(0,v.v4)(),this.name=this.constructor.name,this.type="",this.x=0,this.y=0,this.w=0,this.h=0,this.xv=0,this.yv=0,this.xa=0,this.ya=0,this.vector=[1,1],this.FramesDurationOfEachFrame=1,this.rotation=0,this.actionsFrames={},this.activeFrames=[],this.activeFrame={},this.framesCount=0,this.currentFrame=0,this._currentFrame=0,this._frameCounter=0,this._status=m[this.name]?m[this.name].INIT:null,this._sync_timer=null,this._sync_status="READY",this.debugMode=!1,Object.defineProperty(this,"status",{get:function(){return this._status},set:function(t){this.$emit("$event.emit.data",{status:t}),this._status=t}}),this.pause=!1,this.ctx=null,this.offscreenCanvas=null,this.offscreenCtx=null,this._CanvasManager=null,Object.defineProperty(this,"CanvasManager",{get:function(){return this._CanvasManager},set:function(t){this._CanvasManager||(this._beforeBind(),this._CanvasManager=t,this._CanvasManager.Player===this&&this.eventsLoop.length>0&&(this.eventsLoop.map((({$event:t,callback:e})=>this.on(t,e))),this.eventsLoop=[]),this.ctx=this._CanvasManager.ctx,this._preRender(),this._afterBind())}}),this.eventsLoop=[],this._init(),this._afterInit()}_generateOffscreenCanvas(){this.offscreenCanvas=window.document.createElement("canvas"),this.offscreenCanvas.height=this.CanvasManager.canvas.height,this.offscreenCanvas.width=this.CanvasManager.canvas.width,this.offscreenCtx=this.offscreenCanvas.getContext("2d")}_beforeInit(){this.beforeInit()}beforeInit(){}_init(){this.init(),this._load()}init(){}_load(){this.load()}load(){}_afterInit(){this.afterInit()}afterInit(){}_beforeBind(){this.beforeBind()}beforeBind(){}_afterBind(){this.afterBind()}afterBind(){}_preRender(){this.CanvasManager.preRenderSprints.push(this._loadImgs.bind(this))}async _loadImgs(){await this.loadActionImgs()}async loadActionImgs(){var t=m[this.name];for(var e in t){var s=t[e],i=`${this.type}.${this.name}.actions.${s}`;this.CanvasManager.AssetsManager.setTableName("Frames");var a=(await this.CanvasManager.AssetsManager.get("ID",i)).base64;this.actionsFrames[s]=a.map((t=>{var e=new g,s=new Image;return s.src=t,e.img=s,e}))}}_update(){this._beforeUpdate(),this._updating(),[p.CHARACTER,p.MOB,p.NPC].includes(this.type)&&this.IsPlayer()&&this._sync_to_all(),this._draw(),this._updated()}_beforeUpdate(){this.beforeUpdate()}beforeUpdate(){}_updating(){this.updating();var[t,e]=this.vector,s=this.xv=this.xv+this.xa,i=this.yv=this.yv+this.ya;s<=0&&(s=0,this.xa=0),i<=0&&(i=0,this.ya=0);const{viewX:a,viewY:r}=this.CanvasManager.Camera;this.x=this.x+s*t+a,this.y=this.y+i*e+r,this.IsPlayer()&&(this.CanvasManager.Camera.draw(this.ctx),this.CanvasManager.Camera.go())}IsPlayer(){return this.id===this.CanvasManager.Player.id}updating(){}_updated(){this.updated()}updated(){}getGapToMAP(){return{x:this.x-this.CanvasManager.MapManager.x,y:this.y-this.CanvasManager.MapManager.y}}_sync_to_all(){!this._sync_timer&&this.IsPlayer()&&this.CanvasManager.WSManager.ISCONNECTED&&"UPDATED"!=this._sync_status&&(this._sync_timer=setTimeout((()=>{var t={x:this.x,y:this.y,z:this.z,w:this.w,h:this.h,xv:this.xv,yv:this.yv,xa:this.xa,ya:this.ya,gap:this.getGapToMAP(),rotation:this.rotation,vector:this.vector,currentFrame:this.currentFrame,_status:this._status};this.CanvasManager.WSManager&&this.CanvasManager.WSManager.Send(new f({$event:c,data:t})),this._sync_timer=null}),10))}_draw(){this.activeFrame=null,this.activeFrames instanceof Array?this.activeFrame=this.activeFrames[this.currentFrame%this.activeFrames.length]:this.activeFrames instanceof Function&&(this.activeFrame=this.activeFrames),this.activeFrame instanceof g?(this.ctx.rotate(this.rotation*Math.PI/180),this._drawImage(this.activeFrame.img,0,0,this.activeFrame.img.width,this.activeFrame.img.height,this.x,this.y,this.w,this.h)):this.activeFrame instanceof Function&&this.activeFrame.bind(this)(this.ctx),this.draw_addition(),this.debugMode&&this.debug()}draw_addition(){}_drawImage(){arguments.length>0&&this.ctx.drawImage.apply(this.ctx,[...arguments])}draw(){}debug(){this.ctx.font="8px Verdana",this.ctx.fillStyle="#333",this.ctx.lineWidth=1;var t=null!==this.activeFrame&&null!==this.activeFrame.img?this.activeFrame.img.width:this.w,e=null!==this.activeFrame&&null!==this.activeFrame.img?this.activeFrame.img.height:this.h;this.ctx.strokeRect(this.x,this.y,t,e),this.ctx.fillText(`currentFrame:${this.currentFrame};x:${this.x};y:${this.y};w:${this.w};h:${this.h}`,this.x-this.w,this.y+this.h)}enableDebug(){this.debugMode=!0}disableDebug(){this.debugMode=!1}$emit(t,e,s){e.OriginId=this.id,e.TargetId=s||this.id,this.CanvasManager.broadcast(t,e)}on(t,e){this.CanvasManager?this.CanvasManager.Player===this&&this.CanvasManager.registerEvent(this,t,e):this.eventsLoop.push({$event:t,callback:e})}}class w extends y{constructor(t){super(t),this.type=p.CHARACTER,this._SaySomeThing=null,Object.defineProperty(this,"SaySomeThing",{get:()=>this._SaySomeThing,set:t=>{t!==this._SaySomeThing&&(clearTimeout(this.SaySomeThingTimer),this._SaySomeThing=t,this.SaySomeThingTimer=setTimeout((()=>{this.SaySomeThing=null,this.SaySomeThingTimer=null}),5e3))}}),this.SaySomeThingTimer=null}updating(){this.framesCount=this.actionsFrames[this.status]&&this.actionsFrames[this.status].length||1,this._frameCounter+=1,this.framesCount>this.CanvasManager.FPS?this.currentFrame=this._frameCounter%this.framesCount:this._frameCounter/this.FramesDurationOfEachFrame>1&&(this._currentFrame+=1,this._currentFrame=this._currentFrame%this.framesCount,this.currentFrame=this._currentFrame,this._frameCounter=0),this.activeFrames=this.actionsFrames[this.status]}draw_addition(){this.draw_word()}draw_word(){if(this.SaySomeThing){var{height:t,width:e}=this.meatureSize(this.SaySomeThing,15,15,15);this.drawRoundDialog(this.x+this.w,this.y,e,t,12,10),this.ctx.font="15px Verdana",this.ctx.fillStyle="#333",this.writeTextOnCanvas(15,15,this.x+this.w+20,this.y+10,this.SaySomeThing),this.CanvasManager.Player.id===this.id&&this.CanvasManager.WSManager.Send(new f({$event:d,data:{words:this.SaySomeThing}}))}}drawRoundDialog(t,e,s,i,a,r){return s<2*a&&(a=s/2),i<2*a&&(a=i/2),this.ctx.beginPath(),this.ctx.moveTo(t+a,e),this.ctx.arcTo(t+s,e,t+s,e+i,a),this.ctx.arcTo(t+s,e+i,t,e+i,a),this.ctx.arcTo(t,e+i,t,e,a),this.ctx.lineTo(t,e+i/2+r),this.ctx.lineTo(t-r,e+i/2),this.ctx.lineTo(t,e+i/2-r),this.ctx.lineTo(t,e+a),this.ctx.arcTo(t,e,t+s,e,a),this.ctx.closePath(),this.ctx.fillStyle="#eee",this.ctx.fill(),this}writeTextOnCanvas(t,e,s,i,a){for(var r=1;this.getTrueLength(a)>0;r++){var n=this.cutString(a,e);this.ctx.fillText(a.substr(0,n).replace(/^\s+|\s+$/,""),s,r*t+i),a=a.substr(n)}}getTrueLength(t){for(var e=t.length,s=0,i=0;i<e;i++)t.charCodeAt(i)>128?s+=2:s+=1;return s}cutString(t,e){for(var s=t.length,i=s,a=0,r=0;r<s;r++)if(t.charCodeAt(r)>128){if(!(a+2<e)){i=r;break}a+=2}else{if(!(a+1<e)){i=r;break}a+=1}return i}meatureSize(t,e,s,i){var a=this.getTrueLength(t);return{height:(e+s)*Math.ceil(a/i),width:e*i}}}class b extends w{constructor(t){super(t)}init(){this.on("$keyup",(({value:t})=>{switch(t){case"KeyA":case"KeyD":case"KeyS":case"KeyW":this.status="init",this.xa=-.5,this.ya=-.5}})),this.on("$walk.left",(t=>{this.status="walk.left",this.xa=0,this.xv=4,this.vector[0]=-1})),this.on("$walk.right",(t=>{this.status="walk.right",this.xa=0,this.xv=4,this.vector[0]=1})),this.on("$walk.up",(t=>{this.status="walk.right",this.ya=0,this.yv=4,this.vector[1]=-1})),this.on("$walk.down",(t=>{this.status="walk.right",this.ya=0,this.yv=4,this.vector[1]=1})),this.w=80,this.h=110,this.FramesDurationOfEachFrame=12,this.enableDebug()}}class x{constructor(t){this.WSManager=t}handleEvents(t){try{var e=JSON.parse(t);const{$event:a,data:r,from:n}=e;switch(a){case h:var s=new b(n);this.WSManager.CanvasManager.addInstance(s),this.WSManager.Send(new f({$event:u,data:{id:this.WSManager.CanvasManager.Player.id}}));break;case c:this.WSManager.CanvasManager.sprints.filter((t=>t.id===n)).map((t=>{const{x:e,y:s,z:i,w:a,h:n,xv:o,yv:h,zv:c,xa:u,ya:l,za:d,gap:f,rotation:p,vector:v,currentFrame:g,_status:m}=r;var{x:y,y:w}=this.WSManager.CanvasManager.Player,{x:b,y:x}=this.WSManager.CanvasManager.Player.getGapToMAP(),{x:C,y:M}=f;t.x=C-b+y,t.y=M-x+w,t.z=i,t.w=a,t.h=n,t.xv=o,t.yv=h,t.zv=c,t.xa=u,t.ya=l,t.za=d,t.rotation=p,t.vector=v,t.currentFrame=g,t._status=m}));break;case u:if(n&&n!==this.WSManager.CanvasManager.Player.id){var i=new b(n);this.WSManager.CanvasManager.addInstance(i)}break;case l:this.WSManager.CanvasManager.sprints=this.WSManager.CanvasManager.sprints.filter((t=>t.id!==n));break;case d:this.WSManager.CanvasManager.sprints.filter((t=>t.id===n)).map((t=>{t.SaySomeThing=r.words}))}}catch(e){console.log("err",e)}}}class C{constructor(){this.WSUrl=`${"https:"===location.protocol?"wss":"ws"}://${location.hostname}:8111`,this.WS=null,this.CanvasManager=null,this.ISCONNECTED=!1,this.WSEventsManager=new x(this)}Init(t){this.WS.onmessage=t=>{const{data:e}=t;this.WSEventsManager.handleEvents(e)},this.WS.onclose=()=>{this.Send(new f({$event:l}))},this.WS.onopen=()=>{this.ISCONNECTED=!0,this.Send(new f({$event:h}))},this.CanvasManager=t||this.CanvasManager}Connect(t){try{this.WS=new WebSocket(this.WSUrl),this.Init(t)}catch(t){console.log("无法连接!"),this.WS.close()}}Send(t){t.from=this.CanvasManager.Player.id;try{this.ISCONNECTED&&this.WS.send(JSON.stringify(t))}catch(t){this.ISCONNECTED=!1}}Close(){this.WS.close(),this.ISCONNECTED=!1,this.WS=null}}const M={Space:"switchStatus",KeyA:"walkLeft",KeyD:"walkRight",KeyW:"walkUp",KeyS:"walkDown",KeyU:"updateDB"};function S(){this.pause?this.pause=!1:this.pause=!0}function _(){this.broadcast("$walk.left")}function T(){this.broadcast("$walk.right")}function E(){this.broadcast("$walk.up")}function O(){this.broadcast("$walk.down")}function k(){}function A(){this.AssetsManager.dropDB(),location.reload()}class P{constructor(e){this.document=e||window.document,this.keyMapping=M,this.eventsPool=t,this.CanvasManager=null,this._keydown=t=>{this.CanvasManager.Debug&&console.log("Key has been pressed:",t.code.trim()),this.invoke(this.keyMapping[t.code.trim()])},this._keyup=t=>{this.CanvasManager.Debug&&console.log("Key up:",t.code.trim()),this.CanvasManager.broadcast("$keyup",t.code.trim())}}init(t){this.CanvasManager=t,this.reloadKeyMapping(),this.initKeyboardEvents()}initKeyboardEvents(){return this.document.addEventListener("keydown",this._keydown,!0),this.document.addEventListener("keyup",this._keyup,!0),this}mappingKey(t,e){for(var s in this.keyMapping)this.keyMapping[s]===e&&(this.keyMapping[s]=null);return this.keyMapping[t]=e,this}reloadKeyMapping(){for(var t in this.keyMapping)this.mappingKey(t,this.keyMapping[t]);return this}removeKeyboardEvents(){return this.document.removeEventListener("keydown",this._keydown),this.document.removeEventListener("keyup",this._keyup),this}invoke(t,...e){return t&&this.CanvasManager.Debug&&console.log("CanvasManager.invoke:",t),this.CanvasManager.PauseControls||this.eventsPool[t]&&"function"==typeof this.eventsPool[t]&&this.eventsPool[t].call(this.CanvasManager,{OriginId:this.id,TargetId:this.id,...e}),this}}class F{constructor(t,e,s,i){this.viewX=t,this.viewY=e,this.x=t,this.y=e,this.viewW=s,this.viewH=i,this.followObj=null}follow(t){this.followObj=t}goForward(){}go(){var{x:t,y:e,w:s,h:i}=this.followObj.CanvasManager.MapManager,a=(this.viewW-this.followObj.w)/2,r=(this.viewH-this.followObj.h)/3*2,{x:n,y:o}=this.CameraToCanvasMap(this.viewX,this.viewY);n<=0&&this.followObj.x<=this.viewW/2||n+this.viewW>=s&&this.followObj.x>=(this.viewW-this.followObj.w)/2?this.viewX=0:this.viewX=-this.followObj.x+a,o<0?(this.viewY=0,this.followObj.y>r&&(this.viewY=-this.followObj.y+r)):o+this.viewH>i?(this.viewY=0,this.followObj.y<r&&(this.viewY=-this.followObj.y+r)):this.viewY=-this.followObj.y+r}CameraToCanvasMap(t,e){var{x:s,y:i}=this.followObj.CanvasManager.MapManager;return{x:t-s,y:e-i}}CanvasToCameraMap(t,e){var{x:s,y:i}=this.followObj.CanvasManager.MapManager;return{viewX:t+s,viewY:e+i}}Obj2Camera(t,e){return this.CanvasToCameraMap(t,e)}Camera2Obj(t,e){return this.CameraToCanvasMap(t,e)}draw(t){t.strokeStyle="black",t.lineWidth=5,t.strokeRect(this.x,this.y,this.viewW,this.viewH),t.lineWidth=1,t.font="8px Verdana",t.fillStyle="#333";var{x:e,y:s}=this.CameraToCanvasMap(this.viewX,this.viewY);t.strokeText(`\n    this.viewW:${this.viewW},\n    this.viewH:${this.viewH},\n    this.viewX:${this.viewX},\n    this.viewY:${this.viewY},\n    X2Map:${e}, \n    Y2Map:${s}`,100,this.followObj.y+this.followObj.h/2)}}class R extends y{constructor(t){super(t),this.type=p.MAP,this.gravity=.9,this.mapFrames=[]}async _loadImgs(){this.activeFrames=t=>{t.fillStyle="#ddd",t.fillRect(this.x,this.y,this.w,this.h)}}updating(){}}class N{constructor(t){this.canvas=t,this.ctx=t.getContext("2d"),this.messageBus=[],this.sprints=[],this.preRenderSprints=[],this.AnimationFrameTimer=null,this.pause=!1,this.devicePixelRatio=window.devicePixelRatio||1,this.backingStoreRatio=this.ctx.webkitBackingStorePixelRatio||this.ctx.mozBackingStorePixelRatio||this.ctx.msBackingStorePixelRatio||this.ctx.oBackingStorePixelRatio||this.ctx.backingStorePixelRatio||1,this.ratio=this.devicePixelRatio/this.backingStoreRatio,this.FPS=120,this.EventManager=new e,this.AssetsManager=null,this.KeyboardManager=new P,this.WSManager=null,this.Debug=!1,this.Player=null,this.Camera=null,this.MapManager=null,this.PauseControls=!1}async init({width:t=document.documentElement.clientWidth,height:e=500,debug:s=!1}){return this.Debug=s,this._init_Canvas(t,e),this._init_EventManager(),this._init_KeyboardManager(),this._init_Cursor(),await this._init_AssetsManager(),this._init_WSManager(),this}_init_Canvas(t,e){this.canvas.height=e*this.ratio,this.canvas.width=t*this.ratio,this.canvas.style.height=e+"px",this.canvas.style.width=t+"px",this.ctx.scale(this.ratio,this.ratio)}_init_Camera(){this.Camera=new F(0,0,this.canvas.width,this.canvas.height),this.Camera.follow(this.Player)}_init_EventManager(){this.EventManager||(this.EventManager=new e)}_init_KeyboardManager(){this.KeyboardManager||(this.KeyboardManager=new P),this.KeyboardManager.init(this)}async _init_AssetsManager(){this.AssetsManager=new o(this),await this.AssetsManager.init(),this.preloadSprints()}_init_WSManager(){this.WSManager=new C,this.WSManager.Connect(this)}start(){return this.AnimationFrameTimer=this.draw(),this}_init_Cursor(){this.canvas.addEventListener("mousemove",(t=>{t.preventDefault()}))}preloadSprints(){this.preRenderSprints.map((t=>t())),this._init_Camera()}draw(){setTimeout((()=>{var t=window.requestAnimationFrame(this.draw.bind(this));this.AnimationFrameTimer||(this.AnimationFrameTimer=t),this.pause||(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.sprints.map((t=>{t._update()})))}),1e3/this.FPS)}loadMap(t){t instanceof R&&(this.MapManager=t,t.CanvasManager=this,this.sprints.unshift(t),this.preloadSprints(),console.log("Loaded Map"))}addInstance(t){return t.CanvasManager=this,this.sprints.find((e=>e.id===t.id))||(this.sprints.push(t),this.preloadSprints()),this}removeInstance(t){return this.sprints=this.sprints.filter((e=>e.id===t)),this}registerEvent(t,e,s){return this.EventManager.subscribe(e,s.bind(t)),this}broadcast(t,e){return e||(e={}),"string"==typeof e&&(e={value:e}),e.OriginId=this.Player.id,e.TargetId=this.Player.id,this.EventManager.trigger(t,e),this}drop(){this.pause=!0,this.canvas.remove(),this.WSManager&&this.WSManager.Close(),this.WSManager=null,this.KeyboardManager&&this.KeyboardManager.removeKeyboardEvents(),this.KeyboardManager=null,this.AssetsManager=null}}const j={CanvasManager:null,getCanvasManager:function(t){return this.CanvasManager||(this.CanvasManager=new N(t)),this.CanvasManager}}})(),i})()}));