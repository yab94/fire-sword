(()=>{"use strict";var t={499:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Board=void 0;var r=n(462),o=function(){function t(){this.width=0,this.height=0,this.sprites=[]}return t.prototype.newSprite=function(){var t=new r.Sprite(this);return this.sprites.push(t),t},t.prototype.render=function(t){this.sprites.map((function(e){return e.render(t)}))},t}();e.Board=o},821:function(t,e,n){var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{u(r.next(t))}catch(t){i(t)}}function s(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}u((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(e,"__esModule",{value:!0}),e.Game=void 0;var i=n(499),a=n(755),s=function(){function t(t){this.loopInterval=100,this.board=new i.Board,this.keyboard=new a.Keyboard;var e=document.getElementById(t);if(!e)throw new Error('invalid containerId "'+t+'"');this.container=e,this.canvas=document.createElement("canvas"),this.container.appendChild(this.canvas)}return t.prototype.initCanvas=function(){this.canvas.style.border="1px solid red",this.canvas.setAttribute("width",this.board.width+"px"),this.canvas.setAttribute("height",this.board.height+"px")},t.prototype.render=function(){var t=this.canvas.getContext("2d");if(!t)throw new Error("unable to get 2D context");t.clearRect(0,0,this.board.width,this.board.height),this.board.render(t)},t.prototype.loop=function(){return r(this,void 0,void 0,(function(){return o(this,(function(t){return[2,!1]}))}))},t.prototype.wait=function(t){return r(this,void 0,void 0,(function(){var e=this;return o(this,(function(n){switch(n.label){case 0:return[4,new Promise((function(n){return setTimeout((function(){return n(e)}),t)}))];case 1:return[2,n.sent()]}}))}))},t.prototype.start=function(){return r(this,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:this.init(),this.initCanvas(),t.label=1;case 1:return this.render(),[4,this.wait(this.loopInterval)];case 2:t.sent(),t.label=3;case 3:return[4,this.loop()];case 4:if(t.sent())return[3,1];t.label=5;case 5:return this.over(),[2]}}))}))},t}();e.Game=s},755:(t,e)=>{var n;Object.defineProperty(e,"__esModule",{value:!0}),e.Keyboard=void 0,function(t){t.ArrowRight="ArrowRight",t.ArrowLeft="ArrowLeft",t.ArrowUp="ArrowUp",t.ArrowDown="ArrowDown"}(n||(n={}));var r=function(){function t(){var t=this;this.enabled=!1,this.right=function(){},this.left=function(){},this.up=function(){},this.down=function(){},window.addEventListener("keydown",(function(e){if(t.enabled){var n=e.key;return"ArrowRight"===n?t.right():"ArrowLeft"===n?t.left():"ArrowUp"===n?t.up():"ArrowDown"===n?t.down():void 0}}))}return t.prototype.enable=function(){this.enabled=!0},t.prototype.disable=function(){this.enabled=!1},t.prototype.onRight=function(t){this.right=t},t.prototype.onUp=function(t){this.up=t},t.prototype.onDown=function(t){this.down=t},t.prototype.onLeft=function(t){this.left=t},t}();e.Keyboard=r},685:function(t,e,n){var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{u(r.next(t))}catch(t){i(t)}}function s(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}u((r=r.apply(t,e||[])).next())}))},a=this&&this.__generator||function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(e,"__esModule",{value:!0}),e.Snake=void 0;var s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.moves=0,e}return o(e,t),e.prototype.init=function(){var t=this,e=this.board.newSprite();this.loopInterval=100,this.board.width=150,this.board.height=150,this.keyboard.enable(),this.keyboard.onUp((function(){e.moveUp(30),t.moves++,t.render()})),this.keyboard.onDown((function(){e.moveDown(30),t.moves++,t.render()})),this.keyboard.onLeft((function(){e.moveLeft(30),t.moves++,t.render()})),this.keyboard.onRight((function(){e.moveRight(30),t.moves++,t.render()}))},e.prototype.loop=function(){return i(this,void 0,void 0,(function(){return a(this,(function(t){return this.render(),[2,this.moves<50]}))}))},e.prototype.over=function(){this.keyboard.disable(),console.log("Game Over")},e}(n(821).Game);e.Snake=s},462:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Sprite=void 0;var n=function(){function t(e){this.visible=!0,this.x=0,this.y=0,this.uid=t.uid++,this.board=e}return t.prototype.render=function(t){t.fillRect(this.x,this.y,30,30)},t.prototype.moveUp=function(t){if(void 0===t&&(t=1),this.y-t<0)throw new Error("can not move up");return this.y-=t,this},t.prototype.moveDown=function(t){if(void 0===t&&(t=1),this.board.height<=this.y+t)throw new Error("can not move down");return this.y+=t,this},t.prototype.moveLeft=function(t){if(void 0===t&&(t=1),this.x-t<0)throw new Error("can not move left");return this.x-=t,this},t.prototype.moveRight=function(t){if(void 0===t&&(t=1),this.board.width<=this.x+t)throw new Error("can not move right");return this.x+=t,this},t.uid=1,t}();e.Sprite=n}},e={};new(function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}(685).Snake)("app").start()})();