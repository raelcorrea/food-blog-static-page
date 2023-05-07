function toggleMenu (){
    let toggleMenu = document.getElementById("toggleMenu");
    let menu = document.getElementById("menu");
    toggleMenu.addEventListener('click', function(){
        menu.classList.toggle('open');
        toggleMenu.classList.toggle('open');
    });
}

toggleMenu();