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
      n: 10,
      max_tokens: 500
    });

    const text = response.data.choices[0].text

    let list = []

    let termRe = /(\n){1,2}([^:]*)/g;
    let defRe = /:([^\n]*)\n/g

    let front = text.match(termRe)
    let back = text.match(defRe)
  
    // Clean list
    if(back !== null && front !== null) {
      back = back.map((item) => (
        item.replace(/[:]|[.]|[\n]/g, "")
      ))
      front = front.map((item) => (
        item.replace(/[\n]|[\d]|[.]|[)]/g, "")
      ))

      for(let i = 0; i < front.length; i++) {
        if(
          typeof front[i] == "string" &&
          typeof back[i] == "string"
          ){
          list.push({
            front: front[i],
            back: back[i]
          })
        }
      }

      res.status(200).json({
        success: true,
        data: list
      })
    }

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