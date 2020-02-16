function functionNewForm() {
  document.getElementById("form1").reset();
}

function myFunction2() {
  let date_input = document.getElementById("date_input").value;
  let date_byte = date_input.split("-");
  let year_byte = parseInt(date_byte[0]);
  let month_byte = parseInt(date_byte[1]);
  let day_byte = parseInt(date_byte[2]);

  let century_byte = date_byte[0].substr(0, 2);
  let formulae = ( ((century_byte/4) -2*century_byte-1) + ((5*year_byte/4)) + ((26*(month_byte+1)/10))+day_byte ) % 7;

  console.log("The Date is " + date_input);
  console.log("The Year input: " + year_byte);
  console.log("The Day input: " + day_byte);
  console.log("The month input: " + month_byte);

  console.log("The Century extracted: " + century_byte);
  console.log("Day you were born:" + formulae);

  document.getElementById("print").innerHTML = Math.round(formulae);
  let girls = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
  let pickedGirlsName = girls[(Math.round(formulae))] ;
  let boys = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
  let pickedBoyName = boys[(Math.round(formulae))] ;

  let genders = document.getElementById("genders").value;
  let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let selectedDay = days[(Math.round(formulae))] ;
  console.log("Day in English: " + selectedDay);
  console.log("Gender input: " + genders);

  if(selectedDay !== null){
    if(genders === "Male"){
      document.getElementById("print").innerHTML = "You get the <em>Akan</em> name <strong>"+ pickedBoyName + "</strong>, because you were born on a <strong>"+ selectedDay + "</strong>.";
    }
    else if(genders === "Female"){
      document.getElementById("print").innerHTML ="You get the <em>Akan</em> name <strong> "+ pickedGirlsName + "</strong>, because you were born on a <strong>" + selectedDay + "</strong>.";
    }  
    else{
      alert("Please input the your true date of birth then select your gender kindly.");
    }
  }
  else{
      alert("Please input the your true date of birth then select your gender kindly.");
  }

  functionNewForm();

}