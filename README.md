PROJECT: HOGWARTS FOUR
LIVE SITE: https://relam24.github.io/Game/
SUMMARY: The classic game of Connect Four based on Hogwarts' Four House: Gryffindor, Hufflepuff, Ravenclaw, and Slytherin.

APPROACH:
Technologies Used: HTML, CSS, Javascript/JQuery. 
I was very focused on getting the HTML and CSS done the very first night, at least to the point that I had the board container set up and I could really focus on the Javascript. I wrapped almost everything in a DIV so I was able to grab all elements I would need (and then some) in JS. I created click listeners on the columns and focused on each column where one click would take me to the very bottom circle and two would take me to the one above that, etc. It worked out fairly nicely minus the fact that I was definitely repeating myself. I created another click event within that and added to each specific circle. After that, I focused on using the same concept and using clicks to figure out whose turn it was. I then used that to make an if, else if statement that if the click number was divisble by two, it would turn to one color.. otherwise a different color to simulate turns being taken. Once that was done, I focused on trying to make a win state by using a for loop and iterating over all circles in the column to check if they had the same class of color.

DESCRIPTION:
 Hogwarts Four is a take on the classic game of Connect Four but with the user's being immersed with Hogwarts culture. At Hogwarts, each house fights for house points--
 at then end of the year those points are counted up and the winning house obtains a great honor: The House Cup.
 This makes the user feel as though they are fighting to get points for their house, and not just playing Connect Four.
 Design: I designed the website to make it feel as though you are in Hogwarts. The board looks as though it is made of wood,
 the opening modal button that says "get sorted into your house" takes you immediately to The Great Hall where you are given information about the four houses and the concept
 of how you win and lose points. I added some subtle pictures that someone who really loves Harry Potter would appreciate.
 I also created a restart button in order to restart the game at any moment.
 I used flexbox to make the site as responsive as possible. No frameworks used.
 
 PLANNED FEATURES:
 I originally wanted to add an input value where you could choose which house you wanted to play for and which house you wanted to play against.
 I also had a fairly rough time in figuring out the win states. I definitely repeated myself in the coding significantly but I was very focused on 
 getting the functionality to work.
 
 I had a great time working on this project.
 
