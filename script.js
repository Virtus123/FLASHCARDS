document.querySelectorAll('.flashcard').forEach(card => {
    card.addEventListener('click', function() {
        card.classList.toggle('flipped');
    });
});
