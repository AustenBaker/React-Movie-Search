(this["webpackJsonpreact-movie-search"]=this["webpackJsonpreact-movie-search"]||[]).push([[5],{34:function(e,i,s){"use strict";s.r(i);var t=s(0),c=(s(2),s(11));i.default=function(e){var i=e.searchResults,s=e.details,a=e.fetchDetails;return i.Response?Object(t.jsx)("div",{id:"searchResultsContainer",className:"bg-dark text-white",children:i.Search.map((function(e,i){return Object(t.jsx)("div",{className:"movieCardContainer",children:Object(t.jsxs)("div",{id:e.imdbID,className:"movieCardInner",onMouseEnter:function(){return a(e.imdbID)},children:[Object(t.jsx)("div",{className:"movieCardFront",children:Object(t.jsx)("img",{className:"movieImg",src:e.Poster,alt:e.Title})}),Object(t.jsxs)("div",{className:"movieCardBack",children:[Object(t.jsxs)("div",{id:"cardBackHeader",children:[" ",s.Title," "]}),Object(t.jsxs)("div",{id:"cardBackGenres",children:[" ",s.Genre," "]}),Object(t.jsxs)("div",{id:"imbdContainer",children:[Object(t.jsx)(c.a,{icon:["fab","imdb"],size:"2x",id:"imdbIcon",color:"#DBA506"}),Object(t.jsxs)("div",{id:"imbdRating",children:[s.imdbRating," / 10  "]})]}),Object(t.jsxs)("div",{id:"cardBackPlot",children:[" ",s.Plot," "]})," ",Object(t.jsx)("br",{}),Object(t.jsx)("button",{className:"fixed-bottom showDetailsButton",onClick:function(){a(e.imdbID),document.getElementById("movieDetailsContainer").style.display="block",document.getElementById("searchResultsContainer").style.display="none"},children:" Show All Details "})]})]},i)})}))}):Object(t.jsx)("h1",{id:"searchResultsContainer",children:"Loading..."})}}}]);
//# sourceMappingURL=5.a31303c2.chunk.js.map