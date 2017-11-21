function getPlaceValues(number) {
    // this function takes a number of any length
    // and returns an array containing its place values

    var placeValues = [];
    var numberLength = Math.floor(Math.log10(number)) + 1;

    while (numberLength >= 1) {
	// decrement number length to repeat process
        // for next digit
        numberLength -= 1;
        // get the current place value, e.g. 10, 100, 1000 etc
        var currentPlace = Math.pow(10,numberLength);
        // get the current digit, e.g. 3 from 3291
        var currentDigit = Math.floor(number/currentPlace);
        // multiply by current place and push to array
        placeValues.push(currentDigit*currentPlace);
        // remove current place from number
        number %= currentPlace;
    }

    return placeValues;
}
