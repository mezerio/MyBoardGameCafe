"use strict";(self.webpackChunkmyBoardGameCafe=self.webpackChunkmyBoardGameCafe||[]).push([[557],{415:(b,_,i)=>{i.d(_,{c:()=>g});var a=i(256);let g=(()=>{class e{}return e.\u0275fac=function(l){return new(l||e)},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-footer"]],decls:5,vars:0,consts:[[1,"footer"],[1,"footerText"],["href","https://github.com/mezerio"],["src","https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white",1,"githubIcon"]],template:function(l,s){1&l&&(a.TgZ(0,"div",0)(1,"p",1),a._uU(2," This website was developed by Maaz Vali using Typescript and Angular. "),a.qZA(),a.TgZ(3,"a",2),a._UZ(4,"img",3),a.qZA()())},styles:[".footer[_ngcontent-%COMP%]{text-align:center;width:100%;padding-top:100px;padding-bottom:100px}.footerText[_ngcontent-%COMP%]{text-align:center;color:#fff}.githubIcon[_ngcontent-%COMP%]{text-align:center;border-radius:5px;border-style:solid;border-color:#fff}.githubIcon[_ngcontent-%COMP%]:hover{cursor:pointer}"]}),e})()},557:(b,_,i)=>{i.r(_),i.d(_,{HomeModule:()=>E});var a=i(895),g=i(237),e=i(256),p=i(536),l=i(675);function s(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"button",10),e.NdJ("click",function(){e.CHM(t);const c=e.oxw();return e.KtG(c.handleShowInfo(!0))}),e._uU(1," More Info "),e.qZA()}}function m(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"button",10),e.NdJ("click",function(){e.CHM(t);const c=e.oxw();return e.KtG(c.handleShowInfo(!1))}),e._uU(1," Less Info "),e.qZA()}}function f(n,r){1&n&&(e.TgZ(0,"div",11)(1,"div",12)(2,"p",13),e._uU(3,"2016"),e.qZA(),e.TgZ(4,"p",13),e._uU(5,"Ages:14+"),e.qZA(),e.TgZ(6,"p",13),e._uU(7,"Playtime: 90-120mins"),e.qZA(),e.TgZ(8,"p",13),e._uU(9,"Players:1-5"),e.qZA()(),e.TgZ(10,"h1",14),e._uU(11,' Scythe gives players almost complete control over their fate. Other than each player\'s individual hidden objective card, the only elements of luck or variability are "Encounter" cards that players will draw as they interact with the citizens of newly explored lands. Each encounter card provides the player with several options, allowing them to mitigate the luck of the draw through their selection. Combat is also driven by choices, not luck or randomness. Scythe uses a streamlined action-selection mechanism (no rounds or phases) to keep gameplay moving at a brisk pace and reduce downtime between turns. While there is plenty of direct conflict for players who seek it, there is no player elimination. Every part of Scythe has an aspect of engine-building to it. Players can upgrade actions to become more efficient, build structures that improve their position on the map, enlist new recruits to enhance character abilities, activate mechs to deter opponents from invading, and expand their borders to reap greater types and quantities of resources. These engine-building aspects create a sense of momentum and progress throughout the game. The order in which players improve their engine adds to the unique feel of each game, even when playing one faction multiple times. '),e.qZA()())}function u(n,r){1&n&&(e.TgZ(0,"h1",15)(1,"em"),e._uU(2,"Scythe"),e.qZA(),e._uU(3,' gives players almost complete control over their fate. Other than each player\'s individual hidden objective card, the only elements of luck or variability are "Encounter" cards that players will draw as they interact with the citizens of newly explored lands. Each encounter card provides the player with... '),e.qZA())}let x=(()=>{class n{constructor(t){this.boardGameService=t,this.showInfo=!1,this.BannerstarredGames=[],this.scytheGame={description_preview:"",year_published:"",min_players:"",max_players:"",min_playtime:"",max_playtime:"",min_age:"",name:"",image_url:""},this.starredGames=[],this.starredGames=t.getStarredGames()}ngOnInit(){this.boardGameService.getBoardGames(0).subscribe(t=>{this.scytheGame=t.games[1]})}handleShowInfo(t){this.showInfo=t}starGame(){this.starredGames.some(t=>t.name==this.scytheGame.name)?this.boardGameService.removeStarredGames(this.scytheGame):this.boardGameService.addStarredGames(this.scytheGame)}isStarred(){return this.starredGames.some(t=>t.name==this.scytheGame.name)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(l.o))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-banner"]],decls:13,vars:5,consts:[[1,"banner"],[1,"banner__contents"],[1,"banner__title"],[1,"banner__buttons"],["target","_blank","href","https://www.amazon.com/s?k=Scythe+board+game"],[1,"banner__button"],["class","banner__button",3,"click",4,"ngIf"],[1,"starIcon",3,"src","click"],["class","popUpDesc",4,"ngIf"],["class","banner__description",4,"ngIf"],[1,"banner__button",3,"click"],[1,"popUpDesc"],[1,"badgesContainer"],[1,"badge"],[1,"popUpDescription"],[1,"banner__description"]],template:function(t,o){1&t&&(e.TgZ(0,"header",0)(1,"div",1)(2,"h1",2),e._uU(3,"Scythe"),e.qZA(),e.TgZ(4,"div",3)(5,"a",4)(6,"button",5),e._uU(7,"Purchase"),e.qZA()(),e.YNc(8,s,2,0,"button",6),e.YNc(9,m,2,0,"button",6),e.TgZ(10,"img",7),e.NdJ("click",function(){return o.starGame()}),e.qZA()(),e.YNc(11,f,12,0,"div",8),e.YNc(12,u,4,0,"h1",9),e.qZA()()),2&t&&(e.xp6(8),e.Q6J("ngIf",0==o.showInfo),e.xp6(1),e.Q6J("ngIf",1==o.showInfo),e.xp6(1),e.Q6J("src",o.isStarred()?"../../assets/likedIcon.png":"../../assets/likeIcon.png",e.LSH),e.xp6(1),e.Q6J("ngIf",1==o.showInfo),e.xp6(1),e.Q6J("ngIf",0==o.showInfo))},dependencies:[a.O5],styles:[".banner[_ngcontent-%COMP%]{color:#fff;object-fit:contain;height:500px;background-size:cover;background-position:center center;background-image:linear-gradient(to top,rgb(0,0,0) 0%,rgba(255,255,255,0) 40%,rgba(255,255,255,0) 100%),url(https://assets.dicebreaker.com/scythe-board-game-box-artwork.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/scythe-board-game-box-artwork.jpg)}.banner__contents[_ngcontent-%COMP%]{margin-left:50px;padding-top:140px;height:190px}.banner__title[_ngcontent-%COMP%]{font-size:3rem;padding-bottom:.3rem;text-shadow:2px 2px 4px rgba(0,0,0,.4)}.banner__description[_ngcontent-%COMP%]{line-height:1.3;padding-top:1rem;font-size:.8rem;max-width:500px;height:80px;text-shadow:1px 1px 2px rgba(0,0,0,.8)}.popUpDescription[_ngcontent-%COMP%]{color:#fff;line-height:1.3;font-size:.8rem;max-width:500px;text-shadow:1px 1px 2px rgba(0,0,0,.8);height:80px;overflow:auto}.banner__button[_ngcontent-%COMP%]{color:#fff;cursor:pointer;columns:#fff;outline:none;border:none;font-weight:700;border-radius:.2vw;padding:.5rem 2rem;margin-right:1rem;background-color:#333c;transition:all .2s;width:150px}.banner__button[_ngcontent-%COMP%]:hover{color:#000;background-color:#fff;transition:all .2s}*[_ngcontent-%COMP%]{transition:all 2s}.popUpDesc[_ngcontent-%COMP%]{padding:5px;border-radius:5px;color:#000;margin-right:50px}.badgesContainer[_ngcontent-%COMP%]{display:flex}.badge[_ngcontent-%COMP%]{font-size:12px;font-weight:700;background-color:#fff;margin:5px;padding:5px;border-radius:3px;color:#000}.starIcon[_ngcontent-%COMP%]{height:31.5px;position:absolute;opacity:70%;cursor:pointer}"]}),n})();const C=function(n){return{containerLarge:n}},v=function(n){return{row__poster:n}},y=function(n){return{overlayContainerLarge:n}},G=function(n){return{overlayTextLarge:n}},P=function(n){return{basketIconLarge:n}},w=function(n){return{starIconLarge:n}},O=function(n){return{infoIconLarge:n}};function M(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"div",9),e._UZ(1,"img",10),e.TgZ(2,"div",11),e.NdJ("click",function(){e.CHM(t);const c=e.oxw(2);return e.KtG(c.hidePopUp())}),e.TgZ(3,"p",12),e.NdJ("click",function(c){e.CHM(t);const h=e.oxw().$implicit,d=e.oxw();return e.KtG(d.largePosters?d.onLargeGameClicked(h,c):d.onGameClicked(h,c))}),e._uU(4),e.qZA(),e.TgZ(5,"a",13),e._UZ(6,"img",14),e.qZA(),e.TgZ(7,"img",15),e.NdJ("click",function(c){e.CHM(t);const h=e.oxw().$implicit,d=e.oxw();return d.starGame(h),e.KtG(d.onEvent(c))}),e.qZA(),e.TgZ(8,"img",16),e.NdJ("click",function(c){e.CHM(t);const h=e.oxw().$implicit,d=e.oxw();return e.KtG(d.largePosters?d.onLargeGameClicked(h,c):d.onGameClicked(h,c))}),e.qZA()()()}if(2&n){const t=e.oxw().$implicit,o=e.oxw();e.Q6J("ngClass",e.VKq(12,C,o.largePosters)),e.xp6(1),e.s9C("src",t.image_url,e.LSH),e.s9C("alt",t.name),e.Q6J("ngClass",e.VKq(14,v,!o.largePosters)),e.xp6(1),e.Q6J("ngClass",e.VKq(16,y,o.largePosters)),e.xp6(1),e.Q6J("ngClass",e.VKq(18,G,o.largePosters)),e.xp6(1),e.hij(" ",t.name," "),e.xp6(1),e.MGl("href","https://www.amazon.com/s?k=",t.name,"+board+game",e.LSH),e.xp6(1),e.Q6J("ngClass",e.VKq(20,P,o.largePosters)),e.xp6(1),e.Q6J("ngClass",e.VKq(22,w,o.largePosters))("src",o.isStarred(t)?"../../assets/likedIcon.png":"../../assets/likeIcon.png",e.LSH),e.xp6(1),e.Q6J("ngClass",e.VKq(24,O,o.largePosters))}}function k(n,r){if(1&n&&(e.ynx(0),e.YNc(1,M,9,26,"div",8),e.BQk()),2&n){const t=r.$implicit;e.xp6(1),e.Q6J("ngIf","https://s3-us-west-1.amazonaws.com/5cc.images/games/empty+box.jpg"!==t.image_url)}}function Z(n,r){if(1&n&&(e.TgZ(0,"p",5),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.AsE(" Players:",t.clickedGame.min_players,"-",t.clickedGame.max_players," ")}}function I(n,r){if(1&n&&(e.TgZ(0,"p",5),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.hij(" Players:",t.clickedGame.min_players," ")}}function T(n,r){1&n&&(e.TgZ(0,"h3"),e._uU(1,"Description"),e.qZA())}const L=function(n){return{show:n}};let A=(()=>{class n{constructor(t){this.boardGameService=t,this.largePosters=!1,this.clickedGame={description_preview:"",year_published:"",min_players:"",max_players:"",min_playtime:"",max_playtime:"",min_age:"",name:"",image_url:""},this.starredGames=[],this.starredGames=t.getStarredGames()}ngOnInit(){this.boardGameService.getBoardGames(0).subscribe(t=>{this.boardGames=t.games}),this.boardGameService.getBoardGames(2).subscribe(t=>{this.board2Games=t.games}),this.boardGameService.getBoardGames(4).subscribe(t=>{this.board34Games=t.games}),this.boardGameService.getBoardGames(6).subscribe(t=>{this.board56Games=t.games}),this.boardGameService.getBoardGames(7).subscribe(t=>{this.board7pGames=t.games})}onGameClicked(t,o){this.onEvent(o),this.clickedGame=t,this.showGameDetails="7"==this.clickedGame.min_players?this.clickedGame.min_players:this.clickedGame.max_players,console.log(this.clickedGame,"shutup mehi")}onLargeGameClicked(t,o){this.onEvent(o),this.clickedGame=t,this.showGameDetails="0",console.log(this.clickedGame,"shtup meufiu")}hidePopUp(){this.showGameDetails="8"}onEvent(t){t.stopPropagation()}starGame(t){console.log(this.playerNumber),this.starredGames?.some(o=>o.name==t.name)?this.boardGameService.removeStarredGames(t):this.boardGameService.addStarredGames(t)}isStarred(t){return this.starredGames.some(o=>o.name==t.name)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(l.o))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-game-card"]],inputs:{gameList:"gameList",playerNumber:"playerNumber",largePosters:"largePosters"},decls:18,vars:13,consts:[[1,"row__posters"],["posters",""],[4,"ngFor","ngForOf"],[1,"popUpDesc",3,"ngClass"],[1,"badgesContainer"],[1,"badge"],["class","badge",4,"ngIf"],[4,"ngIf"],["class","container",3,"ngClass",4,"ngIf"],[1,"container",3,"ngClass"],[1,"row__posterLarge",3,"src","alt","ngClass"],[1,"overlayContainer",3,"ngClass","click"],[1,"overlayText",3,"ngClass","click"],["target","_blank",3,"href"],["src","../../assets/basketIcon.png","alt","basketIcon",1,"basketIcon",3,"ngClass"],["alt","IconLarge","alt","basketIcon",1,"starIcon",3,"ngClass","src","click"],["src","../../assets/infoIcon.png","alt","basketIcon",1,"infoIcon",3,"ngClass","click"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0,1),e.YNc(2,k,2,1,"ng-container",2),e.qZA(),e.TgZ(3,"div",3)(4,"h2"),e._uU(5),e.qZA(),e.TgZ(6,"div",4)(7,"p",5),e._uU(8),e.qZA(),e.TgZ(9,"p",5),e._uU(10),e.qZA(),e.TgZ(11,"p",5),e._uU(12),e.qZA(),e.YNc(13,Z,2,2,"p",6),e.YNc(14,I,2,1,"p",6),e.qZA(),e.YNc(15,T,2,0,"h3",7),e.TgZ(16,"p"),e._uU(17),e.qZA()()),2&t&&(e.xp6(2),e.Q6J("ngForOf",o.gameList),e.xp6(1),e.Q6J("ngClass",e.VKq(11,L,o.showGameDetails==o.playerNumber)),e.xp6(2),e.Oqu(o.clickedGame.name),e.xp6(3),e.Oqu(o.clickedGame.year_published),e.xp6(2),e.hij("Ages:",o.clickedGame.min_age,"+"),e.xp6(2),e.AsE(" Playtime: ",o.clickedGame.min_playtime,"-",o.clickedGame.max_playtime,"mins "),e.xp6(1),e.Q6J("ngIf",o.clickedGame.min_players!=o.clickedGame.max_players),e.xp6(1),e.Q6J("ngIf",o.clickedGame.min_players==o.clickedGame.max_players),e.xp6(1),e.Q6J("ngIf",""!==o.clickedGame.description_preview),e.xp6(2),e.Oqu(o.clickedGame.description_preview))},dependencies:[a.mk,a.sg,a.O5],styles:[".row[_ngcontent-%COMP%]{margin-left:50px;color:#000}.row__posters[_ngcontent-%COMP%]{display:flex;overflow-x:scroll;overflow-y:hidden;transition:all 1s linear}.row__posters[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.row__poster[_ngcontent-%COMP%]{object-fit:contain;height:100%;width:160px}.row__posterLarge[_ngcontent-%COMP%]{object-fit:contain;height:100%;transition:transform .45s}.containerLarge[_ngcontent-%COMP%]:hover, .container[_ngcontent-%COMP%]:hover{transform:scale(1.09)}.container[_ngcontent-%COMP%]{position:relative;max-height:150px;max-width:160px;text-align:center;transition:transform .45s;margin:10px;background-color:#fff;border-radius:5px;padding:10px}.containerLarge[_ngcontent-%COMP%]{position:relative;max-height:200px;max-width:270px;text-align:center;transition:transform .45s;margin:10px;background-color:#fff;border-radius:5px;padding:10px}.basketIconLarge[_ngcontent-%COMP%], .starIconLarge[_ngcontent-%COMP%], .infoIconLarge[_ngcontent-%COMP%], .basketIcon[_ngcontent-%COMP%], .starIcon[_ngcontent-%COMP%], .infoIcon[_ngcontent-%COMP%]{opacity:100%;position:absolute;bottom:0%;z-index:2;height:30px;width:30px;cursor:pointer}.basketIcon[_ngcontent-%COMP%]{left:0;transform:translate(10px,-15px)}.starIcon[_ngcontent-%COMP%]{left:0;transform:translate(45px,-15px)}.infoIcon[_ngcontent-%COMP%]{right:0;transform:translate(-10px,-15px)}.basketIconLarge[_ngcontent-%COMP%]{left:0;transform:translate(20px,-15px)}.starIconLarge[_ngcontent-%COMP%]{left:0;transform:translate(60px,-15px)}.infoIconLarge[_ngcontent-%COMP%]{right:0;transform:translate(-20px,-15px)}.overlayContainerLarge[_ngcontent-%COMP%], .overlayContainer[_ngcontent-%COMP%]{opacity:0%;height:100%;width:100%;position:absolute;z-index:5;top:0;left:0;background-color:#0000007a;transition:.5s;border-radius:5px}.overlayContainerLarge[_ngcontent-%COMP%]:hover, .overlayContainer[_ngcontent-%COMP%]:hover{opacity:100%}.overlayTextLarge[_ngcontent-%COMP%], .overlayText[_ngcontent-%COMP%]{color:#fff;font-size:16px;position:absolute;left:10px;bottom:36px;text-align:left;cursor:pointer}.overlayTextLarge[_ngcontent-%COMP%]{font-size:24px;bottom:25px;left:20px}h4[_ngcontent-%COMP%]{border-bottom-color:red;border-bottom-width:2px;border-bottom-style:solid;width:20%;color:#fff}h2[_ngcontent-%COMP%]{margin:0}.popUpDesc[_ngcontent-%COMP%]{visibility:hidden;background-color:#f00c;padding:10px;border-radius:5px;color:#fff;margin-right:50px;margin-top:10px;opacity:0;max-height:0;transition:visibility 0s linear .3s,opacity .3s,max-height .3s}.badgesContainer[_ngcontent-%COMP%]{display:flex}.badge[_ngcontent-%COMP%]{background-color:#000;margin:5px;padding:5px;border-radius:3px;color:#fff}.show[_ngcontent-%COMP%]{visibility:visible;opacity:1;max-height:500px;transition:visibility 0s linear 0s,opacity .3s,max-height .3s}"]}),n})(),U=(()=>{class n{constructor(t){this.boardGameService=t,this.boardGames=[],this.board2Games=[],this.board34Games=[],this.board56Games=[],this.board7pGames=[],this.clickedGame={description_preview:"",year_published:"",min_players:"",max_players:"",min_playtime:"",max_playtime:"",min_age:"",name:"",image_url:""},this.starredGames=[],this.starredGames=t.getStarredGames()}ngOnInit(){this.boardGameService.getBoardGames(0).subscribe(t=>{this.boardGames=t.games}),this.boardGameService.getBoardGames(2).subscribe(t=>{this.board2Games=t.games}),this.boardGameService.getBoardGames(4).subscribe(t=>{this.board34Games=t.games}),this.boardGameService.getBoardGames(6).subscribe(t=>{this.board56Games=t.games}),this.boardGameService.getBoardGames(7).subscribe(t=>{this.board7pGames=t.games})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(l.o))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-game-list"]],decls:16,vars:11,consts:[[1,"row"],[3,"gameList","playerNumber","largePosters"],[3,"gameList","playerNumber"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"h4"),e._uU(2,"MOST POPULAR"),e.qZA(),e._UZ(3,"app-game-card",1),e.TgZ(4,"h4"),e._uU(5,"2 PLAYERS"),e.qZA(),e._UZ(6,"app-game-card",2),e.TgZ(7,"h4"),e._uU(8,"3-4 PLAYERS"),e.qZA(),e._UZ(9,"app-game-card",2),e.TgZ(10,"h4"),e._uU(11,"5-6 PLAYERS"),e.qZA(),e._UZ(12,"app-game-card",2),e.TgZ(13,"h4"),e._uU(14,"7+ PLAYERS"),e.qZA(),e._UZ(15,"app-game-card",2),e.qZA()),2&t&&(e.xp6(3),e.Q6J("gameList",o.boardGames)("playerNumber","0")("largePosters",!0),e.xp6(3),e.Q6J("gameList",o.board2Games)("playerNumber","2"),e.xp6(3),e.Q6J("gameList",o.board34Games)("playerNumber","4"),e.xp6(3),e.Q6J("gameList",o.board56Games)("playerNumber","6"),e.xp6(3),e.Q6J("gameList",o.board7pGames)("playerNumber","7"))},dependencies:[A],styles:[".row[_ngcontent-%COMP%]{margin-left:50px;color:#000}.row__posters[_ngcontent-%COMP%]{display:flex;overflow-x:scroll;overflow-y:hidden;transition:all 1s linear}.row__posters[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.row__poster[_ngcontent-%COMP%]{object-fit:contain;height:100%;width:160px}.row__posterLarge[_ngcontent-%COMP%]{height:100%;transition:transform .45s}.containerLarge[_ngcontent-%COMP%]:hover, .container[_ngcontent-%COMP%]:hover{transform:scale(1.09)}.containerLarge[_ngcontent-%COMP%]{position:relative;max-height:200px;max-width:270px;text-align:center;transition:transform .45s;margin:10px;background-color:#fff;border-radius:5px;padding:10px}.container[_ngcontent-%COMP%]{position:relative;max-height:150px;max-width:160px;text-align:center;transition:transform .45s;margin:10px;background-color:#fff;border-radius:5px;padding:10px}.basketIconLarge[_ngcontent-%COMP%], .starIconLarge[_ngcontent-%COMP%], .infoIconLarge[_ngcontent-%COMP%], .basketIcon[_ngcontent-%COMP%], .starIcon[_ngcontent-%COMP%], .infoIcon[_ngcontent-%COMP%]{opacity:100%;position:absolute;bottom:0%;z-index:2;height:30px;width:30px;cursor:pointer}.basketIconLarge[_ngcontent-%COMP%]{left:0;transform:translate(20px,-15px)}.starIconLarge[_ngcontent-%COMP%]{left:0;transform:translate(60px,-15px)}.infoIconLarge[_ngcontent-%COMP%]{right:0;transform:translate(-20px,-15px)}.basketIcon[_ngcontent-%COMP%]{left:0;transform:translate(10px,-15px)}.starIcon[_ngcontent-%COMP%]{left:0;transform:translate(45px,-15px)}.infoIcon[_ngcontent-%COMP%]{right:0;transform:translate(-10px,-15px)}.overlayContainerLarge[_ngcontent-%COMP%], .overlayContainer[_ngcontent-%COMP%]{opacity:0%;height:100%;width:100%;position:absolute;z-index:5;top:0;left:0;background-color:#0000007a;transition:.5s;border-radius:5px}.overlayContainerLarge[_ngcontent-%COMP%]:hover, .overlayContainer[_ngcontent-%COMP%]:hover{opacity:100%}.overlayTextLarge[_ngcontent-%COMP%], .overlayText[_ngcontent-%COMP%]{color:#fff;font-size:24px;position:absolute;left:20px;bottom:25px;text-align:left;cursor:pointer}.overlayText[_ngcontent-%COMP%]{font-size:16px;bottom:36px;left:10px}h4[_ngcontent-%COMP%]{border-bottom-color:red;border-bottom-width:2px;border-bottom-style:solid;width:20%;color:#fff}h2[_ngcontent-%COMP%]{margin:0}.popUpDesc[_ngcontent-%COMP%]{visibility:hidden;background-color:#f00c;padding:10px;border-radius:5px;color:#fff;margin-right:50px;margin-top:10px;opacity:0;max-height:0;transition:visibility 0s linear .3s,opacity .3s,max-height .3s}.badgesContainer[_ngcontent-%COMP%]{display:flex}.badge[_ngcontent-%COMP%]{background-color:#000;margin:5px;padding:5px;border-radius:3px;color:#fff}.show[_ngcontent-%COMP%]{visibility:visible;opacity:1;max-height:500px;transition:visibility 0s linear 0s,opacity .3s,max-height .3s}"]}),n})();var S=i(415);const q=[{path:"",component:(()=>{class n{constructor(t){this.router=t}ngOnInit(){this.router.events.subscribe(t=>{t instanceof g.m2&&window.scrollTo(0,0)})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-home"]],decls:5,vars:0,consts:[[1,"app"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"app-navbar")(2,"app-banner")(3,"app-game-list")(4,"app-footer"),e.qZA())},dependencies:[p.S,x,U,S.c],styles:[".app[_ngcontent-%COMP%]{background-color:#000}"]}),n})()},{path:"**",redirectTo:""}];let B=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[g.Bz.forChild(q),g.Bz]}),n})(),E=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[a.ez,B]}),n})()},536:(b,_,i)=>{i.d(_,{S:()=>s});var a=i(256),g=i(895),e=i(237);const p=function(m){return{nav__black:m}},l=function(){return{exact:!0}};let s=(()=>{class m{constructor(){this.navShow=!1}ngOnInit(){window.onscroll=()=>{this.navShow=window.scrollY>100}}}return m.\u0275fac=function(u){return new(u||m)},m.\u0275cmp=a.Xpm({type:m,selectors:[["app-navbar"]],decls:10,vars:7,consts:[[1,"nav",3,"ngClass"],["routerLink","","src","../assets/mbgcLogo.png","alt","mez Logo",1,"nav__logo"],[1,"navpages"],["routerLinkActive","active",1,"navpage",3,"routerLinkActiveOptions"],["routerLink","/"],["routerLink","/my-list"],["src","https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png","alt","Avatar",1,"nav__avatar"]],template:function(u,x){1&u&&(a.TgZ(0,"div",0),a._UZ(1,"img",1),a.TgZ(2,"div",2)(3,"div",3)(4,"p",4),a._uU(5,"Home"),a.qZA()(),a.TgZ(6,"div",3)(7,"p",5),a._uU(8,"My List"),a.qZA()()(),a._UZ(9,"img",6),a.qZA()),2&u&&(a.Q6J("ngClass",a.VKq(3,p,x.navShow)),a.xp6(3),a.Q6J("routerLinkActiveOptions",a.DdM(5,l)),a.xp6(3),a.Q6J("routerLinkActiveOptions",a.DdM(6,l)))},dependencies:[g.mk,e.rH,e.Od],styles:[".nav[_ngcontent-%COMP%]{position:fixed;top:0;width:100%;padding:10px;display:flex;height:40px;justify-content:space-between;z-index:1;animation-timing-function:ease-in;transition:all .5s}.nav__black[_ngcontent-%COMP%]{background-color:#000}.nav__logo[_ngcontent-%COMP%]{position:fixed;left:50px;height:40px;object-fit:contain;cursor:pointer;border-radius:10px;width:25s0px}.nav__avatar[_ngcontent-%COMP%]{position:fixed;right:40px;width:40px;cursor:pointer;object-fit:contain}.navpages[_ngcontent-%COMP%]{display:flex;color:#fff;position:fixed;left:330px;height:40px;width:200px;align-items:center;font-weight:bolder}.navpage[_ngcontent-%COMP%]{margin:10px;border-bottom-style:solid;border-bottom-width:3px;border-bottom-color:transparent}.navpage__black[_ngcontent-%COMP%]{color:#000}.navpage[_ngcontent-%COMP%]:hover{color:red;cursor:pointer}.active[_ngcontent-%COMP%]{border-bottom-color:red}p[_ngcontent-%COMP%]{margin:0}"]}),m})()},675:(b,_,i)=>{i.d(_,{o:()=>e});var a=i(256),g=i(529);let e=(()=>{class p{addStarredGames(s){this.starredGames.push(s)}getStarredGames(){return this.starredGames}removeStarredGames(s){const m=this.starredGames.indexOf(s);this.starredGames.splice(m,1)}constructor(s){this.http=s,this.apiUrl="https://api.boardgameatlas.com/api",this.apiKey="2HqxF4Qxrg",this.starredGames=[]}getBoardGames(s){return this.http.get(0==s?`${this.apiUrl}/search?client_id=${this.apiKey}`:0<s&&s<7?`${this.apiUrl}/search?max_players=${s}&client_id=${this.apiKey}`:`${this.apiUrl}/search?min_players=7&client_id=${this.apiKey}`)}}return p.\u0275fac=function(s){return new(s||p)(a.LFG(g.eN))},p.\u0275prov=a.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()}}]);