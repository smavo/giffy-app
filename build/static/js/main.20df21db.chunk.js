(this["webpackJsonpgiffy-app"]=this["webpackJsonpgiffy-app"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(5),c=a.n(o),i=(a(12),a(13),a(2)),l=a(1);a(14);var s=function(e){var t=e.id,a=e.title,n=e.url;return r.a.createElement("div",{className:"Gif"},r.a.createElement(i.a,{to:"/gif/".concat(t),className:"Gif-link"},r.a.createElement("h3",null,a),r.a.createElement("img",{loading:"lazy",alt:a,src:n})))};a(15);var u=function(e){var t=e.gifs;return r.a.createElement("div",{className:"ListGifs"},t.map((function(e){var t=e.id,a=e.title,n=e.url;return r.a.createElement(s,{key:t,title:a,url:n,id:t})})))},m="FdbJxKPfIe8M0TjVcM8c6iMK0HN2NZeP",f=function(e){var t=e.data,a=void 0===t?[]:t;return Array.isArray(a)?a.map((function(e){var t=e.images;return{title:e.title,id:e.id,url:t.downsized_medium.url}})):[]};function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.limit,a=void 0===t?30:t,n=e.search,r=void 0===n?"Luna":n,o="https://api.giphy.com/v1/gifs/search?api_key=".concat(m,"&q=").concat(r,"&limit=").concat(a,"&offset=0&rating=G&lang=en");return fetch(o).then((function(e){return e.json()})).then(f)}var g=r.a.createContext({});function p(e){var t=e.children,a=Object(n.useState)([]),o=Object(l.a)(a,2),c=o[0],i=o[1];return r.a.createElement(g.Provider,{value:{gifs:c,setGifs:i}},t)}var v=g;var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{search:null},t=e.search,a=Object(n.useState)(!1),r=Object(l.a)(a,2),o=r[0],c=r[1],i=Object(n.useContext)(v),s=i.gifs,u=i.setGifs;return Object(n.useEffect)((function(){c(!0),d({search:t||localStorage.getItem("lastSearch")||"random"}).then((function(e){u(e),c(!1),localStorage.setItem("lastSearch",t)}))}),[t,u]),{loading:o,gifs:s}},E=a(6);a(16);var b=function(e){var t=e.name,a=e.options,n=void 0===a?[]:a,o=Object(E.a)(e,["name","options"]);return r.a.createElement("div",{className:o.className},r.a.createElement("h3",{className:"Category-title"},t),r.a.createElement("ul",{className:"Category-list"},n.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement(i.a,{className:"Category-link",to:"/search/".concat(e)},e))}))))},w=["Stich","Cat","dog"];function y(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],o=t[1],c=Object(i.c)(),s=Object(l.a)(c,2),m=(s[0],s[1]),f=h(),d=(f.loading,f.gifs);return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),m("/search/".concat(a))}},r.a.createElement("input",{placeholder:"Search a gif here...",onChange:function(e){o(e.target.value)},type:"text",value:a}),r.a.createElement("button",null,"Buscar")),r.a.createElement("div",{className:"App-main"},r.a.createElement("div",{className:"App-results"},r.a.createElement("h3",{className:"App-title"},"\xdaltima b\xfasqueda"),r.a.createElement(u,{gifs:d})),r.a.createElement("div",{className:"App-categoria"},r.a.createElement(b,{name:"Categorias populares",options:w}),r.a.createElement(b,{name:"Mascotas",options:["Perros","Gatos","Hamster"]}))))}function N(e){var t=e.params,a=Object(n.useContext)(v).gifs.find((function(e){return e.id===t.id}));return console.log(a),r.a.createElement(s,a)}var j=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Cargando Gifd, un momento por favor"))};function k(e){var t=e.params.search,a=h({search:t}),n=a.loading,o=a.gifs;return r.a.createElement(r.a.Fragment,null,n?r.a.createElement(j,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"App-title"},"Busqueda: ",t),r.a.createElement(u,{gifs:o})))}var S=r.a.createContext({name:"Sergio",demo:!0});var A=function(){return r.a.createElement(S.Provider,null,r.a.createElement("div",{className:"App"},r.a.createElement("section",{className:"App-content"},r.a.createElement(i.a,{to:"/"},r.a.createElement("img",{className:"App-logo",alt:"Giphy Logo",src:"../logo.svg"})),r.a.createElement(p,null,r.a.createElement(i.b,{component:y,path:"/"}),r.a.createElement(i.b,{component:k,path:"/search/:search"}),r.a.createElement(i.b,{component:N,path:"/gif/:id"})))))},C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/giffy-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/giffy-app","/service-worker.js");C?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):O(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):O(t,e)}))}}()}],[[7,1,2]]]);
//# sourceMappingURL=main.20df21db.chunk.js.map