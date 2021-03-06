export class MobileMenu {
  constructor() {
    this.DOM = {};
    this.DOM.btn = document.querySelector(".mobile-menu__btn");
    this.DOM.cover = document.querySelector(".mobile-menu__cover");
    this.DOM.container = document.querySelector("#grobal-container");
    this.eventType = this._getEventType();
    this._addEvent();
  }

  // スマホかPCか、確認してイベントを決める
  _getEventType() {
    return window.ontouchstart ? "touchstart" : "click";
  }
  _toggle() {
    this.DOM.container.classList.toggle("menu-open");
  }
  _addEvent() {
    // btnとcoverどちらを押してもtoggleするようにする
    this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
    this.DOM.cover.addEventListener(this.eventType, this._toggle.bind(this));
  }
}
