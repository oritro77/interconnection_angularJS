//new directive which restricts only number input from the user
app.directive("inputOnlyKeyPress", function() {
    return {
        template : "<div class=\"form-group\"><label>Input Number: </label>	<input class=\"form-control\" type=\"number\" ng-model=\"myText\" name=\"inputName\"></div>"
    };
});