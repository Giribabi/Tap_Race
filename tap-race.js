var player1=document.getElementById("car1");
var player2=document.getElementById("car2");
var opponent1=document.getElementById("oppo1");
var opponent2=document.getElementById("oppo2");
var reset_button=document.getElementById("reset");
var winner=document.getElementById("result");
const steps=25;
reset_button.addEventListener('click',()=>{
    window.location.reload(true);
})
var c1=0;
var c2=0;
var start1=0,start2,end1=0,end2;
player1.addEventListener('click',()=>{
    if(c1==0){
        var d=new Date();
        start1=d.getTime();
    }
    if(c1<steps){
        opponent1.style.position='relative';
        var pos=opponent1.style.left || 0;
        opponent1.style.left=(parseInt(pos)+50)+'px';
        c1++;
    }
    if(c1==steps){
        c1++;
        var d=new Date();
        end1=d.getTime();
        winner.innerHTML="Player 1 finished";
        winner.style.backgroundColor='cyan';
        winner.style.transform='scale(5.0)';
        winner.style.transition='transform 2000ms';
        console.log("Player 1 finished");
    }
});
player2.addEventListener('click',()=>{
    if(c2==0){
        var d=new Date();
        start2=d.getTime();
    }
    if(c2<steps){
        opponent2.style.position='relative';
        var pos=opponent2.style.left || 0;
        opponent2.style.left=(parseInt(pos)+50)+'px';
        c2++;
    }
    if(c2==steps){
        winner.innerHTML="Player 2 finished";
        winner.style.backgroundColor='yellow';
        winner.style.transform='scale(5.0)';
        winner.style.transition='transform 2000ms';
        console.log("Player 2 finished");
        c2++;
        setTimeout(()=>{
            var d=new Date();
            end2=d.getTime();
            time1=end1-start1;
            time2=end2-start2;
            console.log(time1+" "+time2)
            if(time1<time2 && start1!=0){
                winner.innerHTML="Winner Player 1";
                winner.style.backgroundColor='#00ff00';
                winner.style.animation='score-rotate 1000ms 200ms';
                console.log("Winner Player 1");
            }
            else if(start1!=0){
                winner.innerHTML="Winner Player 2";
                winner.style.backgroundColor='#00ff00';
                winner.style.animation='score-rotate 1000ms 200ms';
                console.log("Winner Player 2");
            }
            else{
                winner.innerHTML="Player 1 did not complete";
                winner.style.backgroundColor='red';
                winner.style.animation='score-rotate 1000ms 200ms';
                console.log("Player 1 did not complete");
            }
        },2010);
    }
});