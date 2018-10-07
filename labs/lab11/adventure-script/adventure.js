(function() {
   'use strict';
   const player = {
     dom: document.getElementById("player"),
     left: 0,
     speed: 10,
     paint: function() {
       this.dom.style.left = this.left + "px";
     }
   }
   window.addEventListener('keydown',(e)=>{
     if(e.key === 'ArrowLeft') player.left -= player.speed;
     if(e.key === 'ArrowRight') player.left += player.speed;
     player.paint();
   })
}());
