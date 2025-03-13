const backendUrl = "http://localhost:5000";

function signup() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    fetch(`${backendUrl}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    })
    .then(res => res.json())
    .then(data => document.getElementById('message').innerText = data.message || data.error);
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    fetch(`${backendUrl}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    })
    .then(res => res.json())
    .then(data => document.getElementById('message').innerText = data.message || data.error);
}
