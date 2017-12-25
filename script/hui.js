/*
hui 1.2.1
作者 : 深海 5213606@qq.com
官网 : http://www.hcoder.net/hui
*/
!function(a,b,c,d){"use strict"; function e(a,b,c){return setTimeout(j(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(b,c,d){var e="DEPRECATED METHOD: "+c+"\n"+d+" AT \n";return function(){var c=new Error("get-stack-trace"),d=c&&c.stack?c.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",f=a.console&&(a.console.warn||a.console.log);return f&&f.call(a.console,e,d),b.apply(this,arguments)}}function i(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&la(d,c)}function j(a,b){return function(){return a.apply(b,arguments)}}function k(a,b){return typeof a==oa?a.apply(b?b[0]||d:d,b):a}function l(a,b){return a===d?b:a}function m(a,b,c){g(q(b),function(b){a.addEventListener(b,c,!1)})}function n(a,b,c){g(q(b),function(b){a.removeEventListener(b,c,!1)})}function o(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function p(a,b){return a.indexOf(b)>-1}function q(a){return a.trim().split(/\s+/g)}function r(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function s(a){return Array.prototype.slice.call(a,0)}function t(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];r(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function u(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ma.length;){if(c=ma[g],e=c?c+f:b,e in a)return e;g++}return d}function v(){return ua++}function w(b){var c=b.ownerDocument||b;return c.defaultView||c.parentWindow||a}function x(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){k(a.options.enable,[a])&&c.handler(b)},this.init()}function y(a){var b,c=a.options.inputClass;return new(b=c?c:xa?M:ya?P:wa?R:L)(a,z)}function z(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&Ea&&d-e===0,g=b&(Ga|Ha)&&d-e===0;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,A(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function A(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=D(b)),e>1&&!c.firstMultiple?c.firstMultiple=D(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=E(d);b.timeStamp=ra(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=I(h,i),b.distance=H(h,i),B(c,b),b.offsetDirection=G(b.deltaX,b.deltaY);var j=F(b.deltaTime,b.deltaX,b.deltaY);b.overallVelocityX=j.x,b.overallVelocityY=j.y,b.overallVelocity=qa(j.x)>qa(j.y)?j.x:j.y,b.scale=g?K(g.pointers,d):1,b.rotation=g?J(g.pointers,d):0,b.maxPointers=c.prevInput?b.pointers.length>c.prevInput.maxPointers?b.pointers.length:c.prevInput.maxPointers:b.pointers.length,C(c,b);var k=a.element;o(b.srcEvent.target,k)&&(k=b.srcEvent.target),b.target=k}function B(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};b.eventType!==Ea&&f.eventType!==Ga||(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function C(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Ha&&(i>Da||h.velocity===d)){var j=b.deltaX-h.deltaX,k=b.deltaY-h.deltaY,l=F(i,j,k);e=l.x,f=l.y,c=qa(l.x)>qa(l.y)?l.x:l.y,g=G(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function D(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:pa(a.pointers[c].clientX),clientY:pa(a.pointers[c].clientY)},c++;return{timeStamp:ra(),pointers:b,center:E(b),deltaX:a.deltaX,deltaY:a.deltaY}}function E(a){var b=a.length;if(1===b)return{x:pa(a[0].clientX),y:pa(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:pa(c/b),y:pa(d/b)}}function F(a,b,c){return{x:b/a||0,y:c/a||0}}function G(a,b){return a===b?Ia:qa(a)>=qa(b)?0>a?Ja:Ka:0>b?La:Ma}function H(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function I(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function J(a,b){return I(b[1],b[0],Ra)+I(a[1],a[0],Ra)}function K(a,b){return H(b[0],b[1],Ra)/H(a[0],a[1],Ra)}function L(){this.evEl=Ta,this.evWin=Ua,this.pressed=!1,x.apply(this,arguments)}function M(){this.evEl=Xa,this.evWin=Ya,x.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function N(){this.evTarget=$a,this.evWin=_a,this.started=!1,x.apply(this,arguments)}function O(a,b){var c=s(a.touches),d=s(a.changedTouches);return b&(Ga|Ha)&&(c=t(c.concat(d),"identifier",!0)),[c,d]}function P(){this.evTarget=bb,this.targetIds={},x.apply(this,arguments)}function Q(a,b){var c=s(a.touches),d=this.targetIds;if(b&(Ea|Fa)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=s(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return o(a.target,i)}),b===Ea)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Ga|Ha)&&delete d[g[e].identifier],e++;return h.length?[t(f.concat(h),"identifier",!0),h]:void 0}function R(){x.apply(this,arguments);var a=j(this.handler,this);this.touch=new P(this.manager,a),this.mouse=new L(this.manager,a),this.primaryTouch=null,this.lastTouches=[]}function S(a,b){a&Ea?(this.primaryTouch=b.changedPointers[0].identifier,T.call(this,b)):a&(Ga|Ha)&&T.call(this,b)}function T(a){var b=a.changedPointers[0];if(b.identifier===this.primaryTouch){var c={x:b.clientX,y:b.clientY};this.lastTouches.push(c);var d=this.lastTouches,e=function(){var a=d.indexOf(c);a>-1&&d.splice(a,1)};setTimeout(e,cb)}}function U(a){for(var b=a.srcEvent.clientX,c=a.srcEvent.clientY,d=0;d<this.lastTouches.length;d++){var e=this.lastTouches[d],f=Math.abs(b-e.x),g=Math.abs(c-e.y);if(db>=f&&db>=g)return!0}return!1}function V(a,b){this.manager=a,this.set(b)}function W(a){if(p(a,jb))return jb;var b=p(a,kb),c=p(a,lb);return b&&c?jb:b||c?b?kb:lb:p(a,ib)?ib:hb}function X(){if(!fb)return!1;var b={},c=a.CSS&&a.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(d){b[d]=c?a.CSS.supports("touch-action",d):!0}),b}function Y(a){this.options=la({},this.defaults,a||{}),this.id=v(),this.manager=null,this.options.enable=l(this.options.enable,!0),this.state=nb,this.simultaneous={},this.requireFail=[]}function Z(a){return a&sb?"cancel":a&qb?"end":a&pb?"move":a&ob?"start":""}function $(a){return a==Ma?"down":a==La?"up":a==Ja?"left":a==Ka?"right":""}function _(a,b){var c=b.manager;return c?c.get(a):a}function aa(){Y.apply(this,arguments)}function ba(){aa.apply(this,arguments),this.pX=null,this.pY=null}function ca(){aa.apply(this,arguments)}function da(){Y.apply(this,arguments),this._timer=null,this._input=null}function ea(){aa.apply(this,arguments)}function fa(){aa.apply(this,arguments)}function ga(){Y.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ha(a,b){return b=b||{},b.recognizers=l(b.recognizers,ha.defaults.preset),new ia(a,b)}function ia(a,b){this.options=la({},ha.defaults,b||{}),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=a,this.input=y(this),this.touchAction=new V(this,this.options.touchAction),ja(this,!0),g(this.options.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function ja(a,b){var c=a.element;if(c.style){var d;g(a.options.cssProps,function(e,f){d=u(c.style,f),b?(a.oldCssProps[d]=c.style[d],c.style[d]=e):c.style[d]=a.oldCssProps[d]||""}),b||(a.oldCssProps={})}}function ka(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var la,ma=["","webkit","Moz","MS","ms","o"],na=b.createElement("div"),oa="function",pa=Math.round,qa=Math.abs,ra=Date.now;la="function"!=typeof Object.assign?function(a){if(a===d||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var b=Object(a),c=1;c<arguments.length;c++){var e=arguments[c];if(e!==d&&null!==e)for(var f in e)e.hasOwnProperty(f)&&(b[f]=e[f])}return b}:Object.assign;var sa=h(function(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a},"extend","Use `assign`."),ta=h(function(a,b){return sa(a,b,!0)},"merge","Use `assign`."),ua=1,va=/mobile|tablet|ip(ad|hone|od)|android/i,wa="ontouchstart"in a,xa=u(a,"PointerEvent")!==d,ya=wa&&va.test(navigator.userAgent),za="touch",Aa="pen",Ba="mouse",Ca="kinect",Da=25,Ea=1,Fa=2,Ga=4,Ha=8,Ia=1,Ja=2,Ka=4,La=8,Ma=16,Na=Ja|Ka,Oa=La|Ma,Pa=Na|Oa,Qa=["x","y"],Ra=["clientX","clientY"];x.prototype={handler:function(){},init:function(){this.evEl&&m(this.element,this.evEl,this.domHandler),this.evTarget&&m(this.target,this.evTarget,this.domHandler),this.evWin&&m(w(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(w(this.element),this.evWin,this.domHandler)}};var Sa={mousedown:Ea,mousemove:Fa,mouseup:Ga},Ta="mousedown",Ua="mousemove mouseup";i(L,x,{handler:function(a){var b=Sa[a.type];b&Ea&&0===a.button&&(this.pressed=!0),b&Fa&&1!==a.which&&(b=Ga),this.pressed&&(b&Ga&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:Ba,srcEvent:a}))}});var Va={pointerdown:Ea,pointermove:Fa,pointerup:Ga,pointercancel:Ha,pointerout:Ha},Wa={2:za,3:Aa,4:Ba,5:Ca},Xa="pointerdown",Ya="pointermove pointerup pointercancel";a.MSPointerEvent&&!a.PointerEvent&&(Xa="MSPointerDown",Ya="MSPointerMove MSPointerUp MSPointerCancel"),i(M,x,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Va[d],f=Wa[a.pointerType]||a.pointerType,g=f==za,h=r(b,a.pointerId,"pointerId");e&Ea&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Ga|Ha)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Za={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},$a="touchstart",_a="touchstart touchmove touchend touchcancel";i(N,x,{handler:function(a){var b=Za[a.type];if(b===Ea&&(this.started=!0),this.started){var c=O.call(this,a,b);b&(Ga|Ha)&&c[0].length-c[1].length===0&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}}});var ab={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},bb="touchstart touchmove touchend touchcancel";i(P,x,{handler:function(a){var b=ab[a.type],c=Q.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}});var cb=2500,db=25;i(R,x,{handler:function(a,b,c){var d=c.pointerType==za,e=c.pointerType==Ba;if(!(e&&c.sourceCapabilities&&c.sourceCapabilities.firesTouchEvents)){if(d)S.call(this,b,c);else if(e&&U.call(this,c))return;this.callback(a,b,c)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var eb=u(na.style,"touchAction"),fb=eb!==d,gb="compute",hb="auto",ib="manipulation",jb="none",kb="pan-x",lb="pan-y",mb=X();V.prototype={set:function(a){a==gb&&(a=this.compute()),fb&&this.manager.element.style&&mb[a]&&(this.manager.element.style[eb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){k(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),W(a.join(" "))},preventDefaults:function(a){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=p(d,jb)&&!mb[jb],f=p(d,lb)&&!mb[lb],g=p(d,kb)&&!mb[kb];if(e){var h=1===a.pointers.length,i=a.distance<2,j=a.deltaTime<250;if(h&&i&&j)return}return g&&f?void 0:e||f&&c&Na||g&&c&Oa?this.preventSrc(b):void 0},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var nb=1,ob=2,pb=4,qb=8,rb=qb,sb=16,tb=32;Y.prototype={defaults:{},set:function(a){return la(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=_(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=_(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=_(a,this),-1===r(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=_(a,this);var b=r(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(b,a)}var c=this,d=this.state;qb>d&&b(c.options.event+Z(d)),b(c.options.event),a.additionalEvent&&b(a.additionalEvent),d>=qb&&b(c.options.event+Z(d))},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=tb)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(tb|nb)))return!1;a++}return!0},recognize:function(a){var b=la({},a);return k(this.options.enable,[this,b])?(this.state&(rb|sb|tb)&&(this.state=nb),this.state=this.process(b),void(this.state&(ob|pb|qb|sb)&&this.tryEmit(b))):(this.reset(),void(this.state=tb))},process:function(a){},getTouchAction:function(){},reset:function(){}},i(aa,Y,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(ob|pb),e=this.attrTest(a);return d&&(c&Ha||!e)?b|sb:d||e?c&Ga?b|qb:b&ob?b|pb:ob:tb}}),i(ba,aa,{defaults:{event:"pan",threshold:10,pointers:1,direction:Pa},getTouchAction:function(){var a=this.options.direction,b=[];return a&Na&&b.push(lb),a&Oa&&b.push(kb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Na?(e=0===f?Ia:0>f?Ja:Ka,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Ia:0>g?La:Ma,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return aa.prototype.attrTest.call(this,a)&&(this.state&ob||!(this.state&ob)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=$(a.direction);b&&(a.additionalEvent=this.options.event+b),this._super.emit.call(this,a)}}),i(ca,aa,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&ob)},emit:function(a){if(1!==a.scale){var b=a.scale<1?"in":"out";a.additionalEvent=this.options.event+b}this._super.emit.call(this,a)}}),i(da,Y,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[hb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Ga|Ha)&&!f)this.reset();else if(a.eventType&Ea)this.reset(),this._timer=e(function(){this.state=rb,this.tryEmit()},b.time,this);else if(a.eventType&Ga)return rb;return tb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===rb&&(a&&a.eventType&Ga?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=ra(),this.manager.emit(this.options.event,this._input)))}}),i(ea,aa,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&ob)}}),i(fa,aa,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Na|Oa,pointers:1},getTouchAction:function(){return ba.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Na|Oa)?b=a.overallVelocity:c&Na?b=a.overallVelocityX:c&Oa&&(b=a.overallVelocityY),this._super.attrTest.call(this,a)&&c&a.offsetDirection&&a.distance>this.options.threshold&&a.maxPointers==this.options.pointers&&qa(b)>this.options.velocity&&a.eventType&Ga},emit:function(a){var b=$(a.offsetDirection);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),i(ga,Y,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[ib]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&Ea&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Ga)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||H(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=rb,this.tryEmit()},b.interval,this),ob):rb}return tb},failTimeout:function(){return this._timer=e(function(){this.state=tb},this.options.interval,this),tb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==rb&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ha.VERSION="2.0.8",ha.defaults={domEvents:!1,touchAction:gb,enable:!0,inputTarget:null,inputClass:null,preset:[[ea,{enable:!1}],[ca,{enable:!1},["rotate"]],[fa,{direction:Na}],[ba,{direction:Na},["swipe"]],[ga],[ga,{event:"doubletap",taps:2},["tap"]],[da]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var ub=1,vb=2;ia.prototype={set:function(a){return la(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?vb:ub},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&rb)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===vb||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(ob|pb|qb)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof Y)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;if(a=this.get(a)){var b=this.recognizers,c=r(b,a);-1!==c&&(b.splice(c,1),this.touchAction.update())}return this},on:function(a,b){if(a!==d&&b!==d){var c=this.handlers;return g(q(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this}},off:function(a,b){if(a!==d){var c=this.handlers;return g(q(a),function(a){b?c[a]&&c[a].splice(r(c[a],b),1):delete c[a]}),this}},emit:function(a,b){this.options.domEvents&&ka(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&ja(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},la(ha,{INPUT_START:Ea,INPUT_MOVE:Fa,INPUT_END:Ga,INPUT_CANCEL:Ha,STATE_POSSIBLE:nb,STATE_BEGAN:ob,STATE_CHANGED:pb,STATE_ENDED:qb,STATE_RECOGNIZED:rb,STATE_CANCELLED:sb,STATE_FAILED:tb,DIRECTION_NONE:Ia,DIRECTION_LEFT:Ja,DIRECTION_RIGHT:Ka,DIRECTION_UP:La,DIRECTION_DOWN:Ma,DIRECTION_HORIZONTAL:Na,DIRECTION_VERTICAL:Oa,DIRECTION_ALL:Pa,Manager:ia,Input:x,TouchAction:V,TouchInput:P,MouseInput:L,PointerEventInput:M,TouchMouseInput:R,SingleTouchInput:N,Recognizer:Y,AttrRecognizer:aa,Tap:ga,Pan:ba,Swipe:fa,Pinch:ca,Rotate:ea,Press:da,on:m,off:n,each:g,merge:ta,extend:sa,assign:la,inherit:i,bindFn:j,prefixed:u});var wb="undefined"!=typeof a?a:"undefined"!=typeof self?self:{};wb.Hammer=ha,"function"==typeof define&&define.amd?define(function(){return ha}):"undefined"!=typeof module&&module.exports?module.exports=ha:a[c]=ha}(window,document,"Hammer");
(function(){if(typeof(window.CustomEvent) === 'undefined'){function CustomEvent(event, params){params = params || {bubbles: false, cancelable:false, detail:undefined}; var evt = document.createEvent('Events'); var bubbles = true; for (var name in params){(name === 'bubbles') ? (bubbles = !!params[name]) : (evt[name] = params[name]);} evt.initEvent(event, bubbles, true); return evt;}; CustomEvent.prototype = window.Event.prototype; window.CustomEvent = CustomEvent;}})();
(function(undefined){if(String.prototype.trim === undefined){String.prototype.trim = function(){return this.replace(/^\s+|\s+$/g, '');};}})();
var hui = (function(selector, undefined){
	var isId     = /^#([\w-]+)$/, isClass = /^\.([\w-]+)$/, isTag = /^[\w-]+$/;
	var huibackNum = 0, huiResizeNeedDo = new Array(), huiReSizeTimer = null, huiDeputes = new Array();
	var huibase = function(selector){
		if(!selector){return addFuns(Array(document));}
		if(typeof(selector) == 'string'){selector = selector.trim(); return getDoms(selector);}
		if(typeof(selector) == 'object'){return addFuns(new Array(selector));}
		return null;
	}
	var getDoms = function(selector){
		if(isId.test(selector)){var dom = document.getElementById(RegExp.$1); var doms = new Array(); if(dom){doms[0] = dom;} return addFuns(doms);}
		if(isClass.test(selector)){var doms = document.getElementsByClassName(RegExp.$1); return addFuns(doms);}
		if(isTag.test(selector)){var doms = document.getElementsByTagName(selector); return addFuns(doms);}
	}
	var addFuns = function(doms){
		if(!doms){doms = new Array();} if(!doms[0]){doms = new Array();}
		var reObj = {dom:doms, length:doms.length}; reObj.__proto__ = hcExtends; return reObj;
	}
	var hcExtends = {
		val : function(vars){
			if(typeof(vars) != 'undefined'){for(var i = 0; i < this.length; i++){this.dom[i].value = vars;} return this;}
			return this.dom[0].value;
		},
		hasClass : function(cls){if(this.length != 1){return false;} return this.dom[0].className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));},
		addClass : function(cls){
			if(this.length < 1){return this;}
			for(var i = 0; i < this.length; i++){if(!this.dom[i].className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))){this.dom[i].className += " " + cls;}} return this;
		},
		removeClass : function(cls){
			if(this.length < 1){return this;} var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)'); 
			for(var i = 0; i < this.length; i++){this.dom[i].className = this.dom[i].className.replace(reg, ' ');} return this;
		},
		hide : function(){
			if(this.length < 1){return this;}
			for(var i = 0; i < this.length; i++){this.dom[i].style.display = 'none';} return this;
		},
		show : function(){
			if(this.length < 1){return this;}
			for(var i = 0; i < this.length; i++){this.dom[i].style.display = 'block';} return this;
		},
		each : function(callBack){for(var i = 0; i < this.length; i++){this.dom[i].index = i; callBack(this.dom[i]);}},
		size : function(){return this.length;},
		html : function(html){
			if(this.length < 1){return this;}
			if(typeof(html) != 'undefined'){for(var i = 0; i < this.length; i++){this.dom[i].innerHTML = html;} return this;}
			return this.dom[0].innerHTML;
		},
		click : function(callBack){if(this.length < 1){return;} for(var i = 0; i < this.length; i++){this.dom[i].addEventListener('click',callBack);}},
		dblclick : function(callBack){if(this.length < 1){return;} for(var i = 0; i < this.length; i++){this.dom[i].addEventListener('dblclick',callBack);}},
		on : function(eventType, sonSelector, callBack){
			huiDeputes.push({selector:sonSelector, cb:callBack});
			switch(eventType){
				case 'click':
				document.onclick = function(e){this.ondo(e);}.bind(this);
				break;
				case 'dblclick':
				document.ondblclick = function(e){this.ondo(e);}.bind(this);
				break;
			}
		},
		ondo : function(e){
			if(!e.target){return false;}
			for(var i = 0; i < huiDeputes.length; i++){
				var objs = hui(huiDeputes[i].selector);
				for(var ii = 0; ii < objs.length; ii++){
					if(objs.dom[ii] === e.target){objs.dom[ii].index = ii; huiDeputes[i].cb(objs.dom[ii]); break;}
				}
			}
		},
		longTap : function(callBack){
			var timer = null, timerNum = 0, self = this;
			this.dom[0].addEventListener('longTapDo', callBack);
			this.dom[0].addEventListener('touchstart',function(){
				timer = setInterval(function(){if(timerNum >= 1500){self.trigger('longTapDo'); timerNum = 0; clearInterval(timer);}else{timerNum += 100;}},100);
			});
			this.dom[0].addEventListener('touchend',function(){clearInterval(timer);});
		},
		swipeBase  : function(){if(this.length != 1){return;} if(!this.swiper){this.swiper = new Hammer(this.dom[0]); this.swiper.get('swipe').set({direction: Hammer.DIRECTION_ALL});}},
		swipeLeft  : function(callBack){this.swipeBase(); this.swiper.on('swipeleft', function(e){callBack(e);});},
		swipeRight : function(callBack){this.swipeBase(); this.swiper.on('swiperight', function(e){callBack(e);});},
		swipeUp    : function(callBack){this.swipeBase(); this.swiper.on('swipeup', function(e){callBack(e);});},
		swipeDown  : function(callBack){this.swipeBase(); this.swiper.on('swipedown', function(e){callBack(e);});},
		addEvent   : function(eventName, callBack){},
		trigger    : function(eventType, eventData){var element = this.dom[0]; element.dispatchEvent(new CustomEvent(eventType,{detail:eventData,bubbles:true, cancelable:true}));},
		switchBox  : function(butNames){
			if(!butNames){butNames = ['Off', 'On'];}
			this.dom[0].onclick = function(){
				var thisObj = hui(this);
				var status = thisObj.hasClass('HUI_Swith_On');
				var span = thisObj.dom[0].getElementsByTagName('span');
				if(status){
					thisObj.removeClass('HUI_Swith_On');
					span[0].innerHTML = butNames[0]; thisObj.removeClass('HUI_SwithOn'); return;
				}
				thisObj.addClass('HUI_Swith_On'); span[0].innerHTML = butNames[1];
				thisObj.addClass('HUI_SwithOn');
			}
		},
		getSwitchVal : function(){if(this.hasClass('HUI_Swith_On')){return true;} return false;},
		nav : function(){
			this.dom[0].onclick = function(){
				var HUI_Nav_Menus = hui('#HUI_Nav_Menus');
				if(!HUI_Nav_Menus.length){return false;}
				huibase.maskShow(); HUI_Nav_Menus.css({'right':'-200px',display:'block'});
				HUI_Nav_Menus.addClass('HUI_Nav_Menus_Show');
				huibase.mask.onclick = huibase.closeNav;
			}
		},
		progressBar : function(val){this.find('span').first().css({width:val+'%'});},
		find : function(selector){
			if(this.length != 1){return this;}
			if(isId.test(selector)){var dom = document.getElementById(RegExp.$1); var doms = new Array(); if(dom){doms[0] = dom;} return addFuns(doms);}
			if(isClass.test(selector)){var doms = this.dom[0].getElementsByClassName(RegExp.$1); return addFuns(doms);}
			if(isTag.test(selector)){var doms = this.dom[0].getElementsByTagName(selector); return addFuns(doms);}
		},
		eq : function(index){return addFuns(new Array(this.dom[index]));},
		last : function(){return addFuns(new Array(this.dom[this.length - 1]));},
		first : function(){return addFuns(new Array(this.dom[0]));},
		next : function(){return addFuns(new Array(this.dom[0].nextElementSibling || this.dom[0].nextSibling));},
		parent : function(){return addFuns(new Array(this.dom[0].parentNode));},
		css : function(cssObj){
			if(this.length < 1){return this;}
			for(var i = 0; i < this.length; i++){var styleObj = this.dom[i].style; for(var k in cssObj){eval('styleObj.'+k+' = "'+cssObj[k]+'";');}} return this;
		},
		clone : function(){if(this.length < 1){return this;} var nodeClone = this.dom[0].cloneNode(true); return addFuns(new Array(nodeClone));},
		appendTo : function(parentObj){
			if(this.length < 1){return this;}
			if(typeof(parentObj) == 'object'){parentObj.dom[0].appendChild(this.dom[0]);}else if(typeof(parentObj) == 'string'){
				var parentDom = hui(parentObj); if(parentDom.length >= 1){parentDom.dom[0].appendChild(this.dom[0]);}
			}
		},
		prependTo : function(parentObj){
			if(this.length < 1){return this;}
			if(typeof(parentObj) == 'object'){parentObj.dom[0].insertBefore(this.dom[0], parentObj.dom[0].firstChild);}
			else if(typeof(parentObj) == 'string'){
				var parentDom = hui(parentObj); if(parentDom.length >= 1){parentDom.dom[0].insertBefore(this.dom[0], parentDom.dom[0].firstChild);}
			}
		},
		animate : function(animateObj, timer, callBack){
			if(this.length != 1){return this;} if(!timer){timer = 300;}
			var interVal = null, styleObj = this.dom[0].style, i = 0, start = {};
			if(this.dom[0].getAttribute('isAnimate')){return false;}
			this.dom[0].setAttribute('isAnimate', 'Yes');
			var thisObj = this, styleVal = 0;
			for(var k in animateObj){
				if(k.indexOf('scroll') != -1){
					eval('styleVal = thisObj.dom[0].'+k);
					eval('start.'+k+' = Number(styleVal);');
				}else{
					eval('styleVal = styleObj.'+k);
					if(!styleVal){styleVal = 0;}else{styleVal = styleVal.toLowerCase(); styleVal = styleVal.replace(/px|%/,'');}
					eval('start.'+k+' = Number(styleVal);');
				}
			}
			interVal = setInterval(function(){
				for(var k in animateObj){
					eval('var startVal = start.'+k+';');
					var endVal = animateObj[k];
					if(k.indexOf('scroll') != -1){
						console.log(endVal);
						if(startVal!= endVal){eval('thisObj.dom[0].'+k+' = "'+(startVal + (endVal - startVal)* i / timer)+'";');}
					}else{
						endVal = endVal.toString();
						if(endVal.indexOf('px') != -1){
							endVal = Number(endVal.replace('px',''));
							if(startVal != animateObj[k]){eval('styleObj.'+k+' = "'+(startVal + (endVal - startVal)* i / timer)+'px";');}
						}else if(endVal.indexOf('%') != -1){
							endVal = Number(endVal.replace('%',''));
							if(startVal != animateObj[k]){eval('styleObj.'+k+' = "'+(startVal + (endVal - startVal)* i / timer)+'%";');}
						}else{
							
							if(startVal != animateObj[k]){eval('styleObj.'+k+' = "'+(startVal + (endVal - startVal)* i / timer)+'";');}
						}
					}
				}
				if(i >= timer){clearInterval(interVal); thisObj.dom[0].removeAttribute('isAnimate'); if(callBack){callBack();}}; i += 20;
			}, 20);
		},
		remove : function(){if(this.length < 1){return this;} for(var i = 0; i < this.length; i++){this.dom[0].parentNode.removeChild(this.dom[0]);}},
		attr : function(attrName, val){
			if(this.length < 1){return this;}
			if(typeof(val) != 'undefined'){for(var i = 0; i < this.length; i++){this.dom[i].setAttribute(attrName, val);} return this;}
			return this.dom[0].getAttribute(attrName);
		},
		Attr : function(attrName, val){this.attr(attrName, val);},
		removeAttr : function(attrName){
			if(this.length < 1){return this;}for(var i = 0; i < this.length; i++){this.dom[i].removeAttribute(attrName);}return this;
		},
		btnLoading : function(loadingText, isIcon){
			if(!loadingText){loadingText = 'Loading...';} if(!isIcon){isIcon = true;}
			this.attr('HUI_BTN_RESET', this.html());
			var loadingHtml = '<div class="HUI_Loading" style="margin:10px 5px 0px 0px;"></div><div class="HUI_LoadingText">'+loadingText+'</div>';
			this.html(loadingHtml);
		},
		height : function(isOffset){
			if(this.length != 1){return 0;}
			if(isOffset){return this.dom[0].offsetHeight;} return this.dom[0].clientHeight;
		},
		width : function(isOffset){
			if(this.length != 1){return 0;}
			if(isOffset){return this.dom[0].offsetWidth;} return this.dom[0].clientWidth;
		},
		btnLoadingRest : function(){this.html(this.attr('HUI_BTN_RESET')); this.removeAttr('HUI_BTN_RESET');},
		btnIsLoading : function(){if(this.attr('HUI_BTN_RESET')){return true;} return false;},
		ranging : function(callBack){this.dom[0].oninput = function(){callBack(this.value);}; this.dom.onchange = function(){callBack(this.value);}},
		offset : function(){if(this.length != 1){return {left:0, top:0};} return huibase.offset(this.dom[0]);},
		isShow : function(){
			if(this.length != 1){return true;}
			if(this.dom[0].currentStyle){var showRes = this.dom[0].currentStyle.display;}else{var showRes = getComputedStyle(this.dom[0], null).display;}
			if(showRes == 'none'){return false;} return true;
		},
		selectBeautify : function(callBack, isIcon){
			if(this.length != 1){return false;} if(typeof(isIcon) == 'undefined'){isIcon = true;}
			this.hide();
			this.selectParent = this.parent();
			this.selectHtml = this.dom[0].options[this.dom[0].selectedIndex].text;
			var div = document.createElement('div');
			div.innerHTML = this.selectHtml+' <span class="HUI_Icons HUI_Icons_down"></span>';
			hui(div).appendTo(this.selectParent);
			this.selectMenuParent = hui('#selectBeautify');
			if(this.selectMenuParent.length < 1){
				var dom = document.createElement('div')
				dom.setAttribute('id', 'selectBeautify');
				document.body.appendChild(dom);
				this.selectMenuParent = hui('#selectBeautify');
			}
			var thisObj = this;
			this.selectParent.click(function(){
				hui.maskShow();
				var sets = hui.offset(this), heigth = hui(this).height(true);
				thisObj.selectMenuParent.css({top:(sets.top + heigth)+'px'});
				var selectListHtml = '<div class="HUI_List"><ul>';
				var sedIndexVal = thisObj.dom[0].selectedIndex;
				for(var i = 0; i < thisObj.dom[0].options.length; i++){
					if(i == sedIndexVal && isIcon){
						selectListHtml += '<li class="selectBeautifySed" liIndex="'+i+'">'+thisObj.dom[0].options[i].text+'</li>';
					}else{
						selectListHtml += '<li liIndex="'+i+'">'+thisObj.dom[0].options[i].text+'</li>';
					}
				}
				selectListHtml += '</ul></div>';
				thisObj.selectMenuParent.html(selectListHtml);
				thisObj.selectMenuParent.show();
				var lis = thisObj.selectMenuParent.find('li');
				lis.click(function(){
					var cIndex = Number(this.getAttribute('liIndex'));
					thisObj.dom[0].selectedIndex  = cIndex;
					thisObj.selectParent.find('div').html(thisObj.dom[0].options[cIndex].text + ' <span class="HUI_Icons HUI_Icons_down"></span>');
					thisObj.selectMenuParent.hide();
					hui.maskHide();
					if(callBack){callBack(thisObj.dom[0].value);}
				});
				hui('#HUI_Mask').click(function(){
					thisObj.selectMenuParent.hide();
					hui.maskHide();
				});
			});
		},
		star : function(starNum, callBack, size, colorD, colorSed){
			if(this.length != 1){return false;} if(!starNum){starNum = 5;} if(!size){size = 35;}
			if(!colorD){colorD = '#CCCCCC';} if(!colorSed){colorSed = '#F9BE66';} this.attr('starVal', 0);
			var starHtml = ''; for(var i = 0; i < starNum; i++){
				starHtml += '<div class="HUI_FL HUI_Icons HUI_Icons_star1" style="font-size:'+size+'px; color:'+colorD+';" starVal="'+(i+1)+'"></div>';
			}
			this.html(starHtml); var thisObj = this;
			this.find('div').click(function(){
				var starVal = this.getAttribute('starVal'), starHtml = '', hStar, stars = thisObj.find('div');
				stars.removeClass('HUI_Icons_star2'); stars.css({color:colorD});
				thisObj.attr('starVal', starVal);
				for(var i = 0; i < starVal; i++){
					hStar = stars.dom[i];
					hStar.style.color = colorSed;
					hui(hStar).addClass('HUI_Icons_star2');
				}
				if(callBack){callBack(starVal);}
			});
		},
		getStarVal : function(){if(this.length != 1){return 0;} return Number(this.dom[0].getAttribute('starVal'));},
		pointMsg : function(msg, color, size, top, right, isRelative){
			if(this.length < 1){return false;} if(!isRelative){isRelative = true;}
			if(isRelative){this.dom[0].style.position = 'relative';}
			if(!msg){
				if(!color){color = '#ED2D22';} if(!size){size = '10px';} if(!top){top = '0px';} if(!right){right = '5px';}
				var HUI_RedPoint = this.find('.HUI_RedPoint'); if(HUI_RedPoint.length >= 1){return;}
				HUI_RedPoint = document.createElement('div'); HUI_RedPoint.className = 'HUI_RedPoint';
				HUI_RedPoint.style.width = size; HUI_RedPoint.style.height = size;
				HUI_RedPoint.style.background = color; HUI_RedPoint.style.top = top;
				HUI_RedPoint.style.right = right; hui(HUI_RedPoint).appendTo(this);
				return;
			}
			var HUI_RedPoint = this.find('.HUI_RedNumberPoint');
			if(!HUI_RedPoint.length){
				if(!color){color = '#ED2D22';} if(!size){size = '10px';} if(!top){top = '0px';} if(!right){right = '5px';}
				HUI_RedPoint = document.createElement('div'); HUI_RedPoint.className = 'HUI_RedNumberPoint';
				HUI_RedPoint.style.fontSize = size; HUI_RedPoint.style.background = color; HUI_RedPoint.style.top = top;
				if(typeof(msg) == 'number'){HUI_RedPoint.style.borderRadius = '50%'}else{HUI_RedPoint.style.borderRadius = '5px'; HUI_RedPoint.style.padding = '1px 5px';}
				HUI_RedPoint.style.right = right; HUI_RedPoint.innerHTML = msg; hui(HUI_RedPoint).appendTo(this);
			}else{
				if(typeof(msg) == 'number'){HUI_RedPoint.css({borderRadius:'50%'});}else{HUI_RedPoint.css({borderRadius:'5px', padding:'1px 5px'});}
				HUI_RedPoint.html(msg);
			}
		},
		scrollX : function(num, sonsTag, extraValue){
			if(this.length < 1){return} if(!num){num = 3;} if(!sonsTag){sonsTag = 'img';} if(!extraValue){extraValue = 0;}
			var setWitdh = hui(this.dom[0]).width() / num + 10;
			for(var i = 0; i < this.length; i++){
				var cObj = hui(this.dom[i]), sons = cObj.find(sonsTag), total = sons.length;
				sons.css({'width':setWitdh+'px'}); cObj.find('div').eq(0).css({width:(setWitdh + extraValue) * total + 3 +'px'}); cObj.css({'overflowX':'auto'});
			}
		},
		scrollY : function(height){
			if(this.length < 1){return} if(!height){height = 150;}
			for(var i = 0; i < this.length; i++){
				var cObj = hui(this.dom[i]);
				hui(this.dom[i]).css({height:height+'px', 'overflowY':'auto'});
			}
		}
	};
	huibase.closeNav = function(){
		var HUI_Nav_Menus = hui('#HUI_Nav_Menus'); huibase.maskHide();
		HUI_Nav_Menus.removeClass('HUI_Nav_Menus_Show'); HUI_Nav_Menus.hide();
	};
	huibase.readyRe = /complete|loaded|interactive/;
	huibase.ready = function(callBack){
		if(document.addEventListener){
			document.addEventListener('DOMContentLoaded', function(){huibase.readyBase(callBack);});
		}else if(document.attachEvent){
			document.attachEvent("onreadystatechange", function(){
				if(huibase.readyRe.test(document.readyState)){huibase.readyBase(callBack);}
			});
		}
	};
	huibase.readyBase = function(callBack){var backBtn = document.getElementById('HUI_Back'); if(backBtn){backBtn.onclick = huibase.Back;} if(callBack){callBack();}};
	huibase.ajax = function(url, success, err, sets){
		if(typeof(err) == 'undefined'){err = function(e){hui.toast(' 连接服务器失败 ');}}
		var xhr;
		if (window.XMLHttpRequest){
			xhr = new XMLHttpRequest();
		}else if(window.ActiveXObject){
			xhr = new ActiveXObject("Microsoft.XMLHTTP");
		}
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4){
				if(xhr.status == 200){
					if(sets.backType == 'text'){success(xhr.responseText);}else{
						try{var obj = JSON.parse(xhr.responseText);}catch(e){var obj = null;} success(obj);
					}
				}else{err(xhr.readyState);}
			}
		}
		if(sets.type == 'GET'){xhr.open("GET", url); xhr.send();}else{
			var pd = '';
			for(var k in sets.pd){pd += encodeURIComponent(k)+'='+encodeURIComponent(sets.pd[k])+'&';}
			pd = pd.substr(0, pd.length - 1);
			xhr.open("POST", url);
			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			xhr.send(pd);
		}
	};
	huibase.get = function(url, success, err){var sets = {type:'GET', backType:'text'}; this.ajax(url, success, err, sets);};
	huibase.getJSON = function(url, success, err){var sets = {type:'GET', backType:'json'}; this.ajax(url, success, err, sets);};
	huibase.post = function(url, pd ,success, err){var sets = {type:'POST',backType:'text', pd:pd}; this.ajax(url, success, err, sets);};
	huibase.postJSON = function(url, pd ,success, err){var sets = {type:'POST',backType:'json', pd:pd}; this.ajax(url, success, err, sets);};
	huibase.Back   = function(){window.history.back(-1);};
	huibase.winInfo = function(){
		var winInfo = {height:0, width:0, scrollTop:0};
		if(window.innerHeight){winInfo.height = window.innerHeight;}else if((document.body)&&(document.body.clientHeight)){winInfo.height = document.body.clientHeight;}
		if(window.innerWidth){winInfo.width = window.innerWidth;}else if((document.body)&&(document.body.clientWidth)){winInfo.width = document.body.clientWidth;}
		if(document.documentElement && document.documentElement.scrollTop){winInfo.scrollTop = document.documentElement.scrollTop;}else if(document.body){winInfo.scrollTop = document.body.scrollTop;}
		return winInfo;
	};
	huibase.offset = function(e){
		var offset  = {left:0, top:0}; offset.left = e.offsetLeft; offset.top  = e.offsetTop;
		while(e = e.offsetParent){offset.top += e.offsetTop; offset.left += e.offsetLeft;} return offset;
	};
	huibase.maskShow = function(){
		huibase.mask = document.getElementById('HUI_Mask');
		if(!huibase.mask){
			huibase.mask = document.createElement('div');
			huibase.mask.setAttribute('id', 'HUI_Mask');
			huibase.mask.setAttribute('class', 'HUI_MaskShow');
			document.body.appendChild(huibase.mask);
		}
		huibase.mask.style.display = 'block';
	};
	huibase.maskHide = function(){if(huibase.mask){document.body.removeChild(huibase.mask);}};
	huibase.toast = function(msg){
		if(this.toastTimer){clearTimeout(this.toastTimer);} var toast = document.getElementById('HUI_Toast');
		if(toast){document.body.removeChild(toast);} toast = document.createElement('div');
	    toast.setAttribute('id', 'HUI_Toast'); document.body.appendChild(toast);
	    var toastObj = hui('#HUI_Toast'); toastObj.html('<div>'+msg+'</div>');
	    toastObj.addClass('HUI_Toast'); this.toastTimer = setTimeout(function(){toastObj.remove();}, 2500);
	};
	huibase.dialogBase  = function(){
		huibase.dialogDom = document.getElementById('HUI_Dialog');
		if(huibase.dialogDom){document.body.removeChild(huibase.dialogDom);}
		huibase.dialogDom = document.createElement('div');
		huibase.dialogDom.setAttribute('id', 'HUI_Dialog');
		huibase.dialogDom.setAttribute('class', 'HUI_FadeIn');
		document.body.appendChild(huibase.dialogDom);
		huibase.maskShow();
		huibase.mask.removeEventListener('click', huibase.dialogClose);
		huibase.mask.addEventListener('click',huibase.dialogClose);
	};
	huibase.dialogClose = function(){
		huibase.dialogDom.class = 'HUI_FadeOut';
		document.body.removeChild(huibase.dialogDom);
		huibase.maskHide();
	};
	huibase.dialogCallBack = null;
	huibase.alert     = function(msg, btnName, callBack){
		huibase.dialogCallBack = callBack;
		if(!btnName){btnName = '确定';}
		huibase.dialogBase();
		huibase.dialogDom.innerHTML = '<div id="HUI_AlertIn"><div id="HUI_DialogMsg">'+msg+'</div><div id="HUI_DialogButLine">'+btnName+'</div></div>';
		var btn = document.getElementById('HUI_DialogButLine');
		btn.onclick = function(){huibase.dialogClose(); if(huibase.dialogCallBack){huibase.dialogCallBack();}}
	};
	huibase.confirm = function(msg, btnName, callBack){
		if(!btnName){btnName = ['取消','确定'];}
		huibase.dialogBase();
		huibase.dialogDom.innerHTML = '<div id="HUI_AlertIn"><div id="HUI_DialogMsg">'+msg+'</div><div id="HUI_DialogButLine"><div>'+btnName[0]+'</div><div>'+btnName[1]+'</div></div></div>';
		var btns = document.getElementById('HUI_DialogButLine').getElementsByTagName('div');
		btns[0].onclick = huibase.dialogClose;
		btns[1].onclick = function(){huibase.dialogClose(); callBack();};
	};
	huibase.inputDialog = function(msg, btnName, callBack){
		if(!btnName){btnName = ['取消','确定'];}
		huibase.dialogBase();
		huibase.dialogDom.innerHTML = '<div id="HUI_AlertIn"><div id="HUI_DialogMsg" style="padding-bottom:12px;">'+msg+'</div><div id="HUI_DialogInput"><input type="text" id="HUI_DialogInputText" /></div><div id="HUI_DialogButLine"><div>'+btnName[0]+'</div><div>'+btnName[1]+'</div></div></div>';
		var btns = document.getElementById('HUI_DialogButLine').getElementsByTagName('div');
		btns[0].onclick = huibase.dialogClose;
		btns[1].onclick = function(){
			if(callBack){callBack(document.getElementById("HUI_DialogInputText").value);}
			hui.dialogClose();
		};
	};
	huibase.centerLoading = function(isClose){
		var HUI_LoadingMask = document.getElementById('HUI_LoadingMask');
		if(isClose){if(HUI_LoadingMask){HUI_LoadingMask.parentNode.removeChild(HUI_LoadingMask);} return false;}
		if(!HUI_LoadingMask){
			var HUI_LoadingMask = document.createElement('div');
			HUI_LoadingMask.setAttribute('id', 'HUI_LoadingMask');
			HUI_LoadingMask.innerHTML = '<div id="HUI_CenterLoading"><div id="HUI_LoadMoreLoadingIn"><div></div><div></div><div></div><div></div><div></div></div></div>';
			document.body.appendChild(HUI_LoadingMask);
		}
	};
	huibase.scrollTop = function(val){document.body.scrollTop = val;};
	huibase.numberBox = function(){
	var numberBoxes =  document.getElementsByClassName('HUI_NumberBox');
		if(!numberBoxes){return;}
		for(var i = 0; i < numberBoxes.length; i++){
			var numberBox = numberBoxes[i], numberBoxL = numberBox.getElementsByClassName('reduce')[0];
			var numberBoxR = numberBox.getElementsByClassName('add')[0];
			numberBoxL.onclick = function(){
				var min = Number(this.parentNode.getAttribute('min'));
				var max = Number(this.parentNode.getAttribute('max'));
				var numberIn  = this.parentNode.getElementsByTagName('input')[0];
				var cNum = Number(numberIn.value);
				if(!cNum || cNum == NaN){cNum = min;} cNum -= 1;
				if(cNum < min){cNum = min;} numberIn.value = cNum;
			}
			numberBoxR.onclick = function(){
				var min = Number(this.parentNode.getAttribute('min'));
				var max = Number(this.parentNode.getAttribute('max'));
				var numberIn  = this.parentNode.getElementsByTagName('input')[0];
				var cNum = Number(numberIn.value);
				if(!cNum || cNum == NaN){cNum = min;}
				var cNum = Number(numberIn.value);
				if(!cNum || cNum == NaN){cNum = min;} cNum += 1;
				if(cNum > max){cNum = max;} numberIn.value = cNum;
			}
		}
	};
	huibase.lazyLoad = function(className){
		huibase.timerForLazy = null;
		window.addEventListener('scroll', function(){
			clearTimeout(huibase.timerForLazy);
			huibase.timerForLazy = setTimeout(function(){huibase.lazyLoadNow(className)}, 300);
		});
		hui(window).trigger('scroll');
	};
	huibase.lazyLoadNow = function(className){
		if(!className){className = 'HUI_Lazy';}
		var winInfo = hui.winInfo(), imgs = new Array(), lazyObj = hui('.'+className);
		for(var i = 0; i < lazyObj.length; i++){
			var dom = lazyObj.dom[0], realSrc = dom.getAttribute('lazySrc');
			var setsY = hui.offset(dom);
			if(setsY.top >=  winInfo.height + winInfo.scrollTop){break;}
			dom.src = realSrc;
			hui(dom).removeClass(className);
		}
	};
	huibase.extend  = function(funName, fun){eval('hcExtends.'+funName+' = fun;');};
	huibase.resize  = function(callBack){huiResizeNeedDo.push(callBack);};
	window.onresize = function(){
		clearTimeout(huiReSizeTimer); if(huiResizeNeedDo.length < 1){return false;}
		huiReSizeTimer = setTimeout(function(){for(var i = 0; i < huiResizeNeedDo.length; i++){var fun = huiResizeNeedDo[i]; fun();}}, 100);
	};
	return huibase;
})(document);
hui.ready();