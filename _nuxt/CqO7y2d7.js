import{I as o,e as c,w as l,h as t,A as d,t as r,B as m}from"./_Di-9eBm.js";const u={class:"relative z-10 order-first mb-3 flex items-center text-sm text-gray-400 dark:text-gray-500 pl-3.5",datetime:"2022-09-05"},x={class:"text-base font-semibold font-display tracking-tight text-gray-800 dark:text-gray-100 group-hover:text-primary-600"},g={class:"relative z-10 mt-2 text-sm text-gray-600 dark:text-gray-400"},y={__name:"ArticleCard",props:{article:{type:Object,required:!0}},setup(e){const i=s=>new Date(s).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"});return(s,a)=>{const n=m;return c(),o(n,{to:e.article._path,class:"group"},{default:l(()=>[t("article",null,[t("time",u,[a[0]||(a[0]=t("span",{class:"absolute inset-y-0 left-0 flex items-center","aria-hidden":"true"},[t("span",{class:"h-4 w-0.5 rounded-full bg-gray-200 dark:bg-gray-500"})],-1)),d(" "+r(i(e.article.published)),1)]),t("h2",x,r(e.article.title),1),t("p",g,r(e.article.description),1)])]),_:1},8,["to"])}}};export{y as _};
