function address() {
  var address = $("#myInput").val();
  $("#addressHolder").val(address);
}

function check(address) {
  var s = "[id='" + address + "']";
  alert(s);
  $(s).submit();
}

function verify(month) {
  alert(month);
}

function showInfo(address) {
  var s = "[id='" + address + "']"
  if ($(s).css("display")=="none")
    $(s).css("display", "block");
  else 
    $(s).css("display", "none");
}