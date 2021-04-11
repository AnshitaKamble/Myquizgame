class Contestant {
    constructor(){
      this.index=null
    this.distance=0
  this.name=null
  this.button=createButton('submit');


  }
  
  static getPlayerInfo(){
  
    var contestantInfoRef=database.ref('contestants')
    contestantInfoRef.on("value",(data)=>{
      allContestants=data.val();
    })
  }
  
    getCount(){
      var contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value",function(data){
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(){
      var contestantIndex = "contestants/contestant" + this.index;
      database.ref(contestantIndex).set({
        name:this.name,
        distance:this.distance
      });
    }
    display(){
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            this.title.hide();
            contestant.name=this.input1.value();
            contestantCount+=1;
            contestant.index=contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
            
        });
}
  }
  