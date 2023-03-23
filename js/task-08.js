const form = document.querySelector('.login-form')

form.addEventListener("submit", onSubmit)

function onSubmit(event) {
    event.preventDefault();
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;

    
    if (email === "" || password === "") {
        alert("Please fill all the fields!")
    } else {
        console.log(`Email: ${email}`)
        console.log(`Password: ${password}`)
    }

    form.reset()
}
