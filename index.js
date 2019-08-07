#!/usr/bin/env node

let log = console.log;

let intro = {
    inMyDream: [
        'in my dream',
        'I dreamed',
    ],
};
let outro = {
    youWereThere: [
        'and we were there',
        'and you were there',
        'we had just arrived',
        'we had just discovered it',
        'we had been there forever',
    ],
    youWereHappy: [
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
    if (typeof stringOrArray === 'string') { return stringOrArray; }
    return stringOrArray[Math.floor(Math.random() * stringOrArray.length)];
}
let chooseAndRemove = (arr, name) => {
    let ii = arr.indexOf(name);
    if (ii === -1) {
        ii = Math.floor(Math.random() * arr.length);
    }
    let item = arr[ii];
    arr.splice(ii, 1);
    return item;
}
let maybe = (item, chance) => {
    if (Math.random() < chance) { return item; }
    return null;
}

let makeDream = () => {
    let thingNames = Object.keys(things);
    let thing1 = things[chooseAndRemove(thingNames, '')];
    let thing2 = things[chooseAndRemove(thingNames, '')];
    let patterns = [
        [
            intro.inMyDream,
            thing1.thereWasAShip,
            maybe(thing1.sailsBillowing, 0.5),
            thing1.andInsideIt,
            thing2.thereWasAShip,
            thing1.betweenTheBoxes,
            thing2.sailsBillowing,
            outro.youWereThere,
            outro.youWereHappy,
        ],
    ];
    let parts = choose(patterns).filter(x => x !== null).map(choose);
    return parts.join('\n');
}

log('================================================');
log(); log(); log();
log(makeDream());
log(); log(); log();
log(makeDream());
log(); log(); log();
log('================================================');