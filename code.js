// COVID CASES APP//
//Creates lists used for conditionals
var countryList = getColumn("Covid Cases", "Country/Region");
var dateList = getColumn("Covid Cases", "NewCases");
// Creates lists with the data that will be displayed 
var casesList = getColumn("Covid Cases", "TotalCases");
var recoveredList = getColumn("Covid Cases", "TotalRecovered");
var deathList = getColumn("Covid Cases", "TotalDeaths");
//Creates an empty variable for the date 
var date = "";
// Changes the text of the three outputs upon click
onEvent("serachbutton", "click", function( ) {
  // Changes the countryheading to the name of the country from the input
  setText("countryheading", getText("text_input1"));
  //The three commands below change the text of the outputs by calling their respective functions with the country name from the text_input1 as the parameter
  //By doing so a return value comes back which gets displayed as the output 
  setText("casesoutput", casesCheck(getText("text_input1")));
  setText("recoveredoutput", recoveredCheck(getText("text_input1")));
  setText("deathoutput", deathsCheck(getText("text_input1")));
});
// Function to find the number of cases
function casesCheck(country) {
  //Temporary variable 
  var cases = "";
  // Travereses the length of the list, evaluating each item number from both lists, until an item number [i] that meets both conditions is reached
  for (var i = 0; i < countryList.length; i++) {
    // The item in the lists have to match the parameter (country name) and date variable
    if (country == countryList[i] && true) {
      //If true, sets the temporary variable as the item number [i] from the caseList 
      cases = casesList[i];
    } else {
      
    }
  }
  // This part of the code is only run if none of the items in the list meet the conditional and the variable is left blank
  // Usually means the country is spelled wrong or does not exist
  if (cases == "") {
    //Changes the variable so it displays... 
    cases = "Country spelled wrong";
  } else {
    
  }
  // returns the temporary variable as the answer
  return cases;
}
// Function to find number of recoveries
function recoveredCheck(country) {
  //Temporary variable 
  var recovered = "";
  // Travereses the length of the list, evaluating each item number from both lists, until an item number [i] that meets both conditions is reached
  for (var i = 0; i < countryList.length; i++) {
    // The item in the lists have to match the parameter (country name) and date variable
    if (country == countryList[i] && true) {
      //If true, sets the temporary variable as the item number [i] from the recoveredList 
      recovered = recoveredList[i];
    } else {
      
    }
  }
  // This part of the code is only run if none of the items in the list meet the conditional and the variable is left blank
  // Usually means the country is spelled wrong or does not exist
  if (recovered == "") {
    //Changes the variable so it displays... 
    recovered = "Country spelled wrong";
  } else {
    
  }
  // returns the temporary variable as the answer
  return recovered;
}
// Function to find the number of deaths
function deathsCheck(country) {
  //Temporary variable 
  var deaths = "";
  // Travereses the length of the list, evaluating each item number from both lists, until an item number [i] that meets both conditions is reached
  for (var i = 0; i < countryList.length; i++) {
    // The item in the lists have to match the parameter (country name) and date variable
    if (country == countryList[i] && true) {
      //If true, sets the temporary variable as the item number [i] from the deathList 
      deaths = deathList[i];
    } else {
      
    }
  }
  // This part of the code is only run if none of the items in the list meet the conditional and the variable is left blank
  // Usually means the country is spelled wrong or does not exist
  if (deaths == "") {
    //Changes the variable so it displays... 
    deaths = "Country spelled wrong";
  } else {
    
  }
  // Returns the temporary variable as the answer
  return deaths;
}
//The code for the slider to dictate the date variable 
onEvent("dateslider", "input", function( ) {
  // Gets the value of the slider which ranges from 0-25
  // This is because there are 26 different dates in the data set
  var dateslidervalue = getNumber("dateslider");
  // Each slider value assigns the date variable a specific date
  if (dateslidervalue == 0) {
    date = "Sun 11/15";
  } else if ((dateslidervalue == 1)) {
    date = "Sun 11/22";
  } else if ((dateslidervalue == 2)) {
    date = "Sun 11/29";
  } else if ((dateslidervalue == 3)) {
    date = "Sun 12/6";
  } else if ((dateslidervalue == 4)) {
    date = "Sun 12/13";
  } else if ((dateslidervalue == 5)) {
    date = "Sun 12/20";
  } else if ((dateslidervalue == 6)) {
    date = "Sun 12/27";
  } else if ((dateslidervalue == 7)) {
    date = "Sun 1/3";
  } else if ((dateslidervalue == 8)) {
    date = "Sun 1/10";
  } else if ((dateslidervalue == 9)) {
    date = "Sun 1/17";
  } else if ((dateslidervalue == 10)) {
    date = "Sun 1/24";
  } else if ((dateslidervalue == 11)) {
    date = "Sun 1/31";
  } else if ((dateslidervalue == 12)) {
    date = "Sun 2/7";
  } else if ((dateslidervalue == 13)) {
    date = "Sun 2/14";
  } else if ((dateslidervalue == 14)) {
    date = "Sun 2/21";
  } else if ((dateslidervalue == 15)) {
    date = "Sun 2/28";
  } else if ((dateslidervalue == 16)) {
    date = "Sun 3/7";
  } else if ((dateslidervalue == 17)) {
    date = "Sun 3/14";
  } else if ((dateslidervalue == 18)) {
    date = 	"Sun 3/21";
  } else if ((dateslidervalue == 19)) {
    date = "Sun 3/28";
  } else if ((dateslidervalue == 20)) {
    date = "Sun 4/4";
  } else if ((dateslidervalue == 21)) {
    date = "Sun 4/11";
  } else if ((dateslidervalue == 22)) {
    date = "Sun 4/18";
  } else if ((dateslidervalue == 23)) {
    date = "Sun 4/25";
  } else if ((dateslidervalue == 24)) {
    date = "Sun 5/2";
  } else if ((dateslidervalue == 25)) {
    date = "Sun 5/9";
  }
  // Sets the date label as the date so people know what date the slider is on
  setText("datelabel", date);
});
//All code in this app is general knowledge learned from the Code.org website that was used as teaching material by the instructor durig the course 
