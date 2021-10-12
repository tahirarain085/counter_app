let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");


btns.forEach(function(btn){
btn.addEventListener("click",function(e){
    let btnStyles= e.currentTarget.classList;

    if (btnStyles.contains("increase")){
        count++;
    }else if (btnStyles.contains("decrease")){
        count--;
    }
    else{
        count=0;
    };
    if (count > 0){
    value.style.color= 'blue';

    }if (count<0){
        value.style.color = "red";
    }if(count===0){
    value.style.color = 'black';
    }
    
    value.textContent = count;
});
})