class FooterBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <footer class="footer">
            <div class="container text-center">
                <p>Gasniar Movie</p>
                <p>Copyright 2021 - M Risqi Khasani</p>
            </div>
        </footer>
        `;
    }
}

customElements.define('footer-bar', FooterBar);