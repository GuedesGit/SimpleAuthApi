console.log("🔥 custom-auth.js loaded (v2.0 Goku Edition)");

// Hide default Authorize button
const hideDefaultAuth = setInterval(() => {
    const defaultAuthBtn = document.querySelector('.auth-wrapper');
    if (defaultAuthBtn) {
        defaultAuthBtn.style.display = 'none';
        clearInterval(hideDefaultAuth);
        console.log("🧼 Default Swagger authorize button hidden");
    }
}, 200);

window.addEventListener('load', function () {
    console.log("⚡ Swagger UI fully loaded (Goku Mode)");

    const body = document.querySelector("body");
    if (!body) {
        console.error("❌ Body not found");
        return;
    }

    const customButton = document.createElement("button");
    customButton.innerText = "🔥 Goku Login";
    customButton.id = "goku-login-button";
    customButton.style = `
        position: fixed;
        top: 10px;
        right: 20px;
        z-index: 9999;
        padding: 12px 20px;
        background: linear-gradient(to right, #fca311, #ff4e00);
        color: white;
        border: none;
        border-radius: 8px;
        font-weight: bold;
        font-family: 'Segoe UI', sans-serif;
        font-size: 16px;
        box-shadow: 0 0 15px #fca311;
        animation: glow 1.5s infinite alternate;
        cursor: pointer;
    `;

    // Goku-style glowing aura animation
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
        @keyframes glow {
            from {
                box-shadow: 0 0 10px #fca311;
            }
            to {
                box-shadow: 0 0 25px #ff4e00;
            }
        }
    `;
    document.head.appendChild(styleSheet);

    customButton.onclick = async function () {
        const username = prompt("👤 Enter your Goku username:");
        const password = prompt("🔑 Enter your Super Saiyan password:");

        if (!username || !password) {
            alert("❌ Kamehameha denied. Fill both fields!");
            return;
        }

        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            });

            const result = await response.json();

            if (result.token) {
                const bearerToken = "Bearer " + result.token;
                window.ui?.preauthorizeApiKey("Bearer", bearerToken);
                alert("🔥 Kamehameha! You are now authorized!");
            } else {
                alert("❌ Failed... Frieza wins this time.");
            }
        } catch (err) {
            console.error("💥 Login failed:", err);
            alert("💥 Power overload! Check the console.");
        }
    };

    body.appendChild(customButton);
});
