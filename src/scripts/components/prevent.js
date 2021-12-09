class Prevent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="prevent-title">
      <h2>Bagaimana Cara Pencegahannya?</h2>
    </div>
    <div class="prevent-container">
      <div class="card">
        <img src="./cuci-tangan.svg" alt="Mencuci Tangan" />
        <p>Mencuci Tangan</p>
      </div>
      <div class="card">
        <img src="./masker.svg" alt="Memakai Masker" />
        <p>Memakai Mas</p>
      </div>
      <div class="card">
        <img src="./jaga-jarak.svg" alt="Menjaga Jarak" />
        <p>Menjaga Jarak</p>
      </div>
      <div class="card">
        <img src="./dirumahaja.svg" alt="Membatasi Mobilitas" />
        <p>Membatasi Mobilitas</p>
      </div>
      <div class="card">
        <img src="./vaksin.svg" alt="Melakukan Vaksinasi" />
        <p>Melakukan Vaksinasi</p>
      </div>
    </div>
    `;
  }
}

customElements.define('prevent-section', Prevent);
