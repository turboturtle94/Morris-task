$("#customer-type").change(function (event) {
  animateEmpCountDropdown(event);
});
$("#form-submit-button").click(function (event) {
  let email = $("#email").val();
  let name = $("#name").val();
  let designation = $("#designation").val();
  let phone = $("#phone").val();
  let url = $("#url").val();
  if (
    !validateEntries(email, "email") ||
    !validateEntries(name, "text") ||
    !validateEntries(designation, "text") ||
    !validateEntries(phone, "text") ||
    !validateEntries(url, "text")
  ) {
    $("#form-container").addClass("main-form-error");
    return false;
  }

  if (!validateEntries(email, "email")) {
      $(email).addClass("main-form__fields__error")
  }
  if (!validateEntries(name, "text")) {
    $(name).addClass("main-form__fields__error")
  }
  if (!validateEntries(designation, "text")) {
    $(designation).addClass("main-form__fields__error")
  }
  if (!validateEntries(phone, "text")) {
    $(phone).addClass("main-form__fields__error")
  }
  if (!validateEntries(url, "text")) {
    $(url).addClass("main-form__fields__error")
  }
});
[...$(".main-form__fields-input")].forEach((element) => {
  $(element).change(function () {
    $("#form-container").removeClass("main-form-error");
    $(this).removeClass("main-form__fields__error");
  });
});
function animateEmpCountDropdown(event) {
  if (event.target.value === "Company") {
    let dorpdownLabel = $("#emp-count-label");
    let dorpdown = $("#emp-count-select");
    $(dorpdown).removeClass("emp-count-select-initial");
    $(dorpdown).addClass("emp-count-select-animated");
    $(dorpdownLabel).removeClass("emp-count-label-initial");
    $(dorpdownLabel).addClass("emp-count-label-animated");
  }
}

function validateEntries(value, type) {
  if (type === "email") {
      debugger;
    var regex =
      /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(value)) {
      return false;
    } else {
      return true;
    }
  } else {
    return value !== "";
  }
}
