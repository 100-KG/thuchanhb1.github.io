function responsiveButton(){
    const name = document.querySelector(".name");
    const dob = document.querySelector(".dob");
    const cccd = document.querySelector(".cccd");
    const address = document.querySelector(".address");
    const next = document.querySelector("#next");

    name.addEventListener("input", e=>{
        if(!name.value || !dob.value || !cccd.value || !address.value){
            next.setAttribute("disabled", "disabled");
            next.classList.remove("abled");
        }else{
            next.removeAttribute("disabled");
            next.classList.add("abled")
        }
    })
    dob.addEventListener("input", e=>{
        if(!name.value || !dob.value || !cccd.value || !address.value){
            next.setAttribute("disabled", "disabled");
            next.classList.remove("abled");
        }else{
            next.removeAttribute("disabled");
            next.classList.add("abled")
        }
    })
    cccd.addEventListener("input", e=>{
        if(!name.value || !dob.value || !cccd.value || !address.value){
            next.setAttribute("disabled", "disabled");
            next.classList.remove("abled");
        }else{
            next.removeAttribute("disabled");
            next.classList.add("abled")
        }
    })
    address.addEventListener("input", e=>{
        if(!name.value || !dob.value || !cccd.value || !address.value){
            next.setAttribute("disabled", "disabled");
            next.classList.remove("abled");
        }else{
            next.removeAttribute("disabled");
            next.classList.add("abled")
        }
    })
}
