const p = document.querySelector('.card > a > img');
console.log(p);

const videoContainer = document.getElementById('video-container');
const body = document.querySelector('body');

// Ouvrir la vidéo lorsqu'on clique sur le <p>
p.addEventListener('click', (e) => {
    e.stopPropagation()
    videoContainer.style.display = 'block';
});

// Fermer la vidéo lorsqu'on clique sur le body
body.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log(e.target);
    
    // On s'assure que le clic n'a pas eu lieu sur le container de la vidéo
    if (videoContainer.style.display === "block") {
        videoContainer.style.display = 'none';
    }
    
});

