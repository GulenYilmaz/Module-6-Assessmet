const {shuffleArray} = require('./utils')// inside the utils.js we can call shuffleArray function
const  weekOfTheDay =['Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

describe(' should', () => {
test(' return array contain weekOfTheDay', ()=>{
    expect(shuffleArray(weekOfTheDay)).toEqual(expect.arrayContaining(weekOfTheDay));
});

test('This shuffleArray Function-->array length should be able to passed as an arguent', ()=>{
    expect(shuffleArray([1,2,3,4,5,6,7,8,9,10]).length).toEqual(10);})


})