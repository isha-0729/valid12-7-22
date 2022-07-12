const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const userid = document.getElementById('userid');
const Email = document.getElementById('Email');
const phone = document.getElementById('phone');
const url =document.getElementById('url');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirmpassword');
const inputFeild = document.getElementById('inputFeild')

function checkfullname(input) {
 //const re = /^\S([A-Z][a-z]+([ ]?[a-z]?['-]?[A-Z][a-z]+)*)$/;
 const re = /^([A-Z|0-9][a-z|0-9]+ [A-z][a-z]+ [A-Z][a-z]+)$/;
 //const re = /^[^\s]+[-a-zA-Z\s]+([-a-zA-Z]+)*$/\
 // const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//  const re = /(^(?:(?:[a-zA-Z]{2,4}\.)|(?:[a-zA-Z]{2,24}))){1} (?:[a-zA-Z]{2,24} )?(?:[a-zA-Z']{2,25})(?:(?:, [A-Za-z]{2,6}\.?){0,3})?/;
 if (re.test(input.value.trim())) {
 setSuccessMsg(input);
 } else {
 setErrormsg(input, '- Please enter Full name ');
 }
}

function checkfirstname(input) {
 //const re = /^([A-Z|0-9][a-z|0-9]+([ ]?[a-z]?['-]?[A-Z][a-z]+)*)$/;
 const re = /^(?!.*([A-Za-z0-9])\1{2})[A-Za-z0-9][A-Za-z0-9]{3,15}$/;
 if (re.test(input.value.trim())) {
 setSuccessMsg(input);
 } else {
 setErrormsg(input, '-Name is not valid');
 }
}



function checklastname(input) {
 // const re =/^[A-Z|0-9][a-z|0-9]+ [A-Z|0-9][a-z|0-9]+$/;
 //const re = /^([A-Z][a-z]+([ ]?[a-z]?['-]?[A-Z][a-z]+)*)$/;
 // const re = /^[A-Za-z0-9][A-Za-z0-9]{3,15}$/;
 const re = /^(?!.*([A-Za-z\.])\1{2})[A-Z|.][A-Za-z]{0,15}$/;
 if (re.test(input.value.trim())) {
 setSuccessMsg(input);
 } else {
 setErrormsg(input, '-Name is not valid');
 }
}

function checkuserid(input) {
 const re = /^(?!.*([A-Za-z0-9\.@_#-])\1{2})[A-Za-z0-9][A-Za-z0-9\.@_#-]{3,15}$/;
 if (re.test(input.value.trim())) {
 setSuccessMsg(input);
 return true;
 } else {
 setErrormsg(input, '-Invalid UserId');
 return false;

 }
}

function checkEmail(input) {
 //const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 const re = /^(([a-zA-Z0-9\._-]+)@([a-zA-Z0-9-]+)\.([a-zA-Z]{2,4}))$/;
 if (re.test(input.value.trim())) {
 setSuccessMsg(input);
 } else {
 setErrormsg(input, '-Email is not valid');
 }
}

// function checkphone(input) {
// const re = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
// if (re.test(input.value.trim())) {
// setSuccessMsg(input);
// return true;
// } else {
// setErrormsg(input, 'Phone Number is not valid');
// return false;
// }
// }

function checkPassword(input) {
 const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
 if (re.test(input.value.trim())) {
 setSuccessMsg(input);
 return true;
 } else {
 setErrormsg(input, ' \n -use Minimum eight characters \n -at least one uppercase letter \n -one lowercase letter \n -one number and one special character');
 return false;


 }
}

function checkPasswordsMatch(input1, input2) {
 if (input1.value !== input2.value) {
 setErrormsg(input2, '-Passwords do not match');
 } else if (input2.value == "") {
 setErrormsg(input2, '-Password do not match')
 return false;
 } else {
 setSuccessMsg(input2);
 }
}

function isGenderSelected() {
 var genderMale = document.getElementById("radio1").checked;
 var genderFemale = document.getElementById("radio2").checked;
 var genderOther = document.getElementById("radio3").checked;
 if (genderFemale || genderMale || genderOther) {
 document.getElementById("showGenderError").innerHTML = "";
 return true;
 } else {
 document.getElementById("showGenderError").innerHTML =
 "Please select your gender!";
 document.getElementById("showGenderError").style.color = "tomato";
 return false;
 }
}
function imageValidation() {

 var fileInput = document.getElementById("file");
 
 var filePath = fileInput.value;
 
 // Allowing file type
 var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
 
 if (!allowedExtensions.exec(filePath)) {
 alert("Invalid file type");
 fileInput.value = "";
 return false;
 } else {
 // Image preview
 if (fileInput.files && fileInput.files[0]) {
 var reader = new FileReader();
 reader.onload = function (e) {
 document.getElementById("imagePreview").innerHTML =
 '<img src="' + e.target.result + '"/>';
 };
 
 reader.readAsDataURL(fileInput.files[0]);
 }
 }
 }

function fileValidation() {

 var fileInput = document.getElementById("docfile");

 var filePath = fileInput.value;

 // Allowing file type
 var allowedExtensions = /(\.xlsx|\.pdf|\.docx|\.csv|\.doc|\.txt)$/i;

 if (!allowedExtensions.exec(filePath)) {
 alert("Invalid file type");
 fileInput.value = "";
 return false;
 } else {
 // Image preview
 if (fileInput.files && fileInput.files[0]) {
 var reader = new FileReader();
 reader.onload = function (e) {
 document.getElementById("imagePreview").innerHTML =
 '<docfile src="' + e.target.result + '"/>';
 };

 reader.readAsDataURL(fileInput.files[0]);
 }
 }
}

function checkurl(input){
 const re = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
 if (re.test(input.value.trim())) {
 setSuccessMsg(input);
 return true;
 } else {
 setErrormsg(input, 'url is not valid');
 return false;
 }
}

function checkRequired(inputArr) {
 inputArr.forEach(function (input) {
 if (input.value.trim() === '') {
 setErrormsg(input, `${getFieldName(input)} is required`);
 return false;
 } else {
 setSuccessMsg(input);
 return true;
 }
 });
}

function getFieldName(input) {
 return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function validate() {
 checkRequired([fullname, firstname, lastname,userid, Email, password, confirmpassword,url]);
 checkfullname(fullname);
 checkfirstname(firstname);
 checklastname(lastname);
 checkuserid(userid);
 checkEmail(Email);
 // checkphone(phone);
 checkPassword(password);
 checkPasswordsMatch(password, confirmpassword);
 isGenderSelected();
 checkurl(url);

}


function AvoidSpace(event) {
 var k = event ? event.which : window.event.keyCode;
 if (k == 32) { return false; }
}

function setErrormsg(input, Errormsgs) {
 const formControl = input.parentElement;
 const small = formControl.querySelector('small');
 formControl.className = "form-control error"
 small.innerText = Errormsgs;
}
function setSuccessMsg(input) {
 const formControl = input.parentElement;
 formControl.className = "form-control success";

}
function isFormValid() {
 const inputContainers = form.querySelectorAll(".form-control");
 let result = true;
 inputContainers.forEach((container) => {
 if (container.classList.contains("error")) {
 result = false;
 }
 });
 return result;
}


// Event listeners
form.addEventListener('submit', function (e) {
 validate();
 if (isFormValid() == true) {
 form.submit();
 } else {
 e.preventDefault();
 }
});


const phoneInputField = document.getElementById("inMob");
const phoneInput = window.intlTelInput(phoneInputField, {
 preferredCountries: ["in"],
 geoIpLookup: "in",
 utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});
var phcode = "";
var fullNameValue = '';
var firstNameValue = '';
var lastNameValue = '';

var countryListHTML = ``;
countryListHTML += `<option selected disabled value="">--select--</option>`;
for (let index = 0; index < countryList.length; index++) {
 const element = countryList[index];
 countryListHTML += `<option value="${element[1]}">${element[0]}</option>`;
}

function mobileInputAction() {
if (getInputValue('inMob') != '') {
 setInputValue('inMob', Math.abs(getInputValue('inMob')))
}
const phoneValid = phoneInput.isValidNumber();
const phoneNumber = phoneInput.getNumber().toString();
if (isEmpty(getInputValue('inMob').trim().replaceAll(" ", "")) == true) {
 if (phoneValid == false) {
 errorMSG('inMob', 'mobileValid', '-Mobile number is not valid.');
 } else if (phoneNumber.search(phcode) == -1) {
 errorMSG('inMob', 'mobileValid', '-Mobile Number Not Match Country');
 } else {
 successMSG('inMob', 'mobileValid');
 return true;
 }
} else {
 errorMSG('inMob', 'mobileValid', '-Mobile Number must be required.');
}
}

var countryCodeList = [
{ name: "BD", code: "880" },
{ name: "BE", code: "32" },
{ name: "BF", code: "226" },
{ name: "BG", code: "359" },
{ name: "BA", code: "387" },
{ name: "BB", code: "+1-246" },
{ name: "WF", code: "681" },
{ name: "BL", code: "590" },
{ name: "BM", code: "+1-441" },
{ name: "BN", code: "673" },
{ name: "BO", code: "591" },
{ name: "BH", code: "973" },
{ name: "BI", code: "257" },
{ name: "BJ", code: "229" },
{ name: "BT", code: "975" },
{ name: "JM", code: "+1-876" },
{ name: "BV", code: "" },
{ name: "BW", code: "267" },
{ name: "WS", code: "685" },
{ name: "BQ", code: "599" },
{ name: "BR", code: "55" },
{ name: "BS", code: "+1-242" },
{ name: "JE", code: "+44-1534" },
{ name: "BY", code: "375" },
{ name: "BZ", code: "501" },
{ name: "RU", code: "7" },
{ name: "RW", code: "250" },
{ name: "RS", code: "381" },
{ name: "TL", code: "670" },
{ name: "RE", code: "262" },
{ name: "TM", code: "993" },
{ name: "TJ", code: "992" },
{ name: "RO", code: "40" },
{ name: "TK", code: "690" },
{ name: "GW", code: "245" },
{ name: "GU", code: "+1-671" },
{ name: "GT", code: "502" },
{ name: "GS", code: "" },
{ name: "GR", code: "30" },
{ name: "GQ", code: "240" },
{ name: "GP", code: "590" },
{ name: "JP", code: "81" },
{ name: "GY", code: "592" },
{ name: "GG", code: "+44-1481" },
{ name: "GF", code: "594" },
{ name: "GE", code: "995" },
{ name: "GD", code: "+1-473" },
{ name: "GB", code: "44" },
{ name: "GA", code: "241" },
{ name: "SV", code: "503" },
{ name: "GN", code: "224" },
{ name: "GM", code: "220" },
{ name: "GL", code: "299" },
{ name: "GI", code: "350" },
{ name: "GH", code: "233" },
{ name: "OM", code: "968" },
{ name: "TN", code: "216" },
{ name: "JO", code: "962" },
{ name: "HR", code: "385" },
{ name: "HT", code: "509" },
{ name: "HU", code: "36" },
{ name: "HK", code: "852" },
{ name: "HN", code: "504" },
{ name: "HM", code: " " },
{ name: "VE", code: "58" },
{ name: "PR", code: "+1-787 and 1-939" },
{ name: "PS", code: "970" },
{ name: "PW", code: "680" },
{ name: "PT", code: "351" },
{ name: "SJ", code: "47" },
{ name: "PY", code: "595" },
{ name: "IQ", code: "964" },
{ name: "PA", code: "507" },
{ name: "PF", code: "689" },
{ name: "PG", code: "675" },
{ name: "PE", code: "51" },
{ name: "PK", code: "92" },
{ name: "PH", code: "63" },
{ name: "PN", code: "870" },
{ name: "PL", code: "48" },
{ name: "PM", code: "508" },
{ name: "ZM", code: "260" },
{ name: "EH", code: "212" },
{ name: "EE", code: "372" },
{ name: "EG", code: "20" },
{ name: "ZA", code: "27" },
{ name: "EC", code: "593" },
{ name: "IT", code: "39" },
{ name: "VN", code: "84" },
{ name: "SB", code: "677" },
{ name: "ET", code: "251" },
{ name: "SO", code: "252" },
{ name: "ZW", code: "263" },
{ name: "SA", code: "966" },
{ name: "ES", code: "34" },
{ name: "ER", code: "291" },
{ name: "ME", code: "382" },
{ name: "MD", code: "373" },
{ name: "MG", code: "261" },
{ name: "MF", code: "590" },
{ name: "MA", code: "212" },
{ name: "MC", code: "377" },
{ name: "UZ", code: "998" },
{ name: "MM", code: "95" },
{ name: "ML", code: "223" },
{ name: "MO", code: "853" },
{ name: "MN", code: "976" },
{ name: "MH", code: "692" },
{ name: "MK", code: "389" },
{ name: "MU", code: "230" },
{ name: "MT", code: "356" },
{ name: "MW", code: "265" },
{ name: "MV", code: "960" },
{ name: "MQ", code: "596" },
{ name: "MP", code: "+1-670" },
{ name: "MS", code: "+1-664" },
{ name: "MR", code: "222" },
{ name: "IM", code: "+44-1624" },
{ name: "UG", code: "256" },
{ name: "TZ", code: "255" },
{ name: "MY", code: "60" },
{ name: "MX", code: "52" },
{ name: "IL", code: "972" },
{ name: "FR", code: "33" },
{ name: "IO", code: "246" },
{ name: "SH", code: "290" },
{ name: "FI", code: "358" },
{ name: "FJ", code: "679" },
{ name: "FK", code: "500" },
{ name: "FM", code: "691" },
{ name: "FO", code: "298" },
{ name: "NI", code: "505" },
{ name: "NL", code: "31" },
{ name: "NO", code: "47" },
{ name: "NA", code: "264" },
{ name: "VU", code: "678" },
{ name: "NC", code: "687" },
{ name: "NE", code: "227" },
{ name: "NF", code: "672" },
{ name: "NG", code: "234" },
{ name: "NZ", code: "64" },
{ name: "NP", code: "977" },
{ name: "NR", code: "674" },
{ name: "NU", code: "683" },
{ name: "CK", code: "682" },
{ name: "XK", code: "" },
{ name: "CI", code: "225" },
{ name: "CH", code: "41" },
{ name: "CO", code: "57" },
{ name: "CN", code: "86" },
{ name: "CM", code: "237" },
{ name: "CL", code: "56" },
{ name: "CC", code: "61" },
{ name: "CA", code: "1" },
{ name: "CG", code: "242" },
{ name: "CF", code: "236" },
{ name: "CD", code: "243" },
{ name: "CZ", code: "420" },
{ name: "CY", code: "357" },
{ name: "CX", code: "61" },
{ name: "CR", code: "506" },
{ name: "CW", code: "599" },
{ name: "CV", code: "238" },
{ name: "CU", code: "53" },
{ name: "SZ", code: "268" },
{ name: "SY", code: "963" },
{ name: "SX", code: "599" },
{ name: "KG", code: "996" },
{ name: "KE", code: "254" },
{ name: "SS", code: "211" },
{ name: "SR", code: "597" },
{ name: "KI", code: "686" },
{ name: "KH", code: "855" },
{ name: "KN", code: "+1-869" },
{ name: "KM", code: "269" },
{ name: "ST", code: "239" },
{ name: "SK", code: "421" },
{ name: "KR", code: "82" },
{ name: "SI", code: "386" },
{ name: "KP", code: "850" },
{ name: "KW", code: "965" },
{ name: "SN", code: "221" },
{ name: "SM", code: "378" },
{ name: "SL", code: "232" },
{ name: "SC", code: "248" },
{ name: "KZ", code: "7" },
{ name: "KY", code: "+1-345" },
{ name: "SG", code: "65" },
{ name: "SE", code: "46" },
{ name: "SD", code: "249" },
{ name: "DO", code: "+1-809 and 1-829" },
{ name: "DM", code: "+1-767" }
];




// const form = document.getElementById('form');
// const fullname = document.getElementById('fullname');
// const firstname = document.getElementById('firstname');
// const lastname = document.getElementById('lastname');
// const userid = document.getElementById('userid');
// const Email = document.getElementById('Email');
// const phone = document.getElementById('phone');
// const url =document.getElementById('url');
// const password = document.getElementById('password');
// const confirmpassword = document.getElementById('confirmpassword');
// const inputFeild = document.getElementById('inputFeild')

// function checkfullname(input) {
//     const re = /^\S([A-Z][a-z]+([ ]?[a-z]?['-]?[A-Z][a-z]+)*)$/;
//     // const re = /^([A-Z|0-9][a-z|0-9]+ [A-z][a-z]+ [A-Z][a-z]+)$/;
//     //const re = /^[^\s]+[-a-zA-Z\s]+([-a-zA-Z]+)*$/
//     if (re.test(input.value)) {
//         setSuccessMsg(input);
//     } else {
//         setErrormsg(input, 'Name is not valid ,\n First letter should be capital');
//     }
// }

// function checkfirstname(input) {
//     const re = /^([A-Z|0-9][a-z|0-9]+([ ]?[a-z]?['-]?[A-Z][a-z]+)*)$/;
//     if (re.test(input.value.trim())) {
//         setSuccessMsg(input);
//     } else {
//         setErrormsg(input, 'Name is not valid');
//     }
// }



// function checklastname(input) {
//     // const re =/^[A-Z|0-9][a-z|0-9]+ [A-Z|0-9][a-z|0-9]+$/;
//     //const re = /^([A-Z][a-z]+([ ]?[a-z]?['-]?[A-Z][a-z]+)*)$/;
//     const re = /^[A-Za-z0-9][A-Za-z0-9]{3,15}$/;
//     if (re.test(input.value.trim())) {
//         setSuccessMsg(input);
//     } else {
//         setErrormsg(input, 'Name is not valid');
//     }
// }

// function checkuserid(input) {
//     const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     if (re.test(input.value.trim())) {
//         setSuccessMsg(input);
//         return true;
//     } else {
//         setErrormsg(input, '-invalid userid use Minimum eight characters,\n  - at least one uppercase letter, \n - one lowercase letter,\n - one number and one special character');
//         return false;

//     }
// }

// function checkEmail(input) {
//     const re = /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/;
//     if (re.test(input.value.trim())) {
//         setSuccessMsg(input);
//     } else {
//         setErrormsg(input, 'Email is not valid');
//     }
// }

// function checkphone(input) {
//     const re = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
//     if (re.test(input.value.trim())) {
//         setSuccessMsg(input);
//         return true;
//     } else {
//         setErrormsg(input, 'Phone Number is not valid');
//         return false;
//     }
// }

// function checkPassword(input) {
//     const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     if (re.test(input.value.trim())) {
//         setSuccessMsg(input);
//         return true;
//     } else {
//         setErrormsg(input, '- invalid password use Minimum eight characters,\n - at least one uppercase letter,\n - one lowercase letter, \n -one number and one special character');
//         return false;

//     }
// }

// function checkPasswordsMatch(input1, input2) {
//     if (input1.value !== input2.value) {
//         setErrormsg(input2, 'Passwords do not match');
//     } else if (input2.value == "") {
//         setErrormsg(input2, 'Password do not match')
//         return false;
//     } else {
//         setSuccessMsg(input2);
//     }
// }

// function isGenderSelected() {
//     var genderMale = document.getElementById("radio1").checked;
//     var genderFemale = document.getElementById("radio2").checked;
//     var genderOther = document.getElementById("radio3").checked;
//     if (genderFemale || genderMale || genderOther) {
//         document.getElementById("showGenderError").innerHTML = "";
//         return true;
//     } else {
//         document.getElementById("showGenderError").innerHTML =
//             "Please select your gender!";
//         document.getElementById("showGenderError").style.color = "tomato";
//         return false;
//     }
// }
// function imageValidation() {

//     var fileInput = document.getElementById("file");
  
//     var filePath = fileInput.value;
  
//     // Allowing file type
//     var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
  
//     if (!allowedExtensions.exec(filePath)) {
//       alert("Invalid file type");
//       fileInput.value = "";
//       return false;
//     } else {
//       // Image preview
//       if (fileInput.files && fileInput.files[0]) {
//         var reader = new FileReader();
//         reader.onload = function (e) {
//           document.getElementById("imagePreview").innerHTML =
//             '<img src="' + e.target.result + '"/>';
//         };
  
//         reader.readAsDataURL(fileInput.files[0]);
//       }
//     }
//   }

// function fileValidation() {

//     var fileInput = document.getElementById("docfile");

//     var filePath = fileInput.value;

//     // Allowing file type
//     var allowedExtensions = /(\.xlsx|\.pdf|\.docx|\.csv|\.doc|\.txt)$/i;

//     if (!allowedExtensions.exec(filePath)) {
//         alert("Invalid file type");
//         fileInput.value = "";
//         return false;
//     } else {
//         // Image preview
//         if (fileInput.files && fileInput.files[0]) {
//             var reader = new FileReader();
//             reader.onload = function (e) {
//                 document.getElementById("imagePreview").innerHTML =
//                     '<docfile src="' + e.target.result + '"/>';
//             };

//             reader.readAsDataURL(fileInput.files[0]);
//         }
//     }
// }

// function checkurl(input){
//     const re = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
//     if (re.test(input.value.trim())) {
//         setSuccessMsg(input);
//         return true;
//     } else {
//         setErrormsg(input, 'Url is not Valid');
//         return false;
//     }
// }

// function checkRequired(inputArr) {
//     inputArr.forEach(function (input) {
//         if (input.value.trim() === '') {
//             setErrormsg(input, `${getFieldName(input)} is required`);
//             return false;
//         } else {
//             setSuccessMsg(input);
//             return true;
//         }
//     });
// }

// function getFieldName(input) {
//     return input.id.charAt(0).toUpperCase() + input.id.slice(1);
// }

// function validate() {
//     checkRequired([fullname, firstname, lastname,userid, Email, phone, password, confirmpassword,url]);
//     checkfullname(fullname);
//     checkfirstname(firstname);
//     checklastname(lastname);
//     checkuserid(userid);
//     checkEmail(Email);
//     checkphone(phone);
//     checkPassword(password);
//     checkPasswordsMatch(password, confirmpassword);
//     isGenderSelected();
//     checkurl(url);

// }


// function AvoidSpace(event) {
//     var k = event ? event.which : window.event.keyCode;
//     if (k == 32) { return false; }
// }

// function setErrormsg(input, Errormsgs) {
//     const formControl = input.parentElement;
//     const small = formControl.querySelector('small');
//     formControl.className = "form-control error"
//     small.innerText = Errormsgs;
// }
// function setSuccessMsg(input) {
//     const formControl = input.parentElement;
//     formControl.className = "form-control success";

// }
// function isFormValid() {
//     const inputContainers = form.querySelectorAll(".form-control");
//     let result = true;
//     inputContainers.forEach((container) => {
//         if (container.classList.contains("error")) {
//             result = false;
//         }
//     });
//     return result;
// }


// // Event listeners
// form.addEventListener('submit', function (e) {
//     validate();
//     if (isFormValid() == true) {
//         form.submit();
//     } else {
//         e.preventDefault();
//     }
// });