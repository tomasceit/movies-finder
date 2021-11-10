(this["webpackJsonpmovies-page"]=this["webpackJsonpmovies-page"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){},110:function(e,t,n){},111:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(33),i=n.n(c),o=(n(97),n(18)),s=n(13),l=n(161),j=n(86),b=Object(j.a)({palette:{type:"light",primary:{main:"#9147ff",dark:"#3e065f",light:"#bf94ff"},secondary:{main:"#bf0b83",dark:"#970b79"}},typography:{fontFamily:["IBM Plex Sans",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")}}),d=(n(100),n(9)),p=n(3),u=(n(101),n(7)),m=n(112),h=n(162),x=n(82),g=n.n(x),O=n(152),f=n(1),v=Object(u.a)("div")((function(e){var t=e.theme;return Object(p.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(m.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(m.a)(t.palette.common.white,.25)},marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(1),width:"auto"})})),y=Object(u.a)(O.a)((function(e){var t,n=e.theme;return{color:"inherit","& .MuiInputBase-input":(t={padding:n.spacing(1,1,1,1),transition:n.transitions.create("width"),width:"100%"},Object(p.a)(t,n.breakpoints.up("sm"),{width:"10ch","&:focus":{width:"20ch"}}),Object(p.a)(t,n.breakpoints.down("sm"),{width:"4ch","&:focus":{width:"10ch"}}),t)}})),w=function(){var e=a.useState(""),t=Object(d.a)(e,2),n=t[0],r=t[1],c=Object(s.f)(),i=a.useState(!1),o=Object(d.a)(i,2),l=o[0],j=o[1];return Object(f.jsxs)("div",{children:[Object(f.jsxs)(v,{sx:{border:l&&"1px solid #d32f2f",marginTop:l&&"12px"},children:[Object(f.jsx)(h.a,{onClick:function(){""!==n?c("/search/".concat(n)):(j(!0),setTimeout((function(){j(!1)}),5e3))},sx:{color:"white"},children:Object(f.jsx)(g.a,{})}),Object(f.jsx)(y,{placeholder:"Search\u2026",inputProps:{"aria-label":"search"},onChange:function(e){r(e.target.value)}})]}),l&&Object(f.jsx)("p",{style:{fontSize:"0.8rem",fontStyle:"oblique",color:"#d32f2f",margin:"0.2rem"},children:"El campo de busqueda esta vac\xedo"})]})},N=n(163),S=n(165),_=n(166),C=n(149),k=n(167),z=n(83),I=n.n(z),T=function(){return Object(f.jsx)(N.a,{position:"absolute",sx:{backgroundColor:"#18181b"},children:Object(f.jsxs)(S.a,{className:"navbar",children:[Object(f.jsx)(o.b,{to:"/home",children:Object(f.jsxs)(h.a,{size:"large",edge:"start",color:"inherit","aria-label":"open drawer",sx:{mr:2},children:[Object(f.jsx)(I.a,{color:"primary",fontSize:"large",sx:{marginRight:"0.5rem"}}),Object(f.jsx)(_.a,{className:"title",variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1,display:{xs:"none",sm:"block"}},children:"MoviesFinder"})]})}),Object(f.jsxs)(C.a,{direction:"row",spacing:2,children:[Object(f.jsx)(k.a,{variant:"contained",sx:{fontSize:"1rem",minWidth:"110px"},disableElevation:!0,children:"Log In"}),Object(f.jsx)(o.b,{to:"/films",children:Object(f.jsx)(k.a,{variant:"films",sx:{fontSize:"1rem"},children:"Films"})}),Object(f.jsx)(w,{})]})]})})},M=(n(105),function(){return Object(f.jsx)("footer",{id:"footer",children:"Footer"})}),E=n(32),W=(n(106),n(107),n(168)),F=n(169),P=n(170),R=Object(u.a)("div")((function(e){var t=e.theme;return Object(p.a)({position:"relative",margin:"1rem",width:"300px !important",borderRadius:"5px",border:"0.3px solid transparent",overflow:"hidden",backgroundColor:Object(m.a)(t.palette.common.white,.05),"&:hover":{backgroundColor:Object(m.a)(t.palette.common.white,.1),border:"0.3px solid ".concat(t.palette.primary.light)}},t.breakpoints.up("sm"),{marginLeft:t.spacing(1),width:"auto"})})),B=function(e){var t=e.id,n=e.title,a=e.img,r=e.rating,c=e.overview;return Object(f.jsxs)(R,{children:[Object(f.jsxs)("div",{className:"card-image",children:[Object(f.jsx)("img",{src:a,alt:n}),Object(f.jsxs)("div",{className:"movie-description",children:[Object(f.jsx)("h3",{style:{paddingTop:"0.7rem"},children:"Descripci\xf3n:"}),Object(f.jsx)("p",{children:c})]})]}),Object(f.jsx)(o.b,{to:"/films/".concat(t),children:Object(f.jsx)(W.a,{children:Object(f.jsxs)("div",{className:"card-content",children:[Object(f.jsx)("h3",{className:"card-title",children:n}),Object(f.jsxs)("div",{style:{display:"flex"},children:[Object(f.jsx)(F.a,{variant:"determinate",value:10*r,color:r>=7?"success":r>=5?"warning":"error"}),Object(f.jsx)(P.a,{className:"rating-number",sx:{top:0,left:"77%",bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(f.jsx)(_.a,{variant:"caption",component:"div",color:"",children:"".concat(10*r,"%")})})]})]})})})]})},L=(n(108),function(){return Object(f.jsx)("div",{className:"loading",children:Object(f.jsxs)("div",{className:"lds-roller",children:[Object(f.jsx)("div",{}),Object(f.jsx)("div",{}),Object(f.jsx)("div",{}),Object(f.jsx)("div",{}),Object(f.jsx)("div",{}),Object(f.jsx)("div",{}),Object(f.jsx)("div",{}),Object(f.jsx)("div",{})]})})}),q=function(e){var t=e.sort,n=e.pageNumber,r=a.useState(!0),c=Object(d.a)(r,2),i=c[0],o=c[1],s=a.useState([]),l=Object(d.a)(s,2),j=l[0],b=l[1];return a.useEffect((function(){o(!0),fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat("392eca317dc0880c7fc434bb6bb210a6","&language=es&page=").concat(n)).then((function(e){return e.json()})).then((function(e){return b(e)})).catch((function(e){return console.error(e)})).finally((function(){return setTimeout((function(){o(!1)}),100)}))}),[t,n]),i?Object(f.jsx)(L,{}):Object(f.jsx)("section",{className:"cards-container",children:j.results.map((function(e,t){return Object(f.jsx)(B,{id:e.id,title:e.original_title,img:null===e.poster_path?"https://images.pngnice.com/download/2007/Movie-PNG-Transparent-Image.png":"https://image.tmdb.org/t/p/w500".concat(e.poster_path),rating:e.vote_average,overview:""!==e.overview?e.overview:"No hay descripcion disponible para esta pel\xedcula"},t)}))})},G=n(159),U=n(154),A=n(171),J=n(151),D=n(158),H=n(157),K=n(84),Q=n.n(K),V=Object(u.a)(A.a)((function(e){var t=e.theme;return{color:"white",border:"1px solid ".concat(Object(m.a)(t.palette.primary.light,.1)),minWidth:"130px"}})),X=Object(u.a)((function(e){return Object(f.jsx)(J.a,Object(E.a)({elevation:0,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"}},e))}))((function(e){var t=e.theme;return{"& .MuiPaper-root":{borderRadius:6,marginTop:t.spacing(1),minWidth:180,color:"primary",boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px","& .MuiMenu-list":{padding:"4px 0"},"& .MuiMenuItem-root":{"& .MuiSvgIcon-root":{fontSize:18,color:t.palette.text.secondary,marginRight:t.spacing(1.5)},"&:active":{backgroundColor:Object(m.a)(t.palette.primary.main,t.palette.action.selectedOpacity)}}}}})),Y=function(e){var t=e.sort,n=void 0===t?"popular":t,r=a.useState({}),c=Object(d.a)(r,2),i=c[0],o=c[1],l=a.useState(!1),j=Object(d.a)(l,2),b=j[0],p=j[1];a.useEffect((function(){p(!1),fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat("392eca317dc0880c7fc434bb6bb210a6","&language=es")).then((function(e){return e.json()})).then((function(e){return o(e)})).catch((function(e){return console.error(e)})).finally((function(){return p(!0)}))}),[]);var u=Object(s.f)(),m=a.useState(n),h=Object(d.a)(m,2),x=h[0],g=h[1],O=a.useState(null),v=Object(d.a)(O,2),y=v[0],w=v[1],N=Boolean(y),S=function(e,t){w(null),u("/genres/".concat(e,"/").concat(t,"/page=1"))};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(D.a,{elevation:2,color:"primary",value:x,exclusive:!0,onChange:function(e,t){g(t),"genres"!==t&&null!==t&&u("/".concat(t,"/page/1"))},size:"large",sx:{display:"flex",justifyContent:"center",marginBottom:"2rem",flexWrap:"wrap"},children:[Object(f.jsx)(V,{value:"popular",children:"Popular"}),Object(f.jsx)(V,{value:"top_rated",children:"Top rated"}),Object(f.jsx)(V,{value:"upcoming",children:"Upcoming"}),Object(f.jsx)(V,{value:"now_playing",children:"Now playing"}),Object(f.jsxs)(V,{value:"genres","aria-controls":"demo-customized-menu","aria-haspopup":"true","aria-expanded":N?"true":void 0,variant:"contained",onClick:function(e){w(e.currentTarget)},children:["Genres ",Object(f.jsx)(Q.a,{})]})]}),Object(f.jsx)(X,{id:"demo-customized-menu",MenuListProps:{"aria-labelledby":"demo-customized-button"},anchorEl:y,open:N,onClose:S,children:b&&0!==i.genres.length&&i.genres.map((function(e){return Object(f.jsx)(H.a,{onClick:function(){return S(e.name,e.id)},disableRipple:!0,children:e.name},e.id)}))})]})},Z=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"my-container",children:[Object(f.jsx)(Y,{}),Object(f.jsx)(q,{sort:"popular",pageNumber:"1"}),Object(f.jsx)(G.a,{page:Number(1),sx:{marginTop:"3rem",display:"flex",justifyContent:"center"},count:10,size:"large",color:"primary",renderItem:function(e){return Object(f.jsx)(U.a,Object(E.a)({component:o.b,sx:{color:"white"},to:"/popular/page/".concat(e.page)},e))}})]})})},$=(n(110),n(155)),ee=n(160),te=n(150),ne=function(e){var t=e.id,n=a.useState({}),r=Object(d.a)(n,2),c=r[0],i=r[1],s=a.useState(!0),l=Object(d.a)(s,2),j=l[0],b=l[1];return a.useEffect((function(){b(!0),fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat("392eca317dc0880c7fc434bb6bb210a6","&language=es")).then((function(e){return e.json()})).then((function(e){return i(e)})).catch((function(e){return console.error(e)})).finally((function(){return setTimeout((function(){b(!1)}),250)}))}),[t]),j?Object(f.jsx)(L,{}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"details-container",children:[Object(f.jsxs)("div",{className:"main-info",children:[Object(f.jsx)("img",{src:"https://image.tmdb.org/t/p/original/".concat(c.poster_path),alt:"movie poster",className:"movie-poster"}),Object(f.jsxs)("div",{className:"rating-wrapper",children:[Object(f.jsx)($.a,{name:"movie-rating",value:c.vote_average/2,precision:.5,readOnly:!0}),Object(f.jsx)("p",{children:c.vote_average/2}),Object(f.jsx)("p",{children:"|"}),Object(f.jsxs)("p",{children:[c.vote_count," votes"]})]}),Object(f.jsx)(C.a,{direction:"row",spacing:2,sx:{marginTop:"1rem",justifyContent:"center"},children:c.genres.map((function(e,t){return Object(f.jsx)(o.b,{to:"/genres/".concat(e.name,"/").concat(e.id,"/page=1"),children:Object(f.jsx)(ee.a,{label:e.name,variant:"outlined",sx:{fontSize:"18px",color:"primary.light",borderColor:"primary.light"}},t)},t)}))})]}),Object(f.jsxs)("div",{className:"movie-title",children:[Object(f.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(f.jsx)(_.a,{variant:"h3",children:c.original_title}),Object(f.jsxs)(_.a,{variant:"subtitle1",gutterBottom:!0,component:"h4",sx:{fontSize:"32px",margin:"0 2rem",fontWeight:"200"},children:["(",c.title,")"]})]}),Object(f.jsx)(te.a,{sx:{borderColor:"primary.light",margin:"1.2rem 0"}}),Object(f.jsx)(_.a,{variant:"subtitle1",sx:{fontWeight:"100",fontStyle:"oblique"},children:c.tagline}),Object(f.jsx)(_.a,{variant:"body1",sx:{fontSize:"22px",fontWeight:"300",margin:4},children:c.overview})]})]}),Object(f.jsxs)("div",{className:"details-container-mobile",children:[Object(f.jsxs)("div",{className:"main-info-mobile",children:[Object(f.jsx)("img",{src:"https://image.tmdb.org/t/p/original/".concat(c.poster_path),alt:"movie poster",className:"movie-poster-mobile"}),Object(f.jsxs)("div",{className:"title-mobile",children:[Object(f.jsx)(_.a,{variant:"h3",sx:{fontSize:"1.2rem"},children:c.original_title}),Object(f.jsx)(te.a,{sx:{borderColor:"primary.light",margin:"1.2rem 0"}}),Object(f.jsx)(_.a,{variant:"subtitle1",sx:{fontWeight:"100",fontStyle:"oblique",fontSize:"0.9rem"},children:c.tagline}),Object(f.jsx)(_.a,{variant:"body1",sx:{fontSize:"16px",fontWeight:"300",margin:"1rem 0"},children:c.overview})]})]}),Object(f.jsxs)("div",{className:"rating-wrapper",children:[Object(f.jsx)($.a,{name:"movie-rating",value:c.vote_average/2,precision:.5,readOnly:!0}),Object(f.jsx)("p",{children:c.vote_average/2}),Object(f.jsx)("p",{children:"|"}),Object(f.jsxs)("p",{children:[c.vote_count," votes"]})]}),Object(f.jsx)(C.a,{direction:"row",spacing:2,sx:{margin:"1rem 0 0 0",justifyContent:"center",alignItems:"center",flexWrap:"wrap"},children:c.genres.map((function(e,t){return Object(f.jsx)(o.b,{to:"/genres/".concat(e.name,"/").concat(e.id,"/page=1"),children:Object(f.jsx)(ee.a,{label:e.name,variant:"outlined",sx:{fontSize:"18px",color:"primary.light",borderColor:"primary.light",padding:"0.8rem",margin:"0.7rem"}},t)},t)}))})]})]})},ae=function(){var e=Object(s.g)().id;return Object(f.jsx)(ne,{id:e})},re=function(){var e=Object(s.g)(),t=e.genre,n=e.id,r=e.number,c=a.useState(!1),i=Object(d.a)(c,2),l=i[0],j=i[1],b=a.useState({}),p=Object(d.a)(b,2),u=p[0],m=p[1];return a.useEffect((function(){j(!1),fetch("https://api.themoviedb.org/3/discover/movie?api_key=".concat("392eca317dc0880c7fc434bb6bb210a6","&language=es&sort_by=popularity.desc&with_genres=").concat(n,"&page=").concat(r)).then((function(e){return e.json()})).then((function(e){return m(e)})).finally((function(){return j(!0)}))}),[t,r]),Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"my-container",children:[Object(f.jsx)(Y,{sort:"genres"}),Object(f.jsxs)(_.a,{variant:"h5",component:"h2",children:["Pel\xedculas de ",t.toLowerCase()]}),Object(f.jsx)(te.a,{sx:{borderColor:"primary.light",margin:"0.6rem 0"}}),l&&Object(f.jsx)("section",{className:"cards-container",children:u.results.map((function(e,t){return Object(f.jsx)(B,{id:e.id,title:e.original_title,img:null===e.poster_path?"https://images.pngnice.com/download/2007/Movie-PNG-Transparent-Image.png":"https://image.tmdb.org/t/p/w500".concat(e.poster_path),rating:e.vote_average,overview:""!==e.overview?e.overview:"No hay descripcion disponible para esta pel\xedcula"},t)}))}),Object(f.jsx)(G.a,{page:Number(r),sx:{marginTop:"3rem",display:"flex",justifyContent:"center"},count:10,size:"large",color:"primary",renderItem:function(e){return Object(f.jsx)(U.a,Object(E.a)({component:o.b,sx:{color:"white"},to:"/genres/".concat(t,"/").concat(n,"/page=").concat(e.page)},e))}})]})})},ce=function(){var e=Object(s.g)(),t=e.sort,n=e.number;return a.useEffect((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[t,n]),Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"my-container",children:[Object(f.jsx)(Y,{sort:t}),Object(f.jsx)(q,{sort:t,pageNumber:n}),Object(f.jsx)(G.a,{page:Number(n),sx:{marginTop:"3rem",display:"flex",justifyContent:"center"},count:10,size:"large",color:"primary",renderItem:function(e){return Object(f.jsx)(U.a,Object(E.a)({component:o.b,sx:{color:"white"},to:"/".concat(t,"/page/").concat(e.page)},e))}})]})})},ie=function(){var e=Object(s.g)().searched,t=a.useState([]),n=Object(d.a)(t,2),r=n[0],c=n[1];return a.useEffect((function(){fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat("392eca317dc0880c7fc434bb6bb210a6","&language=es&query=").concat(e)).then((function(e){return e.json()})).then((function(e){return c(e.results)})).catch((function(e){return console.error(e)}))}),[e]),Object(f.jsx)("section",{className:"my-container cards-container",children:r.map((function(e,t){return Object(f.jsx)(B,{id:e.id,title:e.original_title,img:null===e.poster_path?"https://images.pngnice.com/download/2007/Movie-PNG-Transparent-Image.png":"https://image.tmdb.org/t/p/w500".concat(e.poster_path),rating:e.vote_average,overview:""!==e.overview?e.overview:"No hay descripcion disponible para esta pel\xedcula"},t)}))})};var oe=function(){return Object(f.jsx)(l.a,{theme:b,children:Object(f.jsxs)(o.a,{children:[Object(f.jsx)(T,{}),Object(f.jsxs)(s.c,{children:[Object(f.jsx)(s.a,{exact:!0,path:"/",element:Object(f.jsx)(Z,{})}),Object(f.jsx)(s.a,{exact:!0,path:"/films",element:Object(f.jsx)(Z,{})}),Object(f.jsx)(s.a,{exact:!0,path:"/:sort/page/:number",element:Object(f.jsx)(ce,{})}),Object(f.jsx)(s.a,{exact:!0,path:"/genres/:genre/:id/page=:number",element:Object(f.jsx)(re,{})}),Object(f.jsx)(s.a,{exact:!0,path:"/search/:searched",element:Object(f.jsx)(ie,{})}),Object(f.jsx)(s.a,{exact:!0,path:"/films/:id",element:Object(f.jsx)(ae,{})}),Object(f.jsx)(s.a,{path:"*",element:Object(f.jsx)(Z,{})})]}),Object(f.jsx)(M,{})]})})};i.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(oe,{})}),document.getElementById("root"))},97:function(e,t,n){}},[[111,1,2]]]);
//# sourceMappingURL=main.a8e550cf.chunk.js.map