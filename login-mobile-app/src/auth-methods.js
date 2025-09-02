class AuthMethods extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });
        shadow.innerHTML = `
            <link rel="stylesheet" href="src/reset.css">
            <link rel="stylesheet" href="src/fonts.css">
            <link rel="stylesheet" href="src/utils.css">
            <link rel="stylesheet" href="src/auth-methods.css">
            
            <div class="auth-methods">
                <nav class="auth-methods__nav">
                    <ul class="auth-methods__list">
                        <li
                            class="auth-methods__item gradient-overlay gradient-border"
                        >
                            <a
                                href="#/google"
                                class="auth-methods__link"
                            >
                                <span class="visually-hidden">
                                    Google
                                </span>
                                <img
                                    src="assets/google-logo.svg"
                                    alt="Google Icon"
                                    class="auth-methods__icon"
                                >
                            </a>
                        </li>
                        <li
                            class="auth-methods__item gradient-overlay gradient-border"
                        >
                            <a
                                href="#/apple"
                                class="auth-methods__link"
                            >
                                <span class="visually-hidden">
                                    Apple
                                </span>
                                <img
                                    src="assets/apple-logo.svg"
                                    alt="Apple Icon"
                                    class="auth-methods__icon"
                                >
                            </a>
                        </li>
                        <li
                            class="auth-methods__item gradient-overlay gradient-border"
                        >
                            <a
                                href="#/facebook"
                                class="auth-methods__link"
                            >
                                <span class="visually-hidden">
                                    Facebook
                                </span>
                                <img
                                    src="assets/facebook-logo.svg"
                                    alt="Facebook Icon"
                                    class="auth-methods__icon"
                                >
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        `;
    }
}

customElements.define("auth-methods", AuthMethods);
