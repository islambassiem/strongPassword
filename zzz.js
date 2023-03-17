let characterLabel = document.getElementById("characterLabel");
let capitalLable = document.getElementById("capitalLable");
let lowerLable = document.getElementById("lowerLable");
let specialLabel = document.getElementById("specialLabel");
let numberLabel = document.getElementById("numberLabel");
let password = document.getElementById("pass");
let submit = document.getElementById("submit");
let characterLabelcheck = document.getElementById("characterLabelcheck");
let capitalLableCheck = document.getElementById("capitalLableCheck");
let lowerLableCheck = document.getElementById("lowerLableCheck");
let specialLabelCheck = document.getElementById("specialLabelCheck");
let numberLabelCheck = document.getElementById("numberLabelCheck");
let characterLabelCross = document.getElementById("characterLabelCross");
let capitalLableCross = document.getElementById("capitalLableCross");
let lowerLableCross = document.getElementById("lowerLableCross");
let specialLabelCross = document.getElementById("specialLabelCross");
let numberLabelCross = document.getElementById("numberLabelCross");

function containsUppercase(str) {
  return /[A-Z]/.test(str);
}

function containsLowercase(str) {
  return /[a-z]/.test(str);
}

function containsNumebrs(str) {
  return /[0-9]/.test(str);
}

function containsSpecial(str) {
  let specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return specialChars.test(str);
}

pass.addEventListener("keyup", () => {
  if(containsUppercase(password.value)){
    capitalLable.style.color = "green";
    capitalLableCheck.style.display = "inline";
    capitalLableCross.style.display = "none";
  }else{
    capitalLable.style.color = "red";
    capitalLableCheck.style.display = "none";
    capitalLableCross.style.display = "inline";
  };

  if(containsLowercase(password.value)){
    lowerLable.style.color = "green";
    lowerLableCheck.style.display = "inline";
    lowerLableCross.style.display = "none";
  }else{
    lowerLable.style.color = "red";
    lowerLableCheck.style.display = "none";
    lowerLableCross.style.display = "inline";
  };

  if(containsNumebrs(password.value)){
    numberLabel.style.color = "green";
    numberLabelCheck.style.display = "inline";
    numberLabelCross.style.display = "none";
  }else{
    numberLabel.style.color = "red";
    numberLabelCheck.style.display = "none";
    numberLabelCross.style.display = "inline";
  };

  if(containsSpecial(password.value)){
    specialLabel.style.color = "green";
    specialLabelCheck.style.display = "inline";
    specialLabelCross.style.display = "none";
  }else{
    specialLabel.style.color = "red";
    specialLabelCheck.style.display = "none";
    specialLabelCross.style.display = "inline";
  };

  if(password.value.length >= 8 && password.value.length <=20){
    characterLabel.style.color = "green";
    characterLabelcheck.style.display = "inline";
    characterLabelCross.style.display = "none";
  }else{
    characterLabel.style.color = "red"; 
    characterLabelcheck.style.display = "none";
    characterLabelCross.style.display = "inline";
  }

  if(containsUppercase(password.value) && 
      containsLowercase(password.value) &&
      containsNumebrs(password.value) && 
      containsSpecial(password.value) &&
      password.value.length >= 8 && 
      password.value.length <=20){
        submit.disabled = false;
  }else{
    submit.disabled = true;
  }
});