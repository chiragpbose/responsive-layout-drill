(this.webpackJsonp=this.webpackJsonp||[]).push([[6,246],{"7IkT":function(t,e,n){"use strict";function a(t){return t.replace(/ trial\b/i,"")}n.d(e,"a",(function(){return a}))},B065:function(t,e,n){"use strict";var a=n("wWEL"),r={props:{name:{type:String,required:!0}},render(){var t,e;return null===(t=this.$scopedSlots)||void 0===t||null===(e=t[Object(a.c)(this.name)])||void 0===e?void 0:e.call(t)}},i=n("bPvS"),s=Object(i.a)(r,void 0,void 0,!1,null,null,null);e.a=s.exports},HWy0:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var a=n("O6x3"),r=n.n(a),i=n("yYHy"),s=n("xILg"),o=n("uw3E"),c=n("79X9");class l extends c.default{constructor(){super(),r.a.bind(Object(o.sb)(o.q),(function(){return Object(s.a)(".shortcuts-project")})),r.a.bind(Object(o.sb)(o.f),(function(){return Object(s.a)(".shortcuts-project-activity")})),r.a.bind(Object(o.sb)(o.r),(function(){return Object(s.a)(".shortcuts-project-releases")})),r.a.bind(Object(o.sb)(o.i),(function(){return Object(s.a)(".shortcuts-tree")})),r.a.bind(Object(o.sb)(o.g),(function(){return Object(s.a)(".shortcuts-commits")})),r.a.bind(Object(o.sb)(o.m),(function(){return Object(s.a)(".shortcuts-builds")})),r.a.bind(Object(o.sb)(o.t),(function(){return Object(s.a)(".shortcuts-network")})),r.a.bind(Object(o.sb)(o.s),(function(){return Object(s.a)(".shortcuts-repository-charts")})),r.a.bind(Object(o.sb)(o.k),(function(){return Object(s.a)(".shortcuts-issues")})),r.a.bind(Object(o.sb)(o.l),(function(){return Object(s.a)(".shortcuts-issue-boards")})),r.a.bind(Object(o.sb)(o.o),(function(){return Object(s.a)(".shortcuts-merge_requests")})),r.a.bind(Object(o.sb)(o.w),(function(){return Object(s.a)(".shortcuts-wiki")})),r.a.bind(Object(o.sb)(o.u),(function(){return Object(s.a)(".shortcuts-snippets")})),r.a.bind(Object(o.sb)(o.n),(function(){return Object(s.a)(".shortcuts-kubernetes")})),r.a.bind(Object(o.sb)(o.h),(function(){return Object(s.a)(".shortcuts-environments")})),r.a.bind(Object(o.sb)(o.p),(function(){return Object(s.a)(".shortcuts-metrics")})),r.a.bind(Object(o.sb)(o.v),l.navigateToWebIDE),r.a.bind(Object(o.sb)(o.Y),(function(){return Object(s.a)(".shortcuts-new-issue")}))}static navigateToWebIDE(){var t,e,n;const a=Object(i.f)({sourceProjectFullPath:null===(t=window.gl.mrWidgetData)||void 0===t?void 0:t.source_project_full_path,targetProjectFullPath:null===(e=window.gl.mrWidgetData)||void 0===e?void 0:e.target_project_full_path,iid:null===(n=window.gl.mrWidgetData)||void 0===n?void 0:n.iid});a&&Object(i.Q)(a)}}},O6x3:function(t,e,n){var a;!function(r,i,s){if(r){for(var o,c={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},l={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},u={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},d={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},p=1;p<20;++p)c[111+p]="f"+p;for(p=0;p<=9;++p)c[p+96]=p.toString();v.prototype.bind=function(t,e,n){return t=t instanceof Array?t:[t],this._bindMultiple.call(this,t,e,n),this},v.prototype.unbind=function(t,e){return this.bind.call(this,t,(function(){}),e)},v.prototype.trigger=function(t,e){return this._directMap[t+":"+e]&&this._directMap[t+":"+e]({},t),this},v.prototype.reset=function(){return this._callbacks={},this._directMap={},this},v.prototype.stopCallback=function(t,e){if((" "+e.className+" ").indexOf(" mousetrap ")>-1)return!1;if(function t(e,n){return null!==e&&e!==i&&(e===n||t(e.parentNode,n))}(e,this.target))return!1;if("composedPath"in t&&"function"==typeof t.composedPath){var n=t.composedPath()[0];n!==t.target&&(e=n)}return"INPUT"==e.tagName||"SELECT"==e.tagName||"TEXTAREA"==e.tagName||e.isContentEditable},v.prototype.handleKey=function(){var t=this;return t._handleKey.apply(t,arguments)},v.addKeycodes=function(t){for(var e in t)t.hasOwnProperty(e)&&(c[e]=t[e]);o=null},v.init=function(){var t=v(i);for(var e in t)"_"!==e.charAt(0)&&(v[e]=function(e){return function(){return t[e].apply(t,arguments)}}(e))},v.init(),r.Mousetrap=v,t.exports&&(t.exports=v),void 0===(a=function(){return v}.call(e,n,e,t))||(t.exports=a)}function m(t,e,n){t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent("on"+e,n)}function h(t){if("keypress"==t.type){var e=String.fromCharCode(t.which);return t.shiftKey||(e=e.toLowerCase()),e}return c[t.which]?c[t.which]:l[t.which]?l[t.which]:String.fromCharCode(t.which).toLowerCase()}function b(t){return"shift"==t||"ctrl"==t||"alt"==t||"meta"==t}function f(t,e,n){return n||(n=function(){if(!o)for(var t in o={},c)t>95&&t<112||c.hasOwnProperty(t)&&(o[c[t]]=t);return o}()[t]?"keydown":"keypress"),"keypress"==n&&e.length&&(n="keydown"),n}function g(t,e){var n,a,r,i=[];for(n=function(t){return"+"===t?["+"]:(t=t.replace(/\+{2}/g,"+plus")).split("+")}(t),r=0;r<n.length;++r)a=n[r],d[a]&&(a=d[a]),e&&"keypress"!=e&&u[a]&&(a=u[a],i.push("shift")),b(a)&&i.push(a);return{key:a,modifiers:i,action:e=f(a,i,e)}}function v(t){var e=this;if(t=t||i,!(e instanceof v))return new v(t);e.target=t,e._callbacks={},e._directMap={};var n,a={},r=!1,s=!1,o=!1;function c(t){t=t||{};var e,n=!1;for(e in a)t[e]?n=!0:a[e]=0;n||(o=!1)}function l(t,n,r,i,s,o){var c,l,u,d,p=[],m=r.type;if(!e._callbacks[t])return[];for("keyup"==m&&b(t)&&(n=[t]),c=0;c<e._callbacks[t].length;++c)if(l=e._callbacks[t][c],(i||!l.seq||a[l.seq]==l.level)&&m==l.action&&("keypress"==m&&!r.metaKey&&!r.ctrlKey||(u=n,d=l.modifiers,u.sort().join(",")===d.sort().join(",")))){var h=!i&&l.combo==s,f=i&&l.seq==i&&l.level==o;(h||f)&&e._callbacks[t].splice(c,1),p.push(l)}return p}function u(t,n,a,r){e.stopCallback(n,n.target||n.srcElement,a,r)||!1===t(n,a)&&(function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}(n),function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0}(n))}function d(t){"number"!=typeof t.which&&(t.which=t.keyCode);var n=h(t);n&&("keyup"!=t.type||r!==n?e.handleKey(n,function(t){var e=[];return t.shiftKey&&e.push("shift"),t.altKey&&e.push("alt"),t.ctrlKey&&e.push("ctrl"),t.metaKey&&e.push("meta"),e}(t),t):r=!1)}function p(t,e,i,s){function l(e){return function(){o=e,++a[t],clearTimeout(n),n=setTimeout(c,1e3)}}function d(e){u(i,e,t),"keyup"!==s&&(r=h(e)),setTimeout(c,10)}a[t]=0;for(var p=0;p<e.length;++p){var m=p+1===e.length?d:l(s||g(e[p+1]).action);f(e[p],m,s,t,p)}}function f(t,n,a,r,i){e._directMap[t+":"+a]=n;var s,o=(t=t.replace(/\s+/g," ")).split(" ");o.length>1?p(t,o,n,a):(s=g(t,a),e._callbacks[s.key]=e._callbacks[s.key]||[],l(s.key,s.modifiers,{type:s.action},r,t,i),e._callbacks[s.key][r?"unshift":"push"]({callback:n,modifiers:s.modifiers,action:s.action,seq:r,level:i,combo:t}))}e._handleKey=function(t,e,n){var a,r=l(t,e,n),i={},d=0,p=!1;for(a=0;a<r.length;++a)r[a].seq&&(d=Math.max(d,r[a].level));for(a=0;a<r.length;++a)if(r[a].seq){if(r[a].level!=d)continue;p=!0,i[r[a].seq]=1,u(r[a].callback,n,r[a].combo,r[a].seq)}else p||u(r[a].callback,n,r[a].combo);var m="keypress"==n.type&&s;n.type!=o||b(t)||m||c(i),s=p&&"keydown"==n.type},e._bindMultiple=function(t,e,n){for(var a=0;a<t.length;++a)f(t[a],e,n)},m(t,"keypress",d),m(t,"keydown",d),m(t,"keyup",d)}}("undefined"!=typeof window?window:null,"undefined"!=typeof window?document:null)},PsNq:function(t,e,n){"use strict";n.d(e,"a",(function(){return H}));var a=n("q+nE"),r=n("4pZC"),i=n.n(r),s=(n("h8Et"),n("cuRJ")),o=n("KFH7"),c=n("nPFI"),l=n("49qB"),u=n("7IkT"),d=n("qqJG"),p=n("B065"),m=n("U1Ws"),h=n("t9l/"),b=n("mWeI");const f={i18n:{widgetTitle:Object(h.g)("Trials|%{planName} Trial"),widgetRemainingDays:Object(h.g)("Trials|Day %{daysUsed}/%{duration}")},trackingEvents:{widgetClick:{action:"click_link",label:"trial_status_widget"}}},g={i18n:{close:Object(h.g)("Modal|Close"),compareAllButtonTitle:Object(h.g)("Trials|Compare all plans"),popoverContent:Object(h.g)("Trials|Your trial ends on\n      %{boldStart}%{trialEndDate}%{boldEnd}. We hope you’re enjoying the\n      features of GitLab %{planName}. To keep those features after your trial\n      ends, you’ll need to buy a subscription. (You can also choose GitLab\n      Premium if it meets your needs.)"),upgradeButtonTitle:Object(h.g)("Trials|Upgrade %{groupName} to %{planName}")},trackingEvents:{popoverShown:{action:"popover_shown",label:"trial_status_popover"},contactSalesBtnClick:{action:"click_button",label:"contact_sales"},compareBtnClick:{action:"click_button",label:"compare_all_plans"}},resizeEventDebounceMS:150,disabledBreakpoints:["xs","sm"],trialEndDateFormatString:"mmmm d"},{i18n:v,trackingEvents:y,trialEndDateFormatString:w,resizeEventDebounceMS:j,disabledBreakpoints:k}=g,O=b.a.mixin({experiment:"group_contact_sales"});var _={components:{GlButton:s.a,GlPopover:o.a,GlSprintf:c.a,GitlabExperiment:p.a},mixins:[O],inject:{containerId:{},daysRemaining:{},groupName:{},planName:{},plansHref:{},purchaseHref:{},targetId:{},trialEndDate:{},user:{}},data:()=>({disabled:!1}),i18n:v,handRaiseLeadAttributes:{size:"small",variant:"confirm",class:"gl-mb-3 gl-w-full",buttonTextClasses:"gl-font-sm",href:"#"},computed:{formattedTrialEndDate(){return Object(m.q)(this.trialEndDate,w,!0)},planNameWithoutTrial(){return Object(u.a)(this.planName)},upgradeButtonTitle(){return Object(h.h)(this.$options.i18n.upgradeButtonTitle,{groupName:this.groupName,planName:Object(u.a)(this.planName)})},popoverTitle(){const t=Object(h.f)("Trials|You've got %{daysRemaining} day remaining on GitLab %{planName}!","Trials|You've got %{daysRemaining} days remaining on GitLab %{planName}!",this.daysRemaining);return Object(h.h)(t,{daysRemaining:this.daysRemaining,planName:this.planName})}},created(){var t=this;this.debouncedResize=i()((function(){return t.updateDisabledState()}),j),window.addEventListener("resize",this.debouncedResize)},mounted(){this.updateDisabledState()},beforeDestroy(){window.removeEventListener("resize",this.debouncedResize)},methods:{trackPageAction(t){const{action:e,...n}=y[t];this.track(e,{...n})},updateDisabledState(){this.disabled=k.includes(l.a.getBreakpointSize())},onShown(){this.trackPageAction("popoverShown"),Object(d.a)()}}},P=n("bPvS"),N=Object(P.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("gl-popover",{ref:"popover",attrs:{placement:"rightbottom",boundary:"viewport",container:t.containerId,target:t.targetId,disabled:t.disabled,delay:{hide:400}},on:{shown:t.onShown},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n    "+t._s(t.popoverTitle)+"\n  ")]},proxy:!0}])},[t._v(" "),n("gl-sprintf",{attrs:{message:t.$options.i18n.popoverContent},scopedSlots:t._u([{key:"bold",fn:function(e){var a=e.content;return[n("b",[t._v(t._s(t.sprintf(a,{trialEndDate:t.formattedTrialEndDate})))])]}},{key:"planName",fn:function(){return[t._v(t._s(t.planNameWithoutTrial))]},proxy:!0}])}),t._v(" "),n("div",{staticClass:"gl-mt-5"},[n("gitlab-experiment",{attrs:{name:"group_contact_sales"},scopedSlots:t._u([{key:"control",fn:function(){return[n("gl-button",{staticClass:"gl-mb-0",attrs:{"data-testid":"upgrade-btn",category:"primary",variant:"confirm",size:"small",block:"",href:t.purchaseHref}},[n("span",{staticClass:"gl-font-sm"},[t._v(t._s(t.upgradeButtonTitle))])])]},proxy:!0},{key:"candidate",fn:function(){return[n("div",{attrs:{"data-testid":"contact-sales-btn"},on:{click:function(e){return t.trackPageAction("contactSalesBtnClick")}}},[n("div",{staticClass:"js-hand-raise-lead-button",attrs:{"data-button-attributes":JSON.stringify(t.$options.handRaiseLeadAttributes),"data-namespace-id":t.user.namespaceId,"data-user-name":t.user.userName,"data-first-name":t.user.firstName,"data-last-name":t.user.lastName,"data-company-name":t.user.companyName,"data-glm-content":t.user.glmContent}})])]},proxy:!0}])}),t._v(" "),n("gl-button",{staticClass:"gl-mb-0",attrs:{href:t.plansHref,category:"secondary",variant:"confirm",size:"small",block:"","data-testid":"compare-btn",title:t.$options.i18n.compareAllButtonTitle},on:{click:function(e){return t.trackPageAction("compareBtnClick")}}},[n("span",{staticClass:"gl-font-sm"},[t._v(t._s(t.$options.i18n.compareAllButtonTitle))])])],1)],1)}),[],!1,null,null,null).exports,S=n("u1ru"),C=n("z7LP");const{i18n:x,trackingEvents:T}=f,E=b.a.mixin({experiment:"group_contact_sales"});var D={components:{GlLink:S.a,GlProgressBar:C.a},mixins:[E],inject:{containerId:{default:null},trialDaysUsed:{},trialDuration:{},daysRemaining:{},navIconImagePath:{},percentageComplete:{},planName:{},plansHref:{}},computed:{widgetTitle(){return Object(h.h)(x.widgetTitle,{planName:Object(u.a)(this.planName)})},widgetRemainingDays(){return Object(h.h)(x.widgetRemainingDays,{daysUsed:this.trialDaysUsed,duration:this.trialDuration})}},methods:{onWidgetClick(){const{action:t,...e}=T.widgetClick;this.track(t,{...e})}}},B=Object(P.a)(D,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("gl-link",{attrs:{id:t.containerId,title:t.widgetTitle,href:t.plansHref}},[n("div",{staticClass:"gl-display-flex gl-flex-direction-column gl-align-items-stretch gl-w-full",attrs:{"data-testid":"widget-menu"},on:{click:t.onWidgetClick}},[n("div",{staticClass:"gl-display-flex gl-w-full"},[n("span",{staticClass:"nav-icon-container svg-container"},[n("img",{staticClass:"svg",attrs:{src:t.navIconImagePath,width:"16"}})]),t._v(" "),n("span",{staticClass:"nav-item-name"},[t._v("\n        "+t._s(t.widgetTitle)+"\n      ")]),t._v(" "),n("span",{staticClass:"collapse-text gl-font-sm gl-mr-auto"},[t._v("\n        "+t._s(t.widgetRemainingDays)+"\n      ")])]),t._v(" "),n("div",{staticClass:"gl-display-flex gl-align-items-stretch gl-mt-2"},[n("gl-progress-bar",{staticClass:"gl-flex-grow-1",attrs:{value:t.percentageComplete}})],1)])])}),[],!1,null,null,null).exports;const I=function(){const t=document.getElementById("js-trial-status-widget");if(!t)return;const{containerId:e,trialDaysUsed:n,trialDuration:r,daysRemaining:i,navIconImagePath:s,percentageComplete:o,planName:c,plansHref:l}=t.dataset;return new a.default({el:t,provide:{containerId:e,trialDaysUsed:Number(n)||0,trialDuration:Number(r)||0,daysRemaining:Number(i),navIconImagePath:s,percentageComplete:Number(o),planName:c,plansHref:l},render:function(t){return t(B)}})},R=function(){const t=document.getElementById("js-trial-status-popover");if(!t)return;const{containerId:e,daysRemaining:n,groupName:r,planName:i,plansHref:s,purchaseHref:o,targetId:c,trialEndDate:l,namespaceId:u,userName:d,firstName:p,lastName:m,companyName:h,glmContent:b}=t.dataset;return new a.default({el:t,provide:{containerId:e,daysRemaining:n,groupName:r,planName:i,plansHref:s,purchaseHref:o,targetId:c,trialEndDate:new Date(l),user:{namespaceId:u,userName:d,firstName:p,lastName:m,companyName:h,glmContent:b}},render:function(t){return t(N)}})},H=function(){return{widget:I(),popover:R()}}},Sq3g:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return i}));var a=n("pkvD"),r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return String(t).replace(a.h,"")},i=function(t,e){return t?{innerHTML:t}:e?{textContent:e}:{}}},qqJG:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("JHu5"),n("3R5X"),n("XUYm");const a=async function(){const t=document.querySelectorAll(".js-hand-raise-lead-button");if(t.length>0){const{initHandRaiseLeadButton:e}=await Promise.all([n.e(2),n.e(37),n.e(86),n.e(172),n.e(474)]).then(n.bind(null,"ZT+P"));t.forEach((async function(t){e(t)}))}}},z7LP:function(t,e,n){"use strict";var a=n("Z2pp"),r=n("jyii"),i=n("gCUY"),s=n("GpHn"),o=n("Sq3g"),c=n("G55H"),l=n("ST6S"),u=n("8Vyw"),d=n("ySPH"),p=a.a.extend({name:r.Y,mixins:[s.a],inject:{bvProgress:{default:function(){return{}}}},props:Object(i.c)({value:{type:[Number,String],default:0},label:{type:String},labelHtml:{type:String},max:{type:[Number,String],default:null},precision:{type:[Number,String],default:null},variant:{type:String},striped:{type:Boolean,default:null},animated:{type:Boolean,default:null},showProgress:{type:Boolean,default:null},showValue:{type:Boolean,default:null}},r.Y),computed:{progressBarClasses:function(){return[this.computedVariant?"bg-".concat(this.computedVariant):"",this.computedStriped||this.computedAnimated?"progress-bar-striped":"",this.computedAnimated?"progress-bar-animated":""]},progressBarStyles:function(){return{width:this.computedValue/this.computedMax*100+"%"}},computedValue:function(){return Object(u.b)(this.value,0)},computedMax:function(){var t=Object(u.b)(this.max)||Object(u.b)(this.bvProgress.max,0);return t>0?t:100},computedPrecision:function(){return Object(l.d)(Object(u.c)(this.precision,Object(u.c)(this.bvProgress.precision,0)),0)},computedProgress:function(){var t=this.computedPrecision,e=Object(l.f)(10,t);return Object(u.a)(100*e*this.computedValue/this.computedMax/e,t)},computedVariant:function(){return this.variant||this.bvProgress.variant},computedStriped:function(){return Object(c.b)(this.striped)?this.striped:this.bvProgress.striped||!1},computedAnimated:function(){return Object(c.b)(this.animated)?this.animated:this.bvProgress.animated||!1},computedShowProgress:function(){return Object(c.b)(this.showProgress)?this.showProgress:this.bvProgress.showProgress||!1},computedShowValue:function(){return Object(c.b)(this.showValue)?this.showValue:this.bvProgress.showValue||!1}},render:function(t){var e,n=this.label,a=this.labelHtml,r=this.computedValue,i=this.computedPrecision,s={};return this.hasNormalizedSlot()?e=this.normalizeSlot():n||a?s=Object(o.a)(a,n):this.computedShowProgress?e=this.computedProgress:this.computedShowValue&&(e=Object(u.a)(r,i)),t("div",{staticClass:"progress-bar",class:this.progressBarClasses,style:this.progressBarStyles,attrs:{role:"progressbar","aria-valuemin":"0","aria-valuemax":Object(d.e)(this.computedMax),"aria-valuenow":Object(u.a)(r,i)},domProps:s},e)}}),m=a.a.extend({name:r.X,mixins:[s.a],provide:function(){return{bvProgress:this}},props:Object(i.c)({variant:{type:String},striped:{type:Boolean,default:!1},animated:{type:Boolean,default:!1},height:{type:String},precision:{type:[Number,String],default:0},showProgress:{type:Boolean,default:!1},showValue:{type:Boolean,default:!1},max:{type:[Number,String],default:100},value:{type:[Number,String],default:0}},r.X),computed:{progressHeight:function(){return{height:this.height||null}}},render:function(t){var e=this.normalizeSlot();return e||(e=t(p,{props:{value:this.value,max:this.max,precision:this.precision,variant:this.variant,animated:this.animated,striped:this.striped,showProgress:this.showProgress,showValue:this.showValue}})),t("div",{class:["progress"],style:this.progressHeight},[e])}}),h=n("6IRw");const b={components:{BProgress:m}};const f=n.n(h)()({render:function(){var t=this.$createElement;return(this._self._c||t)("b-progress",this._b({},"b-progress",this.$attrs,!1))},staticRenderFns:[]},void 0,b,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=f}}]);
//# sourceMappingURL=commons-pages.groups.boards-pages.groups.details-pages.groups.epic_boards-pages.groups.show-pages.gr-7a0d4287.4762acef.chunk.js.map