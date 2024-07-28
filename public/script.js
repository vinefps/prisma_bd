document.getElementById('user-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const response = await fetch('/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
    });

    const user = await response.json();
    const userDiv = document.createElement('div');
    userDiv.textContent = `${user.name} (${user.email})`;
    document.getElementById('users-list').appendChild(userDiv);

    document.getElementById('user-form').reset();
});
