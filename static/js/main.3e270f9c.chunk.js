(this.webpackJsonpadminkp=this.webpackJsonpadminkp||[]).push([[0],{21:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a(7),r=a.n(c),u=a(14),o=a.n(u),i=(a(21),a(9)),s=a(15).a.initializeApp({apiKey:"AIzaSyDM6BfefxnTromSl8BmEoGCGaJllI2ivqM",authDomain:"xpark-492ae.firebaseapp.com",databaseURL:"https://xpark-492ae.firebaseio.com",projectId:"xpark-492ae",storageBucket:"xpark-492ae.appspot.com",messagingSenderId:"705611960944",appId:"1:705611960944:web:fb175c971f725b4dac5ab5",measurementId:"G-RJN23G402P"}),l=(a(25),function(e){var t=e.pw,a=e.setPw,c=e.handleLogin,r=e.pwError;return Object(n.jsx)("section",{className:"login",children:Object(n.jsxs)("div",{className:"loginContainer",children:[Object(n.jsx)("h1",{children:"X-Park Admin Pannel"}),Object(n.jsx)("label",{children:"Password"}),Object(n.jsx)("input",{type:"password",autofocus:!0,required:!0,value:t,onChange:function(e){return a(e.target.value)}}),Object(n.jsx)("p",{className:"errorMsg",children:r}),Object(n.jsx)("div",{className:"btnContainer",children:Object(n.jsx)("button",{onClick:c,children:"Sign in"})})]})})}),d=function(e){var t=e.handleLogout,a=Object(c.useState)(""),r=Object(i.a)(a,2),u=r[0],o=r[1],l="1000000",d=Object(c.useState)(""),j=Object(i.a)(d,2),b=j[0],p=j[1],h=Object(c.useState)(""),O=Object(i.a)(h,2),f=O[0],g=O[1],x=Object(c.useState)(""),m=Object(i.a)(x,2),v=m[0],C=m[1],S=Object(c.useState)(""),k=Object(i.a)(S,2),w=k[0],P=k[1],A=Object(c.useState)(""),y=Object(i.a)(A,2),I=y[0],N=y[1],q=Object(c.useState)(""),E=Object(i.a)(q,2),K=E[0],T=E[1],_=Object(c.useState)(""),R=Object(i.a)(_,2),L=R[0],B=R[1],F=Object(c.useState)(""),G=Object(i.a)(F,2),M=G[0],J=G[1];return Object(n.jsxs)("section",{className:"Pannel",children:[Object(n.jsxs)("nav",{children:[Object(n.jsx)("h2",{children:"X-Park Admin Paneline Ho\u015fgeldiniz"}),Object(n.jsx)("button",{onClick:t,children:"\xc7\u0131k\u0131\u015f Yap"})]}),Object(n.jsxs)("div",{className:"addCarParkContainer",children:[Object(n.jsx)("label",{children:"Otopark Ekle"}),Object(n.jsx)("input",{type:"text",autofocus:!0,required:!0,placeholder:"\u015eehir",value:f,onChange:function(e){return g(e.target.value)}}),Object(n.jsx)("input",{type:"text",autofocus:!0,required:!0,placeholder:"Semt",value:b,onChange:function(e){return p(e.target.value)}}),Object(n.jsx)("input",{type:"text",placeholder:"Otopark ismi",autofocus:!0,required:!0,value:v,onChange:function(e){return C(e.target.value)}}),Object(n.jsx)("input",{type:"text",placeholder:"Posta Kodu",autofocus:!0,required:!0,value:w,onChange:function(e){return P(e.target.value)}}),Object(n.jsx)("input",{type:"text",autofocus:!0,required:!0,placeholder:"Telefon numaras\u0131",value:I,onChange:function(e){return N(e.target.value)}}),Object(n.jsx)("input",{type:"text",autofocus:!0,required:!0,placeholder:"Enlem (Konum)",value:K,onChange:function(e){return T(e.target.value)}}),Object(n.jsx)("input",{type:"text",autofocus:!0,required:!0,placeholder:"Boylam (Konum)",value:L,onChange:function(e){return B(e.target.value)}}),Object(n.jsx)("input",{type:"number",autofocus:!0,required:!0,placeholder:"Kapasite",value:M,onChange:function(e){return J(e.target.value)}}),Object(n.jsx)("button",{onClick:function(){var e,t=w+"_"+b+"_"+f,a=l;s.database().ref("CAR_PARKS/"+t).on("value",(function(e){a=e.numChildren()+parseInt(l)}));try{e={capacity:parseInt(M),coordinates:{latitude:parseFloat(K),longitude:parseFloat(L)},freeArea:parseInt(M),generalid:w+"_"+b+"_"+f+"-"+a.toString(),id:a.toString(),name:v,phone:I,used:0},s.database().ref("CAR_PARKS/"+t+"/"+a).set(e)}catch(n){console.log(n)}console.log(e)},children:"Ekle"})]}),Object(n.jsxs)("div",{className:"discContainer",children:[Object(n.jsx)("label",{children:"\u0130ndirim Miktar\u0131"}),Object(n.jsx)("input",{type:"number",autofocus:!0,required:!0,value:u,onChange:function(e){return o(e.target.value)}}),Object(n.jsx)("button",{onClick:function(){s.database().ref("XPARK_CONSTANTS/discount").set({value:u})},children:"\u0130ndirimi Herkese G\xf6nder"})]})]})},j=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1],u=Object(c.useState)(""),o=Object(i.a)(u,2),j=o[0],b=o[1],p=Object(c.useState)(""),h=Object(i.a)(p,2),O=h[0],f=h[1],g=Object(c.useState)(""),x=Object(i.a)(g,2),m=x[0],v=x[1],C=function(){s.auth().onAuthStateChanged((function(e){e?(b(""),r(e)):r("")}))};Object(c.useEffect)((function(){C()}),[]);return Object(n.jsx)("div",{className:"App",children:a?Object(n.jsx)(d,{handleLogout:function(){s.auth().signOut()}}):Object(n.jsx)(l,{pw:j,setPw:b,handleLogin:function(){f(""),s.database().ref("XPARK_CONSTANTS/admin_password/value").on("value",(function(e){e.val()==j?s.auth().signInWithEmailAndPassword("admin@xpark.com","admin0").catch((function(e){switch(e.code){case"auth/wrong-password":f(e.message)}})):f("Invalid Password")}),(function(e){f("The read password where from database failed: "+e.code)}))},hasAcc:m,setHasAcc:v,pwError:O})})},b=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,27)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,u=t.getTTFB;a(e),n(e),c(e),r(e),u(e)}))};o.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(j,{})}),document.getElementById("root")),b()}},[[26,1,2]]]);
//# sourceMappingURL=main.3e270f9c.chunk.js.map