// Write your code here
function  Breakfast(food, drink) {
  this.food=food;
  this.drink = drink;
  this.sayHello = function() {
    console.log(`${this.year},${this.drink}`);
  };
}
  let bfast = new Breakfast('eggs', 'juice')
  bfast.Breakfast();




  function Lunch (salad,soup,drink) {
    this.salad=salad;
    this.soup=soup;
    this.drink = drink;
    this.sayHello = function() {
      console.log(`${this.salad},${this.soup},${this.drink}`);
    };
  }
  let newlunch = new Lunch('side salad','broccoli cheddar soup','iced tea')
    newlunch.Lunch();






<<<<<<< HEAD
      function Dinner (salad,soup,entree,dessert) {

        this.salad = salad;
=======
      function Dinner (soup,entree,dessert) {

>>>>>>> f52fc0614eb07d320f7d92ef9b983af9f793e8c2
        this.soup = soup;
        this.entree = entree;
        this._dessert = dessert;
        this.sayHello = function() {
          console.log(`${this.soup},${this.entree},${this._dessert}`);
        };
      }
<<<<<<< HEAD
    let newdinner = new Dinner('balsamic salad', 'consomme', 'filet mignon', 'cheesecake')
=======
    let newdinner = new Dinner('', 'consomme', 'filet mignon', 'cheesecake')
>>>>>>> f52fc0614eb07d320f7d92ef9b983af9f793e8c2
        newdinner.Dinner();
