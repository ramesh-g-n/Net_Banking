function logout(){
    window.location = "../index.html";
}
function Payment(){
    window.location = "../HTML/PaymentTransfer.html";
}

setInterval(updateTime,1000);

function updateTime(){
    showdate.innerHTML = new Date;
}