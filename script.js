let latest = document.getElementById("latest");
let features = document.getElementById("features");
let contact = document.getElementById("contact");
document.body.style.overflow = "hidden";
function unoverflow() {
  document.body.style.overflow = "auto";
}
function navigate(direction) {
  let cont1 = document.querySelector(".cont1");
  let cont2 = document.querySelector(".cont2");
  let left = document.querySelector(".fa-arrow-left");
  let right = document.querySelector(".fa-arrow-right");

  if (direction == "right") {
    cont1.style.display = "none";
    cont2.style.display = "block";
    right.style.color = "gray";
    left.style.color = "black";
  } else if (direction == "left") {
    cont1.style.display = "block";
    cont2.style.display = "none";
    right.style.color = "black";
    left.style.color = "gray";
  }
}

function toggleLatest() {
  unoverflow();
  if (latest.style.display === "none") {
    latest.style.display = "block";
    features.style.display = "none";
    features;
    contact.style.display = "none";
  } else {
    latest.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

function toggleFeatures() {
  unoverflow();
  if (features.style.display == "none") {
    features.style.display = "block";
    latest.style.display = "none";
    contact.style.display = "none";
  } else {
    features.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

function toggleContact() {
  unoverflow();
  if (contact.style.display == "none") {
    contact.style.display = "block";
    latest.style.display = "none";
    features.style.display = "none";
  } else {
    contact.style.display = "none";
    document.body.style.overflow = "auto";
  }
}
