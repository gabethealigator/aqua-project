const page = document.querySelector('[data-bs-theme]')
const dashBtns = document.getElementsByName('options-outlined')
const homeBtns = document.getElementsByName('theme-btn')

if (localStorage.getItem('mode') == 'dark') {
  setDarkMode()
} else {
  setLightMode()
}

function setDarkMode() {
  localStorage.setItem('mode', 'dark')
  page.dataset.bsTheme = 'dark'

  if (dashBtns.length !== 0) {
    dashBtns[0].checked = false
    dashBtns[1].checked = true
  } else if (homeBtns.length !== 0) {
    homeBtns[0].style.display = 'none'
    homeBtns[1].style.display = 'block'
  }
}

function setLightMode() {
  localStorage.setItem('mode', 'light')
  page.dataset.bsTheme = 'light'

  if (dashBtns.length !== 0) {
    dashBtns[0].checked = true
    dashBtns[1].checked = false
  } else if (homeBtns.length !== 0) {
    homeBtns[0].style.display = 'block'
    homeBtns[1].style.display = 'none'
  }
}

for (let i = 0; i < dashBtns.length; i++) {
  dashBtns[i].addEventListener('click', ()=> {
    const bodyBgColor = window.getComputedStyle(document.querySelector('body')).backgroundColor
    document.documentElement.style.setProperty('--bg-color', bodyBgColor)
  })
}

for (let i = 0; i < homeBtns.length; i++) {
  homeBtns[i].addEventListener('click', ()=> {
    if (homeBtns[i].id === 'switch-light-theme') {
      setDarkMode()
    } else {
      setLightMode()
    }
  })
}