const modeBtn = document.querySelector('.header__dark-mode');
const body = document.querySelector('body');

// Brauzer localStorage-dan "mode" ni olib kelish
const modeFromLocal = localStorage.getItem('mode');

// Agar localStorage-da saqlangan ma'lumot bo'lsa, dark-mode klassini qo'shish
if (modeFromLocal === 'dark') {
    body.classList.add('dark-mode');
}

// Tugma bosilganda dark-mode ni yoqish/o'chirish va localStorage-ni yangilash
modeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Yangilangan localStorage qiymatini to'g'ridan-to'g'ri o'zgartirish
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('mode', 'dark');
    } else {
        localStorage.setItem('mode', '');
    }
});
