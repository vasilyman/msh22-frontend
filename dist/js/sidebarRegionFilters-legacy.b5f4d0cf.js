"use strict";(self["webpackChunkmsh22"]=self["webpackChunkmsh22"]||[]).push([[84],{7852:function(t,e,i){var s=i(2109),n=i(1702),r=i(1236).f,o=i(7466),a=i(1340),l=i(3929),c=i(4488),h=i(4964),u=i(1913),d=n("".endsWith),p=n("".slice),m=Math.min,g=h("endsWith"),v=!u&&!g&&!!function(){var t=r(String.prototype,"endsWith");return t&&!t.writable}();s({target:"String",proto:!0,forced:!v&&!g},{endsWith:function(t){var e=a(c(this));l(t);var i=arguments.length>1?arguments[1]:void 0,s=e.length,n=void 0===i?s:m(o(i),s),r=a(t);return d?d(e,r,n):p(e,n-r.length,n)===r}})},9762:function(t,e,i){i(8582);var s=i(4589);e["Z"]=(0,s.Ji)("spacer","div","v-spacer")},7047:function(t,e,i){i.d(e,{Z:function(){return m}});var s=i(9726),n=(i(9653),i(9600),i(7852),i(6755),i(8083)),r=i(2529),o=i(3325),a=i(4589),l=(0,o.Z)(r.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},(0,a.z9)(this))}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),c=l,h=i(8085),u=i(6290),d=i(1824),p="undefined"!==typeof window&&"IntersectionObserver"in window,m=(0,o.Z)(c,h.Z).extend({name:"v-img",directives:{intersect:n.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===(0,s.Z)(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,i){if(!p||i||this.eager){if(this.normalisedSrc.lazySrc){var s=new Image;s.src=this.normalisedSrc.lazySrc,this.pollForSize(s,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch((function(e){(0,d.Kd)("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},e.onerror=this.onError,this.hasError=!1,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),e.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,s=function s(){var n=t.naturalHeight,r=t.naturalWidth;n||r?(e.naturalWidth=r,e.calculatedAspectRatio=r/n):t.complete||!e.isLoading||e.hasError||null==i||setTimeout(s,i)};s()},genContent:function(){var t=c.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){var t=(0,a.z9)(this,"placeholder");if(t){var e=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},t)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},e):e[0]}}},render:function(t){var e=c.options.render.call(this,t),i=(0,u.ZP)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:p?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}})},6656:function(t,e,i){i.d(e,{Z:function(){return c}});var s=i(5200),n=i(4367),r=(i(9653),i(4944),i(3792),i(1539),i(3385)),o=i(7047),a=i(4589),l=i(1824),c=r.Z.extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:function(){return{isExtended:!1}},computed:{computedHeight:function(){var t=this.computedContentHeight;if(!this.isExtended)return t;var e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight:function(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes:function(){return(0,n.Z)((0,n.Z)({},r.Z.options.computed.classes.call(this)),{},{"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent})},isCollapsed:function(){return this.collapse},isProminent:function(){return this.prominent},styles:function(){return(0,n.Z)((0,n.Z)({},this.measurableStyles),{},{height:(0,a.kb)(this.computedHeight)})}},created:function(){var t=this,e=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];e.forEach((function(e){var i=(0,s.Z)(e,2),n=i[0],r=i[1];t.$attrs.hasOwnProperty(n)&&(0,l.fK)(n,r,t)}))},methods:{genBackground:function(){var t={height:(0,a.kb)(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(o.Z,{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:(0,a.kb)(this.computedContentHeight)}},(0,a.z9)(this))},genExtension:function(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:(0,a.kb)(this.extensionHeight)}},(0,a.z9)(this,"extension"))}},render:function(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;var e=[this.genContent()],i=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,i,e)}})},7921:function(t,e,i){i.d(e,{qW:function(){return r}});var s=i(6656),n=i(4589),r=(0,n.Ji)("v-toolbar__title"),o=(0,n.Ji)("v-toolbar__items");s.Z},3286:function(t,e,i){i.r(e),i.d(e,{default:function(){return G}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"base--text d-flex flex-column",staticStyle:{height:"100%"}},[i("div",[i("v-toolbar-title",{staticClass:"my-5"},[t._v("Фильтр")]),i("v-text-field",{attrs:{label:"Поиск","append-icon":"mdi-magnify",filled:"","background-color":"white",flat:"",outlined:"",clearable:"",dense:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" Метод расчета "),i("v-radio-group",{model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[i("v-radio",{attrs:{label:"Похожие города",value:"city"}}),i("v-radio",{attrs:{label:"Конкуренты",value:"competitor"}})],1),i("SelectTheme",{model:{value:t.theme,callback:function(e){t.theme=e},expression:"theme"}})],1),i("v-spacer"),i("div",[i("UploadDataset")],1)],1)},n=[],r=i(4367),o=(i(1539),i(8783),i(3948),i(629)),a={name:"regionFilters",components:{SelectTheme:function(){return Promise.all([i.e(69),i.e(451)]).then(i.bind(i,2301))},UploadDataset:function(){return i.e(589).then(i.bind(i,6589))}},computed:{search:{get:function(){return this.$store.getters["RegionPredict/getFilterSearch"]},set:function(t){this.setFilterSearch(t)}},theme:{get:function(){return this.$store.getters["RegionPredict/getFilterTheme"]},set:function(t){this.setFilterTheme(t)}},type:{get:function(){return this.$store.getters["RegionPredict/getFilterType"]},set:function(t){this.setFilterType(t)}}},methods:(0,r.Z)({},(0,o.OI)("RegionPredict",["setFilterSearch","setFilterTheme","setFilterType"]))},l=a,c=i(3736),h=i(3453),u=i.n(h),d=i(9846),p=i(3274),m=(i(8309),i(5097)),g=i(172),v=i(8230),f=i(6210),b=i(6952),S=i(7352),y=i(6286),C=i(144),Z=C.Z.extend({name:"rippleable",directives:{ripple:y.Z},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),_=i(8085),$=(i(9714),i(7327),i(4419)),x=i(3325);function k(t){t.preventDefault()}var I=(0,x.Z)(v.Z,Z,$.Z).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return t.valueComparator(i,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=v.Z.options.methods.genLabel.call(this);return t?(t.data.on={click:k},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:k},ref:"input"})},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var s=i.length;i=i.filter((function(i){return!t.valueComparator(i,e)})),i.length===s&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown:function(t){}}}),E=i(4589),z=i(6290),R=["title"],V=(0,x.Z)(f.Z,b.Z,Z,(0,S.d)("radioGroup"),_.Z),w=V.extend().extend({name:"v-radio",inheritAttrs:!1,props:{disabled:Boolean,id:String,label:String,name:String,offIcon:{type:String,default:"$radioOff"},onIcon:{type:String,default:"$radioOn"},readonly:Boolean,value:{default:null}},data:function(){return{isFocused:!1}},computed:{classes:function(){return(0,r.Z)((0,r.Z)({"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused},this.themeClasses),this.groupClasses)},computedColor:function(){return I.options.computed.computedColor.call(this)},computedIcon:function(){return this.isActive?this.onIcon:this.offIcon},computedId:function(){return v.Z.options.computed.computedId.call(this)},hasLabel:v.Z.options.computed.hasLabel,hasState:function(){return(this.radioGroup||{}).hasState},isDisabled:function(){return this.disabled||!!this.radioGroup&&this.radioGroup.isDisabled},isReadonly:function(){return this.readonly||!!this.radioGroup&&this.radioGroup.isReadonly},computedName:function(){return this.name||!this.radioGroup?this.name:this.radioGroup.name||"radio-".concat(this.radioGroup._uid)},rippleState:function(){return I.options.computed.rippleState.call(this)},validationState:function(){return(this.radioGroup||{}).validationState||this.computedColor}},methods:{genInput:function(t){return I.options.methods.genInput.call(this,"radio",t)},genLabel:function(){return this.hasLabel?this.$createElement(m.Z,{on:{click:k},attrs:{for:this.computedId},props:{color:this.validationState,focused:this.hasState}},(0,E.z9)(this,"label")||this.label):null},genRadio:function(){var t=this.attrs$,e=(t.title,(0,p.Z)(t,R));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(g.Z,this.setTextColor(this.validationState,{props:{dense:this.radioGroup&&this.radioGroup.dense}}),this.computedIcon),this.genInput((0,r.Z)({name:this.computedName,value:this.value},e)),this.genRipple(this.setTextColor(this.rippleState))])},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onChange:function(){this.isDisabled||this.isReadonly||this.isActive||this.toggle()},onKeydown:function(){}},render:function(t){var e={staticClass:"v-radio",class:this.classes,on:(0,z.bp)({click:this.onChange},this.listeners$),attrs:{title:this.attrs$.title}};return t("div",e,[this.genRadio(),this.genLabel()])}}),B=(i(9653),i(4622)),A=(0,x.Z)(B.y,v.Z),F=A.extend({name:"v-radio-group",provide:function(){return{radioGroup:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},name:String,row:Boolean,value:null},computed:{classes:function(){return(0,r.Z)((0,r.Z)({},v.Z.options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row})}},methods:{genDefaultSlot:function(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{id:this.id,role:"radiogroup","aria-labelledby":this.computedId}},v.Z.options.methods.genDefaultSlot.call(this))},genInputSlot:function(){var t=v.Z.options.methods.genInputSlot.call(this);return delete t.data.on.click,t},genLabel:function(){var t=v.Z.options.methods.genLabel.call(this);return t?(t.data.attrs.id=this.computedId,delete t.data.attrs.for,t.tag="legend",t):null},onClick:B.y.options.methods.onClick},render:function(t){var e=v.Z.options.render.call(this,t);return this._b(e.data,"div",this.attrs$),e}}),L=i(9762),W=i(314),P=i(7921),D=(0,c.Z)(l,s,n,!1,null,null,null),G=D.exports;u()(D,{VContainer:d.Z,VRadio:w,VRadioGroup:F,VSpacer:L.Z,VTextField:W.Z,VToolbarTitle:P.qW})}}]);
//# sourceMappingURL=sidebarRegionFilters-legacy.b5f4d0cf.js.map