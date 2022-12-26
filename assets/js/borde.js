function border(id){
    element = document.getElementById(id)
    if("1px solid red" === element.style.border){
        element.style.border = "none";
    }else{
        element.style.border = "1px solid red";
    }
}