document.getElementById('generate').addEventListener('click', function() {
    const username = generateUsername();
    const password = generatePassword();
    document.getElementById('username').textContent = username;
    document.getElementById('password').textContent = password;
    
    const combo = `${username}:${password}`;
    document.getElementById('combo').textContent = combo;
});

document.getElementById('copy-username').addEventListener('click', function() {
    const username = document.getElementById('username').textContent;
    navigator.clipboard.writeText(username).then(() => {
        alert('Username copied to clipboard!');
    });
});

document.getElementById('copy-password').addEventListener('click', function() {
    const password = document.getElementById('password').textContent;
    navigator.clipboard.writeText(password).then(() => {
        alert('Password copied to clipboard!');
    });
});

document.getElementById('copy-combo').addEventListener('click', function() {
    const combo = document.getElementById('combo').textContent;
    navigator.clipboard.writeText(combo).then(() => {
        alert('Combo copied to clipboard!');
    });
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
