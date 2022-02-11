for(let i=1; i<=15; i++){
    if(i%4==0 && i%3==0){
        console.log("YESOK")
    }
    else if(i%3==0){
        console.log("OK ")
    }
    else if(i%4==0){
        console.log("YES ")
    }
    else{
        console.log(i)
    }
}