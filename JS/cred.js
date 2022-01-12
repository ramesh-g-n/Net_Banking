function logout(){
    window.location = "../index.html";
}
function service(){
    window.location = "../HTML/eservice.html";
}


setInterval (updateTime,1000);

function updateTime(){
    showdate.innerHTML = new Date;
}




