let example1={
    Fname: 'Rhytonne', Lname:'Brite',
    
};
console.log(example1.Fname+ ' '+example1.Lname);
  /*Assigning new obect in javascript*/
  let example3={
    Firstname: 'Spongebob'
    
};
let example4=Object.assign({},example3);
example4.Lastname='Squarepants';
console.log(example3.Firstname+ ' '+example4.Lastname);