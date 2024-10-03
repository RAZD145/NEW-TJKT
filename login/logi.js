const loginContainer = document.getElementById('login-container');
const usernameInput = document.getElementById('username');

document.getElementById('login-btn').addEventListener('click', () => {
    const username = usernameInput.value;
    if (username) {
        loginContainer.style.display = 'none';
        chatBox.style.display = 'block';
    }
});
