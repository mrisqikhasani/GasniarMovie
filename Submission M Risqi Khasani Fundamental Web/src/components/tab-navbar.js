class Navbar extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector(".nav .nav-item .nav-link.active").id;
    }

    render() {
        this.innerHTML = `
        <nav class="menu me-3 nav">
            <div class="container mb-5">
                <ul class="nav nav-pills justify-content-center pb-4">
                    <li class="nav-item">
                        <a class="nav-link active" id="nowPlaying">Now Playing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="topRated">Top Rated</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="popular">Popular</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="trending">Trending</a>
                    </li>
                </ul>
            </div>
        <nav>`;

        const navItem = this.querySelectorAll(
            ".nav .nav-item .nav-link"
        );

        navItem.forEach((navItem) => {
            navItem.addEventListener("click", (event) => {
                const selectedItems = this.querySelectorAll(
                    ".active"
                );

                if (selectedItems.length > 0) {
                    selectedItems[0].classList.remove("active");
                }

                event.target.classList.add("active");
                this.addEventListener("click", this._clickEvent);
            });
        });
    }

}

customElements.define('tab-navbar', Navbar)