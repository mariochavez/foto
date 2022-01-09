import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["menu", "openIcon", "closeIcon", "navbar"];

  connect() {
    this.body = document.querySelector("body")
  }

  toggleMenu(event) {
    event.preventDefault()

    this.menuTarget.classList.toggle("hidden")

    this.openIconTarget.classList.toggle("hidden")

    this.closeIconTarget.classList.toggle("hidden")

    this.body.classList.toggle("overflow-y-hidden")

    this.navbarTarget.classList.toggle("opacity-90")
    this.navbarTarget.classList.toggle("opacity-100")
  }
}
