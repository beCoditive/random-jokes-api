const quotes = [
    {
        quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    },
    {
        quote: "Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.",
    },
    {
        quote: "The most disastrous thing that you can ever learn is your first programming language.",
    },
    {
        quote: "The most important property of a program is whether it accomplishes the intention of its user.",
    },
    {
        quote: "A conscious human is driven by their conscience, not popular opinion.",
    },
    {
        quote: "There is no CTRL Z in life.",
    },

    {
        quote: "Learning to code is useful no matter what your career ambitions are.",
    },
    {
        quote: "Programmer: A machine that turns coffee into code.",
    },

    {
        quote: "Computers are fast; programmers keep it slow.",
    },
    {
        quote: "When I wrote this code, only God and I understood what I did. Now only God knows.",
    },
    {
        quote: "Copy-and-Paste was programmed by programmers for programmers actually.",
    },
    {
        quote: "Always code as if the person who ends up maintaining your code will be a violent psychopath who knows where you live.",
    },
    {
        quote: "There are two ways to write error-free programs; only the third works.",
    },
    {
        quote: "No code has zero defects.",
    },
    {
        quote: "Remember that there is no code faster than no code.",
    },
    {
        quote: "The best thing about a boolean is even if you are wrong, you are only off by a bit.",
    },
    {
        quote: "I think Microsoft named .Net so it wouldn’t show up in a Unix directory listing.",
    },
    {
        quote: "It’s not a bug – it’s an undocumented feature.",
    },
    {
        quote: "Deleted code is debugged code.",
    },
    {
        quote: "The cheapest, fastest, and most reliable components are those that aren’t there.",
    },
    {
        quote: "Don’t worry if it doesn’t work right. If everything did, you’d be out of a job.",
    },
    {
        quote: "First, solve the problem. Then, write the code.",
    },
    {
        quote: "Java is to JavaScript what car is to Carpet.",
    },
    {
        quote: "Ruby is rubbish! PHP is phpantastic!",
    },
    {
        quote: "Fix the cause, not the symptom.",
    },
    {
        quote: "Make it work, make it right, make it fast.",
    },
    {
        quote: "You should name a variable using the same care with which you name a first-born child.",
    },
    {
        quote: "Any code of your own that you haven’t looked at for six or more months might as well have been written by someone else.",
    },
    {
        quote: "Every time you write a comment, you should grimace and feel the failure of your ability of expression.",
    },
    {
        quote: "When you see commented-out code, delete it!",
    },
    {
        quote: "Obsolete comments are worse than no comments.",
    },
    {
        quote: "Comments are often lies waiting to happen. Code should speak for itself whenever possible.",
    },
    {
        quote: "Programmers must avoid leaving false clues that obscure the meaning of code.",
    },
    {
        quote: "Clean code always looks like it was written by someone who cares.",
    },
    {
        quote: "Simplicity is prerequisite for reliability.",
    },
    {
        quote: "If you’re good at the debugger it means you spent a lot of time debugging. I don’t want you to be good at the debugger.",
    },
    {
        quote: "Practice, Practice, Practice! Musicians don’t only play when they are on stage in front of an audience.",
    },
    {
        quote: "So much complexity in software comes from trying to make one thing do two things.",
    },
    {
        quote: "You want it in one line? Does it have to fit in 80 columns?",
    },
    {
        quote: "There’s nothing more permanent than a temporary hack.",
    },
    {
        quote: "Of course bad code can be cleaned up. But it’s very expensive.",
    },
    {
        quote: "Repetition is the root of all software evil.",
    },
    {
        quote: "It can be better to copy a little code than to pull in a big library for one function. Dependency hygiene trumps code reuse.",
    },
    {
        quote: "There are only two hard things in Computer Science: cache invalidation and naming things.",
    },
    {
        quote: "Code is like humor. When you have to explain it, it’s bad.",
    },
    {
        quote: "Pasting code from the Internet into production code is like chewing gum found in the street.",
    },
    {
        quote: "Weeks of coding can save you hours of planning.",
    },
    {
        quote: "Plans are worthless, but planning is everything.",
    },
    {
        quote: "Never trust a computer you can’t throw out a window.",
    },
    {
        quote: "Java is to JavaScript as ham is to hamster.",
    },
    {
        quote: "A good programmer looks both ways before crossing a one-way street.",
    },
    {
        quote: "They have computers, and they may have other weapons of mass destruction.",
    },
    {
        quote: "Computers are useless.  They can only give you answers",
    },
    {
        quote: "The question of whether computers can think is like the question of whether submarines can swim.",
    },
    {
        quote: "Hardware: The parts of a computer system that can be kicked.",
    },
    {
        quote: "The Web is like a dominatrix.  Everywhere I turn, I see little buttons ordering me to Submit.",
    },
    {
        quote: "A programming language is for thinking about programs, not for expressing programs you've already thought of. It should be a pencil, not a pen",
    },
    {
        quote: "  Don't comment bad code - rewrite it.",
    },
    {
        quote: "One of my most productive days was throwing away 1000 lines of code.",
    },
    {
        quote: "One main'scrappy software is another man's full time job.",
    },

    {
        quote: "Walking on water and developing software from a specification are easy if both are frozen.",
    },
    {
        quote: "System programmers are the high priests of a low cult. ",
    },
    {
        quote: "The computer was born to solve problems that did not exist before.",
    },
    {
        quote: "Real programmers don't comment their code. If it was hard to write, it should be hard to understand.",
    },
    {
        quote: "We have to stop optimizing for programmers and start optimizing for users. ",
    },
    {
        quote: "If you optimize everything, you will always be unhappy. ",
    },
    {
        quote: "Talk is cheap.Show me the code. ",
    },
    {
        quote: "First, solve the problem.Then write the code.",
    },
    {
        quote: "Small minds are concerned with the extraordinary, great minds with the ordinary.",
    },
    {
        quote: "The purpose of software engineering is to control complexity, not to create it.",
    },
    {
        quote: "esting can only prove the presence of bugs, not their absence.",
    },
    {
        quote: "You might not think that programmers are artists, but programming is an extremely creative profession. It's logic-based creativity.",
    },
    {
        quote: "Every programmer is an author.",
    },
    {
        quote: "In software, the most beautiful code, the most beautiful functions, and the most beautiful programs are sometimes not there at all.",
    },
    {
        quote: "There are 10 types of people in this world, those who understand binary and those who don't.",
    },
    {
        quote: "Code never lies, comments sometimes do.",
    },
    {
        quote: "Linux is only free if your time has no value.",
    },
    {
        quote: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code",
    },
    {
        quote: "Premature optimization is the root of all evil.",
    },
    {
        quote: "No one in the brief history of computing has ever written a piece of perfect software. It's unlikely that you'll be the first.",
    },
    {
        quote: "What one programmer can do in one month, two programmers can do in two months.",
    },
    {
        quote: "Simplicity is prerequisite for reliability.",
    },
    {
        quote: "The value of a prototype is in the education it gives you, not in the code itself.",
    },
    {
        quote: "Software being 'Done' is like lawn being 'Mowed'.",
    },

];

exports.quotes = quotes;