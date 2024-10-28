import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["modal", "image", "title", "description", "container"]

  connect() {
    this.body = document.querySelector("body")
    // this.images = this.containerTarget.querySelectorAll("img")
  }

  toggle(e) {
    e.preventDefault()
    const img = e.target.nextElementSibling
    if (img && img.nodeName === "IMG") {
      this.loadData(img)
    }

    this.modalTarget.classList.toggle("hidden")
    this.body.classList.toggle("overflow-y-hidden")
  }

  loadData(element) {
    this.imageTarget.setAttribute("src", element.getAttribute("src"))
    this.imageTarget.setAttribute("alt", element.getAttribute("alt"))

    this.titleTarget.innerText = element.getAttribute("alt") || "No title"
    this.descriptionTarget.innerText = element.dataset["description"]
  }
}
