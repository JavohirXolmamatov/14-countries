const loaderEl = document.querySelector('.loader-box')

export const loaderToggle = (info) => {
    if (info) {
        loaderEl.classList.remove('hidden')
    }else {
        loaderEl.classList.add('hidden')
    }
}