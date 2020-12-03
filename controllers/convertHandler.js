/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    let unitIndex = input.search(/[a-z]/i);
    //if no number is given
    if (unitIndex == 0) {
      return 1;
    } 
  
    let numString = input.slice(0, unitIndex);
    //if no unit exists
    if (unitIndex == -1) {
      numString =input.slice(0);
    } 
    //check if numString is valid
    if (/^\d+(\.\d+)?([\+\-\*\/]\d+(\.?\d+)?)?$/.test(numString)) {
      return eval(numString);
    }
    else {
      return "invalid";
    }
  };
  
  this.getUnit = function(input) {
    let unitIndex = input.search(/[a-z]/i);
    let unitsRegex = /^(gal|l|lbs|kg|mi|km)$/i;
    //if there is no unit found
    if (unitIndex == -1) {
      return "invalid";
    }

    let unitString = input.slice(unitIndex);
    //if unit is not valid
    if (!unitsRegex.test(unitString)) {
      return "invalid";
    }

    if (unitString == "l" || unitString == "L") {
      return unitString.toUpperCase();
    }
      return unitString.toLowerCase();
  };
  
  this.getReturnUnit = function(initUnit) {
    let unitConversion = {
      "gal" : "L",
      "lbs" : "kg",
      "mi" : "km"
    }
    for (let key in unitConversion) {
      if (initUnit == key) {
        return unitConversion[key];
      }
      else if (initUnit == unitConversion[key]) {
        return key;
      }
    }
  };

  this.spellOutUnit = function(unit) {
    let unitSpells = {
      "gal" : "gallons",
      "L" : "liters",
      "lbs" : "pounds",
      "kg" : "kilograms",
      "mi" : "miles",
      "km" : "kilometers"
    }
    
    return unitSpells[unit];
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    switch(initUnit) {
      case "gal":
        result = initNum * galToL;
        break;
      case "L":
        result = initNum / galToL;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "km":
        result = initNum / miToKm;
        break;
    }
    if (result) {
      return Number(result.toFixed(5));
    } else {
      return "invalid";
    }
    
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
