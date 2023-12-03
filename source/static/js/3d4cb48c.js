import{d as R,m as j,S as V,A as z,a2 as E,p as I,w as N,v as q,u as F,L as O,s as U,b as X,q as Y,r as T,a5 as D,X as G,y as J,c as g,a6 as K,Y as Q,_ as W,e as p,R as H,g as n,i as o,k as P,t as l,F as Z,j as x,C as L,H as M,l as tt,h as a,D as A,E as et,f as s}from"./adb4f8ee.js";import{T as ot,u as st}from"./a59df3a2.js";import{C as nt}from"./b9d80974.js";import{P as at}from"./fec285d0.js";import"https://unpkg.com/@waline/client@v2/dist/waline.mjs";const it=R({name:"ARPost",components:{Sidebar:j,Toc:ot,Comment:nt,SubTitle:V,ArticleCard:z,Profile:E,SvgIcon:I,PostStats:at},setup(){const t=N(),r=q(),h=F(),f=O(),m=U(),y=X(),{t:i}=Y(),c=T(new D),u=T(!0),d=T(),{enabledCommentPlugin:C}=G(),{initializeLightBox:w}=st(),v=async()=>{var S,$;u.value=!0,c.value=new D,window.scrollTo({top:0});let e=String(m.params.slug);e=e.indexOf(",")?e.replace(/[,]+/g,"/"):e,await r.fetchPost(e).then(B=>{c.value=B,t.setTitle(c.value.title),f.setHeaderImage(B.cover),u.value=!1}),h.hexoConfig.writing.highlight.enable&&console.warn("[Aurora Config Error]: Please turn off [Hightlightjs]."),h.hexoConfig.writing.prismjs.enable&&console.warn("[Aurora Config Error]: Please turn off [prismjs]. "),await Q(),w(),(S=d.value)==null||S.getCommentCount(),($=d.value)==null||$.getPostView()};J(()=>m.params,e=>{e.slug&&m.fullPath.indexOf("#")===-1&&v()});const b=e=>{e===""&&(e=window.location.href),window.location.href=e},_=e=>{y.push({name:"post-search",query:{tag:e}})},k=e=>{y.push({name:"post-search",query:{category:e}})};return{avatarClasses:g(()=>({"hover:opacity-50 cursor-pointer":!0,[h.themeConfig.theme.profile_shape]:!0})),isMobile:g(()=>f.isMobile),currentPath:g(()=>m.path),pluginConfigs:g(()=>h.themeConfig.plugins),enabledComment:g(()=>c.value.comments&&C.value.plugin!==""),postStatsRef:d,SvgTypes:K,commonStore:f,fetchData:v,handleAuthorClick:b,navigateToTag:_,navigateToCategory:k,loading:u,post:c,t:i}},mounted(){this.fetchData()},beforeUnmount(){this.commonStore.resetHeaderImage()}}),lt={class:"flex flex-col mt-20"},rt={class:"main-grid"},pt={class:"post-header"},ct={class:"post-labels"},ut={key:2},dt=["onClick"],ht=o("em",{class:"opacity-50"},"#",-1),mt={key:2},gt=o("b",{class:"opacity-50"},"#",-1),ft={key:0,class:"post-title text-white"},vt={class:"flex flex-row items-center justify-start mt-8 mb-4"},yt={key:0,class:"post-footer"},Ct=["alt"],wt={class:"text-white opacity-80"},bt={class:"opacity-70"},_t={key:1,class:"post-footer"},kt={class:"flex flex-row items-center"},St={class:"text-ob-dim mt-1"},Tt={class:"main-grid"},Pt=["innerHTML"],At={key:1,class:"bg-ob-deep-800 px-14 py-16 rounded-2xl shadow-xl block min-h-screen"},$t=o("br",null,null,-1),Bt=o("br",null,null,-1),Dt=o("br",null,null,-1),Ht={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols2 gap-6 mt-6"},Lt={key:0,class:"flex flex-col w-full h-full mr-0 lg:mr-4"},Mt={key:1,class:"flex flex-col w-full h-full"},Rt={key:2,id:"comments"};function jt(t,r,h,f,m,y){const i=p("ob-skeleton"),c=p("PostStats"),u=p("SubTitle"),d=p("ArticleCard"),C=p("Comment"),w=p("Profile"),v=p("Toc"),b=p("Sidebar"),_=H("lazy"),k=H("scroll-spy");return s(),n("div",lt,[o("div",rt,[o("div",pt,[o("span",ct,[t.loading?(s(),P(i,{key:0,tag:"b",height:"20px",width:"35px"})):!t.loading&&t.post.categories&&t.post.categories.length>0?(s(),n("b",{key:1,onClick:r[0]||(r[0]=e=>t.navigateToCategory(t.post.categories[0].slug))},[o("span",null,l(t.post.categories[0].name),1)])):(s(),n("b",ut,l(t.t("settings.default-category")),1)),o("ul",null,[t.loading?(s(),P(i,{key:0,count:2,tag:"li",height:"16px",width:"35px",class:"mr-2"})):!t.loading&&t.post.tags&&t.post.tags.length>0?(s(!0),n(Z,{key:1},x(t.post.tags,e=>(s(),n("li",{key:e.slug,onClick:S=>t.navigateToTag(e.slug)},[ht,L(" "+l(e.name),1)],8,dt))),128)):(s(),n("li",mt,[gt,L(" "+l(t.t("settings.default-tag")),1)]))])]),t.post.title?(s(),n("h1",ft,l(t.post.title),1)):(s(),P(i,{key:1,class:"post-title text-white uppercase",width:"100%",height:"clamp(1.2rem, calc(1rem + 3.5vw), 4rem)"})),o("div",vt,[t.post.author&&t.post.count_time.symbolsTime?(s(),n("div",yt,[M(o("img",{class:tt(t.avatarClasses),alt:`author-${t.post.author.name}`,onClick:r[1]||(r[1]=e=>t.handleAuthorClick(t.post.author.link))},null,10,Ct),[[_,t.post.author.avatar||""]]),o("span",wt,[o("strong",{class:"text-white pr-1.5 hover:opacity-50 cursor-pointer",onClick:r[2]||(r[2]=e=>t.handleAuthorClick(t.post.author.link))},l(t.post.author.name),1),o("span",bt,l(t.t("settings.shared-on"))+" "+l(t.t(t.post.date.month))+" "+l(t.post.date.day)+", "+l(t.post.date.year),1)])])):(s(),n("div",_t,[o("div",kt,[a(i,{class:"mr-2",height:"28px",width:"28px",circle:!0}),o("span",St,[a(i,{height:"20px",width:"150px"})])])])),a(c,{"post-word-count":t.post.count_time.symbolsCount,"post-time-count":t.post.count_time.symbolsTime,"post-title":t.post.title,"current-path":t.currentPath,"plugin-configs":t.pluginConfigs,comments:t.enabledComment,ref:"postStatsRef"},null,8,["post-word-count","post-time-count","post-title","current-path","plugin-configs","comments"])])])]),o("div",Tt,[o("div",null,[t.post.content?M((s(),n("div",{key:0,class:"post-html",innerHTML:t.post.content},null,8,Pt)),[[k,{sectionSelector:"h1, h2, h3, h4, h5, h6"}]]):(s(),n("div",At,[a(i,{tag:"div",count:1,height:"36px",width:"150px",class:"mb-6"}),$t,a(i,{tag:"div",count:35,height:"16px",width:"100px",class:"mr-2"}),Bt,Dt,a(i,{tag:"div",count:25,height:"16px",width:"100px",class:"mr-2"})])),o("div",Ht,[t.post.prev_post.title?(s(),n("div",Lt,[a(u,{title:"settings.paginator.prev",icon:"arrow-left-circle"}),a(d,{data:t.post.prev_post},null,8,["data"])])):A("",!0),t.post.next_post.title?(s(),n("div",Mt,[a(u,{title:"settings.paginator.next",side:t.isMobile?"left":"right",icon:"arrow-right-circle"},null,8,["side"]),a(d,{data:t.post.next_post},null,8,["data"])])):A("",!0)]),t.enabledComment&&t.post.title&&t.post.text&&t.post.uid?(s(),n("div",Rt,[a(C,{title:t.post.title,body:t.post.text,uid:t.post.uid},null,8,["title","body","uid"])])):A("",!0)]),o("div",null,[a(b,null,{default:et(()=>[a(w,{author:t.post.author.slug||""},null,8,["author"]),a(v,{toc:t.post.toc,comments:t.enabledComment},null,8,["toc","comments"])]),_:1})])])])}const qt=W(it,[["render",jt]]);export{qt as default};
