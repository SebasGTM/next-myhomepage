(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2350:function(){},3454:function(module,__unused_webpack_exports,__webpack_require__){"use strict";var ref,ref1;module.exports=(null==(ref=__webpack_require__.g.process)?void 0:ref.env)&&"object"==typeof(null==(ref1=__webpack_require__.g.process)?void 0:ref1.env)?__webpack_require__.g.process:__webpack_require__(7663)},1118:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return __webpack_require__(7255)}])},227:function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getDomainLocale=function(path,locale,locales,domainLocales){return!1},("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},1551:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _interop_require_default=__webpack_require__(2648).Z,_object_without_properties_loose=__webpack_require__(7273).Z,_react=_interop_require_default(__webpack_require__(7294)),_router=__webpack_require__(1003),_formatUrl=__webpack_require__(7795),_addLocale=__webpack_require__(4465),_routerContext=__webpack_require__(2692),_appRouterContext=__webpack_require__(8245),_useIntersection=__webpack_require__(9246),_getDomainLocale=__webpack_require__(227),_addBasePath=__webpack_require__(3468);let prefetched=new Set;function prefetch(router,href,as,options){if(_router.isLocalURL(href)){if(!options.bypassPrefetchedCheck){let locale=void 0!==options.locale?options.locale:"locale"in router?router.locale:void 0,prefetchedKey=href+"%"+as+"%"+locale;if(prefetched.has(prefetchedKey))return;prefetched.add(prefetchedKey)}Promise.resolve(router.prefetch(href,as,options)).catch(err=>{})}}function formatStringOrUrl(urlObjOrString){return"string"==typeof urlObjOrString?urlObjOrString:_formatUrl.formatUrl(urlObjOrString)}let Link=_react.default.forwardRef(function(props,forwardedRef){let children,child;let{href:hrefProp,as:asProp,children:childrenProp,prefetch:prefetchProp,passHref,replace,shallow,scroll,locale,onClick,onMouseEnter:onMouseEnterProp,onTouchStart:onTouchStartProp,legacyBehavior=!0!==Boolean(!0)}=props,restProps=_object_without_properties_loose(props,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);children=childrenProp,legacyBehavior&&("string"==typeof children||"number"==typeof children)&&(children=_react.default.createElement("a",null,children));let prefetchEnabled=!1!==prefetchProp,pagesRouter=_react.default.useContext(_routerContext.RouterContext),appRouter=_react.default.useContext(_appRouterContext.AppRouterContext),router=null!=pagesRouter?pagesRouter:appRouter,isAppRouter=!pagesRouter,{href,as}=_react.default.useMemo(()=>{if(!pagesRouter){let resolvedHref=formatStringOrUrl(hrefProp);return{href:resolvedHref,as:asProp?formatStringOrUrl(asProp):resolvedHref}}let[resolvedHref1,resolvedAs]=_router.resolveHref(pagesRouter,hrefProp,!0);return{href:resolvedHref1,as:asProp?_router.resolveHref(pagesRouter,asProp):resolvedAs||resolvedHref1}},[pagesRouter,hrefProp,asProp]),previousHref=_react.default.useRef(href),previousAs=_react.default.useRef(as);legacyBehavior&&(child=_react.default.Children.only(children));let childRef=legacyBehavior?child&&"object"==typeof child&&child.ref:forwardedRef,[setIntersectionRef,isVisible,resetVisible]=_useIntersection.useIntersection({rootMargin:"200px"}),setRef=_react.default.useCallback(el=>{(previousAs.current!==as||previousHref.current!==href)&&(resetVisible(),previousAs.current=as,previousHref.current=href),setIntersectionRef(el),childRef&&("function"==typeof childRef?childRef(el):"object"==typeof childRef&&(childRef.current=el))},[as,childRef,href,resetVisible,setIntersectionRef]);_react.default.useEffect(()=>{router&&isVisible&&prefetchEnabled&&prefetch(router,href,as,{locale})},[as,href,isVisible,locale,prefetchEnabled,null==pagesRouter?void 0:pagesRouter.locale,router]);let childProps={ref:setRef,onClick(e){legacyBehavior||"function"!=typeof onClick||onClick(e),legacyBehavior&&child.props&&"function"==typeof child.props.onClick&&child.props.onClick(e),router&&!e.defaultPrevented&&function(e,router,href,as,replace,shallow,scroll,locale,isAppRouter,prefetchEnabled){let{nodeName}=e.currentTarget,isAnchorNodeName="A"===nodeName.toUpperCase();if(isAnchorNodeName&&(function(event){let{target}=event.currentTarget;return target&&"_self"!==target||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey||event.nativeEvent&&2===event.nativeEvent.which}(e)||!_router.isLocalURL(href)))return;e.preventDefault();let navigate=()=>{"beforePopState"in router?router[replace?"replace":"push"](href,as,{shallow,locale,scroll}):router[replace?"replace":"push"](as||href,{forceOptimisticNavigation:!prefetchEnabled})};isAppRouter?_react.default.startTransition(navigate):navigate()}(e,router,href,as,replace,shallow,scroll,locale,isAppRouter,prefetchEnabled)},onMouseEnter(e){legacyBehavior||"function"!=typeof onMouseEnterProp||onMouseEnterProp(e),legacyBehavior&&child.props&&"function"==typeof child.props.onMouseEnter&&child.props.onMouseEnter(e),router&&(prefetchEnabled||!isAppRouter)&&prefetch(router,href,as,{locale,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){legacyBehavior||"function"!=typeof onTouchStartProp||onTouchStartProp(e),legacyBehavior&&child.props&&"function"==typeof child.props.onTouchStart&&child.props.onTouchStart(e),router&&(prefetchEnabled||!isAppRouter)&&prefetch(router,href,as,{locale,priority:!0,bypassPrefetchedCheck:!0})}};if(!legacyBehavior||passHref||"a"===child.type&&!("href"in child.props)){let curLocale=void 0!==locale?locale:null==pagesRouter?void 0:pagesRouter.locale,localeDomain=(null==pagesRouter?void 0:pagesRouter.isLocaleDomain)&&_getDomainLocale.getDomainLocale(as,curLocale,null==pagesRouter?void 0:pagesRouter.locales,null==pagesRouter?void 0:pagesRouter.domainLocales);childProps.href=localeDomain||_addBasePath.addBasePath(_addLocale.addLocale(as,curLocale,null==pagesRouter?void 0:pagesRouter.defaultLocale))}return legacyBehavior?_react.default.cloneElement(child,childProps):_react.default.createElement("a",Object.assign({},restProps,childProps),children)});exports.default=Link,("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},9246:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.useIntersection=function(param){let{rootRef,rootMargin,disabled}=param,isDisabled=disabled||!hasIntersectionObserver,[visible,setVisible]=_react.useState(!1),[element,setElement]=_react.useState(null);_react.useEffect(()=>{if(hasIntersectionObserver){if(!isDisabled&&!visible&&element&&element.tagName){let unobserve=function(element,callback,options){let{id,observer,elements}=function(options){let instance;let id={root:options.root||null,margin:options.rootMargin||""},existing=idList.find(obj=>obj.root===id.root&&obj.margin===id.margin);if(existing&&(instance=observers.get(existing)))return instance;let elements=new Map,observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{let callback=elements.get(entry.target),isVisible=entry.isIntersecting||entry.intersectionRatio>0;callback&&isVisible&&callback(isVisible)})},options);return instance={id,observer,elements},idList.push(id),observers.set(id,instance),instance}(options);return elements.set(element,callback),observer.observe(element),function(){if(elements.delete(element),observer.unobserve(element),0===elements.size){observer.disconnect(),observers.delete(id);let index=idList.findIndex(obj=>obj.root===id.root&&obj.margin===id.margin);index>-1&&idList.splice(index,1)}}}(element,isVisible=>isVisible&&setVisible(isVisible),{root:null==rootRef?void 0:rootRef.current,rootMargin});return unobserve}}else if(!visible){let idleCallback=_requestIdleCallback.requestIdleCallback(()=>setVisible(!0));return()=>_requestIdleCallback.cancelIdleCallback(idleCallback)}},[element,isDisabled,rootMargin,rootRef,visible]);let resetVisible=_react.useCallback(()=>{setVisible(!1)},[]);return[setElement,visible,resetVisible]};var _react=__webpack_require__(7294),_requestIdleCallback=__webpack_require__(4686);let hasIntersectionObserver="function"==typeof IntersectionObserver,observers=new Map,idList=[];("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},2470:function(__unused_webpack_module,exports,__webpack_require__){var process=__webpack_require__(3454);__webpack_require__(2350);var React=__webpack_require__(7294),React__default=React&&"object"==typeof React&&"default"in React?React:{default:React};function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var isProd=void 0!==process&&process.env&&!0,isString=function(o){return"[object String]"===Object.prototype.toString.call(o)},StyleSheet=function(){function StyleSheet(param){var ref=void 0===param?{}:param,_name=ref.name,name=void 0===_name?"stylesheet":_name,_optimizeForSpeed=ref.optimizeForSpeed,optimizeForSpeed=void 0===_optimizeForSpeed?isProd:_optimizeForSpeed;invariant$1(isString(name),"`name` must be a string"),this._name=name,this._deletedRulePlaceholder="#"+name+"-deleted-rule____{}",invariant$1("boolean"==typeof optimizeForSpeed,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=optimizeForSpeed,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var node=document.querySelector('meta[property="csp-nonce"]');this._nonce=node?node.getAttribute("content"):null}var staticProps,_proto=StyleSheet.prototype;return _proto.setOptimizeForSpeed=function(bool){invariant$1("boolean"==typeof bool,"`setOptimizeForSpeed` accepts a boolean"),invariant$1(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=bool,this.inject()},_proto.isOptimizeForSpeed=function(){return this._optimizeForSpeed},_proto.inject=function(){var _this=this;if(invariant$1(!this._injected,"sheet already injected"),this._injected=!0,this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(isProd||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(rule,index){return"number"==typeof index?_this._serverSheet.cssRules[index]={cssText:rule}:_this._serverSheet.cssRules.push({cssText:rule}),index},deleteRule:function(index){_this._serverSheet.cssRules[index]=null}}},_proto.getSheetForTag=function(tag){if(tag.sheet)return tag.sheet;for(var i=0;i<document.styleSheets.length;i++)if(document.styleSheets[i].ownerNode===tag)return document.styleSheets[i]},_proto.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},_proto.insertRule=function(rule,index){if(invariant$1(isString(rule),"`insertRule` accepts only strings"),this._optimizeForSpeed){var sheet=this.getSheet();"number"!=typeof index&&(index=sheet.cssRules.length);try{sheet.insertRule(rule,index)}catch(error){return isProd||console.warn("StyleSheet: illegal rule: \n\n"+rule+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var insertionPoint=this._tags[index];this._tags.push(this.makeStyleTag(this._name,rule,insertionPoint))}return this._rulesCount++},_proto.replaceRule=function(index,rule){if(this._optimizeForSpeed){var sheet=this.getSheet();if(rule.trim()||(rule=this._deletedRulePlaceholder),!sheet.cssRules[index])return index;sheet.deleteRule(index);try{sheet.insertRule(rule,index)}catch(error){isProd||console.warn("StyleSheet: illegal rule: \n\n"+rule+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),sheet.insertRule(this._deletedRulePlaceholder,index)}}else{var tag=this._tags[index];invariant$1(tag,"old rule at index `"+index+"` not found"),tag.textContent=rule}return index},_proto.deleteRule=function(index){if(this._optimizeForSpeed)this.replaceRule(index,"");else{var tag=this._tags[index];invariant$1(tag,"rule at index `"+index+"` not found"),tag.parentNode.removeChild(tag),this._tags[index]=null}},_proto.flush=function(){this._injected=!1,this._rulesCount=0,this._tags.forEach(function(tag){return tag&&tag.parentNode.removeChild(tag)}),this._tags=[]},_proto.cssRules=function(){var _this=this;return this._tags.reduce(function(rules,tag){return tag?rules=rules.concat(Array.prototype.map.call(_this.getSheetForTag(tag).cssRules,function(rule){return rule.cssText===_this._deletedRulePlaceholder?null:rule})):rules.push(null),rules},[])},_proto.makeStyleTag=function(name,cssString,relativeToTag){cssString&&invariant$1(isString(cssString),"makeStyleTag accepts only strings as second parameter");var tag=document.createElement("style");this._nonce&&tag.setAttribute("nonce",this._nonce),tag.type="text/css",tag.setAttribute("data-"+name,""),cssString&&tag.appendChild(document.createTextNode(cssString));var head=document.head||document.getElementsByTagName("head")[0];return relativeToTag?head.insertBefore(tag,relativeToTag):head.appendChild(tag),tag},_defineProperties(StyleSheet.prototype,[{key:"length",get:function(){return this._rulesCount}}]),staticProps&&_defineProperties(StyleSheet,staticProps),StyleSheet}();function invariant$1(condition,message){if(!condition)throw Error("StyleSheet: "+message+".")}var stringHash=function(str){for(var _$hash=5381,i=str.length;i;)_$hash=33*_$hash^str.charCodeAt(--i);return _$hash>>>0},cache={};function computeId(baseId,props){if(!props)return"jsx-"+baseId;var propsToString=String(props),key=baseId+propsToString;return cache[key]||(cache[key]="jsx-"+stringHash(baseId+"-"+propsToString)),cache[key]}function computeSelector(id,css){var idcss=id+css;return cache[idcss]||(cache[idcss]=css.replace(/__jsx-style-dynamic-selector/g,id)),cache[idcss]}var StyleSheetRegistry=function(){function StyleSheetRegistry(param){var ref=void 0===param?{}:param,_styleSheet=ref.styleSheet,styleSheet=void 0===_styleSheet?null:_styleSheet,_optimizeForSpeed=ref.optimizeForSpeed,optimizeForSpeed=void 0!==_optimizeForSpeed&&_optimizeForSpeed;this._sheet=styleSheet||new StyleSheet({name:"styled-jsx",optimizeForSpeed:optimizeForSpeed}),this._sheet.inject(),styleSheet&&"boolean"==typeof optimizeForSpeed&&(this._sheet.setOptimizeForSpeed(optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var _proto=StyleSheetRegistry.prototype;return _proto.add=function(props){var _this=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(props.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(acc,tagName){return acc[tagName]=0,acc},{}));var ref=this.getIdAndRules(props),styleId=ref.styleId,rules=ref.rules;if(styleId in this._instancesCounts){this._instancesCounts[styleId]+=1;return}var indices=rules.map(function(rule){return _this._sheet.insertRule(rule)}).filter(function(index){return -1!==index});this._indices[styleId]=indices,this._instancesCounts[styleId]=1},_proto.remove=function(props){var _this=this,styleId=this.getIdAndRules(props).styleId;if(function(condition,message){if(!condition)throw Error("StyleSheetRegistry: "+message+".")}(styleId in this._instancesCounts,"styleId: `"+styleId+"` not found"),this._instancesCounts[styleId]-=1,this._instancesCounts[styleId]<1){var tagFromServer=this._fromServer&&this._fromServer[styleId];tagFromServer?(tagFromServer.parentNode.removeChild(tagFromServer),delete this._fromServer[styleId]):(this._indices[styleId].forEach(function(index){return _this._sheet.deleteRule(index)}),delete this._indices[styleId]),delete this._instancesCounts[styleId]}},_proto.update=function(props,nextProps){this.add(nextProps),this.remove(props)},_proto.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},_proto.cssRules=function(){var _this=this,fromServer=this._fromServer?Object.keys(this._fromServer).map(function(styleId){return[styleId,_this._fromServer[styleId]]}):[],cssRules=this._sheet.cssRules();return fromServer.concat(Object.keys(this._indices).map(function(styleId){return[styleId,_this._indices[styleId].map(function(index){return cssRules[index].cssText}).join(_this._optimizeForSpeed?"":"\n")]}).filter(function(rule){return Boolean(rule[1])}))},_proto.styles=function(options){var cssRules,options1;return cssRules=this.cssRules(),void 0===(options1=options)&&(options1={}),cssRules.map(function(args){var id=args[0],css=args[1];return React__default.default.createElement("style",{id:"__"+id,key:"__"+id,nonce:options1.nonce?options1.nonce:void 0,dangerouslySetInnerHTML:{__html:css}})})},_proto.getIdAndRules=function(props){var css=props.children,dynamic=props.dynamic,id=props.id;if(dynamic){var styleId=computeId(id,dynamic);return{styleId:styleId,rules:Array.isArray(css)?css.map(function(rule){return computeSelector(styleId,rule)}):[computeSelector(styleId,css)]}}return{styleId:computeId(id),rules:Array.isArray(css)?css:[css]}},_proto.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(acc,element){return acc[element.id.slice(2)]=element,acc},{})},StyleSheetRegistry}(),StyleSheetContext=React.createContext(null);StyleSheetContext.displayName="StyleSheetContext";var useInsertionEffect=React__default.default.useInsertionEffect||React__default.default.useLayoutEffect,defaultRegistry=new StyleSheetRegistry;function JSXStyle(props){var registry=defaultRegistry||React.useContext(StyleSheetContext);return registry&&useInsertionEffect(function(){return registry.add(props),function(){registry.remove(props)}},[props.id,String(props.dynamic)]),null}JSXStyle.dynamic=function(info){return info.map(function(tagInfo){return computeId(tagInfo[0],tagInfo[1])}).join(" ")},exports.style=JSXStyle},1857:function(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__(2470).style},7255:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return _app}});var jsx_runtime=__webpack_require__(5893),head=__webpack_require__(9008),head_default=__webpack_require__.n(head),style=__webpack_require__(1857),style_default=__webpack_require__.n(style),next_link=__webpack_require__(1664),link_default=__webpack_require__.n(next_link),components_NavBar=function(){return(0,jsx_runtime.jsxs)("nav",{className:"jsx-3efd145255aee036",children:[(0,jsx_runtime.jsxs)("ul",{className:"jsx-3efd145255aee036",children:[(0,jsx_runtime.jsx)("li",{className:"jsx-3efd145255aee036",children:(0,jsx_runtime.jsx)(link_default(),{href:"/",children:"Start"})}),(0,jsx_runtime.jsx)("li",{className:"jsx-3efd145255aee036",children:(0,jsx_runtime.jsx)(link_default(),{href:"/blog",children:"Blog"})}),(0,jsx_runtime.jsx)("li",{className:"jsx-3efd145255aee036",children:(0,jsx_runtime.jsx)(link_default(),{href:"/contact",children:"Contact"})})]}),(0,jsx_runtime.jsx)(style_default(),{id:"3efd145255aee036",children:""})]})};__webpack_require__(8098);var _app=function(param){let{Component,pageProps}=param;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(head_default(),{children:(0,jsx_runtime.jsx)("link",{rel:"icon",href:"/icons/favicon.ico"})}),(0,jsx_runtime.jsx)("header",{class:"pageHeader",children:(0,jsx_runtime.jsx)(components_NavBar,{})}),(0,jsx_runtime.jsx)("div",{class:"wrapper",children:(0,jsx_runtime.jsx)("div",{id:"main",children:(0,jsx_runtime.jsx)(Component,{...pageProps})})})]})}},8098:function(){},7663:function(module){!function(){var e={229:function(e){var r,n,u,t=e.exports={};function defaultSetTimout(){throw Error("setTimeout has not been defined")}function defaultClearTimeout(){throw Error("clearTimeout has not been defined")}function runTimeout(e){if(r===setTimeout)return setTimeout(e,0);if((r===defaultSetTimout||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t1){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(e){r=defaultSetTimout}try{n="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(e1){n=defaultClearTimeout}}();var i=[],o=!1,a=-1;function cleanUpNextTick(){o&&u&&(o=!1,u.length?i=u.concat(i):a=-1,i.length&&drainQueue())}function drainQueue(){if(!o){var e=runTimeout(cleanUpNextTick);o=!0;for(var t=i.length;t;){for(u=i,i=[];++a<t;)u&&u[a].run();a=-1,t=i.length}u=null,o=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===defaultClearTimeout||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t1){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function Item(e,t){this.fun=e,this.array=t}function noop(){}t.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];i.push(new Item(e,t)),1!==i.length||o||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},t.title="browser",t.browser=!0,t.env={},t.argv=[],t.version="",t.versions={},t.on=noop,t.addListener=noop,t.once=noop,t.off=noop,t.removeListener=noop,t.removeAllListeners=noop,t.emit=noop,t.prependListener=noop,t.prependOnceListener=noop,t.listeners=function(e){return[]},t.binding=function(e){throw Error("process.binding is not supported")},t.cwd=function(){return"/"},t.chdir=function(e){throw Error("process.chdir is not supported")},t.umask=function(){return 0}}},t={};function __nccwpck_require__(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={exports:{}},o=!0;try{e[r](i,i.exports,__nccwpck_require__),o=!1}finally{o&&delete t[r]}return i.exports}__nccwpck_require__.ab="//";var r=__nccwpck_require__(229);module.exports=r}()},9008:function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__(3121)},1664:function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__(1551)}},function(__webpack_require__){var __webpack_exec__=function(moduleId){return __webpack_require__(__webpack_require__.s=moduleId)};__webpack_require__.O(0,[774,179],function(){return __webpack_exec__(1118),__webpack_exec__(880)}),_N_E=__webpack_require__.O()}]);