import{d as i,L as u,V as l,r as d,W as f,q as g,N as _,o as B,B as C,O as b,_ as h,e as c,g as A,h as m,f as P}from"./0b587de2.js";import{P as T}from"./99e8eda1.js";import{B as v}from"./813fe50d.js";import"https://unpkg.com/@waline/client@v2/dist/waline.mjs";import"./c64d91ba.js";import"./5d87a1a2.js";const S=i({name:"ARAbout",components:{PageContent:T,Breadcrumbs:v},setup(){const e=u(),o=l(),t=d(new f),{t:a}=g(),{pageTitle:n,updateTitle:s}=_();return B(async()=>{t.value=await o.fetchArticle("about"),e.setHeaderImage(b),s()}),C(()=>{e.resetHeaderImage()}),{pageTitle:n,pageData:t,t:a}}}),$={class:"mt-20"};function I(e,o,t,a,n,s){const r=c("Breadcrumbs"),p=c("PageContent");return P(),A("div",$,[m(r,{current:e.pageTitle},null,8,["current"]),m(p,{post:e.pageData,title:e.pageTitle},null,8,["post","title"])])}const q=h(S,[["render",I]]);export{q as default};
