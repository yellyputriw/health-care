class Appbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <h1>Health Care</h1> 
    `;
  }
}

customElements.define('app-bar', Appbar);
