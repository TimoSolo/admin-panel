(this["webpackJsonpadmin-dashboard"]=this["webpackJsonpadmin-dashboard"]||[]).push([[0],{109:function(e,t,n){},115:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(35),c=n.n(r),o=(n(94),n(13)),i=n(32),s=n(17),l=n(36),u=n(20),j=n(33);function d(e){return e.length>10&&e.length<=15}function b(e){return 6===e.length}function h(e){return e.length>=3}function O(e,t,n,a){return!!(isFinite(n)&&Math.abs(n)<=90)&&(!!(isFinite(a)&&Math.abs(a)<=180)&&(!!h(e)&&t.length>=3))}var x=function(){localStorage.clear(),window.location.href="/"},g=n(63),p=n(55),m=n(83),f=n(84),v=n(3);var S,C,y=function(){return Object(v.jsx)(g.a,{bg:"dark",variant:"dark",children:Object(v.jsxs)(m.a,{children:[Object(v.jsx)(g.a.Brand,{href:"https://bitcoinbeach.com",children:Object(v.jsx)(f.a,{src:"/BBLogo.png",rounded:!0})}),Object(v.jsx)(p.a,{className:"mr-auto",children:Object(v.jsx)(p.a.Link,{href:"/dashboard",children:"Home"})}),Object(v.jsx)(p.a,{children:Object(v.jsx)(u.a,{onClick:x,variant:"dark",children:"Logout"})})]})})},$=(n(109),Object(s.gql)(S||(S=Object(i.a)(["\n  mutation requestPhoneCode($phone: String!) {\n    requestPhoneCode(phone: $phone) {\n      success\n    }\n  }\n"])))),k=Object(s.gql)(C||(C=Object(i.a)(["\n  mutation login($phone: String!, $otp: Int!) {\n    login(phone: $phone, code: $otp) {\n      token\n    }\n  }\n"])));function E(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),i=Object(o.a)(c,2),h=i[0],O=i[1],x=Object(a.useState)(""),g=Object(o.a)(x,2),p=g[0],m=g[1];var f=Object(s.useMutation)($,{onCompleted:function(e){e.requestPhoneCode.success;O(!0)},onError:function(e){console.error(e),alert(e.message)}}),S=Object(o.a)(f,2),C=S[0],E=S[1].loading;var D=Object(s.useMutation)(k,{onCompleted:function(e){var t=e.login.token;t||alert("Incorrect OTP"),function(e){localStorage.setItem("token",e)}(t),Object(l.navigate)("/dashboard",!0)},onError:function(e){console.error(e.message)}}),F=Object(o.a)(D,1)[0];return Object(v.jsxs)("div",{children:[Object(v.jsx)(y,{}),Object(v.jsxs)("div",{className:"Login",children:[!h&&Object(v.jsxs)(j.a,{onSubmit:function(e){e.preventDefault(),C({variables:{phone:n}})},children:[Object(v.jsx)(j.a.Group,{size:"lg",children:Object(v.jsx)(j.a.Control,{autoFocus:!0,type:"tel",placeholder:"Enter phone number",value:n,onChange:function(e){return r(e.target.value)}})}),Object(v.jsx)(u.a,{block:!0,size:"lg",type:"submit",disabled:!d(n),children:"Login"})]}),E&&Object(v.jsx)("p",{children:"Loading..."}),h&&Object(v.jsxs)(j.a,{onSubmit:function(e){e.preventDefault(),F({variables:{phone:n,otp:parseInt(p)}})},children:[Object(v.jsx)(j.a.Group,{size:"lg",children:Object(v.jsx)(j.a.Control,{autoFocus:!0,type:"number",placeholder:"Enter OTP",value:p,onChange:function(e){return m(e.target.value)}})}),Object(v.jsx)(u.a,{block:!0,size:"lg",type:"submit",disabled:!b(p),children:"Submit"})]})]})]})}var D=n(41),F=n(23);function L(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(y,{}),Object(v.jsx)(m.a,{fluid:!0,style:{marginTop:"50px"},children:Object(v.jsxs)(D.a,{className:"justify-content-md-center",children:[Object(v.jsx)(F.a,{md:"auto",children:Object(v.jsx)(u.a,{size:"lg",href:"/dashboard/userDetails",children:"User Details"})}),Object(v.jsx)(F.a,{md:"auto",children:Object(v.jsx)(u.a,{size:"lg",href:"/dashboard/addToMap",children:"Add Business To Map"})})]})})]})}var I,M=n(89),T=Object(s.gql)(I||(I=Object(i.a)(["\n  query getUserDetails($phone: String, $username: String) {\n    getUserDetails(phone: $phone, username: $username) {\n      phone\n      username\n      created_at\n      coordinate {\n        latitude\n        longitude\n      }\n      title\n    }\n  }\n"])));var P,z=function(){var e=localStorage.getItem("token"),t=Object(a.useState)(""),n=Object(o.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(""),l=Object(o.a)(i,2),b=l[0],O=l[1],x=Object(a.useState)(""),g=Object(o.a)(x,2),p=g[0],f=g[1],S=Object(s.useLazyQuery)(T,{context:{headers:{Authorization:"Bearer ".concat(e)}},onCompleted:function(e){var t=e.getUserDetails;f(t)},onError:function(e){alert(e.message),O(""),c("")}}),C=Object(o.a)(S,2),$=C[0],k=C[1].loading;return Object(v.jsxs)("div",{children:[Object(v.jsx)(y,{}),Object(v.jsxs)(m.a,{fluid:!0,children:[Object(v.jsx)("br",{}),Object(v.jsxs)(D.a,{className:"justify-content-md-center",children:[Object(v.jsx)(F.a,{md:"auto",children:Object(v.jsx)(j.a,{inline:!0,onSubmit:function(e){e.preventDefault(),$({variables:{phone:r}})},children:Object(v.jsxs)(j.a.Group,{children:[Object(v.jsx)(j.a.Control,{type:"tel",placeholder:"Enter user's phone number",value:r,onChange:function(e){return c(e.target.value)}}),Object(v.jsx)(u.a,{type:"submit",disabled:!d(r),children:"Submit"})]})})}),Object(v.jsx)(F.a,{md:"auto",children:Object(v.jsx)(j.a,{inline:!0,onSubmit:function(e){e.preventDefault(),$({variables:{username:b}})},children:Object(v.jsxs)(j.a.Group,{children:[Object(v.jsx)(j.a.Control,{placeholder:"Enter user's username",value:b,onChange:function(e){return O(e.target.value)}}),Object(v.jsx)(u.a,{type:"submit",disabled:!h(b),children:"Submit"})]})})})]}),Object(v.jsxs)(D.a,{children:[k&&Object(v.jsx)(F.a,{md:"auto",children:"Getting user details..."}),p&&Object(v.jsxs)(M.a,{bordered:!0,hover:!0,striped:!0,style:{margin:"15px"},children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"Phone"}),Object(v.jsx)("th",{children:"Username"}),Object(v.jsx)("th",{children:"Title"}),Object(v.jsx)("th",{children:"Latitude"}),Object(v.jsx)("th",{children:"Longtitude"})]})}),Object(v.jsx)("tbody",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:p.phone}),Object(v.jsx)("td",{children:p.username}),Object(v.jsx)("td",{children:p.title}),Object(v.jsx)("td",{children:p.coordinate?p.coordinate.latitude:""}),Object(v.jsx)("td",{children:p.coordinate?p.coordinate.longitude:""})]})})]})]})]})]})},q=Object(s.gql)(P||(P=Object(i.a)(["\n  mutation addToMap($username: String!, $title: String!, $latitude: Float!, $longitude: Float!) {\n    addToMap(username: $username, title: $title, latitude: $latitude, longitude: $longitude)\n  }\n"])));var w=function(){var e=localStorage.getItem("token"),t=Object(a.useState)(""),n=Object(o.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(""),l=Object(o.a)(i,2),d=l[0],b=l[1],h=Object(a.useState)(""),x=Object(o.a)(h,2),g=x[0],p=x[1],f=Object(a.useState)(""),S=Object(o.a)(f,2),C=S[0],$=S[1],k=Object(s.useMutation)(q,{context:{headers:{Authorization:"Bearer ".concat(e)}},onCompleted:function(){alert("Added successfully!"),I()},onError:function(e){alert(e.message)}}),E=Object(o.a)(k,2),L=E[0],I=(E[1].loading,function(){[p,$,b,c].forEach((function(e){return e("")}))});return Object(v.jsxs)("div",{children:[Object(v.jsx)(y,{}),Object(v.jsxs)(m.a,{fluid:!0,children:[Object(v.jsx)("br",{}),Object(v.jsx)(D.a,{className:"justify-content-md-center",children:Object(v.jsx)(F.a,{md:"auto",children:Object(v.jsx)(j.a,{onSubmit:function(e){e.preventDefault(),L({variables:{username:d,title:r,latitude:parseFloat(g),longitude:parseFloat(C)}})},children:Object(v.jsxs)(j.a.Group,{children:[Object(v.jsx)(j.a.Control,{placeholder:"Enter username",value:d,onChange:function(e){return b(e.target.value)}}),Object(v.jsx)(j.a.Control,{placeholder:"Enter title",value:r,onChange:function(e){return c(e.target.value)}}),Object(v.jsx)(j.a.Control,{placeholder:"Enter latitude",value:g,onChange:function(e){return p(e.target.value)}}),Object(v.jsx)(j.a.Control,{placeholder:"Enter longitude",value:C,onChange:function(e){return $(e.target.value)}}),Object(v.jsx)(u.a,{type:"submit",disabled:!O(d,r,g,C),children:"Submit"})]})})})})]})]})},B={"/":function(){return Object(v.jsx)(E,{})},"/dashboard*":function(){return Object(v.jsx)(G,{})}},A={"/":function(){return Object(v.jsx)(L,{})},"/userDetails":function(){return Object(v.jsx)(z,{})},"/addToMap":function(){return Object(v.jsx)(w,{})}},G=function(){var e=Object(l.useRoutes)(A);return localStorage.getItem("token")||Object(l.navigate)("/"),e};var U=function(){return Object(l.useRoutes)(B)||Object(v.jsx)(E,{})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,117)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))},R=new s.ApolloClient({uri:window.env.GRAPHQL_URI,cache:new s.InMemoryCache});c.a.render(Object(v.jsx)(s.ApolloProvider,{client:R,children:Object(v.jsx)(U,{})}),document.getElementById("root")),N()},94:function(e,t,n){}},[[115,1,2]]]);
//# sourceMappingURL=main.c705dbd4.chunk.js.map