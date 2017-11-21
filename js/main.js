const about = document.querySelector("#nav")

about.addEventListener('click', onLinkClick, false);

function onLinkClick() {
  document.getElementsByTagName('h2')[3].scrollIntoView();
  // will scroll to 4th h2 element
}