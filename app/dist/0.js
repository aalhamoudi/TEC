webpackJsonp([0],{

/***/ "./node_modules/animated/lib/Animated.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var



Animated=function(){function Animated(){_classCallCheck(this,Animated);}_createClass(Animated,[{key:'__attach',value:function __attach()
{}},{key:'__detach',value:function __detach()
{}},{key:'__getValue',value:function __getValue()
{}},{key:'__getAnimatedValue',value:function __getAnimatedValue()
{return this.__getValue();}},{key:'__addChild',value:function __addChild(
child){}},{key:'__removeChild',value:function __removeChild(
child){}},{key:'__getChildren',value:function __getChildren()
{return[];}}]);return Animated;}();


module.exports=Animated;

/***/ }),

/***/ "./node_modules/animated/lib/AnimatedAddition.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var AnimatedWithChildren=__webpack_require__("./node_modules/animated/lib/AnimatedWithChildren.js");
var Animated=__webpack_require__("./node_modules/animated/lib/Animated.js");
var AnimatedValue=__webpack_require__("./node_modules/animated/lib/AnimatedValue.js");
var Interpolation=__webpack_require__("./node_modules/animated/lib/Interpolation.js");
var AnimatedInterpolation=__webpack_require__("./node_modules/animated/lib/AnimatedInterpolation.js");var



AnimatedAddition=function(_AnimatedWithChildren){_inherits(AnimatedAddition,_AnimatedWithChildren);






function AnimatedAddition(a,b){_classCallCheck(this,AnimatedAddition);var _this=_possibleConstructorReturn(this,(AnimatedAddition.__proto__||Object.getPrototypeOf(AnimatedAddition)).call(this));

_this._a=typeof a==='number'?new AnimatedValue(a):a;
_this._b=typeof b==='number'?new AnimatedValue(b):b;
_this._listeners={};return _this;
}_createClass(AnimatedAddition,[{key:'__getValue',value:function __getValue()

{
return this._a.__getValue()+this._b.__getValue();
}},{key:'addListener',value:function addListener(

callback){var _this2=this;
if(!this._aListener&&this._a.addListener){
this._aListener=this._a.addListener(function(){
for(var key in _this2._listeners){
_this2._listeners[key]({value:_this2.__getValue()});
}
});
}
if(!this._bListener&&this._b.addListener){
this._bListener=this._b.addListener(function(){
for(var key in _this2._listeners){
_this2._listeners[key]({value:_this2.__getValue()});
}
});
}
var id=guid();
this._listeners[id]=callback;
return id;
}},{key:'removeListener',value:function removeListener(

id){
delete this._listeners[id];
}},{key:'interpolate',value:function interpolate(

config){
return new AnimatedInterpolation(this,Interpolation.create(config));
}},{key:'__attach',value:function __attach()

{
this._a.__addChild(this);
this._b.__addChild(this);
}},{key:'__detach',value:function __detach()

{
this._a.__removeChild(this);
this._b.__removeChild(this);
}}]);return AnimatedAddition;}(AnimatedWithChildren);


module.exports=AnimatedAddition;

/***/ }),

/***/ "./node_modules/animated/lib/AnimatedInterpolation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var Animated=__webpack_require__("./node_modules/animated/lib/Animated.js");
var AnimatedWithChildren=__webpack_require__("./node_modules/animated/lib/AnimatedWithChildren.js");
var invariant=__webpack_require__(11);
var Interpolation=__webpack_require__("./node_modules/animated/lib/Interpolation.js");
var guid=__webpack_require__("./node_modules/animated/lib/guid.js");var



AnimatedInterpolation=function(_AnimatedWithChildren){_inherits(AnimatedInterpolation,_AnimatedWithChildren);





function AnimatedInterpolation(parent,interpolation){_classCallCheck(this,AnimatedInterpolation);var _this=_possibleConstructorReturn(this,(AnimatedInterpolation.__proto__||Object.getPrototypeOf(AnimatedInterpolation)).call(this));

_this._parent=parent;
_this._interpolation=interpolation;
_this._listeners={};return _this;
}_createClass(AnimatedInterpolation,[{key:'__getValue',value:function __getValue()

{
var parentValue=this._parent.__getValue();
invariant(
typeof parentValue==='number',
'Cannot interpolate an input which is not a number.');

return this._interpolation(parentValue);
}},{key:'addListener',value:function addListener(

callback){var _this2=this;
if(!this._parentListener){
this._parentListener=this._parent.addListener(function(){
for(var key in _this2._listeners){
_this2._listeners[key]({value:_this2.__getValue()});
}
});
}
var id=guid();
this._listeners[id]=callback;
return id;
}},{key:'removeListener',value:function removeListener(

id){
delete this._listeners[id];
}},{key:'interpolate',value:function interpolate(

config){
return new AnimatedInterpolation(this,Interpolation.create(config));
}},{key:'__attach',value:function __attach()

{
this._parent.__addChild(this);
}},{key:'__detach',value:function __detach()

{
this._parent.__removeChild(this);
this._parentListener=this._parent.removeListener(this._parentListener);
}}]);return AnimatedInterpolation;}(AnimatedWithChildren);


module.exports=AnimatedInterpolation;

/***/ }),

/***/ "./node_modules/animated/lib/AnimatedModulo.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var Animated=__webpack_require__("./node_modules/animated/lib/Animated.js");
var AnimatedWithChildren=__webpack_require__("./node_modules/animated/lib/AnimatedWithChildren.js");
var AnimatedInterpolation=__webpack_require__("./node_modules/animated/lib/AnimatedInterpolation.js");
var Interpolation=__webpack_require__("./node_modules/animated/lib/Interpolation.js");var



AnimatedModulo=function(_AnimatedWithChildren){_inherits(AnimatedModulo,_AnimatedWithChildren);





function AnimatedModulo(a,modulus){_classCallCheck(this,AnimatedModulo);var _this=_possibleConstructorReturn(this,(AnimatedModulo.__proto__||Object.getPrototypeOf(AnimatedModulo)).call(this));

_this._a=a;
_this._modulus=modulus;
_this._listeners={};return _this;
}_createClass(AnimatedModulo,[{key:'__getValue',value:function __getValue()

{
return(this._a.__getValue()%this._modulus+this._modulus)%this._modulus;
}},{key:'addListener',value:function addListener(

callback){var _this2=this;
if(!this._aListener){
this._aListener=this._a.addListener(function(){
for(var key in _this2._listeners){
_this2._listeners[key]({value:_this2.__getValue()});
}
});
}
var id=guid();
this._listeners[id]=callback;
return id;
}},{key:'removeListener',value:function removeListener(

id){
delete this._listeners[id];
}},{key:'interpolate',value:function interpolate(

config){
return new AnimatedInterpolation(this,Interpolation.create(config));
}},{key:'__attach',value:function __attach()

{
this._a.__addChild(this);
}},{key:'__detach',value:function __detach()

{
this._a.__removeChild(this);
}}]);return AnimatedModulo;}(AnimatedWithChildren);


module.exports=AnimatedModulo;

/***/ }),

/***/ "./node_modules/animated/lib/AnimatedMultiplication.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var AnimatedWithChildren=__webpack_require__("./node_modules/animated/lib/AnimatedWithChildren.js");
var Animated=__webpack_require__("./node_modules/animated/lib/Animated.js");
var AnimatedValue=__webpack_require__("./node_modules/animated/lib/AnimatedValue.js");
var AnimatedInterpolation=__webpack_require__("./node_modules/animated/lib/AnimatedInterpolation.js");
var Interpolation=__webpack_require__("./node_modules/animated/lib/Interpolation.js");var



AnimatedMultiplication=function(_AnimatedWithChildren){_inherits(AnimatedMultiplication,_AnimatedWithChildren);






function AnimatedMultiplication(a,b){_classCallCheck(this,AnimatedMultiplication);var _this=_possibleConstructorReturn(this,(AnimatedMultiplication.__proto__||Object.getPrototypeOf(AnimatedMultiplication)).call(this));

_this._a=typeof a==='number'?new AnimatedValue(a):a;
_this._b=typeof b==='number'?new AnimatedValue(b):b;
_this._listeners={};return _this;
}_createClass(AnimatedMultiplication,[{key:'__getValue',value:function __getValue()

{
return this._a.__getValue()*this._b.__getValue();
}},{key:'addListener',value:function addListener(

callback){var _this2=this;
if(!this._aListener&&this._a.addListener){
this._aListener=this._a.addListener(function(){
for(var key in _this2._listeners){
_this2._listeners[key]({value:_this2.__getValue()});
}
});
}
if(!this._bListener&&this._b.addListener){
this._bListener=this._b.addListener(function(){
for(var key in _this2._listeners){
_this2._listeners[key]({value:_this2.__getValue()});
}
});
}
var id=guid();
this._listeners[id]=callback;
return id;
}},{key:'removeListener',value:function removeListener(

id){
delete this._listeners[id];
}},{key:'interpolate',value:function interpolate(

config){
return new AnimatedInterpolation(this,Interpolation.create(config));
}},{key:'__attach',value:function __attach()

{
this._a.__addChild(this);
this._b.__addChild(this);
}},{key:'__detach',value:function __detach()

{
this._a.__removeChild(this);
this._b.__removeChild(this);
}}]);return AnimatedMultiplication;}(AnimatedWithChildren);


module.exports=AnimatedMultiplication;

/***/ }),

/***/ "./node_modules/animated/lib/AnimatedProps.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var Animated=__webpack_require__("./node_modules/animated/lib/Animated.js");
var AnimatedStyle=__webpack_require__("./node_modules/animated/lib/AnimatedStyle.js");var

AnimatedProps=function(_Animated){_inherits(AnimatedProps,_Animated);



function AnimatedProps(
props,
callback)
{_classCallCheck(this,AnimatedProps);var _this=_possibleConstructorReturn(this,(AnimatedProps.__proto__||Object.getPrototypeOf(AnimatedProps)).call(this));

if(props.style){
props=_extends({},
props,{
style:new AnimatedStyle(props.style)});

}
_this._props=props;
_this._callback=callback;
_this.__attach();return _this;
}_createClass(AnimatedProps,[{key:'__getValue',value:function __getValue()

{
var props={};
for(var key in this._props){
var value=this._props[key];
if(value instanceof Animated){
props[key]=value.__getValue();
}else{
props[key]=value;
}
}
return props;
}},{key:'__getAnimatedValue',value:function __getAnimatedValue()

{
var props={};
for(var key in this._props){
var value=this._props[key];
if(value instanceof Animated){
props[key]=value.__getAnimatedValue();
}
}
return props;
}},{key:'__attach',value:function __attach()

{
for(var key in this._props){
var value=this._props[key];
if(value instanceof Animated){
value.__addChild(this);
}
}
}},{key:'__detach',value:function __detach()

{
for(var key in this._props){
var value=this._props[key];
if(value instanceof Animated){
value.__removeChild(this);
}
}
}},{key:'update',value:function update()

{
this._callback();
}}]);return AnimatedProps;}(Animated);


module.exports=AnimatedProps;

/***/ }),

/***/ "./node_modules/animated/lib/AnimatedStyle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var Animated=__webpack_require__("./node_modules/animated/lib/Animated.js");
var AnimatedWithChildren=__webpack_require__("./node_modules/animated/lib/AnimatedWithChildren.js");
var AnimatedTransform=__webpack_require__("./node_modules/animated/lib/AnimatedTransform.js");
var FlattenStyle=__webpack_require__("./node_modules/animated/lib/injectable/FlattenStyle.js");var

AnimatedStyle=function(_AnimatedWithChildren){_inherits(AnimatedStyle,_AnimatedWithChildren);


function AnimatedStyle(style){_classCallCheck(this,AnimatedStyle);var _this=_possibleConstructorReturn(this,(AnimatedStyle.__proto__||Object.getPrototypeOf(AnimatedStyle)).call(this));

style=FlattenStyle.current(style)||{};
if(style.transform&&!(style.transform instanceof Animated)){
style=_extends({},
style,{
transform:new AnimatedTransform(style.transform)});

}
_this._style=style;return _this;
}_createClass(AnimatedStyle,[{key:'__getValue',value:function __getValue()

{
var style={};
for(var key in this._style){
var value=this._style[key];
if(value instanceof Animated){
style[key]=value.__getValue();
}else{
style[key]=value;
}
}
return style;
}},{key:'__getAnimatedValue',value:function __getAnimatedValue()

{
var style={};
for(var key in this._style){
var value=this._style[key];
if(value instanceof Animated){
style[key]=value.__getAnimatedValue();
}
}
return style;
}},{key:'__attach',value:function __attach()

{
for(var key in this._style){
var value=this._style[key];
if(value instanceof Animated){
value.__addChild(this);
}
}
}},{key:'__detach',value:function __detach()

{
for(var key in this._style){
var value=this._style[key];
if(value instanceof Animated){
value.__removeChild(this);
}
}
}}]);return AnimatedStyle;}(AnimatedWithChildren);


module.exports=AnimatedStyle;

/***/ }),

/***/ "./node_modules/animated/lib/AnimatedTemplate.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var Animated=__webpack_require__("./node_modules/animated/lib/Animated.js");
var AnimatedWithChildren=__webpack_require__("./node_modules/animated/lib/AnimatedWithChildren.js");var

AnimatedTemplate=function(_AnimatedWithChildren){_inherits(AnimatedTemplate,_AnimatedWithChildren);



function AnimatedTemplate(strings,values){_classCallCheck(this,AnimatedTemplate);var _this=_possibleConstructorReturn(this,(AnimatedTemplate.__proto__||Object.getPrototypeOf(AnimatedTemplate)).call(this));

_this._strings=strings;
_this._values=values;return _this;
}_createClass(AnimatedTemplate,[{key:'__transformValue',value:function __transformValue(

value){
if(value instanceof Animated){
return value.__getValue();
}else{
return value;
}
}},{key:'__getValue',value:function __getValue()

{
var value=this._strings[0];
for(var i=0;i<this._values.length;++i){
value+=this.__transformValue(this._values[i])+this._strings[1+i];
}
return value;
}},{key:'__attach',value:function __attach()

{
for(var i=0;i<this._values.length;++i){
if(this._values[i]instanceof Animated){
this._values[i].__addChild(this);
}
}
}},{key:'__detach',value:function __detach()

{
for(var i=0;i<this._values.length;++i){
if(this._values[i]instanceof Animated){
this._values[i].__removeChild(this);
}
}
}}]);return AnimatedTemplate;}(AnimatedWithChildren);


module.exports=AnimatedTemplate;

/***/ }),

/***/ "./node_modules/animated/lib/AnimatedTracking.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var Animated=__webpack_require__("./node_modules/animated/lib/Animated.js");
var AnimatedValue=__webpack_require__("./node_modules/animated/lib/AnimatedValue.js");var



AnimatedTracking=function(_Animated){_inherits(AnimatedTracking,_Animated);






function AnimatedTracking(
value,
parent,
animationClass,
animationConfig,
callback)
{_classCallCheck(this,AnimatedTracking);var _this=_possibleConstructorReturn(this,(AnimatedTracking.__proto__||Object.getPrototypeOf(AnimatedTracking)).call(this));

_this._value=value;
_this._parent=parent;
_this._animationClass=animationClass;
_this._animationConfig=animationConfig;
_this._callback=callback;
_this.__attach();return _this;
}_createClass(AnimatedTracking,[{key:'__getValue',value:function __getValue()

{
return this._parent.__getValue();
}},{key:'__attach',value:function __attach()

{
this._parent.__addChild(this);
}},{key:'__detach',value:function __detach()

{
this._parent.__removeChild(this);
}},{key:'update',value:function update()

{
this._value.animate(new this._animationClass(_extends({},
this._animationConfig,{
toValue:this._animationConfig.toValue.__getValue()})),
this._callback);
}}]);return AnimatedTracking;}(Animated);


module.exports=AnimatedTracking;

/***/ }),

/***/ "./node_modules/animated/lib/AnimatedTransform.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var Animated=__webpack_require__("./node_modules/animated/lib/Animated.js");
var AnimatedWithChildren=__webpack_require__("./node_modules/animated/lib/AnimatedWithChildren.js");var

AnimatedTransform=function(_AnimatedWithChildren){_inherits(AnimatedTransform,_AnimatedWithChildren);


function AnimatedTransform(transforms){_classCallCheck(this,AnimatedTransform);var _this=_possibleConstructorReturn(this,(AnimatedTransform.__proto__||Object.getPrototypeOf(AnimatedTransform)).call(this));

_this._transforms=transforms;return _this;
}_createClass(AnimatedTransform,[{key:'__getValue',value:function __getValue()

{
return this._transforms.map(function(transform){
var result={};
for(var key in transform){
var value=transform[key];
if(value instanceof Animated){
result[key]=value.__getValue();
}else{
result[key]=value;
}
}
return result;
});
}},{key:'__getAnimatedValue',value:function __getAnimatedValue()

{
return this._transforms.map(function(transform){
var result={};
for(var key in transform){
var value=transform[key];
if(value instanceof Animated){
result[key]=value.__getAnimatedValue();
}else{

result[key]=value;
}
}
return result;
});
}},{key:'__attach',value:function __attach()

{var _this2=this;
this._transforms.forEach(function(transform){
for(var key in transform){
var value=transform[key];
if(value instanceof Animated){
value.__addChild(_this2);
}
}
});
}},{key:'__detach',value:function __detach()

{var _this3=this;
this._transforms.forEach(function(transform){
for(var key in transform){
var value=transform[key];
if(value instanceof Animated){
value.__removeChild(_this3);
}
}
});
}}]);return AnimatedTransform;}(AnimatedWithChildren);


module.exports=AnimatedTransform;

/***/ }),

/***/ "./node_modules/animated/lib/AnimatedValue.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {









var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var AnimatedWithChildren=__webpack_require__("./node_modules/animated/lib/AnimatedWithChildren.js");
var InteractionManager=__webpack_require__("./node_modules/animated/lib/injectable/InteractionManager.js");
var AnimatedInterpolation=__webpack_require__("./node_modules/animated/lib/AnimatedInterpolation.js");
var Interpolation=__webpack_require__("./node_modules/animated/lib/Interpolation.js");
var Animation=__webpack_require__("./node_modules/animated/lib/Animation.js");
var guid=__webpack_require__("./node_modules/animated/lib/guid.js");
var Set=global.Set||__webpack_require__("./node_modules/animated/lib/SetPolyfill.js");




























function _flush(rootNode){
var animatedStyles=new Set();
function findAnimatedStyles(node){
if(typeof node.update==='function'){
animatedStyles.add(node);
}else{
node.__getChildren().forEach(findAnimatedStyles);
}
}
findAnimatedStyles(rootNode);
animatedStyles.forEach(function(animatedStyle){return animatedStyle.update();});
}var







AnimatedValue=function(_AnimatedWithChildren){_inherits(AnimatedValue,_AnimatedWithChildren);






function AnimatedValue(value){_classCallCheck(this,AnimatedValue);var _this=_possibleConstructorReturn(this,(AnimatedValue.__proto__||Object.getPrototypeOf(AnimatedValue)).call(this));

_this._value=value;
_this._offset=0;
_this._animation=null;
_this._listeners={};return _this;
}_createClass(AnimatedValue,[{key:'__detach',value:function __detach()

{
this.stopAnimation();
}},{key:'__getValue',value:function __getValue()

{
return this._value+this._offset;
}},{key:'setValue',value:function setValue(





value){
if(this._animation){
this._animation.stop();
this._animation=null;
}
this._updateValue(value);
}},{key:'setOffset',value:function setOffset(






offset){
this._offset=offset;
}},{key:'flattenOffset',value:function flattenOffset()





{
this._value+=this._offset;
this._offset=0;
}},{key:'addListener',value:function addListener(






callback){
var id=guid();
this._listeners[id]=callback;
return id;
}},{key:'removeListener',value:function removeListener(

id){
delete this._listeners[id];
}},{key:'removeAllListeners',value:function removeAllListeners()

{
this._listeners={};
}},{key:'stopAnimation',value:function stopAnimation(






callback){
this.stopTracking();
this._animation&&this._animation.stop();
this._animation=null;
callback&&callback(this.__getValue());
}},{key:'interpolate',value:function interpolate(





config){
return new AnimatedInterpolation(this,Interpolation.create(config));
}},{key:'animate',value:function animate(





animation,callback){var _this2=this;
var handle=null;
if(animation.__isInteraction){
handle=InteractionManager.current.createInteractionHandle();
}
var previousAnimation=this._animation;
this._animation&&this._animation.stop();
this._animation=animation;
animation.start(
this._value,
function(value){
_this2._updateValue(value);
},
function(result){
_this2._animation=null;
if(handle!==null){
InteractionManager.current.clearInteractionHandle(handle);
}
callback&&callback(result);
},
previousAnimation);

}},{key:'stopTracking',value:function stopTracking()




{
this._tracking&&this._tracking.__detach();
this._tracking=null;
}},{key:'track',value:function track(




tracking){
this.stopTracking();
this._tracking=tracking;
}},{key:'_updateValue',value:function _updateValue(

value){
this._value=value;
_flush(this);
for(var key in this._listeners){
this._listeners[key]({value:this.__getValue()});
}
}}]);return AnimatedValue;}(AnimatedWithChildren);


module.exports=AnimatedValue;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ "./node_modules/animated/lib/AnimatedValueXY.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var Animated=__webpack_require__("./node_modules/animated/lib/Animated.js");
var AnimatedValue=__webpack_require__("./node_modules/animated/lib/AnimatedValue.js");
var AnimatedWithChildren=__webpack_require__("./node_modules/animated/lib/AnimatedWithChildren.js");
var invariant=__webpack_require__(11);
var guid=__webpack_require__("./node_modules/animated/lib/guid.js");var









































AnimatedValueXY=function(_AnimatedWithChildren){_inherits(AnimatedValueXY,_AnimatedWithChildren);




function AnimatedValueXY(valueIn){_classCallCheck(this,AnimatedValueXY);var _this=_possibleConstructorReturn(this,(AnimatedValueXY.__proto__||Object.getPrototypeOf(AnimatedValueXY)).call(this));

var value=valueIn||{x:0,y:0};
if(typeof value.x==='number'&&typeof value.y==='number'){
_this.x=new AnimatedValue(value.x);
_this.y=new AnimatedValue(value.y);
}else{
invariant(
value.x instanceof AnimatedValue&&
value.y instanceof AnimatedValue,
'AnimatedValueXY must be initalized with an object of numbers or '+
'AnimatedValues.');

_this.x=value.x;
_this.y=value.y;
}
_this._listeners={};return _this;
}_createClass(AnimatedValueXY,[{key:'setValue',value:function setValue(

value){
this.x.setValue(value.x);
this.y.setValue(value.y);
}},{key:'setOffset',value:function setOffset(

offset){
this.x.setOffset(offset.x);
this.y.setOffset(offset.y);
}},{key:'flattenOffset',value:function flattenOffset()

{
this.x.flattenOffset();
this.y.flattenOffset();
}},{key:'__getValue',value:function __getValue()

{
return{
x:this.x.__getValue(),
y:this.y.__getValue()};

}},{key:'stopAnimation',value:function stopAnimation(

callback){
this.x.stopAnimation();
this.y.stopAnimation();
callback&&callback(this.__getValue());
}},{key:'addListener',value:function addListener(

callback){var _this2=this;
var id=guid();
var jointCallback=function jointCallback(_ref){var number=_ref.value;
callback(_this2.__getValue());
};
this._listeners[id]={
x:this.x.addListener(jointCallback),
y:this.y.addListener(jointCallback)};

return id;
}},{key:'removeListener',value:function removeListener(

id){
this.x.removeListener(this._listeners[id].x);
this.y.removeListener(this._listeners[id].y);
delete this._listeners[id];
}},{key:'getLayout',value:function getLayout()








{
return{
left:this.x,
top:this.y};

}},{key:'getTranslateTransform',value:function getTranslateTransform()










{
return[
{translateX:this.x},
{translateY:this.y}];

}}]);return AnimatedValueXY;}(AnimatedWithChildren);


module.exports=AnimatedValueXY;

/***/ }),

/***/ "./node_modules/animated/lib/AnimatedWithChildren.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var Animated=__webpack_require__("./node_modules/animated/lib/Animated.js");var

AnimatedWithChildren=function(_Animated){_inherits(AnimatedWithChildren,_Animated);


function AnimatedWithChildren(){_classCallCheck(this,AnimatedWithChildren);var _this=_possibleConstructorReturn(this,(AnimatedWithChildren.__proto__||Object.getPrototypeOf(AnimatedWithChildren)).call(this));

_this._children=[];return _this;
}_createClass(AnimatedWithChildren,[{key:'__addChild',value:function __addChild(

child){
if(this._children.length===0){
this.__attach();
}
this._children.push(child);
}},{key:'__removeChild',value:function __removeChild(

child){
var index=this._children.indexOf(child);
if(index===-1){
console.warn('Trying to remove a child that doesn\'t exist');
return;
}
this._children.splice(index,1);
if(this._children.length===0){
this.__detach();
}
}},{key:'__getChildren',value:function __getChildren()

{
return this._children;
}}]);return AnimatedWithChildren;}(Animated);


module.exports=AnimatedWithChildren;

/***/ }),

/***/ "./node_modules/animated/lib/Animation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var










Animation=function(){function Animation(){_classCallCheck(this,Animation);}_createClass(Animation,[{key:'start',value:function start(




fromValue,
onUpdate,
onEnd,
previousAnimation)
{}},{key:'stop',value:function stop()
{}},{key:'__debouncedOnEnd',value:function __debouncedOnEnd(

result){
var onEnd=this.__onEnd;
this.__onEnd=null;
onEnd&&onEnd(result);
}}]);return Animation;}();


module.exports=Animation;

/***/ }),

/***/ "./node_modules/animated/lib/DecayAnimation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var Animation=__webpack_require__("./node_modules/animated/lib/Animation.js");
var RequestAnimationFrame=__webpack_require__("./node_modules/animated/lib/injectable/RequestAnimationFrame.js");
var CancelAnimationFrame=__webpack_require__("./node_modules/animated/lib/injectable/CancelAnimationFrame.js");var








DecayAnimation=function(_Animation){_inherits(DecayAnimation,_Animation);








function DecayAnimation(
config)
{_classCallCheck(this,DecayAnimation);var _this=_possibleConstructorReturn(this,(DecayAnimation.__proto__||Object.getPrototypeOf(DecayAnimation)).call(this));

_this._deceleration=config.deceleration!==undefined?config.deceleration:0.998;
_this._velocity=config.velocity;
_this.__isInteraction=config.isInteraction!==undefined?config.isInteraction:true;return _this;
}_createClass(DecayAnimation,[{key:'start',value:function start(


fromValue,
onUpdate,
onEnd)
{
this.__active=true;
this._lastValue=fromValue;
this._fromValue=fromValue;
this._onUpdate=onUpdate;
this.__onEnd=onEnd;
this._startTime=Date.now();
this._animationFrame=RequestAnimationFrame.current(this.onUpdate.bind(this));
}},{key:'onUpdate',value:function onUpdate()

{
var now=Date.now();

var value=this._fromValue+
this._velocity/(1-this._deceleration)*(
1-Math.exp(-(1-this._deceleration)*(now-this._startTime)));

this._onUpdate(value);

if(Math.abs(this._lastValue-value)<0.1){
this.__debouncedOnEnd({finished:true});
return;
}

this._lastValue=value;
if(this.__active){
this._animationFrame=RequestAnimationFrame.current(this.onUpdate.bind(this));
}
}},{key:'stop',value:function stop()

{
this.__active=false;
CancelAnimationFrame.current(this._animationFrame);
this.__debouncedOnEnd({finished:false});
}}]);return DecayAnimation;}(Animation);


module.exports=DecayAnimation;

/***/ }),

/***/ "./node_modules/animated/lib/Easing.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}

var _bezier=__webpack_require__("./node_modules/animated/lib/bezier.js");var






Easing=function(){function Easing(){_classCallCheck(this,Easing);}_createClass(Easing,null,[{key:'step0',value:function step0(
n){
return n>0?1:0;
}},{key:'step1',value:function step1(

n){
return n>=1?1:0;
}},{key:'linear',value:function linear(

t){
return t;
}},{key:'ease',value:function ease(

t){
return _ease(t);
}},{key:'quad',value:function quad(

t){
return t*t;
}},{key:'cubic',value:function cubic(

t){
return t*t*t;
}},{key:'poly',value:function poly(

n){
return function(t){return Math.pow(t,n);};
}},{key:'sin',value:function sin(

t){
return 1-Math.cos(t*Math.PI/2);
}},{key:'circle',value:function circle(

t){
return 1-Math.sqrt(1-t*t);
}},{key:'exp',value:function exp(

t){
return Math.pow(2,10*(t-1));
}},{key:'elastic',value:function elastic()











{var bounciness=arguments.length>0&&arguments[0]!==undefined?arguments[0]:1;
var p=bounciness*Math.PI;
return function(t){return 1-Math.pow(Math.cos(t*Math.PI/2),3)*Math.cos(t*p);};
}},{key:'back',value:function back(

s){
if(s===undefined){
s=1.70158;
}
return function(t){return t*t*((s+1)*t-s);};
}},{key:'bounce',value:function bounce(

t){
if(t<1/2.75){
return 7.5625*t*t;
}

if(t<2/2.75){
t-=1.5/2.75;
return 7.5625*t*t+0.75;
}

if(t<2.5/2.75){
t-=2.25/2.75;
return 7.5625*t*t+0.9375;
}

t-=2.625/2.75;
return 7.5625*t*t+0.984375;
}},{key:'bezier',value:function bezier(


x1,
y1,
x2,
y2)
{
return _bezier(x1,y1,x2,y2);
}},{key:'in',value:function _in(


easing)
{
return easing;
}},{key:'out',value:function out(





easing)
{
return function(t){return 1-easing(1-t);};
}},{key:'inOut',value:function inOut(





easing)
{
return function(t){
if(t<0.5){
return easing(t*2)/2;
}
return 1-easing((1-t)*2)/2;
};
}}]);return Easing;}();


var _ease=Easing.bezier(0.42,0,1,1);



module.exports=Easing;

/***/ }),

/***/ "./node_modules/animated/lib/Interpolation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";











var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}

var normalizeColor=__webpack_require__("./node_modules/normalize-css-color/index.js");

var invariant=__webpack_require__(11);












var linear=function linear(t){return t;};var





Interpolation=function(){function Interpolation(){_classCallCheck(this,Interpolation);}_createClass(Interpolation,null,[{key:'create',value:function create(
config){

if(config.outputRange&&typeof config.outputRange[0]==='string'){
return createInterpolationFromStringOutputRange(config);
}

var outputRange=config.outputRange;
checkInfiniteRange('outputRange',outputRange);

var inputRange=config.inputRange;
checkInfiniteRange('inputRange',inputRange);
checkValidInputRange(inputRange);

invariant(
inputRange.length===outputRange.length,
'inputRange ('+inputRange.length+') and outputRange ('+
outputRange.length+') must have the same length');


var easing=config.easing||linear;

var extrapolateLeft='extend';
if(config.extrapolateLeft!==undefined){
extrapolateLeft=config.extrapolateLeft;
}else if(config.extrapolate!==undefined){
extrapolateLeft=config.extrapolate;
}

var extrapolateRight='extend';
if(config.extrapolateRight!==undefined){
extrapolateRight=config.extrapolateRight;
}else if(config.extrapolate!==undefined){
extrapolateRight=config.extrapolate;
}

return function(input){
invariant(
typeof input==='number',
'Cannot interpolation an input which is not a number');


var range=findRange(input,inputRange);
return interpolate(
input,
inputRange[range],
inputRange[range+1],
outputRange[range],
outputRange[range+1],
easing,
extrapolateLeft,
extrapolateRight);

};
}}]);return Interpolation;}();


function interpolate(
input,
inputMin,
inputMax,
outputMin,
outputMax,
easing,
extrapolateLeft,
extrapolateRight)
{
var result=input;


if(result<inputMin){
if(extrapolateLeft==='identity'){
return result;
}else if(extrapolateLeft==='clamp'){
result=inputMin;
}else if(extrapolateLeft==='extend'){

}
}

if(result>inputMax){
if(extrapolateRight==='identity'){
return result;
}else if(extrapolateRight==='clamp'){
result=inputMax;
}else if(extrapolateRight==='extend'){

}
}

if(outputMin===outputMax){
return outputMin;
}

if(inputMin===inputMax){
if(input<=inputMin){
return outputMin;
}
return outputMax;
}


if(inputMin===-Infinity){
result=-result;
}else if(inputMax===Infinity){
result=result-inputMin;
}else{
result=(result-inputMin)/(inputMax-inputMin);
}


result=easing(result);


if(outputMin===-Infinity){
result=-result;
}else if(outputMax===Infinity){
result=result+outputMin;
}else{
result=result*(outputMax-outputMin)+outputMin;
}

return result;
}

function colorToRgba(input){
var int32Color=normalizeColor(input);
if(int32Color===null){
return input;
}

int32Color=int32Color||0;

var r=(int32Color&0xff000000)>>>24;
var g=(int32Color&0x00ff0000)>>>16;
var b=(int32Color&0x0000ff00)>>>8;
var a=(int32Color&0x000000ff)/255;

return'rgba('+r+', '+g+', '+b+', '+a+')';
}

var stringShapeRegex=/[0-9\.-]+/g;









function createInterpolationFromStringOutputRange(
config)
{
var outputRange=config.outputRange;
invariant(outputRange.length>=2,'Bad output range');
outputRange=outputRange.map(colorToRgba);
checkPattern(outputRange);












var outputRanges=outputRange[0].match(stringShapeRegex).map(function(){return[];});
outputRange.forEach(function(value){



value.match(stringShapeRegex).forEach(function(number,i){
outputRanges[i].push(+number);
});
});




var interpolations=outputRange[0].match(stringShapeRegex).map(function(value,i){
return Interpolation.create(_extends({},
config,{
outputRange:outputRanges[i]}));

});



var shouldRound=/^rgb/.test(outputRange[0]);

return function(input){
var i=0;



return outputRange[0].replace(stringShapeRegex,function(){
var val=interpolations[i++](input);
return String(shouldRound&&i<4?Math.round(val):val);
});
};
}

function checkPattern(arr){
var pattern=arr[0].replace(stringShapeRegex,'');
for(var i=1;i<arr.length;++i){
invariant(
pattern===arr[i].replace(stringShapeRegex,''),
'invalid pattern '+arr[0]+' and '+arr[i]);

}
}

function findRange(input,inputRange){
for(var i=1;i<inputRange.length-1;++i){
if(inputRange[i]>=input){
break;
}
}
return i-1;
}

function checkValidInputRange(arr){
invariant(arr.length>=2,'inputRange must have at least 2 elements');
for(var i=1;i<arr.length;++i){
invariant(
arr[i]>=arr[i-1],






'inputRange must be monotonically increasing '+arr);

}
}

function checkInfiniteRange(name,arr){
invariant(arr.length>=2,name+' must have at least 2 elements');
invariant(
arr.length!==2||arr[0]!==-Infinity||arr[1]!==Infinity,






name+'cannot be ]-infinity;+infinity[ '+arr);

}

module.exports=Interpolation;

/***/ }),

/***/ "./node_modules/animated/lib/SetPolyfill.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";











function SetPolyfill(){
this._cache=[];
}

SetPolyfill.prototype.add=function(e){
if(this._cache.indexOf(e)===-1){
this._cache.push(e);
}
};

SetPolyfill.prototype.forEach=function(cb){
this._cache.forEach(cb);
};

module.exports=SetPolyfill;

/***/ }),

/***/ "./node_modules/animated/lib/SpringAnimation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var Animation=__webpack_require__("./node_modules/animated/lib/Animation.js");
var AnimatedValue=__webpack_require__("./node_modules/animated/lib/AnimatedValue.js");
var RequestAnimationFrame=__webpack_require__("./node_modules/animated/lib/injectable/RequestAnimationFrame.js");
var CancelAnimationFrame=__webpack_require__("./node_modules/animated/lib/injectable/CancelAnimationFrame.js");
var invariant=__webpack_require__(11);
var SpringConfig=__webpack_require__("./node_modules/animated/lib/SpringConfig.js");















function withDefault(value,defaultValue){
if(value===undefined||value===null){
return defaultValue;
}
return value;
}var

SpringAnimation=function(_Animation){_inherits(SpringAnimation,_Animation);















function SpringAnimation(
config)
{_classCallCheck(this,SpringAnimation);var _this=_possibleConstructorReturn(this,(SpringAnimation.__proto__||Object.getPrototypeOf(SpringAnimation)).call(this));


_this._overshootClamping=withDefault(config.overshootClamping,false);
_this._restDisplacementThreshold=withDefault(config.restDisplacementThreshold,0.001);
_this._restSpeedThreshold=withDefault(config.restSpeedThreshold,0.001);
_this._initialVelocity=config.velocity;
_this._lastVelocity=withDefault(config.velocity,0);
_this._toValue=config.toValue;
_this.__isInteraction=config.isInteraction!==undefined?config.isInteraction:true;

var springConfig;
if(config.bounciness!==undefined||config.speed!==undefined){
invariant(
config.tension===undefined&&config.friction===undefined,
'You can only define bounciness/speed or tension/friction but not both');

springConfig=SpringConfig.fromBouncinessAndSpeed(
withDefault(config.bounciness,8),
withDefault(config.speed,12));

}else{
springConfig=SpringConfig.fromOrigamiTensionAndFriction(
withDefault(config.tension,40),
withDefault(config.friction,7));

}
_this._tension=springConfig.tension;
_this._friction=springConfig.friction;return _this;
}_createClass(SpringAnimation,[{key:'start',value:function start(


fromValue,
onUpdate,
onEnd,
previousAnimation)
{
this.__active=true;
this._startPosition=fromValue;
this._lastPosition=this._startPosition;

this._onUpdate=onUpdate;
this.__onEnd=onEnd;
this._lastTime=Date.now();

if(previousAnimation instanceof SpringAnimation){
var internalState=previousAnimation.getInternalState();
this._lastPosition=internalState.lastPosition;
this._lastVelocity=internalState.lastVelocity;
this._lastTime=internalState.lastTime;
}
if(this._initialVelocity!==undefined&&
this._initialVelocity!==null){
this._lastVelocity=this._initialVelocity;
}
this.onUpdate();
}},{key:'getInternalState',value:function getInternalState()

{
return{
lastPosition:this._lastPosition,
lastVelocity:this._lastVelocity,
lastTime:this._lastTime};

}},{key:'onUpdate',value:function onUpdate()

{
var position=this._lastPosition;
var velocity=this._lastVelocity;

var tempPosition=this._lastPosition;
var tempVelocity=this._lastVelocity;





var MAX_STEPS=64;
var now=Date.now();
if(now>this._lastTime+MAX_STEPS){
now=this._lastTime+MAX_STEPS;
}




var TIMESTEP_MSEC=1;
var numSteps=Math.floor((now-this._lastTime)/TIMESTEP_MSEC);

for(var i=0;i<numSteps;++i){

var step=TIMESTEP_MSEC/1000;



var aVelocity=velocity;
var aAcceleration=this._tension*(this._toValue-tempPosition)-this._friction*tempVelocity;
var tempPosition=position+aVelocity*step/2;
var tempVelocity=velocity+aAcceleration*step/2;

var bVelocity=tempVelocity;
var bAcceleration=this._tension*(this._toValue-tempPosition)-this._friction*tempVelocity;
tempPosition=position+bVelocity*step/2;
tempVelocity=velocity+bAcceleration*step/2;

var cVelocity=tempVelocity;
var cAcceleration=this._tension*(this._toValue-tempPosition)-this._friction*tempVelocity;
tempPosition=position+cVelocity*step/2;
tempVelocity=velocity+cAcceleration*step/2;

var dVelocity=tempVelocity;
var dAcceleration=this._tension*(this._toValue-tempPosition)-this._friction*tempVelocity;
tempPosition=position+cVelocity*step/2;
tempVelocity=velocity+cAcceleration*step/2;

var dxdt=(aVelocity+2*(bVelocity+cVelocity)+dVelocity)/6;
var dvdt=(aAcceleration+2*(bAcceleration+cAcceleration)+dAcceleration)/6;

position+=dxdt*step;
velocity+=dvdt*step;
}

this._lastTime=now;
this._lastPosition=position;
this._lastVelocity=velocity;

this._onUpdate(position);
if(!this.__active){
return;
}


var isOvershooting=false;
if(this._overshootClamping&&this._tension!==0){
if(this._startPosition<this._toValue){
isOvershooting=position>this._toValue;
}else{
isOvershooting=position<this._toValue;
}
}
var isVelocity=Math.abs(velocity)<=this._restSpeedThreshold;
var isDisplacement=true;
if(this._tension!==0){
isDisplacement=Math.abs(this._toValue-position)<=this._restDisplacementThreshold;
}

if(isOvershooting||isVelocity&&isDisplacement){
if(this._tension!==0){

this._onUpdate(this._toValue);
}

this.__debouncedOnEnd({finished:true});
return;
}
this._animationFrame=RequestAnimationFrame.current(this.onUpdate.bind(this));
}},{key:'stop',value:function stop()

{
this.__active=false;
CancelAnimationFrame.current(this._animationFrame);
this.__debouncedOnEnd({finished:false});
}}]);return SpringAnimation;}(Animation);


module.exports=SpringAnimation;

/***/ }),

/***/ "./node_modules/animated/lib/SpringConfig.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


















function tensionFromOrigamiValue(oValue){
return(oValue-30)*3.62+194;
}

function frictionFromOrigamiValue(oValue){
return(oValue-8)*3+25;
}

function fromOrigamiTensionAndFriction(
tension,
friction)
{
return{
tension:tensionFromOrigamiValue(tension),
friction:frictionFromOrigamiValue(friction)};

}

function fromBouncinessAndSpeed(
bounciness,
speed)
{
function normalize(value,startValue,endValue){
return(value-startValue)/(endValue-startValue);
}

function projectNormal(n,start,end){
return start+n*(end-start);
}

function linearInterpolation(t,start,end){
return t*end+(1-t)*start;
}

function quadraticOutInterpolation(t,start,end){
return linearInterpolation(2*t-t*t,start,end);
}

function b3Friction1(x){
return 0.0007*Math.pow(x,3)-
0.031*Math.pow(x,2)+0.64*x+1.28;
}

function b3Friction2(x){
return 0.000044*Math.pow(x,3)-
0.006*Math.pow(x,2)+0.36*x+2;
}

function b3Friction3(x){
return 0.00000045*Math.pow(x,3)-
0.000332*Math.pow(x,2)+0.1078*x+5.84;
}

function b3Nobounce(tension){
if(tension<=18){
return b3Friction1(tension);
}else if(tension>18&&tension<=44){
return b3Friction2(tension);
}else{
return b3Friction3(tension);
}
}

var b=normalize(bounciness/1.7,0,20);
b=projectNormal(b,0,0.8);
var s=normalize(speed/1.7,0,20);
var bouncyTension=projectNormal(s,0.5,200);
var bouncyFriction=quadraticOutInterpolation(
b,
b3Nobounce(bouncyTension),
0.01);


return{
tension:tensionFromOrigamiValue(bouncyTension),
friction:frictionFromOrigamiValue(bouncyFriction)};

}

module.exports={
fromOrigamiTensionAndFriction:fromOrigamiTensionAndFriction,
fromBouncinessAndSpeed:fromBouncinessAndSpeed};

/***/ }),

/***/ "./node_modules/animated/lib/TimingAnimation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var Animation=__webpack_require__("./node_modules/animated/lib/Animation.js");
var AnimatedValue=__webpack_require__("./node_modules/animated/lib/AnimatedValue.js");
var Easing=__webpack_require__("./node_modules/animated/lib/Easing.js");
var RequestAnimationFrame=__webpack_require__("./node_modules/animated/lib/injectable/RequestAnimationFrame.js");
var CancelAnimationFrame=__webpack_require__("./node_modules/animated/lib/injectable/CancelAnimationFrame.js");



var easeInOut=Easing.inOut(Easing.ease);var








TimingAnimation=function(_Animation){_inherits(TimingAnimation,_Animation);










function TimingAnimation(
config)
{_classCallCheck(this,TimingAnimation);var _this=_possibleConstructorReturn(this,(TimingAnimation.__proto__||Object.getPrototypeOf(TimingAnimation)).call(this));

_this._toValue=config.toValue;
_this._easing=config.easing!==undefined?config.easing:easeInOut;
_this._duration=config.duration!==undefined?config.duration:500;
_this._delay=config.delay!==undefined?config.delay:0;
_this.__isInteraction=config.isInteraction!==undefined?config.isInteraction:true;return _this;
}_createClass(TimingAnimation,[{key:'start',value:function start(


fromValue,
onUpdate,
onEnd)
{var _this2=this;
this.__active=true;
this._fromValue=fromValue;
this._onUpdate=onUpdate;
this.__onEnd=onEnd;

var start=function start(){
if(_this2._duration===0){
_this2._onUpdate(_this2._toValue);
_this2.__debouncedOnEnd({finished:true});
}else{
_this2._startTime=Date.now();
_this2._animationFrame=RequestAnimationFrame.current(_this2.onUpdate.bind(_this2));
}
};
if(this._delay){
this._timeout=setTimeout(start,this._delay);
}else{
start();
}
}},{key:'onUpdate',value:function onUpdate()

{
var now=Date.now();
if(now>=this._startTime+this._duration){
if(this._duration===0){
this._onUpdate(this._toValue);
}else{
this._onUpdate(
this._fromValue+this._easing(1)*(this._toValue-this._fromValue));

}
this.__debouncedOnEnd({finished:true});
return;
}

this._onUpdate(
this._fromValue+
this._easing((now-this._startTime)/this._duration)*(
this._toValue-this._fromValue));

if(this.__active){
this._animationFrame=RequestAnimationFrame.current(this.onUpdate.bind(this));
}
}},{key:'stop',value:function stop()

{
this.__active=false;
clearTimeout(this._timeout);
CancelAnimationFrame.current(this._animationFrame);
this.__debouncedOnEnd({finished:false});
}}]);return TimingAnimation;}(Animation);


module.exports=TimingAnimation;

/***/ }),

/***/ "./node_modules/animated/lib/bezier.js":
/***/ (function(module, exports) {









var NEWTON_ITERATIONS=4;
var NEWTON_MIN_SLOPE=0.001;
var SUBDIVISION_PRECISION=0.0000001;
var SUBDIVISION_MAX_ITERATIONS=10;

var kSplineTableSize=11;
var kSampleStepSize=1.0/(kSplineTableSize-1.0);

var float32ArraySupported=typeof Float32Array==='function';

function A(aA1,aA2){return 1.0-3.0*aA2+3.0*aA1;}
function B(aA1,aA2){return 3.0*aA2-6.0*aA1;}
function C(aA1){return 3.0*aA1;}


function calcBezier(aT,aA1,aA2){return((A(aA1,aA2)*aT+B(aA1,aA2))*aT+C(aA1))*aT;}


function getSlope(aT,aA1,aA2){return 3.0*A(aA1,aA2)*aT*aT+2.0*B(aA1,aA2)*aT+C(aA1);}

function binarySubdivide(aX,aA,aB,mX1,mX2){
var currentX,currentT,i=0;
do{
currentT=aA+(aB-aA)/2.0;
currentX=calcBezier(currentT,mX1,mX2)-aX;
if(currentX>0.0){
aB=currentT;
}else{
aA=currentT;
}
}while(Math.abs(currentX)>SUBDIVISION_PRECISION&&++i<SUBDIVISION_MAX_ITERATIONS);
return currentT;
}

function newtonRaphsonIterate(aX,aGuessT,mX1,mX2){
for(var i=0;i<NEWTON_ITERATIONS;++i){
var currentSlope=getSlope(aGuessT,mX1,mX2);
if(currentSlope===0.0){
return aGuessT;
}
var currentX=calcBezier(aGuessT,mX1,mX2)-aX;
aGuessT-=currentX/currentSlope;
}
return aGuessT;
}

module.exports=function bezier(mX1,mY1,mX2,mY2){
if(!(0<=mX1&&mX1<=1&&0<=mX2&&mX2<=1)){
throw new Error('bezier x values must be in [0, 1] range');
}


var sampleValues=float32ArraySupported?new Float32Array(kSplineTableSize):new Array(kSplineTableSize);
if(mX1!==mY1||mX2!==mY2){
for(var i=0;i<kSplineTableSize;++i){
sampleValues[i]=calcBezier(i*kSampleStepSize,mX1,mX2);
}
}

function getTForX(aX){
var intervalStart=0.0;
var currentSample=1;
var lastSample=kSplineTableSize-1;

for(;currentSample!==lastSample&&sampleValues[currentSample]<=aX;++currentSample){
intervalStart+=kSampleStepSize;
}
--currentSample;


var dist=(aX-sampleValues[currentSample])/(sampleValues[currentSample+1]-sampleValues[currentSample]);
var guessForT=intervalStart+dist*kSampleStepSize;

var initialSlope=getSlope(guessForT,mX1,mX2);
if(initialSlope>=NEWTON_MIN_SLOPE){
return newtonRaphsonIterate(aX,guessForT,mX1,mX2);
}else if(initialSlope===0.0){
return guessForT;
}else{
return binarySubdivide(aX,intervalStart,intervalStart+kSampleStepSize,mX1,mX2);
}
}

return function BezierEasing(x){
if(mX1===mY1&&mX2===mY2){
return x;
}

if(x===0){
return 0;
}
if(x===1){
return 1;
}
return calcBezier(getTForX(x),mY1,mY2);
};
};

/***/ }),

/***/ "./node_modules/animated/lib/createAnimatedComponent.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/createAnimatedComponent.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var React=__webpack_require__(1);
var AnimatedProps=__webpack_require__("./node_modules/animated/lib/AnimatedProps.js");
var ApplyAnimatedValues=__webpack_require__("./node_modules/animated/lib/injectable/ApplyAnimatedValues.js");

function createAnimatedComponent(Component){
var refName='node';var

AnimatedComponent=function(_React$Component){_inherits(AnimatedComponent,_React$Component);function AnimatedComponent(){_classCallCheck(this,AnimatedComponent);return _possibleConstructorReturn(this,(AnimatedComponent.__proto__||Object.getPrototypeOf(AnimatedComponent)).apply(this,arguments));}_createClass(AnimatedComponent,[{key:'componentWillUnmount',value:function componentWillUnmount()


{
this._propsAnimated&&this._propsAnimated.__detach();
}},{key:'setNativeProps',value:function setNativeProps(

props){
var didUpdate=ApplyAnimatedValues.current(this.refs[refName],props,this);
if(didUpdate===false){
this.forceUpdate();
}
}},{key:'componentWillMount',value:function componentWillMount()

{
this.attachProps(this.props);
}},{key:'attachProps',value:function attachProps(

nextProps){var _this2=this;
var oldPropsAnimated=this._propsAnimated;







var callback=function callback(){
var didUpdate=ApplyAnimatedValues.current(_this2.refs[refName],_this2._propsAnimated.__getAnimatedValue(),_this2);
if(didUpdate===false){
_this2.forceUpdate();
}
};

this._propsAnimated=new AnimatedProps(
nextProps,
callback);










oldPropsAnimated&&oldPropsAnimated.__detach();
}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(

nextProps){
this.attachProps(nextProps);
}},{key:'render',value:function render()

{
return(
React.createElement(Component,_extends({},
this._propsAnimated.__getValue(),{
ref:refName,__source:{fileName:_jsxFileName,lineNumber:76}})));


}}]);return AnimatedComponent;}(React.Component);

AnimatedComponent.propTypes={
style:function style(props,propName,componentName){
if(!Component.propTypes){
return;
}














}};


return AnimatedComponent;
}

module.exports=createAnimatedComponent;

/***/ }),

/***/ "./node_modules/animated/lib/guid.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";












var _uniqueId=0;

module.exports=function uniqueId(){
return String(_uniqueId++);
};

/***/ }),

/***/ "./node_modules/animated/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var invariant=__webpack_require__(11);

var Animated=__webpack_require__("./node_modules/animated/lib/Animated.js");
var AnimatedValue=__webpack_require__("./node_modules/animated/lib/AnimatedValue.js");
var AnimatedValueXY=__webpack_require__("./node_modules/animated/lib/AnimatedValueXY.js");
var AnimatedAddition=__webpack_require__("./node_modules/animated/lib/AnimatedAddition.js");
var AnimatedMultiplication=__webpack_require__("./node_modules/animated/lib/AnimatedMultiplication.js");
var AnimatedModulo=__webpack_require__("./node_modules/animated/lib/AnimatedModulo.js");
var AnimatedTemplate=__webpack_require__("./node_modules/animated/lib/AnimatedTemplate.js");
var AnimatedTracking=__webpack_require__("./node_modules/animated/lib/AnimatedTracking.js");
var isAnimated=__webpack_require__("./node_modules/animated/lib/isAnimated.js");

var Animation=__webpack_require__("./node_modules/animated/lib/Animation.js");
var TimingAnimation=__webpack_require__("./node_modules/animated/lib/TimingAnimation.js");
var DecayAnimation=__webpack_require__("./node_modules/animated/lib/DecayAnimation.js");
var SpringAnimation=__webpack_require__("./node_modules/animated/lib/SpringAnimation.js");

































var maybeVectorAnim=function maybeVectorAnim(
value,
config,
anim)
{
if(value instanceof AnimatedValueXY){
var configX=_extends({},config);
var configY=_extends({},config);
for(var key in config){var _config$key=
config[key],x=_config$key.x,y=_config$key.y;
if(x!==undefined&&y!==undefined){
configX[key]=x;
configY[key]=y;
}
}
var aX=anim(value.x,configX);
var aY=anim(value.y,configY);


return parallel([aX,aY],{stopTogether:false});
}
return null;
};

var spring=function spring(
value,
config)
{
return maybeVectorAnim(value,config,spring)||{
start:function start(callback){
var singleValue=value;
var singleConfig=config;
singleValue.stopTracking();
if(config.toValue instanceof Animated){
singleValue.track(new AnimatedTracking(
singleValue,
config.toValue,
SpringAnimation,
singleConfig,
callback));

}else{
singleValue.animate(new SpringAnimation(singleConfig),callback);
}
},

stop:function stop(){
value.stopAnimation();
}};

};

var timing=function timing(
value,
config)
{
return maybeVectorAnim(value,config,timing)||{
start:function start(callback){
var singleValue=value;
var singleConfig=config;
singleValue.stopTracking();
if(config.toValue instanceof Animated){
singleValue.track(new AnimatedTracking(
singleValue,
config.toValue,
TimingAnimation,
singleConfig,
callback));

}else{
singleValue.animate(new TimingAnimation(singleConfig),callback);
}
},

stop:function stop(){
value.stopAnimation();
}};

};

var decay=function decay(
value,
config)
{
return maybeVectorAnim(value,config,decay)||{
start:function start(callback){
var singleValue=value;
var singleConfig=config;
singleValue.stopTracking();
singleValue.animate(new DecayAnimation(singleConfig),callback);
},

stop:function stop(){
value.stopAnimation();
}};

};

var sequence=function sequence(
animations)
{
var current=0;
return{
start:function start(callback){
var onComplete=function onComplete(result){
if(!result.finished){
callback&&callback(result);
return;
}

current++;

if(current===animations.length){
callback&&callback(result);
return;
}

animations[current].start(onComplete);
};

if(animations.length===0){
callback&&callback({finished:true});
}else{
animations[current].start(onComplete);
}
},

stop:function stop(){
if(current<animations.length){
animations[current].stop();
}
}};

};




var parallel=function parallel(
animations,
config)
{
var doneCount=0;

var hasEnded={};
var stopTogether=!(config&&config.stopTogether===false);

var result={
start:function start(callback){
if(doneCount===animations.length){
callback&&callback({finished:true});
return;
}

animations.forEach(function(animation,idx){
var cb=function cb(endResult){
hasEnded[idx]=true;
doneCount++;
if(doneCount===animations.length){
doneCount=0;
callback&&callback(endResult);
return;
}

if(!endResult.finished&&stopTogether){
result.stop();
}
};

if(!animation){
cb({finished:true});
}else{
animation.start(cb);
}
});
},

stop:function stop(){
animations.forEach(function(animation,idx){
!hasEnded[idx]&&animation.stop();
hasEnded[idx]=true;
});
}};


return result;
};

var delay=function delay(time){

return timing(new AnimatedValue(0),{toValue:0,delay:time,duration:0});
};

var stagger=function stagger(
time,
animations)
{
return parallel(animations.map(function(animation,i){
return sequence([
delay(time*i),
animation]);

}));
};




var event=function event(
argMapping,
config)
{
return function(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}
var traverse=function traverse(recMapping,recEvt,key){
if(typeof recEvt==='number'){
invariant(
recMapping instanceof AnimatedValue,
'Bad mapping of type '+typeof recMapping+' for key '+key+
', event value must map to AnimatedValue');

recMapping.setValue(recEvt);
return;
}
invariant(
typeof recMapping==='object',
'Bad mapping of type '+typeof recMapping+' for key '+key);

invariant(
typeof recEvt==='object',
'Bad event of type '+typeof recEvt+' for key '+key);

for(var key in recMapping){
traverse(recMapping[key],recEvt[key],key);
}
};
argMapping.forEach(function(mapping,idx){
traverse(mapping,args[idx],'arg'+idx);
});
if(config&&config.listener){
config.listener.apply(null,args);
}
};
};


























































































module.exports={




Value:AnimatedValue,



ValueXY:AnimatedValueXY,





decay:decay,




timing:timing,




spring:spring,





add:function add(a,b){
return new AnimatedAddition(a,b);
},




multiply:function multiply(a,b){
return new AnimatedMultiplication(a,b);
},





modulo:function modulo(a,modulus){
return new AnimatedModulo(a,modulus);
},





template:function template(strings){for(var _len2=arguments.length,values=Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++){values[_key2-1]=arguments[_key2];}
return new AnimatedTemplate(strings,values);
},




delay:delay,





sequence:sequence,





parallel:parallel,




stagger:stagger,

















event:event,





isAnimated:isAnimated,




createAnimatedComponent:__webpack_require__("./node_modules/animated/lib/createAnimatedComponent.js"),

inject:{
ApplyAnimatedValues:__webpack_require__("./node_modules/animated/lib/injectable/ApplyAnimatedValues.js").inject,
InteractionManager:__webpack_require__("./node_modules/animated/lib/injectable/InteractionManager.js").inject,
FlattenStyle:__webpack_require__("./node_modules/animated/lib/injectable/FlattenStyle.js").inject,
RequestAnimationFrame:__webpack_require__("./node_modules/animated/lib/injectable/RequestAnimationFrame.js").inject,
CancelAnimationFrame:__webpack_require__("./node_modules/animated/lib/injectable/CancelAnimationFrame.js").inject},


__PropsOnlyForTests:__webpack_require__("./node_modules/animated/lib/AnimatedProps.js")};

/***/ }),

/***/ "./node_modules/animated/lib/injectable/ApplyAnimatedValues.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";












var ApplyAnimatedValues={
current:function ApplyAnimatedValues(instance,props){
if(instance.setNativeProps){
instance.setNativeProps(props);
}else{
return false;
}
},
inject:function inject(apply){
ApplyAnimatedValues.current=apply;
}};


module.exports=ApplyAnimatedValues;

/***/ }),

/***/ "./node_modules/animated/lib/injectable/CancelAnimationFrame.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {











var CancelAnimationFrame={
current:function current(id){return global.cancelAnimationFrame(id);},
inject:function inject(injected){
CancelAnimationFrame.current=injected;
}};


module.exports=CancelAnimationFrame;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ "./node_modules/animated/lib/injectable/FlattenStyle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";












var FlattenStyle={
current:function current(style){return style;},
inject:function inject(flatten){
FlattenStyle.current=flatten;
}};


module.exports=FlattenStyle;

/***/ }),

/***/ "./node_modules/animated/lib/injectable/InteractionManager.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";












var InteractionManager={
current:{
createInteractionHandle:function createInteractionHandle(){},
clearInteractionHandle:function clearInteractionHandle(){}},

inject:function inject(manager){
InteractionManager.current=manager;
}};


module.exports=InteractionManager;

/***/ }),

/***/ "./node_modules/animated/lib/injectable/RequestAnimationFrame.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {











var RequestAnimationFrame={
current:function current(cb){return global.requestAnimationFrame(cb);},
inject:function inject(injected){
RequestAnimationFrame.current=injected;
}};


module.exports=RequestAnimationFrame;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ "./node_modules/animated/lib/isAnimated.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";












var Animated=__webpack_require__("./node_modules/animated/lib/Animated.js");

function isAnimated(obj){
return obj instanceof Animated;
}

module.exports=isAnimated;

/***/ }),

/***/ "./node_modules/animated/lib/targets/react-dom.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";










var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var Animated=__webpack_require__("./node_modules/animated/lib/index.js");




var transformWithLengthUnits={
translateX:true,
translateY:true,
translateZ:true,
perspective:true};




function mapTransform(t){
var k=Object.keys(t)[0];
var unit=transformWithLengthUnits[k]&&typeof t[k]==='number'?'px':'';
return k+'('+t[k]+unit+')';
}

var isUnitlessNumber={
animationIterationCount:true,
borderImageOutset:true,
borderImageSlice:true,
borderImageWidth:true,
boxFlex:true,
boxFlexGroup:true,
boxOrdinalGroup:true,
columnCount:true,
columns:true,
flex:true,
flexGrow:true,
flexPositive:true,
flexShrink:true,
flexNegative:true,
flexOrder:true,
gridRow:true,
gridRowEnd:true,
gridRowSpan:true,
gridRowStart:true,
gridColumn:true,
gridColumnEnd:true,
gridColumnSpan:true,
gridColumnStart:true,
fontWeight:true,
lineClamp:true,
lineHeight:true,
opacity:true,
order:true,
orphans:true,
tabSize:true,
widows:true,
zIndex:true,
zoom:true,


fillOpacity:true,
floodOpacity:true,
stopOpacity:true,
strokeDasharray:true,
strokeDashoffset:true,
strokeMiterlimit:true,
strokeOpacity:true,
strokeWidth:true};








function prefixKey(prefix,key){
return prefix+key.charAt(0).toUpperCase()+key.substring(1);
}





var prefixes=['Webkit','ms','Moz','O'];



Object.keys(isUnitlessNumber).forEach(function(prop){
prefixes.forEach(function(prefix){
isUnitlessNumber[prefixKey(prefix,prop)]=isUnitlessNumber[prop];
});
});




function mapStyle(style){
if(style&&style.transform&&typeof style.transform!=='string'){

style.transform=style.transform.map(mapTransform).join(' ');
}
return style;
}

function dangerousStyleValue(name,value,isCustomProperty){










var isEmpty=value==null||typeof value==='boolean'||value==='';
if(isEmpty){
return'';
}

if(
!isCustomProperty&&
typeof value==='number'&&
value!==0&&
!(isUnitlessNumber.hasOwnProperty(name)&&isUnitlessNumber[name]))
{
return value+'px';
}

return(''+value).trim();
}

function setValueForStyles(node,styles){
var style=node.style;
for(var styleName in styles){
if(!styles.hasOwnProperty(styleName)){
continue;
}
var isCustomProperty=styleName.indexOf('--')===0;
var styleValue=dangerousStyleValue(
styleName,
styles[styleName],
isCustomProperty);

if(styleName==='float'){
styleName='cssFloat';
}
if(isCustomProperty){
style.setProperty(styleName,styleValue);
}else{
style[styleName]=styleValue;
}
}
}

function ApplyAnimatedValues(instance,props){
if(instance.setNativeProps){
instance.setNativeProps(props);
}else if(instance.nodeType&&instance.setAttribute!==undefined){
setValueForStyles(instance,mapStyle(props.style));
}else{
return false;
}
}

Animated.
inject.
ApplyAnimatedValues(ApplyAnimatedValues);

module.exports=_extends({},
Animated,{
div:Animated.createAnimatedComponent('div'),
span:Animated.createAnimatedComponent('span'),
img:Animated.createAnimatedComponent('img')});

/***/ }),

/***/ "./node_modules/normalize-css-color/index.js":
/***/ (function(module, exports) {

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

function normalizeColor(color) {
  var match;

  if (typeof color === 'number') {
    if (color >>> 0 === color && color >= 0 && color <= 0xffffffff) {
      return color;
    }
    return null;
  }

  // Ordered based on occurrences on Facebook codebase
  if ((match = matchers.hex6.exec(color))) {
    return parseInt(match[1] + 'ff', 16) >>> 0;
  }

  if (names.hasOwnProperty(color)) {
    return names[color];
  }

  if ((match = matchers.rgb.exec(color))) {
    return (
        parse255(match[1]) << 24 | // r
        parse255(match[2]) << 16 | // g
        parse255(match[3]) << 8 | // b
        0x000000ff // a
      ) >>> 0;
  }

  if ((match = matchers.rgba.exec(color))) {
    return (
        parse255(match[1]) << 24 | // r
        parse255(match[2]) << 16 | // g
        parse255(match[3]) << 8 | // b
        parse1(match[4]) // a
      ) >>> 0;
  }

  if ((match = matchers.hex3.exec(color))) {
    return parseInt(
        match[1] + match[1] + // r
        match[2] + match[2] + // g
        match[3] + match[3] + // b
        'ff', // a
        16
      ) >>> 0;
  }

  // https://drafts.csswg.org/css-color-4/#hex-notation
  if ((match = matchers.hex8.exec(color))) {
    return parseInt(match[1], 16) >>> 0;
  }

  if ((match = matchers.hex4.exec(color))) {
    return parseInt(
        match[1] + match[1] + // r
        match[2] + match[2] + // g
        match[3] + match[3] + // b
        match[4] + match[4], // a
        16
      ) >>> 0;
  }

  if ((match = matchers.hsl.exec(color))) {
    return (
        hslToRgb(
          parse360(match[1]), // h
          parsePercentage(match[2]), // s
          parsePercentage(match[3]) // l
        ) |
        0x000000ff // a
      ) >>> 0;
  }

  if ((match = matchers.hsla.exec(color))) {
    return (
        hslToRgb(
          parse360(match[1]), // h
          parsePercentage(match[2]), // s
          parsePercentage(match[3]) // l
        ) |
        parse1(match[4]) // a
      ) >>> 0;
  }

  return null;
}

function hue2rgb(p, q, t) {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p + (q - p) * 6 * t;
  }
  if (t < 1 / 2) {
    return q;
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }
  return p;
}

function hslToRgb(h, s, l) {
  var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  var p = 2 * l - q;
  var r = hue2rgb(p, q, h + 1 / 3);
  var g = hue2rgb(p, q, h);
  var b = hue2rgb(p, q, h - 1 / 3);

  return (
    Math.round(r * 255) << 24 |
    Math.round(g * 255) << 16 |
    Math.round(b * 255) << 8
  );
}

// var INTEGER = '[-+]?\\d+';
var NUMBER = '[-+]?\\d*\\.?\\d+';
var PERCENTAGE = NUMBER + '%';

function toArray(arrayLike) {
  return Array.prototype.slice.call(arrayLike, 0);
}

function call() {
  return '\\(\\s*(' + toArray(arguments).join(')\\s*,\\s*(') + ')\\s*\\)';
}

var matchers = {
  rgb: new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER)),
  rgba: new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, NUMBER)),
  hsl: new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE)),
  hsla: new RegExp('hsla' + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER)),
  hex3: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex4: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#([0-9a-fA-F]{6})$/,
  hex8: /^#([0-9a-fA-F]{8})$/,
};

function parse255(str) {
  var int = parseInt(str, 10);
  if (int < 0) {
    return 0;
  }
  if (int > 255) {
    return 255;
  }
  return int;
}

function parse360(str) {
  var int = parseFloat(str);
  return (((int % 360) + 360) % 360) / 360;
}

function parse1(str) {
  var num = parseFloat(str);
  if (num < 0) {
    return 0;
  }
  if (num > 1) {
    return 255;
  }
  return Math.round(num * 255);
}

function parsePercentage(str) {
  // parseFloat conveniently ignores the final %
  var int = parseFloat(str, 10);
  if (int < 0) {
    return 0;
  }
  if (int > 100) {
    return 1;
  }
  return int / 100;
}

var names = {
  transparent: 0x00000000,

  // http://www.w3.org/TR/css3-color/#svg-color
  aliceblue: 0xf0f8ffff,
  antiquewhite: 0xfaebd7ff,
  aqua: 0x00ffffff,
  aquamarine: 0x7fffd4ff,
  azure: 0xf0ffffff,
  beige: 0xf5f5dcff,
  bisque: 0xffe4c4ff,
  black: 0x000000ff,
  blanchedalmond: 0xffebcdff,
  blue: 0x0000ffff,
  blueviolet: 0x8a2be2ff,
  brown: 0xa52a2aff,
  burlywood: 0xdeb887ff,
  burntsienna: 0xea7e5dff,
  cadetblue: 0x5f9ea0ff,
  chartreuse: 0x7fff00ff,
  chocolate: 0xd2691eff,
  coral: 0xff7f50ff,
  cornflowerblue: 0x6495edff,
  cornsilk: 0xfff8dcff,
  crimson: 0xdc143cff,
  cyan: 0x00ffffff,
  darkblue: 0x00008bff,
  darkcyan: 0x008b8bff,
  darkgoldenrod: 0xb8860bff,
  darkgray: 0xa9a9a9ff,
  darkgreen: 0x006400ff,
  darkgrey: 0xa9a9a9ff,
  darkkhaki: 0xbdb76bff,
  darkmagenta: 0x8b008bff,
  darkolivegreen: 0x556b2fff,
  darkorange: 0xff8c00ff,
  darkorchid: 0x9932ccff,
  darkred: 0x8b0000ff,
  darksalmon: 0xe9967aff,
  darkseagreen: 0x8fbc8fff,
  darkslateblue: 0x483d8bff,
  darkslategray: 0x2f4f4fff,
  darkslategrey: 0x2f4f4fff,
  darkturquoise: 0x00ced1ff,
  darkviolet: 0x9400d3ff,
  deeppink: 0xff1493ff,
  deepskyblue: 0x00bfffff,
  dimgray: 0x696969ff,
  dimgrey: 0x696969ff,
  dodgerblue: 0x1e90ffff,
  firebrick: 0xb22222ff,
  floralwhite: 0xfffaf0ff,
  forestgreen: 0x228b22ff,
  fuchsia: 0xff00ffff,
  gainsboro: 0xdcdcdcff,
  ghostwhite: 0xf8f8ffff,
  gold: 0xffd700ff,
  goldenrod: 0xdaa520ff,
  gray: 0x808080ff,
  green: 0x008000ff,
  greenyellow: 0xadff2fff,
  grey: 0x808080ff,
  honeydew: 0xf0fff0ff,
  hotpink: 0xff69b4ff,
  indianred: 0xcd5c5cff,
  indigo: 0x4b0082ff,
  ivory: 0xfffff0ff,
  khaki: 0xf0e68cff,
  lavender: 0xe6e6faff,
  lavenderblush: 0xfff0f5ff,
  lawngreen: 0x7cfc00ff,
  lemonchiffon: 0xfffacdff,
  lightblue: 0xadd8e6ff,
  lightcoral: 0xf08080ff,
  lightcyan: 0xe0ffffff,
  lightgoldenrodyellow: 0xfafad2ff,
  lightgray: 0xd3d3d3ff,
  lightgreen: 0x90ee90ff,
  lightgrey: 0xd3d3d3ff,
  lightpink: 0xffb6c1ff,
  lightsalmon: 0xffa07aff,
  lightseagreen: 0x20b2aaff,
  lightskyblue: 0x87cefaff,
  lightslategray: 0x778899ff,
  lightslategrey: 0x778899ff,
  lightsteelblue: 0xb0c4deff,
  lightyellow: 0xffffe0ff,
  lime: 0x00ff00ff,
  limegreen: 0x32cd32ff,
  linen: 0xfaf0e6ff,
  magenta: 0xff00ffff,
  maroon: 0x800000ff,
  mediumaquamarine: 0x66cdaaff,
  mediumblue: 0x0000cdff,
  mediumorchid: 0xba55d3ff,
  mediumpurple: 0x9370dbff,
  mediumseagreen: 0x3cb371ff,
  mediumslateblue: 0x7b68eeff,
  mediumspringgreen: 0x00fa9aff,
  mediumturquoise: 0x48d1ccff,
  mediumvioletred: 0xc71585ff,
  midnightblue: 0x191970ff,
  mintcream: 0xf5fffaff,
  mistyrose: 0xffe4e1ff,
  moccasin: 0xffe4b5ff,
  navajowhite: 0xffdeadff,
  navy: 0x000080ff,
  oldlace: 0xfdf5e6ff,
  olive: 0x808000ff,
  olivedrab: 0x6b8e23ff,
  orange: 0xffa500ff,
  orangered: 0xff4500ff,
  orchid: 0xda70d6ff,
  palegoldenrod: 0xeee8aaff,
  palegreen: 0x98fb98ff,
  paleturquoise: 0xafeeeeff,
  palevioletred: 0xdb7093ff,
  papayawhip: 0xffefd5ff,
  peachpuff: 0xffdab9ff,
  peru: 0xcd853fff,
  pink: 0xffc0cbff,
  plum: 0xdda0ddff,
  powderblue: 0xb0e0e6ff,
  purple: 0x800080ff,
  rebeccapurple: 0x663399ff,
  red: 0xff0000ff,
  rosybrown: 0xbc8f8fff,
  royalblue: 0x4169e1ff,
  saddlebrown: 0x8b4513ff,
  salmon: 0xfa8072ff,
  sandybrown: 0xf4a460ff,
  seagreen: 0x2e8b57ff,
  seashell: 0xfff5eeff,
  sienna: 0xa0522dff,
  silver: 0xc0c0c0ff,
  skyblue: 0x87ceebff,
  slateblue: 0x6a5acdff,
  slategray: 0x708090ff,
  slategrey: 0x708090ff,
  snow: 0xfffafaff,
  springgreen: 0x00ff7fff,
  steelblue: 0x4682b4ff,
  tan: 0xd2b48cff,
  teal: 0x008080ff,
  thistle: 0xd8bfd8ff,
  tomato: 0xff6347ff,
  turquoise: 0x40e0d0ff,
  violet: 0xee82eeff,
  wheat: 0xf5deb3ff,
  white: 0xffffffff,
  whitesmoke: 0xf5f5f5ff,
  yellow: 0xffff00ff,
  yellowgreen: 0x9acd32ff,
};

function rgba(colorInt) {
  var r = Math.round(((colorInt & 0xff000000) >>> 24));
  var g = Math.round(((colorInt & 0x00ff0000) >>> 16));
  var b = Math.round(((colorInt & 0x0000ff00) >>> 8));
  var a = ((colorInt & 0x000000ff) >>> 0) / 255;
  return {
    r: r,
    g: g,
    b: b,
    a: a,
  };
};

normalizeColor.rgba = rgba;

module.exports = normalizeColor;


/***/ }),

/***/ "./node_modules/react-springy-parallax/dist/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(7));

var _reactDom = _interopRequireDefault(__webpack_require__("./node_modules/animated/lib/targets/react-dom.js"));

var _class, _temp, _initialiseProps, _class2, _temp2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var _default = (_temp = _class =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(_default, _React$Component);

  function _default(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _initialiseProps.call(_this);

    _this.state = {
      ready: false
    };
    _this.layers = [];
    _this.height = 0;
    _this.scrollTop = 0;
    _this.offset = 0;
    _this.busy = false;
    return _this;
  }

  var _proto = _default.prototype;

  _proto.scrollTo = function scrollTo(offset) {
    this.scrollStop();
    this.offset = offset;
    var target = this.refs.container;
    this.animatedScroll = new _reactDom.default.Value(target.scrollTop);
    this.animatedScroll.addListener(function (_ref) {
      var value = _ref.value;
      return target.scrollTop = value;
    });
    this.props.effect(this.animatedScroll, offset * this.height).start();
  };

  _proto.getChildContext = function getChildContext() {
    return {
      parallax: this
    };
  };

  _proto.componentDidMount = function componentDidMount() {
    window.addEventListener('resize', this.updateRaf, false);
    this.update();
    this.setState({
      ready: true
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('resize', this.updateRaf, false);
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    this.update();
  };

  _proto.render = function render() {
    var _props = this.props,
        style = _props.style,
        innerStyle = _props.innerStyle,
        pages = _props.pages,
        className = _props.className,
        scrolling = _props.scrolling,
        children = _props.children;
    return _react.default.createElement("div", {
      ref: "container",
      onScroll: this.onScroll,
      onWheel: scrolling && this.scrollStop,
      onTouchStart: scrolling && this.scrollStop,
      style: _extends({
        position: 'absolute',
        width: '100%',
        height: '100%',
        overflow: scrolling ? 'scroll' : 'hidden',
        overflowX: 'hidden',
        WebkitOverflowScrolling: 'touch',
        WebkitTransform: 'translate(0, 0)',
        MsTransform: 'translate(0, 0)',
        transform: 'translate3d(0, 0, 0)'
      }, style),
      className: className
    }, this.state.ready && _react.default.createElement("div", {
      ref: "content",
      style: _extends({
        position: 'absolute',
        width: '100%',
        WebkitTransform: 'translate(0,0)',
        MsTransform: 'translate(0,0)',
        transform: 'translate3d(0, 0, 0)',
        overflow: 'hidden',
        height: this.height * pages
      }, innerStyle)
    }, children));
  };

  return _default;
}(_react.default.Component), Object.defineProperty(_class, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    pages: _propTypes.default.number.isRequired,
    effect: _propTypes.default.func,
    scrolling: _propTypes.default.bool
  }
}), Object.defineProperty(_class, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    effect: function effect(animation, toValue) {
      return _reactDom.default.spring(animation, {
        toValue: toValue
      });
    },
    scrolling: true
  }
}), Object.defineProperty(_class, "childContextTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    parallax: _propTypes.default.object
  }
}), Object.defineProperty(_class, "Layer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: (_temp2 = _class2 =
  /*#__PURE__*/
  function (_React$Component2) {
    _inheritsLoose(value, _React$Component2);

    function value(props, context) {
      var _this2;

      _this2 = _React$Component2.call(this, props, context) || this;
      var parallax = context.parallax;
      var targetScroll = Math.floor(props.offset) * parallax.height;
      var offset = parallax.height * props.offset + targetScroll * props.speed;
      var toValue = parseFloat(-(parallax.scrollTop * props.speed) + offset);
      _this2.animatedTranslate = new _reactDom.default.Value(toValue);
      var height = parallax.height * props.factor;
      _this2.animatedHeight = new _reactDom.default.Value(height);
      return _this2;
    }

    var _proto2 = value.prototype;

    _proto2.componentDidMount = function componentDidMount() {
      var parent = this.context.parallax;

      if (parent) {
        parent.layers = parent.layers.concat(this);
        parent.update();
      }
    };

    _proto2.componentWillUnmount = function componentWillUnmount() {
      var _this3 = this;

      var parent = this.context.parallax;

      if (parent) {
        parent.layers = parent.layers.filter(function (layer) {
          return layer !== _this3;
        });
        parent.update();
      }
    };

    _proto2.setPosition = function setPosition(height, scrollTop, immediate) {
      if (immediate === void 0) {
        immediate = false;
      }

      var targetScroll = Math.floor(this.props.offset) * height;
      var offset = height * this.props.offset + targetScroll * this.props.speed;
      var toValue = parseFloat(-(scrollTop * this.props.speed) + offset);
      if (!immediate) this.context.parallax.props.effect(this.animatedTranslate, toValue).start();else this.animatedTranslate.setValue(toValue);
    };

    _proto2.setHeight = function setHeight(height, immediate) {
      if (immediate === void 0) {
        immediate = false;
      }

      var toValue = parseFloat(height * this.props.factor);
      if (!immediate) this.context.parallax.props.effect(this.animatedHeight, toValue).start();else this.animatedHeight.setValue(toValue);
    };

    _proto2.render = function render() {
      var _props2 = this.props,
          style = _props2.style,
          children = _props2.children,
          offset = _props2.offset,
          speed = _props2.speed,
          factor = _props2.factor,
          className = _props2.className,
          props = _objectWithoutProperties(_props2, ["style", "children", "offset", "speed", "factor", "className"]);

      var translate3d = this.animatedTranslate.interpolate({
        inputRange: [0, 1],
        outputRange: ['0,0px,0', '0,1px,0']
      });
      return _react.default.createElement(_reactDom.default.div, _extends({}, props, {
        ref: "layer",
        className: className,
        style: _extends({
          position: 'absolute',
          backgroundSize: 'auto',
          backgroundRepeat: 'no-repeat',
          willChange: 'transform',
          width: '100%',
          height: this.animatedHeight,
          WebkitTransform: [{
            translate3d: translate3d
          }],
          MsTransform: [{
            translate3d: translate3d
          }],
          transform: [{
            translate3d: translate3d
          }]
        }, style)
      }), children);
    };

    return value;
  }(_react.default.Component), Object.defineProperty(_class2, "contextTypes", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: {
      parallax: _propTypes.default.object
    }
  }), Object.defineProperty(_class2, "propTypes", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: {
      factor: _propTypes.default.number,
      offset: _propTypes.default.number,
      speed: _propTypes.default.number
    }
  }), Object.defineProperty(_class2, "defaultProps", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: {
      factor: 1,
      offset: 0,
      speed: 0
    }
  }), _temp2)
}), _initialiseProps = function _initialiseProps() {
  var _this4 = this;

  Object.defineProperty(this, "moveItems", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      _this4.layers.forEach(function (layer) {
        return layer.setPosition(_this4.height, _this4.scrollTop);
      });

      _this4.busy = false;
    }
  });
  Object.defineProperty(this, "scrollerRaf", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      return requestAnimationFrame(_this4.moveItems);
    }
  });
  Object.defineProperty(this, "onScroll", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(event) {
      if (!_this4.busy) {
        _this4.busy = true;

        _this4.scrollerRaf();

        _this4.scrollTop = event.target.scrollTop;
      }
    }
  });
  Object.defineProperty(this, "update", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      if (!_this4.refs.container) return;
      _this4.height = _this4.refs.container.clientHeight;
      if (_this4.props.scrolling) _this4.scrollTop = _this4.refs.container.scrollTop;else _this4.refs.container.scrollTop = _this4.scrollTop = _this4.offset * _this4.height;
      if (_this4.refs.content) _this4.refs.content.style.height = _this4.height * _this4.props.pages + "px";

      _this4.layers.forEach(function (layer) {
        layer.setHeight(_this4.height, true);
        layer.setPosition(_this4.height, _this4.scrollTop, true);
      });
    }
  });
  Object.defineProperty(this, "updateRaf", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      requestAnimationFrame(_this4.update); // Some browsers don't fire on maximize

      setTimeout(_this4.update, 150);
    }
  });
  Object.defineProperty(this, "scrollStop", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(event) {
      return _this4.animatedScroll && _this4.animatedScroll.stopAnimation();
    }
  });
}, _temp);

exports.default = _default;


/***/ }),

/***/ "./src/Images/cloud.svg":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjQxN3B4IiBoZWlnaHQ9IjI1NnB4IiB2aWV3Qm94PSIwIDAgNDE3IDI1NiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDxwYXRoIGQ9Ik00MTYuNSwxOTEuNSBDNDE2LjUsMjI2Ljg0NCAzODcuODQ0LDI1NS41IDM1Mi41LDI1NS41IEwzNTIuNSwyNTYgTDgwLjUsMjU2IEMzNi4zMTIsMjU2IDAuNSwyMjAuMTg3IDAuNSwxNzYgQzAuNSwxMzcuMjUgMjguMDYzLDEwNC45MzcgNjQuNjU2LDk3LjU5NCBDNjQuNjU2LDk3LjA2MyA2NC41LDk2LjU2MyA2NC41LDk2IEM2NC41LDQyLjk2OSAxMDcuNDY5LDAgMTYwLjUsMCBDMTk3LjkzOCwwIDIzMCwyMS42MjUgMjQ1Ljg0NCw1Mi44NzUgQzI1NC4yMTksNDkuOTM3IDI2My4wOTQsNDggMjcyLjUsNDggQzMxNi4zNDQsNDggMzUxLjg0NCw4My4yNSAzNTIuNDA2LDEyNyBMMzUyLjUsMTI3IEwzNTIuNSwxMjcuNSBDMzg3Ljg0NCwxMjcuNSA0MTYuNSwxNTYuMTU2IDQxNi41LDE5MS41IFoiIGlkPSJTaGFwZSIgc3Ryb2tlPSJub25lIiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KPC9zdmc+Cg=="

/***/ }),

/***/ "./src/Images/stars.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5546c7c6ef89997c5735d5b2aa91b21b.svg";

/***/ }),

/***/ "./src/Views/Portfolio/Home.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_springy_parallax__ = __webpack_require__("./node_modules/react-springy-parallax/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_springy_parallax___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_springy_parallax__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




const stars = __webpack_require__("./src/Images/stars.svg");
const cloud = __webpack_require__("./src/Images/cloud.svg");
let Home = class Home extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    componentDidMount() {
        console.log(this.props.items);
    }
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { to: "/dashboard" }, "Dashboard"),
            this.props.items.map(item => item.data.value)));
    }
};
Home = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["inject"])((stores) => stores.portfolioStore),
    __WEBPACK_IMPORTED_MODULE_2_mobx_react__["observer"]
], Home);
/* harmony default export */ __webpack_exports__["a"] = (Home);
class ParallaxView extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_springy_parallax___default.a, { ref: "parallax", pages: 3, style: { backgroundColor: "#101010" } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_springy_parallax___default.a.Layer, { offset: 0, speed: 1, style: { backgroundColor: '#243B4A' } }),
            ">",
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_springy_parallax___default.a.Layer, { offset: 1, speed: 1, style: { backgroundColor: '#805E73' } }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_springy_parallax___default.a.Layer, { offset: 2, speed: 1, style: { backgroundColor: '#87BCDE' } }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_springy_parallax___default.a.Layer, { offset: 0, speed: 0, factor: 3, style: { backgroundImage: `url(${stars})`, backgroundSize: "cover" } }),
            ">",
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_springy_parallax___default.a.Layer, { offset: 0.75, speed: 0.5, style: { opacity: 0.1 } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: `${cloud}`, style: { display: 'block', width: '20%', marginLeft: '70%' } }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: `${cloud}`, style: { display: 'block', width: '20%', marginLeft: '40%' } }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: `${cloud}`, style: { display: 'block', width: '20%', marginLeft: '10%' } })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_springy_parallax___default.a.Layer, { offset: 0, speed: 0.5, style: {}, onClick: () => this.refs.parallax.scrollTo(1) }, "One"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_springy_parallax___default.a.Layer, { offset: 1, speed: 0.5, style: {}, onClick: () => this.refs.parallax.scrollTo(2) }, "Two"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_springy_parallax___default.a.Layer, { offset: 2, speed: 0.5, style: {}, onClick: () => this.refs.parallax.scrollTo(0) }, "Three")));
    }
}


 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\Projects\\Infinitivity\\app\\src\\Views\\Portfolio\\Home.tsx"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\Projects\\Infinitivity\\app\\src\\Views\\Portfolio\\Home.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/process/browser.js"), __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/Views/Portfolio/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Home__ = __webpack_require__("./src/Views/Portfolio/Home.tsx");



/* harmony default export */ __webpack_exports__["default"] = (() => (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { exact: true, path: '/', component: __WEBPACK_IMPORTED_MODULE_2__Home__["a" /* default */] }))));


 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\Projects\\Infinitivity\\app\\src\\Views\\Portfolio\\index.tsx"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\Projects\\Infinitivity\\app\\src\\Views\\Portfolio\\index.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/process/browser.js"), __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(3);

/***/ })

});
//# sourceMappingURL=0.js.map