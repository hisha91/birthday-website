document.addEventListener('DOMContentLoaded', () => {
    const images = [
        { src: 'assets/diu1 (1).jpeg', title: 'speacial', description: 'Divya, you light up every room you walk into with your warmth and grace. Your kindness and positive energy make the world a brighter place. You truly are a gem!' },
        { src: 'assets/whatasapp1.jpeg', title: 'special', description: 'Divya, your creativity and spirit inspire everyone around you. You have a remarkable ability to turn every moment into something special. Keep shining your beautiful light!' },
        { src: 'assets/madhuri1.jpeg', title: 'special', description: 'Divya, your genuine smile and caring nature make you incredibly special. Your presence brings joy and positivity to everyone you meet. You’re truly one of a kind!Divya, your genuine smile and caring nature make you incredibly special. Your presence brings joy and positivity to everyone you meet. You’re truly one of a kind! wishes from madhuri'},
        // Add more images as needed
    ];

    const wishes = [
        { text: 'Happy Birthday, Divya! - From brothers', video: 'assets/WhatsApp Video 2024-09-01 at 12.05.42 AM.mp4' },
        { text: 'Best wishes on your special day! - From sisters and mom', video: 'assets/WhatsApp Video 2024-09-01 at 12.05.55 AM.mp4' },
        {text:'happy birthday divya from Nisha',video:'assets/WhatsApp Video 2024-09-01 at 12.05.52 AM.mp4'}
        // Add more wishes as needed
    ];

    const imageSlider = document.getElementById('image-slider');
    const wishList = document.getElementById('wish-list');
    const storyModal = document.getElementById('story-modal');
    const closeModal = document.querySelector('.close');
    const storyTitle = document.getElementById('story-title');
    const storyDescription = document.getElementById('story-description');

    // Populate image slider
    images.forEach(img => {
        const imageElement = document.createElement('img');
        imageElement.src = img.src;
        imageElement.alt = img.title;
        imageElement.addEventListener('click', () => {
            storyTitle.textContent = img.title;
            storyDescription.textContent = img.description;
            storyModal.style.display = 'block';
        });
        imageSlider.appendChild(imageElement);
    });

    // Populate wishes
    wishes.forEach(wish => {
        const wishElement = document.createElement('div');
        wishElement.innerHTML = `<p>${wish.text}</p><video controls src="${wish.video}" width="300"></video>`;
        wishList.appendChild(wishElement);
    });

    // Close modal
    closeModal.addEventListener('click', () => {
        storyModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === storyModal) {
            storyModal.style.display = 'none';
        }
    });
});
