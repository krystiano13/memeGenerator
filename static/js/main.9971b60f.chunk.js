(this.webpackJsonpmwmw=this.webpackJsonpmwmw||[]).push([[0],{12:function(e,t,n){e.exports=n(21)},17:function(e,t,n){},19:function(e,t,n){},2:function(e,t,n){e.exports={form:"style_form__1_9xl",memes:"style_memes__2afui"}},21:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),l=(n(17),n(1)),m=n.n(l),u=n(7),i=n(3),s=n(8),f=n(9),p=n(11),g=n(10),h=(n(19),n(5),n(2)),d=n.n(h);function v(e){var t,n,c,o=e.getUrlFunc,l=r.a.useState([]),s=Object(i.a)(l,2),f=s[0],p=s[1],g=r.a.useState(!1),h=Object(i.a)(g,2),v=h[0],E=h[1],b=[],_=(r.a.useRef(null),"crystianoo"),j="lllkkkllkK1";Object(a.useEffect)((function(){fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(e){console.log(e.data.memes);for(var t=0;t<=99;t++)e.data.memes[t].box_count<=2&&b.push(e.data.memes[t])}))}));var k=function(){var e=Object(u.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=a.target.id,a.target.src,fetch("https://api.imgflip.com/caption_image?"+"template_id=".concat(t)+"&username=".concat(_)+"&password=".concat(j)+"&text0=".concat(n)+"&text1=".concat(c),{method:"post"}).then((function(e){return e.json()})).then((function(e){console.log(e),o(e.data.url)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"form",className:d.a.form},r.a.createElement("button",{onClick:function(){p(b),E(!0)}},"Start"),!0===v&&r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{onChange:function(e){n=e.target.value},placeholder:"text 1"}),r.a.createElement("input",{onChange:function(e){c=e.target.value},placeholder:"text 2"}))),r.a.createElement("div",{className:d.a.memes},f.map((function(e){return r.a.createElement("img",{onClick:k,id:e.id,src:e.url})}))))}var E=function(e){Object(p.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={MemeImageUrl:null},e.GetUrl=function(t){e.setState({MemeImageUrl:t})},e}return Object(f.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,null===this.state.MemeImageUrl?r.a.createElement(v,{getUrlFunc:this.GetUrl}):r.a.createElement("img",{src:this.state.MemeImageUrl}))}}]),n}(r.a.Component);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.9971b60f.chunk.js.map