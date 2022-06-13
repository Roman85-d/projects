function validform(){
    var form = document.getElementById("entrance");
    var name = form.elements["name"].value;
    var email = form.elements["email"].value;
    var dogem;
    var pointem;
    if(name.length == 0){
        document.getElementById("namef").innerHTML = "данное поле обязательно для заполения!";
        return false;
    }
    else {
        document.getElementById("namef").innerHTML = "";
    }

    if(email.length == 0){
        document.getElementById("emailf").innerHTML = "данное поле обязательно для заполения!";
        return false;
    }
    else {
        document.getElementById("emailf").innerHTML = "";
    }

    dogem = email.indexOf("@");
    pointem = email.indexOf(".");


    if(dogem < 1 || pointem < 1){
        document.getElementById("emailf").innerHTML = "адрес эл.почты введен неверно!";
         return false;
    }

}

