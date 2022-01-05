class SearchBar extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector("#inputSearch").value;
    }

    render() {
        this.innerHTML = `
            <form class="search d-flex" onsubmit='return false'>
                    <input class="form-control me-2" type="search" placeholder="Find Movie" id="inputSearch">
                    <button class="btn" type="submit" id="buttonSearch">
                        <img src="https://img.icons8.com/material-outlined/24/000000/search.png"/>
                    </button>
            </form>
        `;

        this.querySelector("#buttonSearch").addEventListener("click", this._clickEvent);
    }

}

customElements.define('search-bar', SearchBar)