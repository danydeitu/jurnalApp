(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{172:function(e,t,a){},173:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a.n(n),c=a(34),l=a.n(c),o=a(14),i=a(11),s=a(27),u=a(12),m=a(5),d=a(16),p=a(4).useState,b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=p(e),a=Object(i.a)(t,2),n=a[0],r=a[1],c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;r(t)},l=function(e){var t=e.target;r(Object(d.a)({},n,Object(m.a)({},t.name,t.value)))};return[n,l,c]},f=a(0),v=a.n(f),E=a(2),h=a(7),j=a(21),g=a(63),y=a(25),O=Object(g.a)({apiKey:"AIzaSyCDgO8HYKhCyq3cq0w2VtrqcAHoGOj5rjU",authDomain:"intensivo-react-2022.firebaseapp.com",projectId:"intensivo-react-2022",storageBucket:"intensivo-react-2022.appspot.com",messagingSenderId:"422030560831",appId:"1:422030560831:web:45e65621af6306dc53b28a"}),_=Object(y.f)(O),N=new j.a,k="[Auth] Login",w="[Auth] Logout",x="[UI] Set Error",C="[UI] Remove Error",S="[UI] Start Loading",I="[UI] Finish Loading",D="[Notes] New note",A="[Notes] Set active note",L="[Notes] Load notes",F="[Notes] Update note",U="[Notes] Delete note",R=function(e){return{type:x,payload:e}},q=function(){return{type:I}},G=[{code:"auth/email-already-exists",msg:"El email ya se encuentra registrado."},{code:"auth/invalid-email",msg:"El email no es v\xe1lido."},{code:"Firebase: Error (auth/wrong-password).",msg:"La contrase\xf1a es incorrecta."},{code:"Firebase: Error (auth/user-not-found).",msg:"Credenciales inv\xe1lidas"},{code:"Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).",msg:"Debido a reiterados intentos fallidos, su cuenta fue inhabilitada temporalmente. Intente m\xe1s tarde"}],P=function(e,t){return function(a){a({type:S}),Object(j.e)(Object(j.c)(),e,t).then((function(e){var t=e.user;a(T(t.uid,t.displayName)),a(q())})).catch((function(e){console.error(e.message),a(q());var t,n=Object(h.a)(G);try{for(n.s();!(t=n.n()).done;){var r=t.value;r.code===e.message&&a(R(r.msg))}}catch(c){n.e(c)}finally{n.f()}}))}},T=function(e,t){return{type:k,payload:{uid:e,displayName:t}}},z=function(){return{type:w}},B=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.ui})),a=t.loading,n=t.msgError,c=b({email:"menaericdaniel@gmail.com",password:"123123"}),l=Object(i.a)(c,2),u=l[0],m=l[1],d=u.email,p=u.password;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"auth__title"},"Iniciar sesi\xf3n"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e(P(d,p))}},n&&r.a.createElement("div",{className:"auth__alert-error"},n),r.a.createElement("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:d,onChange:m}),r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:p,onChange:m}),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block",disabled:a},"Ingresar"),r.a.createElement("div",{className:"auth__social-networks"},r.a.createElement("p",null,"Ingres\xe1 con tu red social"),r.a.createElement("div",{className:"google-btn",onClick:function(){e((function(e){Object(j.f)(Object(j.c)(),N).then((function(t){var a=t.user;e(T(a.uid,a.displayName))}))}))}},r.a.createElement("div",{className:"google-icon-wrapper"},r.a.createElement("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})),r.a.createElement("p",{className:"btn-text"},r.a.createElement("b",null,"Inici\xe1 sesi\xf3n con Google")))),r.a.createElement(s.b,{to:"/jounalApp/auth/register",className:"link"},"Cre\xe1 tu cuenta")))},H=a(64),J=a.n(H),K=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.ui})).msgError,a=b({name:"Eric",email:"menaericdaniel@gmail.com",password:"123123",password2:"123123"}),n=Object(i.a)(a,2),c=n[0],l=n[1],u=c.name,m=c.email,d=c.password,p=c.password2,f=function(){switch(!0){case 0===u.trim().length:return e(R("El nombre es requerido")),!1;case!J.a.isEmail(m):return e(R("El email es inv\xe1lido")),!1;case d.length<6:return e(R("La contrase\xf1a debe tener 6 caracteres")),!1;case d!==p:return e(R("Revise la verificaci\xf3n de la contrase\xf1a")),!1;default:return e({type:C}),!0}};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"auth__title"},"Registro"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),f()&&e(function(e,t,a){return function(n){Object(j.b)(Object(j.c)(),e,t).then(function(){var e=Object(E.a)(v.a.mark((function e(t){var r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.user,e.next=3,Object(j.h)(r,{displayName:a});case 3:n(T(r.uid,r.displayName));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return console.log(e)}))}}(m,d,u))}},t&&r.a.createElement("div",{className:"auth__alert-error"},t),r.a.createElement("input",{type:"text",placeholder:"Name",name:"name",className:"auth__input",autoComplete:"off",value:u,onChange:l}),r.a.createElement("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:m,onChange:l}),r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:d,onChange:l}),r.a.createElement("input",{type:"password",placeholder:"Confirm password",name:"password2",className:"auth__input",value:p,onChange:l}),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block mb-5"},"Registrar"),r.a.createElement(s.b,{to:"/jounalApp/auth/login",className:"link"},"\xbfEst\xe1s registrado/a?")))},V=function(){return r.a.createElement("div",{className:"auth__main"},r.a.createElement("div",{className:"auth__box-container"},r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/login",element:r.a.createElement(B,null)}),r.a.createElement(u.b,{path:"/register",element:r.a.createElement(K,null)}))))},X=a(37),Y=a.n(X),M=function(e,t){return{type:A,payload:Object(d.a)({id:e},t)}},Q=function(e){return{type:L,payload:e}},W=function(e){return function(){var t=Object(E.a)(v.a.mark((function t(a,n){var r,c;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth.uid,delete(c=Object(d.a)({},e)).id,t.prev=3,t.next=6,Object(y.g)(Object(y.d)(_,"".concat(r,"/journal/notes"),e.id),c);case 6:a(Z(e.id,e)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(3),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[3,9]])})));return function(e,a){return t.apply(this,arguments)}}()},Z=function(e,t){return{type:F,payload:{id:e,note:t}}},$=function(e){return{type:U,payload:e}},ee=a(42),te=a.n(ee),ae=(a(171),function(e){var t=e.id,a=e.title,n=e.body,c=e.date,l=e.url,i=Object(o.b)(),s=te()(c);return r.a.createElement("div",{className:"journal__entry pointer",onClick:function(){i(M(t,{title:a,body:n,date:c,url:l}))}},r.a.createElement("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(".concat(l,")")}}),r.a.createElement("div",{className:"journal__entry-body"},r.a.createElement("p",{className:"journal__entry-title"},a),r.a.createElement("p",{className:"journal__entry-content"},n)),r.a.createElement("div",{className:"journal__entry-date-box"},r.a.createElement("span",null,s.format("dddd").charAt(0).toUpperCase()+s.format("dddd").slice(1)),r.a.createElement("h4",null,s.format("D"))))}),ne=function(){var e=Object(o.c)((function(e){return e.notes})).notes;return r.a.createElement("div",{className:"journal__entries"},e.map((function(e){return r.a.createElement(ae,Object.assign({key:e.id},e))})))},re=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})).name;return r.a.createElement("aside",{className:"journal__sidebar"},r.a.createElement("div",{className:"journal__sidebar-navbar"},r.a.createElement("h3",{className:"mt-5"},r.a.createElement("i",{className:"far fa-moon"}),r.a.createElement("span",null," ",t)),r.a.createElement("button",{className:"btn",onClick:function(){e((function(e){Object(j.g)(Object(j.c)()).then((function(){e(z())})).catch((function(e){return console.log(e)}))}))}},"Salir")),r.a.createElement("div",{className:"journal__new-entry",onClick:function(){e(function(){var e=Object(E.a)(v.a.mark((function e(t,a){var n,r,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=a().auth.uid,r={title:"",body:"",date:(new Date).getTime()},e.next=5,Object(y.a)(Object(y.b)(_,"".concat(n,"/journal/notes")),r);case 5:c=e.sent,t(M(c.id,r)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,a){return e.apply(this,arguments)}}())}},r.a.createElement("i",{className:"far fa-calendar-plus fa-5x"}),r.a.createElement("p",{className:"mt-5"},"Nueva nota")),r.a.createElement(ne,null))},ce=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.notes})).active;return r.a.createElement("div",{className:"notes__appbar"},r.a.createElement("span",null,"9 de febrero 2022"),r.a.createElement("input",{type:"file",hidden:!0,onChange:function(t){var a=t.target.files[0];a&&e(function(e){return function(){var t=Object(E.a)(v.a.mark((function t(a,n){var r,c,l,o;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().notes.active,"https://api.cloudinary.com/v1_1/ericm76/upload",(c=new FormData).append("upload_preset","react-journal"),c.append("file",e),Y.a.fire({title:"Subiendo imagen...",text:"Por favor espere",allowOutsideClick:!1,didOpen:function(){Y.a.showLoading()}}),t.prev=6,t.next=9,fetch("https://api.cloudinary.com/v1_1/ericm76/upload",{method:"POST",body:c});case 9:return l=t.sent,t.next=12,l.json();case 12:o=t.sent,r.url=o.secure_url,a(W(r)),Y.a.close(),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(6),console.error(t.t0);case 21:case"end":return t.stop()}}),t,null,[[6,18]])})));return function(e,a){return t.apply(this,arguments)}}()}(a))},id:"fileSelector",name:"file"}),r.a.createElement("div",null,r.a.createElement("label",{className:"btn",htmlFor:"fileSelector"},"Subir imagen"),r.a.createElement("button",{className:"btn",onClick:function(){e(W(t)),e({type:D,payload:t})}},"Guardar")))},le=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.notes})).active,a=Object(n.useRef)(t.id),c=b(t),l=Object(i.a)(c,3),s=l[0],u=l[1],m=l[2],p=s.title,f=s.body;Object(n.useEffect)((function(){t.id!==a.current&&(m(t),a.current=t.id)}),[t,m]),Object(n.useEffect)((function(){e(M(t.id,Object(d.a)({},s)))}),[s,e,t.id]);return r.a.createElement("div",{className:"notes__main-content"},r.a.createElement(ce,null),r.a.createElement("div",{className:"notes__content"},r.a.createElement("input",{type:"text",name:"title",placeholder:"Escribe el t\xedtulo",className:"notes__title-input",autoComplete:"off",value:p,onChange:u}),r.a.createElement("textarea",{name:"body",placeholder:"\xbfQu\xe9 pas\xf3 hoy?",className:"notes__textarea",value:f,onChange:u}),t.url&&r.a.createElement("div",{className:"notes__image"},r.a.createElement("img",{src:t.url,alt:t.id})),r.a.createElement("button",{className:"btn buttons__btn-danger mt-5 pointer",onClick:function(){var a;e((a=t.id,function(){var e=Object(E.a)(v.a.mark((function e(t,n){var r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n().auth.uid,e.prev=1,e.next=4,Object(y.c)(Object(y.d)(_,"".concat(r,"/journal/notes"),a));case 4:t($(a)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,a){return e.apply(this,arguments)}}()))}},"Delete")))},oe=function(){return r.a.createElement("div",{className:"nothing__main-content"},r.a.createElement("p",null,"Selecciona algo",r.a.createElement("br",null),"para crear una nota!"),r.a.createElement("i",{className:"far fa-star fa-4x mt-5"}))},ie=function(){var e=Object(o.c)((function(e){return e.notes})).active;return r.a.createElement("div",{className:"journal__main-content"},r.a.createElement(re,null),r.a.createElement("main",null,e?r.a.createElement(le,null):r.a.createElement(oe,null)))},se=function(){var e=Object(o.b)(),t=Object(n.useState)(!0),a=Object(i.a)(t,2),c=a[0],l=a[1],m=Object(n.useState)(!1),p=Object(i.a)(m,2),b=p[0],f=p[1];return Object(n.useEffect)((function(){Object(j.d)(Object(j.c)(),(function(t){(null===t||void 0===t?void 0:t.uid)?(e(T(t.uid,t.displayName)),f(!0),e(function(){var e=Object(E.a)(v.a.mark((function e(t,a){var n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=a().auth.uid,r=[],e.next=5,Object(y.e)(Object(y.b)(_,"".concat(n,"/journal/notes")));case 5:e.sent.forEach((function(e){r.push(Object(d.a)({id:e.id},e.data()))})),t(Q(r)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,a){return e.apply(this,arguments)}}())):f(!1),l(!1)}))}),[e]),c?r.a.createElement("div",{className:"auth__main"},r.a.createElement("div",{className:"sk-fading-circle"},r.a.createElement("div",{className:"sk-circle1 sk-circle"}),r.a.createElement("div",{className:"sk-circle2 sk-circle"}),r.a.createElement("div",{className:"sk-circle3 sk-circle"}),r.a.createElement("div",{className:"sk-circle4 sk-circle"}),r.a.createElement("div",{className:"sk-circle5 sk-circle"}),r.a.createElement("div",{className:"sk-circle6 sk-circle"}),r.a.createElement("div",{className:"sk-circle7 sk-circle"}),r.a.createElement("div",{className:"sk-circle8 sk-circle"}),r.a.createElement("div",{className:"sk-circle9 sk-circle"}),r.a.createElement("div",{className:"sk-circle10 sk-circle"}),r.a.createElement("div",{className:"sk-circle11 sk-circle"}),r.a.createElement("div",{className:"sk-circle12 sk-circle"}))):r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/jounalApp/auth/*",element:b?r.a.createElement(ie,null):r.a.createElement(V,null)}),r.a.createElement(u.b,{path:"/journalApp/",element:b?r.a.createElement(ie,null):r.a.createElement("div",{className:"auth__main"},r.a.createElement("div",{className:"auth__box-container"},r.a.createElement(B,null)))}),r.a.createElement(u.b,{path:"/",element:r.a.createElement(u.a,{to:"/journalApp/"})}))))},ue=a(32),me=a(65),de=a(17),pe={notes:[],active:null},be={loading:!1,msgError:null},fe="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ue.c,ve=Object(ue.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return{uid:t.payload.uid,name:t.payload.displayName};case w:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(d.a)({},e,{msgError:t.payload});case C:return Object(d.a)({},e,{msgError:null});case S:return Object(d.a)({},e,{loading:!0});case I:return Object(d.a)({},e,{loading:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(d.a)({},e,{notes:[].concat(Object(de.a)(e.notes),[t.payload])});case A:return Object(d.a)({},e,{active:Object(d.a)({},t.payload)});case L:return Object(d.a)({},e,{notes:Object(de.a)(t.payload)});case F:return Object(d.a)({},e,{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});case U:return Object(d.a)({},e,{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload}))});default:return e}}}),Ee=Object(ue.d)(ve,fe(Object(ue.a)(me.a))),he=function(){return r.a.createElement(o.a,{store:Ee},r.a.createElement(se,null))};a(172);l.a.render(r.a.createElement(he,null),document.getElementById("root"))},67:function(e,t,a){e.exports=a(173)}},[[67,1,2]]]);
//# sourceMappingURL=main.0cc07c02.chunk.js.map