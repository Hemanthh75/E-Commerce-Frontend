function login(form) {                                                                                     //Function for login form
    let eMial = form.id.value;
    let password = form.pass.value;

    if(eMial == "admin@admin.com" && password == "123456") {
        alert ("Login Successful")
    } else {
        alert ("Incorrect email or password")
    }
}