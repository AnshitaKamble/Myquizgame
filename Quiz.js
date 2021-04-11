class Quiz{
    constructor(){}
    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        });
       
    }



update(state){
    database.ref('/').update({
        gameState: state
      });
}

async start (){
    if (gameStart===0){
        contestant=new Contestant();
        var contestantCountRef= await database.ref('contestantCount').once("value");
        if(contestantCountRef.exists()){
            contestantCount=contestantCountRef.val();
            contestant.getCount();

        }
       question=new Question();
       question.display();

    }
 
}

play(){
    
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        quiz.hide();
    textSize(30);
    text("Quizstart",120,100);
    Contestant.getContestantInfo()
    if(allContestants!==undefined){
      var dislpay_position=130
      if(plr in allContestant){
          var correctAns="2";
          if(correctAns===allContestants[plr].answer){
      fill("green")
           } else{
      fill("red")
           }
      }
      display_position+=20
      textSize(15);
      text(allContestant[plr].name+":"+allContestants[plr].distance,120,display_position)
    
    }
   
    
    
    }
    }

    
