document.getElementById('loginbtn').addEventListener('click', function () {

    const emailfiled = document.getElementById('email');
    const getemail = emailfiled.value;
    const passfiled = document.getElementById('passwordf');
    const getpass = passfiled.value;
    if (getemail == 'jhsagorkhan@gmail.com' && getpass == 'sagor007') {
        //window.location.href = 'dashbord.html', '_blank', 'return false';
        window.open('dashbord.html', '_blank');
    }


})


