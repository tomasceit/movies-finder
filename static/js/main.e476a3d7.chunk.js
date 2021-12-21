(this["webpackJsonpmovies-page"]=this["webpackJsonpmovies-page"]||[]).push([[0],{106:function(e,t,n){},109:function(e,t,n){},110:function(e,t,n){},114:function(e,t,n){},115:function(e,t,n){},116:function(e,t,n){},117:function(e,t,n){},119:function(e,t,n){},120:function(e,t,n){},121:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(37),c=n.n(i),o=(n(106),n(17)),s=n(14),l=n(173),j=n(94),d=Object(j.a)({palette:{type:"light",primary:{main:"#9147ff",dark:"#3e065f",light:"#bf94ff"},secondary:{main:"#bf0b83",dark:"#970b79"}},typography:{fontFamily:["IBM Plex Sans",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")}}),p=(n(109),n(9)),b=n(3),m=(n(110),n(5)),h=n(122),u=n(23),g=n(174),x=n(89),v=n.n(x),O=n(0),f=Object(m.a)("div")((function(e){var t=e.theme;return Object(b.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(h.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(h.a)(t.palette.common.white,.25)},marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(1),width:"auto"})})),y=Object(m.a)(u.c)((function(e){var t,n=e.theme;return{color:"inherit","& .MuiInputBase-input":(t={padding:n.spacing(1,1,1,1),transition:n.transitions.create("width"),width:"100%"},Object(b.a)(t,n.breakpoints.up("sm"),{width:"10ch","&:focus":{width:"20ch"}}),Object(b.a)(t,n.breakpoints.down("sm"),{width:"0ch","&:focus":{width:"15ch"}}),t)}})),w=function(){var e=a.useState(""),t=Object(p.a)(e,2),n=t[0],r=t[1],i=Object(s.f)(),c=function(e){e.preventDefault(),""!==n&&i("/search=".concat(n))};return Object(O.jsx)("form",{onSubmit:c,children:Object(O.jsxs)(f,{children:[Object(O.jsx)(g.a,{type:"submit",onClick:c,sx:{color:"white"},children:Object(O.jsx)(v.a,{})}),Object(O.jsx)(y,{type:"search",placeholder:"Search\u2026",inputProps:{"aria-label":"search"},onChange:function(e){r(e.target.value)}})]})})},N=n(175),_=n(177),S=n(178),C=n(161),I=n(179),k=n(90),M=n.n(k),z=function(){return Object(O.jsx)(N.a,{position:"sticky",sx:{backgroundColor:"#18181b"},children:Object(O.jsxs)(_.a,{className:"navbar",children:[Object(O.jsx)(o.b,{to:"/home",children:Object(O.jsxs)(g.a,{size:"large",edge:"start",color:"inherit","aria-label":"open drawer",sx:{mr:2},children:[Object(O.jsx)(M.a,{color:"primary",fontSize:"large",sx:{marginRight:"0.5rem"}}),Object(O.jsx)(S.a,{className:"title",variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1,display:{xs:"none",sm:"block"}},children:"MoviesFinder"})]})}),Object(O.jsxs)(C.a,{direction:"row",spacing:2,children:[Object(O.jsx)(o.b,{to:"/films",children:Object(O.jsx)(I.a,{variant:"films",sx:{fontSize:"1rem",display:"none"},children:"Films"})}),Object(O.jsx)(w,{})]})]})})},T=(n(114),function(){return Object(O.jsx)("footer",{id:"footer",children:"Footer"})}),E=n(162),P=(n(115),function(){return Object(O.jsx)("div",{className:"loading",children:Object(O.jsxs)("div",{className:"lds-roller",children:[Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{})]})})}),R=(n(116),n(180)),G=n(181),W=n(182),V=Object(m.a)("div")((function(e){var t=e.theme;return Object(b.a)({position:"relative",margin:"1rem",minWidth:"300px !important",borderRadius:"5px",border:"0.3px solid transparent",overflow:"hidden",backgroundColor:Object(h.a)(t.palette.common.white,.05),"&:hover":{backgroundColor:Object(h.a)(t.palette.common.white,.1),border:"0.3px solid ".concat(t.palette.primary.light)}},t.breakpoints.up("sm"),{marginLeft:t.spacing(1),width:"auto"})})),U=function(e){var t=e.id,n=e.title,a=e.img,r=e.rating,i=e.overview;return Object(O.jsxs)(V,{children:[Object(O.jsxs)("div",{className:"card-image",children:[Object(O.jsx)("img",{src:a,alt:n}),Object(O.jsxs)("div",{className:"movie-description",children:[Object(O.jsx)("h3",{style:{paddingTop:"0.7rem"},children:"Descripci\xf3n:"}),Object(O.jsx)("p",{children:i})]})]}),Object(O.jsx)(o.b,{to:"/films/".concat(t),children:Object(O.jsx)(R.a,{children:Object(O.jsxs)("div",{className:"card-content",children:[Object(O.jsx)("h3",{className:"card-title",children:n}),Object(O.jsxs)("div",{style:{display:"flex"},children:[Object(O.jsx)(G.a,{variant:"determinate",value:10*r,color:r>=7?"success":r>=5?"warning":"error"}),Object(O.jsx)(W.a,{className:"rating-number",sx:{top:0,left:"77%",bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(O.jsx)(S.a,{variant:"caption",component:"div",color:"",children:"".concat(10*r,"%")})})]})]})})})]})},F=function(){var e="392eca317dc0880c7fc434bb6bb210a6",t=a.useState(!0),n=Object(p.a)(t,2),r=n[0],i=n[1],c=a.useState({}),s=Object(p.a)(c,2),l=s[0],j=s[1],d=a.useState({}),b=Object(p.a)(d,2),m=b[0],h=b[1],u=a.useState({}),g=Object(p.a)(u,2),x=g[0],v=g[1],f=a.useState({}),y=Object(p.a)(f,2),w=y[0],N=y[1];return a.useEffect((function(){i(!0),fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=".concat(e,"&language=es&page=1")).then((function(e){return e.json()})).then((function(e){return N(e)})).catch((function(e){return console.error(e)})),fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(e,"&language=es")).then((function(e){return e.json()})).then((function(e){return j(e)})).catch((function(e){return console.error(e)})),fetch("https://api.themoviedb.org/3/discover/movie?api_key=".concat(e,"&language=es&sort_by=vote_average.desc&include_adult=false&page=1&vote_count.gte=7500")).then((function(e){return e.json()})).then((function(e){return v(e)})).catch((function(e){return console.error(e)})),fetch("https://api.themoviedb.org/3/movie/popular?api_key=".concat(e,"&language=es&page=1")).then((function(e){return e.json()})).then((function(e){return h(e)})).catch((function(e){return console.error(e)})).finally((function(){return setTimeout((function(){i(!1)}),500)}))}),[]),r?Object(O.jsx)(P,{}):Object(O.jsxs)("div",{className:"my-container",children:[Object(O.jsxs)("div",{className:"movie-images-list",children:[Object(O.jsxs)("div",{className:"see-more",children:[Object(O.jsx)(S.a,{variant:"h5",component:"h3",children:"TRENDING MOVIES"}),Object(O.jsx)(S.a,{variant:"h7",component:o.b,sx:{marginRight:1},to:"/trending",children:"Ver mas"})]}),Object(O.jsx)(E.a,{sx:{borderColor:"primary.light",margin:"0.6rem 0"}}),Object(O.jsx)("section",{className:"cards-container-home",children:l.results.slice(0,4).map((function(e,t){return Object(O.jsx)(U,{id:e.id,title:e.original_title,img:null===e.poster_path?"https://images.pngnice.com/download/2007/Movie-PNG-Transparent-Image.png":"https://image.tmdb.org/t/p/w500".concat(e.poster_path),rating:e.vote_average,overview:""!==e.overview?e.overview:"No hay descripcion disponible para esta pel\xedcula"},t)}))})]}),Object(O.jsxs)("div",{className:"movie-images-list",children:[Object(O.jsxs)("div",{className:"see-more",children:[Object(O.jsx)(S.a,{variant:"h5",component:"h3",children:"POPULAR MOVIES"}),Object(O.jsx)(S.a,{variant:"h7",component:o.b,sx:{marginRight:1},to:"/popular/page/1",children:"Ver mas"})]}),Object(O.jsx)(E.a,{sx:{borderColor:"primary.light",margin:"0.6rem 0"}}),Object(O.jsx)("section",{className:"cards-container-home",children:m.results.slice(0,4).map((function(e,t){return Object(O.jsx)(U,{id:e.id,title:e.original_title,img:null===e.poster_path?"https://images.pngnice.com/download/2007/Movie-PNG-Transparent-Image.png":"https://image.tmdb.org/t/p/w500".concat(e.poster_path),rating:e.vote_average,overview:""!==e.overview?e.overview:"No hay descripcion disponible para esta pel\xedcula"},t)}))})]}),Object(O.jsxs)("div",{className:"movie-images-list",children:[Object(O.jsxs)("div",{className:"see-more",children:[Object(O.jsx)(S.a,{variant:"h5",component:"h3",children:"TOP RATED MOVIES"}),Object(O.jsx)(S.a,{variant:"h7",component:o.b,sx:{marginRight:1},to:"/top_rated/page/1",children:"Ver mas"})]}),Object(O.jsx)(E.a,{sx:{borderColor:"primary.light",margin:"0.6rem 0"}}),Object(O.jsx)("section",{className:"cards-container-home",children:x.results.slice(0,4).map((function(e,t){return Object(O.jsx)(U,{id:e.id,title:e.original_title,img:null===e.poster_path?"https://images.pngnice.com/download/2007/Movie-PNG-Transparent-Image.png":"https://image.tmdb.org/t/p/w500".concat(e.poster_path),rating:e.vote_average,overview:""!==e.overview?e.overview:"No hay descripcion disponible para esta pel\xedcula"},t)}))})]}),Object(O.jsxs)("div",{className:"movie-images-list",children:[Object(O.jsxs)("div",{className:"see-more",children:[Object(O.jsx)(S.a,{variant:"h5",component:"h3",children:"UPCOMING MOVIES"}),Object(O.jsx)(S.a,{variant:"h7",component:o.b,sx:{marginRight:1},to:"/upcoming/page/1",children:"Ver mas"})]}),Object(O.jsx)(E.a,{sx:{borderColor:"primary.light",margin:"0.6rem 0"}}),Object(O.jsx)("section",{className:"cards-container-home",children:w.results.slice(0,4).map((function(e,t){return Object(O.jsx)(U,{id:e.id,title:e.original_title,img:null===e.poster_path?"https://images.pngnice.com/download/2007/Movie-PNG-Transparent-Image.png":"https://image.tmdb.org/t/p/w500".concat(e.poster_path),rating:e.vote_average,overview:""!==e.overview?e.overview:"No hay descripcion disponible para esta pel\xedcula"},t)}))})]})]})},B=(n(117),n(166)),D=n(170),L=n(183),q=n(184),A=n(185),J=function(e){var t=e.id,n="392eca317dc0880c7fc434bb6bb210a6",r=a.useState({}),i=Object(p.a)(r,2),c=i[0],s=i[1],l=a.useState({}),j=Object(p.a)(l,2),d=j[0],b=j[1],m=a.useState(!0),h=Object(p.a)(m,2),u=h[0],g=h[1];return a.useEffect((function(){g(!0),fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(n,"&language=es")).then((function(e){return e.json()})).then((function(e){return s(e)})).catch((function(e){return console.error(e)})),fetch("https://api.themoviedb.org/3/movie/".concat(t,"/similar?api_key=").concat(n,"&language=es&page=1")).then((function(e){return e.json()})).then((function(e){return b(e)})).catch((function(e){return console.error(e)})).finally((function(){return setTimeout((function(){g(!1)}),250)}))}),[t]),u?Object(O.jsx)(P,{}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"details-container",children:[Object(O.jsxs)("div",{className:"main-info",children:[Object(O.jsx)("img",{src:"https://image.tmdb.org/t/p/original/".concat(c.poster_path),alt:"movie poster",className:"movie-poster"}),Object(O.jsxs)("div",{className:"rating-wrapper",children:[Object(O.jsx)(B.a,{name:"movie-rating",value:c.vote_average/2,precision:.1,readOnly:!0}),Object(O.jsxs)("p",{children:[c.vote_average/2," stars"]}),Object(O.jsx)("p",{children:"|"}),Object(O.jsxs)("p",{children:[c.vote_count," votes"]})]}),Object(O.jsx)(C.a,{direction:"row",spacing:2,sx:{marginTop:"1rem",justifyContent:"center"},children:c.genres.map((function(e,t){return Object(O.jsx)(o.b,{to:"/genres/".concat(e.name,"/").concat(e.id,"/page=1"),children:Object(O.jsx)(D.a,{label:e.name,variant:"outlined",sx:{fontSize:"18px",color:"primary.light",borderColor:"primary.light"}},t)},t)}))})]}),Object(O.jsxs)("div",{className:"movie-title",children:[Object(O.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(O.jsx)(S.a,{variant:"h3",sx:{fontSize:"2.5rem"},children:c.original_title}),Object(O.jsxs)(S.a,{variant:"subtitle1",gutterBottom:!0,component:"h4",sx:{fontSize:"32px",margin:"0 2rem",fontWeight:"200"},children:["(",c.title,")"]})]}),Object(O.jsx)(E.a,{sx:{borderColor:"primary.light",margin:"1.2rem 0"}}),Object(O.jsx)(S.a,{variant:"subtitle1",sx:{fontWeight:"100",fontStyle:"oblique"},children:c.tagline}),Object(O.jsx)(S.a,{variant:"body1",sx:{fontSize:"22px",fontWeight:"300",margin:4},children:c.overview})]})]}),Object(O.jsx)("div",{className:"similar-movies",children:0!==d.results.length?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(S.a,{variant:"h4",sx:{fontSize:"2rem"},children:"Similar movies"}),Object(O.jsx)(E.a,{sx:{borderColor:"primary.light",margin:"1rem 0"}}),Object(O.jsx)(L.a,{cols:4,children:d.results.slice(0,4).map((function(e){return Object(O.jsxs)(q.a,{sx:{margin:"auto 1rem"},component:o.b,to:"/films/".concat(e.id),children:[Object(O.jsx)("img",{className:"similar-movie-img",src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:e.title,loading:"lazy"}),Object(O.jsx)(A.a,{title:e.title,subtitle:e.overview})]},e.id)}))})]}):null}),Object(O.jsxs)("div",{className:"details-container-mobile",children:[Object(O.jsxs)("div",{className:"main-info-mobile",children:[Object(O.jsx)("img",{src:"https://image.tmdb.org/t/p/original/".concat(c.poster_path),alt:"movie poster",className:"movie-poster-mobile"}),Object(O.jsxs)("div",{className:"title-mobile",children:[Object(O.jsx)(S.a,{variant:"h3",sx:{fontSize:"1.2rem"},children:c.original_title}),Object(O.jsx)(E.a,{sx:{borderColor:"primary.light",margin:"0.7rem 0"}}),Object(O.jsx)(S.a,{variant:"subtitle1",sx:{fontWeight:"100",fontStyle:"oblique",fontSize:"0.9rem"},children:c.tagline}),Object(O.jsx)(S.a,{variant:"body1",sx:{fontSize:"16px",fontWeight:"300",margin:"1rem 0"},children:c.overview})]})]}),Object(O.jsxs)("div",{className:"rating-wrapper",children:[Object(O.jsx)(B.a,{name:"movie-rating",value:c.vote_average/2,precision:.5,readOnly:!0}),Object(O.jsx)("p",{children:c.vote_average/2}),Object(O.jsx)("p",{children:"|"}),Object(O.jsxs)("p",{children:[c.vote_count," votes"]})]}),Object(O.jsx)(C.a,{direction:"row",spacing:2,sx:{margin:"1rem 0 0 0",justifyContent:"start",alignItems:"center",flexWrap:"nowrap",overflowX:"auto"},children:c.genres.map((function(e,t){return Object(O.jsx)(o.b,{to:"/genres/".concat(e.name,"/").concat(e.id,"/page=1"),children:Object(O.jsx)(D.a,{label:e.name,variant:"outlined",sx:{fontSize:"18px",color:"primary.light",borderColor:"primary.light",padding:"0.8rem",margin:"0.7rem",cursor:"pointer"}},t)},t)}))})]})]})},H=function(){var e=Object(s.g)().id;return Object(O.jsx)(J,{id:e})},X=n(46),K=n(187),Q=n(169),Y=n(163),Z=n(168),$=n(172),ee=n(165),te=(n(119),n(186)),ne=n(93),ae=n(171),re=n(92),ie=n.n(re),ce=Object(m.a)(te.a)((function(e){var t=e.theme;return{color:"white",border:"1px solid ".concat(Object(h.a)(t.palette.primary.light,.1)),minWidth:"130px"}})),oe=Object(m.a)((function(e){return Object(O.jsx)(ne.a,Object(X.a)({elevation:0,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"}},e))}))((function(e){var t=e.theme;return{"& .MuiPaper-root":{borderRadius:6,marginTop:t.spacing(1),minWidth:180,color:"primary",boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px","& .MuiMenu-list":{padding:"4px 0"},"& .MuiMenuItem-root":{"& .MuiSvgIcon-root":{fontSize:18,color:t.palette.text.secondary,marginRight:t.spacing(1.5)},"&:active":{backgroundColor:Object(h.a)(t.palette.primary.main,t.palette.action.selectedOpacity)}}}}})),se=function(e){var t=e.sort,n=void 0===t?"popular":t,r=a.useState({}),i=Object(p.a)(r,2),c=i[0],o=i[1],l=a.useState(!1),j=Object(p.a)(l,2),d=j[0],b=j[1];a.useEffect((function(){b(!1),fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat("392eca317dc0880c7fc434bb6bb210a6","&language=es")).then((function(e){return e.json()})).then((function(e){return o(e)})).catch((function(e){return console.error(e)})).finally((function(){return b(!0)}))}),[]);var m=Object(s.f)(),h=a.useState(n),u=Object(p.a)(h,2),g=u[0],x=u[1],v=a.useState(null),f=Object(p.a)(v,2),y=f[0],w=f[1],N=Boolean(y),_=function(e,t){w(null),m("/genres/".concat(e,"/").concat(t,"/page=1"))};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(ae.a,{elevation:2,color:"primary",value:g,exclusive:!0,onChange:function(e,t){x(t),null!==t&&"genres"!==t&&m("/".concat(t,"/page/1")),"trending"===t&&m("/trending")},size:"large",children:[Object(O.jsx)(ce,{value:"trending",children:"Trending"}),Object(O.jsx)(ce,{value:"popular",children:"Popular"}),Object(O.jsx)(ce,{value:"top_rated",children:"Top rated"}),Object(O.jsx)(ce,{value:"upcoming",children:"Upcoming"}),Object(O.jsx)(ce,{value:"now_playing",children:"Now playing"}),Object(O.jsxs)(ce,{value:"genres","aria-controls":"demo-customized-menu","aria-haspopup":"true","aria-expanded":N?"true":void 0,variant:"contained",onClick:function(e){w(e.currentTarget)},children:["Genres ",Object(O.jsx)(ie.a,{})]})]}),Object(O.jsx)(oe,{id:"demo-customized-menu",MenuListProps:{"aria-labelledby":"demo-customized-button"},anchorEl:y,open:N,onClose:_,children:d&&0!==c.genres.length&&c.genres.map((function(e){return Object(O.jsx)(Z.a,{onClick:function(){return _(e.name,e.id)},disableRipple:!0,children:e.name},e.id)}))})]})},le=function(){var e=Object(s.g)(),t=e.genre,n=e.id,r=e.number,i=a.useState(!1),c=Object(p.a)(i,2),l=c[0],j=c[1],d=a.useState({}),b=Object(p.a)(d,2),m=b[0],h=b[1],u=a.useState("popularity"),g=Object(p.a)(u,2),x=g[0],v=g[1];return a.useEffect((function(){j(!1),fetch("https://api.themoviedb.org/3/discover/movie?api_key=".concat("392eca317dc0880c7fc434bb6bb210a6","&language=es&sort_by=").concat(x,".desc&with_genres=").concat(n,"&page=").concat(r,"&vote_count.gte=250")).then((function(e){return e.json()})).then((function(e){return h(e)})).finally((function(){return j(!0)}))}),[t,r,x]),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"my-container",children:[Object(O.jsx)(se,{sort:"genres"}),Object(O.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",margin:"auto",maxWidth:"95%"},children:[Object(O.jsxs)(S.a,{variant:"h5",component:"h2",children:["PEL\xcdCULAS DE ",t.toUpperCase()]}),Object(O.jsxs)(K.a,{variant:"standard",sx:{m:1,minWidth:120},children:[Object(O.jsx)(Q.a,{id:"select-sort-by",sx:{color:"#9147ff"},children:"Sort by"}),Object(O.jsxs)(Y.a,{sx:{color:"white",borderBottom:"1px solid #9147ff"},labelId:"select-sort-by",id:"simple-select-sort",value:x,onChange:function(e){v(e.target.value)},label:"Sort By",children:[Object(O.jsx)(Z.a,{value:"popularity",children:"Popularity"}),Object(O.jsx)(Z.a,{value:"vote_average",children:"Rating"}),Object(O.jsx)(Z.a,{value:"release_date",children:"Release Date"}),Object(O.jsx)(Z.a,{value:"original_title",children:"Alphabetic"})]})]})]}),Object(O.jsx)(E.a,{sx:{borderColor:"primary.light",margin:"0.6rem 0"}}),l&&Object(O.jsx)("section",{className:"cards-container",children:m.results.map((function(e,t){return Object(O.jsx)(U,{id:e.id,title:e.original_title,img:null===e.poster_path?"https://images.pngnice.com/download/2007/Movie-PNG-Transparent-Image.png":"https://image.tmdb.org/t/p/w500".concat(e.poster_path),rating:e.vote_average,overview:""!==e.overview?e.overview:"No hay descripcion disponible para esta pel\xedcula"},t)}))}),Object(O.jsx)($.a,{page:Number(r),sx:{marginTop:"3rem",display:"flex",justifyContent:"center"},count:10,size:"large",color:"primary",renderItem:function(e){return Object(O.jsx)(ee.a,Object(X.a)({component:o.b,sx:{color:"white"},to:"/genres/".concat(t,"/").concat(n,"/page=").concat(e.page)},e))}})]})})},je=(n(120),function(e){var t=e.sort,n=e.pageNumber,r=a.useState(!0),i=Object(p.a)(r,2),c=i[0],o=i[1],s=a.useState([]),l=Object(p.a)(s,2),j=l[0],d=l[1];return a.useEffect((function(){o(!0),fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat("392eca317dc0880c7fc434bb6bb210a6","&language=es&page=").concat(n)).then((function(e){return e.json()})).then((function(e){return d(e)})).catch((function(e){return console.error(e)})).finally((function(){return setTimeout((function(){o(!1)}),100)}))}),[t,n]),c?Object(O.jsx)(P,{}):Object(O.jsx)("section",{className:"cards-container",children:j.results.map((function(e,t){return Object(O.jsx)(U,{id:e.id,title:e.original_title,img:null===e.poster_path?"https://images.pngnice.com/download/2007/Movie-PNG-Transparent-Image.png":"https://image.tmdb.org/t/p/w500".concat(e.poster_path),rating:e.vote_average,overview:""!==e.overview?e.overview:"No hay descripcion disponible para esta pel\xedcula"},t)}))})}),de=function(){var e=Object(s.g)(),t=e.sort,n=e.number;return a.useEffect((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[t,n]),Object(O.jsxs)("div",{className:"my-container",children:[Object(O.jsx)(se,{sort:t}),Object(O.jsxs)(S.a,{variant:"h5",component:"h2",children:[t.replace("_"," ").toUpperCase()," MOVIES"]}),Object(O.jsx)(E.a,{sx:{borderColor:"primary.light",margin:"0.6rem 0"}}),Object(O.jsx)(je,{sort:t,pageNumber:n}),Object(O.jsx)($.a,{page:Number(n),sx:{marginTop:"3rem",display:"flex",justifyContent:"center"},count:10,size:"large",color:"primary",renderItem:function(e){return Object(O.jsx)(ee.a,Object(X.a)({component:o.b,sx:{color:"white"},to:"/".concat(t,"/page/").concat(e.page)},e))}})]})},pe=function(){var e=Object(s.g)().searched,t=a.useState([]),n=Object(p.a)(t,2),r=n[0],i=n[1];return a.useEffect((function(){fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat("392eca317dc0880c7fc434bb6bb210a6","&language=es&query=").concat(e)).then((function(e){return e.json()})).then((function(e){return i(e.results)})).catch((function(e){return console.error(e)}))}),[e]),Object(O.jsxs)("div",{className:"my-container",children:[Object(O.jsxs)(S.a,{variant:"h3",sx:{fontSize:"2rem"},children:["Resultados de la b\xfasqueda: ",e]}),Object(O.jsx)(E.a,{sx:{borderColor:"primary.light",margin:"1rem 0"}}),Object(O.jsx)("section",{className:"cards-container",children:0!==r.length?r.map((function(e,t){return Object(O.jsx)(U,{id:e.id,title:e.original_title,img:null===e.poster_path?"https://images.pngnice.com/download/2007/Movie-PNG-Transparent-Image.png":"https://image.tmdb.org/t/p/w500".concat(e.poster_path),rating:e.vote_average,overview:""!==e.overview?e.overview:"No hay descripcion disponible para esta pel\xedcula"},t)})):Object(O.jsx)(S.a,{variant:"h4",sx:{fontSize:"2rem"},children:"No se encontraron resultados que coincidan con la busqueda"})})]})},be=function(){var e=a.useState(!1),t=Object(p.a)(e,2),n=t[0],r=t[1],i=a.useState({}),c=Object(p.a)(i,2),o=c[0],s=c[1];return a.useEffect((function(){r(!1),fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat("392eca317dc0880c7fc434bb6bb210a6","&language=es")).then((function(e){return e.json()})).then((function(e){return s(e)})).finally((function(){return r(!0)}))}),[]),Object(O.jsxs)("div",{className:"my-container",children:[Object(O.jsx)(se,{sort:"trending"}),Object(O.jsx)(S.a,{variant:"h5",component:"h2",children:"TRENDING MOVIES"}),Object(O.jsx)(E.a,{sx:{borderColor:"primary.light",margin:"0.6rem 0"}}),n&&Object(O.jsx)("section",{className:"cards-container",children:o.results.map((function(e,t){return Object(O.jsx)(U,{id:e.id,title:e.original_title,img:null===e.poster_path?"https://images.pngnice.com/download/2007/Movie-PNG-Transparent-Image.png":"https://image.tmdb.org/t/p/w500".concat(e.poster_path),rating:e.vote_average,overview:""!==e.overview?e.overview:"No hay descripcion disponible para esta pel\xedcula"},t)}))})]})};var me=function(){return Object(O.jsx)(l.a,{theme:d,children:Object(O.jsxs)(o.a,{children:[Object(O.jsx)(z,{}),Object(O.jsxs)(s.c,{children:[Object(O.jsx)(s.a,{exact:!0,path:"/",element:Object(O.jsx)(F,{})}),Object(O.jsx)(s.a,{exact:!0,path:"/trending",element:Object(O.jsx)(be,{})}),Object(O.jsx)(s.a,{exact:!0,path:"/:sort/page/:number",element:Object(O.jsx)(de,{})}),Object(O.jsx)(s.a,{exact:!0,path:"/genres/:genre/:id/page=:number",element:Object(O.jsx)(le,{})}),Object(O.jsx)(s.a,{exact:!0,path:"/search=:searched",element:Object(O.jsx)(pe,{})}),Object(O.jsx)(s.a,{exact:!0,path:"/films/:id",element:Object(O.jsx)(H,{})}),Object(O.jsx)(s.a,{path:"*",element:Object(O.jsx)(F,{})})]}),Object(O.jsx)(T,{})]})})};c.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(me,{})}),document.getElementById("root"))}},[[121,1,2]]]);
//# sourceMappingURL=main.e476a3d7.chunk.js.map