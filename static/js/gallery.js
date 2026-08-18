if (!window.zolaLightboxLoaded && document.querySelector('img[data-full]')) {
    window.zolaLightboxLoaded = true;

    const lightbox = document.createElement('div');
    lightbox.id = 'zola-lightbox';
    lightbox.innerHTML = `<img id="zola-lightbox-img" src="" alt="Enlarged image" />`;
    document.body.appendChild(lightbox);

    lightbox.addEventListener('click', () => { lightbox.style.display = 'none'; });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') lightbox.style.display = 'none';
    });

    document.addEventListener('click', (e) => {
        if (e.target.matches('img[data-full]')) {
            document.getElementById('zola-lightbox-img').src = e.target.getAttribute('data-full');
            lightbox.style.display = 'flex';
        }
    });
}
