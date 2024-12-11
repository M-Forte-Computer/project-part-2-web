// JavaScript for Fun Economic Quiz

document.addEventListener("DOMContentLoaded", () => {
    const quizForm = document.getElementById("quiz-form");
    const resultsDiv = document.getElementById("results");
    const scoreDisplay = document.getElementById("score");

    const questionBank = [
        { question: "What does GDP stand for?", options: ["Gross Domestic Product", "Global Development Plan", "General Domestic Policy"], answer: "Gross Domestic Product" },
        { question: "What is inflation?", options: ["Increase in the price of goods and services", "Reduction in the purchasing power of currency", "Both of the above"], answer: "Both of the above" },
        { question: "What is a free market?", options: ["An economic system with minimal government intervention", "A market where goods are given away for free", "A market controlled entirely by the government"], answer: "An economic system with minimal government intervention" },
        { question: "What is the primary goal of monetary policy?", options: ["Control inflation", "Increase taxes", "Reduce government spending"], answer: "Control inflation" },
        { question: "What is the main source of government revenue?", options: ["Taxes", "Loans", "Exports"], answer: "Taxes" },
        { question: "What is a trade deficit?", options: ["When a country imports more than it exports", "When a country exports more than it imports", "When trade is balanced"], answer: "When a country imports more than it exports" },
        { question: "What does CPI stand for?", options: ["Consumer Price Index", "Cost Production Index", "Commodity Price Increase"], answer: "Consumer Price Index" },
        { question: "What is a progressive tax?", options: ["Tax rate increases as income increases", "Tax rate decreases as income increases", "Flat tax rate regardless of income"], answer: "Tax rate increases as income increases" },
        { question: "What is opportunity cost?", options: ["The cost of the next best alternative", "The cost of lost opportunities", "The cost of production"], answer: "The cost of the next best alternative" },
        { question: "What is hyperinflation?", options: ["Extremely rapid inflation", "Steady inflation", "Deflation"], answer: "Extremely rapid inflation" },
        { question: "What is the role of central banks?", options: ["Manage monetary policy", "Increase government spending", "Control private banks"], answer: "Manage monetary policy" },
        { question: "What is fiscal policy?", options: ["Government spending and taxation", "Regulation of markets", "Monetary supply adjustments"], answer: "Government spending and taxation" },
        { question: "What is a recession?", options: ["A period of economic decline", "A period of economic growth", "A period of stable economy"], answer: "A period of economic decline" },
        { question: "What does 'scarity' mean in economics?", options: ["Limited resources", "Abundant resources", "Excess production"], answer: "Limited resources" },
        { question: "What is a tariff?", options: ["A tax on imports or exports", "A subsidy to local businesses", "An economic barrier"], answer: "A tax on imports or exports" },
        { question: "What does 'demand' refer to?", options: ["Consumer willingness to buy goods", "Producer supply of goods", "Market regulations"], answer: "Consumer willingness to buy goods" },
        { question: "What is the black market?", options: ["Illegal buying and selling of goods", "A regulated market", "A free market"], answer: "Illegal buying and selling of goods" },
        { question: "What is economic growth?", options: ["Increase in a country's production of goods and services", "Increase in inflation", "Increase in population"], answer: "Increase in a country's production of goods and services" },
        { question: "What is a subsidy?", options: ["Government financial support to businesses", "Tax on exports", "Cost of production"], answer: "Government financial support to businesses" },
        { question: "What is the primary goal of a free market economy?", options: ["Maximize individual choices", "Control prices", "Regulate businesses"], answer: "Maximize individual choices" }
    ];

    const generateQuiz = () => {
        const selectedQuestions = questionBank.sort(() => 0.5 - Math.random()).slice(0, 10);
        selectedQuestions.forEach((item, index) => {
            const section = document.createElement("section");
            section.classList.add("quiz-section");

            const questionTitle = document.createElement("h2");
            questionTitle.textContent = `${index + 1}. ${item.question}`;
            section.appendChild(questionTitle);

            item.options.forEach((option) => {
                const label = document.createElement("label");
                const input = document.createElement("input");
                input.type = "radio";
                input.name = `q${index + 1}`;
                input.value = option;
                input.required = true;
                label.appendChild(input);
                label.append(option);
                section.appendChild(label);
                section.appendChild(document.createElement("br"));
            });

            quizForm.insertBefore(section, quizForm.querySelector("button"));
        });

        // Store correct answers for validation
        quizForm.dataset.correctAnswers = JSON.stringify(selectedQuestions.map(q => q.answer));
    };

    quizForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const correctAnswers = JSON.parse(quizForm.dataset.correctAnswers);
        const formData = new FormData(quizForm);
        let score = 0;

        formData.forEach((value, key) => {
            const questionIndex = parseInt(key.replace("q", "")) - 1;
            if (correctAnswers[questionIndex] === value) {
                score++;
            }
        });

        quizForm.style.display = "none";
        resultsDiv.style.display = "block";

        const totalQuestions = correctAnswers.length;
        scoreDisplay.textContent = `You scored ${score} out of ${totalQuestions}!`;

        if (score === totalQuestions) {
            scoreDisplay.textContent += " 🎉 Perfect score! You're an economic genius!";
        } else if (score >= totalQuestions / 2) {
            scoreDisplay.textContent += " 👍 Great job! Keep learning.";
        } else {
            scoreDisplay.textContent += " 😅 Don't worry, try again!";
        }
    });

    generateQuiz();
});