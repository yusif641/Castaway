const sections = document.querySelectorAll('section')
const menu = document.querySelectorAll('.menu__link')

menu.forEach((e, i, a) => {
    e.addEventListener('click', (e) => {
        e.preventDefault()
        for (let i = 0; i < sections.length; i++) {
            if (e.target.innerText.toLowerCase() === sections[i].classList[0]) {
                sections[i].scrollIntoView({
                    block : 'start',
                    inline : 'nearest',
                    behavior : 'smooth'
                })
            }
            
        }
    })
})

$('.icon-menu').click(function (ev) {
    $('.icon-menu, .menu__body').toggleClass('_active');
    $('body').toggleClass('_active');
});
