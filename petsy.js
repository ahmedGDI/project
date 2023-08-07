function MakePet() {
    var obj = {}

    obj.number1 = 0
    obj.number2 = 0
    obj.number3 = 0
    obj.number4 = 0

    obj.balanceUp = 80
    obj.balanceDown = 20
    obj.balance = 50
    obj.count = 10

    obj.tiredness = tiredness;
    obj.hunger = hunger;
    obj.lonliness = lonliness;
    obj.happiness = happiness;

    obj.catStatusOftiredness = catStatusOftiredness;
    obj.catStatusOfHunger = catStatusOfHunger;
    obj.catStatusOfHappiness = catStatusOfHappiness;
    obj.catStatusOfLonliness = catStatusOfLonliness;
    obj.statusOfCat = statusOfCat;

    return obj
}

var tiredness = function (count) {

    if (count === 'increase') {
        console.log('this cat has ' + (this.number1 + this.count) + ' % sleep');

        return 'this cat has ' + (this.number1 = this.number1 + this.count) + ' % sleep'
    } else if (count === 'decrease') {

        console.log('this cat has ' + (this.number1 - this.count) + ' % sleep');
        return 'this cat has ' + (this.number1 = this.number1 - this.count) + ' % sleep'
    }

}
var pet1 = MakePet()


$('#but1Inc').on('click', function () {
    console.log('clicked');
    pet1.tiredness('increase')
})
$('#but2Dec').on('click', function () {
    console.log('clicked');
    pet1.tiredness('decrease')
})




var hunger = function (count) {
    if (count === 'increase') {
        console.log('this cat has ' + (this.number2 + this.count) + ' % feed')
        return 'this cat has ' + (this.number2 = this.number2 + this.count) + ' % feed'
    } else if (count === 'decrease') {
        console.log('this cat has ' + (this.number2 - this.count) + ' % feed')
        return 'this cat has ' + (this.number2 = this.number2 - this.count) + ' % feed'
    }

}

var pet3 = MakePet()



$('#but3Inc').on('click', function () {
    console.log('clicked');
    pet3.hunger('increase')
})
$('#but4Dec').on('click', function () {
    console.log('clicked');
    pet3.hunger('decrease')
})

var lonliness = function (count) {
    if (count === 'increase') {
        console.log('this cat has ' + (this.number3 + this.count) + ' % Companionship')
        return 'this cat has ' + (this.number3 = this.number3 + this.count) + ' % Companionship'
    } else if (count === 'decrease') {
        console.log('this cat has ' + (this.number3 - this.count) + ' % Companionship')
        return 'this cat has ' + (this.number3 = this.number3 - this.count) + ' % Companionship'
    }
}

var pet5 = MakePet()



$('#but5Inc').on('click', function () {
    console.log('clicked');
    pet5.lonliness('increase')
})
$('#but6Dec').on('click', function () {
    console.log('clicked');
    pet5.lonliness('decrease')
})


var happiness = function (count) {
    if (count === 'increase') {
        console.log('this cat has ' + (this.number4 + this.count) + ' % happy')
        return 'this cat has ' + (this.number4 = this.number4 + this.count) + ' % happy'
    } else if (count === 'decrease') {
        console.log('this cat has ' + (this.number4 - this.count) + ' % happy')
        return 'this cat has ' + (this.number4 = this.number4 - this.count) + ' % happy'
    }
}
var pet7 = MakePet()



$('#but7Inc').on('click', function () {
    console.log('clicked');
    pet7.happiness('increase')
})
$('#but8Dec').on('click', function () {
    console.log('clicked');
    pet7.happiness('decrease')
})



var catStatusOftiredness = function () {
    if (this.number1 >= this.balanceUp) {
        return 'cat is very energetic'
    } else if (this.number1 <= this.balanceDown) {
        return 'cat is very tired'
    }
}
$("#angry").click(function () {
    // Change src attribute of image
    $("#angry").attr("src", "pic/angry.png");
});



var catStatusOfHunger = function () {
    if (this.number2 >= this.balanceUp) {
        return 'cat is very feed'
    } else if (this.number2 <= this.balanceDown) {
        return 'cat is very hungry'
    }
}

var catStatusOfHappiness = function () {
    if (this.number3 >= this.balanceUp) {
        return 'cat is very happy'
    } else if (this.number3 <= this.balanceDown) {
        return 'cat is very sad'
    }
}

var catStatusOfLonliness = function () {
    if (this.number4 >= this.balanceUp) {
        return 'cat is very crowded '
    } else if (this.number4 <= this.balanceDown) {
        return 'cat is very lonley'
    }
}

var statusOfCat = function () {

    if (this.number1 > this.balance && this.number2 > this.balance && this.number3 > this.balance && this.number4 > this.balance) {
        return 'cat want to be petted '
    } else if (this.number1 < this.balance && this.number2 < this.balance && this.number3 < this.balance && this.number4 < this.balance) {
        return "cat doesn't want to be petted "
    }
}