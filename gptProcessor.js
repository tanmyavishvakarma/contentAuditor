const { ChatOpenAI } = require("@langchain/openai");
const { HumanMessage, SystemMessage } = require("@langchain/core/messages");

const model = new ChatOpenAI({
    temperature: 0.2,
    modelName: "gpt-4",
    apiKey: 'some key'
});

async function getSuggestions(sentence) {
    try {
        const response = await model.invoke([
            new SystemMessage(`You're a UX content expert. For the following sentence, provide exactly 2 improvement suggestions focused on clarity, compliance, and user experience. The output should be improved version of the original sentence. They should improve calrity, user experience and should follow the compliance rules. Format as:
      1. First suggestion
      2. Second suggestion
      3. Brief small concise text of what you changed and why did you do it

      The output should be in the form that a user can direcly copy paste it for the document.
                `),
            new HumanMessage(`Sentence: "${sentence}"`)
        ]);

        const suggestionText = response.content;
        const lines = suggestionText.split('\n')
            .filter(line => /^\d+\./.test(line))
            .map(line => line.replace(/^\d+\.\s*/, '').trim());
        const suggestions = lines.slice(0, 2);
        const reason = lines[2] || 'No reason provided';

        return {
            suggestions: suggestions.length === 2 ? suggestions : ['Need manual intervention'],
            reason: reason
        };
    } catch (error) {
        console.error(`Error getting suggestions for sentence: ${sentence}`, error);
        return {
            suggestions: ['Error generating suggestion', 'Error generating suggestion'],
            reason: 'Error occurred while generating suggestions'
        };
    }
}

module.exports = { getSuggestions };