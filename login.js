function chkpasswords() 
        {
        if (document.getElementById("firstpwd").value == ""){
        alert('You have not entered a password, please enter ');
        document.getElementById("firstpwd").focus();
        return false; }
        if (document.getElementById("firstpwd").value !=
        document.getElementById("secondpwd").value) {
        alert('The two password you entered are not same, please re-enter');
        document.getElementById("firstpwd").focus();
        document.getElementById("firstpwd").select();
        return false; }
        else {
         alert('The two password you entered are same');
        return true; }
        }
        