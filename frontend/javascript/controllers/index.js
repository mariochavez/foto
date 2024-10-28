import { application } from "./application"

import HomeController from "./home_controller"
application.register("home", HomeController)

import RevealController from "./reveal_controller"
application.register("reveal", RevealController)

import ModalController from "./modal_controller"
application.register("modal", ModalController)

import MobileMenuController from "./mobile_menu_controller"
application.register("mobile-menu", MobileMenuController)

import BookController from "./book_controller"
application.register("book", BookController)
