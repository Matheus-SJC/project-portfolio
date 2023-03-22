const darkTheme = document.querySelector('.dark-theme')
const lightTheme = document.querySelector('.light-theme')
const allTheme = document.querySelector('.all-theme')

darkTheme.addEventListener('click', function() {
    allTheme.classList.remove('light')
    allTheme.classList.add('dark')
})

lightTheme.addEventListener('click', function() {
    allTheme.classList.remove('dark')
    allTheme.classList.add('light')
})