import{_}from"./D1uN9Tv-.js";import{s as c,C as g,c as a,h as o,D as n,g as p,t as d,w as h,B as f,e as i,A as y}from"./DWBMrKK0.js";import{u as k}from"./0Y_4ry9n.js";import{q as x}from"./CG0AhxQm.js";import{u as w}from"./C-rBqxo6.js";import"./ORZ7fmWo.js";const A={class:"min-h-screen"},C={class:"prose dark:prose-invert prose-blockquote:not-italic prose-pre:bg-gray-900 prose-img:ring-1 prose-img:ring-gray-200 dark:prose-img:ring-white/10 prose-img:rounded-lg"},v={key:0},N={key:1,class:"empty-page"},R={__name:"[slug]",async setup(b){let t,l;const s=c(),{data:r}=([t,l]=g(()=>k(s.path,()=>x("articles").where("path","==",s.path).first(),"$h0WXI68A9u")),t=await t,l(),t);return w({ogImage:()=>`undefined/api/og-image?slug=${s.params.slug}`,twitterCard:"summary_large_image",articleAuthor:"Abdullahi Odesanmi"}),(B,e)=>{const u=_,m=f;return i(),a("main",A,[o("div",C,[n(r)?(i(),a("article",v,[o("h1",null,d(n(r).title),1),p(u,{value:n(r)},null,8,["value"])])):(i(),a("div",N,[e[1]||(e[1]=o("h1",null,"Page Not Found",-1)),e[2]||(e[2]=o("p",null,"Oops! The content you're looking for doesn't exist.",-1)),p(m,{to:"/"},{default:h(()=>e[0]||(e[0]=[y("Go back home")])),_:1})]))])])}}};export{R as default};
