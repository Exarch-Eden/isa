// id constants
const quotesContainerId = "quotesContainer";

window.onload = () => {
  renderQuotes();
}

/**
 * Renders the received quotes data.
 */
const renderQuotes = async () => {
  // container for the quotes
  const quotesContainer = document.getElementById(quotesContainerId);

  // execute GET method to grab the quotes from database
  const quotesData = await getQuotes();

  console.log("quotesData: ", quotesData);

  // put data into quotes container
  quotesData.map((curQuote, index) => {
    const individualQuoteContainer = document.createElement(CREATE_P);

    individualQuoteContainer.innerText = curQuote;

    quotesContainer.appendChild(individualQuoteContainer);
  });

}

const getQuotes = async () => {
  let quotesData = [];

  const apiKeySuffix = `?api_key=${apiKey}`;
  const quoteIdSuffix = `&quote_id=`;

  const quoteIds = [];
  const NUM_QUOTES = 1;

  // add quote ids to read from to a local array
  for (let index = 1; index < NUM_QUOTES; index++) {
    quoteIds[quoteIds.length] = i;
  }

  // append quote_id query parameter
  const originalUrl = crossOriginPrefix + baseAPILink + apiQuotes + apiKeySuffix + quoteIdSuffix;

  console.log("awaiting quotesData");
  
  for (let index = 0; index < NUM_QUOTES; index++) {
    const curQuoteId = NUM_QUOTES[index];
    console.log(`making request, index: ${curQuoteId}`);
    const urlToSend = originalUrl + curQuoteId;
    console.log(`link: \n${urlToSend}`);
    quotesData[index] = await makeRequest(GET, urlToSend);
  };

  return quotesData;
};
