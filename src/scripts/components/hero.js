class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero-title">
      <div class="hero-title-heading">
        <h2>Stay <span>Safe</span></h2>
        <h2>Stay <span>Health</span></h2>
      </div>
      <div class="hero-title-desc">
        <p>
          Lindungi diri dan keluarga dari serangan virus COVID-19. Tak
          terlihat namun mengancam nyawa.
        </p>
      </div>
      <div class="hero-title-btn">
        <a href="#about">Lebih Lanjut</a>
      </div>
    </div>
    <div class="hero-image">
      <img src="./hero.svg" alt="Hero" />
    </div>
    `;
  }
}

customElements.define('hero-section', Hero);
