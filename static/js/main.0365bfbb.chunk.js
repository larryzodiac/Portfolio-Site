(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){"use strict";a.r(t);var i=a(0),s=a.n(i),r=a(4),o=a.n(r),n=a(1),l=a.n(n),c=(a(12),a(5)),m=a.n(c),u=function(e){var t=function(){this.vector=e.createVector(e.random(r),e.random(r),e.random(r)),this.vectorOld=this.vector.copy(),this.stepSize=e.random(1,5),this.isOutside=!1,this.angle=0,this.positions=[],this.gaps=[]};t.prototype.update=function(t){e.strokeWeight(t*this.stepSize),this.vector.x+=e.cos(this.angle)*this.stepSize,this.vector.y+=e.sin(this.angle)*this.stepSize,this.vector.z+=e.cos(this.angle)*this.stepSize,this.isOutside=this.vector.x<0||this.vector.x>r||this.vector.y<0||this.vector.y>r||this.vector.z<0||this.vector.z>r/5;var a=!1;this.isOutside&&(this.vector.set(e.random(r),e.random(r),e.random(r/5)),a=!0),this.positions.push(this.vector.copy()),this.gaps.push(a),this.positions.length>10&&(this.positions.shift(),this.gaps.shift()),e.beginShape();for(var i=0;i<this.positions.length;i++)this.gaps[i]&&(e.endShape(),e.beginShape()),e.vertex(this.positions[i].x,this.positions[i].y,this.positions[i].z);e.endShape(),this.isOutside=!1},t.prototype.updateNoise=function(t,a,i){this.angle=e.noise(this.vector.x/t+e.frameCount/100,this.vector.y/t)*a,this.update(i)};var a,i,s=.5,r=500;e.preload=function(){return a=e.loadFont(m.a)},e.setupText=function(){(i=e.createGraphics(r,r)).pixelDensity(1),i.background(255),i.textFont(a),i.textSize(200),i.text("evan",20,320),i.loadPixels()};var o=[];e.windowResize=function(){e.resizeCanvas(e.windowWidth,e.windowHeight)},e.setup=function(){e.createCanvas(e.windowWidth,e.windowHeight,e.WEBGL),e.setupText(),e.frameRate(30);for(var a=0;a<400;a++)o[a]=new t;e.rotateY(10),e.noStroke()},e.draw=function(){var t=Math.max(document.documentElement.clientWidth,window.innerWidth||0);e.background(0),t<1e3&&e.scale(.5),s=.4*e.sin(e.frameCount/10),e.rotateY(s),s+=.001,e.noFill(),e.stroke(255),e.box(r,r,r/5),e.translate(-r/2,-r/2);for(var a=0;a<400;a++){var n=4*e.floor(e.floor(o[a].vector.x)+e.floor(o[a].vector.y)*i.width);i.pixels[n]<100?(e.noStroke(),e.fill(255),o[a].updateNoise(10,50,.3)):(e.noStroke(),e.fill(0,0,250),o[a].updateNoise(300,10,.3))}}},d=function(e){var t=Object.keys(e.images);return 1===t.length?s.a.createElement("div",null,s.a.createElement("section",{className:"row"},s.a.createElement("img",{className:"col-12",alt:"",src:e.images.one}))):2===t.length?s.a.createElement("div",null,s.a.createElement("section",{className:"row"},s.a.createElement("img",{className:"col-12",alt:"",src:e.images.one})),s.a.createElement("section",{className:"row"},s.a.createElement("img",{className:"col-12",alt:"",src:e.images.two}))):3===t.length?s.a.createElement("div",null,s.a.createElement("section",{className:"row"},s.a.createElement("img",{className:"col-12",alt:"",src:e.images.one})),s.a.createElement("section",{className:"row"},s.a.createElement("img",{className:"col-6",alt:"",src:e.images.two}),s.a.createElement("img",{className:"col-6",alt:"",src:e.images.three}))):4===t.length?s.a.createElement("div",null,s.a.createElement("section",{className:"row"},s.a.createElement("img",{className:"col-6",alt:"",src:e.images.one}),s.a.createElement("img",{className:"col-6",alt:"",src:e.images.two})),s.a.createElement("section",{className:"row"},s.a.createElement("img",{className:"col-6",alt:"",src:e.images.three}),s.a.createElement("img",{className:"col-6",alt:"",src:e.images.four}))):s.a.createElement("div",null)},h=function(e){return s.a.createElement("div",{className:"showcase-sections"},s.a.createElement("section",{className:"row"},s.a.createElement("aside",{className:"col-12"},e.file)),s.a.createElement("section",{className:"row"},s.a.createElement("header",{className:"col-12 showcase-titles"},e.header,s.a.createElement("span",null,e.sub_header))),s.a.createElement("section",{className:"row"},s.a.createElement("article",{className:"col-6"},s.a.createElement("p",null,e.tags),s.a.createElement("a",{className:"visit",href:e.visit,target:"new"},"Visit Project >>")),s.a.createElement("article",{className:"col-6"},s.a.createElement("p",null,e.description))),s.a.createElement(d,{images:e.images}))},g=a(6).results;new l.a(u,"sketch"),o.a.render(s.a.createElement(function(){var e=g.map(function(e){return s.a.createElement(h,{key:e.file,file:e.file,header:e.header,sub_header:e.sub_header,tags:e.tags,description:e.description,visit:e.visit,images:e.images})});return s.a.createElement("div",null,e)},null),document.getElementById("root"))},5:function(e,t,a){e.exports=a.p+"static/media/FreeSansBold.f8dbf247.ttf"},6:function(e){e.exports={results:[{file:"FILE > 1/4 ...",header:"Parametric Book Covers",sub_header:" // Creative coding for print with generative.",tags:"p5.js",description:"Suspendisse justo libero, tincidunt at lorem nec, congue lacinia metus. Pellentesque est ipsum, accumsan eget magna pulvinar, aliquet pulvinar odio. Nullam enim mauris, mollis sit amet diam in, porta pulvinar urna. Fusce iaculis lorem a molestie suscipit.",visit:"",images:{one:"https://larryzodiac.github.io/Creative-Coding/01_assignment/01_stills/181129_212029_147_Colour1__rgba(145,120,255,1)_Colour2__rgba(0,240,168,1).png",two:"https://larryzodiac.github.io/Creative-Coding/01_assignment/01_stills/181129_213252_388_Colour1__rgba(59,0,255,1)_Colour2__rgba(0,48,255,1).png",three:"https://larryzodiac.github.io/Creative-Coding/01_assignment/01_stills/181122_130706_90_Colour1__rgba(229,200,131,1)_Colour2__rgba(220,200,235,1).png",four:"https://larryzodiac.github.io/Creative-Coding/01_assignment/01_stills/181129_220652_68_Colour1__rgba(0,0,0,1)_Colour2__rgba(41,41,51,1).png"}},{file:"FILE > 2/4 ...",header:"Nature of Code",sub_header:" // Simulating the world around us using code & mathematics.",tags:"p5.js, Processing3",description:"Suspendisse justo libero, tincidunt at lorem nec, congue lacinia metus. Pellentesque est ipsum, accumsan eget magna pulvinar, aliquet pulvinar odio. Nullam enim mauris, mollis sit amet diam in, porta pulvinar urna. Fusce iaculis lorem a molestie suscipit.",visit:"",images:{}},{file:"FILE > 3/4 ... [UNDER CONSTRUCTION]",header:"Teamwear",sub_header:" // Bringing 3D sports kits customisation to the web via WebGL.",tags:"Three.js, jQuery, Laravel",description:"c sagittis ante cursus ut. Quisque quis quam vitae lectus pulvinar scelerisque. Sed luctus nisl lorem, vehicula ultricies odio convallis sed. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",visit:"https://larryzodiac.github.io/3D-Kit-Designer/kit_builder/",images:{one:"https://larryzodiac.github.io/3D-Kit-Designer/images/kit_builder.png"}},{file:"FILE > 4/4 ...",header:"Bookstore",sub_header:" // Utilizing web frameworks to create a CRUD database application.",tags:"Laravel, Vue.js, MySql",description:"Praesent blandit velit purus, nec sodales erat hendrerit eu. Aliquam malesuada aliquam sapien quis cursus. Donec ultricies molestie enim, eu viverra arcu. Suspendisse sodales lorem lacus, eget ornare velit rhoncus sit amet. Ut dolor dolor, dignissim sit amet arcu nec, rhoncus tempus ex.",visit:"https://github.com/larryzodiac/Web-Application-Frameworks",images:{one:"https://larryzodiac.github.io/Web-Application-Frameworks/images/read.png"}}],info:{seed:"c52886ce5f3e0938",results:10,page:1,version:"1.2"}}},7:function(e,t,a){e.exports=a(13)}},[[7,2,1]]]);
//# sourceMappingURL=main.0365bfbb.chunk.js.map