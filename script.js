document.addEventListener('DOMContentLoaded', function() {
    const imageModal = document.getElementById('imageModal');

    if (imageModal) {
        imageModal.addEventListener('show.bs.modal', event => {
            const button = event.relatedTarget;
            const imageUrl = button.getAttribute('data-bs-image-url');
            const imageText = button.getAttribute('data-bs-image-text');
            
            const modalImage = imageModal.querySelector('#modalImage');
            const modalText = imageModal.querySelector('#modalText');
            
            modalImage.src = imageUrl;
            modalText.textContent = imageText;
        });
    }
});