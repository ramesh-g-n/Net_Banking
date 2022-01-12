function logout(){
    window.location = "../index.html";
}
function MyAcc(){
    window.location = "../HTML/MyAcc.html";
} 

setInterval(updateTime,1000);

function updateTime(){
    showdate.innerHTML = new Date;
}
function Payment(){
    window.location = "../HTML/PaymentTransfer.html";
}
function Billpayments(){
    window.location = "../HTML/Billpayment.html";
}