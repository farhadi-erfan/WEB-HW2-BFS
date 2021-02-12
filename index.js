var changeTheme = () => {
    darkColor = '#292A2C'
    nav = document.getElementById('navbar');
    side = document.getElementById('sidebar');
    body = document.getElementsByTagName('body')[0];
    if(nav.classList.contains('dark')) {
        nav.classList.remove('dark');
        side.classList.remove('dark');
        body.style.backgroundColor = 'white';
    }
    else {
        nav.classList.add('dark');
        side.classList.add('dark');
        body.style.backgroundColor = darkColor;
    }
}

var openNav = () => {
    side = document.getElementById("sidebar")
    side.style.width = "300px";
    // side.classList.add('left');
    document.getElementById("nav-open").classList.add("hide");
    document.getElementById("nav-close").classList.remove("hide");
}

var closeNav = () => {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("nav-open").classList.remove("hide");
    document.getElementById("nav-close").classList.add("hide");
}

var toHome = () => {
    document.getElementById('nav-home').classList.add('active');
    document.getElementById('nav-data').classList.remove('active');
    home = document.getElementById('home');
    data = document.getElementById('data');
    fadeOut(data, 200);
    setTimeout(()=>fadeIn(home, 200), 200);
}

var toData = () => {
    document.getElementById('nav-data').classList.add('active');
    document.getElementById('nav-home').classList.remove('active');
    data = document.getElementById('data');
    home = document.getElementById('home');
    data.classList.remove('hide')
    fadeOut(home, 400);    
    fadeIn(data, 400);
    // document.getElementById('home')
    // document.getElementById('data').classList.remove('hide');
    // fadeIn('data');
}

var toHomeMobile = () => {
    document.getElementById('nav-mobile-home').classList.add('active');
    document.getElementById('nav-mobile-data').classList.remove('active');
    home = document.getElementById('home');
    data = document.getElementById('data');
    fadeOut(data, 200);
    setTimeout(()=>fadeIn(home, 200), 200);
}

var toDataMobile = () => {
    document.getElementById('nav-mobile-data').classList.add('active');
    document.getElementById('nav-mobile-home').classList.remove('active');
    data = document.getElementById('data');
    home = document.getElementById('home');
    data.classList.remove('hide')
    fadeOut(home, 400);    
    fadeIn(data, 400);
    // document.getElementById('home')
    // document.getElementById('data').classList.remove('hide');
    // fadeIn('data');
}


function fadeIn(elemant, time) {
    elemant.style.transition = "opacity " + time + "ms"
    elemant.style.opacity = "0"
    elemant.style.display = 'flex';
    setTimeout(() => {
        elemant.style.opacity = "1";
    }, time);
}

function fadeOut(elemant, time, do_none=true) {
    elemant.style.transition = "opacity " + time + "ms";
    elemant.style.opacity = "0";
    elemant.style.display = '';
    if (do_none) {
        setTimeout(() => {
            elemant.style.display='none';
        }, time);
    }
}

export {fadeIn, fadeOut}