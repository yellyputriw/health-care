class Statistic extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="content">
        <h2>Data Covid 19</h2>
        <select
          name="countryCode"
          id="countryCode"
          class="select-box"
        ></select>
        <span>Klik untuk mengganti negara</span>
        <div class="counter-box conf">
          <div class="counter-value"></div>
          <div class="counter-label text-confirmed">Terkonfirmasi</div>
        </div>
        <div class="counter-box rec">
          <div class="counter-value"></div>
          <div class="counter-label text-recovered">Sembuh</div>
        </div>
        <div class="counter-box dth">
          <div class="counter-value"></div>
          <div class="counter-label text-deaths">Meninggal</div>
        </div>
        <div class="update"></div>
      </div>
    `;
  }
}

customElements.define('statistic-section', Statistic);
