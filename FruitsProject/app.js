const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB");

//Create Schema for your collections
const fruitsSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitsSchema
});

//Create new model based on the Schema
const Person = mongoose.model("People", personSchema);
const Fruit = mongoose.model("Fruit", fruitsSchema);

// const pineapple = new Fruit({
//     name: "Pineapple",
//     rating: 8,
//     review: "Sweet"
// });

// pineapple.save();

// const person = new Person({
//     name: "Rebecca",
//     age: 20,
//     favouriteFruit: pineapple
// });

// person.save();


// Person.deleteMany({name:"John"},function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Removed all!");
//         mongoose.connection.close();
//     }
// });



//Find data from a model
// Fruit.find(function(err, fruits){
//     if(err){
//         console.log(err);
//     }else{
//         mongoose.connection.close();
//         fruits.forEach(function(fruit){
//         console.log(fruit.name);
//         });
//     };
// });


//Update one data, three paramters (condition, changes,callback)
// Fruit.updateOne({_id: "62a044633f0f57734689be14"}, {rating: 10},function(err){
//     if(err){
//         console.log(err);
//     }else{
//         mongoose.connection.close();
//         console.log("Successfully updated!");
//     }
// })

//Delete One Date
// Fruit.deleteOne({name:"Peach"},function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Successfully deleted the item!");
//     }
//     mongoose.connection.close();
// });

//Insert Multiple Data
// const kiwi = new Fruit({
//     name: "Kiwi",
//     rating: 4,
//     review: "Sour"
// });

// const banana = new Fruit({
//     name: "Banana",
//     rating: 9,
//     review: "Best"
// });
// Fruit.insertMany([kiwi,banana],function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Successfully added banana and kiwi!");
//     }
// });


//Insert Single Data
// const person = new Person({
//     name: "John",
//     age: 37
// });
// person.save();

const apple = new Fruit({
    name: "Apple",
    rating: 9,
    review: "Pretty good"
});
// apple.save();
// Person.updateOne({name:"John"},{favouriteFruit: apple},function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Updated!");
//         mongoose.connection.close();
//     }
// });
