var randomNumber1=Math.floor(Math.random()*6+1);
var randomImg1="images/dice"+randomNumber1+".png";
var leftimg=document.querySelectorAll("img")[0];
leftimg.setAttribute("src",randomImg1);

var randomNumber2=Math.floor(Math.random()*6+1);
var randomImg2="images/dice"+randomNumber2+".png";
var rightimg=document.querySelectorAll("img")[1];
rightimg.setAttribute("src",randomImg2);

if(randomNumber1>randomNumber2)
{
    (document.querySelector("h1")).innerHTML="&#128681 Player 1 wins"
}
else if(randomNumber2>randomNumber1)
{
    (document.querySelector("h1")).innerHTML="&#128681 Player 2 wins"
}
else
{
    (document.querySelector("h1")).innerHTML="Draw!"
}