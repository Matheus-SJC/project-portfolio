const darkTheme = document.querySelector('.dark-theme')
const lightTheme = document.querySelector('.light-theme')
const allTheme = document.querySelector('.all-theme')

function switchBtn() {
    if (darkTheme.style.display === 'none') {
        darkTheme.style.display = 'block'
        lightTheme.style.display = 'none'
        allTheme.classList.remove('dark')
        allTheme.classList.add('light')
    } else {
        darkTheme.style.display = 'none'
        lightTheme.style.display = 'block'
        allTheme.classList.remove('light')
        allTheme.classList.add('dark')
    }
}

darkTheme.addEventListener('click', switchBtn)
lightTheme.addEventListener('click', switchBtn)