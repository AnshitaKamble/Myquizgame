class Question{
      constructor(){
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.greeting = createElement('h3');
      }

 hide(){
     this.greeting.hide();
     this.button.hide();
     this.input.hide();


 }

 display(){
  this.title.html("My Quiz Game");
  this.title.position(350,0);

  this.question.html("Question:- What starts  and ends from'E', but has only one letter?");
  this.question.position(150,80);
  this.option1.html("1:-Everyone");
  this.option.position(150,100);
  this.option2.html("2:-Envelope");
  this.option2.position(150,120);
  this.option3.html("3:-Estimate");
  this.option3.position(150,130);
  this.option4.html("4:-Example");
  this.option4.positon(150,140);

  this.input1.position(150,230);

 }
}