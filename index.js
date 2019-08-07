#!/usr/bin/env node

let log = console.log;

let intro = {
    inMyDream: [
        'in my dream',
        'I dreamed',
    ],
};
let outro = {
    andYouWereThere: [
        'and we were there',
        'and you were there',
        'we had just arrived',
        'we had just discovered it',
        'we had been there forever',
    ],
    andYouWereHappy: [
        'and we were happy',
        'and we were safe',
        'and we were peaceful',
        'and we were content',
        'and we were warm',
        'and we were in love',
        'and we were holding hands',
        'and your voice was soft',
        'and your hand was soft',
        'and all was well',
        'and all was still',
        'and all was calm',
        'and you were singing me a song',
        'and you were smiling at me',
        'and you were grinning at me',
        'and I was singing you a song',
        'and I was smiling at you',
        'and I was grinning at you',
        "and we couldn't believe our luck",
    ],
};
let things = {
    //   == THING ==
    strawberry: {
        thereWasAShip: 'there was a juicy strawberry',
        sailsBillowing: 'sweet and warm',
        andInsideIt: 'and holding it up',
        betweenTheBoxes: 'protecting the strawberry',
    },
    //  == PLACE / THING / CONTAINER ==
    curtain: {
        thereWasAShip: 'there was a lush red velvet curtain',
        sailsBillowing: 'tassels unfurling, about to reveal a mystery',
        andInsideIt: 'and behind it',
        betweenTheBoxes: 'emerging into the spotlight',
    },
    beetle: {
        thereWasAShip: 'there was an enormous colorful beetle',
        sailsBillowing: 'glittering like a jewel',
        andInsideIt: 'and on its back',
        betweenTheBoxes: 'atop its glittering wings',
    },
    star: {
        thereWasAShip: 'there was a star',
        sailsBillowing: 'shining brightly',
        andInsideIt: 'and orbiting around it',
        betweenTheBoxes: 'soaring through the sparkling darkness',
    },
    seaglass: {
        thereWasAShip: 'there was a piece of blue-green sea glass',
        sailsBillowing: 'weathered with time, but still glinting in the sun',
        andInsideIt: 'and inside the frosted glass',
        betweenTheBoxes: 'safely enclosed',
    },
    ship: {
        thereWasAShip: 'there was a sailing ship',
        sailsBillowing: 'sails billowing',
        andInsideIt: 'and inside the hold of the ship',
        betweenTheBoxes: 'surrounded by barrels and brass candlesticks',
    },
    bed: {
        thereWasAShip: 'there was a soft bed',
        sailsBillowing: 'pillows already fluffed',
        andInsideIt: 'and resting beneath the quilt',
        betweenTheBoxes: 'tucked in for the night',
    },
    //   == PLACE ==
    meadow: {
        thereWasAShip: 'there was a meadow',
        sailsBillowing: 'flowers dancing in the breeze',
        andInsideIt: 'and resting gently in the grass',
        betweenTheBoxes: 'between the flowers',
    },
    lighthouse: {
        thereWasAShip: 'there was a lighthouse',
        sailsBillowing: 'holding a spell of stability',
        andInsideIt: 'and below the cliffs',
        betweenTheBoxes: 'gazing up at the stripes of the tower',
    },

    //   == PLACES ==
    // harbor
    // circus
    // disneyland
    // mountain
    // park with a view
    // alfalfa farm
    // redwood grove
    // burning man / festival
    // snowy forest
    // cypress beach
    // cabin
    //   == CONTAINERS / FRAMES ==
    // crystal
    // flower
    // sketchbook / canvas
    // song
    //   == THINGS ==
    // bread
    // snacks: pastries, pies
    // banjo
    // fancy breakfast
    //   == CHARACTERS ==
    // a parade of bugs
    // various animals
    // dragon
    // tiger
    // werewolf
    // snail
    // pillbug
    //   == ? ==
    // the moon
    // the sky
    // painting
    // carousel
    // campfire
    // bed
    // memory
    // spell / blessing
    // mist / fog
    // sunset
    // rainbow
};

let choose = (stringOrArray) => {
    // return a random string from an array.
    // if the input is already just a string, return it.
    if (typeof stringOrArray === 'string') { return stringOrArray; }
    return stringOrArray[Math.floor(Math.random() * stringOrArray.length)];
}
let chooseAndRemove = (arr, item) => {
    // choose a random item from the array, remove it, and return the item.
    // if item is provided (optional), remove and return that specific item if it's there.
    let ii = arr.indexOf(item);
    if (ii === -1) {
        ii = Math.floor(Math.random() * arr.length);
    }
    let item = arr[ii];
    arr.splice(ii, 1);
    return item;
}
let maybe = (item, chance) => {
    // return item with a given probability (0 <= chance <= 1), or null otherwise
    if (Math.random() < chance) { return item; }
    return null;
}

let makeDream = () => {
    // generate a dream, as a multi-line string

    // get names of things
    let thingNames = Object.keys(things);
    // get 2 random things
    let thing1 = things[chooseAndRemove(thingNames, '')];
    let thing2 = things[chooseAndRemove(thingNames, '')];
    // list of patterns for assembling a dream
    let patterns = [
        [
            intro.inMyDream,
            thing1.thereWasAShip,
            maybe(thing1.sailsBillowing, 0.5),
            thing1.andInsideIt,
            thing2.thereWasAShip,
            thing1.betweenTheBoxes,
            thing2.sailsBillowing,
            outro.andYouWereThere,
            outro.andYouWereHappy,
        ],
    ];
    let parts = choose(patterns)  // choose a pattern
        .filter(x => x !== null)  // remove nulls from the pattern (from maybe()s)
        .map(choose);             // flatten the list of choices inside the pattern to specific choices
    // join the list of lines into a single multi-line string
    return parts.join('\n');
}

log('================================================');
log(); log(); log();
log(makeDream());
log(); log(); log();
log(makeDream());
log(); log(); log();
log('================================================');