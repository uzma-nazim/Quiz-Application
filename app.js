let  firstName = document.querySelector("#firstName")


let statingQuiz = ()=>{
    
    if(firstName.value==""){
        let required = document.querySelector("#required")
        required.style.visibility= ' visible';
        // alert("Enter Your Name")
    }
    else{
        required.style.visibility= ' hidden';
        location.href = "starts.html";
    }


}



  