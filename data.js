
const drNO = {
    id: 'dr-no',
    title: 'Lab of Dr. No',
    map: {
        top: '89%',
        left: '44%'
    },
    image: '../assets/dr-no.jpg',
    description: `
        You enter the lab of the evil scientist Dr. No, member of the criminal organization SPECTRE, just as he finishes construsting his nuclear radio beam that will topple the the missle lauches at Cape Canaveral; causing chaos and weakening America in its Cold War with Russia.
    `,
    choices: [{
        id: 'join',
        description: 'Join Dr. No and Spectre',
        result: `
            Who doesn't like a little chaos? You have decided to join Spectre and watch the world burn while holding Dr. No's metal hands. Maybe America and Russia will work things out anyways. You gain 100 gold and lose no hp.
        `,
        hp: 0,
        gold: 100
    }, {
        id: 'fight',
        description: 'Fight Dr. No',
        result: `
            You charge Dr. No and begin throwing punches. Unfortunately, Dr. No's metal hands land a few punches, breaking one of your ribs and causing you to fall to the ground. At this point you remember that you have a gun. You pull out your gun, shoot Dr. No, shoot his radio and save the day! You lose 10hp and gain no gold.
        `,
        hp: -10,
        gold: 0
    }, {
        id: 'leave',
        description: 'Decide its too late and leave',
        result: `
            Dr. No probably can't be stopped at this point and even if he could, trying to stop him would probably hurt. So you decide to leave and go find Moneypenny and enjoy the your life. You gain 20 hp.
        `,
        hp: 20,
        gold: 0
    }]
};

const goldfinger = {
    id: 'goldfinger',
    title: 'Gold Bullion Depository at Fort Knox',
    map: {
        top: '57%',
        left: '67%'
    },
    image: '../assets/goldfinger.jpg',
    description: `
        You find yourself, and CIA agent Felix Leiter, inside the gold bullion depository at Fort Knox staring at a radiation bomb planted by the devious, sadistic villian Goldfinger. Goldfinger planted with bomb with the intention of rendering the gold inside Fort Knox radioactive and unusable thus increasing the value of his own gold stockpile. There is only 1 minute left on the bomb's timer.
    `,
    choices: [{
        id: 'steal',
        description: 'Grab as much gold as you can carry and run away',
        result: `
            Despite quickly explaining your reasoning to Felix before grabbing a couple gold bars and stuffing them into your suit, Felix remains true to principles and shoots you in the back as you try to exit the room. He then disarms the bomb himself. You lose 100 hp and gain 0 gold.
        `,
        hp: -100,
        gold: 0
    }, {
        id: 'shoot',
        description: 'shoot the bomb!',
        result: `
            What did you think would happen? You shot the bomb, the bomb goes off, killing you and felix very painfully and somewhat quickly from extreme radiation poisoning. You lose 200 hp.
        `,
        hp: -200,
        gold: 0
    }, {
        id: 'defuse',
        description: 'Work together with Felix to disarm the bomb',
        result: `
            You and Felix quickly try to remember the lessons you learned from week 3 of spy school when you learned how to disarm bombs. The seven martinis you had earlier in the day help to calm your nerves and the bomb is disarmed with time to spare. Felix thanks you for your service to American Government and gives you a gold bar as a reward. You gain 100 gold.
        `,
        hp: 0,
        gold: 100
    }]
};

const treasure = {
    id: 'treasure',
    title: 'Casino in Monaco',
    map: {
        top: '31%',
        left: '5%'
    },
    image: '../assets/le-chiffre.jpg',
    description: `
        Only two players are left in the poker game: You and the dastardly banker Le Chiffre who has financing terrorist operations all around the world. Lucky for you he's got a gambling problem and on this last hand has called you and gone all-in thereby risking his entire network and his ability to fund terrorism. You have a pair of Queens and on the table there is one Queen, one Nine and two Eights. What do you want the last card to be?
    `,
    choices: [{
        id: 'King',
        description: 'A King',
        result: 'A King comes up thereby improving the straight that Le Chiffre already had with his 10 and Jack. You lose the game and your reward is death. You lose 100 hp.',
        hp: -100,
        gold: 0
    }, {
        id: 'Two',
        description: 'A Two',
        result: 'A Two comes up and does nothing for either of you but Le Chiffre has a straight thanks to his 10 and Jack. You lose the game and your reward is death.',
        hp: -50,
        gold: 0
    }, {
        id: 'Eight',
        description: 'An Eight',
        result: 'An Eight comes up thereby giving you a full house of Queens and Eights beating the straight of Le Chiffre. You win and gain all of the illicit funds he had using to fund terrorism.',
        hp: 0,
        gold: 100
    }]
};

const quests = [
    drNO, 
    treasure,
    goldfinger
];

export default quests;