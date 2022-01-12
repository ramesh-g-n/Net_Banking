function logout(){
    window.location = "../index.html";
}
function AccSummary(){
    window.location = "../HTML/AccSummary.html";
}
function AccStatement(){
    window.location = "../HTML/AccStatement.html";
}
function estatement(){
    window.location = "../HTML/estatement.html";
}
function pending(){
    window.location = "../HTML/pending.html";
}
function profile(){
    window.location = "../HTML/profile.html";
}
function upi(){
    window.location = "../HTML/upi.html";
}
function Payment(){
    window.location = "../HTML/PaymentTransfer.html";
}
function Billpayments(){
    window.location = "../HTML/Billpayment.html";
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

