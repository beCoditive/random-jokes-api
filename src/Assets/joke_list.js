const jokes = [
    {
        joke: "Me: Will you be my Valentine?\nGirl: No way\nMe: sudo will you be my Valentine?\nGirl: Yes..yes..yes! Let’s go!",
    },
    {
        joke: "Girl: Do you drink?\nProgrammer: No.\nGirl: Have Girlfriend?\nProgrammer: No.\nGirl: Then how do you enjoy life?\nProgrammer: I am Programmer",
    },
    {
        joke: "A Programmer was walking out of door for work, his wife said “while you’re out, buy some milk” and he never came home.",
    },
    {
        joke: "Boss: What is your address?\nMe: 173.168.15.10\n\nBoss: No, your local address\nMe: 127.0.01\n\nBoss: I mean your physical address\nMe: 29:01:38:62:31:58",
    },
    {
        joke: "GF: All you ever talk about is Programming Jokes! I am sick of it! It’s me or your Programming Jokes! \nMe: You meant to say it’s you XOR my Programming Jokes.\nGF: I am leaving you.",
    },
    {
        joke: "Friends: “What are you doing tonight? We’re all going clubbing”\nMe: “Building another stream of income”",
    },
    {
        joke: "“Knock, knock.”\n“Who’s there?”\nvery long pause….\n“Java.”",
    },
    {
        joke: "Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the science.",
    },
    {
        joke: "Programming is like sex:\nOne mistake and you have to support it for the rest of your life.",
    },
    {
        joke: "There are three kinds of lies: Lies, damned lies, and benchmarks.",
    },
    {
        joke: "All programmers are playwrights, and all computers are lousy actors.",
    },

    {
        joke: "Have you heard about the new Cray super computer?  It’s so fast, it executes an infinite loop in 6 seconds.",
    },

    {
        joke: "The generation of random numbers is too important to be left to chance.",
    },
    {
        joke: "I just saw my life flash before my eyes and all I could see was a close tag…",
    },
    {
        joke: "Debugging: Removing the needles from the haystack.",
    },

    {
        joke: "One hundred little bugs in the code\nOne hundred little bugs.\nFix a bug, link the fix in,\nOne hundred little bugs in the code.",
    },
    {
        joke: "We would have called your functions earlier, but we were in a `bind`",
    },
    {
        joke: "We're stronger <u> nited than <div> ided.",
    },
    {
        joke: "What did the colon say to the semicolon? Stop winking at me.",
    },
    {
        joke: "Why did the programmer quit her job? She didn't get arrays.",
    },
    {
        joke: "GF to BF : 💕 I'm the CSS to your HTML. ",
    },
    {
        joke: "How would you React if I said I love Vue?",
    },
    {
        joke: "If a groundhog inspects their Web Component, do they see their Shadow DOM?",
    },
    {
        joke: "Old programmers never die; they just lose some of their functions.",
    },
    {
        joke: "Promise you'll await for me.",
    },
    {
        joke: "The Pen is mightier than the sword.",
    },
    {
        joke: "Be the developer your linter thinks you are.",
    },

    {
        joke: "Who's loopier? A fruit loop or a for loop?",
    },
    {
        joke: "There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.",
    },
    {
        joke: "Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the science.",
    },
    {
        joke: '"We messed up the keming again guys."',
    },
    {
        joke: "I have a fish that can breakdance! Only for 20 seconds though, and only once.",
    },
    {
        joke: `Today I learned that changing random stuff until your program works is "hacky" and a "bad coding practice" but if you do it fast enough it's "Machine Learning" and pays 4x your current salary.`,
    },
    {
        joke: `Eight bytes walk into a bar.\n The bartender asks, "Can I get you anything?"\n"Yeah," reply the bytes.\n"Make us a double."`,
    },
    {
        joke: "The glass is neither half-full nor half-empty, the glass is twice as big as it needs to be.",
    },
    {
        joke: `Two C strings walk into a bar.\n The bartender asks "What can I get ya?"\nThe first string says "I'll have a gin and tonic."\nThe second string thinks for a minute, then says "I'll take a tequila sunriseJF()#$JF(#)$(@J#()$@#())!*FNIN!OBN134ufh1ui34hf9813f8h8384h981h3984h5F!##@"\nThe first string apologizes, "You'll have to excuse my friend, he's not null-terminated."`,
    },
    {
        joke: "I bought some shoes from a drug dealer. I don't know what he laced them with, but I was tripping all day!",
    },
    {
        joke: `I'll never forget my Granddad's last words to me just before he died. "Are you still holding the ladder?"`,
    },
    {
        joke: "Being a self-taught developer is almost the same as being a cut neck chicken because you have no sense of direction in the beginning.",
    },
    {
        joke: "I didn't vaccinate my 10 kids and the one that survived is fine!",
    },
    {
        joke: "Never date a baker. They're too kneady.",
    },
    {
        joke: `"Can I tell you a TCP joke?"\n"Please tell me a TCP joke."\n"OK, I'll tell you a TCP joke."`,
    },
    {
        joke: "A perfectionist walked into a bar... apparently, the bar was not set high enough.",
    },
    {
        joke: `I'll never forget my Granddad's last words to me just before he died. "Are you still holding the ladder?"`,
    },
    {
        joke: "I have a joke about trickle down economics, but 99% of you will never get it.",
    },
    {
        joke: "My grandfather says I'm too reliant on technology.\nI called him a hypocrite and unplugged his life support.",
    },
    {
        joke: "My parents raised me as an only child, which really annoyed my younger brother.",
    },
    {
        joke: "I was going to tell a dead baby joke. But I decided to abort.",
    },
    {
        joke: "The six stages of debugging:\n1. That can't happen.\n2. That doesn't happen on my machine.\n3. That shouldn't happen.\n4. Why does that happen?\n5. Oh, I see.\n6. How did that ever work?",
    },
    {
        joke: "Schrödinger's cat walks into a bar and doesn't.",
    },
    {
        joke: `A snail walks into a bar and the barman tells him there's a strict policy about having snails in the bar and so kicks him out. A year later the same snail re-enters the bar and asks the barman "What did you do that for?"`,
    },
    {
        joke: "A: Hey, man! Please call me a taxi.\nB: Yes, sir. You are a taxi.",
    },
    {
        joke: `"Why do you take baths in milk?"\n"I can't find a cow tall enough for a shower."`,
    },
    {
        joke: "If vegetarians eat vegetables, what do humanitarians eat?",
    },

    {
        joke: "If tin whistles are made of tin, what are fog horns made of?",
    },
    {
        joke: "Why do we park our car in the driveway and drive our car on the parkway?",
    },
    {
        joke: "My boss is so unpopular even his own shadow refuses to follow him.",
    },
    {
        joke: "I think someone's been Watering down my Whiskey but I don't have the Proof.",
    },
    {
        joke: "I just made some dandruff from scratch!",
    },
    {
        joke: "My friend said he saw a Bear on his way to work today but I wondered how he knew he was on his way to work.",
    },
    {
        joke: "Did you know 4 out of 3 people struggles with maths.",
    },

    {
        joke: "Any dog can be a guide dog, if you don't care where you're going.",
    },
    {
        joke: "Is it just me, or is a good camouflage expert hard to find.",
    },
    {
        joke: "When people call me attentive, I just ignore them",
    },
    {
        joke: "I ain't bragging, but I've just passed my Paintball test with flying colours.",
    },{
        joke: "I can’t believe I got fired from the calendar factory. All I did was take a day off.",
    },
    {
        joke: " Light travels faster than sound, which is the reason that some people appear bright before you hear them speak. ",
    },
    {
        joke: "ust burned 2,000 calories. That’s the last time I leave brownies in the oven while I nap.",
    },
    {
        joke: "Always borrow money from a pessimist. They’ll never expect it back.",
    },
    {
        joke: "I’m reading a book about anti-gravity. It’s impossible to put down.",
    },
    {
        joke: "‘Doctor, there’s a patient on line one that says he’s invisible.’\n‘Well, tell him I can’t see him right now.’",
    },
    {
        joke: "Atheism is a non-prophet organization.",
    },
    {
        joke: "A recent study has found that women who carry a little extra weight live longer than the men who mention it.",
    },
    // {
    //     joke: "",
    // },
    // {
    //     joke: "",
    // },
    // {
    //     joke: "",
    // },

    // {
    //     joke: "",
    // },
    // {
    //     joke: "",
    // },
    // {
    //     joke: "",
    // },
    // {
    //     joke: "",
    // },
    // {
    //     joke: "",
    // },
    // {
    //     joke: "",
    // },
    // {
    //     joke: "",
    // },
    // {
    //     joke: "",
    // },
    // {
    //     joke: "",
    // },
    // {
    //     joke: "",
    // },
    // {
    //     joke: "",
    // },
    // {
    //     joke: "",
    // },

    // {
    //     joke: "",
    // },
    // {
    //     joke: "",
    // },
    // {
    //     joke: "",
    // },
    // {
    //     joke: "",
    // },
    // {
    //     joke: "",
    // },
    // {
    //     joke: "",
    // },
    // {
    //     joke: "",
    // },
    // {
    //     joke: "",
    // },
    // {
    //     joke: "",
    // },
    // {
    //     joke: "",
    // },

    // {
    //     joke: "",
    // },
    // {
    //     joke: "",
    // },
    // {
    //     joke: "",
    // },
   
];

exports.jokes = jokes;