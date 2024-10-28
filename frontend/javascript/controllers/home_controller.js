import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "photo", "image", "caption"]

  connect() {
    const randIndex = Math.floor(Math.random() * this.photoTargets.length)
    const photo = this.photoTargets[randIndex]

    if (photo) {
      this.imageTarget.setAttribute("src", photo.dataset.src)
      this.imageTarget.setAttribute("alt", photo.dataset.name)

      this.captionTarget.innerText = photo.dataset.name
    }
  }
}
