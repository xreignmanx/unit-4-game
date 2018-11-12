//The game has 4 differnet crystal BUTTONS on the screen.

var heaftySack;
var wins;
var loses;
//Player is shown a random number (HEAFTY SACK) between 19-120 at the beginning of each game.

heaftySack = Math.floor(Math.random() * 101) + 19;
    console.log(heaftySack)
//Player starts with 0 points in his GEM BAG.




$("#targetScore").html('Heafty Sack: ')

 //Create 4 crystals
for (var i = 0; i < 4; i++) {
//Each crystal starts game with a random value between 1-12.
//Create random numbers for each Crystal
    var randomNum = Math.floor(Math.random() * 12);
      console.log(randomNum)
    var crystal = $("<div>");

//Create a class for our crystal class and random number
    crystal.attr({
        "class": 'crystal',
        "CrystalValue": randomNum
        });
//Connect Crystal value to Crystal Div
      $(".crystals").append(crystal);
    
    }

//When a crystal is clicked, a GEM VALUE will be added to the players GEM BAG
    //The crystal value is hidden until player clicks on it.
    //Update GEM BAG score counter
// Player one wins when the GEM BAG equals the HEAFTY SACK
//Player loses if their GEM BAG is larger than the HEAFTY SACK
//Game restarts when player wins or loses
    //New random number for the HEAFTY SACK
    //New random value for each crystal.
    //GEM BAG resets to zero.
    //








