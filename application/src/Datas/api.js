export const getCurrency = async (codes) => {
    
    // Monta a URL de acordo com as moedas selecionadas para a aplicação
    var URL_API = "https://economia.awesomeapi.com.br/all/";
    for(let i = 0; i < codes.length; i++) {
        if(i == 0) {
            URL_API += `${codes[i]}-BRL`
        } else {
            URL_API += `,${codes[i]}-BRL`
        }
    }
    console.log(URL_API);

    // Faz a requisição das cotações
    const response = await fetch(URL_API);
    const result = await response.json();

    // Cria objeto com as cotações de cada moeda
    let quotes = {};
    Object.keys(result).forEach(currency => {
        quotes[currency] = parseFloat(result[currency].bid)
    });
    quotes['BRL'] = 1
    console.log('resultado: ', quotes);

    return quotes;
};

export const getLastDaysQuote = async (currency, numberOfDays = 7) => {

    // Monta a URL com a moeda selecionada e com o número de dias dado
    var URL_API = `https://economia.awesomeapi.com.br/json/daily/${currency}-BRL/${numberOfDays}`;
    console.log(URL_API);

    // Faz a requisição das cotações
    const response = await fetch(URL_API);
    const result = await response.json();

    // Cria um objeto com apenas as cotações diárias da moeda selecionada
    let quotes = [];
    result.forEach(day => {
        quotes.push(parseFloat(day.bid));
    });

    return quotes;
};

/**
 * Estrutura de retorno da API:
 * {
 *      "USD": {
 *          "ask": "5.7847", 
 *          "bid": "5.7842", 
 *          "code": "USD", 
 *          "codein": "BRL", 
 *          "create_date": "2020-05-11 09:53:36", 
 *          "high": "5.7991", 
 *          "low": "5.7329", 
 *          "name": "Dólar Comercial", 
 *          "pctChange": "0.92", 
 *          "timestamp": "1589201612", 
 *          "varBid": "0.0525"
 *      }
 *  }
 * 
 * Estrutura usada na aplicação:
 * {
 *      "USD": 5.7842
 * }
 */