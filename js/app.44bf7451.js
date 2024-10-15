(function(){"use strict";var e={5309:function(e,t,n){var o=n(5130),r=n(6768),i=n(4232);function l(e,t,n,o,l,a){const s=(0,r.g2)("navBarl"),u=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(s),(0,r.Lk)("div",{style:(0,i.Tr)(`background-color: ${e.model?" hsl(0, 0%, 98%)":"hsl(207, 26%, 17%)"}; min-height:100vh`)},[(0,r.bF)(u,{model:e.model},null,8,["model"])],4)],64)}const a={style:{cursor:"pointer",gap:"10px"},class:"d-flex align-center"};function s(e,t,n,o,l,s){const u=(0,r.g2)("v-switch"),c=(0,r.g2)("v-container");return(0,r.uX)(),(0,r.CE)("header",{style:(0,i.Tr)(` background-color:${l.model?"hsl(209, 23%, 22%)":"white"}; z-index:1000; position:absolute; width:100vw; height:100px; display:flex; align-items:center; box-shadow:${l.model?"none":"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"};`)},[(0,r.bF)(c,{style:{position:"relative"},class:"py-0"},{default:(0,r.k6)((()=>[(0,r.Lk)("nav",{class:"d-flex justify-space-between align-center w-100",style:(0,i.Tr)(" color:"+(l.model?"white":"black"))},[t[2]||(t[2]=(0,r.Lk)("li",{style:{"font-size":"22px","font-weight":"600"}},"Where In the World?",-1)),(0,r.Lk)("li",a,[(0,r.bF)(u,{modelValue:l.model,"onUpdate:modelValue":t[0]||(t[0]=e=>l.model=e),"hide-details":"",color:"primary",onClick:t[1]||(t[1]=t=>(e.toggle,s.updatesomeModel()))},null,8,["modelValue"])])],4)])),_:1})],4)}var u=n(2344),c=n(5234),d={data(){return{model:!1}},computed:{...(0,c.aH)(u.B,["model"])},methods:{...(0,c.i0)(u.B,["updateModel"]),updatesomeModel(){this.updateModel(this.model)}}},f=n(1241);const p=(0,f.A)(d,[["render",s]]);var h=p,m={components:{navBarl:h},computed:{...(0,c.aH)(u.B,["model","singleCountry"])},methods:{...(0,c.i0)(u.B,["getSingleCountry"])}};const g=(0,f.A)(m,[["render",l]]);var y=g,v=n(1387),b=(n(4114),n(9479),n.p+"img/felshaus-info.5c612aa7.gif");const k={class:"home",style:{"padding-top":"100px"}},w={key:0,style:{top:"300px",left:"50%",transform:"translateX(-50%)",position:"absolute"}},x={key:0,style:{top:"50%",left:"50%",transform:"translate(-50%)",position:"absolute"}},C=["src"];function _(e,t,n,l,a,s){const u=(0,r.g2)("v-container"),c=(0,r.g2)("v-progress-circular"),d=(0,r.g2)("v-col"),f=(0,r.g2)("v-select"),p=(0,r.g2)("v-row"),h=(0,r.g2)("v-card-title"),m=(0,r.g2)("v-card-text"),g=(0,r.g2)("v-card");return(0,r.uX)(),(0,r.CE)("div",k,[(0,r.bF)(u,null,{default:(0,r.k6)((()=>[e.searchQuery==e.filteredCountries||""==e.searchQuery||e.filteredCountries.length?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.CE)("div",w,t[4]||(t[4]=[(0,r.Lk)("img",{src:b,class:"w-100"},null,-1)])))])),_:1}),e.countries.length?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.CE)("div",x,[(0,r.bF)(c,{size:128,width:6,color:"primary",indeterminate:""})])),e.countries.length?((0,r.uX)(),(0,r.Wv)(u,{key:1},{default:(0,r.k6)((()=>[(0,r.bF)(p,{class:"justify-space-between"},{default:(0,r.k6)((()=>[(0,r.bF)(d,{cols:"12",lg:"5",md:"5",sm:"6"},{default:(0,r.k6)((()=>[(0,r.bo)((0,r.Lk)("input",{type:"text",placeholder:"Search",style:(0,i.Tr)(s.inputStyle),"onUpdate:modelValue":[t[0]||(t[0]=t=>e.searchQuery=t),t[1]||(t[1]=t=>(e.filterByName(),s.updatefilterSearch()))]},null,4),[[o.Jo,e.searchQuery]])])),_:1}),(0,r.bF)(d,{cols:"6",lg:"4",md:"5",sm:"6"},{default:(0,r.k6)((()=>[(0,r.bF)(f,{class:"mx-0",label:"Filter by your region",modelValue:e.selectedRegion,"onUpdate:modelValue":[t[2]||(t[2]=t=>e.selectedRegion=t),t[3]||(t[3]=t=>(s.updateValue(),e.filterByRegion()))],items:e.regions,variant:"solo","bg-color":""+(n.model?"white":"hsl(209, 23%, 22%)")},null,8,["modelValue","items","bg-color"])])),_:1})])),_:1})])),_:1})):(0,r.Q3)("",!0),e.countries.length?((0,r.uX)(),(0,r.Wv)(u,{key:2},{default:(0,r.k6)((()=>[(0,r.bF)(p,null,{default:(0,r.k6)((()=>[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(e.filteredCountries.slice(0,8),(t=>((0,r.uX)(),(0,r.Wv)(d,{cols:"12",sm:"6",md:"4",lg:"3",key:t.name.common},{default:(0,r.k6)((()=>[(0,r.bF)(g,{onClick:n=>e.$router.push({name:"country",params:{name:t.cca3}}),class:"mt-10",color:""+(n.model?"white":"hsl(209, 23%, 22%)")},{default:(0,r.k6)((()=>[(0,r.Lk)("img",{src:t.flags.png,alt:"",height:"175px",width:"100%"},null,8,C),(0,r.bF)(h,{class:"py-3 px-6",style:{"font-size":"16px","font-weight":"600"}},{default:(0,r.k6)((()=>[(0,r.eW)((0,i.v_)(t.name.common),1)])),_:2},1024),(0,r.bF)(m,{class:"py-0 px-6",style:{"font-size":"14px","line-height":"1.8"}},{default:(0,r.k6)((()=>[(0,r.eW)("population : "+(0,i.v_)(t.population),1)])),_:2},1024),(0,r.bF)(m,{class:"py-0 px-6",style:{"font-size":"14px","line-height":"1.8"}},{default:(0,r.k6)((()=>[(0,r.eW)("region : "+(0,i.v_)(t.region),1)])),_:2},1024),(0,r.bF)(m,{class:"py-0 px-6 pb-10",style:{"font-size":"14px","line-height":"1.8"}},{default:(0,r.k6)((()=>[(0,r.eW)("capital : "+(0,i.v_)("undefined"==`${t.capital}`.toString("")?"No Capital":`${t.capital}`.toString("")),1)])),_:2},1024)])),_:2},1032,["onClick","color"])])),_:2},1024)))),128))])),_:1})])),_:1})):(0,r.Q3)("",!0)])}var F={data:()=>({selectedRegion:"",searchQuery:""}),props:{model:{type:Boolean}},computed:{...(0,c.aH)(u.B,["regions","filteredCountries","selectedRegion","countries","model","searchQuery"]),inputStyle(){return`\n        background-color: ${this.model?"white":"hsl(209, 23%, 22%)"};\n        color: ${this.model?"hsl(209, 23%, 22%)":"white"};\n        height: 55px;\n        border-radius: 6px;\n        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),\n          0 6px 20px 0 rgba(0, 0, 0, 0.19);\n        width: 100%;\n        text-align: center;\n        outline: 0;\n      `},selectBgColor(){return this.model?"white":"hsl(209, 23%, 22%)"},selectColor(){return this.model?"hsl(209, 23%, 22%)":"white"}},methods:{...(0,c.i0)(u.B,["fetchCountries","filterByRegion","updateSomeValue","filterByName","updatefilterSearchs"]),updateValue(){this.updateSomeValue(this.selectedRegion)},updatefilterSearch(){this.updatefilterSearchs(this.searchQuery)}},async mounted(){await this.fetchCountries()}};const S=(0,f.A)(F,[["render",_],["__scopeId","data-v-6b8e3d8c"]]);var B=S;const E=[{path:"/",name:"home",component:B},{path:"/:name",name:"country",component:()=>n.e(24).then(n.bind(n,7024))}],O=(0,v.aE)({history:(0,v.LA)("/"),routes:E});var j=O,A=(n(5524),n(7768)),Q=n(1920),L=n(5741);const R=(0,A.$N)({components:Q,directives:L});(0,o.Ef)(y).use((0,c.Ey)()).use(j).use(R).mount("#app")},2344:function(e,t,n){n.d(t,{B:function(){return i}});var o=n(5234),r=n(4373);const i=(0,o.nY)("countryStore",{state:()=>({countries:[],filteredCountries:[],selectedRegion:"",searchQuery:"",model:Boolean,singleCountry:{},regions:["Antarctic","Asia","Europe","Africa","Oceania","Americas"]}),actions:{updateSomeValue(e){this.selectedRegion=e},updateModel(e){this.model=e,console.log(this.model)},updatefilterSearchs(e){this.searchQuery=e},async fetchCountries(){try{const e=await r.A.get("https://restcountries.com/v3.1/all");this.countries=e.data,this.filteredCountries=e.data}catch(e){console.error("Error fetching countries:",e)}},filterByRegion(){""===this.selectedRegion?this.filteredCountries=this.countries.slice(0,8):this.filteredCountries=this.countries.filter((e=>e.region===this.selectedRegion.slice(0,8)))},async getSingleCountry(e){try{const t=await r.A.get(`https://restcountries.com/v3.1/alpha/${e}`);this.singleCountry=t.data[0]}catch(t){console.error("Error fetching countries:",t)}},async filterByName(){this.filteredCountries=await this.countries.filter((e=>e.name.common.toLowerCase().includes(this.searchQuery.toLowerCase())))}}})}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var l=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],i=e[c][2];for(var a=!0,s=0;s<o.length;s++)(!1&i||l>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(a=!1,i<l&&(l=i));if(a){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+".39a4d5e4.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="rest-countries-api:";n.l=function(o,r,i,l){if(e[o])e[o].push(r);else{var a,s;if(void 0!==i)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+i){a=d;break}}a||(s=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+i),a.src=o),e[o]=[r];var f=function(t,n){a.onerror=a.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),s&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={524:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var l=n.p+n.u(t),a=new Error,s=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+l+")",a.name="ChunkLoadError",a.type=i,a.request=l,r[1](a)}};n.l(l,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,l=o[0],a=o[1],s=o[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(s)var c=s(n)}for(t&&t(o);u<l.length;u++)i=l[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},o=self["webpackChunkrest_countries_api"]=self["webpackChunkrest_countries_api"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(5309)}));o=n.O(o)})();
//# sourceMappingURL=app.44bf7451.js.map