var a = document.querySelector(".bulb")
var flag = 0
a.addEventListener("click", function() {
    if (flag == 0) {
        a.style.backgroundColor = "yellow"
        flag = 1
        console.log("thankyou sheryians coding school")
    } else {
        a.style.backgroundColor = "blue"
        flag = 0
    }
})