(window.webpackJsonpDuplom=window.webpackJsonpDuplom||[]).push([[0],{14:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(5),r=a.n(c),u=a(2),m=a.n(u),i=a(6),o=a(1),s=function(e){var t=e.bank,a=e.valute,n=t.name_type,c=t.name,r=t.street_type,u=t.street,m=t.home_number,i=t.info_worktime,s=t.filials_text,E=t.USD_in,d=t.USD_out,b=t.EUR_in,p=t.EUR_out,v=t.RUB_in,f=t.RUB_out,h=Object(o.a)(a,3),g=h[0],y=h[1],S=h[2];return l.a.createElement("div",{className:"bank-item"},l.a.createElement("div",{className:a.includes(!0)?"bank-card":"bank-card-solo"},l.a.createElement("div",null,l.a.createElement("h4",null,"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"),l.a.createElement("p",null,"\u0410\u0434\u0440\u0435\u0441:"," ","".concat(n," ").concat(c,", ").concat(r," ").concat(u,", ").concat(m)," "),l.a.createElement("p",null,"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u043d\u043e\u0435 \u043f\u043e\u0434\u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435: "," "+s)),a.includes(!0)&&l.a.createElement("div",null,l.a.createElement("h4",null,"\u041f\u043e\u043a\u0443\u043f\u043a\u0430"),g&&l.a.createElement("p",null,"\u0414\u043e\u043b\u043b\u0430\u0440 \u0421\u0428\u0410: ",E),y&&l.a.createElement("p",null,"\u0415\u0432\u0440\u043e: ",b),S&&l.a.createElement("p",null,"\u0420\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0438\u0439 \u0440\u0443\u0431\u043b\u044c(100/1): ",v)),a.includes(!0)&&l.a.createElement("div",null,l.a.createElement("h4",null,"\u041f\u0440\u043e\u0434\u0430\u0436\u0430"),g&&l.a.createElement("p",null,"\u0414\u043e\u043b\u043b\u0430\u0440 \u0421\u0428\u0410: ",d),y&&l.a.createElement("p",null,"\u0415\u0432\u0440\u043e: ",p),S&&l.a.createElement("p",null,"\u0420\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0438\u0439 \u0440\u0443\u0431\u043b\u044c(100/1): ",f))),l.a.createElement("p",null,"\u0420\u0430\u0431\u043e\u0447\u0435\u0435 \u0432\u0440\u0435\u043c\u044f: "," "+i))},E=function(e){var t=e.course,a=e.valute;return l.a.createElement("div",null,0!==t.length?t.map(function(e,t){return t<=15&&l.a.createElement(s,{key:e.filial_id,bank:e,valute:a})}):l.a.createElement("div",null,"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"))},d=(a(3),function(e){var t=e.course,a=e.isBuying,c=Object(n.useState)(),r=Object(o.a)(c,2),u=r[0],m=r[1],i=Object(n.useState)(),s=Object(o.a)(i,2),E=s[0],d=s[1],b=Object(n.useState)(),p=Object(o.a)(b,2),v=p[0],f=p[1],h=Object(n.useState)(),g=Object(o.a)(h,2),y=g[0],S=g[1];console.log(45);var _=t[0],j=_.USD_in,U=_.RUB_in,O=_.EUR_in,x=_.USD_out,k=_.RUB_out,D=_.EUR_out;console.log(a);return l.a.createElement("div",null,l.a.createElement("h4",{className:"form-h4"},"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0435\u0440"),l.a.createElement("form",{className:"form-calculator"},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"byn"}," USD"),l.a.createElement("input",{type:"text",name:"byn",defaultValue:u,onChange:function(e){"buying"===a?(f((j*e.target.value).toFixed(4)),m(e.target.value),d((U*e.target.value).toFixed(4)),S((O*e.target.value).toFixed(4))):"selling"===a&&(f((x*e.target.value).toFixed(4)),m(e.target.value),d((k*e.target.value).toFixed(4)),S((D*e.target.value).toFixed(4)))}})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"usd"},"BYN "),l.a.createElement("input",{type:"text",name:"usd",defaultValue:v,disabled:!0})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"eur"},"EUR "),l.a.createElement("input",{type:"text",name:"eur",defaultValue:E,disabled:!0})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"rub"},"RUB "),l.a.createElement("input",{type:"text",name:"rub",defaultValue:y,disabled:!0}))))});function b(e){return[].slice.call(e).sort(function(e,t){return e.USD_in<t.USD_in?1:e.USD_in>t.USD_in?-1:0})}function p(e){return[].slice.call(e).sort(function(e,t){return e.USD_out<t.USD_out?-1:e.USD_out>t.USD_out?1:0})}var v=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),u=Object(o.a)(r,2),s=u[0],v=u[1],f=Object(n.useState)(!1),h=Object(o.a)(f,2),g=h[0],y=h[1],S=Object(n.useState)(!1),_=Object(o.a)(S,2),j=_[0],U=_[1],O=Object(n.useState)(!1),x=Object(o.a)(O,2),k=x[0],D=x[1],F=Object(n.useState)("buying"),N=Object(o.a)(F,2),w=N[0],R=N[1],B=function(){var e=Object(i.a)(m.a.mark(function e(t){var a,n,l;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://cors-anywhere.herokuapp.com/"+"https://belarusbank.by/api/kursExchange?city=".concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,l=b(n),v(l);case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return l.a.createElement("div",{className:"container"},l.a.createElement("div",null,l.a.createElement("div",{className:"form"},l.a.createElement("h2",null,"\u041f\u043e\u0438\u0441\u043a"),l.a.createElement("form",{className:"form-group",onSubmit:function(e){e.preventDefault(),B(a)}},l.a.createElement("div",null,l.a.createElement("input",{type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434...",onChange:function(e){c(e.target.value)}})),l.a.createElement("div",{className:"checkboxes"},l.a.createElement("div",null,l.a.createElement("input",{type:"checkbox",name:"usd",onChange:function(e){y(e.target.checked)}}),l.a.createElement("label",{htmlFor:"usd"},"\u0414\u043e\u043b\u043b\u0430\u0440 \u0421\u0428\u0410")),l.a.createElement("div",null,l.a.createElement("input",{type:"checkbox",name:"eur",onChange:function(e){U(e.target.checked)}}),l.a.createElement("label",{htmlFor:"eur"},"\u0415\u0432\u0440\u043e")),l.a.createElement("div",null,l.a.createElement("input",{type:"checkbox",name:"rub",onChange:function(e){D(e.target.checked)}}),l.a.createElement("label",{htmlFor:"rub"},"\u0420\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0438\u0439 \u0440\u0443\u0431\u043b\u044c"))),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"isSelected"},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e "),l.a.createElement("select",{onChange:function(e){R(e.target.value)},name:"isSelected",class:"select"},l.a.createElement("option",{value:"selling"},"\u041f\u043e\u043a\u0443\u043f\u043a\u0430"),l.a.createElement("option",{value:"buying"},"\u041f\u0440\u043e\u0434\u0430\u0436\u0430"))),l.a.createElement("div",null,l.a.createElement("input",{type:"submit",value:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c"})))),""!==s&&l.a.createElement(d,{course:"buying"===w?s:p(s),isBuying:w})),l.a.createElement("div",null,""!==s&&l.a.createElement(E,{course:"buying"===w?s:p(s),valute:[g,j,k]})))},f=function(){return l.a.createElement(n.Fragment,null,l.a.createElement(v,null))},h=function(){return l.a.createElement("div",{className:"navbar"},l.a.createElement("h2",null,"\u041b\u0443\u0447\u0448\u0438\u0439 \u043a\u0443\u0440\u0441 \u043f\u043e \u0433\u043e\u0440\u043e\u0434\u0443!"))};var g=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(h,null),l.a.createElement(f,null))};r.a.render(l.a.createElement(g,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.63da5e1a.chunk.js.map