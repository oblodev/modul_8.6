var a = 7,
    b = 3,
    testingJS = (a * a) - (2 * a * b) - (b * b),
    value = testingJS;


console.log('The test value is : ' + value);

if (value > 0) {

  console.log ('Wynik jest dodatni');

}  else if (value < 0) {

  console.log ('Wynik jest ujemny');

} else {

  console.log ('Wynik jest rowny zero!');
}
