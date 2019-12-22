const switchButtonSelector = '#switch-btn'
const secondThemeClass = 'theme-b'

document.addEventListener('DOMContentLoaded', function()
{  

    const isSecondTheme = localStorage.getItem(secondThemeClass)
    if (isSecondTheme) {
        document.body.classList.add(secondThemeClass)
    }

    const switchButton = document.querySelector(switchButtonSelector)

    switchButton.addEventListener('click', function() {
        const isSecondTheme = localStorage.getItem(secondThemeClass)
        if (isSecondTheme) {
            document.body.classList.remove(secondThemeClass)
            localStorage.removeItem(secondThemeClass)
        } 
        else {
            document.body.classList.add(secondThemeClass)
            localStorage.setItem(secondThemeClass, 'ok')
        }
    
    })
})