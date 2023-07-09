const questions = {
    python: [
        {
            question: " Print Hello, World! to the console",
            answer: " print(\"hello world\")."
        },
        {
            question: "Calculate the sum of two numbers and print the results",
            answer: "num1 = 5 , num = 2 , sum = num1 + num2 , print(\"sum\")",
        },
        {
            question: "Swap the values of two variables.",
            answer: "a = 5 , b = 3 , a,b = b,a , print(\"a\") , print(\"b\")",
        },
        {
            question: "Calculate the area of a rectangle width a given length and width.",
            answer: "length = 7 , width = 3 , area = length* width , print(\"area\") ",
        },
        {
            question: " Check if a number is even or odd.",
            answer: "number  = 10 , if number %2 ==0: , print(\"even\") else:print(\"odd\")"
        },
        {
            question: "Generate a list of even numbers between 1 and 20",
            answer: "even_numbers = [num for num in range(1, 21) if num % 2 == 0] print(\"even_numbers\")",
        },
        {
            question: "Calculate the factorial of a given number.",
            answer: "num = 5                                                factorial = 1                                                    for i in range(1, num + 1):                                factorial *= i                                                    print(\"The factorial of\", num, \"is\", factorial) ",
        },
        {
            question: "Write a programme  to find the length of a string.",
            answer: " string  = (\"hello world\")                    length = len(string)"
        },
        {
            question: "Write a programme to check if a number prime",
            answer: "number  = 7                                 is_prime = True                                          if number > 1                                         for i in range(2, int(num/2) + 1):                     if (num % i() == 0:                                    is_sum = False break                                     if is_prme :                                         print(\"number , \"is a prime number.\")               else:                                                   print(\"number, \"is not a prime number\")"
        },
        {
            question: "Write a programme to check if a string is a palindrome or not.",
            answer: "string = \"radar\"                       reversed_string = stri[::-1]                           if string == reversed_string:                            print(\"Palindrome\")                                    else:                                                    print(\"Not a palindrome\") "
        },
        {
            question: "Write a prpogramme to check if a string is a pngram.",
            answer: "import string                                   string = \"The quick brown fox jums over the lazy Dog\" alphabet = set(string.lower())                         if set(string.ascii_lower).issubset(alpahbet):         print(\"The string is a pangram\")                  else:                                                  print(\"The string is not a pangram)"
        },
        {
            question: "Write a program to find the GCD (Greatest Common Divisor) of two numbers.",
            answer: " import math                                   num1 = 12 num2 = 20                                   GCD = math.gcd(num1 , num2)                              print(\"gcd\")",
        },
        {
            question: " Write a program to check if a number is a perfect number..",
            answer: " number = 28                              divisors =[divisor for divisor in range(1, number)      if number % divisor == 0]                         sum_divisors = sum(divisors)                           if sum_divisors == number:                              print(number,\"is a perfect number.\")      else:                                                  print(number, \"is not perfect number.\")",
        },
        {
            question: "Write a program to find the median of a list of numbers.",
            answer: "import statistics                             numbers =[1, 2, 3, 4, 5]                                median = statistics.median(numbers)                   print(\"The median of the list of numbers is:\", median)",
        },
        {
            question: "Calculate the factorial of a given number.",
            answer: "num = 5                                      factorial = 1                                         for i in range(1, num + 1):                          factorial *= i                                       print(\"The factorial of\", num, \"is\", factorial) ",
        },

        {
            question: "Write a program to find the common elements between two lists.",
            answer: "list1 = [1, 2, 3, 4, 5] list2 =[4, 5, 6, 7, 8]common_elements = list(set(list1) & set(list2)) print(\"The common elements between the two lists are:\", common_elements)",
        },
        {
            question: "Write a program to check if a number is an Armstrong number.",
            answer: "number = 153 number_str = str(number) num_digits = len(number_str)                 armstrong_sum = sum(int(digit) ** num_digits for digit in number_str)                                             if number == armstrong_sum:                            print(number, \"is an Armstrong number.\")               else:                                                    print(number, \"is not an Armstrong number.\")",
        },
        {
            question: "Calculate the factorial of a given number.",
            answer: "num = 5 factorial = 1 for i in range(1, num + 1):factorial *= i  print(\"The factorial of\", num, \"is\", factorial) ",
        },
        {
            question: "Calculate the factorial of a given number.",
            answer: "num = 5 factorial = 1 for i in range(1, num + 1):factorial *= i  print(\"The factorial of\", num, \"is\", factorial) ",
        },
        {
            question: "Calculate the factorial of a given number.",
            answer: "num = 5 factorial = 1 for i in range(1, num + 1):factorial *= i  print(\"The factorial of\", num, \"is\", factorial) ",
        },
        {
            question: "Calculate the factorial of a given number.",
            answer: "num = 5 factorial = 1 for i in range(1, num + 1):factorial *= i  print(\"The factorial of\", num, \"is\", factorial) ",
        },
        {
            question: "Calculate the factorial of a given number.",
            answer: "num = 5 factorial = 1 for i in range(1, num + 1):factorial *= i  print(\"The factorial of\", num, \"is\", factorial) ",
        },
        {
            question: "Calculate the factorial of a given number.",
            answer: "num = 5 factorial = 1 for i in range(1, num + 1):factorial *= i  print(\"The factorial of\", num, \"is\", factorial) ",
        },
        {
            question: "Calculate the factorial of a given number.",
            answer: "num = 5 factorial = 1 for i in range(1, num + 1):factorial *= i  print(\"The factorial of\", num, \"is\", factorial) ",
        },
        {
            question: "Calculate the factorial of a given number.",
            answer: "num = 5 factorial = 1 for i in range(1, num + 1):factorial *= i  print(\"The factorial of\", num, \"is\", factorial) ",
        },
        {
            question: "Calculate the factorial of a given number.",
            answer: "num = 5 factorial = 1 for i in range(1, num + 1):factorial *= i  print(\"The factorial of\", num, \"is\", factorial) ",
        },
        {
            question: "Calculate the factorial of a given number.",
            answer: "num = 5 factorial = 1 for i in range(1, num + 1):factorial *= i  print(\"The factorial of\", num, \"is\", factorial) ",
        },
        {
            question: "Calculate the factorial of a given number.",
            answer: "num = 5 factorial = 1 for i in range(1, num + 1):factorial *= i  print(\"The factorial of\", num, \"is\", factorial) ",
        },
        {
            question: "Calculate the factorial of a given number.",
            answer: "num = 5 factorial = 1 for i in range(1, num + 1):factorial *= i  print(\"The factorial of\", num, \"is\", factorial) ",
        },
        {
            question: "Calculate the factorial of a given number.",
            answer: "num = 5 factorial = 1 for i in range(1, num + 1):factorial *= i  print(\"The factorial of\", num, \"is\", factorial) ",
        },
        {
            question: "Calculate the factorial of a given number.",
            answer: "num = 5 factorial = 1 for i in range(1, num + 1):factorial *= i  print(\"The factorial of\", num, \"is\", factorial) ",
        },
        {
            question: "Calculate the factorial of a given number.",
            answer: "num = 5 factorial = 1 for i in range(1, num + 1):factorial *= i  print(\"The factorial of\", num, \"is\", factorial) ",
        },
        {
            question: "Calculate the factorial of a given number.",
            answer: "num = 5 factorial = 1 for i in range(1, num + 1):factorial *= i  print(\"The factorial of\", num, \"is\", factorial) ",
        },
        {
            question: "Calculate the factorial of a given number.",
            answer: "num = 5 factorial = 1 for i in range(1, num + 1):factorial *= i  print(\"The factorial of\", num, \"is\", factorial) ",
        },
        {
            question: "Calculate the factorial of a given number.",
            answer: "num = 5 factorial = 1 for i in range(1, num + 1):factorial *= i  print(\"The factorial of\", num, \"is\", factorial) ",
        },




















    ],
    javascript: [
        {
            question: "What is the function used to add an element to an array in JavaScript?",
            answer: "push()",
        },
        {
            question: "What is the operator used for strict equality comparison in JavaScript?",
            answer: "===",
        },
        // Add more JavaScript questions here
    ],
    css: [
        {
            question: "How do you select an element with class 'myClass' in CSS?",
            answer: ".myClass",
        },
        {
            question: "What property is used to change the text color in CSS?",
            answer: "color",
        },
        // Add more CSS questions here
    ],
    html: [
        {
            question: "What is the tag used to define a paragraph in HTML?",
            answer: "<p>",
        },
        {
            question: "What is the attribute used to specify the URL of an image in HTML?",
            answer: "src",
        },
        // Add more HTML questions here
    ],
};

function loadQuestions() {
    const languageSelect = document.getElementById("languageSelect");
    const selectedLanguage = languageSelect.value;
    const questionsContainer = document.getElementById("questionsContainer");

    // Clear previous questions
    questionsContainer.innerHTML = "";

    // Load questions for the selected language
    if (selectedLanguage && questions[selectedLanguage]) {
        const selectedQuestions = questions[selectedLanguage];
        for (let i = 0; i < selectedQuestions.length; i++) {
            const question = selectedQuestions[i].question;
            const answer = selectedQuestions[i].answer;

            // Create question element
            const questionElement = document.createElement("div");
            questionElement.className = "question";
            questionElement.innerText = "Q" + (i + 1) + ": " + question;
            questionElement.style.color = "white"

            // Create answer element
            a = 40
            b = 50
            const answerElement = document.createElement("div");
            answerElement.className = "answer";
            answerElement.style.display = "none";
            answerElement.style.color = "black"
            answerElement.style.backgroundColor = "aqua"
            answerElement.innerText = "Answer: " + answer;

            // const MainEl = document.getElementById("main")
            // MainEl.styele.backgroundColor = "white"
            // MainEl.styele.color = "black"


            // Create button to show answer
            const answerButton = document.createElement("button");
            answerButton.innerText = "Show Answer";
            answerButton.addEventListener("click", function () {
                if (answerElement.style.display === "none") {
                    answerElement.style.display = "block";
                    answerButton.innerText = "Hide Answer";
                } else {
                    answerElement.style.display = "none";
                    answerButton.innerText = "Show Answer";
                }
            });

            // Append question, answer, and button to container
            questionsContainer.appendChild(questionElement);
            questionsContainer.appendChild(answerButton);
            questionsContainer.appendChild(answerElement);
        }
    }
}
