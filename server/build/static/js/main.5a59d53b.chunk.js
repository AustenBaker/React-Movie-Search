(this["webpackJsonpreact-movie-search"]=this["webpackJsonpreact-movie-search"]||[]).push([[0],{23:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(2),c=n.n(s),r=n(15),i=n.n(r),o=n(3),l=n.n(o),u=n(6),h=n(9),d=n(10),j=n(7),b=n(12),m=n(11);n(23);function p(e){return f.apply(this,arguments)}function f(){return(f=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/movies/key/"+t,{method:"GET"});case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return v.apply(this,arguments)}function v(){return(v=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/movies/ID/"+t,{method:"GET"});case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(24);var y=n(5),O=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"container-fluid mt-5",id:"FOOTER",children:[Object(a.jsx)("div",{className:"row justify-content-center",style:{backgroundColor:"#066"},children:Object(a.jsxs)("div",{className:"py-3",children:[Object(a.jsx)("a",{href:"https://www.linkedin.com/in/austenbaker/",children:Object(a.jsx)(y.a,{icon:["fab","linkedin"],size:"4x",color:"#022",className:"footer-icon"})}),Object(a.jsx)("a",{href:"https://github.com/AustenBaker/",className:"mx-5",children:Object(a.jsx)(y.a,{icon:["fab","github"],size:"4x",color:"#022",className:"footer-icon"})}),Object(a.jsx)("a",{href:"mailto:austenbaker225@gmail.com",className:"",children:Object(a.jsx)(y.a,{icon:["fa","envelope"],size:"4x",color:"#022",className:"footer-icon"})})]})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("p",{className:"col-12 p-2 m-0 text-center text-white",style:{backgroundColor:"#022"},children:["\xa9 2020 Copyright:",Object(a.jsx)("a",{href:"https://austenbaker.com/",className:"text-white ml-2",children:"austenbaker.com"})]})})]})}}]),n}(c.a.Component),g=function(e){var t=e.input,n=e.onChange,s=e.getSearchResults;return Object(a.jsxs)("div",{id:"navBarContainer",children:[Object(a.jsxs)("h1",{id:"mainHeader",onClick:function(){return document.getElementById("movieDetailsContainer").style.display="none",document.getElementById("searchResultsContainer").style.display="none",document.getElementById("QuickSearchContainer").style.display="flex",void(document.getElementById("quickSearchHeader").style.display="block")},children:["React",Object(a.jsx)(y.a,{icon:["fa","film"],style:{marginLeft:10,marginRight:8,color:"red"}}),"Search"]}),Object(a.jsxs)("div",{id:"searchBar",children:[Object(a.jsx)("input",{type:"text",name:"key",value:t,onChange:n,className:"searchInput",placeholder:"Search movies..."}),Object(a.jsx)(y.a,{icon:["fa","search"],id:"searchIcon",style:{}}),Object(a.jsx)("input",{type:"submit",id:"searchButton",value:"Search",onClick:function(){return s(t)}})]})]})},k=n(8),S=n(16),C=n(4);k.b.add(S.a,C.i,C.c,C.b,C.d,C.a,C.g,C.e,C.f,C.h);var D=c.a.lazy((function(){return n.e(5).then(n.bind(null,33))})),w=c.a.lazy((function(){return n.e(4).then(n.bind(null,34))})),R=c.a.lazy((function(){return n.e(3).then(n.bind(null,35))})),N=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).onChange=function(e){a.setState({input:e.target.value})},a.onChange=a.onChange.bind(Object(j.a)(a)),a.getSearchResults=a.getSearchResults.bind(Object(j.a)(a)),a.getMovieDetails=a.getMovieDetails.bind(Object(j.a)(a)),a.state={input:"",searchResultsData:[],movieDetailsData:[]},a}return Object(d.a)(n,[{key:"getSearchResults",value:function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t);case 2:n=e.sent,this.setState({searchResultsData:n}),document.getElementById("movieDetailsContainer").style.display="none",document.getElementById("searchResultsContainer").style.display="flex",document.getElementById("quickSearchHeader").style.display="none",document.getElementById("QuickSearchContainer").style.display="none";case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getMovieDetails",value:function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t);case 2:n=e.sent,this.setState({movieDetailsData:n});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"bg-dark",children:[Object(a.jsx)("div",{className:"wrapper",children:Object(a.jsxs)(s.Suspense,{fallback:Object(a.jsx)("div",{children:"Loading..."}),children:[Object(a.jsx)(g,{input:this.state.input,onChange:this.onChange,getSearchResults:this.getSearchResults}),Object(a.jsx)("h4",{id:"quickSearchHeader",className:"text-white text-center",children:"Quick Icon Search"}),Object(a.jsx)(R,{getSearchResults:this.getSearchResults}),Object(a.jsx)(D,{searchResults:this.state.searchResultsData,movieDetails:this.state.movieDetailsData,getMovieDetails:this.getMovieDetails}),Object(a.jsx)(w,{data:this.state.movieDetailsData})]})}),Object(a.jsx)("footer",{children:Object(a.jsx)(O,{})})]})}}]),n}(s.Component);n(31);i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.5a59d53b.chunk.js.map