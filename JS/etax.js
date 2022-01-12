function logout(){
    window.location = "../index.html";
}
function state(){
    window.location = "../HTML/state.html";
}
function indirect(){
    window.location = "../HTML/indirect.html";
}
function direct(){
    window.location = "../HTML/direct.html";
}
function challan(){
    window.location = "../HTML/challan.html";
}
function MyAcc(){
    window.location = "../HTML/MyAcc.html";
}
function Payment(){
    window.location = "../HTML/PaymentTransfer.html";
}
function Billpayment(){
    window.location = "../HTML/Billpayment.html";
}
function service(){
    window.location = "../HTML/eservice.html";
}

setInterval(updateTime,1000);

function updateTime(){
    showdate.innerHTML = new Date;
}
