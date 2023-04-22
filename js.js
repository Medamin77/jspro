let likes=document.getElementsByclassName("like")
console.log(likes)
for (const like of likes) {
    like.addEventListener("click",function(){
        if(like.color=="red"){
        like.style.color="black"
    }
    else{
        like.style.color="red"
    }
})

