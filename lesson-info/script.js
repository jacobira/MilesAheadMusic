
window.onscroll = function(){
    growShrinkLogo();
}

function growShrinkLogo(){
    var logo = document.getElementById("logo");
    if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75){
        logo.style.width = "100px";
        logo.style.height = "100px";
        logo.style.top = "0px";
    } else {
        logo.style.width = "250px";
        logo.style.height = "250px";
        logo.style.top = "10px";
    }
}

function displayForm(){
    document.getElementById("form").classList.remove("hidden");
}
function closeForm(){
    document.getElementById("form").classList.add("hidden");
}