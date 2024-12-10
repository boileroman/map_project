/**
 *
 */
export class MapHintManager {
  static instance = null;

  constructor(mapHintClass) {
    if (MapHintManager.instance) {
      return MapHintManager.instance;
    }
    MapHintManager.instance = this;

    this.mapHint = document.querySelector(`.${mapHintClass}`);

    if (!this.mapHint) {
      console.error("MapHint not found.");
      return;
    }

    this.init();
  }

  init() {
    document.addEventListener("click", () => this.hideMapHint());
  }

  hideMapHint() {
    if (this.mapHint) {
      this.mapHint.style.display = "none";
    }
  }

  showMapHint() {
    if (this.mapHint) {
      this.mapHint.style.display = "block";
    }
  }
}
