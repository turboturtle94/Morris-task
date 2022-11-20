animateHeader();
animateHeaderButtons();
$(window).scroll(function () {
  animateRows();
});

function isScrolledIntoView($elem) {
  let docViewTop = $(window).scrollTop();
  let docViewBottom = docViewTop + $(window).height();
  let elemTop = $elem.offset().top;
  let elemBottom = elemTop + $elem.height();
  return elemBottom <= docViewBottom || elemTop >= docViewTop;
}
function animateRows(){
  let grid = $(".section-about")[0];
  if (isScrolledIntoView($(grid))) {
    let gridCards = $(".card-initial");
    let i = 0;
    for (const element of gridCards) {
      i += 100;
      setTimeout(() => {
        element.classList.remove("card-initial");
        element.classList.add("card-animated");
      }, i);
    }
  }
};
function animateHeader(){
    let header = $(".heading-text-initial")[0];
    $(header).removeClass("heading-text-initial");
    $(header).addClass("heading-text-animated");
}

function animateHeaderButtons(){
    let buttonsDiv = $(".actions-wrapper-initial")[0];
    let buttons = buttonsDiv.children;
    $(buttonsDiv).removeClass("actions-wrapper-initial");
    $(buttonsDiv).addClass("actions-wrapper-animated");
    for(const button of buttons){
      $(button).removeClass("btn-initial");
      $(button).addClass("btn-animated");
    }
}