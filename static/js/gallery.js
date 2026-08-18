if (!window.zolaLightboxLoaded && document.querySelector('.zola-gallery-thumb')) {
    window.zolaLightboxLoaded = true;

    const lightbox = document.createElement('div');
    lightbox.id = 'zola-lightbox';
    lightbox.innerHTML = `<img id="zola-lightbox-img" src="" alt="Enlarged image" />`;
    document.body.appendChild(lightbox);
    lightbox.addEventListener('click', () => { lightbox.style.display = 'none'; });
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('zola-gallery-thumb')) {
            document.getElementById('zola-lightbox-img').src = e.target.getAttribute('data-full');
            lightbox.style.display = 'flex';
        }
    });
}
