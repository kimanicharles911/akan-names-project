function myFunction (form){
  var day_byte = form.d_input1.value;
  var month_byte = form.d_input2.value;
  var century_byte = form.d_input3.value;
  var year_digit_byte = form.d_input4.value
  var gender_byte = form.gender.value;
  console.log("Day: " + day_byte + ", Month: " + month_byte + ", Century: " + century_byte +  ", Year digit: " + year_digit_byte + " and " + gender_byte);
  //document.getElementById("form_1").submit();
}











/*function testResults (form) {
    var TestVar = form.inputbox.value;
    alert ("You typed: " + TestVar);
}*/