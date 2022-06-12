"use strict";(self["webpackChunkmsh22"]=self["webpackChunkmsh22"]||[]).push([[72],{3237:function(t,e,s){s.d(e,{Z:function(){return l}});var i=s(5648),n=s(1226),a=s(6505),r=s(3325),l=(0,r.Z)(n.Z,a.Z,i.Z).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...a.Z.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...i.Z.options.computed.classes.call(this)}},styles(){const t={...i.Z.options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=n.Z.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:s}=this.generateRouteLink();return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})},7118:function(t,e,s){s.d(e,{EB:function(){return o},ZB:function(){return l}});var i=s(3237),n=s(4589);const a=(0,n.Ji)("v-card__actions"),r=(0,n.Ji)("v-card__subtitle"),l=(0,n.Ji)("v-card__text"),o=(0,n.Ji)("v-card__title");i.Z},2102:function(t,e,s){s(6699),s(7273);var i=s(144),n=s(6290),a=s(4589);const r=["sm","md","lg","xl"],l=(()=>r.reduce(((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t)),{}))(),o=(()=>r.reduce(((t,e)=>(t["offset"+(0,a.jC)(e)]={type:[String,Number],default:null},t)),{}))(),c=(()=>r.reduce(((t,e)=>(t["order"+(0,a.jC)(e)]={type:[String,Number],default:null},t)),{}))(),d={col:Object.keys(l),offset:Object.keys(o),order:Object.keys(c)};function u(t,e,s){let i=t;if(null!=s&&!1!==s){if(e){const s=e.replace(t,"");i+=`-${s}`}return"col"!==t||""!==s&&!0!==s?(i+=`-${s}`,i.toLowerCase()):i.toLowerCase()}}const h=new Map;e["Z"]=i.Z.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...l,offset:{type:[String,Number],default:null},...o,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:s,children:i,parent:a}){let r="";for(const n in e)r+=String(e[n]);let l=h.get(r);if(!l){let t;for(t in l=[],d)d[t].forEach((s=>{const i=e[s],n=u(t,s,i);n&&l.push(n)}));const s=l.some((t=>t.startsWith("col-")));l.push({col:!s||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),h.set(r,l)}return t(e.tag,(0,n.ZP)(s,{class:l}),i)}})},2877:function(t,e,s){s(6699),s(7273);var i=s(144),n=s(6290),a=s(4589);const r=["sm","md","lg","xl"],l=["start","end","center"];function o(t,e){return r.reduce(((s,i)=>(s[t+(0,a.jC)(i)]=e(),s)),{})}const c=t=>[...l,"baseline","stretch"].includes(t),d=o("align",(()=>({type:String,default:null,validator:c}))),u=t=>[...l,"space-between","space-around"].includes(t),h=o("justify",(()=>({type:String,default:null,validator:u}))),g=t=>[...l,"space-between","space-around","stretch"].includes(t),p=o("alignContent",(()=>({type:String,default:null,validator:g}))),f={align:Object.keys(d),justify:Object.keys(h),alignContent:Object.keys(p)},v={align:"align",justify:"justify",alignContent:"align-content"};function m(t,e,s){let i=v[t];if(null!=s){if(e){const s=e.replace(t,"");i+=`-${s}`}return i+=`-${s}`,i.toLowerCase()}}const y=new Map;e["Z"]=i.Z.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...d,justify:{type:String,default:null,validator:u},...h,alignContent:{type:String,default:null,validator:g},...p},render(t,{props:e,data:s,children:i}){let a="";for(const n in e)a+=String(e[n]);let r=y.get(a);if(!r){let t;for(t in r=[],f)f[t].forEach((s=>{const i=e[s],n=m(t,s,i);n&&r.push(n)}));r.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),y.set(a,r)}return t(e.tag,(0,n.ZP)(s,{staticClass:"row",class:r}),i)}})},5648:function(t,e,s){var i=s(3385);e["Z"]=i.Z},6505:function(t,e,s){var i=s(144),n=s(6286),a=s(4589);e["Z"]=i.Z.extend({name:"routable",directives:{Ripple:n.Z},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactPath:Boolean,exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:()=>({isActive:!1,proxyClass:""}),computed:{classes(){const t={};return this.to||(this.activeClass&&(t[this.activeClass]=this.isActive),this.proxyClass&&(t[this.proxyClass]=this.isActive)),t},computedRipple(){var t;return null!=(t=this.ripple)?t:!this.disabled&&this.isClickable},isClickable(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink(){return this.to||this.href||this.link},styles:()=>({})},watch:{$route:"onRouteChange"},mounted(){this.onRouteChange()},methods:{generateRouteLink(){let t,e=this.exact;const s={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}],[this.to?"nativeOn":"on"]:{...this.$listeners,..."click"in this?{click:this.click}:void 0},ref:"link"};if("undefined"===typeof this.exact&&(e="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){let i=this.activeClass,n=this.exactActiveClass||i;this.proxyClass&&(i=`${i} ${this.proxyClass}`.trim(),n=`${n} ${this.proxyClass}`.trim()),t=this.nuxt?"nuxt-link":"router-link",Object.assign(s.props,{to:this.to,exact:e,exactPath:this.exactPath,activeClass:i,exactActiveClass:n,append:this.append,replace:this.replace})}else t=(this.href?"a":this.tag)||"div","a"===t&&this.href&&(s.attrs.href=this.href);return this.target&&(s.attrs.target=this.target),{tag:t,data:s}},onRouteChange(){if(!this.to||!this.$refs.link||!this.$route)return;const t=`${this.activeClass||""} ${this.proxyClass||""}`.trim(),e=`${this.exactActiveClass||""} ${this.proxyClass||""}`.trim()||t,s="_vnode.data.class."+(this.exact?e:t);this.$nextTick((()=>{!(0,a.vO)(this.$refs.link,s)===this.isActive&&this.toggle()}))},toggle(){this.isActive=!this.isActive}}})},4205:function(t,e,s){s.r(e),s.d(e,{default:function(){return b}});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pa-5"},[s("v-card",{attrs:{rounded:"lg"}},[s("v-card-text",[s("v-row",[s("v-col",{class:[t.$style["card-header"],"base--text","text-start"]},[s("h3",{staticClass:"text-h4"},[t._v(" "+t._s(t.getTitle)+" ")]),s("p",{},[t._v(" "+t._s(t.getSubtitle)+" ")])])],1),s("v-row",[s("v-col",[s("h3",{staticClass:"my-3"},[t._v("Отчет")])]),s("v-col",{attrs:{cols:"auto"}},[s("a",{staticClass:"text-decoration-none",attrs:{href:t.getExportLink}},[s("span",{staticClass:" accent--text text-decoration-underline"},[t._v("Экспортировать в Excel")]),s("v-icon",{staticClass:"accent--text ml-1",attrs:{small:""}},[t._v(" mdi-content-save-outline ")])],1)])],1),s("v-row",[s("v-col",[s("DataTable",{attrs:{page:t.page,limit:t.getLimit,pages:t.getPages,list:t.getList,columns:t.getColumns,query:t.query,filter:t.getFilter},on:{"update:page":function(e){t.page=e}}})],1)],1)],1)],1)],1)},n=[],a=s(629);class r{constructor(t="wss://msh22.remonstro.ru/ws"){this.baseWs=t,this.client=null}async connect(t){const e=t?this.baseWs+t:this.baseWs;this.client=await new Promise(((t,s)=>{const i=new WebSocket(e);i.addEventListener("open",(()=>t(i)),{once:!0}),i.addEventListener("error",(t=>s(t)),{once:!0})}))}}var l={name:"RegionPage",components:{DataTable:()=>Promise.all([s.e(69),s.e(894),s.e(40)]).then(s.bind(s,683))},data(){return{page:1,wsCilent:null}},computed:{...(0,a.Se)("RegionPredict",["getList","getColumns","getExportLink","getSubtitle","getTitle","getCount","getLimit","getPages","getFilter"]),query(){const t={p:this.page};return t}},watch:{query:{immediate:!0,deep:!0,handler(t){this.fetchData(t)}}},methods:{...(0,a.nv)("RegionPredict",["fetchList"]),async fetchData(t){await this.fetchList(t)},async connectWs(){const t=new r;await t.connect(),this.wsCilent=t.client}},created(){this.connectWs()}},o=l,c={"card-header":"region_card-header_G7sxX"},d=s(3736),u=s(3453),h=s.n(u),g=s(3237),p=s(7118),f=s(2102),v=s(6428),m=s(2877);function y(t){this["$style"]=c.locals||c}var C=(0,d.Z)(o,i,n,!1,y,null,null),b=C.exports;h()(C,{VCard:g.Z,VCardText:p.ZB,VCol:f.Z,VIcon:v.Z,VRow:m.Z})}}]);
//# sourceMappingURL=region.f154c5f4.js.map