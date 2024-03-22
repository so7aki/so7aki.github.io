const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyname = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
let insertx = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
let inserty = ["the soup kitchen", "Disneyland","the White House"];
let insertz = ["spontaneously combusted", "melted into a puddle on the sidewalk","turned into a slug and crawled away"];







randomize.addEventListener('click', result);

function result() {
  let newstory = storyname;
  let xitem = randomValueFromArray(insertx);
  let yitem = randomValueFromArray(inserty);
  let zitem = randomValueFromArray(insertz);

  newstory = newstory.replaceAll(":insertx:", xitem)
  newstory = newstory.replaceAll(":inserty:", yitem)
  newstory = newstory.replaceAll(":insertz:", zitem)

  if(customName.value !== '') {
    const name = customName.value;
    newstory = newstory.replaceAll("Bob", name)
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + ' stones';
    const temperature =  Math.round((94-32) * 5/9) + 'celsius';

    newstory = newstory.replaceAll('94 farenheit', temperature);
    newstory = newstory.replaceAll('300 pounds', weight);


  }

  story.textContent = newstory;
  story.style.visibility = 'visible';
}