score =0;
flag=0;
window.onkeydown=function(e)
{
   if(e.keyCode==38)
   {
    dino=document.querySelector('.dino');
    dino.classList.add('animatedino');
    setTimeout(()=>{
    dino.classList.remove('animatedino');
    },700);
   }
   if(e.keyCode==39)
   {
    dino=document.querySelector('.dino')
    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dino.style.left=dx+100+"px";
   }
   if(e.keyCode==37)
   {
    dino=document.querySelector('.dino')
    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dino.style.left=dx-100+"px";
   }
}

setInterval( ()=>{
     dino=document.querySelector('.dino');
     gameover=document.querySelector('.gameover');
     obstacle=document.querySelector('.obs');

   dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
   dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
   ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
   oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));
   offsetx=Math.abs(dx-ox);
   offsety=Math.abs(dy-oy);
   console.log(offsetx,offsety);
   if(offsetx<80&&offsety<50)
   {
    obstacle.classList.remove('obsani');
    flag=1;
   }
   else if(flag==0) {
    document.getElementById('score').innerText=score++;
   }

},10)