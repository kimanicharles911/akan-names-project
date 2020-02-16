function functionNewForm() {
  document.getElementById("form1").reset();
}
function myFunction2() {
  let date_input = document.getElementById("date_input").value;
  let date_byte = date_input.split("-");
  let year_byte = parseInt(date_byte[0]);
  let month_byte = parseInt(date_byte[1]);
  let day_byte = parseInt(date_byte[2]);


  console.log("The Date is " + date_input);
  console.log("The Year input: " + year_byte);
  console.log("The Day input: " + day_byte);
  console.log("The month input: " + month_byte)

}