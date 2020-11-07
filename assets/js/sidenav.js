function openNav() {
  document.getElementById("sidebar").style.width = "80%";
  $("body").addClass("overlayed");
  $("#hamburger-icon").addClass("is-active");
}

function closeNav() {
  document.getElementById("sidebar").style.width = "0";
  $("body").removeClass("overlayed");
  $("#hamburger-icon").removeClass("is-active");
}

function toggleNav() {
  active = $("body").hasClass("overlayed");
  if (active) {
    closeNav();
  } else {
    openNav();
  }
}
