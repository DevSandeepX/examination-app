export const instructions = [
    "Valid Roll Number: Only users with a valid roll number are allowed to access the exam. Roll number must be entered correctly to proceed with the login.",
    "Login Timeout: After 15 minutes of inactivity, the user session will automatically expire, requiring re-login.",
    "Exam Duration: The total time allotted for the DCA exam is 2 hours. Once the user starts the exam, the timer starts automatically.",
    "Attempting Questions: Users can attempt all 100 multiple-choice questions. Once an answer is submitted, it cannot be changed.",
    "Question Navigation: Users can navigate between questions freely, but answers must be submitted individually. A 'Mark for Review' option is available to flag questions for later review.",
    "Randomized Question Order: The order of questions will be randomized for each user to ensure fairness.",
    "Multiple Attempts: Each user can attempt the exam only once. After submission, users cannot retake the exam for the same session.",
    "Scoring: Each correct answer will receive a fixed number of points (e.g., 1 point per question). Incorrect answers may not result in a penalty, but unanswered questions will not be scored.",
    "Internet Access: Users must have a stable internet connection to take the exam. Any network disruptions may result in the exam being paused and/or invalidated.",
    "Exam Submission: Once the user has answered all questions or the exam time expires, the exam will be automatically submitted. No changes can be made after the exam is submitted."
];


export const userDetails = 
    {name:"Sandeep", roll_number:"GO1234",subject:"O Level",isExamFinished:false,profile_img:"https://stock.adobe.com/search?k=indian+school+students"}


    export const questions = [
        {
            question: "What is the capital of France?",
            option1: "Berlin",
            option2: "Paris",
            option3: "Madrid",
            option4: "Rome",
            answer: 2
        },
        {
            question: "Which planet is known as the Red Planet?",
            option1: "Earth",
            option2: "Venus",
            option3: "Mars",
            option4: "Jupiter",
            answer: 3
        },
        {
            question: "What is the largest ocean on Earth?",
            option1: "Atlantic Ocean",
            option2: "Indian Ocean",
            option3: "Arctic Ocean",
            option4: "Pacific Ocean",
            answer: 4
        },
        {
            question: "Who developed the theory of relativity?",
            option1: "Isaac Newton",
            option2: "Albert Einstein",
            option3: "Galileo Galilei",
            option4: "Nikola Tesla",
            answer: 2
        },
        {
            question: "What is the chemical symbol for gold?",
            option1: "Ag",
            option2: "Au",
            option3: "Pb",
            option4: "Fe",
            answer: 2
        },
        {
            question: "Which country is famous for the Great Wall?",
            option1: "India",
            option2: "Japan",
            option3: "China",
            option4: "South Korea",
            answer: 3
        },
        {
            question: "What is the square root of 64?",
            option1: "6",
            option2: "7",
            option3: "8",
            option4: "9",
            answer: 3
        },
        {
            question: "Who wrote 'Romeo and Juliet'?",
            option1: "Charles Dickens",
            option2: "William Shakespeare",
            option3: "Jane Austen",
            option4: "Mark Twain",
            answer: 2
        },
        {
            question: "Which gas do plants absorb from the atmosphere?",
            option1: "Oxygen",
            option2: "Carbon Dioxide",
            option3: "Nitrogen",
            option4: "Hydrogen",
            answer: 2
        },
        {
            question: "Which continent is the largest by land area?",
            option1: "Africa",
            option2: "North America",
            option3: "Asia",
            option4: "Europe",
            answer: 3
        }
    ];
    