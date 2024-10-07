// Portfolio toggler
porfolio = document.getElementById("portfolio");
arrowIcon = porfolio.firstElementChild;

porfolio.addEventListener('click', () => {
    pages = document.getElementById("pages");
    arrowIcon.classList.toggle('rotate-90');
    // pages.classList.toggle('scale-y-0');
    pages.classList.toggle('hidden');
})


// Sidebar toggler
hamburgerIcon = document.getElementById("hamburger");
sidebar = document.getElementById("sidebar");

hamburgerIcon.addEventListener('click', () => {
    sidebar.classList.toggle('-left-full');
});

// Explorer toggler
explorerIcon = document.getElementById('explorer-icon');
explorer = document.getElementById('explorer');

explorerIcon.addEventListener('click', () => {
    // var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    // if (screenWidth >= 640) {
    //     explorer.classList.toggle('hidden');
    // }
    explorer.classList.toggle('hidden');

})

// Tabs toggler 
function openTab(event, tabName) {
    let i, tabcontents, tablinks, activeTabs;

    tabcontents = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList = tabcontents[i].className.replace(' block', ' hidden');
    }

    tablinks = document.getElementsByClassName('tablink');
    for (i = 0; i < tablinks.length; i++) {

        tablinks[i].classList.remove('bg-tabbar-active');
    }

    pages = document.getElementsByClassName('page');
    for (i = 0; i < pages.length; i++) {
        pages[i].classList.remove('bg-explorer-hover');
        if (!pages[i].classList.contains('hover:bg-tabbar-active')) {
            pages[i].classList.add('hover:bg-tabbar-active');
        }
    }

    activeTabs = document.getElementsByClassName(tabName);

    for (i = 0; i < activeTabs.length; i++) {
        if (activeTabs[i].tagName == 'BUTTON') {
            activeTabs[i].className += ' bg-tabbar-active';
        }
        else if (activeTabs[i].tagName == 'SECTION') {
            activeTabs[i].classList = activeTabs[i].className.replace(' hidden', ' block');
        }
        else if (activeTabs[i].tagName == 'DIV') {
            activeTabs[i].classList.toggle('bg-explorer-hover');
        }
    }
}
