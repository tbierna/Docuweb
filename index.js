console.log("docuweb");

//Boutons Barre Menu
document.querySelector('.fa-times').style.display = "none "

const menuBtn = document.querySelector(".menu_btn ")
const sideBar = document.querySelector(".sidebar ")

menuBtn.onclick = function() {

    if (sideBar.style.right == '-250px') {
        sideBar.style.right = "0"
        document.querySelector('.fa-times').style.display = ""
        document.querySelector('.fa-bars').style.display = "none "

    } else {
        sideBar.style.right = "-250px"
        document.querySelector('.fa-times').style.display = "none"
        document.querySelector('.fa-bars').style.display = ""
    }

}