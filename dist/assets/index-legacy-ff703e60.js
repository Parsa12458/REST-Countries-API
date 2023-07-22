System.register([],(function(e,n){"use strict";return{execute:function(){var e=document.createElement("style");e.textContent='@import"https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap";:root{--blue: hsl(209, 23%, 22%);--dark-blue: hsl(207, 26%, 17%);--very-dark-blue: hsl(200, 15%, 8%);--dark-gray: hsl(0, 0%, 52%);--very-light-gray: hsl(0, 0%, 98%);--white: hsl(0, 0%, 100%)}*,*:after,*:before{margin:0;padding:0;box-sizing:inherit}html{font-size:62.5%}body{box-sizing:border-box;font-family:Nunito Sans,sans-serif;font-size:1.4rem;color:var(--very-dark-blue);background-color:var(--very-light-gray)}.container{min-width:37.5rem}.header{display:flex;justify-content:space-between;align-items:center;padding:2.4rem 2rem;background-color:var(--white);box-shadow:0 0 1rem .2rem rgba(0,0,0,.1)}.header__title{font-size:2rem;cursor:pointer}.dark-mode{padding:1.2rem 2rem;width:12.9rem;display:flex;align-items:center;justify-content:space-between;background:none;outline:none;border:none;border-bottom:1px transparent solid;transition:all .3s;cursor:pointer}.dark-mode span{font-size:1.3rem}.dark-mode:hover{border-bottom:1px #000 solid}.form{display:flex;flex-direction:column;margin-top:3rem;padding:0 2rem}.form__search-container{display:flex;align-items:center;box-shadow:0 0 1rem .1rem rgba(0,0,0,.05);margin-bottom:4rem;background-color:#fff;border-radius:.3rem}.form__search-container ion-icon{width:2.4rem;height:2.4rem;color:#999;margin-left:2rem}.form__search-input{padding:1.5rem 0 1.5rem 2rem;width:100%;border:none;outline:none}.form__search-input::-moz-placeholder{color:#999}.form__search-input::placeholder{color:#999}.form__filter{width:-moz-max-content;width:max-content;padding:1.4rem 6rem 1.4rem 2rem;border:none;outline:none;box-shadow:0 0 1rem .1rem rgba(0,0,0,.1)}.cards{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;margin-top:5rem;padding:0 4rem 5rem;gap:3rem}.card{display:grid;grid-template-rows:repeat(3,max-content);justify-items:start;width:25rem;box-shadow:0 0 2rem .1rem rgba(0,0,0,.1);border-radius:.5rem;overflow:hidden;padding-bottom:2rem;cursor:pointer}.card__flag{width:100%;height:15rem;-o-object-fit:cover;object-fit:cover}.card__title{padding:2rem 2rem 0;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.card__info-container{padding:2rem;line-height:1.8}.card-info{font-weight:600}.card-info span{font-weight:300}.btn{display:inline-block;padding:.8rem 3rem;background-color:#fff;box-shadow:0 0 .5rem .1rem rgba(0,0,0,.1);border-radius:.3rem;text-decoration:none;color:#000;cursor:pointer}.btn--close{width:11rem;display:flex;align-items:center;justify-content:space-between;margin-bottom:5rem;font-weight:600}.modal{background-color:var(--very-light-gray);padding:0 2.5rem 5rem}.hidden{display:none}.modal-container{display:flex;flex-direction:column;gap:3rem}.modal__flag{width:70vw;-o-object-fit:cover;object-fit:cover;align-self:center}.modal__title{margin-bottom:1rem;font-size:2rem}.modal__info-container{display:flex;flex-direction:column;gap:2rem;line-height:1.8;margin-bottom:3rem}.modal-info{font-weight:600}.modal-info span{font-weight:300}.modal__border{display:flex;flex-direction:column;gap:1.5rem}.modal__border div{display:flex;flex-wrap:wrap;gap:1rem}.spinner{border:16px solid #f3f3f3;border-top:16px solid #3498db;border-radius:50%;width:120px;height:120px;animation:spin 2s linear infinite}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.error{font-size:2rem;font-weight:600}body.dark-theme{background-color:var(--dark-blue);color:var(--white)}body.dark-theme .header{background-color:var(--blue);box-shadow:0 0 1rem .2rem rgba(0,0,0,.3)}body.dark-theme input,body.dark-theme select{background-color:var(--blue);color:var(--white)}body.dark-theme .form__search-container{background-color:var(--blue)}body.dark-theme .card{box-shadow:0 0 2rem .1rem rgba(0,0,0,.4)}body.dark-theme .dark-mode span,body.dark-theme .dark-mode ion-icon{color:#fff}body.dark-theme .dark-mode:hover{border-bottom:1px #fff solid}body.dark-theme .modal{background-color:var(--dark-blue)}body.dark-theme .btn{background-color:var(--blue);color:var(--white)}@media only screen and (min-width: 38.125em){.form{flex-direction:row;align-items:center;justify-content:space-between}.form__search-container{margin-bottom:0;width:50%}.form__filter{box-shadow:0 0 1rem .1rem rgba(0,0,0,.05)}}@media only screen and (min-width: 75em){html{font-size:68%}.form{padding:0 4rem}.header{padding:2.4rem 4rem}.dark-mode{width:13rem}.modal-container{flex-direction:row;gap:10rem}.modal__flag{align-self:start;width:40vw}.modal__info-container{gap:4rem;flex-direction:row;line-height:2}}@media only screen and (min-width: 120em){html{font-size:80%}.modal-container{gap:15rem}.modal__info-container{gap:8rem}.modal__flag{width:70rem}.modal__border{flex-direction:row;align-items:center}}\n',document.head.appendChild(e);const n=document.querySelector(".cards");function o(e){const o=document.querySelector(".spinner");o&&o.remove(),e.forEach((e=>{const o=`\n      <div class="card" data-code="${e.cca2}">\n          <img src="${e.flags.png}" alt="${e.flags.alt}" class="card__flag" />\n          <h3 class="card__title">${e.name.official}</h3>\n          <div class="card__info-container">\n            <p class="card-info card__population">\n              Population: <span>${e.population.toLocaleString()}</span>\n            </p>\n            <p class="card-info card__region">Region: <span>${e.region}</span></p>\n            <p class="card-info card__capital">\n              Capital: <span>${e.capital?e.capital[0]:"-"}</span>\n            </p>\n          </div>\n      </div>\n    `;n.insertAdjacentHTML("beforeend",o)}))}async function r(e,n,o=!0){try{o&&function(e=document.querySelector(".cards")){e.innerHTML="",e.insertAdjacentHTML("beforeend",'<div class="spinner"></div>')}();const r=await Promise.race([n?fetch(`${e}${n}`):fetch(e),new Promise(((e,n)=>setTimeout((()=>n(new Error("Request took too long! Please try again."))),5e3)))]);return await r.json()}catch(r){throw r}}function a(e,n=document.querySelector(".cards")){n.innerHTML=`<p class="error">${e}</p>`}const t=document.querySelector(".cards");function i(e){const n=document.querySelector(".spinner");n&&n.remove();const o=e[0];let i;const d=function(){const e=`\n      <div class="modal">\n          <span class="btn btn--close">\n            <ion-icon name="arrow-back-outline"></ion-icon>\n            <span>Back</span>\n          </span>\n\n          <div class="modal-container">\n            <img src="${o.flags.png}" alt="${o.flags.alt}" class="modal__flag" />\n\n            <div class="modal__textbox">\n              <h3 class="modal__title">${o.name.official}</h3>\n\n              <div class="modal__info-container">\n                <div>\n                  <p class="modal-info modal-info--name">\n                    Native Name: <span>${Object.values(o.name.nativeName)[0].official}</span>\n                  </p>\n                  <p class="modal-info modal-info--population">\n                    Population: <span>${o.population.toLocaleString()}</span>\n                  </p>\n                  <p class="modal-info modal-info--region">\n                    Region: <span>${o.region}</span>\n                  </p>\n                  <p class="modal-info modal-info--sub-region">\n                    Sub Region: <span>${o.subregion}</span>\n                  </p>\n                  <p class="modal-info modal-info--capital">\n                    Capital: <span>${o.capital[0]}</span>\n                  </p>\n                </div>\n                <div>\n                  <p class="modal-info modal-info--domain">\n                    Top Level Domain: <span>${o.tld.join(", ")}</span>\n                  </p>\n                  <p class="modal-info modal-info--currency">\n                    Currencies: <span>${Object.values(o.currencies)[0].name}</span>\n                  </p>\n                  <p class="modal-info modal-info--language">\n                    Languages: <span>${Object.values(o.languages).join(", ")}</span>\n                  </p>\n                </div>\n              </div>\n\n              <div class="modal__border">\n                <h4>Border Countries:</h4>\n                <div>\n                  ${i}\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>`;t.insertAdjacentHTML("beforeend",e),document.querySelector(".btn--close")&&document.querySelector(".btn--close").addEventListener("click",b)};o.borders?async function(e){try{return(await Promise.all(e.map((async function(e){return r("https://restcountries.com/v3.1/alpha/",e,!1)})))).flat().map((e=>({name:e.name.common,code:e.cca3}))).map((e=>`<a class="btn" href="?country=${e.code}">${e.name}</a> \n      `)).join("")}catch(n){a(n.message)}}(o.borders).then((e=>{i=e,d()})):(i="No bordering countries",d())}function d(e){let n;document.body.classList.toggle("dark-theme"),document.body.classList.contains("dark-theme")?(n=!0,document.querySelector(".dark-mode ion-icon").name="moon"):(n=!1,document.querySelector(".dark-mode ion-icon").name="moon-outline"),localStorage.setItem("darkMode",n)}const c=document.querySelector(".form"),s=document.querySelector(".form__search-input"),l=document.querySelector(".form__filter"),m=document.querySelector(".cards"),p=document.querySelector(".dark-mode"),f=document.querySelector(".header__title"),u=async function(){try{const e=await r("https://restcountries.com/v3.1/all");e&&o(e)}catch(e){a(e.message)}},g=async function(e){try{e.preventDefault();const n=await r("https://restcountries.com/v3.1/name/",s.value);if(404===n.status)throw new Error(`No countries found matching "${s.value}". Please try again!`);o(n),s.value=""}catch(n){a(n.message)}},h=async function(e){try{const n=e.target.options[e.target.selectedIndex].value;if(""===n)return u();const a=await r(`https://restcountries.com/v3.1/region/${n}`);o(a)}catch(n){a(n.message)}},b=function(){u(),history.back()},y=async function(e){try{const n=e.target.closest(".card");if(!n)return;const{code:o}=n.dataset;i(await r("https://restcountries.com/v3.1/alpha/",o)),history.pushState(null,"",`?country=${o}`)}catch(n){a(n.message)}},v=async function(){try{const e=new URLSearchParams(window.location.search).get("country");e?i(await r("https://restcountries.com/v3.1/alpha/",e)):u()}catch(e){a(e.message)}};"true"===localStorage.getItem("darkMode")?(document.body.classList.add("dark-theme"),document.querySelector(".dark-mode ion-icon").name="moon"):document.querySelector(".dark-mode ion-icon").name="moon-outline",v(),p.addEventListener("click",d),f.addEventListener("click",u),c.addEventListener("submit",g),l.addEventListener("change",h),m.addEventListener("click",y),window.addEventListener("popstate",(function(){v()}))}}}));