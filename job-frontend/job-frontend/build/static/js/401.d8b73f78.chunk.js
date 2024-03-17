"use strict";(self.webpackChunkproject=self.webpackChunkproject||[]).push([[401],{2076:(e,t,a)=>{a.d(t,{A:()=>c});var s=a(5043);const c=(e,t,a)=>{const[c,n]=(0,s.useState)([]),[l,r]=(0,s.useState)([]);return(0,s.useEffect)((()=>{const s=((e,t)=>{const a=[],s=Math.ceil(e.length/t);for(let c=1;c<=s;c++)a.push(c);return a})(e,a);n([...s]);const c=((e,t,a)=>e.slice((t-1)*a,t*a))(e,t,a);r([...c])}),[e,n,t,r,a]),{slice:l,range:c}}},5212:(e,t,a)=>{a.d(t,{A:()=>i});var s=a(5043);const c="TableFooter_tableFooter__eQfvx",n="TableFooter_button__oVP8z",l="TableFooter_activeButton__zMapP",r="TableFooter_inactiveButton__2ARYT";var o=a(579);const i=e=>{let{range:t,setPage:a,page:i,slice:d}=e;return(0,s.useEffect)((()=>{d.length<1&&1!==i&&a(i-1)}),[d,i,a]),(0,o.jsx)("div",{className:c,children:t.map(((e,t)=>(0,o.jsx)("button",{className:"".concat(n," ").concat(i===e?l:r),onClick:()=>a(e),children:e},t)))})}},8401:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var s=a(5043),c=a(3519),n=a(1072),l=a(8602),r=a(4196),o=a(6971),i=a(7154),d=a(5212),p=a(2076),_=a(5141),h=a(1427),m=a(2933),u=a(6214),A=a(579);const b=e=>{let{setAction:t,...a}=e;const s=a.applicantItem._id,c=a.token;return(0,A.jsxs)("tr",{className:m.A.row,children:[(0,A.jsx)("td",{children:a.applicantItem.userId.name}),(0,A.jsx)("td",{children:a.applicantItem.userId.email}),(0,A.jsx)("td",{children:(0,A.jsx)("button",{className:m.A.button,onClick:()=>{i.A.get("".concat(u.U+"provider/applicants/view-resume/"+s),{headers:{Authorization:"Bearer "+c},responseType:"blob"}).then((e=>{const t=new Blob([e.data],{type:"application/pdf"}),a=URL.createObjectURL(t);window.open(a)})).catch((e=>{console.log(e)}))},children:"View Resume"})})]})};let j=[];const x=()=>{const[e,t]=(0,s.useState)(1),[a,m]=(0,s.useState)([]),[x,g]=(0,s.useState)(!0),[f,v]=(0,s.useState)(!1),{slice:N,range:w}=(0,p.A)(a,e,5),I=(0,o.g)().jobId,T=localStorage.getItem("token");(0,s.useEffect)((()=>{i.A.get("".concat(u.U+"provider/view-shortlists/"+I),{headers:{Authorization:"Bearer "+T}}).then((e=>{const t=e.data.shortlists;g(!1),j=[...t],m(t)})).catch((e=>{g(!1),console.log(e)}))}),[I,f,T]);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(c.A,{children:(0,A.jsxs)(n.A,{className:h.A.rowStyle,children:[(0,A.jsx)(l.A,{className:"".concat(h.A.manageUsers," col-md-3"),children:(0,A.jsx)("span",{className:h.A.span,children:"View Shortlists"})}),(0,A.jsx)(l.A,{className:"".concat(h.A.col," col-md-6  "),children:(0,A.jsx)(l.A,{className:"d-flex justify-content-center align-items-center",children:(0,A.jsx)("input",{type:"text",id:"search",placeholder:"Search Applicants",className:h.A.searchBar,onChange:e=>{m(j.filter((t=>t.userId.name.toLowerCase().includes(e.target.value.toLowerCase()))))}})})})]})}),a.length>0&&(0,A.jsxs)(c.A,{children:[(0,A.jsxs)("div",{className:h.A.tableBox,children:[x&&(0,A.jsx)(_.A,{}),(0,A.jsxs)(r.A,{striped:!0,hover:!0,children:[(0,A.jsx)("thead",{children:(0,A.jsxs)("tr",{className:h.A.tableHeader,children:[(0,A.jsx)("th",{children:"Username"}),(0,A.jsx)("th",{children:"Email"}),(0,A.jsx)("th",{children:"Resume"})]})}),(0,A.jsx)("tbody",{className:h.A.tableBody,children:N.map((e=>(0,A.jsx)(b,{applicantItem:e,setAction:v,token:T},e._id)))})]})]}),(0,A.jsx)(d.A,{range:w,slice:N,setPage:t,page:e})]}),0===a.length&&(0,A.jsx)("h3",{className:"text-center fw-bold",children:"No Shortlists Data!"})]})};function g(){return(0,s.useEffect)((()=>{document.title=u.l.eM}),[]),(0,A.jsx)(x,{})}},4196:(e,t,a)=>{a.d(t,{A:()=>o});var s=a(4600),c=a.n(s),n=a(5043),l=a(7852),r=a(579);const o=n.forwardRef(((e,t)=>{let{bsPrefix:a,className:s,striped:n,bordered:o,borderless:i,hover:d,size:p,variant:_,responsive:h,...m}=e;const u=(0,l.oU)(a,"table"),A=c()(s,u,_&&"".concat(u,"-").concat(_),p&&"".concat(u,"-").concat(p),n&&"".concat(u,"-striped"),o&&"".concat(u,"-bordered"),i&&"".concat(u,"-borderless"),d&&"".concat(u,"-hover")),b=(0,r.jsx)("table",{...m,className:A,ref:t});if(h){let e="".concat(u,"-responsive");return"string"===typeof h&&(e="".concat(e,"-").concat(h)),(0,r.jsx)("div",{className:e,children:b})}return b}))},2933:(e,t,a)=>{a.d(t,{A:()=>s});const s={row:"ApplicantItem_row__-r5Nf",actions:"ApplicantItem_actions__scsQb",button:"ApplicantItem_button__G-zD1",applicants:"ApplicantItem_applicants__JXFg9",shortlisted:"ApplicantItem_shortlisted__mvpFY",shortlistCandidate:"ApplicantItem_shortlistCandidate__mNp6U",rejectCandidate:"ApplicantItem_rejectCandidate__X8PHl"}},1427:(e,t,a)=>{a.d(t,{A:()=>s});const s={rowStyle:"ApplicantTab_rowStyle__Cgjmm",manageUsers:"ApplicantTab_manageUsers__yytuc",col:"ApplicantTab_col__9nDA-",input:"ApplicantTab_input__Y29Iu",span:"ApplicantTab_span__Ui33W",addUser:"ApplicantTab_addUser__U4gIH",button:"ApplicantTab_button__l0-rj",tableHeader:"ApplicantTab_tableHeader__cem0A",tableBody:"ApplicantTab_tableBody__vRhkl",tableBox:"ApplicantTab_tableBox__H0Dzz"}}}]);
//# sourceMappingURL=401.d8b73f78.chunk.js.map