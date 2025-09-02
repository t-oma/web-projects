const input = /** @type {HTMLInputElement} */ (
    document.getElementById("registerPassword")
);
const strength = /** @type {HTMLDivElement} */ (
    document.getElementById("pwStrength")
);
const bars = /** @type {NodeListOf<HTMLDivElement>} */ (
    document.querySelectorAll("pwStrengthBars")
);
const label = /** @type {HTMLSpanElement} */ (
    document.getElementById("pwStrengthLabel")
);

input.addEventListener("input", () => {
    const val = input.value;
    const score = calcScore(val);
    updateUI(score, val);
});

/**
 * Function to calculate the password strength score
 * @param {string} password
 * @returns {number}
 */
function calcScore(password) {
    if (!password) return 0;

    let score = 0;

    if (password.length >= 8) score++;

    if (/[a-zA-Z]/.test(password) && /\d/.test(password)) score++;

    if (
        /[!@#$%^&*(),.?":{}|<>]/.test(password) ||
        (/[a-z]/.test(password) && /[A-Z]/.test(password))
    )
        score++;

    return Math.min(3, score);
}

/**
 * Function to update the UI with the strength score
 * @param {number} score
 * @param {string} password
 */
function updateUI(score, password) {
    strength.classList.remove("level-1", "level-2", "level-3");

    if (score === 0) {
        bars.forEach((b) => {
            b.classList.remove("active");
            b.style.background = "";
        });
        label.textContent = "None";
        return;
    }

    strength.classList.add("level-" + score);

    bars.forEach((b, i) => {
        if (i < score) {
            b.classList.add("active");
            b.style.background = "";
        } else {
            b.classList.remove("active");
            b.style.background = "";
        }
    });

    /** @type {Record<number, string>} */
    const labels = {
        1: "Weak",
        2: "Medium",
        3: "Strong"
    };
    label.textContent = labels[score] || "None";

    // доступність: додатково можна виставити aria-label на контейнер
    strength.setAttribute("data-strength", score.toString());
    strength.setAttribute(
        "aria-label",
        `Password strength: ${label.textContent}${password ? "" : ", empty"}`
    );
}
