import{d as P,V as S,u as y,w as B,r as d,W as k,s as D,q as T,X as w,y as A,z as $,c as g,_ as V,e as c,g as f,h as l,E,f as C,D as M}from"./6bc39578.js";import{P as N}from"./2b1d63ca.js";import{B as O}from"./3e887277.js";import{C as R}from"./cacd27f7.js";import"https://unpkg.com/@waline/client@v2/dist/waline.mjs";import"./ac48a44b.js";import"./ebaef1c5.js";const j=P({name:"ARPage",components:{PageContent:N,Breadcrumbs:O,Comment:R},setup(){const t=S(),s=y(),u=B(),r=d(new k),a=D(),{t:p}=T(),n=d(),{enabledCommentPlugin:i}=w(),m=async()=>{const o=await t.fetchArticle(String(a.params.slug));r.value=o,n.value=o.title,_(s.locale)},_=o=>{const h=o??"en";let e=s.themeConfig.menu.menus[String(a.params.slug)];if(!e){for(const[W,b]of Object.entries(s.themeConfig.menu.menus))if(e=b.children.find(v=>v.key==a.params.slug),e)break}n.value=(e==null?void 0:e.i18n)&&e.i18n[h]||(e==null?void 0:e.name),u.setTitle(n.value)};return A(()=>a.params,o=>{o.slug&&a.fullPath.indexOf("#")===-1&&m()}),$(m),{enabledComment:g(()=>r.value.comments&&i.value.plugin!==""),pageTitle:g(()=>n.value),pageData:r,t:p}}}),q={class:"mt-20"},z={key:0,id:"comments"};function L(t,s,u,r,a,p){const n=c("Breadcrumbs"),i=c("Comment"),m=c("PageContent");return C(),f("div",q,[l(n,{current:t.pageTitle},null,8,["current"]),l(m,{post:t.pageData,title:t.pageTitle},{default:E(()=>[t.enabledComment?(C(),f("div",z,[l(i,{title:t.pageData.title,body:t.pageData.text,uid:t.pageData.uid},null,8,["title","body","uid"])])):M("",!0)]),_:1},8,["post","title"])])}const U=V(j,[["render",L]]);export{U as default};
