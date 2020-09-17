(this.webpackJsonpdrawing=this.webpackJsonpdrawing||[]).push([[0],{113:function(e,a,t){e.exports=t(302)},29:function(e,a,t){},302:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(40),c=t.n(l),u=t(4),o=t(18),s=t(19),d=t(12),i=t(21),m=t(20),p=(t(29),function(e){var a=e.label,t=e.name,n=e.type,l=e.value,c=e.handleChange;e.className;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",{className:"form-control",id:t,name:t,type:n,value:l,onChange:c}))});p.defaultProps={label:null};var f=p,b=function(e){var a=e.label,t=e.buttonClass,n=e.handleClick;return r.a.createElement("button",{className:t,onClick:n},a)};b.defaultProps={onClick:null};var h=b,v=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={player1Name:"",player2Name:"",player3Name:"",player4Name:""},n.handleChange=n.handleChange.bind(Object(d.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(d.a)(n)),n}return Object(s.a)(t,[{key:"handleChange",value:function(e,a){var t={};t[a]=e.currentTarget.value,this.setState(t)}},{key:"handleSubmit",value:function(e){e.preventDefault();var a=this.state,t=a.player1Name,n=a.player2Name,r=a.player3Name,l=a.player4Name;""!==t&&""!==n&&""!==r&&""!==l&&this.props.handleSave(t,n,r,l)}},{key:"render",value:function(){var e=this,a=this.state,t=a.player1Name,n=a.player2Name,l=a.player3Name,c=a.player4Name;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container-global"},r.a.createElement("div",{className:"container-form-start"},r.a.createElement("h1",{class:"start-title"},"FrankenStyle"),r.a.createElement("form",{onSubmit:this.handleSubmit,className:"form startform"},r.a.createElement("div",{className:"row1"},r.a.createElement(f,{label:"Player 1",name:"player1Name",type:"text",value:t,handleChange:function(a){return e.handleChange(a,"player1Name")},required:!0})),r.a.createElement("div",{className:"row2"},r.a.createElement(f,{label:"Player 2",name:"player2Name",type:"text",value:n,handleChange:function(a){return e.handleChange(a,"player2Name")},required:!0})),r.a.createElement("div",{className:"row3"},r.a.createElement(f,{label:"Player 3",name:"player3Name",type:"text",value:l,handleChange:function(a){return e.handleChange(a,"player3Name")},required:!0})),r.a.createElement("div",{className:"row4"},r.a.createElement(f,{label:"Player 4",name:"player4Name",type:"text",value:c,handleChange:function(a){return e.handleChange(a,"player4Name")},required:!0})),r.a.createElement(h,{buttonClass:"button button-startform",label:"Start"}),r.a.createElement(h,{buttonClass:"button rules ",label:"Rules"})))))}}]),t}(n.Component),g=t(109),E=t.n(g).a.create({baseURL:"https://frankenstyle.developme.space/api/draw/games/",headers:{Accept:"application/json",Authorization:"Bearer R9tM2zkWkOmwWiV0pziHGL1RDREjEpwMkrXqDEcbpMe4fqiZv862pi94Dj6IYIHzLTvNcaQezbRdhJxc"}}),y=function(e){var a=e.gameID,t=e.round,n=e.image_data,r=e.guess;return{gameID:a,round:t,roundInputs:n||r,type:"SAVE_ROUND"}},N=Object(u.b)((function(e){return{started:e.started}}),(function(e){return{handleSave:function(a,t,n,r){return e(function(e,a,t,n){return function(r){E.post("/",{player1:e,player2:a,player3:t,player4:n}).then((function(e){var a=e.data;return r(function(e){return{players:e.players,word:e.word,gameID:e.id,image:e.image,type:"NEW_GAME"}}(a.data))}))}}(a,t,n,r))}}}))(v),w=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={word:e.word,image:e.image,round:e.round},n.handleSubmit=n.handleSubmit.bind(Object(d.a)(n)),n}return Object(s.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault();var a=this.state.round;this.props.handleStart(a)}},{key:"render",value:function(){var e=this.state,a=e.word,t=e.image;return r.a.createElement("div",{className:"container-global"},r.a.createElement("div",{className:"container-card-grid"},r.a.createElement("img",{alt:a,className:"img-card",src:t}),r.a.createElement("div",{className:"card-lower"},r.a.createElement("p",{className:"card-word card-lower-elements"},a),r.a.createElement(h,{label:"Ready",buttonClass:"button gamestart-button card-lower-elements",handleClick:this.handleSubmit}))))}}]),t}(n.Component),O=Object(u.b)((function(e){return{word:e.word,image:e.image,round:e.round}}),(function(e){return{handleStart:function(a){return e(function(e){return{round:e,type:"START_GAME"}}(a))}}}))(w),j=t(42),S=t(110),C=function(e){var a=e.word,t=e.round,l=e.roundInputs,c=e.handleSave,u=e.players,o=Object(n.useRef)(null),s=Object(n.useRef)(null),d=Object(n.useState)(!1),i=Object(j.a)(d,2),m=i[0],p=i[1],f=Object(n.useState)("#f44336"),b=Object(j.a)(f,2),v=b[0],g=b[1],E=Object(n.useState)(""),y=Object(j.a)(E,2),N=y[0],w=y[1];Object(n.useEffect)((function(){var e=o.current;e.width=1e3,e.height=1e3,e.style.width="".concat(500,"px"),e.style.height="".concat(500,"px"),e.style.background="white",e.style.borderRadius="".concat(1,"rem ",1,"rem ",1,"rem");var a=e.getContext("2d");console.log(o),a.scale(2,2),a.lineCap="round",a.strokeStyle=v,a.lineWidth=8,s.current=a;var t=new Image;t.onload=function(){a.drawImage(t,0,0,500,500)},t.src=N}),[t,v,N]);var O=function(e){var a=e.nativeEvent;if("mousedown"===a.type){var t=a.offsetX,n=a.offsetY;s.current.beginPath(),s.current.moveTo(t,n),p(!0)}if("touchstart"===a.type){var r=a.touches[0],l=r.clientX,c=r.clientY,u=o.current,d=u.offsetLeft,i=u.offsetTop;s.current.beginPath(),s.current.moveTo(l-d,c-i),p(!0)}},C=function(){s.current.closePath();var e=o.current.toDataURL();w(e),p(!1)},k=function(e){var a=e.nativeEvent;if(m){if("mousemove"===a.type){var t=a.offsetX,n=a.offsetY;s.current.lineTo(t,n),s.current.stroke()}if("touchmove"===a.type){var r=a.touches[0],l=r.clientX,c=r.clientY,u=o.current,d=u.offsetLeft,i=u.offsetTop;s.current.lineTo(l-d,c-i),s.current.stroke()}}};return r.a.createElement("div",{className:"container-global"},r.a.createElement("div",{className:"container-sketchpad"},r.a.createElement("div",{className:"container-header"},1===t?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,a),r.a.createElement("p",{className:"player-word"},u[0])):r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,l[1]),r.a.createElement("p",{className:"player-word"},u[2]))),r.a.createElement("div",{className:"container-grid-sketchpad"},r.a.createElement("canvas",{className:"border border-primary",onMouseDown:O,onMouseUp:C,onMouseMove:k,onTouchStart:O,onTouchEnd:C,onTouchMove:k,ref:o}),r.a.createElement("div",{className:"container-sketchpad-buttons"},r.a.createElement(S.CirclePicker,{className:"buttons-colour-pick",color:v,onChangeComplete:function(e){g(e.hex)},colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39","#ffeb3b","#ffc107","#ff9800","#ff5722","#ffffff","#000000"],circleSize:60}),r.a.createElement(h,{buttonClass:"button button-sketchpad",handleClick:function(e){return function(e){e.preventDefault();var a=o.current.toDataURL();c(t,a)}(e)},label:"Submit"})))))},k=Object(u.b)((function(e){return{word:e.word,round:e.round,roundInputs:e.roundInputs,players:e.players}}),(function(e){return{handleSave:function(a,t){return e(function(e,a){return function(t,n){var r=n().gameID;E.post("".concat(r,"/rounds"),{round:e,image_data:a}).then((function(e){var a=e.data;return t(y(a.data))}))}}(a,t))}}}))(C),I=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={players:e.players,roundInputs:e.roundInputs,round:e.round,guess:""},n.handleChange=n.handleChange.bind(Object(d.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(d.a)(n)),n}return Object(s.a)(t,[{key:"handleChange",value:function(e){var a=e.currentTarget.value;this.setState({guess:a})}},{key:"handleSubmit",value:function(e){e.preventDefault();var a=this.state,t=a.guess,n=a.round;""!==t&&this.props.handleGuess(n,t)}},{key:"render",value:function(){var e=this.state,a=e.players,t=e.roundInputs,n=e.round,l=e.guess;return r.a.createElement("div",{className:"container-global"},r.a.createElement("div",{className:"container-card-grid"},r.a.createElement("img",{alt:"Player Drawing",className:"img-card img-card-round-background",src:2===n?t[0]:t[2]}),r.a.createElement("form",{onSubmit:this.handleSubmit,className:"container form card-lower"},r.a.createElement(f,{label:2===n?a[1]:a[3],name:"guess",type:"text",value:l,handleChange:this.handleChange,required:!0}),r.a.createElement(h,{buttonClass:"button button-guess",label:"Guess"}))))}}]),t}(n.Component),D=Object(u.b)((function(e){return{players:e.players,round:e.round,roundInputs:e.roundInputs}}),(function(e){return{handleGuess:function(a,t){return e(function(e,a){return function(t,n){var r=n().gameID;E.post("".concat(r,"/rounds"),{round:e,guess:a}).then((function(e){var a=e.data;return t(y(a.data))}))}}(a,t))}}}))(I),R=function(e){var a=e.word,t=e.image,n=e.roundInputs,l=e.handleReset,c=e.players;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container-global"},r.a.createElement("div",{className:"container-endscreen"},r.a.createElement("div",{className:"shadow"},r.a.createElement("div",{className:"container-card-grid-endscreen card-grid-endscreen-original"},r.a.createElement("img",{className:"img-card img-card-round-background",alt:a,src:t}),r.a.createElement("div",{className:"card-lower"},r.a.createElement("p",{className:"card-word card-lower-elements"},a)))),r.a.createElement("div",{className:"shadow"},r.a.createElement("div",{className:"container-card-grid-endscreen card-grid-endscreen-sketch1"},r.a.createElement("img",{className:"img-card img-card-round-background",alt:"player-1-drawing",src:n[0]}),r.a.createElement("div",{className:"card-lower"},r.a.createElement("p",{className:"card-word card-lower-elements endscreen-card-text"},r.a.createElement("span",null,c[1]," "),r.a.createElement("span",null,"Guessed:"),r.a.createElement("span",null,n[1]))))),r.a.createElement("div",{className:"shadow"},r.a.createElement("div",{className:"container-card-grid-endscreen card-grid-endscreen-sketch2"},r.a.createElement("img",{className:"img-card img-card-round-background",alt:"player-2-drawing",src:n[2]}),r.a.createElement("div",{className:"card-lower"},r.a.createElement("p",{className:"card-word card-lower-elements endscreen-card-text"},r.a.createElement("span",null,c[3]," "),r.a.createElement("span",null,"Guessed:"),r.a.createElement("span",null,n[3]))))),r.a.createElement(h,{label:"New Game",buttonClass:"button button-newgame",handleClick:l}))))},T=Object(u.b)((function(e){return{word:e.word,image:e.image,roundInputs:e.roundInputs,players:e.players}}),(function(e){return{handleReset:function(){return e({type:"RESET"})}}}))(R),_=function(e){var a=e.round,t=e.started;return r.a.createElement(r.a.Fragment,null,t?0===a?r.a.createElement(O,null):1===a||3===a?r.a.createElement(k,null):2===a||4===a?r.a.createElement(D,null):r.a.createElement(T,null):r.a.createElement(N,null))},M=Object(u.b)((function(e){return{round:e.round,started:e.started}}))(_),x=t(22),P=t(112),G=t(14),A={started:!1,gameID:0,round:0,players:[],roundInputs:[],image:""},L=function(e,a){switch(a.type){case"NEW_GAME":return function(e,a){var t=a.gameID,n=a.word,r=a.players,l=a.image;return Object(G.a)(Object(G.a)({},e),{},{gameID:t,word:n,players:r,image:l,started:!0})}(e,a);case"START_GAME":return function(e,a){var t=a.round;return Object(G.a)(Object(G.a)({},e),{},{round:t+1})}(e,a);case"SAVE_ROUND":return function(e,a){var t=a.round,n=a.roundInputs;return Object(G.a)(Object(G.a)({},e),{},{round:t+1,roundInputs:[].concat(Object(P.a)(e.roundInputs),[n])})}(e,a);case"RESET":return Object(G.a)({},A);default:return e}},q=t(111),F=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||x.c,U=Object(x.d)(L,A,F(Object(x.a)(q.a)));c.a.render(r.a.createElement(u.a,{store:U},r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null))),document.getElementById("root"))}},[[113,1,2]]]);
//# sourceMappingURL=main.bbc175dc.chunk.js.map