(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,a,t){e.exports=t.p+"static/media/java.64611413.png"},,function(e,a,t){},,function(e,a,t){e.exports=t.p+"static/media/kotlin.4ef59bd9.png"},function(e,a,t){e.exports=t.p+"static/media/js.0cded3a3.png"},function(e,a,t){e.exports=t.p+"static/media/python.3f69ff06.jpg"},function(e,a,t){e.exports=t(22)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(10),c=t.n(i),r=(t(20),t(1)),l=t(2),o=t(4),m=t(3),p=t(6),u=t(5),v=(t(9),function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={polling:e.polling,isClicked:!1},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"onClick",value:function(e){var a=this.state.polling,t=0;a.answers.map(function(a){return t++===e?a.active=!0:a.active=!1}),this.setState({isClicked:!0}),this.props.onSelect(e)}},{key:"render",value:function(){var e=this,a=this.state,t=a.polling,n=a.isClicked,i=t.answers,c=null;if(i&&i.length>0){var r=[];i.forEach(function(a,t){var i=0,c=null;n&&(i=a.percent%100,c=s.a.createElement("span",{className:"percent"},a.percent,"%"));var l=s.a.createElement("div",{key:t,className:"answer-div "+(a.active?"active":""),onClick:function(){return e.onClick(t)}},s.a.createElement("div",{className:"answer-progress "+(a.active?"active":""),style:{width:"calc(".concat(i,"% - 20px)")}}),s.a.createElement("div",{className:"answer-overlay"},s.a.createElement("span",{className:"answer"},a.answer),c));r.push(l)}),c=r}else c=s.a.createElement("span",null,"No answers found");return s.a.createElement("div",{className:"polling-div"},s.a.createElement("div",{className:"question-div"},s.a.createElement("span",{className:"question"},t.question)),s.a.createElement("div",{className:"answers-div"},c))}}]),a}(n.Component)),d=t(7),g=t.n(d),w=t(11),h=t.n(w),f=t(12),k=t.n(f),E=t(13),b=t.n(E),N=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={polling:e.polling,isClicked:!1},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"onClick",value:function(e){var a=this.state.polling,t=0;a.answers.map(function(a){return t++===e?a.active=!0:a.active=!1}),this.setState({isClicked:!0}),this.props.onSelect(e)}},{key:"render",value:function(){var e=this,a=this.state,t=a.polling,n=a.isClicked,i=t.answers,c=null;if(i&&i.length>0){var r=[];i.forEach(function(a,t){var i=0,c=null;n&&(i=a.percent%100,c=s.a.createElement("span",{className:"percent"},a.percent,"%"));var l="";switch(t){case 0:l=g.a;break;case 1:l=h.a;break;case 2:l=k.a;break;case 3:l=b.a;break;default:l=g.a}var o=s.a.createElement("div",{key:t,className:"answer-div "+(a.active?"active":""),onClick:function(){return e.onClick(t)}},s.a.createElement("img",{className:"answer-img",src:l,alt:a.answer}),s.a.createElement("div",{className:"answer-image-div overlay"},s.a.createElement("div",{className:"answer-progress "+(a.active?"active":""),style:{width:"".concat(i,"%")}}),s.a.createElement("div",{className:"answer-overlay"},s.a.createElement("span",{className:"answer"},a.answer),c)));r.push(o)}),c=r}else c=s.a.createElement("span",null,"No answers found");return s.a.createElement("div",{className:"polling-div"},s.a.createElement("div",{className:"question-div"},s.a.createElement("span",{className:"question"},t.question)),s.a.createElement("div",{className:"answers-div answers-image-div"},c))}}]),a}(n.Component),j=(t(21),function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={poll:{question:"Whats your favorite programming language to work?",answers:[{answer:"Java",img:"./assets/images/java.png",percent:"14"},{answer:"Kotlin",img:"./assets/images/kotlin.png",percent:"56"},{answer:"JavaScript",img:"./assets/images/js.png",percent:"22"},{answer:"Python",img:"./assets/images/python.jpg",percent:"8"}]}},t.onSelect=t.onSelect.bind(Object(p.a)(t)),t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"onSelect",value:function(e){console.log("Clicked on "+e)}},{key:"render",value:function(){var e=this.state.poll;return s.a.createElement("div",{className:"App"},s.a.createElement(v,{polling:e,onSelect:this.onSelect}),s.a.createElement(N,{polling:e,onSelect:this.onSelect}))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[14,1,2]]]);
//# sourceMappingURL=main.289cb8ca.chunk.js.map