import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mohameek-app-frontend';

  nav = document.getElementById("desktop-nav");
  mobileNav = document.getElementById("mobile-nav");

  ngOnInit(): void {

    this.initNavBar();
    this.initMobileMenu();
  }

  initNavBar(): void {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 60) {
        if (this.nav != null && this.mobileNav != null) {
          this.nav.classList.add("scrolled");
          this.mobileNav.classList.add("scrolled");
        }

      } else {
        if (this.nav != null && this.mobileNav != null) {
          this.nav.classList.remove("scrolled");
          this.mobileNav.classList.remove("scrolled");
        }
      }
    });
  }
  menuIcon = document.getElementById("menu-icon");
  closeIcon = document.getElementById("close-icon");
  mobileMenuContainer = document.getElementById("mobile-menu-container");
  initMobileMenu() {

    if (this.menuIcon != null) {
      this.menuIcon.addEventListener("click", () => {
        if (this.mobileMenuContainer != null) {
          this.mobileMenuContainer.classList.add("active");
        }
      });
    }

    if (this.closeIcon != null) {
      this.closeIcon.addEventListener("click", () => {
        if (this.mobileMenuContainer != null) {
          this.mobileMenuContainer.classList.remove("active");
        }
      });
    }

  }

}
