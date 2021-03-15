"use strict";
import { MobileMenu } from "./mobile.js";
import { ScrollObserver } from "./scroll.js";
import { ScrollIntoView } from "./intoview.js";
document.addEventListener("DOMContentLoaded", () => {
  new Main();
});
class Main {
  constructor() {
    this.header = document.querySelector(".header");
    this._observers = [];
    this._Init();
  }
  _Init() {
    this._scrollInit();
    new MobileMenu();
    new ScrollIntoView(".about", ".section2__title");
    new ScrollIntoView(".skill", ".section3__title");
    new ScrollIntoView(".works", ".section4__title");
  }

  _nav(el, isIntersecting) {
    if (isIntersecting) {
      this.header.classList.remove("triggered");
    } else {
      this.header.classList.add("triggered");
    }
  }

  _scrollInit() {
    this._observers.push(
      new ScrollObserver(".nav-trigger", this._nav.bind(this), { once: false })
    );
  }
}
