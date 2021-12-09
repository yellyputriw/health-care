class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <p>Build with <i class="uil uil-heart"></i> from Indonesia</p>
      <p>
        Data API by
        <a href="https://github.com/mathdroid/covid-19-api">Mathdroid</a>
      </p>
    `;
  }
}

customElements.define('footer-bar', Footer);
