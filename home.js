function redirectToDifficulty() {
    const nameInput = document.querySelector('input[name="name"]');
    const nicknameInput = document.querySelector('input[name="nickname"]');

    if (nameInput.value && nicknameInput.value) {
        location.href = "./difficulty.html"; 
    } else {
        alert('Please fill in your name and nickname to start playing');
    }
}