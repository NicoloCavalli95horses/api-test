import{r as a,o,a as u,c,b as t,t as i}from"./index-248e7ed8.js";const r={class:"about"},_=t("h1",null,"This is the API response",-1),d={__name:"AboutView",setup(l){const s=a(null);return o(()=>{const e=new XMLHttpRequest,n="/api";e.onreadystatechange=function(){this.readyState==XMLHttpRequest.DONE&&this.status===200&&(s.value=JSON.parse(this.response))},e.open("GET",n),e.send()}),(e,n)=>(u(),c("div",r,[t("div",null,[_,t("p",null,i(s.value),1)])]))}};export{d as default};