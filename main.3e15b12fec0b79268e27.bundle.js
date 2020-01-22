!function(t){function e(e){for(var n,i,s=e[0],c=e[1],u=e[2],h=0,d=[];h<s.length;h++)i=s[h],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);for(l&&l(e);d.length;)d.shift()();return r.push.apply(r,u||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],n=!0,s=1;s<o.length;s++){var c=o[s];0!==a[c]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},a={0:0},r=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;r.push([558,1]),o()}({1494:function(t,e,o){"use strict";o.r(e);var n=o(160),a=o.n(n),r=o(557);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function c(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var h=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,u(e).call(this,"bootGame"))}var o,n,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(e,Phaser.Scene),o=e,(n=[{key:"preload",value:function(){this.load.setPath("assets/sprites/"),this.load.image("banner","GUI/banner.png"),this.load.image("bannerParchment","GUI/bannerParchment.png"),this.load.image("parchment","GUI/parchment.png"),this.load.image("menuBox","GUI/mediumModalBox.png"),this.load.image("lightButton","GUI/redButton.png"),this.load.image("darkButton","GUI/darkRedButton.png"),this.load.image("bigLightButton","GUI/bigRedButton.png"),this.load.image("bigDarkButton","GUI/bigDarkRedButton.png"),this.load.image("containerBar","GUI/containerBar.png"),this.load.image("cursorBar","GUI/cursorBar.png"),this.load.image("yellowCursorBar","GUI/yellowCursorBar.png"),this.load.image("roundContainer","GUI/roundContainer.png"),this.load.image("redBar","GUI/redBar.png"),this.load.image("blueBar","GUI/blueBar.png"),this.load.image("yellowBar","GUI/yellowBar.png"),this.load.image("background","background.jpg"),this.load.image("shelf","food_shelf.png"),this.load.image("book","book.png"),this.load.image("openBook","openBook.png"),this.load.image("fire","elements/fire.png"),this.load.image("snowflake","elements/snowflake.png"),this.load.image("drop","elements/drop.png"),this.load.image("dust","elements/dust.png"),this.load.atlas("foods","food_dev.png","food_dev_atlas.json"),this.load.spritesheet("cauldron","cauldron/cauldron_blue.png",{frameHeight:339,frameWidth:256}),this.load.spritesheet("Mélisende","chars/char1.png",{frameWidth:600,frameHeight:600}),this.load.spritesheet("Charles","chars/char2.png",{frameWidth:600,frameHeight:600}),this.load.spritesheet("Gunièvre","chars/char3.png",{frameWidth:600,frameHeight:600}),this.load.spritesheet("Loïc","chars/char4.png",{frameWidth:600,frameHeight:600}),this.load.spritesheet("Saara","chars/char5.png",{frameWidth:600,frameHeight:600}),this.load.spritesheet("Radisa","chars/char6.png",{frameWidth:600,frameHeight:600}),this.load.spritesheet("Sorcha","chars/char7.png",{frameWidth:600,frameHeight:600}),this.load.setPath("assets/sounds/"),this.load.audio("plop","plop_01.mp3"),this.load.audio("splash","splash_01.wav"),this.load.audio("fire","Home_Office_Fireplace_01.mp3"),this.load.audio("win","achievment_03.mp3"),this.load.audio("wood","collision_wood_soft_01.wav"),this.load.audio("page","Misc_Paper_TurnPage_01.mp3"),this.load.audio("theme","ambiance/Locations_Medieval_Tavern_Song.mp3"),this.load.setPath("assets/"),this.load.bitmapFont("augustaInk","fonts/augusta.png","fonts/augusta.fnt"),this.load.bitmapFont("augusta","fonts/augustaWhite.png","fonts/augustaWhite.fnt"),this.load.json("foodData","json/foodData_dev.json"),this.load.json("charData","json/charData.json")}},{key:"create",value:function(){this.music=this.sound.add("theme"),this.music.play({mute:!1,volume:.3,rate:1,detune:0,seek:0,loop:!0,delay:0}),this.music=this.sound.add("fire"),this.anims.create({key:"cauldron_anim",frames:this.anims.generateFrameNumbers("cauldron"),frameRate:5,repeat:-1}),this.music.play({mute:!1,volume:.7,rate:1,detune:0,seek:0,loop:!0,delay:0}),this.scene.start("menuGame")}},{key:"update",value:function(){}}])&&s(o.prototype,n),a&&s(o,a),e}();function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var b=function(t){function e(t,o,n,a){var r,i,s;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),i=this,r=!(s=f(e).call(this,t))||"object"!==d(s)&&"function"!=typeof s?p(i):s;var c=216,u=74,l=t.add.bitmapText(o,n-4,"augusta",a,32,1).setOrigin(.5,.5),h=t.add.image(o,n,"bigLightButton").setDisplaySize(c,u);r.add(h),r.add(l);var y=new Phaser.Geom.Rectangle(o-c/2,n-u/2,c,u);return r.setInteractive(y,Phaser.Geom.Rectangle.Contains,{cursor:"pointer"}),t.add.existing(p(r)),r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(e,Phaser.GameObjects.Container),e}();function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function g(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function v(t,e){return!e||"object"!==m(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function w(t){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function S(t,e){return(S=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var O=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),v(this,w(e).call(this,"menuGame"))}var o,n,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&S(t,e)}(e,Phaser.Scene),o=e,(n=[{key:"preload",value:function(){this.background=this.add.image(300,400,"background"),this.menuBox=this.add.image(300,400,"menuBox").setDisplaySize(400,600)}},{key:"create",value:function(){var t=this;this.add.bitmapText(160,150,"augusta","Cooking\nfor the King",60,1),new b(this,300,330,"Start").on("pointerdown",(function(){return t.goToNextScene(t,"playGame")})),new b(this,300,430,"Options").on("pointerdown",(function(){return t.goToNextScene(t,"optionsGame")})),new b(this,300,530,"Crédits").on("pointerdown",(function(){return t.goToNextScene(t,"playGame")}))}},{key:"goToNextScene",value:function(t,e){t.cameras.main.fadeOut(),t.time.addEvent({delay:2e3,callback:function(){t.scene.start(e)}})}}])&&g(o.prototype,n),a&&g(o,a),e}();function k(t){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _(t){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function x(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function j(t,e){return(j=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var P=function(t){function e(t,o,n){var a,r,i;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,(a=!(i=_(e).call(this,t))||"object"!==k(i)&&"function"!=typeof i?x(r):i).x=450,a.y=0,a.setOrigin(0,0),a.setScale(.2),a.setTexture(o),a.setFrame(n);var s=t.charData.chars.find((function(t){return t.name===o}));return a.setData(s),a.scene.add.existing(x(a)),a}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&j(t,e)}(e,Phaser.Physics.Arcade.Sprite),e}();function B(t){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function T(t){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function C(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function G(t,e){return(G=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var M=function(t){function e(t,o,n){var a,r,i;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,(a=!(i=T(e).call(this,t,t.x,t.y))||"object"!==B(i)&&"function"!=typeof i?C(r):i).setTexture(o),a.setFrame(n);var s=t.foodData.foods.find((function(t){return t.name===n}));return a.setData(s),a.setInteractive({draggable:!0}),t.physics.add.existing(C(a)),a.setCollideWorldBounds(!0),a.setBounce(.75,.75),t.add.existing(C(a)),a}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&G(t,e)}(e,Phaser.Physics.Arcade.Sprite),e}();function E(t){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function D(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function I(t){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function L(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function W(t,e){return(W=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var U=function(t){function e(t,o){var n,a,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),a=this,n=!(r=I(e).call(this,t,300,400))||"object"!==E(r)&&"function"!=typeof r?L(a):r;var i="Patient ".concat(o+1),s=t.add.dynamicBitmapText(0,-30,"augustaInk",i,72),c=t.add.image(0,0,"bannerParchment");return c.setScale(.8),s.setScrollFactor(0).setOrigin(.5,0).setAlpha(1),n.add(c),n.add(s),n.setScale(.8),t.add.existing(L(n)),n.startTween(),n}var o,n,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&W(t,e)}(e,Phaser.GameObjects.Container),o=e,(n=[{key:"startTween",value:function(){var t=this;this.scene.tweens.add({targets:this,scaleX:1.5,scaleY:1.5,yoyo:!0,delay:1500,duration:300,onComplete:function(){t.destroy()}})}}])&&D(o.prototype,n),a&&D(o,a),e}();function V(t){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function F(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function R(t){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function H(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function A(t,e){return(A=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var N=function(t){function e(t,o){var n,a,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),a=this;var i=o;(n=!(r=R(e).call(this,t,o))||"object"!==V(r)&&"function"!=typeof r?H(a):r).x=i.pos.x,n.y=i.pos.y,n.colorBar=i.colorBar,n.startValue=i.startValue,n.goalValue=i.goalValue,n.state="created";var s=t.add.sprite(n.x,n.y,"containerBar").setScale(.7),c=t.add.sprite(s.x,s.y-2,n.colorBar).setScale(.7).setDepth(5);n.barMask=t.add.sprite(c.x+90,2*c.y+2,"yellowBar").setScale(.7).setDepth(10),n.barMask.visible=!1,n.initBarMaskX=n.barMask.x,n.stepWidth=n.barMask.displayWidth/8,c.mask=new Phaser.Display.Masks.BitmapMask(t,n.barMask);var u=(n.goalValue+5)*n.stepWidth+5;console.log("barContainer.x: "+s.x),console.log("barMask.x: "+n.barMask.x),console.log("cursorX: "+u);t.add.sprite(u,n.barMask.y,"yellowCursorBar").setScale(.7).setDepth(15);return n.add(s),n.add(c),t.add.existing(H(n)),n}var o,n,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&A(t,e)}(e,Phaser.GameObjects.Container),o=e,(n=[{key:"updateProgressBar",value:function(t){"created"==this.state&&(t=this.startValue),t<-4&&(t=-4),t>4&&(t=4),console.log("input value: "+t);var e=4-t,o=this.stepWidth*e;this.barMask.x=this.initBarMaskX-o,this.setState("updated")}}])&&F(o.prototype,n),a&&F(o,a),e}(),z=function(t,e){return{heat:t.char.data.values.healthStats.heatStart+t.dish.heat,moistness:t.char.data.values.healthStats.moistnessStart+t.dish.moistness,wealth:t.char.data.values.wealth-t.dish.cost}[e]},X={foods:["leek","bread","date","lemon","almond","olive","melon","poison"],char:"Sorcha"},Y=[X,{foods:["leek","lemon","poison"],char:"Mélisende"},{foods:["leek","bread","poison"],char:"Charles"},{foods:["leek","bread","date","lemon","poison"],char:"Gunièvre"},{foods:["leek","bread","date","lemon","almond","poison"],char:"Loïc"},{foods:["leek","bread","date","lemon","almond","poison"],char:"Saara"},{foods:["leek","bread","date","lemon","almond","olive","poison"],char:"Radisa"},X];o(551);function J(t){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function q(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function K(t,e){return!e||"object"!==J(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Q(t){return(Q=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Z(t,e){return(Z=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var $=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),K(this,Q(e).call(this,"playGame"))}var o,n,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Z(t,e)}(e,Phaser.Scene),o=e,(n=[{key:"init",value:function(t){var e=t.level,o=void 0===e?0:e;this.currentLevel=o}},{key:"preload",value:function(){this.background=this.add.image(300,400,"background"),this.shelf=this.physics.add.sprite(150,550,"shelf"),this.cauldron=this.physics.add.sprite(475,700,"cauldron")}},{key:"create",value:function(){this.physics.world.setBoundsCollision(!0,!0,!0,!0);var t=Y[this.currentLevel];this.foodData=this.cache.json.get("foodData"),this.charData=this.cache.json.get("charData"),this.cauldron.play("cauldron_anim"),this.cauldron.body.setSize(175,40),this.cauldron.body.setOffset(40,100),this.book=this.add.sprite(130,380,"book").setInteractive(),this.book.setScale(.2),this.openBook=this.add.image(0,0,"openBook"),this.openBook.setScale(.2),this.close=this.add.text(140,-90,"X",{fontFamily:"Verdana"}).setInteractive(),this.close.setTint(16711680),this.text=this.add.bitmapText(20,-80,"augusta","Recette",40,1),this.text.setTint(0),this.posY=this.text.y+20,this.info=this.add.text(-140,-70,"Ceci est un/e: ",{fontFamily:"Verdana, Tahoma, serif"}),this.info.visible=!1,this.info.setTint(0),this.container=this.add.container(400,300,[this.openBook,this.text,this.close,this.info]),this.container.visible=!1,this.book.on("pointerdown",(function(){0==this.container.visible?(this.page=this.sound.add("page"),this.page.play(),this.container.visible=!0):1==this.container.visible&&(this.container.visible=!1)}),this),this.close.on("pointerdown",(function(){this.container.visible=!1}),this),this.foods=this.physics.add.group(),Phaser.Actions.Call(t.foods,(function(t){var e=new M(this,"foods",t);this.foods.add(e)}),this),this.alignFood(this),this.char=new P(this,t.char,0),this.char.setDepth(30);var e=this.char.data.values.dialogue;0===this.currentLevel?this.addDialogue(this,e):this.levelText=new U(this,this.currentLevel),this.char.setInteractive().on("pointerdown",(function(t,o,n,a){this.scene.addDialogue(this.scene,e),this.disableInteractive()})),this.heatBar=new N(this,{pos:{x:100,y:20},colorBar:"redBar",startValue:this.char.data.values.healthStats.heatStart,goalValue:this.char.data.values.healthStats.heatEnd}),this.heatBar.updateProgressBar(),this.coldMedal=this.add.container(35,35),this.coldContainer=this.add.image(0,0,"roundContainer").setScale(.5),this.coldLogo=this.add.image(0,0,"snowflake").setScale(.3),this.coldMedal.add(this.coldContainer),this.coldMedal.add(this.coldLogo),this.heatMedal=this.add.container(375,35),this.heatContainer=this.add.image(0,0,"roundContainer").setScale(.5),this.heatLogo=this.add.image(0,0,"fire").setScale(.3),this.heatMedal.add(this.heatContainer),this.heatMedal.add(this.heatLogo),this.moistBar=new N(this,{pos:{x:100,y:50},colorBar:"blueBar",startValue:this.char.data.values.healthStats.moistnessStart,goalValue:this.char.data.values.healthStats.moistnessEnd}),this.moistBar.updateProgressBar(),this.dryMedal=this.add.container(35,100),this.dryContainer=this.add.image(0,0,"roundContainer").setScale(.5),this.dryLogo=this.add.image(0,0,"dust").setScale(.25),this.dryMedal.add(this.dryContainer),this.dryMedal.add(this.dryLogo),this.moistMedal=this.add.container(375,100),this.moistContainer=this.add.image(0,0,"roundContainer").setScale(.5),this.moistLogo=this.add.image(0,0,"drop").setScale(.3),this.moistMedal.add(this.moistContainer),this.moistMedal.add(this.moistLogo),this.dish={foods:[],heat:0,moistness:0,cost:0},this.actualMoistness=z(this,"moistness"),this.actualHeat=z(this,"heat"),this.dragFood(this),this.physics.add.overlap(this.foods,this.cauldron,this.cauldronTouch,null,this)}},{key:"update",value:function(){}},{key:"addDialogue",value:function(t,e){t.createTextBox(this,300,150,{wrapWidth:250,fixedWidth:250,fixedHeight:150}).start(e,100)}},{key:"createTextBox",value:function(t,e,o,n){var a=Phaser.Utils.Objects.GetValue(n,"wrapWidth",0),r=Phaser.Utils.Objects.GetValue(n,"fixedWidth",0),i=Phaser.Utils.Objects.GetValue(n,"fixedHeight",0),s=t.rexUI.add.textBox({x:e,y:o,background:t.add.image(0,0,"parchment"),text:t.getBuiltInText(t,a,r,i),space:{left:20,right:20,top:20,bottom:20,icon:0,text:0}}).setOrigin(0).setDepth(30).layout();return t.displayShadow(t,!0),s.setInteractive().on("pointerdown",(function(){this.isTyping?this.stop(!0):this.typeNextPage()}),s).on("pageend",(function(){this.isLastPage&&this.on("pointerdown",(function(e,o,n,a){this.destroy(),t.displayShadow(t,!1),t.char.setInteractive()}))}),s),s}},{key:"getBuiltInText",value:function(t,e,o,n){return t.add.text(0,0,"",{fontFamily:"Augusta",fontSize:"22px",color:"#000",wordWrap:{width:e},maxLines:5}).setFixedSize(o,n)}},{key:"displayShadow",value:function(t,e){!0===e?(t.shadow=t.add.graphics(),t.shadow.fillStyle(0,.75),t.shadow.fillRect(0,0,600,800),t.shadow.setDepth(20)):t.shadow.setAlpha(0)}},{key:"alignFood",value:function(t){Phaser.Actions.GridAlign(t.foods.getChildren(),{width:5,height:10,cellWidth:32,cellHeight:110,x:70,y:560})}},{key:"realignFood",value:function(t,e){e.body.setAllowGravity(!1),e.setVelocity(0,0),t.alignFood(t)}},{key:"dragFood",value:function(t){this.input.on("dragstart",(function(t,e,o,n){e.body.setAllowGravity(!1),e.setVelocity(0,0)})),this.input.on("drag",(function(t,e,o,n){e.x=o,e.y=n})),this.input.on("dragend",(function(e,o){o.x<t.game.config.width/2||(o.body.setAllowGravity(!0),o.setGravity(0,3e3),o.setCollideWorldBounds(!0),o.setBounce(.5)),t.time.addEvent({delay:2e3,callback:function(){return t.realignFood(t,o)}})}))}},{key:"cauldronTouch",value:function(t,e){e.disableBody(!0,!0),this.plop=this.sound.add("plop"),this.plop.play(),this.splash=this.sound.add("splash"),this.splash.play(),this.dish.foods.push(e.data.values.name),this.dish.moistness+=e.data.values.moistness,this.dish.heat+=e.data.values.heat,this.dish.cost+=e.data.values.price,this.posY+=20,this.recipe=this.add.text(30,this.posY,"- "+e.getData("name")),this.recipe.setTint(0),this.container.add(this.recipe),this.actualMoistness=z(this,"moistness"),this.actualHeat=z(this,"heat"),console.log("actual situation moist/heat: "+this.actualMoistness,this.actualHeat),this.heatBar.updateProgressBar(this.actualHeat),this.moistBar.updateProgressBar(this.actualMoistness),this.checkVictory()}},{key:"checkVictory",value:function(){var t=this,e=this.actualMoistness,o=this.actualHeat,n=this.char.data.values.healthStats.moistnessEnd,a=this.char.data.values.healthStats.heatEnd;function r(){var t=Math.abs(e-n)+Math.abs(o-a);return console.log(t),t>8?0:8>t&&t>4?1:4>t?2:void 0}console.log("health: "+r()),this.char.setFrame(r()),e==n&&o==a&&this.time.addEvent({delay:500,callback:function(){console.log("Victory !"),t.nextLevel(t,t.levelNumber),t.winSound=t.sound.add("win"),t.winSound.play()}}),(e<=-4||e>=4)&&(this.cameras.main.shake(500,.025),this.time.addEvent({delay:500,callback:function(){return t.scene.restart()}}),console.log("Defeat !")),(o<=-4||o>=4)&&(this.cameras.main.shake(500,.025),this.time.addEvent({delay:1500,callback:function(){return t.scene.restart()}}),console.log("Defheat !"))}},{key:"nextLevel",value:function(t,e){var o=this;t.cameras.main.fadeOut(),t.time.addEvent({delay:2e3,callback:function(){t.scene.restart({level:o.currentLevel+1})}})}}])&&q(o.prototype,n),a&&q(o,a),e}();function tt(t){return(tt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function et(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function ot(t,e){return!e||"object"!==tt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function nt(t){return(nt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function at(t,e){return(at=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var rt=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),ot(this,nt(e).call(this,"optionsGame"))}var o,n,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&at(t,e)}(e,Phaser.Scene),o=e,(n=[{key:"preload",value:function(){this.background=this.add.image(300,400,"background"),this.menuBox=this.add.image(300,400,"menuBox").setDisplaySize(400,600)}},{key:"create",value:function(){var t=this;this.add.bitmapText(160,150,"augusta","Options",60,1),new b(this,300,330,"Apply").on("pointerdown",(function(){return t.goToNextScene(t,"menuGame")}))}},{key:"goToNextScene",value:function(t,e){t.cameras.main.fadeOut(),t.time.addEvent({delay:2e3,callback:function(){t.scene.start(e)}})}}])&&et(o.prototype,n),a&&et(o,a),e}(),it={width:600,height:800,type:a.a.WEBGL,backgroundColor:"#444444",physics:{default:"arcade",arcade:{debug:!1}},plugins:{scene:[{key:"rexUI",plugin:r.a,mapping:"rexUI"}]},scene:[h,O,rt,$],canvas:document.querySelector("canvas")};new a.a.Game(it)},558:function(t,e,o){t.exports=o(1494)}});