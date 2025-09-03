class FormDivider extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });
        shadow.innerHTML = `
            <link rel="stylesheet" href="src/reset.css">
            <link rel="stylesheet" href="src/fonts.css">
            <style>
                .form-divider {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 303px;
                    height: 17px;
                    margin: 18px auto;
                    gap: 7px;
                }

                .form-divider__text {
                    font-size: var(--font-size-2xs);
                    color: var(--color-foreground-accent);
                    font-weight: 500;
                    white-space: nowrap;
                }

                .form-divider__border-left {
                    width: 100%;
                    height: 1px;
                    background: linear-gradient(
                        to left,
                        rgba(217 217 217 / 1) 0%,
                        rgba(217 217 217 / 0) 100%
                    );
                }

                .form-divider__border-right {
                    width: 100%;
                    height: 1px;
                    background: linear-gradient(
                        to right,
                        rgba(217 217 217 / 1) 0%,
                        rgba(217 217 217 / 0) 100%
                    );
                }
            </style>
            
            <div class="form-divider">
                <div class="form-divider__border-left"></div>
                <span class="form-divider__text">
                    Or sign up with
                </span>
                <div class="form-divider__border-right"></div>
            </div> 
        `;
    }
}

customElements.define("form-divider", FormDivider);
