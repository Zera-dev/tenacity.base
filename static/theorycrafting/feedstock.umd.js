(function(e,n){typeof exports=="object"&&typeof module!="undefined"?n(require("vue")):typeof define=="function"&&define.amd?define(["vue"],n):(e=typeof globalThis!="undefined"?globalThis:e||self,n(e.Vue))})(this,function(e){"use strict";var n=(t,o)=>{const s=t.__vccOpts||t;for(const[i,f]of o)s[i]=f;return s};const r=e.defineComponent({setup:()=>({likes:e.ref(0)})});function p(t,o,s,i,f,c){return e.openBlock(),e.createElementBlock("button",{onClick:o[0]||(o[0]=u=>t.likes++)},"Likes: "+e.toDisplayString(t.likes),1)}var l=n(r,[["render",p]]);const d=e.defineCustomElement(l);customElements.define("feedstock-example",d)});