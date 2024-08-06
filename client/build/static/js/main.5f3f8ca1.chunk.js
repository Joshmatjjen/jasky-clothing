(this["webpackJsonpjasky-clothing"]=this["webpackJsonpjasky-clothing"]||[]).push([[0],{49:function(e,t,a){e.exports=a(85)},64:function(e,t,a){},65:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(26),r=a.n(l),i=a(17),o=a(10),s=a(41),d=a(14),m=a(30),p=(a(56),a(46)),u=a(42);var E={SET_CURRENT_USER:"SET_CURRENT_USER",GOOGLE_SIGN_IN_START:"GOOGLE_SIGN_IN_START",EMAIL_SIGN_IN_START:"EMAIL_SIGN_IN_START",SIGN_IN_SUCCESS:"SIGN_IN_SUCCESS",SIGN_IN_FAILURE:"SIGN_IN_FAILURE",CHECK_USER_SESSION:"CHECK_USER_SESSION",SIGN_OUT_START:"SIGN_OUT_START",SIGN_OUT_SUCCESS:"SIGN_OUT_SUCCESS",SIGN_OUT_FAILURE:"SIGN_OUT_FAILURE",SIGN_UP_START:"SIGN_UP_START",SIGN_UP_SUCCESS:"SIGN_UP_SUCCESS",SIGN_UP_FAILURE:"SIGN_UP_FAILURE"};const h={currentUser:null,error:null};var b=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.SIGN_UP_SUCCESS:case E.SIGN_IN_SUCCESS:return{...e,currentUser:t.payload,error:null};case E.SIGN_OUT_SUCCESS:return{...e,currentUser:null,error:null};case E.SIGN_IN_FAILURE:case E.SIGN_OUT_FAILURE:case E.SIGN_UP_FAILURE:return{...e,error:t.payload};default:return e}};var g={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART",CLEAR_CART:"CLEAR_CART"};const y=(e,t)=>e.find(e=>e.id===t.id)?e.map(e=>e.id===t.id?{...e,quantity:e.quantity+1}:e):[...e,{...t,quantity:1}],S=(e,t)=>1===e.find(e=>e.id===t.id).quantity?e.filter(e=>e.id!==t.id):e.map(e=>e.id===t.id?{...e,quantity:e.quantity-1}:e),f={hidden:!0,cartItems:[]};var O=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g.TOGGLE_CART_HIDDEN:return{...e,hidden:!e.hidden};case g.ADD_ITEM:return{...e,cartItems:y(e.cartItems,t.payload)};case g.CLEAR_ITEM_FROM_CART:return{...e,cartItems:e.cartItems.filter(e=>e.id!==t.payload.id)};case g.REMOVE_ITEM:return{...e,cartItems:S(e.cartItems,t.payload)};case g.CLEAR_CART:return{...e,cartItems:[]};default:return e}};const x={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]};var _=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;return t.type,e};var v={FETCH_COLLECTIONS_START:"FETCH_COLLECTIONS_START",FETCH_COLLECTIONS_SUCCESS:"FETCH_COLLECTIONS_SUCCESS",FETCH_COLLECTIONS_FAILURE:"FETCH_COLLECTIONS_FAILURE"};const I={collections:null,isFetching:!1,errorMessage:void 0};var C=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.FETCH_COLLECTIONS_START:return{...e,isFetching:!0};case v.FETCH_COLLECTIONS_SUCCESS:return{...e,isFetching:!1,collections:t.payload};case v.FETCH_COLLECTIONS_FAILURE:return{...e,isFetching:!1,errorMessage:t.payload};default:return e}};const w={key:"root",storage:a.n(u).a,whitelist:["cart"]},N=Object(d.b)({user:b,cart:O,directory:_,shop:C});var T=Object(m.a)(w,N),j=a(6),U=a(21),R=a.n(U);a(59),a(62);R.a.initializeApp({apiKey:"AIzaSyCG6oVKoJ3GErHK-B0iNeKWOSVYkxh671c",authDomain:"j-clothing-db.firebaseapp.com",databaseURL:"https://j-clothing-db.firebaseio.com",projectId:"j-clothing-db",storageBucket:"",messagingSenderId:"587370945130",appId:"1:587370945130:web:8424c7e1afcfda11b30813",measurementId:"G-M4ZRSZPNDR"});const k=async(e,t)=>{if(!e)return;const a=G.doc("users/"+e.uid);if(!(await a.get()).exists){const{displayName:c,email:l}=e,r=new Date;try{await a.set({displayName:c,email:l,createdAt:r,...t})}catch(n){console.log("error creating user",n.message)}}return a},A=e=>e.docs.map(e=>{const{title:t,items:a}=e.data();return{routeName:encodeURI(t.toLowerCase()),id:e.id,title:t,items:a}}).reduce((e,t)=>(e[t.title.toLowerCase()]=t,e),{}),L=R.a.auth(),G=R.a.firestore(),F=new R.a.auth.GoogleAuthProvider;F.setCustomParameters({prompt:"select_account"});R.a;function*P(){yield console.log("I am fired");try{const e=G.collection("collections"),t=yield e.get(),a=yield Object(j.b)(A,t);yield Object(j.c)((e=>({type:v.FETCH_COLLECTIONS_SUCCESS,payload:e}))(a))}catch(t){yield Object(j.c)((e=t.message,{type:v.FETCH_COLLECTIONS_FAILURE,payload:e}))}var e}function*H(){yield Object(j.d)(v.FETCH_COLLECTIONS_START,P)}function*z(){yield Object(j.a)([Object(j.b)(H)])}const M=e=>({type:E.SIGN_IN_FAILURE,payload:e});function*D(e,t){try{const n=yield Object(j.b)(k,e,t),c=yield n.get();yield Object(j.c)((a={id:c.id,...c.data()},{type:E.SIGN_IN_SUCCESS,payload:a}))}catch(n){yield Object(j.c)(M(n))}var a}function*q(){try{const{user:e}=yield L.signInWithPopup(F);yield D(e)}catch(e){yield Object(j.c)(M(e))}}function $(e){let{payload:{email:t,password:a}}=e;return function*(){try{const{user:e}=yield L.signInWithEmailAndPassword(t,a);yield D(e)}catch(e){Object(j.c)(M(e))}}()}function*V(){try{const e=yield new Promise((e,t)=>{const a=L.onAuthStateChanged(t=>{a(),e(t)},t)});if(!e)return;yield D(e)}catch(e){yield Object(j.c)(M(e))}}function*K(){try{yield L.signOut(),yield Object(j.c)({type:E.SIGN_OUT_SUCCESS})}catch(e){yield Object(j.c)((e=>({type:E.SIGN_OUT_FAILURE,payload:e}))(e))}}function B(e){let{payload:{displayName:t,email:a,password:n}}=e;return function*(){try{const{user:e}=yield L.createUserWithEmailAndPassword(a,n);yield Object(j.c)((e=>{let{user:t,additionalData:a}=e;return{type:E.SIGN_UP_SUCCESS,payload:{user:t,additionalData:a}}})({user:e,additionalData:{displayName:t}}))}catch(e){yield Object(j.c)((e=>({type:E.SIGN_UP_FAILURE,payload:e}))(e))}}()}function J(e){let{payload:{user:t,additionalData:a}}=e;return function*(){yield D(t,a)}()}function*W(){yield Object(j.d)(E.GOOGLE_SIGN_IN_START,q)}function*Z(){yield Object(j.d)(E.EMAIL_SIGN_IN_START,$)}function*Q(){yield Object(j.d)(E.SIGN_OUT_START,K)}function*Y(){yield Object(j.d)(E.SIGN_UP_START,B)}function*X(){yield Object(j.d)(E.SIGN_UP_SUCCESS,J)}function*ee(){yield Object(j.a)([Object(j.b)(W),Object(j.b)(Z),Object(j.b)(V),Object(j.b)(Q),Object(j.b)(Y),Object(j.b)(X)])}const te=()=>({type:g.TOGGLE_CART_HIDDEN}),ae=e=>({type:g.ADD_ITEM,payload:e});function*ne(){yield Object(j.c)({type:g.CLEAR_CART})}function*ce(){yield Object(j.d)(E.SIGN_OUT_SUCCESS,ne)}function*le(){yield Object(j.a)([Object(j.b)(ce)])}const re=Object(p.a)(),ie=[re];const oe=Object(d.d)(T,Object(d.a)(...ie));re.run((function*(){yield Object(j.a)([Object(j.b)(z),Object(j.b)(ee),Object(j.b)(le)])}));const se=Object(m.b)(oe);a(64),a(65);var de=a(11),me=a(9);const pe=Object(me.a)([e=>e.directory],e=>e.sections);var ue=a(4);const Ee=ue.c.div`
  height: ${e=>{let{size:t}=e;return t?"380px":"240px"}};
  min-width: 30%;
  overflow: hidden;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;
  &:hover {
    cursor: pointer;
    & .background-image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    & .content {
      opacity: 0.9;
    }
  }
  &:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }
  @media screen and (max-width: 800px) {
    height: 200px;
  }
`,he=ue.c.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${e=>{let{imageUrl:t}=e;return`url(${t})`}};
`,be=ue.c.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
`,ge=ue.c.span`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`,ye=ue.c.span`
  font-weight: lighter;
  font-size: 16px;
`;var Se=Object(de.g)(e=>{let{title:t,imageUrl:a,size:n,history:l,linkUrl:r,match:i}=e;return c.a.createElement(Ee,{size:n,onClick:()=>l.push(`${i.url}${r}`)},c.a.createElement(he,{className:"background-image",imageUrl:a}),c.a.createElement(be,{className:"content"},c.a.createElement(ge,null,t.toUpperCase()),c.a.createElement(ye,null,"SHOP NOW")))});a(69);const fe=Object(me.b)({sections:pe});var Oe=Object(o.b)(fe)(e=>{let{sections:t}=e;return c.a.createElement("div",{className:"directory-menu"},t.map(e=>{let{id:t,...a}=e;return c.a.createElement(Se,Object.assign({key:t},a))}))});const xe=ue.c.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;var _e=()=>c.a.createElement(xe,null,c.a.createElement(Oe,null));const ve=e=>e.shop,Ie=Object(me.a)([ve],e=>e.collections),Ce=Object(me.a)([Ie],e=>e?Object.keys(e).map(t=>e[t]):[]),we=Object(me.a)([ve],e=>e.isFetching),Ne=Object(me.a)([ve],e=>!!e.collections),Te=ue.c.div`
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,je=ue.c.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;var Ue=e=>t=>{let{isLoading:a,...n}=t;return a?c.a.createElement(Te,null,c.a.createElement(je,null)):c.a.createElement(e,n)};a(70);const Re=ue.b`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`,ke=ue.b`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`,Ae=ue.b`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    color: white;
    border: none;
  }
`,Le=ue.c.button`
  min-width: 115px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${e=>e.isGoogleSignIn?Ae:e.inverted?ke:Re}
`;var Ge=e=>{let{children:t,...a}=e;return c.a.createElement(Le,a,t)};const Fe=ue.c.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 300px;
  align-items: center;
  position: relative;
  margin-bottom: 17px;
  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
  @media screen and (max-width: 800px) {
    height: 200px;
    width: 40vw;
    &:hover {
      .image {
        opacity: unset;
      }
      button {
        opacity: unset;
      }
    }
  }
`,Pe=Object(ue.c)(Ge)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 200px;
  display: none;
  @media screen and (max-width: 800px) {
    top: 100px;
    width: 53%;
    display: block;
    opacity: 0.7;
    font-size: 13px;
    min-width: unset;
    padding: 0 5px;
  }
`,He=ue.c.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${e=>{let{imageUrl:t}=e;return`url(${t})`}};
`,ze=ue.c.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`,Me=ue.c.span`
  width: 90%;
  margin-bottom: 35px;
`,De=ue.c.span`
  width: 10%;
  text-align: right;
`;var qe=Object(o.b)(null,e=>({addItem:t=>e(ae(t))}))(e=>{let{item:t,addItem:a}=e;const{name:n,price:l,imageUrl:r}=t;return c.a.createElement(Fe,null,c.a.createElement(He,{className:"image",imageUrl:r}),c.a.createElement(ze,null,c.a.createElement(Me,null,n),c.a.createElement(De,null,l)),c.a.createElement(Pe,{onClick:()=>a(t),inverted:!0},"Add to cart"))});const $e=ue.c.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Ve=ue.c.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`,Ke=ue.c.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  & > div {
    margin-bottom: 30px;
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`;var Be=Object(o.b)((e,t)=>{return{collection:(a=t.match.params.collectionId,Object(me.a)([Ie],e=>e?e[a]:null))(e)};var a})(e=>{let{collection:t}=e;const{title:a,items:n}=t;return c.a.createElement($e,null,c.a.createElement(Ve,null,a),c.a.createElement(Ke,null,n.map(e=>c.a.createElement(qe,{key:e.id,item:e}))))});const Je=Object(me.b)({isLoading:e=>!Ne(e)});var We=Object(d.c)(Object(o.b)(Je),Ue)(Be);a(71);const Ze=ue.c.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  @media screen and (max-width: 800px) {
    align-items: center;
  }
`,Qe=ue.c.h1`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  &:hover {
    color: grey;
  }
`,Ye=ue.c.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`;a(72);var Xe=Object(de.g)(e=>{let{title:t,items:a,history:n,match:l,routeName:r}=e;return c.a.createElement(Ze,null,c.a.createElement(Qe,{onClick:()=>n.push(`${l.path}/${r}`)},t.toUpperCase()),c.a.createElement(Ye,null,a.filter((e,t)=>t<4).map(e=>c.a.createElement(qe,{key:e.id,item:e}))))});const et=Object(me.b)({collections:Ce});var tt=Object(o.b)(et)(e=>{let{collections:t}=e;return c.a.createElement("div",{className:"collections-overview"},t.map(e=>{let{id:t,...a}=e;return c.a.createElement(Xe,Object.assign({key:t},a))}))});const at=Object(me.b)({isLoading:we});var nt=Object(d.c)(Object(o.b)(at),Ue)(tt);var ct=Object(o.b)(null,e=>({fetchCollectionsStart:()=>e({type:v.FETCH_COLLECTIONS_START})}))(e=>{let{fetchCollectionsStart:t,match:a}=e;return Object(n.useEffect)(()=>{t()},[t]),c.a.createElement("div",{className:"shop-page"},c.a.createElement(de.b,{exact:!0,path:""+a.path,component:nt}),c.a.createElement(de.b,{path:a.path+"/:collectionId",component:We}))});a(73),a(74);var lt=e=>{let{handleChange:t,label:a,...n}=e;return c.a.createElement("div",{className:"group"},c.a.createElement("input",Object.assign({className:"form-input",onChange:t},n)),a?c.a.createElement("label",{className:(n.value.length?"shrink":"")+" form-input-label"},a):null)};const rt=ue.c.div`
  width: 380px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    width: 300px;
  }
`,it=ue.c.h2`
  margin: 10px 0;
`,ot=ue.c.div`
  display: flex;
  justify-content: space-between;
`;var st=Object(o.b)(null,e=>({googleSignInStart:()=>e({type:E.GOOGLE_SIGN_IN_START}),emailSignInStart:(t,a)=>e({type:E.EMAIL_SIGN_IN_START,payload:{email:t,password:a}})}))(e=>{let{emailSignInStart:t,googleSignInStart:a}=e;const[l,r]=Object(n.useState)({email:"",password:""}),{email:i,password:o}=l,s=e=>{const{value:t,name:a}=e.target;r({...l,[a]:t})};return c.a.createElement(rt,null,c.a.createElement(it,null,"I already have an account"),c.a.createElement("span",null,"Sign in with your email and password"),c.a.createElement("form",{onSubmit:async e=>{e.preventDefault(),t(i,o)}},c.a.createElement(lt,{name:"email",type:"email",handleChange:s,value:i,label:"email",required:!0}),c.a.createElement(lt,{name:"password",type:"password",value:o,handleChange:s,label:"password",required:!0}),c.a.createElement(ot,null,c.a.createElement(Ge,{type:"submit"}," Sign in "),c.a.createElement(Ge,{type:"button",onClick:a,isGoogleSignIn:!0},"Sign in with Google"))))});const dt=ue.c.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  @media screen and (max-width: 800px) {
    width: 300px;
  }
`,mt=ue.c.h2`
  margin: 10px 0;
`;var pt=Object(o.b)(null,e=>({signUpStart:(t,a,n)=>e({type:E.SIGN_UP_START,payload:{displayName:t,email:a,password:n}})}))(e=>{let{signUpStart:t}=e;const[a,l]=Object(n.useState)({displayName:"",email:"",password:"",confirmPassword:""}),{displayName:r,email:i,password:o,confirmPassword:s}=a,d=e=>{const{name:t,value:n}=e.target;l({...a,[t]:n})};return c.a.createElement(dt,null,c.a.createElement(mt,null,"I do not have a account"),c.a.createElement("span",null,"Sign up with your email and password"),c.a.createElement("form",{className:"sign-up-form",onSubmit:async e=>{e.preventDefault(),o===s?t(r,i,o):alert("passwords don't match")}},c.a.createElement(lt,{type:"text",name:"displayName",value:r,onChange:d,label:"Display Name",required:!0}),c.a.createElement(lt,{type:"email",name:"email",value:i,onChange:d,label:"Email",required:!0}),c.a.createElement(lt,{type:"password",name:"password",value:o,onChange:d,label:"Password",required:!0}),c.a.createElement(lt,{type:"password",name:"confirmPassword",value:s,onChange:d,label:"Confirm Password",required:!0}),c.a.createElement(Ge,{type:"submit"},"SIGN UP")))});const ut=ue.c.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: unset;
    align-items: center;
    > *:first-child {
      margin-bottom: 50px;
    }
  }
`;var Et=()=>c.a.createElement(ut,null,c.a.createElement(st,null),c.a.createElement(pt,null));a(75);var ht=Object(o.b)(null,e=>({clearItem:t=>e((e=>({type:g.CLEAR_ITEM_FROM_CART,payload:e}))(t)),addItem:t=>e(ae(t)),removeItem:t=>e((e=>({type:g.REMOVE_ITEM,payload:e}))(t))}))(e=>{let{cartItem:t,clearItem:a,addItem:n,removeItem:l}=e;const{name:r,imageUrl:i,price:o,quantity:s}=t;return c.a.createElement("div",{className:"checkout-item"},c.a.createElement("div",{className:"image-container"},c.a.createElement("img",{src:i,alt:"item"})),c.a.createElement("span",{className:"name"},r),c.a.createElement("span",{className:"quantity"},c.a.createElement("div",{className:"arrow",onClick:()=>l(t)},"\u276e"),c.a.createElement("span",{className:"value"},s),c.a.createElement("div",{className:"arrow",onClick:()=>n(t)},"\u276f")),c.a.createElement("span",{className:"price"},o),c.a.createElement("div",{className:"remove-button",onClick:()=>a(t)},"\u2715"))});const bt=e=>e.cart,gt=Object(me.a)([bt],e=>e.cartItems),yt=Object(me.a)([bt],e=>e.hidden),St=Object(me.a)([gt],e=>e.reduce((e,t)=>e+t.quantity,0)),ft=Object(me.a)([gt],e=>e.reduce((e,t)=>e+t.quantity*t.price,0)),Ot=ue.c.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  button {
    margin-left: auto;
    margin-top: 50px;
  }
  @media screen and (max-width: 800px) {
    width: 90%;
  }
`,xt=ue.c.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`,_t=ue.c.div`
  text-transform: capitalize;
  width: 23%;
  &:last-child {
    width: 8%;
  }
  @media screen and (max-width: 800px) {
    width: 22%;
    &:last-child {
      width: 12%;
    }
  }
`,vt=ue.c.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`,It=ue.c.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;
`;var Ct=a(45),wt=a.n(Ct),Nt=a(87);var Tt=e=>{let{price:t}=e;const a=100*t;return c.a.createElement(wt.a,{label:"Pay Now",name:"J-Clothing Ltd.",billingAddress:!0,shippingAddress:!0,image:"https://image.flaticon.com/icons/svg/1170/1170764.svg",description:"Your total is $"+t,amount:a,panelLabel:"Pay Now",token:e=>{Object(Nt.a)({url:"payment",method:"post",data:{amount:a,token:e}}).then(e=>{alert("Payment successful")}).catch(e=>{console.log("Payment error: ",JSON.parse(e)),alert("There was an isssue with your payment. Please be sure you use the provided credit card.")})},stripeKey:"pk_test_BZfTCAZJUhyTxvx8SUJJH2UQ"})};const jt=Object(me.b)({cartItems:gt,total:ft});var Ut,Rt,kt,At,Lt,Gt,Ft,Pt,Ht,zt,Mt,Dt,qt,$t,Vt,Kt=Object(o.b)(jt)(e=>{let{cartItems:t,total:a}=e;return c.a.createElement(Ot,null,c.a.createElement(xt,null,c.a.createElement(_t,null,c.a.createElement("span",null,"Product")),c.a.createElement(_t,null,c.a.createElement("span",null,"Description")),c.a.createElement(_t,null,c.a.createElement("span",null,"Quantity")),c.a.createElement(_t,null,c.a.createElement("span",null,"Price")),c.a.createElement(_t,null,c.a.createElement("span",null,"Remove"))),t.map(e=>c.a.createElement(ht,{key:e.id,cartItem:e})),c.a.createElement(vt,null,"TOTAL: $",a),c.a.createElement(It,null,"*Please use the following test credit card for payments*",c.a.createElement("br",null),"4242 4242 4242 4242 - Exp: 01/20 - CVV: 123"),c.a.createElement(Tt,{price:a}))});function Bt(){return(Bt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)({}).hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(null,arguments)}const Jt=e=>{let{svgRef:t,title:a,...n}=e;return c.a.createElement("svg",Bt({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},n),a?c.a.createElement("title",null,a):null,c.a.createElement("g",null,c.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),c.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),c.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),c.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),c.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),Ut||(Ut=c.a.createElement("g",null)),Rt||(Rt=c.a.createElement("g",null)),kt||(kt=c.a.createElement("g",null)),At||(At=c.a.createElement("g",null)),Lt||(Lt=c.a.createElement("g",null)),Gt||(Gt=c.a.createElement("g",null)),Ft||(Ft=c.a.createElement("g",null)),Pt||(Pt=c.a.createElement("g",null)),Ht||(Ht=c.a.createElement("g",null)),zt||(zt=c.a.createElement("g",null)),Mt||(Mt=c.a.createElement("g",null)),Dt||(Dt=c.a.createElement("g",null)),qt||(qt=c.a.createElement("g",null)),$t||($t=c.a.createElement("g",null)),Vt||(Vt=c.a.createElement("g",null)))},Wt=c.a.forwardRef((e,t)=>c.a.createElement(Jt,Bt({svgRef:t},e)));a.p,a(82);const Zt=Object(me.b)({itemCount:St});var Qt=Object(o.b)(Zt,e=>({toggleCartHidden:()=>e(te())}))(e=>{let{toggleCartHidden:t,itemCount:a}=e;return c.a.createElement("div",{className:"cart-icon",onClick:t},c.a.createElement(Wt,{className:"shopping-icon"}),c.a.createElement("span",{className:"item-count"},a))});a(83);var Yt=e=>{let{item:{imageUrl:t,price:a,name:n,quantity:l}}=e;return c.a.createElement("div",{className:"cart-item"},c.a.createElement("img",{src:t,alt:"item"}),c.a.createElement("div",{className:"item-details"},c.a.createElement("span",{className:"name"},n),c.a.createElement("span",{className:"price"},l," x $",a)))};a(84);const Xt=Object(me.b)({cartItems:gt});var ea=Object(de.g)(Object(o.b)(Xt)(e=>{let{cartItems:t,history:a,dispatch:n}=e;return c.a.createElement("div",{className:"cart-dropdown"},c.a.createElement("div",{className:"cart-items"},t.length?t.map(e=>c.a.createElement(Yt,{key:e.id,item:e})):c.a.createElement("span",{className:"empty-message"},"Your cart is empty")),c.a.createElement(Ge,{onClick:()=>{a.push("/checkout"),n(te())}},"Go TO CHECKOUT"))}));const ta=Object(me.a)([e=>e.user],e=>e.currentUser);var aa,na,ca;function la(){return(la=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)({}).hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(null,arguments)}const ra=e=>{let{svgRef:t,title:a,...n}=e;return c.a.createElement("svg",la({height:"512pt",viewBox:"0 -31 512 512",width:"512pt",ref:t},n),a?c.a.createElement("title",null,a):null,aa||(aa=c.a.createElement("path",{d:"m497 60c-24.933594 0-46-20.605469-46-45 0-8.285156-6.714844-15-15-15s-15 6.714844-15 15c0 24.8125-20.1875 45-45 45-8.285156 0-15 6.714844-15 15s6.714844 15 15 15c24.8125 0 45 20.1875 45 45 0 8.285156 6.714844 15 15 15s15-6.714844 15-15c0-24.394531 21.066406-45 46-45 8.285156 0 15-6.714844 15-15s-6.714844-15-15-15zm-60.847656 30.25c-4.3125-5.78125-9.433594-10.917969-15.199219-15.25 5.765625-4.328125 10.886719-9.46875 15.199219-15.25 4.359375 5.71875 9.609375 10.90625 15.457031 15.25-5.84375 4.339844-11.09375 9.527344-15.457031 15.25zm0 0"})),na||(na=c.a.createElement("path",{d:"m483.1875 351.320312-212.1875-105.609374v-25.167969c0-6.648438 3.660156-12.691407 8.703125-14.371094 30.683594-10.210937 51.296875-38.816406 51.296875-71.171875 0-41.355469-33.644531-75-75-75s-75 33.644531-75 75c0 8.285156 6.714844 15 15 15s15-6.714844 15-15c0-24.8125 20.1875-45 45-45s45 20.1875 45 45c0 19.417969-12.367188 36.582031-30.773438 42.710938-17.480468 5.816406-29.226562 23.03125-29.226562 42.835937v25.164063l-212.210938 105.625c-17.757812 8.878906-28.789062 26.726562-28.789062 46.582031 0 28.71875 23.363281 52.082031 52.082031 52.082031h406.835938c28.769531 0 53.082031-23.261719 53.082031-52.082031 0-19.855469-11.03125-37.703125-28.8125-46.597657zm-24.269531 68.679688h-37.917969v-15c0-24.8125-20.1875-45-45-45-8.285156 0-15 6.714844-15 15s6.714844 15 15 15c8.269531 0 15 6.730469 15 15v15h-271v-15c0-8.269531 6.730469-15 15-15 8.285156 0 15-6.714844 15-15s-6.714844-15-15-15c-24.8125 0-45 20.1875-45 45v15h-37.917969c-12.175781 0-22.082031-9.90625-22.082031-22.082031 0-8.417969 4.675781-15.984375 12.183594-19.738281l213.816406-106.425782 213.792969 106.414063c7.53125 3.765625 12.207031 11.332031 12.207031 19.75 0 11.96875-10.570312 22.082031-23.082031 22.082031zm0 0"})),ca||(ca=c.a.createElement("path",{d:"m60 255c0 8.285156 6.714844 15 15 15s15-6.714844 15-15c0-24.8125 20.1875-45 45-45 8.285156 0 15-6.714844 15-15s-6.714844-15-15-15c-24.8125 0-45-20.1875-45-45 0-8.285156-6.714844-15-15-15s-15 6.714844-15 15c0 24.8125-20.1875 45-45 45-8.285156 0-15 6.714844-15 15s6.714844 15 15 15c24.8125 0 45 20.1875 45 45zm15-75.046875c4.277344 5.699219 9.351562 10.769531 15.046875 15.046875-5.695313 4.277344-10.769531 9.351562-15.046875 15.046875-4.277344-5.699219-9.351562-10.769531-15.046875-15.046875 5.695313-4.277344 10.769531-9.351562 15.046875-15.046875zm0 0"})))},ia=c.a.forwardRef((e,t)=>c.a.createElement(ra,la({svgRef:t},e)));a.p;const oa=ue.c.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`,sa=Object(ue.c)(i.b)`
  height: 100%;
  width: 70px;
  padding: 10px;

  @media screen and (max-width: 800px) {
    width: 30px;
    padding: 0;
  }
`,da=Object(ue.c)(ia)`
  height: 100%;
  width: 70px;
  padding: 10px;

  @media screen and (max-width: 800px) {
    width: 30px;
    padding: 0;
  }
`,ma=ue.c.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`,pa=Object(ue.c)(i.b)`
  padding: 10px 15px;
  cursor: pointer;
`,ua=Object(me.b)({currentUser:ta,hidden:yt});var Ea=Object(o.b)(ua,e=>({signOutStart:()=>e({type:E.SIGN_OUT_START})}))(e=>{let{currentUser:t,hidden:a,signOutStart:n}=e;return c.a.createElement(oa,null,c.a.createElement(sa,{to:"/"},c.a.createElement(da,null)),c.a.createElement(ma,null,c.a.createElement(pa,{to:"/shop"},"SHOP"),c.a.createElement(pa,{to:"/shop"},"CONTACT"),t?c.a.createElement(pa,{as:"div",onClick:n},"SIGN OUT"):c.a.createElement(pa,{to:"/signin"},"SIGN IN"),c.a.createElement(Qt,null)),a?null:c.a.createElement(ea,null))});const ha=ue.a`
    body {
      font-family: 'Open Sans Condensed';
      padding: 20px 60px;

      @media screen and (max-width: 800px) {
        padding: 5px;
      }
    }

    a {
      text-decoration: none;
      color: black;
    }

    * {
      box-sizing: border-box;
    }
`,ba=Object(me.b)({currentUser:ta});var ga=Object(o.b)(ba,e=>({checkUserSession:()=>e({type:E.CHECK_USER_SESSION})}))(e=>{let{checkUserSession:t,currentUser:a}=e;return Object(n.useEffect)(()=>{t()},[t]),c.a.createElement("div",null,c.a.createElement(ha,null),c.a.createElement(Ea,null),c.a.createElement(de.d,null,c.a.createElement(de.b,{exact:!0,path:"/",component:_e}),c.a.createElement(de.b,{path:"/shop",component:ct}),c.a.createElement(de.b,{exact:!0,path:"/checkout",component:Kt}),c.a.createElement(de.b,{path:"/signin",render:()=>a?c.a.createElement(de.a,{to:"/"}):c.a.createElement(Et,null)})))});r.a.render(c.a.createElement(o.a,{store:oe},c.a.createElement(i.a,null,c.a.createElement(s.a,{persistor:se},c.a.createElement(ga,null)))),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.5f3f8ca1.chunk.js.map