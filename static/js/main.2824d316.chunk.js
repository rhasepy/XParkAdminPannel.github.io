(this.webpackJsonpadminkp=this.webpackJsonpadminkp||[]).push([[0],{21:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(5),c=n(8),s=n.n(c),i=n(14),o=n.n(i),r=(n(21),n(10)),u=n(15).a.initializeApp({apiKey:"AIzaSyDM6BfefxnTromSl8BmEoGCGaJllI2ivqM",authDomain:"xpark-492ae.firebaseapp.com",databaseURL:"https://xpark-492ae.firebaseio.com",projectId:"xpark-492ae",storageBucket:"xpark-492ae.appspot.com",messagingSenderId:"705611960944",appId:"1:705611960944:web:fb175c971f725b4dac5ab5",measurementId:"G-RJN23G402P"}),d=(n(25),function(e){var t=e.pw,n=e.setPw,c=e.handleLogin,s=e.pwError;return Object(a.jsx)("section",{className:"login",children:Object(a.jsxs)("div",{className:"loginContainer",children:[Object(a.jsx)("h1",{children:"X-Park Admin Pannel"}),Object(a.jsx)("label",{children:"Password"}),Object(a.jsx)("input",{type:"password",autofocus:!0,required:!0,value:t,onChange:function(e){return n(e.target.value)}}),Object(a.jsx)("p",{className:"errorMsg",children:s}),Object(a.jsx)("div",{className:"btnContainer",children:Object(a.jsx)("button",{onClick:c,children:"Sign in"})})]})})}),l=function(e){var t=e.handleLogout,n=Object(c.useState)(""),s=Object(r.a)(n,2),i=s[0],o=s[1];return Object(a.jsxs)("section",{className:"Pannel",children:[Object(a.jsxs)("nav",{children:[Object(a.jsx)("h2",{children:"Welcome to X-Park Admin Pannel"}),Object(a.jsx)("button",{onClick:t,children:"Logout"})]}),Object(a.jsxs)("div",{className:"discContainer",children:[Object(a.jsx)("label",{children:"Discount Amount"}),Object(a.jsx)("input",{type:"number",autofocus:!0,required:!0,value:i,onChange:function(e){return o(e.target.value)}}),Object(a.jsx)("button",{onClick:function(){u.database().ref("XPARK_CONSTANTS/discount").set({value:i})},children:"Send Discount"})]})]})},j=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(""),o=Object(r.a)(i,2),j=o[0],b=o[1],h=Object(c.useState)(""),p=Object(r.a)(h,2),O=p[0],f=p[1],m=Object(c.useState)(""),g=Object(r.a)(m,2),x=g[0],v=g[1],w=function(){u.auth().onAuthStateChanged((function(e){e?(b(""),s(e)):s("")}))};Object(c.useEffect)((function(){w()}),[]);return Object(a.jsx)("div",{className:"App",children:n?Object(a.jsx)(l,{handleLogout:function(){u.auth().signOut()}}):Object(a.jsx)(d,{pw:j,setPw:b,handleLogin:function(){f(""),u.database().ref("XPARK_CONSTANTS/admin_password/value").on("value",(function(e){e.val()==j?u.auth().signInWithEmailAndPassword("admin@xpark.com","admin0").catch((function(e){switch(e.code){case"auth/wrong-password":f(e.message)}})):f("Invalid Password")}),(function(e){f("The read password where from database failed: "+e.code)}))},hasAcc:x,setHasAcc:v,pwError:O})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(j,{})}),document.getElementById("root")),b()}},[[26,1,2]]]);
//# sourceMappingURL=main.2824d316.chunk.js.map