function changeState(){
    let menuElement = document.getElementById("menu");
    if(menuElement.className === 'compressed-submenu' || menuElement.className === 'inital-submenu')
    {
        menuElement.className = 'complete-submenu';

    }else if(menuElement.className === 'complete-submenu')
    {
        menuElement.className = 'compressed-submenu';
    }
}