(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"13Ib":function(t,e,n){"use strict";n.r(e),n.d(e,"AdminModule",(function(){return P}));var r=n("tyNb"),o=n("vkgz"),s=n("fXoL"),c=n("AytR"),i=function(t){return t.CHARACTERS="character",t.LOCATIONS="location",t.EPISODES="episode",t}({}),a=n("tk/3");let h=(()=>{class t{constructor(t){this.http=t}listCharacters(){return this.http.get(`${c.a.apiUrl}/${i.CHARACTERS}`)}getCountries(){return this.http.get("https://restcountries.eu/rest/v2/lang/es")}}return t.\u0275fac=function(e){return new(e||t)(s.Rb(a.a))},t.\u0275prov=s.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),d=(()=>{class t{constructor(t){this.api=t}listCharacters(){return this.api.listCharacters()}}return t.\u0275fac=function(e){return new(e||t)(s.Rb(h))},t.\u0275prov=s.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var l=n("ofXK");function u(t,e){if(1&t&&(s.Ob(0,"div",6),s.Ob(1,"div",7),s.Kb(2,"img",8),s.Nb(),s.Ob(3,"div",9),s.Ob(4,"div",10),s.Ob(5,"h1",2),s.ic(6),s.Nb(),s.Ob(7,"span",11),s.Ob(8,"h4",2),s.ic(9),s.Nb(),s.Ob(10,"h4",2),s.ic(11),s.Nb(),s.Nb(),s.Nb(),s.Ob(12,"div",10),s.ic(13," Last know location: "),s.Ob(14,"h3",2),s.ic(15),s.Nb(),s.Nb(),s.Nb(),s.Nb()),2&t){const t=e.$implicit;s.zb(2),s.cc("src",t.image,s.fc),s.zb(4),s.kc("",t.name," "),s.zb(3),s.jc(t.status),s.zb(2),s.jc(t.species),s.zb(4),s.jc(t.location.name)}}function b(t,e){if(1&t&&(s.Mb(0),s.hc(1,u,16,5,"div",5),s.Lb()),2&t){const t=e.ngIf;s.zb(1),s.bc("ngForOf",t.results)}}let p=(()=>{class t{constructor(t){this.characterFacade=t}ngOnInit(){this.getListCharacters()}getListCharacters(){this.charactersObs$=this.characterFacade.listCharacters().pipe(Object(o.a)(t=>({res:t})))}}return t.\u0275fac=function(e){return new(e||t)(s.Jb(d))},t.\u0275cmp=s.Db({type:t,selectors:[["ng-component"]],decls:7,vars:3,consts:[[1,"container-characters","indigo-dark-theme"],[1,"characters-title"],[1,"title"],[1,"container-card"],[4,"ngIf"],["class","contain__card-characters",4,"ngFor","ngForOf"],[1,"contain__card-characters"],[1,"img__card-characters"],[1,"img-custom",3,"src"],[1,"description__card-characters"],[1,"text-container"],[1,"status"]],template:function(t,e){1&t&&(s.Ob(0,"div",0),s.Ob(1,"div",1),s.Ob(2,"h1",2),s.ic(3,"Characters"),s.Nb(),s.Nb(),s.Ob(4,"div",3),s.hc(5,b,2,1,"ng-container",4),s.Xb(6,"async"),s.Nb(),s.Nb()),2&t&&(s.zb(5),s.bc("ngIf",s.Yb(6,1,e.charactersObs$)))},directives:[l.j,l.i],pipes:[l.b],styles:[".container-characters[_ngcontent-%COMP%]{background:#202329}.container-card[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.characters-title[_ngcontent-%COMP%]{padding:20px}.title[_ngcontent-%COMP%]{color:#fff}.contain__card-characters[_ngcontent-%COMP%]{width:600px;height:220px;display:flex;box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);overflow:hidden;background:#3c3e44;border-radius:.5rem;margin:.75rem}.img__card-characters[_ngcontent-%COMP%]{width:100%;flex:2 1 0%}.img-custom[_ngcontent-%COMP%]{width:100%;height:100%;opacity:1;object-position:center center;object-fit:cover;margin:0;transition:opacity .5s ease 0s}.description__card-characters[_ngcontent-%COMP%]{position:relative;color:#fff;display:flex;flex-direction:column;flex:3 1 0%;padding:.75rem}"]}),t})();const f=function(){return["./characters"]},g=r.b.forChild([{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Db({type:t,selectors:[["app-wrapper"]],decls:14,vars:6,consts:[[1,"container-main"],[1,"contain-image"],["src","assets/background.png","alt","background",1,"img-background"],[1,"nav"],[1,"ul__container"],[1,"nav-li",3,"routerLink"],[1,"footer__msg"]],template:function(t,e){1&t&&(s.Ob(0,"div",0),s.Ob(1,"div",1),s.Kb(2,"img",2),s.Ob(3,"div",3),s.Ob(4,"div",4),s.Ob(5,"ul"),s.Ob(6,"li",5),s.ic(7,"CHARACTERS"),s.Nb(),s.Ob(8,"li",5),s.ic(9,"EPISODES"),s.Nb(),s.Ob(10,"li",5),s.ic(11,"LOCATION"),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Ob(12,"h3",6),s.ic(13,"Made by Andr\xe9s Morantes"),s.Nb(),s.Nb(),s.Nb()),2&t&&(s.zb(6),s.bc("routerLink",s.dc(3,f)),s.zb(2),s.bc("routerLink",s.dc(4,f)),s.zb(2),s.bc("routerLink",s.dc(5,f)))},directives:[r.a],styles:["@font-face{font-family:font;src:url(shlop.d4944d6940735e6066db.ttf)}.container-main[_ngcontent-%COMP%]{background:#262c3a}.contain-image[_ngcontent-%COMP%]{position:relative;height:100vh}.img-background[_ngcontent-%COMP%]{width:100%;height:100vh}.nav[_ngcontent-%COMP%]{position:absolute;left:10%;top:40%}.ul__container[_ngcontent-%COMP%]{display:flex}.ul__container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none;margin:0;color:#fff;font-family:font;font-size:51px}.nav-li[_ngcontent-%COMP%]{padding:20px 0;cursor:pointer}.footer__msg[_ngcontent-%COMP%]{position:absolute;top:90%;left:50%;color:#fff;font-family:font;font-size:20px}"]}),t})()},{path:"characters",component:p}]);n("HDdC"),n("DH7j"),n("lJxs"),n("XoHu"),n("Cfvw");let m,_=(()=>{class t{constructor(){this._accessors=[]}add(t,e){this._accessors.push([t,e])}remove(t){for(let e=this._accessors.length-1;e>=0;--e)if(this._accessors[e][1]===t)return void this._accessors.splice(e,1)}select(t){this._accessors.forEach(e=>{this._isSameGroup(e,t)&&e[1]!==t&&e[1].fireUncheck(t.value)})}_isSameGroup(t,e){return!!t[0].control&&t[0]._parent===e._control._parent&&t[1].name===e.name}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=s.Fb({token:t,factory:t.\u0275fac}),t})(),y=(()=>{class t{}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(e){return new(e||t)}}),t})(),v=(()=>{class t{}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(e){return new(e||t)},providers:[_],imports:[y]}),t})();n("R1ws");try{m="undefined"!=typeof Intl&&Intl.v8BreakIterator}catch(S){m=!1}let w=(()=>{class t{constructor(t){this._platformId=t,this.isBrowser=this._platformId?Object(l.n)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!m)&&"undefined"!=typeof CSS&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}}return t.\u0275fac=function(e){return new(e||t)(s.Rb(s.B))},t.\u0275prov=Object(s.Fb)({factory:function(){return new t(Object(s.Rb)(s.B))},token:t,providedIn:"root"}),t})();n("XNiG"),n("quSY"),n("LRne"),n("7o/Q"),n("pLZG"),n("IzEk"),"undefined"!=typeof Element&&Element;let C=(()=>{class t{constructor(t,e){this._platform=t,this._document=e}getHighContrastMode(){if(!this._platform.isBrowser)return 0;const t=this._document.createElement("div");t.style.backgroundColor="rgb(1,2,3)",t.style.position="absolute",this._document.body.appendChild(t);const e=this._document.defaultView||window,n=e&&e.getComputedStyle?e.getComputedStyle(t):null,r=(n&&n.backgroundColor||"").replace(/ /g,"");switch(this._document.body.removeChild(t),r){case"rgb(0,0,0)":return 2;case"rgb(255,255,255)":return 1}return 0}_applyBodyHighContrastModeCssClasses(){if(this._platform.isBrowser&&this._document.body){const t=this._document.body.classList;t.remove("cdk-high-contrast-active"),t.remove("cdk-high-contrast-black-on-white"),t.remove("cdk-high-contrast-white-on-black");const e=this.getHighContrastMode();1===e?(t.add("cdk-high-contrast-active"),t.add("cdk-high-contrast-black-on-white")):2===e&&(t.add("cdk-high-contrast-active"),t.add("cdk-high-contrast-white-on-black"))}}}return t.\u0275fac=function(e){return new(e||t)(s.Rb(w),s.Rb(l.d))},t.\u0275prov=Object(s.Fb)({factory:function(){return new t(Object(s.Rb)(w),Object(s.Rb)(l.d))},token:t,providedIn:"root"}),t})(),k=(()=>{class t{}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(e){return new(e||t)}}),t})();const O=new s.O("10.2.0");n("JX91");const I=new s.O("10.2.0"),N=new s.q("mat-sanity-checks",{providedIn:"root",factory:function(){return!0}});let M,E=(()=>{class t{constructor(t,e,n){this._hasDoneGlobalChecks=!1,this._document=n,t._applyBodyHighContrastModeCssClasses(),this._sanityChecks=e,this._hasDoneGlobalChecks||(this._checkDoctypeIsDefined(),this._checkThemeIsPresent(),this._checkCdkVersionMatch(),this._hasDoneGlobalChecks=!0)}_getDocument(){const t=this._document||document;return"object"==typeof t&&t?t:null}_getWindow(){const t=this._getDocument(),e=(null==t?void 0:t.defaultView)||window;return"object"==typeof e&&e?e:null}_checksAreEnabled(){return Object(s.V)()&&!this._isTestEnv()}_isTestEnv(){const t=this._getWindow();return t&&(t.__karma__||t.jasmine)}_checkDoctypeIsDefined(){const t=this._checksAreEnabled()&&(!0===this._sanityChecks||this._sanityChecks.doctype),e=this._getDocument();t&&e&&!e.doctype&&console.warn("Current document does not have a doctype. This may cause some Angular Material components not to behave as expected.")}_checkThemeIsPresent(){const t=!this._checksAreEnabled()||!1===this._sanityChecks||!this._sanityChecks.theme,e=this._getDocument();if(t||!e||!e.body||"function"!=typeof getComputedStyle)return;const n=e.createElement("div");n.classList.add("mat-theme-loaded-marker"),e.body.appendChild(n);const r=getComputedStyle(n);r&&"none"!==r.display&&console.warn("Could not find Angular Material core theme. Most Material components may not work as expected. For more info refer to the theming guide: https://material.angular.io/guide/theming"),e.body.removeChild(n)}_checkCdkVersionMatch(){this._checksAreEnabled()&&(!0===this._sanityChecks||this._sanityChecks.version)&&I.full!==O.full&&console.warn("The Angular Material version ("+I.full+") does not match the Angular CDK version ("+O.full+").\nPlease ensure the versions of these two packages exactly match.")}}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(e){return new(e||t)(s.Rb(C),s.Rb(N,8),s.Rb(l.d,8))},imports:[[k],k]}),t})();try{M="undefined"!=typeof Intl}catch(S){M=!1}let A=(()=>{class t{}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(e){return new(e||t)},imports:[[E],E]}),t})();const j=[A];let x=(()=>{class t{}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(e){return new(e||t)},imports:[[...j],A]}),t})();const D=[l.c,v,r.b,x];let R=(()=>{class t{}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(e){return new(e||t)},imports:[[...D],l.c,v,r.b,x]}),t})(),P=(()=>{class t{}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(e){return new(e||t)},providers:[],imports:[[R,x,g]]}),t})()}}]);