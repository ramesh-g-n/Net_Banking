function logout(){
    window.location = "../index.html";
}
function fund(){
    window.location = "../HTML/fundtransfer.html";
}
function Acc(){
    window.location = "../HTML/withinpbi.html";
}
function van(){
    window.location = "../HTML/van.html";
}
function otherbank(){
    window.location = "../HTML/other.html";
}

function MyAcc(){
    window.location = "../HTML/MyAcc.html";
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