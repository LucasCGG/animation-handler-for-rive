(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["rive"] = factory();
	else
		root["rive"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

var Rive = (() => {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  
  return (
function(moduleArg = {}) {

var h=moduleArg,aa,ba;h.ready=new Promise((b,a)=>{aa=b;ba=a});
function ca(){function b(m){const l=d;c=a=0;d=new Map;l.forEach(n=>{try{n(m)}catch(k){console.error(k)}});this.hb();e&&e.Fb()}let a=0,c=0,d=new Map,e=null,g=null;this.requestAnimationFrame=function(m){a||(a=requestAnimationFrame(b.bind(this)));const l=++c;d.set(l,m);return l};this.cancelAnimationFrame=function(m){d.delete(m);a&&0==d.size&&(cancelAnimationFrame(a),a=0)};this.Db=function(m){g&&(document.body.remove(g),g=null);m||(g=document.createElement("div"),g.style.backgroundColor="black",g.style.position=
"fixed",g.style.right=0,g.style.top=0,g.style.color="white",g.style.padding="4px",g.innerHTML="RIVE FPS",m=function(l){g.innerHTML="RIVE FPS "+l.toFixed(1)},document.body.appendChild(g));e=new function(){let l=0,n=0;this.Fb=function(){var k=performance.now();n?(++l,k-=n,1E3<k&&(m(1E3*l/k),l=n=0)):(n=k,l=0)}}};this.Ab=function(){g&&(document.body.remove(g),g=null);e=null};this.hb=function(){}}
function da(b){console.assert(!0);const a=new Map;let c=-Infinity;this.push=function(d){d=d+((1<<b)-1)>>b;a.has(d)&&clearTimeout(a.get(d));a.set(d,setTimeout(function(){a.delete(d);0==a.length?c=-Infinity:d==c&&(c=Math.max(...a.keys()),console.assert(c<d))},1E3));c=Math.max(d,c);return c<<b}}
const ea="createConicGradient createImageData createLinearGradient createPattern createRadialGradient getContextAttributes getImageData getLineDash getTransform isContextLost isPointInPath isPointInStroke measureText".split(" "),fa=new function(){function b(){if(!a){var f=document.createElement("canvas"),r={alpha:1,depth:0,stencil:0,antialias:0,premultipliedAlpha:1,preserveDrawingBuffer:0,preferLowPowerToHighPerformance:0,failIfMajorPerformanceCaveat:0,enableExtensionsByDefault:1,explicitSwapControl:1,
renderViaOffscreenBackBuffer:1};let q;if(/iPhone|iPad|iPod/i.test(navigator.userAgent)){if(q=f.getContext("webgl",r),c=1,!q)return console.log("No WebGL support. Image mesh will not be drawn."),!1}else if(q=f.getContext("webgl2",r))c=2;else if(q=f.getContext("webgl",r))c=1;else return console.log("No WebGL support. Image mesh will not be drawn."),!1;q=new Proxy(q,{get(D,u){if(D.isContextLost()){if(n||(console.error("Cannot render the mesh because the GL Context was lost. Tried to invoke ",u),n=!0),
"function"===typeof D[u])return function(){}}else return"function"===typeof D[u]?function(...I){return D[u].apply(D,I)}:D[u]},set(D,u,I){if(D.isContextLost())n||(console.error("Cannot render the mesh because the GL Context was lost. Tried to set property "+u),n=!0);else return D[u]=I,!0}});d=Math.min(q.getParameter(q.MAX_RENDERBUFFER_SIZE),q.getParameter(q.MAX_TEXTURE_SIZE));function G(D,u,I){u=q.createShader(u);q.shaderSource(u,I);q.compileShader(u);I=q.getShaderInfoLog(u);if(0<(I||"").length)throw I;
q.attachShader(D,u)}f=q.createProgram();G(f,q.VERTEX_SHADER,"attribute vec2 vertex;\n                attribute vec2 uv;\n                uniform vec4 mat;\n                uniform vec2 translate;\n                varying vec2 st;\n                void main() {\n                    st = uv;\n                    gl_Position = vec4(mat2(mat) * vertex + translate, 0, 1);\n                }");G(f,q.FRAGMENT_SHADER,"precision highp float;\n                uniform sampler2D image;\n                varying vec2 st;\n                void main() {\n                    gl_FragColor = texture2D(image, st);\n                }");
q.bindAttribLocation(f,0,"vertex");q.bindAttribLocation(f,1,"uv");q.linkProgram(f);r=q.getProgramInfoLog(f);if(0<(r||"").trim().length)throw r;e=q.getUniformLocation(f,"mat");g=q.getUniformLocation(f,"translate");q.useProgram(f);q.bindBuffer(q.ARRAY_BUFFER,q.createBuffer());q.enableVertexAttribArray(0);q.enableVertexAttribArray(1);q.bindBuffer(q.ELEMENT_ARRAY_BUFFER,q.createBuffer());q.uniform1i(q.getUniformLocation(f,"image"),0);q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0);a=q}return!0}let a=
null,c=0,d=0,e=null,g=null,m=0,l=0,n=!1;b();this.Ob=function(){b();return d};this.yb=function(f){a.deleteTexture&&a.deleteTexture(f)};this.wb=function(f){if(!b())return null;const r=a.createTexture();if(!r)return null;a.bindTexture(a.TEXTURE_2D,r);a.texImage2D(a.TEXTURE_2D,0,a.RGBA,a.RGBA,a.UNSIGNED_BYTE,f);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR);2==c?(a.texParameteri(a.TEXTURE_2D,
a.TEXTURE_MIN_FILTER,a.LINEAR_MIPMAP_LINEAR),a.generateMipmap(a.TEXTURE_2D)):a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR);return r};const k=new da(8),t=new da(8),v=new da(10),x=new da(10);this.Cb=function(f,r,q,G,D){if(b()){var u=k.push(f),I=t.push(r);if(a.canvas){if(a.canvas.width!=u||a.canvas.height!=I)a.canvas.width=u,a.canvas.height=I;a.viewport(0,I-r,f,r);a.disable(a.SCISSOR_TEST);a.clearColor(0,0,0,0);a.clear(a.COLOR_BUFFER_BIT);a.enable(a.SCISSOR_TEST);q.sort((A,W)=>W.lb-A.lb);
u=v.push(G);m!=u&&(a.bufferData(a.ARRAY_BUFFER,8*u,a.DYNAMIC_DRAW),m=u);u=0;for(var O of q)a.bufferSubData(a.ARRAY_BUFFER,u,O.Sa),u+=4*O.Sa.length;console.assert(u==4*G);for(var X of q)a.bufferSubData(a.ARRAY_BUFFER,u,X.ob),u+=4*X.ob.length;console.assert(u==8*G);u=x.push(D);l!=u&&(a.bufferData(a.ELEMENT_ARRAY_BUFFER,2*u,a.DYNAMIC_DRAW),l=u);O=0;for(var ia of q)a.bufferSubData(a.ELEMENT_ARRAY_BUFFER,O,ia.indices),O+=2*ia.indices.length;console.assert(O==2*D);ia=0;X=!0;u=O=0;for(const A of q){A.image.Na!=
ia&&(a.bindTexture(a.TEXTURE_2D,A.image.Ma||null),ia=A.image.Na);A.Rb?(a.scissor(A.Xa,I-A.Ya-A.fb,A.bc,A.fb),X=!0):X&&(a.scissor(0,I-r,f,r),X=!1);q=2/f;const W=-2/r;a.uniform4f(e,A.xa[0]*q*A.Ga,A.xa[1]*W*A.Ha,A.xa[2]*q*A.Ga,A.xa[3]*W*A.Ha);a.uniform2f(g,A.xa[4]*q*A.Ga+q*(A.Xa-A.Pb*A.Ga)-1,A.xa[5]*W*A.Ha+W*(A.Ya-A.Qb*A.Ha)+1);a.vertexAttribPointer(0,2,a.FLOAT,!1,0,u);a.vertexAttribPointer(1,2,a.FLOAT,!1,0,u+4*G);a.drawElements(a.TRIANGLES,A.indices.length,a.UNSIGNED_SHORT,O);u+=4*A.Sa.length;O+=2*
A.indices.length}console.assert(u==4*G);console.assert(O==2*D)}}};this.canvas=function(){return b()&&a.canvas}},ha=h.onRuntimeInitialized;
h.onRuntimeInitialized=function(){function b(p){switch(p){case k.srcOver:return"source-over";case k.screen:return"screen";case k.overlay:return"overlay";case k.darken:return"darken";case k.lighten:return"lighten";case k.colorDodge:return"color-dodge";case k.colorBurn:return"color-burn";case k.hardLight:return"hard-light";case k.softLight:return"soft-light";case k.difference:return"difference";case k.exclusion:return"exclusion";case k.multiply:return"multiply";case k.hue:return"hue";case k.saturation:return"saturation";
case k.color:return"color";case k.luminosity:return"luminosity"}}function a(p){return"rgba("+((16711680&p)>>>16)+","+((65280&p)>>>8)+","+((255&p)>>>0)+","+((4278190080&p)>>>24)/255+")"}function c(){0<I.length&&(fa.Cb(u.drawWidth(),u.drawHeight(),I,O,X),I=[],X=O=0,u.reset(512,512));for(const p of D){for(const w of p.ja)w();p.ja=[]}D.clear()}ha&&ha();var d=h.RenderPaintStyle;const e=h.RenderPath,g=h.RenderPaint,m=h.Renderer,l=h.StrokeCap,n=h.StrokeJoin,k=h.BlendMode,t=d.fill,v=d.stroke,x=h.FillRule.evenOdd;
let f=1;var r=h.RenderImage.extend("CanvasRenderImage",{__construct:function({Aa:p,Fa:w}={}){this.__parent.__construct.call(this);this.Na=f;f=f+1&2147483647||1;this.Aa=p;this.Fa=w},__destruct:function(){this.Ma&&(fa.yb(this.Ma),URL.revokeObjectURL(this.Va));this.__parent.__destruct.call(this)},decode:function(p){var w=this;w.Fa&&w.Fa(w);var B=new Image;w.Va=URL.createObjectURL(new Blob([p],{type:"image/png"}));B.src=w.Va;B.onload=function(){w.qb=B;w.Ma=fa.wb(B);w.size(B.width,B.height);w.Aa&&w.Aa(w)}}}),
q=e.extend("CanvasRenderPath",{__construct:function(){this.__parent.__construct.call(this);this.pa=new Path2D},rewind:function(){this.pa=new Path2D},addPath:function(p,w,B,C,z,E,F){var H=this.pa,T=H.addPath;p=p.pa;const K=new DOMMatrix;K.a=w;K.b=B;K.c=C;K.d=z;K.e=E;K.f=F;T.call(H,p,K)},fillRule:function(p){this.Ua=p},moveTo:function(p,w){this.pa.moveTo(p,w)},lineTo:function(p,w){this.pa.lineTo(p,w)},cubicTo:function(p,w,B,C,z,E){this.pa.bezierCurveTo(p,w,B,C,z,E)},close:function(){this.pa.closePath()}}),
G=g.extend("CanvasRenderPaint",{color:function(p){this.Wa=a(p)},thickness:function(p){this.tb=p},join:function(p){switch(p){case n.miter:this.La="miter";break;case n.round:this.La="round";break;case n.bevel:this.La="bevel"}},cap:function(p){switch(p){case l.butt:this.Ka="butt";break;case l.round:this.Ka="round";break;case l.square:this.Ka="square"}},style:function(p){this.sb=p},blendMode:function(p){this.pb=b(p)},clearGradient:function(){this.za=null},linearGradient:function(p,w,B,C){this.za={mb:p,
nb:w,ab:B,bb:C,Qa:[]}},radialGradient:function(p,w,B,C){this.za={mb:p,nb:w,ab:B,bb:C,Qa:[],Mb:!0}},addStop:function(p,w){this.za.Qa.push({color:p,stop:w})},completeGradient:function(){},draw:function(p,w,B){let C=this.sb;var z=this.Wa,E=this.za;p.globalCompositeOperation=this.pb;if(null!=E){z=E.mb;var F=E.nb;const T=E.ab;var H=E.bb;const K=E.Qa;E.Mb?(E=T-z,H-=F,z=p.createRadialGradient(z,F,0,z,F,Math.sqrt(E*E+H*H))):z=p.createLinearGradient(z,F,T,H);for(let Y=0,N=K.length;Y<N;Y++)F=K[Y],z.addColorStop(F.stop,
a(F.color));this.Wa=z;this.za=null}switch(C){case v:p.strokeStyle=z;p.lineWidth=this.tb;p.lineCap=this.Ka;p.lineJoin=this.La;p.stroke(w);break;case t:p.fillStyle=z,p.fill(w,B)}}});const D=new Set;let u=null,I=[],O=0,X=0;var ia=h.CanvasRenderer=m.extend("Renderer",{__construct:function(p){this.__parent.__construct.call(this);this.oa=[1,0,0,1,0,0];this.ha=p.getContext("2d");this.Ta=p;this.ja=[]},save:function(){this.oa.push(...this.oa.slice(this.oa.length-6));this.ja.push(this.ha.save.bind(this.ha))},
restore:function(){const p=this.oa.length-6;if(6>p)throw"restore() called without matching save().";this.oa.splice(p);this.ja.push(this.ha.restore.bind(this.ha))},transform:function(p,w,B,C,z,E){const F=this.oa,H=F.length-6;F.splice(H,6,F[H]*p+F[H+2]*w,F[H+1]*p+F[H+3]*w,F[H]*B+F[H+2]*C,F[H+1]*B+F[H+3]*C,F[H]*z+F[H+2]*E+F[H+4],F[H+1]*z+F[H+3]*E+F[H+5]);this.ja.push(this.ha.transform.bind(this.ha,p,w,B,C,z,E))},rotate:function(p){const w=Math.sin(p);p=Math.cos(p);this.transform(p,w,-w,p,0,0)},_drawPath:function(p,
w){this.ja.push(w.draw.bind(w,this.ha,p.pa,p.Ua===x?"evenodd":"nonzero"))},_drawRiveImage:function(p,w,B){var C=p.qb;if(C){var z=this.ha,E=b(w);this.ja.push(function(){z.globalCompositeOperation=E;z.globalAlpha=B;z.drawImage(C,0,0);z.globalAlpha=1})}},_getMatrix:function(p){const w=this.oa,B=w.length-6;for(let C=0;6>C;++C)p[C]=w[B+C]},_drawImageMesh:function(p,w,B,C,z,E,F,H,T,K){var Y=this.ha.canvas.width,N=this.ha.canvas.height;const sb=T-F,tb=K-H;F=Math.max(F,0);H=Math.max(H,0);T=Math.min(T,Y);
K=Math.min(K,N);const wa=T-F,xa=K-H;console.assert(wa<=Math.min(sb,Y));console.assert(xa<=Math.min(tb,N));if(!(0>=wa||0>=xa)){T=wa<sb||xa<tb;Y=K=1;var ja=Math.ceil(wa*K),ka=Math.ceil(xa*Y);N=fa.Ob();ja>N&&(K*=N/ja,ja=N);ka>N&&(Y*=N/ka,ka=N);u||(u=new h.DynamicRectanizer(N),u.reset(512,512));N=u.addRect(ja,ka);0>N&&(c(),D.add(this),N=u.addRect(ja,ka),console.assert(0<=N));var ub=N&65535,vb=N>>16;I.push({xa:this.oa.slice(this.oa.length-6),image:p,Xa:ub,Ya:vb,Pb:F,Qb:H,bc:ja,fb:ka,Ga:K,Ha:Y,Sa:new Float32Array(C),
ob:new Float32Array(z),indices:new Uint16Array(E),Rb:T,lb:p.Na<<1|(T?1:0)});O+=C.length;X+=E.length;var pa=this.ha,lc=b(w);this.ja.push(function(){pa.save();pa.resetTransform();pa.globalCompositeOperation=lc;pa.globalAlpha=B;const wb=fa.canvas();wb&&pa.drawImage(wb,ub,vb,ja,ka,F,H,wa,xa);pa.restore()})}},_clipPath:function(p){this.ja.push(this.ha.clip.bind(this.ha,p.pa,p.Ua===x?"evenodd":"nonzero"))},clear:function(){D.add(this);this.ja.push(this.ha.clearRect.bind(this.ha,0,0,this.Ta.width,this.Ta.height))},
flush:function(){},translate:function(p,w){this.transform(1,0,0,1,p,w)}});h.makeRenderer=function(p){const w=new ia(p),B=w.ha;return new Proxy(w,{get(C,z){if("function"===typeof C[z])return function(...E){return C[z].apply(C,E)};if("function"===typeof B[z]){if(-1<ea.indexOf(z))throw Error("RiveException: Method call to '"+z+"()' is not allowed, as the renderer cannot immediately pass through the return                 values of any canvas 2d context methods.");return function(...E){w.ja.push(B[z].bind(B,
...E))}}return C[z]},set(C,z,E){if(z in B)return B[z]=E,!0}})};h.decodeImage=function(p,w){(new r({Aa:w})).decode(p)};h.renderFactory={makeRenderPaint:function(){return new G},makeRenderPath:function(){return new q},makeRenderImage:function(){let p=W;return new r({Fa:()=>{p.total++},Aa:()=>{p.loaded++;if(p.loaded===p.total){const w=p.ready;w&&(w(),p.ready=null)}}})}};let A=h.load,W=null;h.load=function(p,w,B=!0){const C=new h.FallbackFileAssetLoader;void 0!==w&&C.addLoader(w);B&&(w=new h.CDNFileAssetLoader,
C.addLoader(w));return new Promise(function(z){let E=null;W={total:0,loaded:0,ready:function(){z(E)}};E=A(p,C);0==W.total&&z(E)})};d=new ca;h.requestAnimationFrame=d.requestAnimationFrame.bind(d);h.cancelAnimationFrame=d.cancelAnimationFrame.bind(d);h.enableFPSCounter=d.Db.bind(d);h.disableFPSCounter=d.Ab;d.hb=c;h.cleanup=function(){u&&u.delete()}};const la=h.onRuntimeInitialized;
h.onRuntimeInitialized=function(){la&&la();let b=h.decodeFont;h.decodeFont=function(c,d){c=b(c);d(c)};const a=h.FileAssetLoader;h.ptrToAsset=c=>{let d=h.ptrToFileAsset(c);return d.isImage?h.ptrToImageAsset(c):d.isFont?h.ptrToFontAsset(c):d};h.CustomFileAssetLoader=a.extend("CustomFileAssetLoader",{__construct:function({loadContents:c}){this.__parent.__construct.call(this);this.rb=c},loadContents:function(c,d){c=h.ptrToAsset(c);return this.rb(c,d)}});h.CDNFileAssetLoader=a.extend("CDNFileAssetLoader",
{__construct:function(){this.__parent.__construct.call(this)},loadContents:function(c){let d=h.ptrToAsset(c);c=d.cdnUuid;if(""===c)return!1;(function(e,g){var m=new XMLHttpRequest;m.responseType="arraybuffer";m.onreadystatechange=function(){4==m.readyState&&200==m.status&&g(m)};m.open("GET",e,!0);m.send(null)})(d.cdnBaseUrl+"/"+c,e=>{d.decode(new Uint8Array(e.response))});return!0}});h.FallbackFileAssetLoader=a.extend("FallbackFileAssetLoader",{__construct:function(){this.__parent.__construct.call(this);
this.gb=[]},addLoader:function(c){this.gb.push(c)},loadContents:function(c,d){for(let e of this.gb)if(e.loadContents(c,d))return!0;return!1}})};var ma=Object.assign({},h),na="./this.program",oa="object"==typeof window,qa="function"==typeof importScripts,y="",ra,sa;
if(oa||qa)qa?y=self.location.href:"undefined"!=typeof document&&document.currentScript&&(y=document.currentScript.src),_scriptDir&&(y=_scriptDir),0!==y.indexOf("blob:")?y=y.substr(0,y.replace(/[?#].*/,"").lastIndexOf("/")+1):y="",qa&&(sa=b=>{var a=new XMLHttpRequest;a.open("GET",b,!1);a.responseType="arraybuffer";a.send(null);return new Uint8Array(a.response)}),ra=(b,a,c)=>{var d=new XMLHttpRequest;d.open("GET",b,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?
a(d.response):c()};d.onerror=c;d.send(null)};var ta=h.print||console.log.bind(console),ua=h.printErr||console.error.bind(console);Object.assign(h,ma);ma=null;h.thisProgram&&(na=h.thisProgram);var va;h.wasmBinary&&(va=h.wasmBinary);var noExitRuntime=h.noExitRuntime||!0;"object"!=typeof WebAssembly&&ya("no native wasm support detected");var za,J,Aa=!1,Ba,L,Ca,Da,M,P,Ea,Fa;
function Ga(){var b=za.buffer;h.HEAP8=Ba=new Int8Array(b);h.HEAP16=Ca=new Int16Array(b);h.HEAP32=M=new Int32Array(b);h.HEAPU8=L=new Uint8Array(b);h.HEAPU16=Da=new Uint16Array(b);h.HEAPU32=P=new Uint32Array(b);h.HEAPF32=Ea=new Float32Array(b);h.HEAPF64=Fa=new Float64Array(b)}var Ha,Ia=[],Ja=[],Ka=[];function La(){var b=h.preRun.shift();Ia.unshift(b)}var Ma=0,Na=null,Oa=null;
function ya(b){if(h.onAbort)h.onAbort(b);b="Aborted("+b+")";ua(b);Aa=!0;b=new WebAssembly.RuntimeError(b+". Build with -sASSERTIONS for more info.");ba(b);throw b;}function Pa(b){return b.startsWith("data:application/octet-stream;base64,")}var Qa;Qa="canvas_advanced.wasm";if(!Pa(Qa)){var Ra=Qa;Qa=h.locateFile?h.locateFile(Ra,y):y+Ra}function Sa(b){if(b==Qa&&va)return new Uint8Array(va);if(sa)return sa(b);throw"both async and sync fetching of the wasm failed";}
function Ta(b){if(!va&&(oa||qa)){if("function"==typeof fetch&&!b.startsWith("file://"))return fetch(b,{credentials:"same-origin"}).then(a=>{if(!a.ok)throw"failed to load wasm binary file at '"+b+"'";return a.arrayBuffer()}).catch(()=>Sa(b));if(ra)return new Promise((a,c)=>{ra(b,d=>a(new Uint8Array(d)),c)})}return Promise.resolve().then(()=>Sa(b))}function Ua(b,a,c){return Ta(b).then(d=>WebAssembly.instantiate(d,a)).then(d=>d).then(c,d=>{ua("failed to asynchronously prepare wasm: "+d);ya(d)})}
function Va(b,a){var c=Qa;return va||"function"!=typeof WebAssembly.instantiateStreaming||Pa(c)||c.startsWith("file://")||"function"!=typeof fetch?Ua(c,b,a):fetch(c,{credentials:"same-origin"}).then(d=>WebAssembly.instantiateStreaming(d,b).then(a,function(e){ua("wasm streaming compile failed: "+e);ua("falling back to ArrayBuffer instantiation");return Ua(c,b,a)}))}var Wa=b=>{for(;0<b.length;)b.shift()(h)};
function Xa(b){if(void 0===b)return"_unknown";b=b.replace(/[^a-zA-Z0-9_]/g,"$");var a=b.charCodeAt(0);return 48<=a&&57>=a?`_${b}`:b}function Ya(b,a){b=Xa(b);return{[b]:function(){return a.apply(this,arguments)}}[b]}function Za(){this.qa=[void 0];this.eb=[]}var Q=new Za,$a=void 0;function R(b){throw new $a(b);}
var S=b=>{b||R("Cannot use deleted val. handle = "+b);return Q.get(b).value},ab=b=>{switch(b){case void 0:return 1;case null:return 2;case !0:return 3;case !1:return 4;default:return Q.ub({kb:1,value:b})}};
function bb(b){var a=Error,c=Ya(b,function(d){this.name=b;this.message=d;d=Error(d).stack;void 0!==d&&(this.stack=this.toString()+"\n"+d.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(a.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:`${this.name}: ${this.message}`};return c}var cb=void 0,db=void 0;function U(b){for(var a="";L[b];)a+=db[L[b++]];return a}var eb=[];
function fb(){for(;eb.length;){var b=eb.pop();b.ba.wa=!1;b["delete"]()}}var gb=void 0,hb={};function ib(b,a){for(void 0===a&&R("ptr should not be undefined");b.fa;)a=b.Ba(a),b=b.fa;return a}var jb={};function kb(b){b=lb(b);var a=U(b);mb(b);return a}function nb(b,a){var c=jb[b];void 0===c&&R(a+" has unknown type "+kb(b));return c}function ob(){}var pb=!1;function qb(b){--b.count.value;0===b.count.value&&(b.ia?b.la.ra(b.ia):b.ea.ca.ra(b.da))}
function rb(b,a,c){if(a===c)return b;if(void 0===c.fa)return null;b=rb(b,a,c.fa);return null===b?null:c.Bb(b)}var xb={};function yb(b,a){a=ib(b,a);return hb[a]}var zb=void 0;function Ab(b){throw new zb(b);}function Bb(b,a){a.ea&&a.da||Ab("makeClassHandle requires ptr and ptrType");!!a.la!==!!a.ia&&Ab("Both smartPtrType and smartPtr must be specified");a.count={value:1};return Cb(Object.create(b,{ba:{value:a}}))}
function Cb(b){if("undefined"===typeof FinalizationRegistry)return Cb=a=>a,b;pb=new FinalizationRegistry(a=>{qb(a.ba)});Cb=a=>{var c=a.ba;c.ia&&pb.register(a,{ba:c},a);return a};ob=a=>{pb.unregister(a)};return Cb(b)}var Db={};function Eb(b){for(;b.length;){var a=b.pop();b.pop()(a)}}function Fb(b){return this.fromWireType(M[b>>2])}var Gb={},Hb={};
function V(b,a,c){function d(l){l=c(l);l.length!==b.length&&Ab("Mismatched type converter count");for(var n=0;n<b.length;++n)Ib(b[n],l[n])}b.forEach(function(l){Hb[l]=a});var e=Array(a.length),g=[],m=0;a.forEach((l,n)=>{jb.hasOwnProperty(l)?e[n]=jb[l]:(g.push(l),Gb.hasOwnProperty(l)||(Gb[l]=[]),Gb[l].push(()=>{e[n]=jb[l];++m;m===g.length&&d(e)}))});0===g.length&&d(e)}
function Jb(b){switch(b){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError(`Unknown type size: ${b}`);}}function Kb(b,a,c={}){var d=a.name;b||R(`type "${d}" must have a positive integer typeid pointer`);if(jb.hasOwnProperty(b)){if(c.Lb)return;R(`Cannot register type '${d}' twice`)}jb[b]=a;delete Hb[b];Gb.hasOwnProperty(b)&&(a=Gb[b],delete Gb[b],a.forEach(e=>e()))}
function Ib(b,a,c={}){if(!("argPackAdvance"in a))throw new TypeError("registerType registeredInstance requires argPackAdvance");Kb(b,a,c)}function Lb(b){R(b.ba.ea.ca.name+" instance already deleted")}function Mb(){}
function Nb(b,a,c){if(void 0===b[a].ga){var d=b[a];b[a]=function(){b[a].ga.hasOwnProperty(arguments.length)||R(`Function '${c}' called with an invalid number of arguments (${arguments.length}) - expects one of (${b[a].ga})!`);return b[a].ga[arguments.length].apply(this,arguments)};b[a].ga=[];b[a].ga[d.va]=d}}
function Ob(b,a,c){h.hasOwnProperty(b)?((void 0===c||void 0!==h[b].ga&&void 0!==h[b].ga[c])&&R(`Cannot register public name '${b}' twice`),Nb(h,b,b),h.hasOwnProperty(c)&&R(`Cannot register multiple overloads of a function with the same number of arguments (${c})!`),h[b].ga[c]=a):(h[b]=a,void 0!==c&&(h[b].cc=c))}function Pb(b,a,c,d,e,g,m,l){this.name=b;this.constructor=a;this.ma=c;this.ra=d;this.fa=e;this.Gb=g;this.Ba=m;this.Bb=l;this.ib=[]}
function Qb(b,a,c){for(;a!==c;)a.Ba||R(`Expected null or instance of ${c.name}, got an instance of ${a.name}`),b=a.Ba(b),a=a.fa;return b}function Rb(b,a){if(null===a)return this.Oa&&R(`null is not a valid ${this.name}`),0;a.ba||R(`Cannot pass "${Sb(a)}" as a ${this.name}`);a.ba.da||R(`Cannot pass deleted object as a pointer of type ${this.name}`);return Qb(a.ba.da,a.ba.ea.ca,this.ca)}
function Tb(b,a){if(null===a){this.Oa&&R(`null is not a valid ${this.name}`);if(this.Ea){var c=this.Pa();null!==b&&b.push(this.ra,c);return c}return 0}a.ba||R(`Cannot pass "${Sb(a)}" as a ${this.name}`);a.ba.da||R(`Cannot pass deleted object as a pointer of type ${this.name}`);!this.Da&&a.ba.ea.Da&&R(`Cannot convert argument of type ${a.ba.la?a.ba.la.name:a.ba.ea.name} to parameter type ${this.name}`);c=Qb(a.ba.da,a.ba.ea.ca,this.ca);if(this.Ea)switch(void 0===a.ba.ia&&R("Passing raw pointer to smart pointer is illegal"),
this.Xb){case 0:a.ba.la===this?c=a.ba.ia:R(`Cannot convert argument of type ${a.ba.la?a.ba.la.name:a.ba.ea.name} to parameter type ${this.name}`);break;case 1:c=a.ba.ia;break;case 2:if(a.ba.la===this)c=a.ba.ia;else{var d=a.clone();c=this.Tb(c,ab(function(){d["delete"]()}));null!==b&&b.push(this.ra,c)}break;default:R("Unsupporting sharing policy")}return c}
function Ub(b,a){if(null===a)return this.Oa&&R(`null is not a valid ${this.name}`),0;a.ba||R(`Cannot pass "${Sb(a)}" as a ${this.name}`);a.ba.da||R(`Cannot pass deleted object as a pointer of type ${this.name}`);a.ba.ea.Da&&R(`Cannot convert argument of type ${a.ba.ea.name} to parameter type ${this.name}`);return Qb(a.ba.da,a.ba.ea.ca,this.ca)}
function Vb(b,a,c,d){this.name=b;this.ca=a;this.Oa=c;this.Da=d;this.Ea=!1;this.ra=this.Tb=this.Pa=this.jb=this.Xb=this.Sb=void 0;void 0!==a.fa?this.toWireType=Tb:(this.toWireType=d?Rb:Ub,this.ka=null)}function Wb(b,a,c){h.hasOwnProperty(b)||Ab("Replacing nonexistant public symbol");void 0!==h[b].ga&&void 0!==c?h[b].ga[c]=a:(h[b]=a,h[b].va=c)}
var Xb=(b,a)=>{var c=[];return function(){c.length=0;Object.assign(c,arguments);if(b.includes("j")){var d=h["dynCall_"+b];d=c&&c.length?d.apply(null,[a].concat(c)):d.call(null,a)}else d=Ha.get(a).apply(null,c);return d}};function Z(b,a){b=U(b);var c=b.includes("j")?Xb(b,a):Ha.get(a);"function"!=typeof c&&R(`unknown function pointer with signature ${b}: ${a}`);return c}var Yb=void 0;
function Zb(b,a){function c(g){e[g]||jb[g]||(Hb[g]?Hb[g].forEach(c):(d.push(g),e[g]=!0))}var d=[],e={};a.forEach(c);throw new Yb(`${b}: `+d.map(kb).join([", "]));}
function $b(b,a,c,d,e){var g=a.length;2>g&&R("argTypes array size mismatch! Must at least get return value and 'this' types!");var m=null!==a[1]&&null!==c,l=!1;for(c=1;c<a.length;++c)if(null!==a[c]&&void 0===a[c].ka){l=!0;break}var n="void"!==a[0].name,k=g-2,t=Array(k),v=[],x=[];return function(){arguments.length!==k&&R(`function ${b} called with ${arguments.length} arguments, expected ${k} args!`);x.length=0;v.length=m?2:1;v[0]=e;if(m){var f=a[1].toWireType(x,this);v[1]=f}for(var r=0;r<k;++r)t[r]=
a[r+2].toWireType(x,arguments[r]),v.push(t[r]);r=d.apply(null,v);if(l)Eb(x);else for(var q=m?1:2;q<a.length;q++){var G=1===q?f:t[q-2];null!==a[q].ka&&a[q].ka(G)}f=n?a[0].fromWireType(r):void 0;return f}}function ac(b,a){for(var c=[],d=0;d<b;d++)c.push(P[a+4*d>>2]);return c}
function bc(b,a,c){b instanceof Object||R(`${c} with invalid "this": ${b}`);b instanceof a.ca.constructor||R(`${c} incompatible with "this" of type ${b.constructor.name}`);b.ba.da||R(`cannot call emscripten binding method ${c} on deleted object`);return Qb(b.ba.da,b.ba.ea.ca,a.ca)}function cc(b){b>=Q.Za&&0===--Q.get(b).kb&&Q.xb(b)}
function dc(b,a,c){switch(a){case 0:return function(d){return this.fromWireType((c?Ba:L)[d])};case 1:return function(d){return this.fromWireType((c?Ca:Da)[d>>1])};case 2:return function(d){return this.fromWireType((c?M:P)[d>>2])};default:throw new TypeError("Unknown integer type: "+b);}}function Sb(b){if(null===b)return"null";var a=typeof b;return"object"===a||"array"===a||"function"===a?b.toString():""+b}
function ec(b,a){switch(a){case 2:return function(c){return this.fromWireType(Ea[c>>2])};case 3:return function(c){return this.fromWireType(Fa[c>>3])};default:throw new TypeError("Unknown float type: "+b);}}
function fc(b,a,c){switch(a){case 0:return c?function(d){return Ba[d]}:function(d){return L[d]};case 1:return c?function(d){return Ca[d>>1]}:function(d){return Da[d>>1]};case 2:return c?function(d){return M[d>>2]}:function(d){return P[d>>2]};default:throw new TypeError("Unknown integer type: "+b);}}
var gc=(b,a,c,d)=>{if(0<d){d=c+d-1;for(var e=0;e<b.length;++e){var g=b.charCodeAt(e);if(55296<=g&&57343>=g){var m=b.charCodeAt(++e);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;a[c++]=g}else{if(2047>=g){if(c+1>=d)break;a[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;a[c++]=224|g>>12}else{if(c+3>=d)break;a[c++]=240|g>>18;a[c++]=128|g>>12&63}a[c++]=128|g>>6&63}a[c++]=128|g&63}}a[c]=0}},hc=b=>{for(var a=0,c=0;c<b.length;++c){var d=b.charCodeAt(c);127>=d?a++:2047>=d?a+=2:55296<=d&&57343>=
d?(a+=4,++c):a+=3}return a},ic="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0,jc=(b,a,c)=>{var d=a+c;for(c=a;b[c]&&!(c>=d);)++c;if(16<c-a&&b.buffer&&ic)return ic.decode(b.subarray(a,c));for(d="";a<c;){var e=b[a++];if(e&128){var g=b[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|g);else{var m=b[a++]&63;e=224==(e&240)?(e&15)<<12|g<<6|m:(e&7)<<18|g<<12|m<<6|b[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d},
kc="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0,mc=(b,a)=>{var c=b>>1;for(var d=c+a/2;!(c>=d)&&Da[c];)++c;c<<=1;if(32<c-b&&kc)return kc.decode(L.subarray(b,c));c="";for(d=0;!(d>=a/2);++d){var e=Ca[b+2*d>>1];if(0==e)break;c+=String.fromCharCode(e)}return c},nc=(b,a,c)=>{void 0===c&&(c=2147483647);if(2>c)return 0;c-=2;var d=a;c=c<2*b.length?c/2:b.length;for(var e=0;e<c;++e)Ca[a>>1]=b.charCodeAt(e),a+=2;Ca[a>>1]=0;return a-d},oc=b=>2*b.length,pc=(b,a)=>{for(var c=0,d="";!(c>=a/
4);){var e=M[b+4*c>>2];if(0==e)break;++c;65536<=e?(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023)):d+=String.fromCharCode(e)}return d},qc=(b,a,c)=>{void 0===c&&(c=2147483647);if(4>c)return 0;var d=a;c=d+c-4;for(var e=0;e<b.length;++e){var g=b.charCodeAt(e);if(55296<=g&&57343>=g){var m=b.charCodeAt(++e);g=65536+((g&1023)<<10)|m&1023}M[a>>2]=g;a+=4;if(a+4>c)break}M[a>>2]=0;return a-d},rc=b=>{for(var a=0,c=0;c<b.length;++c){var d=b.charCodeAt(c);55296<=d&&57343>=d&&++c;a+=4}return a},sc={};
function tc(b){var a=sc[b];return void 0===a?U(b):a}var uc=[];function vc(b){var a=uc.length;uc.push(b);return a}function wc(b,a){for(var c=Array(b),d=0;d<b;++d)c[d]=nb(P[a+4*d>>2],"parameter "+d);return c}
var xc=[],yc={},Ac=()=>{if(!zc){var b={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:na||"./this.program"},a;for(a in yc)void 0===yc[a]?delete b[a]:b[a]=yc[a];var c=[];for(a in b)c.push(`${a}=${b[a]}`);zc=c}return zc},zc,Bc=[null,[],[]],Cc=b=>0===b%4&&(0!==b%100||0===b%400),Dc=[31,29,31,30,31,30,31,31,30,31,30,31],Ec=[31,28,31,30,31,30,31,31,30,31,30,31];
function Fc(b){var a=Array(hc(b)+1);gc(b,a,0,a.length);return a}
var Gc=(b,a,c,d)=>{function e(f,r,q){for(f="number"==typeof f?f.toString():f||"";f.length<r;)f=q[0]+f;return f}function g(f,r){return e(f,r,"0")}function m(f,r){function q(D){return 0>D?-1:0<D?1:0}var G;0===(G=q(f.getFullYear()-r.getFullYear()))&&0===(G=q(f.getMonth()-r.getMonth()))&&(G=q(f.getDate()-r.getDate()));return G}function l(f){switch(f.getDay()){case 0:return new Date(f.getFullYear()-1,11,29);case 1:return f;case 2:return new Date(f.getFullYear(),0,3);case 3:return new Date(f.getFullYear(),
0,2);case 4:return new Date(f.getFullYear(),0,1);case 5:return new Date(f.getFullYear()-1,11,31);case 6:return new Date(f.getFullYear()-1,11,30)}}function n(f){var r=f.ta;for(f=new Date((new Date(f.ua+1900,0,1)).getTime());0<r;){var q=f.getMonth(),G=(Cc(f.getFullYear())?Dc:Ec)[q];if(r>G-f.getDate())r-=G-f.getDate()+1,f.setDate(1),11>q?f.setMonth(q+1):(f.setMonth(0),f.setFullYear(f.getFullYear()+1));else{f.setDate(f.getDate()+r);break}}q=new Date(f.getFullYear()+1,0,4);r=l(new Date(f.getFullYear(),
0,4));q=l(q);return 0>=m(r,f)?0>=m(q,f)?f.getFullYear()+1:f.getFullYear():f.getFullYear()-1}var k=M[d+40>>2];d={$b:M[d>>2],Zb:M[d+4>>2],Ia:M[d+8>>2],Ra:M[d+12>>2],Ja:M[d+16>>2],ua:M[d+20>>2],na:M[d+24>>2],ta:M[d+28>>2],dc:M[d+32>>2],Yb:M[d+36>>2],ac:k?k?jc(L,k):"":""};c=c?jc(L,c):"";k={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y",
"%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var t in k)c=c.replace(new RegExp(t,"g"),k[t]);var v="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),x="January February March April May June July August September October November December".split(" ");k={"%a":f=>v[f.na].substring(0,3),"%A":f=>v[f.na],"%b":f=>x[f.Ja].substring(0,3),"%B":f=>x[f.Ja],"%C":f=>g((f.ua+1900)/
100|0,2),"%d":f=>g(f.Ra,2),"%e":f=>e(f.Ra,2," "),"%g":f=>n(f).toString().substring(2),"%G":f=>n(f),"%H":f=>g(f.Ia,2),"%I":f=>{f=f.Ia;0==f?f=12:12<f&&(f-=12);return g(f,2)},"%j":f=>{for(var r=0,q=0;q<=f.Ja-1;r+=(Cc(f.ua+1900)?Dc:Ec)[q++]);return g(f.Ra+r,3)},"%m":f=>g(f.Ja+1,2),"%M":f=>g(f.Zb,2),"%n":()=>"\n","%p":f=>0<=f.Ia&&12>f.Ia?"AM":"PM","%S":f=>g(f.$b,2),"%t":()=>"\t","%u":f=>f.na||7,"%U":f=>g(Math.floor((f.ta+7-f.na)/7),2),"%V":f=>{var r=Math.floor((f.ta+7-(f.na+6)%7)/7);2>=(f.na+371-f.ta-
2)%7&&r++;if(r)53==r&&(q=(f.na+371-f.ta)%7,4==q||3==q&&Cc(f.ua)||(r=1));else{r=52;var q=(f.na+7-f.ta-1)%7;(4==q||5==q&&Cc(f.ua%400-1))&&r++}return g(r,2)},"%w":f=>f.na,"%W":f=>g(Math.floor((f.ta+7-(f.na+6)%7)/7),2),"%y":f=>(f.ua+1900).toString().substring(2),"%Y":f=>f.ua+1900,"%z":f=>{f=f.Yb;var r=0<=f;f=Math.abs(f)/60;return(r?"+":"-")+String("0000"+(f/60*100+f%60)).slice(-4)},"%Z":f=>f.ac,"%%":()=>"%"};c=c.replace(/%%/g,"\x00\x00");for(t in k)c.includes(t)&&(c=c.replace(new RegExp(t,"g"),k[t](d)));
c=c.replace(/\0\0/g,"%");t=Fc(c);if(t.length>a)return 0;Ba.set(t,b);return t.length-1};Object.assign(Za.prototype,{get(b){return this.qa[b]},has(b){return void 0!==this.qa[b]},ub(b){var a=this.eb.pop()||this.qa.length;this.qa[a]=b;return a},xb(b){this.qa[b]=void 0;this.eb.push(b)}});$a=h.BindingError=class extends Error{constructor(b){super(b);this.name="BindingError"}};Q.qa.push({value:void 0},{value:null},{value:!0},{value:!1});Q.Za=Q.qa.length;
h.count_emval_handles=function(){for(var b=0,a=Q.Za;a<Q.qa.length;++a)void 0!==Q.qa[a]&&++b;return b};cb=h.PureVirtualError=bb("PureVirtualError");for(var Hc=Array(256),Ic=0;256>Ic;++Ic)Hc[Ic]=String.fromCharCode(Ic);db=Hc;h.getInheritedInstanceCount=function(){return Object.keys(hb).length};h.getLiveInheritedInstances=function(){var b=[],a;for(a in hb)hb.hasOwnProperty(a)&&b.push(hb[a]);return b};h.flushPendingDeletes=fb;h.setDelayFunction=function(b){gb=b;eb.length&&gb&&gb(fb)};
zb=h.InternalError=class extends Error{constructor(b){super(b);this.name="InternalError"}};Mb.prototype.isAliasOf=function(b){if(!(this instanceof Mb&&b instanceof Mb))return!1;var a=this.ba.ea.ca,c=this.ba.da,d=b.ba.ea.ca;for(b=b.ba.da;a.fa;)c=a.Ba(c),a=a.fa;for(;d.fa;)b=d.Ba(b),d=d.fa;return a===d&&c===b};
Mb.prototype.clone=function(){this.ba.da||Lb(this);if(this.ba.ya)return this.ba.count.value+=1,this;var b=Cb,a=Object,c=a.create,d=Object.getPrototypeOf(this),e=this.ba;b=b(c.call(a,d,{ba:{value:{count:e.count,wa:e.wa,ya:e.ya,da:e.da,ea:e.ea,ia:e.ia,la:e.la}}}));b.ba.count.value+=1;b.ba.wa=!1;return b};Mb.prototype["delete"]=function(){this.ba.da||Lb(this);this.ba.wa&&!this.ba.ya&&R("Object already scheduled for deletion");ob(this);qb(this.ba);this.ba.ya||(this.ba.ia=void 0,this.ba.da=void 0)};
Mb.prototype.isDeleted=function(){return!this.ba.da};Mb.prototype.deleteLater=function(){this.ba.da||Lb(this);this.ba.wa&&!this.ba.ya&&R("Object already scheduled for deletion");eb.push(this);1===eb.length&&gb&&gb(fb);this.ba.wa=!0;return this};Vb.prototype.Hb=function(b){this.jb&&(b=this.jb(b));return b};Vb.prototype.$a=function(b){this.ra&&this.ra(b)};Vb.prototype.argPackAdvance=8;Vb.prototype.readValueFromPointer=Fb;Vb.prototype.deleteObject=function(b){if(null!==b)b["delete"]()};
Vb.prototype.fromWireType=function(b){function a(){return this.Ea?Bb(this.ca.ma,{ea:this.Sb,da:c,la:this,ia:b}):Bb(this.ca.ma,{ea:this,da:b})}var c=this.Hb(b);if(!c)return this.$a(b),null;var d=yb(this.ca,c);if(void 0!==d){if(0===d.ba.count.value)return d.ba.da=c,d.ba.ia=b,d.clone();d=d.clone();this.$a(b);return d}d=this.ca.Gb(c);d=xb[d];if(!d)return a.call(this);d=this.Da?d.vb:d.pointerType;var e=rb(c,this.ca,d.ca);return null===e?a.call(this):this.Ea?Bb(d.ca.ma,{ea:d,da:e,la:this,ia:b}):Bb(d.ca.ma,
{ea:d,da:e})};Yb=h.UnboundTypeError=bb("UnboundTypeError");
var Kc={N:function(b,a,c){b=U(b);a=nb(a,"wrapper");c=S(c);var d=[].slice,e=a.ca,g=e.ma,m=e.fa.ma,l=e.fa.constructor;b=Ya(b,function(){e.fa.ib.forEach(function(k){if(this[k]===m[k])throw new cb(`Pure virtual function ${k} must be implemented in JavaScript`);}.bind(this));Object.defineProperty(this,"__parent",{value:g});this.__construct.apply(this,d.call(arguments))});g.__construct=function(){this===g&&R("Pass correct 'this' to __construct");var k=l.implement.apply(void 0,[this].concat(d.call(arguments)));
ob(k);var t=k.ba;k.notifyOnDestruction();t.ya=!0;Object.defineProperties(this,{ba:{value:t}});Cb(this);k=t.da;k=ib(e,k);hb.hasOwnProperty(k)?R(`Tried to register registered instance: ${k}`):hb[k]=this};g.__destruct=function(){this===g&&R("Pass correct 'this' to __destruct");ob(this);var k=this.ba.da;k=ib(e,k);hb.hasOwnProperty(k)?delete hb[k]:R(`Tried to unregister unregistered instance: ${k}`)};b.prototype=Object.create(g);for(var n in c)b.prototype[n]=c[n];return ab(b)},O:function(b){var a=Db[b];
delete Db[b];var c=a.Pa,d=a.ra,e=a.cb,g=e.map(m=>m.Kb).concat(e.map(m=>m.Vb));V([b],g,m=>{var l={};e.forEach((n,k)=>{var t=m[k],v=n.Ib,x=n.Jb,f=m[k+e.length],r=n.Ub,q=n.Wb;l[n.Eb]={read:G=>t.fromWireType(v(x,G)),write:(G,D)=>{var u=[];r(q,G,f.toWireType(u,D));Eb(u)}}});return[{name:a.name,fromWireType:function(n){var k={},t;for(t in l)k[t]=l[t].read(n);d(n);return k},toWireType:function(n,k){for(var t in l)if(!(t in k))throw new TypeError(`Missing field: "${t}"`);var v=c();for(t in l)l[t].write(v,
k[t]);null!==n&&n.push(d,v);return v},argPackAdvance:8,readValueFromPointer:Fb,ka:d}]})},C:function(){},K:function(b,a,c,d,e){var g=Jb(c);a=U(a);Ib(b,{name:a,fromWireType:function(m){return!!m},toWireType:function(m,l){return l?d:e},argPackAdvance:8,readValueFromPointer:function(m){if(1===c)var l=Ba;else if(2===c)l=Ca;else if(4===c)l=M;else throw new TypeError("Unknown boolean type size: "+a);return this.fromWireType(l[m>>g])},ka:null})},f:function(b,a,c,d,e,g,m,l,n,k,t,v,x){t=U(t);g=Z(e,g);l&&(l=
Z(m,l));k&&(k=Z(n,k));x=Z(v,x);var f=Xa(t);Ob(f,function(){Zb(`Cannot construct ${t} due to unbound types`,[d])});V([b,a,c],d?[d]:[],function(r){r=r[0];if(d){var q=r.ca;var G=q.ma}else G=Mb.prototype;r=Ya(f,function(){if(Object.getPrototypeOf(this)!==D)throw new $a("Use 'new' to construct "+t);if(void 0===u.sa)throw new $a(t+" has no accessible constructor");var O=u.sa[arguments.length];if(void 0===O)throw new $a(`Tried to invoke ctor of ${t} with invalid number of parameters (${arguments.length}) - expected (${Object.keys(u.sa).toString()}) parameters instead!`);
return O.apply(this,arguments)});var D=Object.create(G,{constructor:{value:r}});r.prototype=D;var u=new Pb(t,r,D,x,q,g,l,k);u.fa&&(void 0===u.fa.Ca&&(u.fa.Ca=[]),u.fa.Ca.push(u));q=new Vb(t,u,!0,!1);G=new Vb(t+"*",u,!1,!1);var I=new Vb(t+" const*",u,!1,!0);xb[b]={pointerType:G,vb:I};Wb(f,r);return[q,G,I]})},j:function(b,a,c,d,e,g,m){var l=ac(c,d);a=U(a);g=Z(e,g);V([],[b],function(n){function k(){Zb(`Cannot call ${t} due to unbound types`,l)}n=n[0];var t=`${n.name}.${a}`;a.startsWith("@@")&&(a=Symbol[a.substring(2)]);
var v=n.ca.constructor;void 0===v[a]?(k.va=c-1,v[a]=k):(Nb(v,a,t),v[a].ga[c-1]=k);V([],l,function(x){x=$b(t,[x[0],null].concat(x.slice(1)),null,g,m);void 0===v[a].ga?(x.va=c-1,v[a]=x):v[a].ga[c-1]=x;if(n.ca.Ca)for(const f of n.ca.Ca)f.constructor.hasOwnProperty(a)||(f.constructor[a]=x);return[]});return[]})},x:function(b,a,c,d,e,g,m,l){a=U(a);g=Z(e,g);V([],[b],function(n){n=n[0];var k=`${n.name}.${a}`,t={get(){Zb(`Cannot access ${k} due to unbound types`,[c])},enumerable:!0,configurable:!0};t.set=
l?()=>{Zb(`Cannot access ${k} due to unbound types`,[c])}:()=>{R(`${k} is a read-only property`)};Object.defineProperty(n.ca.constructor,a,t);V([],[c],function(v){v=v[0];var x={get(){return v.fromWireType(g(d))},enumerable:!0};l&&(l=Z(m,l),x.set=f=>{var r=[];l(d,v.toWireType(r,f));Eb(r)});Object.defineProperty(n.ca.constructor,a,x);return[]});return[]})},s:function(b,a,c,d,e,g){var m=ac(a,c);e=Z(d,e);V([],[b],function(l){l=l[0];var n=`constructor ${l.name}`;void 0===l.ca.sa&&(l.ca.sa=[]);if(void 0!==
l.ca.sa[a-1])throw new $a(`Cannot register multiple constructors with identical number of parameters (${a-1}) for class '${l.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);l.ca.sa[a-1]=()=>{Zb(`Cannot construct ${l.name} due to unbound types`,m)};V([],m,function(k){k.splice(1,0,null);l.ca.sa[a-1]=$b(n,k,null,e,g);return[]});return[]})},a:function(b,a,c,d,e,g,m,l){var n=ac(c,d);a=U(a);g=Z(e,g);V([],[b],function(k){function t(){Zb(`Cannot call ${v} due to unbound types`,
n)}k=k[0];var v=`${k.name}.${a}`;a.startsWith("@@")&&(a=Symbol[a.substring(2)]);l&&k.ca.ib.push(a);var x=k.ca.ma,f=x[a];void 0===f||void 0===f.ga&&f.className!==k.name&&f.va===c-2?(t.va=c-2,t.className=k.name,x[a]=t):(Nb(x,a,v),x[a].ga[c-2]=t);V([],n,function(r){r=$b(v,r,k,g,m);void 0===x[a].ga?(r.va=c-2,x[a]=r):x[a].ga[c-2]=r;return[]});return[]})},e:function(b,a,c,d,e,g,m,l,n,k){a=U(a);e=Z(d,e);V([],[b],function(t){t=t[0];var v=`${t.name}.${a}`,x={get(){Zb(`Cannot access ${v} due to unbound types`,
[c,m])},enumerable:!0,configurable:!0};x.set=n?()=>{Zb(`Cannot access ${v} due to unbound types`,[c,m])}:()=>{R(v+" is a read-only property")};Object.defineProperty(t.ca.ma,a,x);V([],n?[c,m]:[c],function(f){var r=f[0],q={get(){var D=bc(this,t,v+" getter");return r.fromWireType(e(g,D))},enumerable:!0};if(n){n=Z(l,n);var G=f[1];q.set=function(D){var u=bc(this,t,v+" setter"),I=[];n(k,u,G.toWireType(I,D));Eb(I)}}Object.defineProperty(t.ca.ma,a,q);return[]});return[]})},J:function(b,a){a=U(a);Ib(b,{name:a,
fromWireType:function(c){var d=S(c);cc(c);return d},toWireType:function(c,d){return ab(d)},argPackAdvance:8,readValueFromPointer:Fb,ka:null})},p:function(b,a,c,d){function e(){}c=Jb(c);a=U(a);e.values={};Ib(b,{name:a,constructor:e,fromWireType:function(g){return this.constructor.values[g]},toWireType:function(g,m){return m.value},argPackAdvance:8,readValueFromPointer:dc(a,c,d),ka:null});Ob(a,e)},d:function(b,a,c){var d=nb(b,"enum");a=U(a);b=d.constructor;d=Object.create(d.constructor.prototype,{value:{value:c},
constructor:{value:Ya(`${d.name}_${a}`,function(){})}});b.values[c]=d;b[a]=d},y:function(b,a,c){c=Jb(c);a=U(a);Ib(b,{name:a,fromWireType:function(d){return d},toWireType:function(d,e){return e},argPackAdvance:8,readValueFromPointer:ec(a,c),ka:null})},m:function(b,a,c,d,e,g){var m=ac(a,c);b=U(b);e=Z(d,e);Ob(b,function(){Zb(`Cannot call ${b} due to unbound types`,m)},a-1);V([],m,function(l){Wb(b,$b(b,[l[0],null].concat(l.slice(1)),null,e,g),a-1);return[]})},l:function(b,a,c,d,e){a=U(a);-1===e&&(e=4294967295);
e=Jb(c);var g=l=>l;if(0===d){var m=32-8*c;g=l=>l<<m>>>m}c=a.includes("unsigned")?function(l,n){return n>>>0}:function(l,n){return n};Ib(b,{name:a,fromWireType:g,toWireType:c,argPackAdvance:8,readValueFromPointer:fc(a,e,0!==d),ka:null})},g:function(b,a,c){function d(g){g>>=2;var m=P;return new e(m.buffer,m[g+1],m[g])}var e=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][a];c=U(c);Ib(b,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{Lb:!0})},
z:function(b,a){a=U(a);var c="std::string"===a;Ib(b,{name:a,fromWireType:function(d){var e=P[d>>2],g=d+4;if(c)for(var m=g,l=0;l<=e;++l){var n=g+l;if(l==e||0==L[n]){m=m?jc(L,m,n-m):"";if(void 0===k)var k=m;else k+=String.fromCharCode(0),k+=m;m=n+1}}else{k=Array(e);for(l=0;l<e;++l)k[l]=String.fromCharCode(L[g+l]);k=k.join("")}mb(d);return k},toWireType:function(d,e){e instanceof ArrayBuffer&&(e=new Uint8Array(e));var g="string"==typeof e;g||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof
Int8Array||R("Cannot pass non-string to std::string");var m=c&&g?hc(e):e.length;var l=Jc(4+m+1),n=l+4;P[l>>2]=m;if(c&&g)gc(e,L,n,m+1);else if(g)for(g=0;g<m;++g){var k=e.charCodeAt(g);255<k&&(mb(n),R("String has UTF-16 code units that do not fit in 8 bits"));L[n+g]=k}else for(g=0;g<m;++g)L[n+g]=e[g];null!==d&&d.push(mb,l);return l},argPackAdvance:8,readValueFromPointer:Fb,ka:function(d){mb(d)}})},u:function(b,a,c){c=U(c);if(2===a){var d=mc;var e=nc;var g=oc;var m=()=>Da;var l=1}else 4===a&&(d=pc,e=
qc,g=rc,m=()=>P,l=2);Ib(b,{name:c,fromWireType:function(n){for(var k=P[n>>2],t=m(),v,x=n+4,f=0;f<=k;++f){var r=n+4+f*a;if(f==k||0==t[r>>l])x=d(x,r-x),void 0===v?v=x:(v+=String.fromCharCode(0),v+=x),x=r+a}mb(n);return v},toWireType:function(n,k){"string"!=typeof k&&R(`Cannot pass non-string to C++ string type ${c}`);var t=g(k),v=Jc(4+t+a);P[v>>2]=t>>l;e(k,v+4,t+a);null!==n&&n.push(mb,v);return v},argPackAdvance:8,readValueFromPointer:Fb,ka:function(n){mb(n)}})},Q:function(b,a,c,d,e,g){Db[b]={name:U(a),
Pa:Z(c,d),ra:Z(e,g),cb:[]}},P:function(b,a,c,d,e,g,m,l,n,k){Db[b].cb.push({Eb:U(a),Kb:c,Ib:Z(d,e),Jb:g,Vb:m,Ub:Z(l,n),Wb:k})},L:function(b,a){a=U(a);Ib(b,{Nb:!0,name:a,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},v:function(b,a,c){b=S(b);a=nb(a,"emval::as");var d=[],e=ab(d);P[c>>2]=e;return a.toWireType(d,b)},w:function(b,a,c,d,e){b=uc[b];a=S(a);c=tc(c);var g=[];P[d>>2]=ab(g);return b(a,c,g,e)},i:function(b,a,c,d){b=uc[b];a=S(a);c=tc(c);b(a,c,null,d)},c:cc,h:function(b,a){var c=
wc(b,a),d=c[0];a=d.name+"_$"+c.slice(1).map(function(m){return m.name}).join("_")+"$";var e=xc[a];if(void 0!==e)return e;var g=Array(b-1);e=vc((m,l,n,k)=>{for(var t=0,v=0;v<b-1;++v)g[v]=c[v+1].readValueFromPointer(k+t),t+=c[v+1].argPackAdvance;m=m[l].apply(m,g);for(v=0;v<b-1;++v)c[v+1].zb&&c[v+1].zb(g[v]);if(!d.Nb)return d.toWireType(n,m)});return xc[a]=e},t:function(b){b=tc(b);return ab(h[b])},M:function(b,a){b=S(b);a=S(a);return ab(b[a])},n:function(b){4<b&&(Q.get(b).kb+=1)},o:function(b){return ab(tc(b))},
A:function(){return ab({})},q:function(b){var a=S(b);Eb(a);cc(b)},k:function(b,a,c){b=S(b);a=S(a);c=S(c);b[a]=c},r:function(b,a){b=nb(b,"_emval_take_value");b=b.readValueFromPointer(a);return ab(b)},b:()=>{ya("")},E:b=>{var a=L.length;b>>>=0;if(2147483648<b)return!1;for(var c=1;4>=c;c*=2){var d=a*(1+.2/c);d=Math.min(d,b+100663296);var e=Math;d=Math.max(b,d);a:{e=e.min.call(e,2147483648,d+(65536-d%65536)%65536)-za.buffer.byteLength+65535>>>16;try{za.grow(e);Ga();var g=1;break a}catch(m){}g=void 0}if(g)return!0}return!1},
F:(b,a)=>{var c=0;Ac().forEach(function(d,e){var g=a+c;e=P[b+4*e>>2]=g;for(g=0;g<d.length;++g)Ba[e++>>0]=d.charCodeAt(g);Ba[e>>0]=0;c+=d.length+1});return 0},G:(b,a)=>{var c=Ac();P[b>>2]=c.length;var d=0;c.forEach(function(e){d+=e.length+1});P[a>>2]=d;return 0},H:()=>52,B:function(){return 70},I:(b,a,c,d)=>{for(var e=0,g=0;g<c;g++){var m=P[a>>2],l=P[a+4>>2];a+=8;for(var n=0;n<l;n++){var k=L[m+n],t=Bc[b];0===k||10===k?((1===b?ta:ua)(jc(t,0)),t.length=0):t.push(k)}e+=l}P[d>>2]=e;return 0},D:(b,a,c,
d)=>Gc(b,a,c,d)};(function(){function b(c){J=c=c.exports;za=J.R;Ga();Ha=J.X;Ja.unshift(J.S);Ma--;h.monitorRunDependencies&&h.monitorRunDependencies(Ma);if(0==Ma&&(null!==Na&&(clearInterval(Na),Na=null),Oa)){var d=Oa;Oa=null;d()}return c}var a={a:Kc};Ma++;h.monitorRunDependencies&&h.monitorRunDependencies(Ma);if(h.instantiateWasm)try{return h.instantiateWasm(a,b)}catch(c){ua("Module.instantiateWasm callback failed with error: "+c),ba(c)}Va(a,function(c){b(c.instance)}).catch(ba);return{}})();
var mb=b=>(mb=J.T)(b),Jc=b=>(Jc=J.U)(b),lb=b=>(lb=J.V)(b);h.__embind_initialize_bindings=()=>(h.__embind_initialize_bindings=J.W)();h.dynCall_jiji=(b,a,c,d,e)=>(h.dynCall_jiji=J.Y)(b,a,c,d,e);h.dynCall_viijii=(b,a,c,d,e,g,m)=>(h.dynCall_viijii=J.Z)(b,a,c,d,e,g,m);h.dynCall_iiiiij=(b,a,c,d,e,g,m)=>(h.dynCall_iiiiij=J._)(b,a,c,d,e,g,m);h.dynCall_iiiiijj=(b,a,c,d,e,g,m,l,n)=>(h.dynCall_iiiiijj=J.$)(b,a,c,d,e,g,m,l,n);
h.dynCall_iiiiiijj=(b,a,c,d,e,g,m,l,n,k)=>(h.dynCall_iiiiiijj=J.aa)(b,a,c,d,e,g,m,l,n,k);var Lc;Oa=function Mc(){Lc||Nc();Lc||(Oa=Mc)};
function Nc(){function b(){if(!Lc&&(Lc=!0,h.calledRun=!0,!Aa)){Wa(Ja);aa(h);if(h.onRuntimeInitialized)h.onRuntimeInitialized();if(h.postRun)for("function"==typeof h.postRun&&(h.postRun=[h.postRun]);h.postRun.length;){var a=h.postRun.shift();Ka.unshift(a)}Wa(Ka)}}if(!(0<Ma)){if(h.preRun)for("function"==typeof h.preRun&&(h.preRun=[h.preRun]);h.preRun.length;)La();Wa(Ia);0<Ma||(h.setStatus?(h.setStatus("Running..."),setTimeout(function(){setTimeout(function(){h.setStatus("")},1);b()},1)):b())}}
if(h.preInit)for("function"==typeof h.preInit&&(h.preInit=[h.preInit]);0<h.preInit.length;)h.preInit.pop()();Nc();


  return moduleArg.ready
}

);
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rive);

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = JSON.parse('{"name":"@rive-app/canvas","version":"2.9.1","description":"Rive\'s canvas based web api.","main":"rive.js","homepage":"https://rive.app","repository":{"type":"git","url":"https://github.com/rive-app/rive-wasm/tree/master/js"},"keywords":["rive","animation"],"author":"Rive","contributors":["Luigi Rosso <luigi@rive.app> (https://rive.app)","Maxwell Talbot <max@rive.app> (https://rive.app)","Arthur Vivian <arthur@rive.app> (https://rive.app)","Umberto Sonnino <umberto@rive.app> (https://rive.app)","Matthew Sullivan <matt.j.sullivan@gmail.com> (mailto:matt.j.sullivan@gmail.com)"],"license":"MIT","files":["rive.js","rive.js.map","rive.wasm","rive.d.ts","rive_advanced.mjs.d.ts"],"typings":"rive.d.ts","dependencies":{},"browser":{"fs":false,"path":false}}');

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BLANK_URL: () => (/* reexport safe */ _sanitizeUrl__WEBPACK_IMPORTED_MODULE_1__.BLANK_URL),
/* harmony export */   registerTouchInteractions: () => (/* reexport safe */ _registerTouchInteractions__WEBPACK_IMPORTED_MODULE_0__.registerTouchInteractions),
/* harmony export */   sanitizeUrl: () => (/* reexport safe */ _sanitizeUrl__WEBPACK_IMPORTED_MODULE_1__.sanitizeUrl)
/* harmony export */ });
/* harmony import */ var _registerTouchInteractions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _sanitizeUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);




/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerTouchInteractions: () => (/* binding */ registerTouchInteractions)
/* harmony export */ });
var _this = undefined;
/**
 * Returns the clientX and clientY properties from touch or mouse events. Also
 * calls preventDefault() on the event if it is a touchstart or touchmove to prevent
 * scrolling the page on mobile devices
 * @param event - Either a TouchEvent or a MouseEvent
 * @returns - Coordinates of the clientX and clientY properties from the touch/mouse event
 */
var getClientCoordinates = function (event) {
    var _a, _b;
    if (["touchstart", "touchmove"].indexOf(event.type) > -1 &&
        ((_a = event.touches) === null || _a === void 0 ? void 0 : _a.length)) {
        event.preventDefault();
        return {
            clientX: event.touches[0].clientX,
            clientY: event.touches[0].clientY,
        };
    }
    else if (event.type === "touchend" &&
        ((_b = event.changedTouches) === null || _b === void 0 ? void 0 : _b.length)) {
        return {
            clientX: event.changedTouches[0].clientX,
            clientY: event.changedTouches[0].clientY,
        };
    }
    else {
        return {
            clientX: event.clientX,
            clientY: event.clientY,
        };
    }
};
/**
 * Registers mouse move/up/down callback handlers on the canvas to send meaningful coordinates to
 * the state machine pointer move/up/down functions based on cursor interaction
 */
var registerTouchInteractions = function (_a) {
    var canvas = _a.canvas, artboard = _a.artboard, _b = _a.stateMachines, stateMachines = _b === void 0 ? [] : _b, renderer = _a.renderer, rive = _a.rive, fit = _a.fit, alignment = _a.alignment;
    if (!canvas ||
        !stateMachines.length ||
        !renderer ||
        !rive ||
        !artboard ||
        typeof window === "undefined") {
        return null;
    }
    var processEventCallback = function (event) {
        var boundingRect = event.currentTarget.getBoundingClientRect();
        var _a = getClientCoordinates(event), clientX = _a.clientX, clientY = _a.clientY;
        if (!clientX && !clientY) {
            return;
        }
        var canvasX = clientX - boundingRect.left;
        var canvasY = clientY - boundingRect.top;
        var forwardMatrix = rive.computeAlignment(fit, alignment, {
            minX: 0,
            minY: 0,
            maxX: boundingRect.width,
            maxY: boundingRect.height,
        }, artboard.bounds);
        var invertedMatrix = new rive.Mat2D();
        forwardMatrix.invert(invertedMatrix);
        var canvasCoordinatesVector = new rive.Vec2D(canvasX, canvasY);
        var transformedVector = rive.mapXY(invertedMatrix, canvasCoordinatesVector);
        var transformedX = transformedVector.x();
        var transformedY = transformedVector.y();
        transformedVector.delete();
        invertedMatrix.delete();
        canvasCoordinatesVector.delete();
        forwardMatrix.delete();
        switch (event.type) {
            /**
             * There's a 2px buffer for a hitRadius when translating the pointer coordinates
             * down to the state machine. In cases where the hitbox is about that much away
             * from the Artboard border, we don't have exact precision on determining pointer
             * exit. We're therefore adding to the translated coordinates on mouseout of a canvas
             * to ensure that we report the mouse has truly exited the hitarea.
             * https://github.com/rive-app/rive-cpp/blob/master/src/animation/state_machine_instance.cpp#L336
             *
             * We add/subtract 10000 to account for when the graphic goes beyond the canvas bound
             * due to for example, a fit: 'cover'. Not perfect, but helps reliably (for now) ensure
             * we report going out of bounds when the mouse is out of the canvas
             */
            case "mouseout":
                for (var _i = 0, stateMachines_1 = stateMachines; _i < stateMachines_1.length; _i++) {
                    var stateMachine = stateMachines_1[_i];
                    stateMachine.pointerMove(transformedX < 0 ? transformedX - 10000 : transformedX + 10000, transformedY < 0 ? transformedY - 10000 : transformedY + 10000);
                }
                break;
            // Pointer moving/hovering on the canvas
            case "touchmove":
            case "mouseover":
            case "mousemove": {
                for (var _b = 0, stateMachines_2 = stateMachines; _b < stateMachines_2.length; _b++) {
                    var stateMachine = stateMachines_2[_b];
                    stateMachine.pointerMove(transformedX, transformedY);
                }
                break;
            }
            // Pointer click initiated but not released yet on the canvas
            case "touchstart":
            case "mousedown": {
                for (var _c = 0, stateMachines_3 = stateMachines; _c < stateMachines_3.length; _c++) {
                    var stateMachine = stateMachines_3[_c];
                    stateMachine.pointerDown(transformedX, transformedY);
                }
                break;
            }
            // Pointer click released on the canvas
            case "touchend":
            case "mouseup": {
                for (var _d = 0, stateMachines_4 = stateMachines; _d < stateMachines_4.length; _d++) {
                    var stateMachine = stateMachines_4[_d];
                    stateMachine.pointerUp(transformedX, transformedY);
                }
                break;
            }
            default:
        }
    };
    var callback = processEventCallback.bind(_this);
    canvas.addEventListener("mouseover", callback);
    canvas.addEventListener("mouseout", callback);
    canvas.addEventListener("mousemove", callback);
    canvas.addEventListener("mousedown", callback);
    canvas.addEventListener("mouseup", callback);
    canvas.addEventListener("touchmove", callback);
    canvas.addEventListener("touchstart", callback);
    canvas.addEventListener("touchend", callback);
    return function () {
        canvas.removeEventListener("mouseover", callback);
        canvas.removeEventListener("mouseout", callback);
        canvas.removeEventListener("mousemove", callback);
        canvas.removeEventListener("mousedown", callback);
        canvas.removeEventListener("mouseup", callback);
        canvas.removeEventListener("touchmove", callback);
        canvas.removeEventListener("touchstart", callback);
        canvas.removeEventListener("touchend", callback);
    };
};


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BLANK_URL: () => (/* binding */ BLANK_URL),
/* harmony export */   sanitizeUrl: () => (/* binding */ sanitizeUrl)
/* harmony export */ });
// Reference: https://github.com/braintree/sanitize-url/tree/main
var invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im;
var htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g;
var htmlCtrlEntityRegex = /&(newline|tab);/gi;
var ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim;
var urlSchemeRegex = /^.+(:|&colon;)/gim;
var relativeFirstCharacters = [".", "/"];
var BLANK_URL = "about:blank";
function isRelativeUrlWithoutProtocol(url) {
    return relativeFirstCharacters.indexOf(url[0]) > -1;
}
// adapted from https://stackoverflow.com/a/29824550/2601552
function decodeHtmlCharacters(str) {
    var removedNullByte = str.replace(ctrlCharactersRegex, "");
    return removedNullByte.replace(htmlEntitiesRegex, function (match, dec) {
        return String.fromCharCode(dec);
    });
}
function sanitizeUrl(url) {
    if (!url) {
        return BLANK_URL;
    }
    var sanitizedUrl = decodeHtmlCharacters(url)
        .replace(htmlCtrlEntityRegex, "")
        .replace(ctrlCharactersRegex, "")
        .trim();
    if (!sanitizedUrl) {
        return BLANK_URL;
    }
    if (isRelativeUrlWithoutProtocol(sanitizedUrl)) {
        return sanitizedUrl;
    }
    var urlSchemeParseResults = sanitizedUrl.match(urlSchemeRegex);
    if (!urlSchemeParseResults) {
        return sanitizedUrl;
    }
    var urlScheme = urlSchemeParseResults[0];
    if (invalidProtocolRegex.test(urlScheme)) {
        return BLANK_URL;
    }
    return sanitizedUrl;
}


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Alignment: () => (/* binding */ Alignment),
/* harmony export */   EventType: () => (/* binding */ EventType),
/* harmony export */   Fit: () => (/* binding */ Fit),
/* harmony export */   Layout: () => (/* binding */ Layout),
/* harmony export */   LoopType: () => (/* binding */ LoopType),
/* harmony export */   Rive: () => (/* binding */ Rive),
/* harmony export */   RiveEventType: () => (/* binding */ RiveEventType),
/* harmony export */   RuntimeLoader: () => (/* binding */ RuntimeLoader),
/* harmony export */   StateMachineInput: () => (/* binding */ StateMachineInput),
/* harmony export */   StateMachineInputType: () => (/* binding */ StateMachineInputType),
/* harmony export */   Testing: () => (/* binding */ Testing),
/* harmony export */   decodeFont: () => (/* binding */ decodeFont),
/* harmony export */   decodeImage: () => (/* binding */ decodeImage)
/* harmony export */ });
/* harmony import */ var _rive_advanced_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



// #region layout
// Fit options for the canvas
var Fit;
(function (Fit) {
    Fit["Cover"] = "cover";
    Fit["Contain"] = "contain";
    Fit["Fill"] = "fill";
    Fit["FitWidth"] = "fitWidth";
    Fit["FitHeight"] = "fitHeight";
    Fit["None"] = "none";
    Fit["ScaleDown"] = "scaleDown";
})(Fit || (Fit = {}));
// Alignment options for the canvas
var Alignment;
(function (Alignment) {
    Alignment["Center"] = "center";
    Alignment["TopLeft"] = "topLeft";
    Alignment["TopCenter"] = "topCenter";
    Alignment["TopRight"] = "topRight";
    Alignment["CenterLeft"] = "centerLeft";
    Alignment["CenterRight"] = "centerRight";
    Alignment["BottomLeft"] = "bottomLeft";
    Alignment["BottomCenter"] = "bottomCenter";
    Alignment["BottomRight"] = "bottomRight";
})(Alignment || (Alignment = {}));
// Alignment options for Rive animations in a HTML canvas
var Layout = /** @class */ (function () {
    function Layout(params) {
        var _a, _b, _c, _d, _e, _f;
        this.fit = (_a = params === null || params === void 0 ? void 0 : params.fit) !== null && _a !== void 0 ? _a : Fit.Contain;
        this.alignment = (_b = params === null || params === void 0 ? void 0 : params.alignment) !== null && _b !== void 0 ? _b : Alignment.Center;
        this.minX = (_c = params === null || params === void 0 ? void 0 : params.minX) !== null && _c !== void 0 ? _c : 0;
        this.minY = (_d = params === null || params === void 0 ? void 0 : params.minY) !== null && _d !== void 0 ? _d : 0;
        this.maxX = (_e = params === null || params === void 0 ? void 0 : params.maxX) !== null && _e !== void 0 ? _e : 0;
        this.maxY = (_f = params === null || params === void 0 ? void 0 : params.maxY) !== null && _f !== void 0 ? _f : 0;
    }
    // Alternative constructor to build a Layout from an interface/object
    Layout.new = function (_a) {
        var fit = _a.fit, alignment = _a.alignment, minX = _a.minX, minY = _a.minY, maxX = _a.maxX, maxY = _a.maxY;
        console.warn("This function is deprecated: please use `new Layout({})` instead");
        return new Layout({ fit: fit, alignment: alignment, minX: minX, minY: minY, maxX: maxX, maxY: maxY });
    };
    /**
     * Makes a copy of the layout, replacing any specified parameters
     */
    Layout.prototype.copyWith = function (_a) {
        var fit = _a.fit, alignment = _a.alignment, minX = _a.minX, minY = _a.minY, maxX = _a.maxX, maxY = _a.maxY;
        return new Layout({
            fit: fit !== null && fit !== void 0 ? fit : this.fit,
            alignment: alignment !== null && alignment !== void 0 ? alignment : this.alignment,
            minX: minX !== null && minX !== void 0 ? minX : this.minX,
            minY: minY !== null && minY !== void 0 ? minY : this.minY,
            maxX: maxX !== null && maxX !== void 0 ? maxX : this.maxX,
            maxY: maxY !== null && maxY !== void 0 ? maxY : this.maxY,
        });
    };
    // Returns fit for the Wasm runtime format
    Layout.prototype.runtimeFit = function (rive) {
        if (this.cachedRuntimeFit)
            return this.cachedRuntimeFit;
        var fit;
        if (this.fit === Fit.Cover)
            fit = rive.Fit.cover;
        else if (this.fit === Fit.Contain)
            fit = rive.Fit.contain;
        else if (this.fit === Fit.Fill)
            fit = rive.Fit.fill;
        else if (this.fit === Fit.FitWidth)
            fit = rive.Fit.fitWidth;
        else if (this.fit === Fit.FitHeight)
            fit = rive.Fit.fitHeight;
        else if (this.fit === Fit.ScaleDown)
            fit = rive.Fit.scaleDown;
        else
            fit = rive.Fit.none;
        this.cachedRuntimeFit = fit;
        return fit;
    };
    // Returns alignment for the Wasm runtime format
    Layout.prototype.runtimeAlignment = function (rive) {
        if (this.cachedRuntimeAlignment)
            return this.cachedRuntimeAlignment;
        var alignment;
        if (this.alignment === Alignment.TopLeft)
            alignment = rive.Alignment.topLeft;
        else if (this.alignment === Alignment.TopCenter)
            alignment = rive.Alignment.topCenter;
        else if (this.alignment === Alignment.TopRight)
            alignment = rive.Alignment.topRight;
        else if (this.alignment === Alignment.CenterLeft)
            alignment = rive.Alignment.centerLeft;
        else if (this.alignment === Alignment.CenterRight)
            alignment = rive.Alignment.centerRight;
        else if (this.alignment === Alignment.BottomLeft)
            alignment = rive.Alignment.bottomLeft;
        else if (this.alignment === Alignment.BottomCenter)
            alignment = rive.Alignment.bottomCenter;
        else if (this.alignment === Alignment.BottomRight)
            alignment = rive.Alignment.bottomRight;
        else
            alignment = rive.Alignment.center;
        this.cachedRuntimeAlignment = alignment;
        return alignment;
    };
    return Layout;
}());

// Runtime singleton; use getInstance to provide a callback that returns the
// Rive runtime
var RuntimeLoader = /** @class */ (function () {
    // Class is never instantiated
    function RuntimeLoader() {
    }
    // Loads the runtime
    RuntimeLoader.loadRuntime = function () {
        _rive_advanced_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]({
            // Loads Wasm bundle
            locateFile: function () { return RuntimeLoader.wasmURL; },
        })
            .then(function (rive) {
            var _a;
            RuntimeLoader.runtime = rive;
            // Fire all the callbacks
            while (RuntimeLoader.callBackQueue.length > 0) {
                (_a = RuntimeLoader.callBackQueue.shift()) === null || _a === void 0 ? void 0 : _a(RuntimeLoader.runtime);
            }
        })
            .catch(function () {
            // In case unpkg fails or goes down, we should try to load from jsdelivr
            var backupJsdelivrUrl = "https://cdn.jsdelivr.net/npm/".concat(package_json__WEBPACK_IMPORTED_MODULE_1__.name, "@").concat(package_json__WEBPACK_IMPORTED_MODULE_1__.version, "/rive.wasm");
            if (RuntimeLoader.wasmURL.toLowerCase() !== backupJsdelivrUrl) {
                console.warn("Failed to load WASM from ".concat(RuntimeLoader.wasmURL, ", trying jsdelivr as a backup"));
                RuntimeLoader.setWasmUrl(backupJsdelivrUrl);
                RuntimeLoader.loadRuntime();
            }
            else {
                console.error("Could not load Rive WASM file from unpkg or jsdelivr, network connection may be down, or \
        you may need to call set a new WASM source via RuntimeLoader.setWasmUrl() and call \
        RuntimeLoader.loadRuntime() again");
            }
        });
    };
    // Provides a runtime instance via a callback
    RuntimeLoader.getInstance = function (callback) {
        // If it's not loading, start loading runtime
        if (!RuntimeLoader.isLoading) {
            RuntimeLoader.isLoading = true;
            RuntimeLoader.loadRuntime();
        }
        if (!RuntimeLoader.runtime) {
            RuntimeLoader.callBackQueue.push(callback);
        }
        else {
            callback(RuntimeLoader.runtime);
        }
    };
    // Provides a runtime instance via a promise
    RuntimeLoader.awaitInstance = function () {
        return new Promise(function (resolve) {
            return RuntimeLoader.getInstance(function (rive) { return resolve(rive); });
        });
    };
    // Manually sets the wasm url
    RuntimeLoader.setWasmUrl = function (url) {
        RuntimeLoader.wasmURL = url;
    };
    // Flag to indicate that loading has started/completed
    RuntimeLoader.isLoading = false;
    // List of callbacks for the runtime that come in while loading
    RuntimeLoader.callBackQueue = [];
    // Path to the Wasm file; default path works for testing only;
    // if embedded wasm is used then this is never used.
    RuntimeLoader.wasmURL = "https://unpkg.com/".concat(package_json__WEBPACK_IMPORTED_MODULE_1__.name, "@").concat(package_json__WEBPACK_IMPORTED_MODULE_1__.version, "/rive.wasm");
    return RuntimeLoader;
}());

// #endregion
// #region animations
// Wraps animations and instances from the runtime and keeps track of playback
// state
var Animation = /** @class */ (function () {
    /**
     * Constructs a new animation
     * @constructor
     * @param {any} animation: runtime animation object
     * @param {any} instance: runtime animation instance object
     */
    function Animation(animation, artboard, runtime, playing) {
        this.animation = animation;
        this.artboard = artboard;
        this.playing = playing;
        this.loopCount = 0;
        // Time to which the animation should move to on the next render
        this.scrubTo = null;
        this.instance = new runtime.LinearAnimationInstance(animation, artboard);
    }
    Object.defineProperty(Animation.prototype, "name", {
        // Returns the animation's name
        get: function () {
            return this.animation.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animation.prototype, "time", {
        // Returns the animation's current time
        get: function () {
            return this.instance.time;
        },
        // Sets the animation's current time
        set: function (value) {
            this.instance.time = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animation.prototype, "loopValue", {
        // Returns the animation's loop type
        get: function () {
            return this.animation.loopValue;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Advances the animation by the give time. If the animation needs scrubbing,
     * time is ignored and the stored scrub value is used.
     * @param time the time to advance the animation by if no scrubbing required
     */
    Animation.prototype.advance = function (time) {
        if (this.scrubTo === null) {
            this.instance.advance(time);
        }
        else {
            this.instance.time = 0;
            this.instance.advance(this.scrubTo);
            this.scrubTo = null;
        }
    };
    /**
     * Apply interpolated keyframe values to the artboard. This should be called after calling
     * .advance() on an animation instance so that new values are applied to properties.
     *
     * Note: This does not advance the artboard, which updates all objects on the artboard
     * @param mix - Mix value for the animation from 0 to 1
     */
    Animation.prototype.apply = function (mix) {
        this.instance.apply(mix);
    };
    Object.defineProperty(Animation.prototype, "needsScrub", {
        get: function () {
            return this.scrubTo !== null;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Deletes the backing Wasm animation instance; once this is called, this
     * animation is no more.
     */
    Animation.prototype.cleanup = function () {
        this.instance.delete();
    };
    return Animation;
}());
// #endregion
// #region state machines
var StateMachineInputType;
(function (StateMachineInputType) {
    StateMachineInputType[StateMachineInputType["Number"] = 56] = "Number";
    StateMachineInputType[StateMachineInputType["Trigger"] = 58] = "Trigger";
    StateMachineInputType[StateMachineInputType["Boolean"] = 59] = "Boolean";
})(StateMachineInputType || (StateMachineInputType = {}));
/**
 * An input for a state machine
 */
var StateMachineInput = /** @class */ (function () {
    function StateMachineInput(type, runtimeInput) {
        this.type = type;
        this.runtimeInput = runtimeInput;
    }
    Object.defineProperty(StateMachineInput.prototype, "name", {
        /**
         * Returns the name of the input
         */
        get: function () {
            return this.runtimeInput.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StateMachineInput.prototype, "value", {
        /**
         * Returns the current value of the input
         */
        get: function () {
            return this.runtimeInput.value;
        },
        /**
         * Sets the value of the input
         */
        set: function (value) {
            this.runtimeInput.value = value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Fires a trigger; does nothing on Number or Boolean input types
     */
    StateMachineInput.prototype.fire = function () {
        if (this.type === StateMachineInputType.Trigger) {
            this.runtimeInput.fire();
        }
    };
    return StateMachineInput;
}());

var RiveEventType;
(function (RiveEventType) {
    RiveEventType[RiveEventType["General"] = 128] = "General";
    RiveEventType[RiveEventType["OpenUrl"] = 131] = "OpenUrl";
})(RiveEventType || (RiveEventType = {}));
var StateMachine = /** @class */ (function () {
    /**
     * @constructor
     * @param stateMachine runtime state machine object
     * @param instance runtime state machine instance object
     */
    function StateMachine(stateMachine, runtime, playing, artboard) {
        this.stateMachine = stateMachine;
        this.playing = playing;
        this.artboard = artboard;
        /**
         * Caches the inputs from the runtime
         */
        this.inputs = [];
        this.instance = new runtime.StateMachineInstance(stateMachine, artboard);
        this.initInputs(runtime);
    }
    Object.defineProperty(StateMachine.prototype, "name", {
        get: function () {
            return this.stateMachine.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StateMachine.prototype, "statesChanged", {
        /**
         * Returns a list of state names that have changed on this frame
         */
        get: function () {
            var names = [];
            for (var i = 0; i < this.instance.stateChangedCount(); i++) {
                names.push(this.instance.stateChangedNameByIndex(i));
            }
            return names;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Advances the state machine instance by a given time.
     * @param time - the time to advance the animation by in seconds
     */
    StateMachine.prototype.advance = function (time) {
        this.instance.advance(time);
    };
    /**
     * Returns the number of events reported from the last advance call
     * @returns Number of events reported
     */
    StateMachine.prototype.reportedEventCount = function () {
        return this.instance.reportedEventCount();
    };
    /**
     * Returns a RiveEvent object emitted from the last advance call at the given index
     * of a list of potentially multiple events. If an event at the index is not found,
     * undefined is returned.
     * @param i index of the event reported in a list of potentially multiple events
     * @returns RiveEvent or extended RiveEvent object returned, or undefined
     */
    StateMachine.prototype.reportedEventAt = function (i) {
        return this.instance.reportedEventAt(i);
    };
    /**
     * Fetches references to the state machine's inputs and caches them
     * @param runtime an instance of the runtime; needed for the SMIInput types
     */
    StateMachine.prototype.initInputs = function (runtime) {
        // Fetch the inputs from the runtime if we don't have them
        for (var i = 0; i < this.instance.inputCount(); i++) {
            var input = this.instance.input(i);
            this.inputs.push(this.mapRuntimeInput(input, runtime));
        }
    };
    /**
     * Maps a runtime input to it's appropriate type
     * @param input
     */
    StateMachine.prototype.mapRuntimeInput = function (input, runtime) {
        if (input.type === runtime.SMIInput.bool) {
            return new StateMachineInput(StateMachineInputType.Boolean, input.asBool());
        }
        else if (input.type === runtime.SMIInput.number) {
            return new StateMachineInput(StateMachineInputType.Number, input.asNumber());
        }
        else if (input.type === runtime.SMIInput.trigger) {
            return new StateMachineInput(StateMachineInputType.Trigger, input.asTrigger());
        }
    };
    /**
     * Deletes the backing Wasm state machine instance; once this is called, this
     * state machine is no more.
     */
    StateMachine.prototype.cleanup = function () {
        this.instance.delete();
    };
    return StateMachine;
}());
// #endregion
// #region animator
/**
 * Manages animation
 */
var Animator = /** @class */ (function () {
    /**
     * Constructs a new animator
     * @constructor
     * @param runtime Rive runtime; needed to instance animations & state machines
     * @param artboard the artboard that holds all animations and state machines
     * @param animations optional list of animations
     * @param stateMachines optional list of state machines
     */
    function Animator(runtime, artboard, eventManager, animations, stateMachines) {
        if (animations === void 0) { animations = []; }
        if (stateMachines === void 0) { stateMachines = []; }
        this.runtime = runtime;
        this.artboard = artboard;
        this.eventManager = eventManager;
        this.animations = animations;
        this.stateMachines = stateMachines;
    }
    /**
     * Adds animations and state machines by their names. If names are shared
     * between animations & state machines, then the first one found will be
     * created. Best not to use the same names for these in your Rive file.
     * @param animatable the name(s) of animations and state machines to add
     * @returns a list of names of the playing animations and state machines
     */
    Animator.prototype.add = function (animatables, playing, fireEvent) {
        if (fireEvent === void 0) { fireEvent = true; }
        animatables = mapToStringArray(animatables);
        // If animatables is empty, play or pause everything
        if (animatables.length === 0) {
            this.animations.forEach(function (a) { return (a.playing = playing); });
            this.stateMachines.forEach(function (m) { return (m.playing = playing); });
        }
        else {
            // Play/pause already instanced items, or create new instances
            var instancedAnimationNames = this.animations.map(function (a) { return a.name; });
            var instancedMachineNames = this.stateMachines.map(function (m) { return m.name; });
            for (var i = 0; i < animatables.length; i++) {
                var aIndex = instancedAnimationNames.indexOf(animatables[i]);
                var mIndex = instancedMachineNames.indexOf(animatables[i]);
                if (aIndex >= 0 || mIndex >= 0) {
                    if (aIndex >= 0) {
                        // Animation is instanced, play/pause it
                        this.animations[aIndex].playing = playing;
                    }
                    else {
                        // State machine is instanced, play/pause it
                        this.stateMachines[mIndex].playing = playing;
                    }
                }
                else {
                    // Try to create a new animation instance
                    var anim = this.artboard.animationByName(animatables[i]);
                    if (anim) {
                        var newAnimation = new Animation(anim, this.artboard, this.runtime, playing);
                        // Display the first frame of the specified animation
                        newAnimation.advance(0);
                        newAnimation.apply(1.0);
                        this.animations.push(newAnimation);
                    }
                    else {
                        // Try to create a new state machine instance
                        var sm = this.artboard.stateMachineByName(animatables[i]);
                        if (sm) {
                            var newStateMachine = new StateMachine(sm, this.runtime, playing, this.artboard);
                            this.stateMachines.push(newStateMachine);
                        }
                    }
                }
            }
        }
        // Fire play/paused events for animations
        if (fireEvent) {
            if (playing) {
                this.eventManager.fire({
                    type: EventType.Play,
                    data: this.playing,
                });
            }
            else {
                this.eventManager.fire({
                    type: EventType.Pause,
                    data: this.paused,
                });
            }
        }
        return playing ? this.playing : this.paused;
    };
    /**
     * Adds linear animations by their names.
     * @param animatables the name(s) of animations to add
     * @param playing whether animations should play on instantiation
     */
    Animator.prototype.initLinearAnimations = function (animatables, playing) {
        // Play/pause already instanced items, or create new instances
        // This validation is kept to maintain compatibility with current behavior.
        // But given that it this is called during artboard initialization
        // it should probably be safe to remove.
        var instancedAnimationNames = this.animations.map(function (a) { return a.name; });
        for (var i = 0; i < animatables.length; i++) {
            var aIndex = instancedAnimationNames.indexOf(animatables[i]);
            if (aIndex >= 0) {
                this.animations[aIndex].playing = playing;
            }
            else {
                // Try to create a new animation instance
                var anim = this.artboard.animationByName(animatables[i]);
                if (anim) {
                    var newAnimation = new Animation(anim, this.artboard, this.runtime, playing);
                    // Display the first frame of the specified animation
                    newAnimation.advance(0);
                    newAnimation.apply(1.0);
                    this.animations.push(newAnimation);
                }
            }
        }
    };
    /**
     * Adds state machines by their names.
     * @param animatables the name(s) of state machines to add
     * @param playing whether state machines should play on instantiation
     */
    Animator.prototype.initStateMachines = function (animatables, playing) {
        // Play/pause already instanced items, or create new instances
        // This validation is kept to maintain compatibility with current behavior.
        // But given that it this is called during artboard initialization
        // it should probably be safe to remove.
        var instancedStateMachineNames = this.stateMachines.map(function (a) { return a.name; });
        for (var i = 0; i < animatables.length; i++) {
            var aIndex = instancedStateMachineNames.indexOf(animatables[i]);
            if (aIndex >= 0) {
                this.stateMachines[aIndex].playing = playing;
            }
            else {
                // Try to create a new state machine instance
                var sm = this.artboard.stateMachineByName(animatables[i]);
                if (sm) {
                    var newStateMachine = new StateMachine(sm, this.runtime, playing, this.artboard);
                    this.stateMachines.push(newStateMachine);
                }
                else {
                    // In order to maintain compatibility with current behavior, if a state machine is not found
                    // we look for an animation with the same name
                    this.initLinearAnimations([animatables[i]], playing);
                }
            }
        }
    };
    /**
     * Play the named animations/state machines
     * @param animatables the names of the animations/machines to play; plays all if empty
     * @returns a list of the playing items
     */
    Animator.prototype.play = function (animatables) {
        return this.add(animatables, true);
    };
    /**
     * Pauses named animations and state machines, or everything if nothing is
     * specified
     * @param animatables names of the animations and state machines to pause
     * @returns a list of names of the animations and state machines paused
     */
    Animator.prototype.pause = function (animatables) {
        return this.add(animatables, false);
    };
    /**
     * Set time of named animations
     * @param animations names of the animations to scrub
     * @param value time scrub value, a floating point number to which the playhead is jumped
     * @returns a list of names of the animations that were scrubbed
     */
    Animator.prototype.scrub = function (animatables, value) {
        var forScrubbing = this.animations.filter(function (a) {
            return animatables.includes(a.name);
        });
        forScrubbing.forEach(function (a) { return (a.scrubTo = value); });
        return forScrubbing.map(function (a) { return a.name; });
    };
    Object.defineProperty(Animator.prototype, "playing", {
        /**
         * Returns a list of names of all animations and state machines currently
         * playing
         */
        get: function () {
            return this.animations
                .filter(function (a) { return a.playing; })
                .map(function (a) { return a.name; })
                .concat(this.stateMachines.filter(function (m) { return m.playing; }).map(function (m) { return m.name; }));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animator.prototype, "paused", {
        /**
         * Returns a list of names of all animations and state machines currently
         * paused
         */
        get: function () {
            return this.animations
                .filter(function (a) { return !a.playing; })
                .map(function (a) { return a.name; })
                .concat(this.stateMachines.filter(function (m) { return !m.playing; }).map(function (m) { return m.name; }));
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Stops and removes all named animations and state machines
     * @param animatables animations and state machines to remove
     * @returns a list of names of removed items
     */
    Animator.prototype.stop = function (animatables) {
        var _this = this;
        animatables = mapToStringArray(animatables);
        // If nothing's specified, wipe them out, all of them
        var removedNames = [];
        // Stop everything
        if (animatables.length === 0) {
            removedNames = this.animations
                .map(function (a) { return a.name; })
                .concat(this.stateMachines.map(function (m) { return m.name; }));
            // Clean up before emptying the arrays
            this.animations.forEach(function (a) { return a.cleanup(); });
            this.stateMachines.forEach(function (m) { return m.cleanup(); });
            // Empty out the arrays
            this.animations.splice(0, this.animations.length);
            this.stateMachines.splice(0, this.stateMachines.length);
        }
        else {
            // Remove only the named animations/state machines
            var animationsToRemove = this.animations.filter(function (a) {
                return animatables.includes(a.name);
            });
            animationsToRemove.forEach(function (a) {
                a.cleanup();
                _this.animations.splice(_this.animations.indexOf(a), 1);
            });
            var machinesToRemove = this.stateMachines.filter(function (m) {
                return animatables.includes(m.name);
            });
            machinesToRemove.forEach(function (m) {
                m.cleanup();
                _this.stateMachines.splice(_this.stateMachines.indexOf(m), 1);
            });
            removedNames = animationsToRemove
                .map(function (a) { return a.name; })
                .concat(machinesToRemove.map(function (m) { return m.name; }));
        }
        this.eventManager.fire({
            type: EventType.Stop,
            data: removedNames,
        });
        // Return the list of animations removed
        return removedNames;
    };
    Object.defineProperty(Animator.prototype, "isPlaying", {
        /**
         * Returns true if at least one animation is active
         */
        get: function () {
            return (this.animations.reduce(function (acc, curr) { return acc || curr.playing; }, false) ||
                this.stateMachines.reduce(function (acc, curr) { return acc || curr.playing; }, false));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animator.prototype, "isPaused", {
        /**
         * Returns true if all animations are paused and there's at least one animation
         */
        get: function () {
            return (!this.isPlaying &&
                (this.animations.length > 0 || this.stateMachines.length > 0));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animator.prototype, "isStopped", {
        /**
         * Returns true if there are no playing or paused animations/state machines
         */
        get: function () {
            return this.animations.length === 0 && this.stateMachines.length === 0;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * If there are no animations or state machines, add the first one found
     * @returns the name of the animation or state machine instanced
     */
    Animator.prototype.atLeastOne = function (playing, fireEvent) {
        if (fireEvent === void 0) { fireEvent = true; }
        var instancedName;
        if (this.animations.length === 0 && this.stateMachines.length === 0) {
            if (this.artboard.animationCount() > 0) {
                // Add the first animation
                this.add([(instancedName = this.artboard.animationByIndex(0).name)], playing, fireEvent);
            }
            else if (this.artboard.stateMachineCount() > 0) {
                // Add the first state machine
                this.add([(instancedName = this.artboard.stateMachineByIndex(0).name)], playing, fireEvent);
            }
        }
        return instancedName;
    };
    /**
     * Checks if any animations have looped and if so, fire the appropriate event
     */
    Animator.prototype.handleLooping = function () {
        for (var _i = 0, _a = this.animations.filter(function (a) { return a.playing; }); _i < _a.length; _i++) {
            var animation = _a[_i];
            // Emit if the animation looped
            if (animation.loopValue === 0 && animation.loopCount) {
                animation.loopCount = 0;
                // This is a one-shot; if it has ended, delete the instance
                this.stop(animation.name);
            }
            else if (animation.loopValue === 1 && animation.loopCount) {
                this.eventManager.fire({
                    type: EventType.Loop,
                    data: { animation: animation.name, type: LoopType.Loop },
                });
                animation.loopCount = 0;
            }
            // Wasm indicates a loop at each time the animation
            // changes direction, so a full loop/lap occurs every
            // two loop counts
            else if (animation.loopValue === 2 && animation.loopCount > 1) {
                this.eventManager.fire({
                    type: EventType.Loop,
                    data: { animation: animation.name, type: LoopType.PingPong },
                });
                animation.loopCount = 0;
            }
        }
    };
    /**
     * Checks if states have changed in state machines and fires a statechange
     * event
     */
    Animator.prototype.handleStateChanges = function () {
        var statesChanged = [];
        for (var _i = 0, _a = this.stateMachines.filter(function (sm) { return sm.playing; }); _i < _a.length; _i++) {
            var stateMachine = _a[_i];
            statesChanged.push.apply(statesChanged, stateMachine.statesChanged);
        }
        if (statesChanged.length > 0) {
            this.eventManager.fire({
                type: EventType.StateChange,
                data: statesChanged,
            });
        }
    };
    Animator.prototype.handleAdvancing = function (time) {
        this.eventManager.fire({
            type: EventType.Advance,
            data: time,
        });
    };
    return Animator;
}());
// #endregion
// #region events
/**
 * Supported event types triggered in Rive
 */
var EventType;
(function (EventType) {
    EventType["Load"] = "load";
    EventType["LoadError"] = "loaderror";
    EventType["Play"] = "play";
    EventType["Pause"] = "pause";
    EventType["Stop"] = "stop";
    EventType["Loop"] = "loop";
    EventType["Draw"] = "draw";
    EventType["Advance"] = "advance";
    EventType["StateChange"] = "statechange";
    EventType["RiveEvent"] = "riveevent";
})(EventType || (EventType = {}));
/**
 * Looping types: one-shot, loop, and ping-pong
 */
var LoopType;
(function (LoopType) {
    LoopType["OneShot"] = "oneshot";
    LoopType["Loop"] = "loop";
    LoopType["PingPong"] = "pingpong";
})(LoopType || (LoopType = {}));
// Manages Rive events and listeners
var EventManager = /** @class */ (function () {
    function EventManager(listeners) {
        if (listeners === void 0) { listeners = []; }
        this.listeners = listeners;
    }
    // Gets listeners of specified type
    EventManager.prototype.getListeners = function (type) {
        return this.listeners.filter(function (e) { return e.type === type; });
    };
    // Adds a listener
    EventManager.prototype.add = function (listener) {
        if (!this.listeners.includes(listener)) {
            this.listeners.push(listener);
        }
    };
    /**
     * Removes a listener
     * @param listener the listener with the callback to be removed
     */
    EventManager.prototype.remove = function (listener) {
        // We can't simply look for the listener as it'll be a different instance to
        // one originally subscribed. Find all the listeners of the right type and
        // then check their callbacks which should match.
        for (var i = 0; i < this.listeners.length; i++) {
            var currentListener = this.listeners[i];
            if (currentListener.type === listener.type) {
                if (currentListener.callback === listener.callback) {
                    this.listeners.splice(i, 1);
                    break;
                }
            }
        }
    };
    /**
     * Clears all listeners of specified type, or every listener if no type is
     * specified
     * @param type the type of listeners to clear, or all listeners if not
     * specified
     */
    EventManager.prototype.removeAll = function (type) {
        var _this = this;
        if (!type) {
            this.listeners.splice(0, this.listeners.length);
        }
        else {
            this.listeners
                .filter(function (l) { return l.type === type; })
                .forEach(function (l) { return _this.remove(l); });
        }
    };
    // Fires an event
    EventManager.prototype.fire = function (event) {
        var eventListeners = this.getListeners(event.type);
        eventListeners.forEach(function (listener) { return listener.callback(event); });
    };
    return EventManager;
}());
// Manages a queue of tasks
var TaskQueueManager = /** @class */ (function () {
    function TaskQueueManager(eventManager) {
        this.eventManager = eventManager;
        this.queue = [];
    }
    // Adds a task top the queue
    TaskQueueManager.prototype.add = function (task) {
        this.queue.push(task);
    };
    // Processes all tasks in the queue
    TaskQueueManager.prototype.process = function () {
        while (this.queue.length > 0) {
            var task = this.queue.shift();
            if (task === null || task === void 0 ? void 0 : task.action) {
                task.action();
            }
            if (task === null || task === void 0 ? void 0 : task.event) {
                this.eventManager.fire(task.event);
            }
        }
    };
    return TaskQueueManager;
}());
var Rive = /** @class */ (function () {
    function Rive(params) {
        var _a;
        // Tracks if a Rive file is loaded
        this.loaded = false;
        /**
         * Tracks if a Rive file is loaded; we need this in addition to loaded as some
         * commands (e.g. contents) can be called as soon as the file is loaded.
         * However, playback commands need to be queued and run in order once initial
         * animations and autoplay has been sorted out. This applies to play, pause,
         * and start.
         */
        this.readyForPlaying = false;
        // Runtime artboard
        this.artboard = null;
        // place to clear up event listeners
        this.eventCleanup = null;
        this.shouldDisableRiveListeners = false;
        this.automaticallyHandleEvents = false;
        // Allow the runtime to automatically load assets hosted in Rive's runtime.
        this.enableRiveAssetCDN = true;
        // Durations to generate a frame for the last second. Used for performance profiling.
        this.durations = [];
        this.frameTimes = [];
        this.frameCount = 0;
        /**
         * Used be draw to track when a second of active rendering time has passed.
         * Used for debugging purposes
         */
        this.renderSecondTimer = 0;
        this.canvas = params.canvas;
        this.src = params.src;
        this.buffer = params.buffer;
        this.layout = (_a = params.layout) !== null && _a !== void 0 ? _a : new Layout();
        this.shouldDisableRiveListeners = !!params.shouldDisableRiveListeners;
        this.automaticallyHandleEvents = !!params.automaticallyHandleEvents;
        this.enableRiveAssetCDN =
            params.enableRiveAssetCDN === undefined
                ? true
                : params.enableRiveAssetCDN;
        // New event management system
        this.eventManager = new EventManager();
        if (params.onLoad)
            this.on(EventType.Load, params.onLoad);
        if (params.onLoadError)
            this.on(EventType.LoadError, params.onLoadError);
        if (params.onPlay)
            this.on(EventType.Play, params.onPlay);
        if (params.onPause)
            this.on(EventType.Pause, params.onPause);
        if (params.onStop)
            this.on(EventType.Stop, params.onStop);
        if (params.onLoop)
            this.on(EventType.Loop, params.onLoop);
        if (params.onStateChange)
            this.on(EventType.StateChange, params.onStateChange);
        if (params.onAdvance)
            this.on(EventType.Advance, params.onAdvance);
        /**
         * @deprecated Use camelCase'd versions instead.
         */
        if (params.onload && !params.onLoad)
            this.on(EventType.Load, params.onload);
        if (params.onloaderror && !params.onLoadError)
            this.on(EventType.LoadError, params.onloaderror);
        if (params.onplay && !params.onPlay)
            this.on(EventType.Play, params.onplay);
        if (params.onpause && !params.onPause)
            this.on(EventType.Pause, params.onpause);
        if (params.onstop && !params.onStop)
            this.on(EventType.Stop, params.onstop);
        if (params.onloop && !params.onLoop)
            this.on(EventType.Loop, params.onloop);
        if (params.onstatechange && !params.onStateChange)
            this.on(EventType.StateChange, params.onstatechange);
        /**
         * Asset loading
         */
        if (params.assetLoader)
            this.assetLoader = params.assetLoader;
        // Hook up the task queue
        this.taskQueue = new TaskQueueManager(this.eventManager);
        this.init({
            src: this.src,
            buffer: this.buffer,
            autoplay: params.autoplay,
            animations: params.animations,
            stateMachines: params.stateMachines,
            artboard: params.artboard,
            useOffscreenRenderer: params.useOffscreenRenderer,
        });
    }
    // Alternative constructor to build a Rive instance from an interface/object
    Rive.new = function (params) {
        console.warn("This function is deprecated: please use `new Rive({})` instead");
        return new Rive(params);
    };
    // Initializes the Rive object either from constructor or load()
    Rive.prototype.init = function (_a) {
        var _this = this;
        var src = _a.src, buffer = _a.buffer, animations = _a.animations, stateMachines = _a.stateMachines, artboard = _a.artboard, _b = _a.autoplay, autoplay = _b === void 0 ? false : _b, _c = _a.useOffscreenRenderer, useOffscreenRenderer = _c === void 0 ? false : _c;
        this.src = src;
        this.buffer = buffer;
        // If no source file url specified, it's a bust
        if (!this.src && !this.buffer) {
            throw new Error(Rive.missingErrorMessage);
        }
        // List of animations that should be initialized.
        var startingAnimationNames = mapToStringArray(animations);
        // List of state machines that should be initialized
        var startingStateMachineNames = mapToStringArray(stateMachines);
        // Ensure loaded is marked as false if loading new file
        this.loaded = false;
        this.readyForPlaying = false;
        // Ensure the runtime is loaded
        RuntimeLoader.awaitInstance()
            .then(function (runtime) {
            _this.runtime = runtime;
            // Get the canvas where you want to render the animation and create a renderer
            _this.renderer = _this.runtime.makeRenderer(_this.canvas, useOffscreenRenderer);
            // Initial size adjustment based on devicePixelRatio if no width/height are
            // specified explicitly
            if (!(_this.canvas.width || _this.canvas.height)) {
                _this.resizeDrawingSurfaceToCanvas();
            }
            // Load Rive data from a source uri or a data buffer
            _this.initData(artboard, startingAnimationNames, startingStateMachineNames, autoplay)
                .then(function () { return _this.setupRiveListeners(); })
                .catch(function (e) {
                console.error(e);
            });
        })
            .catch(function (e) {
            console.error(e);
        });
    };
    Rive.prototype.setupRiveListeners = function () {
        var _this = this;
        if (!this.shouldDisableRiveListeners) {
            var activeStateMachines = (this.animator.stateMachines || [])
                .filter(function (sm) { return sm.playing && _this.runtime.hasListeners(sm.instance); })
                .map(function (sm) { return sm.instance; });
            this.eventCleanup = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.registerTouchInteractions)({
                canvas: this.canvas,
                artboard: this.artboard,
                stateMachines: activeStateMachines,
                renderer: this.renderer,
                rive: this.runtime,
                fit: this._layout.runtimeFit(this.runtime),
                alignment: this._layout.runtimeAlignment(this.runtime),
            });
        }
    };
    // Initializes runtime with Rive data and preps for playing
    Rive.prototype.initData = function (artboardName, animationNames, stateMachineNames, autoplay) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var _b, loader, _c, msg;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!this.src) return [3 /*break*/, 2];
                        _b = this;
                        return [4 /*yield*/, loadRiveFile(this.src)];
                    case 1:
                        _b.buffer = _d.sent();
                        _d.label = 2;
                    case 2:
                        if (this.assetLoader) {
                            loader = new this.runtime.CustomFileAssetLoader({
                                loadContents: this.assetLoader,
                            });
                        }
                        // Load the Rive file
                        _c = this;
                        return [4 /*yield*/, this.runtime.load(new Uint8Array(this.buffer), loader, this.enableRiveAssetCDN)];
                    case 3:
                        // Load the Rive file
                        _c.file = _d.sent();
                        if (this.file) {
                            // Initialize and draw frame
                            this.initArtboard(artboardName, animationNames, stateMachineNames, autoplay);
                            // Everything's set up, emit a load event
                            this.loaded = true;
                            this.eventManager.fire({
                                type: EventType.Load,
                                data: (_a = this.src) !== null && _a !== void 0 ? _a : "buffer",
                            });
                            // Flag ready for playback commands and clear the task queue; this order
                            // is important or it may infinitely recurse
                            this.readyForPlaying = true;
                            this.taskQueue.process();
                            this.drawFrame();
                            return [2 /*return*/, Promise.resolve()];
                        }
                        else {
                            msg = "Problem loading file; may be corrupt!";
                            console.warn(msg);
                            this.eventManager.fire({ type: EventType.LoadError, data: msg });
                            return [2 /*return*/, Promise.reject(msg)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // Initialize for playback
    Rive.prototype.initArtboard = function (artboardName, animationNames, stateMachineNames, autoplay) {
        // Fetch the artboard
        var rootArtboard = artboardName
            ? this.file.artboardByName(artboardName)
            : this.file.defaultArtboard();
        // Check we have a working artboard
        if (!rootArtboard) {
            var msg = "Invalid artboard name or no default artboard";
            console.warn(msg);
            this.eventManager.fire({ type: EventType.LoadError, data: msg });
            return;
        }
        this.artboard = rootArtboard;
        // Check that the artboard has at least 1 animation
        if (this.artboard.animationCount() < 1) {
            var msg = "Artboard has no animations";
            this.eventManager.fire({ type: EventType.LoadError, data: msg });
            throw msg;
        }
        // Initialize the animator
        this.animator = new Animator(this.runtime, this.artboard, this.eventManager);
        // Initialize the animations; as loaded hasn't happened yet, we need to
        // suppress firing the play/pause events until the load event has fired. To
        // do this we tell the animator to suppress firing events, and add event
        // firing to the task queue.
        var instanceNames;
        if (animationNames.length > 0 || stateMachineNames.length > 0) {
            instanceNames = animationNames.concat(stateMachineNames);
            this.animator.initLinearAnimations(animationNames, autoplay);
            this.animator.initStateMachines(stateMachineNames, autoplay);
        }
        else {
            instanceNames = [this.animator.atLeastOne(autoplay, false)];
        }
        // Queue up firing the playback events
        this.taskQueue.add({
            event: {
                type: autoplay ? EventType.Play : EventType.Pause,
                data: instanceNames,
            },
        });
    };
    // Draws the current artboard frame
    Rive.prototype.drawFrame = function () {
        this.startRendering();
    };
    /**
     * Draw rendering loop; renders animation frames at the correct time interval.
     * @param time the time at which to render a frame
     */
    Rive.prototype.draw = function (time, onSecond) {
        var before = performance.now();
        // Clear the frameRequestId, as we're now rendering a fresh frame
        this.frameRequestId = null;
        // On the first pass, make sure lastTime has a valid value
        if (!this.lastRenderTime) {
            this.lastRenderTime = time;
        }
        // Handle the onSecond callback
        this.renderSecondTimer += time - this.lastRenderTime;
        if (this.renderSecondTimer > 5000) {
            this.renderSecondTimer = 0;
            onSecond === null || onSecond === void 0 ? void 0 : onSecond();
        }
        // Calculate the elapsed time between frames in seconds
        var elapsedTime = (time - this.lastRenderTime) / 1000;
        this.lastRenderTime = time;
        // - Advance non-paused animations by the elapsed number of seconds
        // - Advance any animations that require scrubbing
        // - Advance to the first frame even when autoplay is false
        var activeAnimations = this.animator.animations
            .filter(function (a) { return a.playing || a.needsScrub; })
            // The scrubbed animations must be applied first to prevent weird artifacts
            // if the playing animations conflict with the scrubbed animating attribuates.
            .sort(function (first) { return (first.needsScrub ? -1 : 1); });
        for (var _i = 0, activeAnimations_1 = activeAnimations; _i < activeAnimations_1.length; _i++) {
            var animation = activeAnimations_1[_i];
            animation.advance(elapsedTime);
            if (animation.instance.didLoop) {
                animation.loopCount += 1;
            }
            animation.apply(1.0);
        }
        // - Advance non-paused state machines by the elapsed number of seconds
        // - Advance to the first frame even when autoplay is false
        var activeStateMachines = this.animator.stateMachines.filter(function (a) { return a.playing; });
        for (var _a = 0, activeStateMachines_1 = activeStateMachines; _a < activeStateMachines_1.length; _a++) {
            var stateMachine = activeStateMachines_1[_a];
            // Check for events before the current frame's state machine advance
            var numEventsReported = stateMachine.reportedEventCount();
            if (numEventsReported) {
                for (var i = 0; i < numEventsReported; i++) {
                    var event_1 = stateMachine.reportedEventAt(i);
                    if (event_1) {
                        if (event_1.type === RiveEventType.OpenUrl) {
                            this.eventManager.fire({
                                type: EventType.RiveEvent,
                                data: event_1,
                            });
                            // Handle the event side effect if explicitly enabled
                            if (this.automaticallyHandleEvents) {
                                var newAnchorTag = document.createElement("a");
                                var _b = event_1, url = _b.url, target = _b.target;
                                var sanitizedUrl = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.sanitizeUrl)(url);
                                url && newAnchorTag.setAttribute("href", sanitizedUrl);
                                target && newAnchorTag.setAttribute("target", target);
                                if (sanitizedUrl && sanitizedUrl !== _utils__WEBPACK_IMPORTED_MODULE_2__.BLANK_URL) {
                                    newAnchorTag.click();
                                }
                            }
                        }
                        else {
                            this.eventManager.fire({
                                type: EventType.RiveEvent,
                                data: event_1,
                            });
                        }
                    }
                }
            }
            stateMachine.advance(elapsedTime);
            // stateMachine.instance.apply(this.artboard);
        }
        // Once the animations have been applied to the artboard, advance it
        // by the elapsed time.
        this.artboard.advance(elapsedTime);
        var renderer = this.renderer;
        // Canvas must be wiped to prevent artifacts
        renderer.clear();
        renderer.save();
        // Update the renderer alignment if necessary
        this.alignRenderer();
        this.artboard.draw(renderer);
        renderer.restore();
        renderer.flush();
        // Check for any animations that looped
        this.animator.handleLooping();
        // Check for any state machines that had a state change
        this.animator.handleStateChanges();
        // Report advanced time
        this.animator.handleAdvancing(elapsedTime);
        // Add duration to create frame to durations array
        this.frameCount++;
        var after = performance.now();
        this.frameTimes.push(after);
        this.durations.push(after - before);
        while (this.frameTimes[0] <= after - 1000) {
            this.frameTimes.shift();
            this.durations.shift();
        }
        // Calling requestAnimationFrame will rerun draw() at the correct rate:
        // https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations
        if (this.animator.isPlaying) {
            // Request a new rendering frame
            this.startRendering();
        }
        else if (this.animator.isPaused) {
            // Reset the end time so on playback it starts at the correct frame
            this.lastRenderTime = 0;
        }
        else if (this.animator.isStopped) {
            // Reset animation instances, artboard and time
            // TODO: implement this properly when we have instancing
            // this.initArtboard();
            // this.drawFrame();
            this.lastRenderTime = 0;
        }
    };
    /**
     * Align the renderer
     */
    Rive.prototype.alignRenderer = function () {
        var _a = this, renderer = _a.renderer, runtime = _a.runtime, _layout = _a._layout, artboard = _a.artboard;
        // Align things up safe in the knowledge we can restore if changed
        renderer.align(_layout.runtimeFit(runtime), _layout.runtimeAlignment(runtime), {
            minX: _layout.minX,
            minY: _layout.minY,
            maxX: _layout.maxX,
            maxY: _layout.maxY,
        }, artboard.bounds);
    };
    Object.defineProperty(Rive.prototype, "fps", {
        get: function () {
            return this.durations.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rive.prototype, "frameTime", {
        get: function () {
            if (this.durations.length === 0) {
                return 0;
            }
            return (this.durations.reduce(function (a, b) { return a + b; }, 0) / this.durations.length).toFixed(4);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Cleans up all Wasm-generated objects that need to be manually destroyed:
     * artboard instances, animation instances, state machine instances,
     * renderer instance, file and runtime.
     *
     * Once this is called, you will need to initialise a new instance of the
     * Rive class
     */
    Rive.prototype.cleanup = function () {
        var _a, _b, _c;
        // Stop the renderer if it hasn't already been stopped.
        this.stopRendering();
        // Clean up any artboard, animation or state machine instances.
        this.cleanupInstances();
        // Only CanvasRenderer needs a delete for now, not WebGL.. might be a better
        // way to detect this in the future 
        if ((_a = this.runtime) === null || _a === void 0 ? void 0 : _a.CanvasRenderer) {
            (_b = this.renderer) === null || _b === void 0 ? void 0 : _b.delete();
        }
        this.renderer = null;
        // Delete the rive file
        (_c = this.file) === null || _c === void 0 ? void 0 : _c.delete();
        this.file = null;
    };
    /**
     * Cleans up any Wasm-generated objects that need to be manually destroyed:
     * artboard instances, animation instances, state machine instances.
     *
     * Once this is called, things will need to be reinitialized or bad things
     * might happen.
     */
    Rive.prototype.cleanupInstances = function () {
        if (this.eventCleanup !== null) {
            this.eventCleanup();
        }
        // Delete all animation and state machine instances
        this.stop();
        if (this.artboard) {
            this.artboard.delete();
            this.artboard = null;
        }
    };
    /**
     * Tries to query the setup Artboard for a text run node with the given name.
     *
     * @param textRunName - Name of the text run node associated with a text object
     * @returns - TextValueRun node or undefined if the text run cannot be queried
     */
    Rive.prototype.retrieveTextRun = function (textRunName) {
        var _a;
        if (!textRunName) {
            console.warn("No text run name provided");
            return;
        }
        if (!this.artboard) {
            console.warn("Tried to access text run, but the Artboard is null");
            return;
        }
        var textRun = this.artboard.textRun(textRunName);
        if (!textRun) {
            console.warn("Could not access a text run with name '".concat(textRunName, "' in the '").concat((_a = this.artboard) === null || _a === void 0 ? void 0 : _a.name, "' Artboard. Note that you must rename a text run node in the Rive editor to make it queryable at runtime."));
            return;
        }
        return textRun;
    };
    /**
     * Returns a string from a given text run node name, or undefined if the text run
     * cannot be queried.
     *
     * @param textRunName - Name of the text run node associated with a text object
     * @returns - String value of the text run node or undefined
     */
    Rive.prototype.getTextRunValue = function (textRunName) {
        var textRun = this.retrieveTextRun(textRunName);
        return textRun ? textRun.text : undefined;
    };
    /**
     * Sets a text value for a given text run node name if possible
     *
     * @param textRunName - Name of the text run node associated with a text object
     * @param textRunValue - String value to set on the text run node
     */
    Rive.prototype.setTextRunValue = function (textRunName, textRunValue) {
        var textRun = this.retrieveTextRun(textRunName);
        if (textRun) {
            textRun.text = textRunValue;
        }
    };
    // Plays specified animations; if none specified, it unpauses everything.
    Rive.prototype.play = function (animationNames, autoplay) {
        var _this = this;
        animationNames = mapToStringArray(animationNames);
        // If the file's not loaded, queue up the play
        if (!this.readyForPlaying) {
            this.taskQueue.add({
                action: function () { return _this.play(animationNames, autoplay); },
            });
            return;
        }
        this.animator.play(animationNames);
        if (this.eventCleanup) {
            this.eventCleanup();
        }
        this.setupRiveListeners();
        this.startRendering();
    };
    // Pauses specified animations; if none specified, pauses all.
    Rive.prototype.pause = function (animationNames) {
        var _this = this;
        animationNames = mapToStringArray(animationNames);
        // If the file's not loaded, early out, nothing to pause
        if (!this.readyForPlaying) {
            this.taskQueue.add({
                action: function () { return _this.pause(animationNames); },
            });
            return;
        }
        if (this.eventCleanup) {
            this.eventCleanup();
        }
        this.animator.pause(animationNames);
    };
    Rive.prototype.scrub = function (animationNames, value) {
        var _this = this;
        animationNames = mapToStringArray(animationNames);
        // If the file's not loaded, early out, nothing to pause
        if (!this.readyForPlaying) {
            this.taskQueue.add({
                action: function () { return _this.scrub(animationNames, value); },
            });
            return;
        }
        // Scrub the animation time; we draw a single frame here so that if
        // nothing's currently playing, the scrubbed animation is still rendered/
        this.animator.scrub(animationNames, value || 0);
        this.drawFrame();
    };
    // Stops specified animations; if none specifies, stops them all.
    Rive.prototype.stop = function (animationNames) {
        var _this = this;
        animationNames = mapToStringArray(animationNames);
        // If the file's not loaded, early out, nothing to pause
        if (!this.readyForPlaying) {
            this.taskQueue.add({
                action: function () { return _this.stop(animationNames); },
            });
            return;
        }
        this.animator.stop(animationNames);
        if (this.eventCleanup) {
            this.eventCleanup();
        }
    };
    /**
     * Resets the animation
     * @param artboard the name of the artboard, or default if none given
     * @param animations the names of animations for playback
     * @param stateMachines the names of state machines for playback
     * @param autoplay whether to autoplay when reset, defaults to false
     *
     */
    Rive.prototype.reset = function (params) {
        var _a;
        // Get the current artboard, animations, state machines, and playback states
        var artBoardName = params === null || params === void 0 ? void 0 : params.artboard;
        var animationNames = mapToStringArray(params === null || params === void 0 ? void 0 : params.animations);
        var stateMachineNames = mapToStringArray(params === null || params === void 0 ? void 0 : params.stateMachines);
        var autoplay = (_a = params === null || params === void 0 ? void 0 : params.autoplay) !== null && _a !== void 0 ? _a : false;
        // Stop everything and clean up
        this.cleanupInstances();
        // Reinitialize an artboard instance with the state
        this.initArtboard(artBoardName, animationNames, stateMachineNames, autoplay);
        this.taskQueue.process();
    };
    // Loads a new Rive file, keeping listeners in place
    Rive.prototype.load = function (params) {
        // Stop all animations
        this.stop();
        // Reinitialize
        this.init(params);
    };
    Object.defineProperty(Rive.prototype, "layout", {
        /**
         * Returns the current layout. Note that layout should be treated as
         * immutable. If you want to change the layout, create a new one use the
         * layout setter
         */
        get: function () {
            return this._layout;
        },
        // Sets a new layout
        set: function (layout) {
            this._layout = layout;
            // If the maxX or maxY are 0, then set them to the canvas width and height
            if (!layout.maxX || !layout.maxY) {
                this.resizeToCanvas();
            }
            if (this.loaded && !this.animator.isPlaying) {
                this.drawFrame();
            }
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Sets the layout bounds to the current canvas size; this is typically called
     * when the canvas is resized
     */
    Rive.prototype.resizeToCanvas = function () {
        this._layout = this.layout.copyWith({
            minX: 0,
            minY: 0,
            maxX: this.canvas.width,
            maxY: this.canvas.height,
        });
    };
    /**
     * Accounts for devicePixelRatio as a multiplier to render the size of the canvas drawing surface.
     * Uses the size of the backing canvas to set new width/height attributes. Need to re-render
     * and resize the layout to match the new drawing surface afterwards.
     * Useful function for consumers to include in a window resize listener
     */
    Rive.prototype.resizeDrawingSurfaceToCanvas = function () {
        if (this.canvas instanceof HTMLCanvasElement && !!window) {
            var _a = this.canvas.getBoundingClientRect(), width = _a.width, height = _a.height;
            var dpr = window.devicePixelRatio || 1;
            this.canvas.width = dpr * width;
            this.canvas.height = dpr * height;
            this.startRendering();
            this.resizeToCanvas();
        }
    };
    Object.defineProperty(Rive.prototype, "source", {
        // Returns the animation source, which may be undefined
        get: function () {
            return this.src;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rive.prototype, "activeArtboard", {
        /**
         * Returns the name of the active artboard
         */
        get: function () {
            return this.artboard ? this.artboard.name : "";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rive.prototype, "animationNames", {
        // Returns a list of animation names on the chosen artboard
        get: function () {
            // If the file's not loaded, we got nothing to return
            if (!this.loaded) {
                return [];
            }
            var animationNames = [];
            for (var i = 0; i < this.artboard.animationCount(); i++) {
                animationNames.push(this.artboard.animationByIndex(i).name);
            }
            return animationNames;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rive.prototype, "stateMachineNames", {
        /**
         * Returns a list of state machine names from the current artboard
         */
        get: function () {
            // If the file's not loaded, we got nothing to return
            if (!this.loaded) {
                return [];
            }
            var stateMachineNames = [];
            for (var i = 0; i < this.artboard.stateMachineCount(); i++) {
                stateMachineNames.push(this.artboard.stateMachineByIndex(i).name);
            }
            return stateMachineNames;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Returns the inputs for the specified instanced state machine, or an empty
     * list if the name is invalid or the state machine is not instanced
     * @param name the state machine name
     * @returns the inputs for the named state machine
     */
    Rive.prototype.stateMachineInputs = function (name) {
        // If the file's not loaded, early out, nothing to pause
        if (!this.loaded) {
            return;
        }
        var stateMachine = this.animator.stateMachines.find(function (m) { return m.name === name; });
        return stateMachine === null || stateMachine === void 0 ? void 0 : stateMachine.inputs;
    };
    Object.defineProperty(Rive.prototype, "playingStateMachineNames", {
        // Returns a list of playing machine names
        get: function () {
            // If the file's not loaded, we got nothing to return
            if (!this.loaded) {
                return [];
            }
            return this.animator.stateMachines
                .filter(function (m) { return m.playing; })
                .map(function (m) { return m.name; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rive.prototype, "playingAnimationNames", {
        // Returns a list of playing animation names
        get: function () {
            // If the file's not loaded, we got nothing to return
            if (!this.loaded) {
                return [];
            }
            return this.animator.animations.filter(function (a) { return a.playing; }).map(function (a) { return a.name; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rive.prototype, "pausedAnimationNames", {
        // Returns a list of paused animation names
        get: function () {
            // If the file's not loaded, we got nothing to return
            if (!this.loaded) {
                return [];
            }
            return this.animator.animations
                .filter(function (a) { return !a.playing; })
                .map(function (a) { return a.name; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rive.prototype, "pausedStateMachineNames", {
        /**
         *  Returns a list of paused machine names
         * @returns a list of state machine names that are paused
         */
        get: function () {
            // If the file's not loaded, we got nothing to return
            if (!this.loaded) {
                return [];
            }
            return this.animator.stateMachines
                .filter(function (m) { return !m.playing; })
                .map(function (m) { return m.name; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rive.prototype, "isPlaying", {
        /**
         * @returns true if any animation is playing
         */
        get: function () {
            return this.animator.isPlaying;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rive.prototype, "isPaused", {
        /**
         * @returns true if all instanced animations are paused
         */
        get: function () {
            return this.animator.isPaused;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rive.prototype, "isStopped", {
        /**
         * @returns true if no animations are playing or paused
         */
        get: function () {
            return this.animator.isStopped;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rive.prototype, "bounds", {
        /**
         * @returns the bounds of the current artboard, or undefined if the artboard
         * isn't loaded yet.
         */
        get: function () {
            return this.artboard ? this.artboard.bounds : undefined;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Subscribe to Rive-generated events
     * @param type the type of event to subscribe to
     * @param callback callback to fire when the event occurs
     */
    Rive.prototype.on = function (type, callback) {
        this.eventManager.add({
            type: type,
            callback: callback,
        });
    };
    /**
     * Unsubscribes from a Rive-generated event
     * @param type the type of event to unsubscribe from
     * @param callback the callback to unsubscribe
     */
    Rive.prototype.off = function (type, callback) {
        this.eventManager.remove({
            type: type,
            callback: callback,
        });
    };
    /**
     * Unsubscribes from a Rive-generated event
     * @deprecated
     * @param callback the callback to unsubscribe from
     */
    Rive.prototype.unsubscribe = function (type, callback) {
        console.warn("This function is deprecated: please use `off()` instead.");
        this.off(type, callback);
    };
    /**
     * Unsubscribes all Rive listeners from an event type, or everything if no type is
     * given
     * @param type the type of event to unsubscribe from, or all types if
     * undefined
     */
    Rive.prototype.removeAllRiveEventListeners = function (type) {
        this.eventManager.removeAll(type);
    };
    /**
     * Unsubscribes all listeners from an event type, or everything if no type is
     * given
     * @deprecated
     * @param type the type of event to unsubscribe from, or all types if
     * undefined
     */
    Rive.prototype.unsubscribeAll = function (type) {
        console.warn("This function is deprecated: please use `removeAllRiveEventListeners()` instead.");
        this.removeAllRiveEventListeners(type);
    };
    /**
     * Stops the rendering loop; this is different from pausing in that it doesn't
     * change the state of any animation. It stops rendering from occurring. This
     * is designed for situations such as when Rive isn't visible.
     *
     * The only way to start rendering again is to call `startRendering`.
     * Animations that are marked as playing will start from the position that
     * they would have been at if rendering had not been stopped.
     */
    Rive.prototype.stopRendering = function () {
        if (this.loaded && this.frameRequestId) {
            if (this.runtime.cancelAnimationFrame) {
                this.runtime.cancelAnimationFrame(this.frameRequestId);
            }
            else {
                cancelAnimationFrame(this.frameRequestId);
            }
            this.frameRequestId = null;
        }
    };
    /**
     * Starts the rendering loop if it has been previously stopped. If the
     * renderer is already active, then this will have zero effect.
     */
    Rive.prototype.startRendering = function () {
        if (this.loaded && this.artboard && !this.frameRequestId) {
            if (this.runtime.requestAnimationFrame) {
                this.frameRequestId = this.runtime.requestAnimationFrame(this.draw.bind(this));
            }
            else {
                this.frameRequestId = requestAnimationFrame(this.draw.bind(this));
            }
        }
    };
    /**
     * Enables frames-per-second (FPS) reporting for the runtime
     * If no callback is provided, Rive will append a fixed-position div at the top-right corner of
     * the page with the FPS reading
     * @param fpsCallback - Callback from the runtime during the RAF loop that supplies the FPS value
     */
    Rive.prototype.enableFPSCounter = function (fpsCallback) {
        this.runtime.enableFPSCounter(fpsCallback);
    };
    /**
     * Disables frames-per-second (FPS) reporting for the runtime
     */
    Rive.prototype.disableFPSCounter = function () {
        this.runtime.disableFPSCounter();
    };
    Object.defineProperty(Rive.prototype, "contents", {
        /**
         * Returns the contents of a Rive file: the artboards, animations, and state machines
         */
        get: function () {
            if (!this.loaded) {
                return undefined;
            }
            var riveContents = {
                artboards: [],
            };
            for (var i = 0; i < this.file.artboardCount(); i++) {
                var artboard = this.file.artboardByIndex(i);
                var artboardContents = {
                    name: artboard.name,
                    animations: [],
                    stateMachines: [],
                };
                for (var j = 0; j < artboard.animationCount(); j++) {
                    var animation = artboard.animationByIndex(j);
                    artboardContents.animations.push(animation.name);
                }
                for (var k = 0; k < artboard.stateMachineCount(); k++) {
                    var stateMachine = artboard.stateMachineByIndex(k);
                    var name_1 = stateMachine.name;
                    var instance = new this.runtime.StateMachineInstance(stateMachine, artboard);
                    var inputContents = [];
                    for (var l = 0; l < instance.inputCount(); l++) {
                        var input = instance.input(l);
                        inputContents.push({ name: input.name, type: input.type });
                    }
                    artboardContents.stateMachines.push({
                        name: name_1,
                        inputs: inputContents,
                    });
                }
                riveContents.artboards.push(artboardContents);
            }
            return riveContents;
        },
        enumerable: false,
        configurable: true
    });
    // Error message for missing source or buffer
    Rive.missingErrorMessage = "Rive source file or data buffer required";
    return Rive;
}());

// Loads Rive data from a URI via fetch.
var loadRiveFile = function (src) { return __awaiter(void 0, void 0, void 0, function () {
    var req, res, buffer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                req = new Request(src);
                return [4 /*yield*/, fetch(req)];
            case 1:
                res = _a.sent();
                return [4 /*yield*/, res.arrayBuffer()];
            case 2:
                buffer = _a.sent();
                return [2 /*return*/, buffer];
        }
    });
}); };
// #endregion
// #region utility functions
/*
 * Utility function to ensure an object is a string array
 */
var mapToStringArray = function (obj) {
    if (typeof obj === "string") {
        return [obj];
    }
    else if (obj instanceof Array) {
        return obj;
    }
    // If obj is undefined, return empty array
    return [];
};
// #endregion
// #region testing utilities
// Exports to only be used for tests
var Testing = {
    EventManager: EventManager,
    TaskQueueManager: TaskQueueManager,
};
// #endregion
// #region asset loaders
/**
 * Decodes bytes into an image.
 *
 * Be sure to call `.dispose()` on the image once it is no longer needed. This
 * allows the engine to clean it up when it is not used by any more animations.
 */
var decodeImage = function (bytes) {
    return new Promise(function (resolve) {
        return RuntimeLoader.getInstance(function (rive) {
            rive.decodeImage(bytes, resolve);
        });
    });
};
/**
 * Decodes bytes into a font.
 *
 * Be sure to call `.dispose()` on the font once it is no longer needed. This
 * allows the engine to clean it up when it is not used by any more animations.
 */
var decodeFont = function (bytes) {
    return new Promise(function (resolve) {
        return RuntimeLoader.getInstance(function (rive) {
            rive.decodeFont(bytes, resolve);
        });
    });
};
// #endregion

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=rive.js.map