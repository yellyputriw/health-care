class Symptom extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="symptom-title">
      <h2>Bagaimana Gejalanya?</h2>
      <ul>
        <li>
          <i class="uis uis-coronavirus"></i>Demam (Suhu tubuh diatas 38°C)
        </li>
        <li><i class="uis uis-coronavirus"></i>Sesak Napas</li>
        <li><i class="uis uis-coronavirus"></i>Sakit Kepala</li>
        <li><i class="uis uis-coronavirus"></i>Batuk Kering</li>
      </ul>
    </div>
    <div class="symptom-image">
      <img src="./demam.svg" alt="Demam" />
      <img src="./sesak.svg" alt="Sesak" />
      <img src="./sakitkepala.svg" alt="Sakit Kepala" />
      <img src="./batuk.svg" alt="Batuk" />
    </div>
    `;
  }
}

customElements.define('symptom-section', Symptom);
