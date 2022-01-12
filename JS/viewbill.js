function logout(){
    window.location = "../index.html";
}
function Billpayments(){
    window.location = "../HTML/Billpayment.html";
}
setInterval(updateTime,1000);

function updateTime(){
    showdate.innerHTML = new Date;
}

function togglebtn1(){
    document.getElementById("para1").style.display = "block";
    document.getElementById("para2").style.display = "none";
    document.getElementById("para3").style.display = "none";
}
function togglebtn2(){
    document.getElementById("para1").style.display = "none";
    document.getElementById("para2").style.display = "block";
    document.getElementById("para3").style.display = "none";
}
function togglebtn3(){
    document.getElementById("para1").style.display = "none";
    document.getElementById("para2").style.display = "none";
    document.getElementById("para3").style.display = "block";
}


   
    
        
    