import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static classes = ["animation"]

  connect() {
    window.addEventListener("scroll", this.reveal.bind(this));
    this.reveal()
  }

  disconnect() {
    window.removeEventListener("scroll", this.reveal.bind(this));
  }

  reveal() {
    const reveals = this.element.querySelectorAll(`img:not(.${this.animationClass})`);

    reveals.forEach(e => {
      const windowHeight = window.innerHeight;
      const elementTop = e.getBoundingClientRect().top;
      const elementVisible = 0;

      if (elementTop < windowHeight - elementVisible) {
        e.classList.add(this.animationClass);
      }
    });
  }
}
