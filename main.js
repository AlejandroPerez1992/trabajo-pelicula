!function(n){var a={};function e(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return n[t].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=n,e.c=a,e.d=function(n,a,t){e.o(n,a)||Object.defineProperty(n,a,{enumerable:!0,get:t})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,a){if(1&a&&(n=e(n)),8&a)return n;if(4&a&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&a&&"string"!=typeof n)for(var r in n)e.d(t,r,function(a){return n[a]}.bind(null,r));return t},e.n=function(n){var a=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(a,"a",a),a},e.o=function(n,a){return Object.prototype.hasOwnProperty.call(n,a)},e.p="",e(e.s=0)}([function(n,a,e){"use strict";e.r(a);var t=()=>'\n    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">\n    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"><\/script>\n    <script src="//code.jquery.com/jquery-1.11.1.min.js"><\/script>\n    <div class="fixed-top">\n      <nav class="navbar navbar-expand-xl navbar-dark mx-background-top-linear">\n        <div class="container">\n          <a class="navbar-brand" rel="nofollow" href="/">\n            <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg">\n              <strong>www.themoviedb.org</strong>    \n          </a>\n          \n          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">\n            <span class="navbar-toggler-icon"></span>\n          </button>\n          <div class="collapse navbar-collapse" id="navbarResponsive">\n    \n            <ul class="navbar-nav ml-auto">\n    \n              <li class="nav-item active">\n                <a class="nav-link" href= "https://www.themoviedb.org">Enlace Original\n                  <span class="sr-only">(current)</span>\n                </a>\n              </li>    \n            </ul>\n          </div>\n        </div>\n      </nav>\n    </div>\n    ';const r="http://api.themoviedb.org/3/movie/popular?api_key=49772f8f87524b9e90b4e37032d5a6a9&page=";var s=async n=>{const a=n?`${r}${n}`:r;try{const n=await fetch(a);return await n.json()}catch(n){console.log("Fetch Error..!!",n)}};var o=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[2]||"/";var i=()=>'\n        <div class="Error404">\n            <h2> Error 404 </>\n         </div>   \n    ';var l=n=>{if(n.length<=800){return"/"===n?n:"/:id"}return"/"+n};const c={"/":async()=>`\n            <div class="Movies">\n            ${(await s()).results.map(n=>`\n            <article class="Movies-item img">\n                <a href="#/Movie/${n.id}">\n                    <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2${n.poster_path}">\n                    <h2>${n.title}</h2>\n                </a>\n                               \n            </article>\n            `).join("")}\n        </div>\n       \n        `,"/:id":async()=>{const n=o(),a=await s();for(let t=0;t<a.results.length;t++){const r=a.results[t];if(a.results[t].id==n){var e=new Date(r.release_date).getFullYear();return`\n            <br>\n            <div class="Movies-inner">\n                <article class="Movies-card h2">\n                    <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2${r.poster_path}">\n                    <a role="button" href="" class="btn btn-info btn-sm btn-block">Volver</a>\n                </article>\n    \n                <article class="Movies-card h3">\n                <h6 class="display-4">${r.original_title} - ${e}</h6>\n                <hr>\n                    <h3>${r.title}</h3>\n                    <h3>ID de la pelicula: <span>${r.id}</span></h3>\n                    <h3>Lenguaje: <span>${r.original_language}</span></h3>\n                    <h3>Resumen: <span>${r.overview}</span></h3>\n                    <h3>Valoracion: <span>${r.vote_average} / 10</span></h3>\n                </article>\n                \n            </div>\n            <div class="Movies-inner">\n                <article class="Movies-card h2">\n                   \n                    <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2${r.backdrop_path}">\n                    <a role="button" href="" class="btn btn-info btn-sm btn-block">Volver</a>\n                </article>\n    \n                <article class="Movies-card h3">\n                <h6 class="display-4">${r.original_title} - ${e}</h6>\n                <hr>\n                    <h3>${r.title}</h3>\n                    <h3>Fecha de estreno: <span>${r.release_date}</span></h3>\n                    <h3>Lenguaje: <span>${r.original_language}</span></h3>\n                    <h3>Rating: <span>${r.popularity}</span></h3>\n                    <h3>Vistas: <span>${r.vote_count}</span></h3>\n                    <h3>Contenido adulto: <span>${r.adult}</span></h3>\n                    <h3>Trailer: <span>${r.video}</span></h3>\n                </article>\n                \n            </div> \n            \n        `}}}};var d=async()=>{const n=document.getElementById("header"),a=document.getElementById("content");n.innerHTML=await t();let e=o(),r=await l(e),s=c[r]?c[r]:i;a.innerHTML=await s()};window.addEventListener("load",d),window.addEventListener("hashchange",d)}]);