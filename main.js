import "./style.css";
    const navBtn = document.getElementById('menu');

    navBtn.addEventListener('click', function () {
    const isExpanded = JSON.parse(navBtn.getAttribute('aria-expanded'));
    navBtn.setAttribute('aria-expanded', !isExpanded);

    document.getElementById('menubar').classList.toggle('hidden');
    document.getElementById('menubar').classList.toggle('flex');
})