(this.webpackJsonp=this.webpackJsonp||[]).push([[62,170],{"+iVy":function(t,e,n){"use strict";n.d(e,"b",(function(){return v})),n.d(e,"a",(function(){return y}));var i=n("Z2pp"),r=n("jyii"),o=n("/Zha"),s=n("9CRu"),a=n("gCUY"),l=n("Sq3g"),c=n("ySPH"),u=n("yxQL"),d=n("1pIC"),f=n("GpHn"),h=n("R+nN");function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var v=Object(a.c)(b(b({},u.b),{},{text:{type:String},html:{type:String},variant:{type:String,default:"secondary"},size:{type:String},block:{type:Boolean,default:!1},menuClass:{type:[String,Array,Object]},toggleTag:{type:String,default:"button"},toggleText:{type:String,default:"Toggle dropdown"},toggleClass:{type:[String,Array,Object]},noCaret:{type:Boolean,default:!1},split:{type:Boolean,default:!1},splitHref:{type:String},splitTo:{type:[String,Object]},splitVariant:{type:String},splitClass:{type:[String,Array,Object]},splitButtonType:{type:String,default:"button",validator:function(t){return Object(s.a)(["button","submit","reset"],t)}},lazy:{type:Boolean,default:!1},role:{type:String,default:"menu"}}),r.m),y=i.a.extend({name:r.m,mixins:[d.a,u.a,f.a],props:v,computed:{dropdownClasses:function(){var t=this.block,e=this.split;return[this.directionClass,this.boundaryClass,{show:this.visible,"btn-group":e||!t,"d-flex":t&&e}]},menuClasses:function(){return[this.menuClass,{"dropdown-menu-right":this.right,show:this.visible}]},toggleClasses:function(){var t=this.split;return[this.toggleClass,{"dropdown-toggle-split":t,"dropdown-toggle-no-caret":this.noCaret&&!t}]}},render:function(t){var e=this.visible,n=this.variant,i=this.size,r=this.block,s=this.disabled,a=this.split,u=this.role,d=this.hide,f=this.toggle,p={variant:n,size:i,block:r,disabled:s},g=this.normalizeSlot("button-content"),v=this.hasNormalizedSlot("button-content")?{}:Object(l.a)(this.html,this.text),y=t();if(a){var m=this.splitTo,O=this.splitHref,w=this.splitButtonType,j=b(b({},p),{},{variant:this.splitVariant||n});m?j.to=m:O?j.href=O:w&&(j.type=w),y=t(h.a,{class:this.splitClass,attrs:{id:this.safeId("_BV_button_")},props:j,domProps:v,on:{click:this.onSplitClick},ref:"button"},g),g=[t("span",{class:["sr-only"]},[this.toggleText])],v={}}var _=t(h.a,{staticClass:"dropdown-toggle",class:this.toggleClasses,attrs:{id:this.safeId("_BV_toggle_"),"aria-haspopup":"true","aria-expanded":Object(c.e)(e)},props:b(b({},p),{},{tag:this.toggleTag,block:r&&!a}),domProps:v,on:{mousedown:this.onMousedown,click:f,keydown:f},ref:"toggle"},g),C=t("ul",{staticClass:"dropdown-menu",class:this.menuClasses,attrs:{role:u,tabindex:"-1","aria-labelledby":this.safeId(a?"_BV_button_":"_BV_toggle_")},on:{keydown:this.onKeydown},ref:"menu"},[!this.lazy||e?this.normalizeSlot(o.c,{hide:d}):t()]);return t("div",{staticClass:"dropdown b-dropdown",class:this.dropdownClasses,attrs:{id:this.safeId()}},[y,_,C])}})},"1RkG":function(t,e,n){var i=n("pK7r");t.exports=function(t,e){var n=e?i(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}},"2Bom":function(t,e){t.exports=function(t,e){if(("constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e]}},"3Dr1":function(t,e,n){"use strict";var i=n("SYh6");e.a=Object(i.a)()},"774z":function(t,e,n){var i=n("9k6t"),r=n("ZTWp")((function(t,e,n){i(t,e,n)}));t.exports=r},"8RB9":function(t,e,n){var i=n("CR7L"),r=n("G/Sk");t.exports=function(t,e,n,o){var s=!n;n||(n={});for(var a=-1,l=e.length;++a<l;){var c=e[a],u=o?o(n[c],t[c],c,n,t):void 0;void 0===u&&(u=t[c]),s?r(n,c,u):i(n,c,u)}return n}},"9k6t":function(t,e,n){var i=n("Rsjk"),r=n("J+RW"),o=n("QhAn"),s=n("AVNZ"),a=n("kMtG"),l=n("LrAm"),c=n("2Bom");t.exports=function t(e,n,u,d,f){e!==n&&o(n,(function(o,l){if(f||(f=new i),a(o))s(e,n,l,u,t,d,f);else{var h=d?d(c(e,l),o,l+"",e,n,f):void 0;void 0===h&&(h=o),r(e,l,h)}}),l)}},AVNZ:function(t,e,n){var i=n("J+RW"),r=n("y74X"),o=n("1RkG"),s=n("Wjbg"),a=n("EwIz"),l=n("rQkY"),c=n("mABg"),u=n("QN0Q"),d=n("Iudf"),f=n("vZRN"),h=n("kMtG"),p=n("Zqnx"),b=n("LtDP"),g=n("2Bom"),v=n("fQQh");t.exports=function(t,e,n,y,m,O,w){var j=g(t,n),_=g(e,n),C=w.get(_);if(C)i(t,n,C);else{var k=O?O(j,_,n+"",t,e,w):void 0,x=void 0===k;if(x){var $=c(_),S=!$&&d(_),I=!$&&!S&&b(_);k=_,$||S||I?c(j)?k=j:u(j)?k=s(j):S?(x=!1,k=r(_,!0)):I?(x=!1,k=o(_,!0)):k=[]:p(_)||l(_)?(k=j,l(j)?k=v(j):h(j)&&!f(j)||(k=a(_))):x=!1}x&&(w.set(_,k),m(k,_,y,O,w),w.delete(_)),i(t,n,k)}}},EwIz:function(t,e,n){var i=n("yLny"),r=n("+Yzj"),o=n("tjir");t.exports=function(t){return"function"!=typeof t.constructor||o(t)?{}:i(r(t))}},"J+RW":function(t,e,n){var i=n("G/Sk"),r=n("79w4");t.exports=function(t,e,n){(void 0!==n&&!r(t[e],n)||void 0===n&&!(e in t))&&i(t,e,n)}},LT1q:function(t,e,n){"use strict";n.d(e,"k",(function(){return i})),n.d(e,"l",(function(){return r})),n.d(e,"z",(function(){return o})),n.d(e,"y",(function(){return s})),n.d(e,"x",(function(){return a})),n.d(e,"A",(function(){return l})),n.d(e,"B",(function(){return c})),n.d(e,"K",(function(){return u})),n.d(e,"L",(function(){return d})),n.d(e,"N",(function(){return f})),n.d(e,"M",(function(){return h})),n.d(e,"D",(function(){return p})),n.d(e,"C",(function(){return b})),n.d(e,"H",(function(){return g})),n.d(e,"G",(function(){return v})),n.d(e,"F",(function(){return y})),n.d(e,"E",(function(){return m})),n.d(e,"J",(function(){return O})),n.d(e,"I",(function(){return w})),n.d(e,"T",(function(){return j})),n.d(e,"S",(function(){return _})),n.d(e,"P",(function(){return C})),n.d(e,"R",(function(){return k})),n.d(e,"O",(function(){return x})),n.d(e,"U",(function(){return $})),n.d(e,"Q",(function(){return S})),n.d(e,"g",(function(){return I})),n.d(e,"f",(function(){return P})),n.d(e,"e",(function(){return B})),n.d(e,"h",(function(){return T})),n.d(e,"d",(function(){return E})),n.d(e,"j",(function(){return D})),n.d(e,"i",(function(){return H})),n.d(e,"o",(function(){return q})),n.d(e,"n",(function(){return N})),n.d(e,"p",(function(){return L})),n.d(e,"r",(function(){return F})),n.d(e,"q",(function(){return R})),n.d(e,"m",(function(){return z})),n.d(e,"u",(function(){return A})),n.d(e,"v",(function(){return M})),n.d(e,"t",(function(){return V})),n.d(e,"s",(function(){return Q})),n.d(e,"w",(function(){return G})),n.d(e,"b",(function(){return Z})),n.d(e,"c",(function(){return W})),n.d(e,"a",(function(){return Y}));const i="mark",r="measure",o="snippet-view-app-start",s="snippet-edit-app-start",a="snippet-blobs-content-finished",l="snippet-blobs-content",c="webide-app-start",u="webide-file-clicked",d="webide-file-finished",f="webide-init-editor-start",h="webide-init-editor-finish",p="webide-getBranchData-start",b="webide-getBranchData-finish",g="webide-getFileData-start",v="webide-getFileData-finish",y="webide-getFiles-start",m="webide-getFiles-finish",O="webide-getProjectData-start",w="webide-getProjectData-finish",j="webide-file-loading-after-interaction",_="WebIDE: Project data",C="WebIDE: Branch data",k="WebIDE: File data",x="WebIDE: Before Vue app",$="WebIDE: Repo Editor",S="WebIDE: Fetch Files",I="mr-diffs-mark-file-tree-start",P="mr-diffs-mark-file-tree-end",B="mr-diffs-mark-diff-files-start",T="mr-diffs-mark-first-diff-file-shown",E="mr-diffs-mark-diff-files-end",D="mr-diffs-measure-file-tree-done",H="mr-diffs-measure-diff-files-done",q="pipelines-detail-links-mark-calculate-start",N="pipelines-detail-links-mark-calculate-end",L="Pipelines Detail Graph: Links Calculation",F="pipeline_graph_link_calculation_duration_seconds",R="pipeline_graph_links_total",z="pipeline_graph_links_per_job_ratio",A="blobviewer-load-viewer-start",M="blobviewer-switch-to-viewerr-start",V="blobviewer-load-viewer-finish",Q="Repository File Viewer: loading the viewer",G="Repository File Viewer: switching the viewer",Z="design-app-start",W="Design Management: Before the Vue app",Y="Design Management: Single image preview"},MZHJ:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var i=n("Z2pp"),r=n("DQ7i"),o=n("jyii"),s=n("/Zha"),a=n("gCUY"),l=n("BhOj"),c=n("G55H"),u=n("mYXc");var d=Object(a.c)({content:{type:String,default:"&times;"},disabled:{type:Boolean,default:!1},ariaLabel:{type:String,default:"Close"},textVariant:{type:String}},o.f),f=i.a.extend({name:o.f,functional:!0,props:d,render:function(t,e){var n,i,o,a=e.props,d=e.data,f=e.slots,h=e.scopedSlots,p=f(),b=h||{},g={staticClass:"close",class:(n={},i="text-".concat(a.textVariant),o=a.textVariant,i in n?Object.defineProperty(n,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[i]=o,n),attrs:{type:"button",disabled:a.disabled,"aria-label":a.ariaLabel?String(a.ariaLabel):null},on:{click:function(t){a.disabled&&Object(c.d)(t)&&Object(l.d)(t)}}};return Object(u.a)(s.c,b,p)||(g.domProps={innerHTML:a.content}),t("button",Object(r.a)(d,g),Object(u.b)(s.c,{},b,p))}})},OkMp:function(t,e,n){"use strict";var i=n("774z"),r=n.n(i),o=n("q+nE"),s=n("+iVy"),a=n("qx9o"),l=n("Fcvx");const c={computed:{buttonSize(){return l.n[this.size]}}};var u=n("cuRJ"),d=n("H8gz"),f=n("zLBL"),h=n("OqKX"),p=n("6IRw"),b=n.n(p);const g=".dropdown-item:not(.disabled):not([disabled]),.form-control:not(.disabled):not([disabled])",v=o.default.extend(s.a,{methods:{getItems(){return(Object(a.D)(g,this.$refs.menu)||[]).filter(a.u)}}}),y={modifiers:{flip:{flipVariationsByContent:!0,padding:28}}};const m={components:{BDropdown:v,GlButton:u.a,GlDropdownDivider:h.a,GlIcon:d.a,GlLoadingIcon:f.a},mixins:[c],props:{headerText:{type:String,required:!1,default:""},hideHeaderBorder:{type:Boolean,required:!1,default:!0},showClearAll:{type:Boolean,required:!1,default:!1},clearAllText:{type:String,required:!1,default:"Clear all"},clearAllTextClass:{type:String,required:!1,default:"gl-px-5"},text:{type:String,required:!1,default:""},showHighlightedItemsTitle:{type:Boolean,required:!1,default:!1},highlightedItemsTitle:{type:String,required:!1,default:"Selected"},highlightedItemsTitleClass:{type:String,required:!1,default:"gl-px-5"},textSrOnly:{type:Boolean,required:!1,default:!1},split:{type:Boolean,required:!1,default:!1},category:{type:String,required:!1,default:l.m.primary,validator:t=>Object.keys(l.m).includes(t)},variant:{type:String,required:!1,default:l.t.default,validator:t=>Object.keys(l.t).includes(t)},size:{type:String,required:!1,default:"medium",validator:t=>Object.keys(l.n).includes(t)},icon:{type:String,required:!1,default:null},block:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1},loading:{type:Boolean,required:!1,default:!1},toggleClass:{type:[String,Array,Object],required:!1,default:null},right:{type:Boolean,required:!1,default:!1},popperOpts:{type:Object,required:!1,default:null}},computed:{renderCaret(){return!this.split},isIconOnly(){var t;return Boolean(this.icon&&(!(null!==(t=this.text)&&void 0!==t&&t.length)||this.textSrOnly)&&!this.hasSlotContents("button-text"))},isIconWithText(){var t;return Boolean(this.icon&&(null===(t=this.text)||void 0===t?void 0:t.length)&&!this.textSrOnly)},toggleButtonClasses(){return[this.toggleClass,{"gl-button":!0,"gl-dropdown-toggle":!0,[`btn-${this.variant}-secondary`]:this.category===l.m.secondary||this.category===l.m.tertiary&&this.split,[`btn-${this.variant}-tertiary`]:this.category===l.m.tertiary&&!this.split,"dropdown-icon-only":this.isIconOnly,"dropdown-icon-text":this.isIconWithText}]},splitButtonClasses(){return[this.toggleClass,{"gl-button":!0,"split-content-button":Boolean(this.text),"icon-split-content-button":Boolean(this.icon),[`btn-${this.variant}-secondary`]:this.category===l.m.secondary||this.category===l.m.tertiary}]},buttonText(){return this.split&&this.icon?null:this.text},hasHighlightedItemsContent(){return this.hasSlotContents("highlighted-items")},hasHighlightedItemsOrClearAll(){return this.hasHighlightedItemsContent&&this.showHighlightedItemsTitle||this.showClearAll},popperOptions(){return r()({},y,this.popperOpts)}},methods:{hasSlotContents(t){return Boolean(this.$slots[t])},show(){this.$refs.dropdown.show(...arguments)},hide(){this.$refs.dropdown.hide(...arguments)}}};const O=b()({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-dropdown",t._g(t._b({ref:"dropdown",staticClass:"gl-dropdown",attrs:{split:t.split,variant:t.variant,size:t.buttonSize,"toggle-class":[t.toggleButtonClasses],"split-class":t.splitButtonClasses,block:t.block,disabled:t.disabled||t.loading,right:t.right,"popper-opts":t.popperOptions},scopedSlots:t._u([{key:"button-content",fn:function(){return[t._t("button-content",(function(){return[t.loading?n("gl-loading-icon",{class:{"gl-mr-2":!t.isIconOnly}}):t._e(),t._v(" "),!t.icon||t.isIconOnly&&t.loading?t._e():n("gl-icon",{staticClass:"dropdown-icon",attrs:{name:t.icon}}),t._v(" "),n("span",{staticClass:"gl-dropdown-button-text",class:{"gl-sr-only":t.textSrOnly}},[t._t("button-text",(function(){return[t._v(t._s(t.buttonText))]}))],2),t._v(" "),t.renderCaret?n("gl-icon",{staticClass:"gl-button-icon dropdown-chevron",attrs:{name:"chevron-down"}}):t._e()]}))]},proxy:!0}],null,!0)},"b-dropdown",t.$attrs,!1),t.$listeners),[n("div",{staticClass:"gl-dropdown-inner"},[t.hasSlotContents("header")||t.headerText?n("div",{staticClass:"gl-dropdown-header",class:{"gl-border-b-0!":t.hideHeaderBorder}},[t.headerText?n("p",{staticClass:"gl-dropdown-header-top"},[t._v("\n        "+t._s(t.headerText)+"\n      ")]):t._e(),t._v(" "),t._t("header")],2):t._e(),t._v(" "),t.hasHighlightedItemsOrClearAll?n("div",{staticClass:"gl-display-flex gl-flex-direction-row gl-justify-content-space-between gl-align-items-center"},[t.hasHighlightedItemsContent&&t.showHighlightedItemsTitle?n("div",{staticClass:"gl-display-flex gl-flex-grow-1 gl-justify-content-flex-start",class:t.highlightedItemsTitleClass},[n("span",{staticClass:"gl-font-weight-bold",attrs:{"data-testid":"highlighted-items-title"}},[t._v(t._s(t.highlightedItemsTitle))])]):t._e(),t._v(" "),t.showClearAll?n("div",{staticClass:"gl-display-flex gl-flex-grow-1 gl-justify-content-end",class:t.clearAllTextClass},[n("gl-button",{attrs:{size:"small",category:"tertiary",variant:"link","data-testid":"clear-all-button"},on:{click:function(e){return t.$emit("clear-all",e)}}},[t._v(t._s(t.clearAllText))])],1):t._e()]):t._e(),t._v(" "),n("div",{staticClass:"gl-dropdown-contents"},[t.hasHighlightedItemsContent?n("div",{staticClass:"gl-overflow-visible",attrs:{"data-testid":"highlighted-items"}},[t._t("highlighted-items"),t._v(" "),n("gl-dropdown-divider")],2):t._e(),t._v(" "),t._t("default")],2),t._v(" "),t.hasSlotContents("footer")?n("div",{staticClass:"gl-dropdown-footer"},[t._t("footer")],2):t._e()])])},staticRenderFns:[]},void 0,m,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=O},OqKX:function(t,e,n){"use strict";var i=n("Z2pp"),r=n("DQ7i"),o=n("jyii"),s=n("gCUY");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u=Object(s.c)({tag:{type:String,default:"hr"}},o.n),d=i.a.extend({name:o.n,functional:!0,props:u,render:function(t,e){var n=e.props,i=e.data,o=i.attrs||{};return i.attrs={},t("li",Object(r.a)(i,{attrs:{role:"presentation"}}),[t(n.tag,{staticClass:"dropdown-divider",attrs:l(l({},o),{},{role:"separator","aria-orientation":"horizontal"}),ref:"divider"})])}}),f=n("6IRw");const h={components:{BDropdownDivider:d},inheritAttrs:!1};const p=n.n(f)()({render:function(){var t=this.$createElement;return(this._self._c||t)("b-dropdown-divider",this._g(this._b({staticClass:"gl-dropdown-divider"},"b-dropdown-divider",this.$attrs,!1),this.$listeners))},staticRenderFns:[]},void 0,h,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=p},QN0Q:function(t,e,n){var i=n("miPr"),r=n("cgqb");t.exports=function(t){return r(t)&&i(t)}},SYh6:function(t,e,n){"use strict";n("N8nX"),n("c5nz"),n("OZcL"),n("x5O4"),n("lxnW"),n("5sVn"),n("4xRc"),n("LM9r"),n("51O6"),n("une/"),n("Kypc"),n("yt6R"),n("6v3E"),n("RsOv"),n("ujLG"),n("3R5X"),n("HaUQ"),n("JHu5"),n("XUYm");class i{constructor(){this.$_all=new Map}dispose(){this.$_all.clear()}$on(t,e){const n=this.$_all.get(t);n&&n.push(e)||this.$_all.set(t,[e])}$off(t,e){const n=this.$_all.get(t)||[],i=e?n.filter((function(t){return t!==e})):[];i.length?this.$_all.set(t,i):this.$_all.delete(t)}$once(t,e){var n=this;const i=function(){n.$off(t,i),e(...arguments)};this.$on(t,i)}$emit(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];(this.$_all.get(t)||[]).forEach((function(t){t(...n)}))}}e.a=function(){return new i}},ZTWp:function(t,e,n){var i=n("T5M9"),r=n("kTp2");t.exports=function(t){return i((function(e,n){var i=-1,o=n.length,s=o>1?n[o-1]:void 0,a=o>2?n[2]:void 0;for(s=t.length>3&&"function"==typeof s?(o--,s):void 0,a&&r(n[0],n[1],a)&&(s=o<3?void 0:s,o=1),e=Object(e);++i<o;){var l=n[i];l&&t(e,l,i,s)}return e}))}},fQQh:function(t,e,n){var i=n("8RB9"),r=n("LrAm");t.exports=function(t){return i(t,r(t))}},g34G:function(t,e,n){"use strict";var i=n("qx9o"),r=n("iryQ");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.a=function(t,e,n){if(t=t?t.$el||t:null,!Object(i.s)(t))return null;if(Object(r.b)("observeDom"))return null;var a=new i.a((function(t){for(var n=!1,i=0;i<t.length&&!n;i++){var r=t[i],o=r.type,s=r.target;("characterData"===o&&s.nodeType===Node.TEXT_NODE||"attributes"===o||"childList"===o&&(r.addedNodes.length>0||r.removedNodes.length>0))&&(n=!0)}n&&e()}));return a.observe(t,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({childList:!0,subtree:!0},n)),a}},pK7r:function(t,e,n){var i=n("Ne/Z");t.exports=function(t){var e=new t.constructor(t.byteLength);return new i(e).set(new i(t)),e}},"w+qJ":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("JHu5"),n("3R5X"),n("XUYm");const i=function(){let{mark:t,measures:e=[]}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};window.requestAnimationFrame((function(){t&&!performance.getEntriesByName(t).length&&performance.mark(t),e.forEach((function(t){performance.measure(t.name,t.start,t.end)}))}))}},y74X:function(t,e,n){(function(t){var i=n("l5RB"),r=e&&!e.nodeType&&e,o=r&&"object"==typeof t&&t&&!t.nodeType&&t,s=o&&o.exports===r?i.Buffer:void 0,a=s?s.allocUnsafe:void 0;t.exports=function(t,e){if(e)return t.slice();var n=t.length,i=a?a(n):new t.constructor(n);return t.copy(i),i}}).call(this,n("Y4xB")(t))},yLny:function(t,e,n){var i=n("kMtG"),r=Object.create,o=function(){function t(){}return function(e){if(!i(e))return{};if(r)return r(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();t.exports=o},yxQL:function(t,e,n){"use strict";n.d(e,"b",(function(){return C}));var i=n("ZOY3"),r=n("jyii"),o=n("ryFn"),s=n("ioEp"),a=n("gCUY"),l=n("qx9o"),c=n("BhOj"),u=n("G55H"),d=n("9Q7u"),f=n("gHjZ"),h=n("iryQ"),p=n("UVyR"),b={data:function(){return{listenForClickOut:!1}},watch:{listenForClickOut:function(t,e){t!==e&&(Object(c.a)(this.clickOutElement,this.clickOutEventName,this._clickOutHandler,p.a),t&&Object(c.b)(this.clickOutElement,this.clickOutEventName,this._clickOutHandler,p.a))}},beforeCreate:function(){this.clickOutElement=null,this.clickOutEventName=null},mounted:function(){this.clickOutElement||(this.clickOutElement=document),this.clickOutEventName||(this.clickOutEventName="click"),this.listenForClickOut&&Object(c.b)(this.clickOutElement,this.clickOutEventName,this._clickOutHandler,p.a)},beforeDestroy:function(){Object(c.a)(this.clickOutElement,this.clickOutEventName,this._clickOutHandler,p.a)},methods:{isClickOut:function(t){return!Object(l.f)(this.$el,t.target)},_clickOutHandler:function(t){this.clickOutHandler&&this.isClickOut(t)&&this.clickOutHandler(t)}}},g={data:function(){return{listenForFocusIn:!1}},watch:{listenForFocusIn:function(t,e){t!==e&&(Object(c.a)(this.focusInElement,"focusin",this._focusInHandler,p.a),t&&Object(c.b)(this.focusInElement,"focusin",this._focusInHandler,p.a))}},beforeCreate:function(){this.focusInElement=null},mounted:function(){this.focusInElement||(this.focusInElement=document),this.listenForFocusIn&&Object(c.b)(this.focusInElement,"focusin",this._focusInHandler,p.a)},beforeDestroy:function(){Object(c.a)(this.focusInElement,"focusin",this._focusInHandler,p.a)},methods:{_focusInHandler:function(t){this.focusInHandler&&this.focusInHandler(t)}}},v=n("1pIC");function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(Object(n),!0).forEach((function(e){O(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function O(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var w="".concat("bv::dropdown::","shown"),j="".concat("bv::dropdown::","hidden"),_=[".dropdown-item",".b-dropdown-form"].map((function(t){return"".concat(t,":not(.disabled):not([disabled])")})).join(", "),C=m(m({},Object(a.c)({dropup:{type:Boolean,default:!1},dropright:{type:Boolean,default:!1},dropleft:{type:Boolean,default:!1},right:{type:Boolean,default:!1},offset:{type:[Number,String],default:0},noFlip:{type:Boolean,default:!1},popperOpts:{type:Object,default:function(){}},boundary:{type:[String,f.b],default:"scrollParent"}},r.m)),Object(a.c)({disabled:{type:Boolean,default:!1}},r.m));e.a={mixins:[v.a,b,g],provide:function(){return{bvDropdown:this}},inject:{bvNavbar:{default:null}},props:C,data:function(){return{visible:!1,visibleChangePrevented:!1}},computed:{inNavbar:function(){return!Object(u.f)(this.bvNavbar)},toggler:function(){var t=this.$refs.toggle;return t?t.$el||t:null},directionClass:function(){return this.dropup?"dropup":this.dropright?"dropright":this.dropleft?"dropleft":""},boundaryClass:function(){return"scrollParent"===this.boundary||this.inNavbar?"":"position-static"}},watch:{visible:function(t,e){if(this.visibleChangePrevented)this.visibleChangePrevented=!1;else if(t!==e){var n=t?"show":"hide",i=new s.a(n,{cancelable:!0,vueTarget:this,target:this.$refs.menu,relatedTarget:null,componentId:this.safeId?this.safeId():this.id||null});if(this.emitEvent(i),i.defaultPrevented)return this.visibleChangePrevented=!0,this.visible=e,void this.$off("hidden",this.focusToggler);"show"===n?this.showMenu():this.hideMenu()}},disabled:function(t,e){t!==e&&t&&this.visible&&(this.visible=!1)}},created:function(){this.$_popper=null,this.$_hideTimeout=null},deactivated:function(){this.visible=!1,this.whileOpenListen(!1),this.destroyPopper()},beforeDestroy:function(){this.visible=!1,this.whileOpenListen(!1),this.destroyPopper(),this.clearHideTimeout()},methods:{emitEvent:function(t){var e=t.type;this.$emit(e,t),this.$root.$emit("".concat("bv::dropdown::").concat(e),t)},showMenu:function(){var t=this;if(!this.disabled){if(!this.inNavbar)if(void 0===i.default)Object(h.a)("Popper.js not found. Falling back to CSS positioning",r.m);else{var e=this.dropup&&this.right||this.split?this.$el:this.$refs.toggle;e=e.$el||e,this.createPopper(e)}this.$root.$emit(w,this),this.whileOpenListen(!0),this.$nextTick((function(){t.focusMenu(),t.$emit("shown")}))}},hideMenu:function(){this.whileOpenListen(!1),this.$root.$emit(j,this),this.$emit("hidden"),this.destroyPopper()},createPopper:function(t){this.destroyPopper(),this.$_popper=new i.default(t,this.$refs.menu,this.getPopperConfig())},destroyPopper:function(){this.$_popper&&this.$_popper.destroy(),this.$_popper=null},updatePopper:function(){try{this.$_popper.scheduleUpdate()}catch(t){}},clearHideTimeout:function(){clearTimeout(this.$_hideTimeout),this.$_hideTimeout=null},getPopperConfig:function(){var t="bottom-start";this.dropup?t=this.right?"top-end":"top-start":this.dropright?t="right-start":this.dropleft?t="left-start":this.right&&(t="bottom-end");var e={placement:t,modifiers:{offset:{offset:this.offset||0},flip:{enabled:!this.noFlip}}},n=this.boundary;return n&&(e.modifiers.preventOverflow={boundariesElement:n}),Object(d.i)(e,this.popperOpts||{})},whileOpenListen:function(t){this.listenForClickOut=t,this.listenForFocusIn=t;var e=t?"$on":"$off";this.$root[e](w,this.rootCloseListener)},rootCloseListener:function(t){t!==this&&(this.visible=!1)},show:function(){var t=this;this.disabled||Object(l.B)((function(){t.visible=!0}))},hide:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.disabled||(this.visible=!1,t&&this.$once("hidden",this.focusToggler))},toggle:function(t){var e=t=t||{},n=e.type,i=e.keyCode;("click"===n||"keydown"===n&&-1!==[o.c,o.h,o.a].indexOf(i))&&(this.disabled?this.visible=!1:(this.$emit("toggle",t),Object(c.d)(t),this.visible?this.hide(!0):this.show()))},onMousedown:function(t){Object(c.d)(t,{propagation:!1})},onKeydown:function(t){var e=t.keyCode;e===o.d?this.onEsc(t):e===o.a?this.focusNext(t,!1):e===o.i&&this.focusNext(t,!0)},onEsc:function(t){this.visible&&(this.visible=!1,Object(c.d)(t),this.$once("hidden",this.focusToggler))},onSplitClick:function(t){this.disabled?this.visible=!1:this.$emit("click",t)},hideHandler:function(t){var e=this,n=t.target;!this.visible||Object(l.f)(this.$refs.menu,n)||Object(l.f)(this.toggler,n)||(this.clearHideTimeout(),this.$_hideTimeout=setTimeout((function(){return e.hide()}),this.inNavbar?300:0))},clickOutHandler:function(t){this.hideHandler(t)},focusInHandler:function(t){this.hideHandler(t)},focusNext:function(t,e){var n=this,i=t.target;!this.visible||t&&Object(l.e)(".dropdown form",i)||(Object(c.d)(t),this.$nextTick((function(){var t=n.getItems();if(!(t.length<1)){var r=t.indexOf(i);e&&r>0?r--:!e&&r<t.length-1&&r++,r<0&&(r=0),n.focusItem(r,t)}})))},focusItem:function(t,e){var n=e.find((function(e,n){return n===t}));Object(l.d)(n)},getItems:function(){return(Object(l.D)(_,this.$refs.menu)||[]).filter(l.u)},focusMenu:function(){Object(l.d)(this.$refs.menu)},focusToggler:function(){var t=this;this.$nextTick((function(){Object(l.d)(t.toggler)}))}}}}}]);
//# sourceMappingURL=commons-pages.projects.blob.show-pages.projects.show-pages.projects.snippets.edit-pages.projects.sni-dd84f7c7.c035a039.chunk.js.map