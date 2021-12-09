class About extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="about-image">
      <img src="./about.svg" alt="About" />
    </div>
    <div class="about-title">
      <h2>Apa Itu <span>Covid 19?</span></h2>
      <p>
        COVID-19 adalah penyakit yang disebabkan oleh virus
        <i>severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2)</i>.
        COVID-19 dapat menyebabkan gangguan sistem pernapasan.
      </p>
    </div>
    `;
  }
}

customElements.define('about-section', About);
