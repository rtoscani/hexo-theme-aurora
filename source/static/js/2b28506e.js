import{d as v,V as b,u as P,w as S,r as g,W as B,s as D,q as T,X as w,y,z as A,c as f,_ as $,e as l,g as C,h as i,E as k,f as _,D as V}from"./0b587de2.js";import{P as E}from"./99e8eda1.js";import{B as I}from"./813fe50d.js";import{C as M}from"./6ece5b6c.js";import"https://unpkg.com/@waline/client@v2/dist/waline.mjs";import"./c64d91ba.js";import"./5d87a1a2.js";const N=v({name:"ARPage",components:{PageContent:E,Breadcrumbs:I,Comment:M},setup(){const e=b(),a=P(),u=S(),n=g(new B),s=D(),{t:p}=T(),o=g(),{enabledCommentPlugin:r}=w(),m=async()=>{const t=await e.fetchArticle(String(s.params.slug));n.value=t,o.value=t.title,d(a.locale)},d=t=>{const h=t??"en",c=a.themeConfig.menu.menus[String(s.params.slug)];o.value=c.i18n&&c.i18n[h]||c.name,u.setTitle(o.value)};return y(()=>a.locale,t=>{t&&d(t)}),A(m),{enabledComment:f(()=>n.value.comments&&r.value.plugin!==""),pageTitle:f(()=>o.value),pageData:n,t:p}}}),R={class:"mt-20"},q={key:0,id:"comments"};function z(e,a,u,n,s,p){const o=l("Breadcrumbs"),r=l("Comment"),m=l("PageContent");return _(),C("div",R,[i(o,{current:e.pageTitle},null,8,["current"]),i(m,{post:e.pageData,title:e.pageTitle},{default:k(()=>[e.enabledComment?(_(),C("div",q,[i(r,{title:e.pageData.title,body:e.pageData.text,uid:e.pageData.uid},null,8,["title","body","uid"])])):V("",!0)]),_:1},8,["post","title"])])}const J=$(N,[["render",z]]);export{J as default};
