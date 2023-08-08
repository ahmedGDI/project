function representCat(){
    var obj = {}
    
    obj.number1 = 50
    obj.number2 = 50
    obj.number3 = 50
    obj.number4 = 50
                
    obj.balanceUp = 80
    obj.balanceDown = 20
    obj.balance = 50
    
    obj.count = 10
    
    obj.tiredness =tiredness;
    obj.hunger = hunger;
    obj.lonliness = lonliness;   
    obj.happiness =happiness ;
    
    obj.catStatusOftirednessUp = catStatusOftirednessUp;
    obj.catStatusOftirednessDown =catStatusOftirednessDown;
    
    obj.catStatusOfHungerUp =catStatusOfHungerUp;
    obj.catStatusOfHungerDown =catStatusOfHungerDown;

    obj.catStatusOfHappinessUp =catStatusOfHappinessUp;
    obj.catStatusOfHappinessDown =catStatusOfHappinessDown;

    obj.catStatusOfLonlinessUp = catStatusOfLonlinessUp ;
    obj.catStatusOfLonlinessDown = catStatusOfLonlinessDown;


    //obj.statusOfCat = statusOfCat ;  
   
    return obj
}

//counting by increment and decrementing with aplying the string as parameter for each one of the emotions

var tiredness = function(count){
    if(count === 'increase'){
        console.log('this cat has ' + ( this.number1 +this.count) +' % sleep')
    return 'this cat has ' + ( this.number1 = this.number1 +this.count) +' % sleep'
    }else if(count === 'decrease'){
        console.log('this cat has ' + ( this.number1 -this.count) +' % sleep')
    return  'this cat has ' + ( this.number1 = this.number1 -this.count) +' % sleep'
}
}
var hunger = function(count){
    if(count === 'increase'){
        console.log('this cat has ' + (  this.number2 +this.count) +' % feed')
    return 'this cat has ' + ( this.number2 = this.number2 +this.count) +' % feed'
    }else if(count === 'decrease'){
        console.log('this cat has ' + (  this.number2 -this.count) +' % feed')
    return 'this cat has ' + ( this.number2 = this.number2 -this.count) +' % feed'
}
}

var lonliness = function(count){
    if(count === 'increase'){
        console.log('this cat has ' + (  this.number3 +this.count) +' % Companionship')
    return 'this cat has ' + ( this.number3 = this.number3 +this.count) +' % Companionship'
    }else if(count === 'decrease'){
        console.log('this cat has ' + (  this.number3 -this.count) +' % Companionship')
    return  'this cat has ' + ( this.number3 = this.number3 -this.count) +' % Companionship'
}
}

var happiness = function(count){
    if(count === 'increase'){
        console.log('this cat has ' + (  this.number4 +this.count) +' % happy')
    return 'this cat has ' + ( this.number4 = this.number4 +this.count) +' % happy'
    }else if(count === 'decrease'){
        console.log('this cat has ' + (  this.number4 -this.count) +' % happy')
    return   'this cat has ' + ( this.number4 = this.number4 -this.count) +' % happy'
}
}
// applying an instant cat to manipulate all of the button linked with jQ  
 
$(document).ready(function() {
    var cat = representCat(); 
  
    
    function updateAttributeDisplay(attribute, value) {
      $("#" + attribute + "Value").text(value);
    }
  
    
    $("#increaseTirednessButton").click(function() {
      cat.tiredness("increase");
      updateAttributeDisplay("tiredness", cat.number1);
      checkCatStatus(cat);
    });
  
    $("#increaseHungerButton").click(function() {
      cat.hunger("increase");
      updateAttributeDisplay("hunger", cat.number2);
      checkCatStatus(cat);
    });
  
    $("#increaseLonelinessButton").click(function() {
      cat.lonliness("increase");
      updateAttributeDisplay("loneliness", cat.number3);
      checkCatStatus(cat);
    });
  
    $("#increaseHappinessButton").click(function() {
      cat.happiness("increase");
      updateAttributeDisplay("happiness", cat.number4);
      checkCatStatus(cat);
    });
  
    
    $("#decreaseTirednessButton").click(function() {
      cat.tiredness("decrease");
      updateAttributeDisplay("tiredness", cat.number1);
      checkCatStatus(cat);
    });
  
    $("#decreaseHungerButton").click(function() {
      cat.hunger("decrease");
      updateAttributeDisplay("hunger", cat.number2);
      checkCatStatus(cat);
    });
  
    $("#decreaseLonelinessButton").click(function() {
      cat.lonliness("decrease");
      updateAttributeDisplay("loneliness", cat.number3);
      checkCatStatus(cat);
    });
  
    $("#decreaseHappinessButton").click(function() {
      cat.happiness("decrease");
      updateAttributeDisplay("happiness", cat.number4);
      checkCatStatus(cat);
    });
  });


  // set an interval for all the emotions of each condition inc till reach 80% and dec till reach 20%
  // u can change the interval as u like rghit the Factory function of the oop object  

  var catStatusOftirednessUp = function(){
  if(this.number1 >= this.balanceUp ){
    return 'cat is very energetic'
  }
}
  var catStatusOftirednessDown = function(){
  if(this.number1 <= this.balanceDown ){
    return 'cat is very tired'
  }
}






var catStatusOfHungerUp = function(){
  if(this.number2 >= this.balanceUp ){
    return 'cat is very feed'
  } 
  }  
  var catStatusOfHungerDown = function(){
  if(this.number2 <= this.balanceDown ){
    return 'cat is very hungry'
  }
}





var catStatusOfHappinessUp = function(){
  if(this.number3 >= this.balanceUp ){
    return 'cat is very happy'
    }
  }
  var catStatusOfHappinessDown =function(){  
  if(this.number3 <= this.balanceDown ){
    return 'cat is very sad'
  }
  }


  


var catStatusOfLonlinessUp = function(){
  if(this.number4 >= this.balanceUp ){
    return 'cat is very crowded '
  }
  }
    
  var catStatusOfLonlinessDown = function(){
  if(this.number4 <= this.balanceDown ){
    return 'cat is very lonley'
  }
}
// set all the conditions with the same instant to another var to setup other if condition with an alert return each time  


function checkCatStatus(cat) {
    var tirednessStatusUp = cat.catStatusOftirednessUp();
    var tirednessStatusDown = cat.catStatusOftirednessDown();
    
    var hungerStatusUp = cat.catStatusOfHungerUp();
    var hungerStatusDown = cat.catStatusOfHungerDown();

    var happinessStatusUp = cat.catStatusOfHappinessUp();
    var happinessStatusDown = cat.catStatusOfHappinessDown();

    var lonelinessStatusUp = cat.catStatusOfLonlinessUp();
    var lonelinessStatusDown = cat.catStatusOfLonlinessDown();




    if (tirednessStatusUp) {
        alert(tirednessStatusUp);
        cat.number1 = 50              // to rest the count 
        cat.balance = 50
        displayEmotionImage("energiticImage")
    }

    if (tirednessStatusDown) {
      alert(tirednessStatusDown);
      cat.number1 = 50 // to rest the count 
      cat.balance = 50
      displayEmotionImage("tiredImage")
  }




    if (hungerStatusUp) {
        alert(hungerStatusUp);
        cat.number2 = 50 // to rest the count 
        cat.balance = 50
        displayEmotionImage("feedImage")
    }

    if (hungerStatusDown) {
      alert(hungerStatusDown);
      cat.number2 = 50 // to rest the count 
      cat.balance = 50
      displayEmotionImage("hungerImage")
  }




    if (happinessStatusUp) {
        alert(happinessStatusUp);
        cat.number3 = 50 // to rest the count 
        cat.balance = 50
       displayEmotionImage("happinessImage")
    }

    if (happinessStatusDown) {
      alert(happinessStatusDown);
      cat.number3 = 50 // to rest the count 
      cat.balance = 50
     displayEmotionImage("sadImage")
  }





    if (lonelinessStatusUp) {
        alert(lonelinessStatusUp);
        cat.number4 = 50 // to rest the count 
        cat.balance = 50
        displayEmotionImage("notLonlyImage")
    }
    if (lonelinessStatusDown) {
      alert(lonelinessStatusDown);
      cat.number4 = 50 // to rest the count 
      cat.balance = 50
      displayEmotionImage("lonelinessImage")
  }

  }



function displayEmotionImage(imageId) {
    // Hide all images
    $("#emotionImageContainer img").hide();
    
    // Show the image 
    $("#" + imageId).show();
}



/*
var statusOfCat = function(){
    
    if(this.number1 >this.balance &&this.number2 >this.balance&& this.number3>this.balance && this.number4>this.balance ){
        return 'cat want to be petted '
    }else if(this.number1 <this.balance &&this.number2 <this.balance&& this.number3<this.balance &&this.number4<this.balance){
        return "cat doesn't want to be petted "
    }
}

*/