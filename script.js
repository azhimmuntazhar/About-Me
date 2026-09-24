// const togglemode = document.querySelector('.toggle-mode');
// const main = document.getElementById('background-color1');
// const hi = document.querySelector('.selamatdatang');
// const azhim = document.querySelector('.selamatdatang2');
// const subtext = document.querySelector('.subtext');
// const btn = document.querySelector('.btn');
// const buttonNavPage = document.getElementById('button-nav-page');


// togglemode.addEventListener('click', () => {
//     togglemode.textContent = togglemode.textContent === '🔆' ? '🌙' : '🔆';
//     main.style.backgroundImage = main.style.backgroundImage === 'linear-gradient(to top, rgb(0, 0, 0), rgb(53, 24, 21))' ? 'linear-gradient(to top, rgb(255, 255, 255), rgb(49, 144, 204))' : 'linear-gradient(to top, rgb(0, 0, 0), rgb(53, 24, 21))';
//     subtext.style.color = subtext.style.color === 'rgb(149, 149, 149)' ? 'white' : 'rgb(149, 149, 149)';




//     // belum bisa ganti warna, masih bingung
//     azhim.style.backgroundImage = azhim.style.backgroundImage === 'linear-gradient(to left, #9c3f3f, #962929)' ? 'linear-gradient(to left, #3ec1ea, #297d96)' : 'linear-gradient(to left, #9c3f3f, #962929)';
//     hi.style.textShadow = hi.style.textShadow === '#933030' ? '#000000' : '#933030'; 
//     btn.style.backgroundColor = btn.style.backgroundColor === '#962929' ? '#297d96' : '#962929';
//     buttonNavPage.style.backgroundColor = buttonNavPage.style.backgroundColor === '#933030' ? '#000000' : '#933030'; 

// });




function ToggleDark() {
    var element = document.body;
    element.classList.toggle("darkmode");
}