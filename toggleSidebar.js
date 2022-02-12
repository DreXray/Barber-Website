// Huge gotcha: Only run this function after window has loaded
let sidebarIsOpen = false;
let ICON_WHEN_OPEN = "fa-times";
let ICON_WHEN_CLOSED = "fa-bars"

function getSidebar() {
  return document.getElementById("sideNav");
}

function getBtn() {
  return document.getElementById("menu");
}

function openSidebar() {
  getSidebar().classList.add("sidebar-open");
  getBtn().classList.add(ICON_WHEN_OPEN);
  getBtn().classList.remove(ICON_WHEN_CLOSED);
  sidebarIsOpen = true;
}

function closeSidebar() {
  getSidebar().classList.remove("sidebar-open");
  getBtn().classList.add(ICON_WHEN_CLOSED);
  getBtn().classList.remove(ICON_WHEN_OPEN);
  sidebarIsOpen = false;
}

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});
