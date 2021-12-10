const toggle = document.querySelector(".toggle")
const root = document.querySelector(":root")

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme")
})



const submit = document.querySelector("#frm-btn")

submit.addEventListener("click", () => {
    getName = document.querySelector("#name").value
    getEmail = document.querySelector("#email").value
    getMesg = document.querySelector("#msg").value

    new_object = {
        name: getName,
        Email: getEmail,
        Message: getMesg
    }
    console.log(new_object)
})

