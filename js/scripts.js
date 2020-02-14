function myFunction (form){
  var day_byte = form.d_input.value;
  var month_byte = form.m_input.value;
  var century_byte = form.c_input.value;
  var year_digit_byte = form.yd_input.value
  var gender_byte = form.gender.value;
  console.log("Day: " + day_byte + ", Month: " + month_byte + ", Century: " + century_byte +  ", Year digit: " + year_digit_byte + " and " + gender_byte);
  //document.getElementById("form_1").submit();
}











/*function testResults (form) {
    var TestVar = form.inputbox.value;
    alert ("You typed: " + TestVar);
}*/