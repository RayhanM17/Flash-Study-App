const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generateCards = async(req, res) => {
  const { prompt } = req.body;

  try{
    const response = await openai.createCompletion({
      model: "text-davinci-002",
      prompt,
      n: 1,
      max_tokens: 500
    });

    const list = response.data.choices

    res.status(200).json({
      success: true,
      data: list
    })
  } catch(error) {
    if(error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
    res.status(400).json({
      success: false,
      error: 'List could not be generated'
    })
  }
}

module.exports = {
  generateCards,
}