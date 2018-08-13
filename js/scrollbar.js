const scrollBar = document.querySelector('.scrollbar');
const comeBackBtn = document.querySelector('.comeback');

statusBar();
comeBack();

window.addEventListener('scroll', () => { 
    statusBar();
    comeBack();
});

function statusBar() {
    currentScroll = Math.round(window.scrollY / (document.documentElement.offsetHeight - window.innerHeight) * 100);
    scrollBar.style.width = currentScroll + "%";
}

function comeBack() {
    if(window.scrollY > 500) {
         comeBackBtn.style.opacity = 1;
    } else {
         comeBackBtn.style.opacity = 0;
    }
}

comeBackBtn.addEventListener('click', (e) => {
    $('html, body').animate({scrollTop:0}, 400);
});