import{r as y,x as g,y as D,z as m,a as x,A as w,u as P,B as b,g as C,C as k,D as B,E as O,f as E,G as M,e as z}from"./entry.9c543a45.js";import{c as A}from"./store.0eda8526.js";const H=()=>null;function R(...o){const i=typeof o[o.length-1]=="string"?o.pop():void 0;typeof o[0]!="string"&&o.unshift(i);let[t,l,e={}]=o;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof l!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");e.server=e.server??!0,e.default=e.default??H,e.lazy=e.lazy??!1,e.immediate=e.immediate??!0;const a=w(),f=()=>a.isHydrating?a.payload.data[t]:a.static.data[t],d=()=>f()!==void 0;(!a._asyncData[t]||!e.immediate)&&(a._asyncData[t]={data:y(f()??e.default()),pending:y(!d()),error:g(a.payload._errors,t),status:y("idle")});const s={...a._asyncData[t]};s.refresh=s.execute=(n={})=>{if(a._asyncDataPromises[t]){if(n.dedupe===!1)return a._asyncDataPromises[t];a._asyncDataPromises[t].cancelled=!0}if((n._initial||a.isHydrating&&n._initial!==!1)&&d())return f();s.pending.value=!0,s.status.value="pending";const u=new Promise((r,c)=>{try{r(l(a))}catch(v){c(v)}}).then(r=>{if(u.cancelled)return a._asyncDataPromises[t];let c=r;e.transform&&(c=e.transform(r)),e.pick&&(c=S(c,e.pick)),s.data.value=c,s.error.value=null,s.status.value="success"}).catch(r=>{if(u.cancelled)return a._asyncDataPromises[t];s.error.value=r,s.data.value=P(e.default()),s.status.value="error"}).finally(()=>{u.cancelled||(s.pending.value=!1,a.payload.data[t]=s.data.value,s.error.value&&(a.payload._errors[t]=b(s.error.value)),delete a._asyncDataPromises[t])});return a._asyncDataPromises[t]=u,a._asyncDataPromises[t]};const p=()=>s.refresh({_initial:!0}),h=e.server!==!1&&a.payload.serverRendered;{const n=C();if(n&&!n._nuxtOnBeforeMountCbs){n._nuxtOnBeforeMountCbs=[];const r=n._nuxtOnBeforeMountCbs;n&&(D(()=>{r.forEach(c=>{c()}),r.splice(0,r.length)}),m(()=>r.splice(0,r.length)))}h&&a.isHydrating&&d()?(s.pending.value=!1,s.status.value=s.error.value?"error":"success"):n&&(a.payload.serverRendered&&a.isHydrating||e.lazy)&&e.immediate?n._nuxtOnBeforeMountCbs.push(p):e.immediate&&p(),e.watch&&x(e.watch,()=>s.refresh());const u=a.hook("app:data:refresh",r=>{if(!r||r.includes(t))return s.refresh()});n&&m(u)}const _=Promise.resolve(a._asyncDataPromises[t]).then(()=>s);return Object.assign(_,s),_}function S(o,i){const t={};for(const l of i)t[l]=o[l];return t}const I={__name:"default",async setup(o){let i,t;const{data:l}=([i,t]=k(()=>R("user",()=>{const e=localStorage.getItem("User");if(console.log(e),e){const a=JSON.parse(e);return console.log(a),a}})),i=await i,t(),i);return B(()=>{const e=O(l.value);A.value={...e}}),(e,a)=>(z(),E("div",null,[M(e.$slots,"default")]))}};export{I as default};