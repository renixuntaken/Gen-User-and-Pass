document.getElementById('generate').addEventListener('click', function() {
    document.getElementById('username').textContent = generateUsername();
    document.getElementById('password').textContent = generatePassword();
});

function generateUsername() {
    const adjectives = ['Cool', 'Swift', 'Brave', 'Mighty', 'Nimble'];
    const nouns = ['Tiger', 'Eagle', 'Shark', 'Phoenix', 'Dragon'];
    const randomAdj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    return `${randomAdj}${randomNoun}${Math.floor(Math.random() * 1000)}`;
}

function generatePassword() {
    const length = 12;
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}