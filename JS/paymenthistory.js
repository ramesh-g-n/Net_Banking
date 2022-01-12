function logout(){
    window.location = "../index.html";
}
function bill(){
    window.location = "../HTML/Billpayment.html";
}


setInterval(updateTime,1000);

function updateTime(){
    showdate.innerHTML = new Date;
}

function oldbill(){
    var x = document.getElementById("date");
    var y = document.getElementById("sub");
    if (x.style.display == "none"){
        y.style.display = "block";
    }
    else{
        x.style.display = "none";
        y.style.display = "block";
    }
}
function newbill(){
    var x = document.getElementById("date");
    var y = document.getElementById("sub");
    if (x.style.display == "none"){
        x.style.display = "block";
    }
    else{
        x.style.display = "block";
        y.style.display = "none";
    }
}