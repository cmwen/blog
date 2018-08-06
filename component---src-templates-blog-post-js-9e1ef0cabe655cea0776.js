(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{138:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=o(n(1)),l=o(n(0));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(e,t){var n=e.children,l=e.color,o=e.size,i=e.style,c=e.width,u=e.height,s=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["children","color","size","style","width","height"]),d=t.reactIconBase,m=void 0===d?{}:d,f=o||m.size||"1em";return r.default.createElement("svg",a({children:n,fill:"currentColor",preserveAspectRatio:"xMidYMid meet",height:u||f,width:c||f},m,s,{style:a({verticalAlign:"middle",color:l||m.color},m.style||{},i)}))};i.propTypes={color:l.default.string,size:l.default.oneOfType([l.default.string,l.default.number]),width:l.default.oneOfType([l.default.string,l.default.number]),height:l.default.oneOfType([l.default.string,l.default.number]),style:l.default.object},i.contextTypes={reactIconBase:l.default.shape(i.propTypes)},t.default=i,e.exports=t.default},139:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var a=n(46),r=n.n(a),l=n(1),o=n.n(l),i=n(0),c=n.n(i),u=n(88),s=n.n(u),d=n(145),m=n.n(d),f=(n(140),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e="/"===this.props.location.pathname;return o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,{title:"Min's blog",meta:[{name:"description",content:"Sample"},{name:"keywords",content:"blog, javascript"}]},o.a.createElement("html",{lang:"en"})),o.a.createElement("div",{style:{background:"limegreen",marginBottom:"1.45rem"}},o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:e?"1.45rem 1.0875rem":"1rem 0.75rem"}},o.a.createElement("h1",{style:{margin:0,fontSize:e?"2.5rem":"2rem"}},o.a.createElement(s.a,{to:"/",style:{color:"white",textDecoration:"none"}},"Min's Blog")))),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},this.props.children))},t}(o.a.Component));f.propTypes={children:c.a.func}},140:function(e,t,n){},142:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(1),r=n.n(a),l=n(88),o=n.n(l);function i(e){var t=e.children,n=e.className,a=e.to;return r.a.createElement(o.a,{className:["link"].concat(n||[]).join(" "),to:a},t)}n(143)},143:function(e,t,n){},146:function(e,t,n){},290:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(145),o=n.n(l),i=n(303),c=n.n(i),u=n(304),s=n.n(u),d=n(142),m=n(88),f=n.n(m);function p(e){var t=e.list,n=void 0===t?[]:t;return r.a.createElement("ul",{className:"tag-list"},n.map(function(e){return r.a.createElement("li",{key:e},r.a.createElement(f.a,{to:"/tags/"+e},e))}))}n(146);var v=n(139);function h(e){var t=e.data,n=e.pageContext,a=t.markdownRemark,l=n.next,i=n.prev;return r.a.createElement(v.a,e,r.a.createElement("div",{className:"blog-post-container"},r.a.createElement(o.a,{title:"Gatsby Blog - "+a.frontmatter.title}),r.a.createElement("div",{className:"blog-post"},r.a.createElement("h1",{className:"title"},a.frontmatter.title),r.a.createElement("h2",{className:"date"},a.frontmatter.date),r.a.createElement("div",{className:"blog-post-content",dangerouslySetInnerHTML:{__html:a.html}}),r.a.createElement(p,{list:a.frontmatter.tags||[]}),r.a.createElement("div",{className:"navigation"},i&&r.a.createElement(d.a,{className:"link prev",to:i.frontmatter.path},r.a.createElement(c.a,null)," ",i.frontmatter.title),l&&r.a.createElement(d.a,{className:"link next",to:l.frontmatter.path},l.frontmatter.title," ",r.a.createElement(s.a,null))))))}n(305),n.d(t,"default",function(){return h}),n.d(t,"pageQuery",function(){return g});var g="3648998997"},303:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=o(n(1)),l=o(n(138));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return r.default.createElement(l.default,a({viewBox:"0 0 40 40"},e),r.default.createElement("g",null,r.default.createElement("path",{d:"m31.1 6.7l-11.8 11.9 11.8 11.8q0.5 0.4 0.5 1t-0.5 1l-3.7 3.7q-0.4 0.5-1 0.5t-1-0.5l-16.5-16.5q-0.5-0.4-0.5-1t0.5-1l16.5-16.6q0.5-0.4 1-0.4t1 0.4l3.7 3.7q0.5 0.4 0.5 1t-0.5 1z"})))},e.exports=t.default},304:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=o(n(1)),l=o(n(138));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return r.default.createElement(l.default,a({viewBox:"0 0 40 40"},e),r.default.createElement("g",null,r.default.createElement("path",{d:"m31.2 19.6l-16.6 16.5q-0.4 0.5-1 0.5t-1-0.5l-3.7-3.7q-0.4-0.4-0.4-1t0.4-1l11.9-11.8-11.9-11.9q-0.4-0.4-0.4-1t0.4-1l3.7-3.7q0.5-0.4 1-0.4t1 0.4l16.6 16.6q0.4 0.4 0.4 1t-0.4 1z"})))},e.exports=t.default},305:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-9e1ef0cabe655cea0776.js.map