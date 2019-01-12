// WATS 3020 Mad Libs Assignment
//
// For this assignment you must fill in the code below so that it functions
// to populate the text of the "Mad Libs" style story in the HTML.
//
// In order to achieve this goal, you will need to write prompt() statements
// to collect input from the user. The input you collect will be used to
// generate the story.
//
//
// TODO: Write a prompt statement like the one below for each of the
// variables listed.

let honorific = prompt('Please enter an honorific title (e.g. Mister or Colonel).','Mr.');

// Using the same prompt() command, populate the following variables:
//
// TODO: A variable named "authorName" for authorial attribution.
let authorName = prompt('What is your full name?','e.g. Shure Joe');

// TODO: A variable named "adjective1" for a word used to describe something.
let adjective1 = prompt('Enter a descriptive term', 'e.g. beautiful, happy, sleepy, etc');

// TODO: A variable named "vehicle" for a mode of transation (e.g. plane, boat, etc.).
let vehicle = prompt('Enter a vehicle name','e.g. Tesla, Daewoo Lanos, Hyundai Elantra, etc');

// TODO: A variable named "vehiclePart" for a part of the vehicle you just named.
let vehiclePart = prompt('Enter a vehicle part','e.g. wheel, tire, door, etc');

// TODO: A variable named "parking" for a location where you park the vehicle you just named.
let parking = prompt('Enter a location for parking','e.g. Costco lot, garage, transit center park and ride, etc');

// TODO: A variable named "precious" for a precious object.
let precious = prompt('Enter a precious object','e.g. phone, wallet, concert tickets, etc');

// TODO: A variable named "noiseMaker" for something that makes a sound.
let noiseMaker = prompt('Enter something that makes noises','e.g. horn, whistle, vuvuzela, etc');

// TODO: A variable named "crowdBehavior" for something that people do together as a group.
let crowdBehavior = prompt('Enter something that people do in a crowd','e.g. cheer, heckle, riot, etc');

// TODO: A variable named "adjective2" for a word used to describe something.
let adjective2 = prompt('Enter a new descriptive term', 'e.g. beautiful, happy, sleepy, etc');

// TODO: A variable named "adjective3" for a word used to describe something.
let adjective3 = prompt('Enter a new descriptive term', 'e.g. beautiful, happy, sleepy, etc');

// TODO: A variable named "color" for the name of a color.
let color = prompt('Enter a color', 'e.g. red, white, blue, etc');

// TODO: A variable named "familyMember" for the name of a family relationship (e.g. sister, father, etc.).
let familyMember = prompt('Enter a male family member','e.g. dad, grandpa, uncle, etc');

// TODO: A variable named "organ" for the name of a body organ (e.g. heart, liver, spleen, etc.).
let organ = prompt('Enter an organ part','e.g. kidney, heart, liver, etc.');

// TODO: A variable named "bodyPart1" for the name of a body part.
let bodyPart1 = prompt('Enter a body part','e.g. clavicle, tibia, phalanges');

// TODO: A variable named "bodyPart2" for the name of a body part.
let bodyPart2 = prompt('Enter another body part','e.g. clavicle, tibia, phalanges');

// TODO: A variable named "bodyPart3" for the name of a body part.
let bodyPart3 = prompt('Enter another body part','e.g. clavicle, tibia, phalanges');

// TODO: A variable named "thing" for an object.
let thing  = prompt('Enter a thing','e.g. figurine, movie, pizza');

// TODO: A variable named "thing2" for an object you might give somebody you love.
let thing2  = prompt('Enter another thing','e.g. figurine, movie, pizza');

// TODO: A variable named "thing3" for an object you might give somebody you like.
let thing3  = prompt('Enter another thing','e.g. figurine, movie, pizza');

// TODO: A variable named "adjective4" for a word used to describe the vehicle.
let adjective4 = prompt('Enter a new descriptive term', 'e.g. beautiful, happy, sleepy, etc');

// TODO: A variable named "adjective5" for a word used to describe the vehicle.
let adjective5 = prompt('Enter a new descriptive term', 'e.g. beautiful, happy, sleepy, etc');

////////////////////////////////////////////////////////////////////////
// Section Numbers
//
// The poem we are using has section numbers. Let's allow the user to
// generate their own.
//
// TODO: To begin with, prompt the user to collect their favorite number that is not zero.
// Call this variable "userNumber".
let userNumber = prompt('Enter your lucky number','e.g. 4, 33, 777, etc.');

// TODO: generate TWO more numbers called "number2" and "number 3".
// Use any operator you would like to add, multiply, divide, or otherwise
// change the number that the user submitted.
let number2 = userNumber - 1;
let number3 = userNumber + 2;

// DO NOT EDIT BELOW THIS LINE /////////////////////////////////////////
//
// The code below his line handles variable replacement into the HTML file.
// Please do not edit this code unless you are attempting a stretch goal.

let titleText = `O ${honorific}! My ${honorific}! by <small>${authorName}</small>`;
let titleHeading = document.querySelector("#madlib-title");
titleHeading.innerHTML = titleText;

let storyText = `

    ${userNumber}
    O ${honorific}! my ${honorific}! our ${adjective1} trip is done;
    The ${vehicle} has weather'd every rack, the ${precious} we sought is won;
    The ${parking} is near, the ${noiseMaker} I hear, the people all ${crowdBehavior},
    While follow ${bodyPart1} the steady keel, the vessel ${adjective4} and ${adjective5}:
    But O ${organ}! ${organ}! ${organ}!
    O the bleeding drops of ${color},
    Where on the ${vehiclePart} my ${honorific} lies,
    Fallen ${adjective2} and ${adjective3}.

    ${number2}
    O ${honorific}! my ${honorific}! rise up and hear the ${noiseMaker};
    Rise up-for you the ${thing} is flung-for you the bugle trills;
    For you ${thing2} and ribbon'd ${thing3}-for you the shores a-crowding;
    For you they ${crowdBehavior}, the swaying mass, their eager faces turning;
    Here ${honorific}! dear ${familyMember}!
    This ${bodyPart2} beneath your ${bodyPart3};
    It is some dream that on the ${vehiclePart},
    You've fallen ${adjective2} and ${adjective3}.

    ${number3}
    My ${honorific} does not answer, his lips are pale and still;
    My ${familyMember} does not feel my arm, he has no pulse nor will;
    The ${vehicle} is anchor'd safe and sound, its voyage closed and done;
    From fearful trip, the victor ${vehicle}, comes in with ${precious} won;
    Exult, O shores, and ring, O ${noiseMaker}!
    But I, with mournful tread,
    Walk the ${vehiclePart} my ${honorific} lies,
    Fallen ${adjective2} and ${adjective3}.
`;
let storyParagraph = document.querySelector("#madlib-text");
storyParagraph.innerHTML = storyText;