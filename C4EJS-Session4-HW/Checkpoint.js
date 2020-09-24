// Init
// let movie = {
//     title: "The dark night rises",
//     year: 2012,
//     rate: 8.4
// }

// Read
// Log all of 3 the properties of the movie object to the console using 2 different ways
// console.log(movie.title)
// console.log(movie[`title`])
// Log an non-existent property of the movie, director, what is the result?
// console.log(movie.director)
// ===> undefined
// Now apply it to upgrade Read object, after users enter the property, check whether the property exists, if yes, show them the value, if no, tell them that
// let n = prompt("What do you want to know")
// if(n=="title"){
//     alert(movie.title)
// }
// else if(n=="year"){
//     alert(movie.year)
// }
// else if(n=="movie.rate"){
//     alert(movie.rate)
// }
// else alert(n +" dose not exist in our data")

// Update
//1 Change the rate of the movie to 8.7
// let movie = {
//     title: "The dark night rises",
//     year: 2012,
//     rate: 8.4
// }
// movie.rate = 8.7
// console.log(movie)
//2 Increase the rate of the movie by 0.5
// movie.rate += 0.5
// console.log(movie)

//Write a script, asking users what they want to update and what is the update, perform the update and then log out the result
// let movie = {
//     title: "The dark night rises",
//     year: 2012,
//     rate: 8.4
// }
// let a = prompt("what you want to update?")
// let b = prompt("what is the update?")
// movie[a] = b
// console.log(movie)

//Create
// Upgrade Update script to check whether the property entered by users exist, if yes, perform as usual, if no, tell them that we will add new and perform create
// let movie = {
//     title: "The dark night rises",
//     year: 2012,
//     rate: 8.4
// }
// let a = prompt("what you want to update?")
// if(a=="title" || a == "year" || a == "rate"){
//     let b = prompt("what is the update?")
//     movie[a] = b
//     console.log(movie)
// }
// else{
//     alert(a +" dose not exist in our data,we wil add new")
//     let c = prompt("Enter the new data")
//     movie[a]= c
//     console.log(movie)
// }

// Array of Object
// Create an array called movies, containing at least 3 movie data with the same structure all have title, year and rate (you can add more property if you like)// let movie1= {
// let movie1= {
//     title: "phimma",
//     year: 2010,
//     rate: 8
// }
// let movie2= {
//     title: "phimkinhdi",
//     year: 2011,
//     rate: 9
// }
// let movie3= {
//     title: "phimtinhcam",
//     year: 2012,
//     rate: 10
// }
// let movie=[]
// movie.push(movie1)
// movie.push(movie2)
// movie.push(movie3)
// Print or log out the first movie from movie list
// console.log(movie[0])
//Print or log out the title of the last movie from movie list
// console.log(movie[2].title)
// Use a loop to print or log out all of the movie in the movie list
// for(let i =0; i<movie.length;i++){
//     console.log(movie[i])
// }

//Use a loop to print or log out all of the movie in the movie list, the data is prettified as follow
// for(let i =0; i<movie.length;i++){
//     console.log(movie[i].title)
//     console.log(movie[i].year)
//     console.log(movie[i].rate)
// }
//Increase the rate of the last movie in the movies list by 0.7
// movie[2].rate += 0.7
// console.log(movie[2].rate)

//Object containing array
// Create an object named movie, with title, year and rate and characters. The characters contain at least 3 characters of the movie
// let movie = {
//     title : "Attack on titans",
//     year: 2013,
//     rate : 8.8,
//     character: ["Eren","Armin", "Mikasa"]
// }
//Print or log out the movie data in the following format (Note, remember the spread operator … for fast logging an array):
// for( let x in movie){
//     console.log(x+`: `+ movie[x])
// }


//Object and Array mix structure
// Create an array named movies, containing at least three movies, all have title, year, rate and characters properties 
// let movie = [
//    movie1= {
//     title: "phimma",
//     year: 2010,
//     rate: 8
// },
//     movie2= {
//     title: "phimkinhdi",
//     year: 2011,
//     rate: 9
// },
//     movie3= {
//     title: "phimtinhcam",
//     year: 2012,
//     rate: 10
// }
// ];
// console.log(movie)
// Log or print all the movies in the movies array, for example
// for(let i=0; i<movie.length; i++){
//     console.log(movie[i].title)
//     console.log(movie[i].year)
//     console.log(movie[i].rate)
// }