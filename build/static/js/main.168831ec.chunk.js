(window["webpackJsonpclicky-game"]=window["webpackJsonpclicky-game"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"pickachu","image":"https://vignette.wikia.nocookie.net/wii/images/8/89/Pikachu.jpg/revision/latest?cb=20140209205851","clicked":false},{"id":2,"name":"charmander","image":"https://tse1.mm.bing.net/th?id=OIP.eZAwutSa1crJgnW3-SRAqwHaHa&pid=Api&H=160&W=160&P=0","clicked":false},{"id":3,"name":"squirtle","image":"https://pokethrift.com/wp-content/uploads/2016/08/squirtle_with_a_default_happy_face_by_kol98-d9ia5zu.png","clicked":false},{"id":4,"name":"bulbasor","image":"http://th07.deviantart.net/fs70/PRE/i/2013/082/2/6/001_bulbasaur_by_pklucario-d5z1g10.png","clicked":false},{"id":5,"name":"ditto","image":"http://img1.wikia.nocookie.net/__cb20130702133542/sonicpokemon/images/thumb/7/79/Ditto_AG_anime.png/500px-Ditto_AG_anime.png","clicked":false},{"id":6,"name":"meow","image":"https://vignette2.wikia.nocookie.net/pokemon/images/b/b5/052Meowth_AG_anime_3.png/revision/latest?cb=20150101230304","clicked":false},{"id":7,"name":"chikorita","image":"https://tse4.mm.bing.net/th?id=OIP.8HE1rRKubvM0SRuaVXnAWwHaG2&pid=Api&P=0&w=169&h=157","clicked":false},{"id":8,"name":"onix","image":"https://img.pokemondb.net/artwork/large/onix.jpg","clicked":false},{"id":9,"name":"psyduck","image":"https://tse4.mm.bing.net/th?id=OIP.c8FOtPxVlmJCsWgzdgg6sgHaIF&pid=Api&P=0&w=300&h=300","clicked":false},{"id":10,"name":"butterfly","image":"https://pm1.narvii.com/5985/e5cd5bbd7f405ca55f9294c1a98f15ca1dd0feb0_hq.jpg","clicked":false},{"id":11,"name":"seel","image":"http://guidesarchive.ign.com/guides/9846/images/seel.gif","clicked":false},{"id":12,"name":"giglypuff","image":"https://tse2.mm.bing.net/th?id=OIP.6yit7TYITVRCoE8TsqRHNAHaHa&pid=Api&P=0&w=300&h=300","clicked":false}]')},,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),o=a(2),c=a.n(o),s=a(3),r=a(4),l=a(7),m=a(5),d=a(8),u=a(6);a(14);var p=function(e){var t={divStyle:{backgroundImage:"url(".concat(e.image,")")}};return n.a.createElement("div",{onClick:function(){return e.cardStatus(e.id)},role:"img","aria-label":"click item",className:"click-item shake",style:t.divStyle})};a(15);var g=function(e){return n.a.createElement("nav",{className:"navbar"},n.a.createElement("ul",null,n.a.createElement("li",{style:{textShadow:e.shadow},className:"title navbar-brand"},n.a.createElement("a",{href:"/"},"Clicky Game")),n.a.createElement("li",{style:{color:e.color,textShadow:e.shadow},className:"navbar-text center"},e.message),n.a.createElement("li",{style:{textShadow:e.shadow},className:"navbar-text score"},"Score: ",e.score," | Top Score: ",e.topScore)))};a(16);var h=function(){return n.a.createElement("div",{className:"box jumbotron jumbotron-fluid"},n.a.createElement("div",{className:"container"},n.a.createElement("h1",{style:{textShadow:"2px 2px 4px lightgray"},className:"jumbotron-title display-4"},"Clicky Game!"),n.a.createElement("p",{className:"lead"},"Click on an image to earn points, but don't click on any more than once!")))};a(17);var f=function(e){return n.a.createElement("div",{className:"container wrapper"},e.children)},k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={pokemonsList:u,message:"Click an image to begin!",score:0,topScore:0,color:"white",shadow:"2px 2px 4px #000000"},a.shuffle=function(e){for(var t=[].concat(e),i=t.length-1;i>0;i--){var n=Math.floor(Math.random()*(i+1)),o=[t[n],t[i]];t[i]=o[0],t[n]=o[1]}return a.setState({pokemonsList:t})},a.cardStatus=function(e){var t=a.state.pokemonsList,i=t.map((function(i){if(i.clicked&&i.id===e){console.log("oops you lost!"),a.setState({score:0,message:"Opps, wrong guess",color:"#5133a4"}),setTimeout((function(){a.setState({color:"red"})}),300),a.state.topScore<a.state.score&&a.setState({topScore:a.state.score});for(var n=0;n<t.length;n++)t[n].clicked=!1;console.log(a.state)}else if(i.id===e)if(11===a.state.score){for(var o=0;o<t.length;o++)t[o].clicked=!1;a.setState({score:0,topScore:0,message:"You won, play again!",color:"#5133a4"}),setTimeout((function(){a.setState({color:"orange"})}),300)}else i.clicked=!0,console.log(a.state),console.log("1 point more"),a.setState({score:a.state.score+1,message:"Great, you scored!",color:"#5133a4"}),setTimeout((function(){a.setState({color:"yellow"})}),300);return i}));a.setState({pokemonsList:i}),a.shuffle(t)},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.shuffle(this.state.pokemonsList)}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement(g,{message:this.state.message,score:this.state.score,topScore:this.state.topScore,color:this.state.color,shadow:this.state.shadow}),n.a.createElement(h,null),n.a.createElement(f,null,this.state.pokemonsList.map((function(t){return n.a.createElement(p,{cardStatus:e.cardStatus,id:t.id,key:t.id,name:t.name,image:t.image,clicked:t.clicked})}))))}}]),t}(i.Component);a(18);var b=function(){return n.a.createElement("footer",{className:"footer"},n.a.createElement("div",{className:"bottom"},"Clicky Game!",n.a.createElement("img",{alt:"react",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png"})))};var v=function(){return n.a.createElement("div",null,n.a.createElement(k,null),n.a.createElement(b,null))};c.a.render(n.a.createElement(v,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.168831ec.chunk.js.map