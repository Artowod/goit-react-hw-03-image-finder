(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={loader:"Button_loader__2YZtq",loader_wrapper:"Button_loader_wrapper__M7HVe",Button:"Button_Button__36sfs"}},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(20),o=a.n(s),c=a(4),i=a(5),l=a(7),u=a(6),h=a(0),d=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={searchInput:""},e.onInputChange=function(t){var a=t.target.value;e.setState({searchInput:a})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(h.jsx)("header",{className:"SearchBar",children:Object(h.jsxs)("form",{className:"SearchForm",onSubmit:this.props.onSubmit,children:[Object(h.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(h.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(h.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",name:"searchInput",value:this.state.searchInput,autoFocus:!0,placeholder:"Search images and photos",onChange:this.onInputChange})]})})}}]),a}(n.Component),p=d,m=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.props.ModalCloseKeyHandler)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.props.ModalCloseKeyHandler)}},{key:"render",value:function(){return Object(h.jsx)("div",{className:"Overlay",onClick:this.props.ModalCloseClickHandler,children:Object(h.jsx)("div",{className:"Modal",children:Object(h.jsx)("img",{src:this.props.largePic,alt:"Large pic"})})})}}]),a}(n.Component),j=m,g=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={status:"noModal"},e.openModal=function(t){t.preventDefault(),e.setState({status:"modal"})},e.closeModal=function(t){"DIV"===t.target.tagName&&e.setState({status:"noModal"})},e.closeModalByEsc=function(t){"Escape"===t.key&&e.setState({status:"noModal"})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("li",{className:"ImageGalleryItem",children:["modal"===this.state.status&&Object(h.jsx)(j,{ModalCloseClickHandler:this.closeModal,ModalCloseKeyHandler:this.closeModalByEsc,largePic:this.props.largeImageURL}),Object(h.jsx)("a",{href:this.props.largeImageURL,onClick:this.openModal,children:Object(h.jsx)("img",{src:this.props.webformatURL,alt:"",className:"ImageGalleryItem-image"})})]})}}]),a}(n.Component),b=g,f=function(e){var t=e.gallery;return Object(h.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.id,a=e.webformatURL,n=e.largeImageURL;return Object(h.jsx)(b,{webformatURL:a,largeImageURL:n},t)}))})},v=a(10),y=a.n(v),O=function(e){var t=e.onClick,a=e.children,n=e.status;return Object(h.jsxs)("div",{className:y.a.loader_wrapper,children:[Object(h.jsx)("div",{className:y.a.loader,children:"pending"===n&&a()}),"resolved"===n&&Object(h.jsx)("button",{className:y.a.Button,type:"button",onClick:t,children:"Load more"})]})},x=a(21),w=a.n(x);var S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,a={key:"23763255-79cd913c0d73945049700542d",q:"",image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:12,page:1};a.q=e,a.page=t;var n=w.a.get("https://pixabay.com/api/",{params:a});return n.then((function(e){return e.data}))},k=a(22),C=a.n(k),I=(a(66),a(67),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={gallery:[],status:"idle",searchQuery:"",page:1,loader:!1},e.onSubmit=function(t){t.preventDefault(),e.setState({gallery:[],page:1});var a=t.target.elements.searchInput.value;""===a.trim()?e.setState({status:"idle",searchQuery:a}):e.setState({searchQuery:a})},e.pagination=function(){e.setState((function(e){return{page:e.page+1}})),setTimeout((function(){window.scrollBy({top:document.documentElement.scrollHeight,behavior:"smooth"})}),500)},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this;""===this.state.searchQuery.trim()||this.state.searchQuery===t.searchQuery&&this.state.page===t.page||(this.setState({status:"pending"}),S(this.state.searchQuery,this.state.page).then((function(e){var t=e.hits;return a.setState((function(e){return{gallery:e.gallery.concat(t.map((function(e){return{id:e.id,webformatURL:e.webformatURL,largeImageURL:e.largeImageURL}}))),status:"resolved"}}))})).catch((function(e){throw alert(e.message),e})))}},{key:"render",value:function(){var e=this.state.status;return"idle"===e?Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(p,{onSubmit:this.onSubmit}),"Please type what you want to find..."]}):Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(p,{onSubmit:this.onSubmit}),("pending"===e||"resolved"===e)&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(f,{gallery:this.state.gallery}),Object(h.jsx)(O,{onClick:this.pagination,status:e,children:function(){return Object(h.jsx)(C.a,{color:"tomato",height:100,width:100})}})]})]})}}]),a}(r.a.Component)),M=I;o.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(M,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.1810db5f.chunk.js.map