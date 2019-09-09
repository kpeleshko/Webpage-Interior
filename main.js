let mainMenuStatus = false;

let mainMenu = function() {
    let getMainMenu = document.querySelector(".main-menu");

    if (mainMenuStatus === false) {
        getMainMenu.style.visibility = "visible";
        mainMenuStatus = true;
    }

    else if(mainMenuStatus === true) {
        getMainMenu.style.visibility = "hidden";
        mainMenuStatus = false;
    };
}


