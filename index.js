let like=localStorage.getItem('like')||0;
document.getElementById("like").innerHTML=like
document.getElementById("like-btn").addEventListener("click", ()=>{
    like++;
    document.getElementById("like").innerHTML=like
    console.log(like);
    localStorage.setItem("like",like);

});
let dislike=localStorage.getItem('dislike')||0;
document.getElementById("dislike").innerHTML=dislike
document.getElementById("dislike-btn").addEventListener("click", ()=>{
    dislike++;
    document.getElementById("dislike").innerHTML=dislike
    console.log(like);
    localStorage.setItem("dislike",dislike);

});