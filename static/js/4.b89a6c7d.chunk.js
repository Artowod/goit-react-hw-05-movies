(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[4],{31:function(e,t,r){"use strict";r.d(t,"d",(function(){return o})),r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return u})),r.d(t,"c",(function(){return s})),r.d(t,"e",(function(){return p}));var n=r(33),a=r(37),c=r.n(a);function o(){var e={api_key:n.a};return c.a.get(n.c+n.b.getTrending,{params:e})}function i(e){var t={api_key:n.a};return c.a.get(n.c+n.b.getMovieDetail+e,{params:t}).catch((function(e){return console.log(e.toJSON()),Promise.reject(new Error("Not found"))})).then((function(e){return e.data}))}function u(e){var t={api_key:n.a};return c.a.get(n.c+n.b.getMovieDetail+e+"/credits",{params:t}).catch((function(e){return console.log(e.toJSON()),Promise.reject(new Error("Not found"))})).then((function(e){return e.data}))}function s(e){var t={api_key:n.a};return c.a.get(n.c+n.b.getMovieDetail+e+"/reviews",{params:t}).catch((function(e){return console.log(e.toJSON()),Promise.reject(new Error("Not found"))})).then((function(e){return e.data}))}function p(e){var t={api_key:n.a,query:e};return c.a.get(n.c+n.b.searchMovie,{params:t})}},33:function(e){e.exports=JSON.parse('{"a":"13b5a298ebf841dea0e3d6624b351e0e","c":"https://api.themoviedb.org/3/","b":{"getTrending":"trending/movie/week","searchMovie":"search/movie","getMovieDetail":"movie/","getMovieCredits":"movie/","getMovieReviews":"movie/"}}')},36:function(e,t,r){e.exports={wrapper:"MoviesList_wrapper__uCjWl"}},38:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(36),a=r.n(n),c=r(9),o=r(2),i=function(e){var t=e.moviesData,r=e.prevPageParam;return Object(o.jsx)("div",{className:a.a.wrapper,children:Object(o.jsx)("ul",{children:t.map((function(e){var t=e.title,n=e.id;return Object(o.jsx)("li",{className:a.a.item,children:Object(o.jsxs)(c.b,{to:{pathname:"/movies/".concat(n),state:{prevPageParam:r}},children:[" ",t," "]})},n)}))})})}},65:function(e,t,r){e.exports={searchBar:"SearchBar_searchBar__id4QJ",searchForm_input:"SearchBar_searchForm_input__Y41f_",searchForm_button:"SearchBar_searchForm_button__1HzM6"}},76:function(e,t,r){"use strict";r.r(t);var n=r(32),a=r(38);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=r(0),s=r(1),p=r(65),f=r.n(p),b=r(2),h=function(){var e=Object(u.useState)(""),t=Object(n.a)(e,2),r=t[0],a=t[1],c=Object(s.h)(),o=Object(s.g)();return Object(b.jsxs)("header",{className:f.a.searchBar,children:[Object(b.jsx)("input",{className:f.a.searchForm_input,type:"text",autoComplete:"off",name:"searchInput",value:r,autoFocus:!0,placeholder:"please type keyword here",onChange:function(e){var t=e.target.value;a(t)}}),Object(b.jsx)("button",{type:"button",className:f.a.searchForm_button,onClick:function(e){o.push(i(i({},c),{},{search:"query=".concat(r)}))},children:"Search"})]})},l=r(31);t.default=function(){var e=Object(s.h)(),t=new URLSearchParams(e.search).get("query"),r=Object(u.useState)([]),c=Object(n.a)(r,2),o=c[0],i=c[1];return Object(u.useEffect)((function(){t&&Object(l.e)(t).then((function(e){var t=e.data;i(t.results)})).catch((function(e){console.log("error: ",e)}))}),[t]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{}),t&&Object(b.jsx)(a.a,{moviesData:o,prevPageParam:t})]})}}}]);
//# sourceMappingURL=4.b89a6c7d.chunk.js.map