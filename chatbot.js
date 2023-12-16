const readline = require('readline');

const data = {
    'What is your name?': 'My name is nodeBot',
    'How are you?': 'I am good, thank you',
    'Are you smart?': 'Of course, I can answer 3 questions! :)',
    'Default': 'Sorry, I did not understand you!',
}

function getResponse(input) {
    for (const question in data) {
        if (input.toLowerCase().includes(question.toLowerCase())) {
            return data[question];
        }
    }

    return data['Default'];
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function startChat() {
    rl.question('Chatbot: Ask your question. Type "exit" to end the conversation!', userMessage => {
        if (userMessage.toLowerCase() === 'exit') {
            console.log('Chatbot: Goodbye!');
            rl.close();
        } else {
            const response = getResponse(userMessage);
            console.log(`Chatbot: ${response}`);
            startChat();
        }
        
    });

}

startChat();
