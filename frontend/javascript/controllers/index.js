import { application } from "./application"

import HomeController from "./home_controller"
application.register("home", HomeController)

import RevealController from "./reveal_controller"
application.register("reveal", RevealController)

import ModalController from "./modal_controller"
application.register("modal", ModalController)
