const mybutton = document.getElementById("topBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    mybutton.className =
      "sticky right-7 bg-purple-500 top-6 z-50 text-white font-bold py-2 px-2 rounded mx-0";
  } else {
    mybutton.className = "hidden";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
