function logout(){
    window.location = "../index.html";
}
function manage(){
    window.location = "../HTML/managebiller.html";
}
function viewbills(){
    window.location = "../HTML/viewbill.html";
}
function history(){
    window.location = "../HTML/paymenthistory.html";
}
function recharge(){
    window.location = "../HTML/topup.html";
}
function MyAcc(){
    window.location = "../HTML/MyAcc.html";
}
function Payment(){
    window.location = "../HTML/PaymentTransfer.html";
}
function tax(){
    window.location = "../HTML/etax.html";
}
function service(){
    window.location = "../HTML/eservice.html";
}

setInterval(updateTime,1000);

function updateTime(){
    showdate.innerHTML = new Date;
}
