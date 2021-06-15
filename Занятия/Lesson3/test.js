// function counter(num){
//     console.log(num++);
//     if(num != 3)
//     counter(num);
// }
// counter(0);

function counter(num){
        console.log(num++);
        setTimeout(()=>{
        counter(num);
        }, 0);
    }
    counter(0);