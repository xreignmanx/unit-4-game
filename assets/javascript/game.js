//The game has 4 differnet crystal BUTTONS on the screen.

var heaftySack;
var wins = 0;
var losses = 0;
var gemBag = 0;

//Make a function to begin game
var beginGame = function () {
        $(".crystals").empty()
    
        //Player is shown a random number (HEAFTY SACK) between 19-120 at the beginning of each game.
        heaftySack = Math.floor(Math.random() * 102) + 19;
            console.log()
        //Player starts with 0 points in his GEM BAG.




        $("#targetScore").html('Heafty Sack: ' + heaftySack)

        //Create 4 crystals
        for (var i = 0; i < 4; i++) {
        //Each crystal starts game with a random value between 1-12.
        //Create random numbers for each Crystal
            var randomNum = Math.floor(Math.random() * 12) + 1;
            //   console.log(randomNum)
            var crystal = $("<div>");

        //Create a class for our crystal class and random number
            crystal.attr({
                "class": 'crystal',
                "crystalValue": randomNum
                });
        //Connect Crystal value to Crystal Div
            $(".crystals").append(crystal);
            
            }
        }

    beginGame();

    
    //When a crystal is clicked, a GEM VALUE will be added to the players GEM BAG
    //add 'onClick' to crystal to log cyrstal value
$   (".crystal").on('click', function() {
    //Create number variable for crystal values as a numeric value (parseInt)
        var num = parseInt($(this).attr('crystalValue'));
        gemBag += num;
        console.log(gemBag);
  

    //Set increment and totals for wins/losses
    if(gemBag > heaftySack) {
        losses ++;
        $("#losses").html('losses: ' + losses);
        beginGame();
    }

    else if(gemBag === heaftySack) {
        wins ++;
        $("#wins").html('wins : ' + wins); 
        beginGame();
    } 
});
    //The crystal value is hidden until player clicks on it.
    //Update GEM BAG score counter
// Player one wins when the GEM BAG equals the HEAFTY SACK
//Player loses if their GEM BAG is larger than the HEAFTY SACK
//Game restarts when player wins or loses
    //New random number for the HEAFTY SACK
    //New random value for each crystal.
    //GEM BAG resets to zero.
    //








