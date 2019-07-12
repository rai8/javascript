let word1='Rhytonne';
let word2='brite';



let example=`${word1} ${word2}`;

console.log(example);
/*re-assigning values; firstname and lastname to fn and ln respectively*/
const personalInformation={
    firstname:'Rhytonne',
    lastname:'Brite',
    city:'Austin',
    state:'Texas'
}
const {firstname:fn, lastname:ln}=personalInformation;
console.log(`${fn} ${ln}`);  