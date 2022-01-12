function logout(){
    window.location = "../index.html";
}
function MyAcc(){
    window.location = "../HTML/MyAcc.html";
}
function togglebtn1(){
    document.getElementById("para1").innerHTML = "Dear Customer,<br>Bank has introduced an automated process of sending accounts statements every month, on your registered e-mail ID with the Bank<br> Please ensure to register your e-mail ID with the bank to avail the facility";
}
function togglebtn2(){
    document.getElementById("para1").innerHTML = "Currently there are no accounts registered for this service.";
}


setInterval (updateTime,1000);

function updateTime(){
    showdate.innerHTML = new Date;
}