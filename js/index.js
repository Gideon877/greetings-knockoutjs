var viewModel = function() {
    let namesGreeted = {};
    this.inputName = ko.observable();
    this.option = ko.observable(true);
    this.selectedLanguage = ko.observable(); // Initially selects only the Almond radio button

    this.greetFunction = function() {
        var valueEntered = this.inputName();
        this.language = this.selectedLanguage();

        if (namesGreeted[valueEntered] === undefined) {
            namesGreeted[valueEntered] = 1;
        } else {
            namesGreeted[valueEntered] = namesGreeted[valueEntered] + 1;
        }

        // console.log(valueEntered);
        // console.log(namesGreeted);
    }
};


ko.applyBindings(new viewModel());

// this.inputName(valueEntered.toUpperCase());
// var size = Object.keys(namesGreeted).length
