function logout(){
    window.location = "../index.html";
}
function atm(){
    window.location = "../HTML/atm.html";
}
function credit(){
    window.location = "../HTML/cred.html";
}
function portal(){
    window.location = "../HTML/doc.html";
}
function transfer(){
    window.location = "../HTML/Acctransfer.html";
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
function tax(){
    window.location = "../HTML/etax.html";
}

setInterval(updateTime,1000);

function updateTime(){
    showdate.innerHTML = new Date;
}
