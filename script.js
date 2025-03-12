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

function check(event){
    event.preventDefault();

    const name = document.querySelector(".name").value;
    const dob = document.querySelector(".dob").value;
    const cccd = document.querySelector(".cccd").value;
    const address = document.querySelector(".address").value;
    let noti = document.querySelector(".notify");

    noti.textContent = "";
    noti.style.color = "";
    if(cccd.length != 12){
        noti.style.color = "red";
        noti.textContent = "Invalid CCCD!";
        return;
    }else{
        document.querySelector(".name").value = "";
        document.querySelector(".dob").value = "";
        document.querySelector(".cccd").value = "";
        document.querySelector(".address").value = "";
        window.location.href='index2.html'
    }
}