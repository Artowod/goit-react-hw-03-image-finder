(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{20:function(e,t,a){e.exports={loader:"Button_loader__2YZtq",loader_wrapper:"Button_loader_wrapper__M7HVe",Button:"Button_Button__36sfs"}},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(19),o=a.n(s),c=a(4),i=a(5),l=a(7),u=a(6),h=a(0),p=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={searchInput:""},e.onSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.searchInput)},e.onInputChange=function(t){var a=t.target.value;e.setState({searchInput:a})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(h.jsx)("header",{className:"SearchBar",children:Object(h.jsxs)("form",{className:"SearchForm",onSubmit:this.onSubmit,children:[Object(h.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(h.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(h.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",name:"searchInput",value:this.state.searchInput,autoFocus:!0,placeholder:"Search images and photos",onChange:this.onInputChange})]})})}}]),a}(n.Component),d=p,m=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.props.ModalCloseKeyHandler)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.props.ModalCloseKeyHandler)}},{key:"render",value:function(){return Object(h.jsx)("div",{className:"Overlay",onClick:this.props.ModalCloseClickHandler,children:Object(h.jsx)("div",{className:"Modal",children:Object(h.jsx)("img",{src:this.props.largePic,alt:"Large pic"})})})}}]),a}(n.Component),g=m,j=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isModal:!1},e.openModal=function(t){t.preventDefault(),e.setState({isModal:!0})},e.closeModal=function(t){"DIV"===t.target.tagName&&e.setState({isModal:!1})},e.closeModalByEsc=function(t){"Escape"===t.key&&e.setState({isModal:!1})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("li",{className:"ImageGalleryItem",children:[!0===this.state.isModal&&Object(h.jsx)(g,{ModalCloseClickHandler:this.closeModal,ModalCloseKeyHandler:this.closeModalByEsc,largePic:this.props.largeImageURL}),Object(h.jsx)("a",{href:this.props.largeImageURL,onClick:this.openModal,children:Object(h.jsx)("img",{src:this.props.webformatURL,alt:"",className:"ImageGalleryItem-image"})})]})}}]),a}(n.Component),b=j,f=function(e){var t=e.gallery;return Object(h.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.id,a=e.webformatURL,n=e.largeImageURL;return Object(h.jsx)(b,{webformatURL:a,largeImageURL:n},t)}))})},y=a(20),v=a.n(y),O=function(e){var t=e.onClick;return Object(h.jsx)("div",{children:Object(h.jsx)("button",{className:v.a.Button,type:"button",onClick:t,children:"Load more"})})},x=a(21),S=a.n(x);var w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,a={key:"23763255-79cd913c0d73945049700542d",q:"",image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:12,page:1};a.q=e,a.page=t;var n=S.a.get("https://pixabay.com/api/",{params:a});return n.then((function(e){return e.data}))},k=a(22),C=a.n(k),I=(a(66),a(67),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={gallery:[],status:"idle",searchQuery:"",page:1,isPagination:!1},e.onSubmit=function(t){e.setState({gallery:[],page:1}),""===t.trim()?e.setState({status:"idle",searchQuery:t}):e.setState({searchQuery:t})},e.pagination=function(){e.setState((function(e){return{page:e.page+1}}))},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this;""===this.state.searchQuery.trim()||this.state.searchQuery===t.searchQuery&&this.state.page===t.page||(this.setState({status:"pending"}),w(this.state.searchQuery,this.state.page).then((function(e){var n=e.hits;a.setState({isPagination:!(n.length<12)}),a.setState((function(e){return{gallery:e.gallery.concat(n.map((function(e){return{id:e.id,webformatURL:e.webformatURL,largeImageURL:e.largeImageURL}}))),status:"resolved"}})),a.state.page!==t.page&&1!==a.state.page&&window.scrollBy({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(e){throw alert(e.message),e})))}},{key:"render",value:function(){var e=this.state,t=e.status,a=e.isPagination;return"idle"===t?Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(d,{onSubmit:this.onSubmit}),"Please type what you want to find..."]}):Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(d,{onSubmit:this.onSubmit}),"pending"===t&&Object(h.jsx)(C.a,{className:"loader",color:"tomato",height:100,width:100}),("pending"===t||"resolved"===t)&&Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(f,{gallery:this.state.gallery})}),a&&Object(h.jsx)(O,{onClick:this.pagination})]})}}]),a}(r.a.Component)),M=I;o.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(M,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.945753f4.chunk.js.map