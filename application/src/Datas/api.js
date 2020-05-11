export const getCurrency = async (codes) => {
    
    var URL_API = "https://economia.awesomeapi.com.br/all/";
    for(let i = 0; i < codes.length; i++) {
        if(i == 0) {
            URL_API += `${codes[i]}-BRL`
        } else {
            URL_API += `,${codes[i]}-BRL`
        }
    }

    console.log(URL_API);

    let quotes = {};
    const response = await fetch(URL_API);
    const result = await response.json();
    Object.keys(result).forEach(currency => {
        quotes[currency] = parseFloat(result[currency].bid)
    });
    quotes['BRL'] = 1
    console.log('resultado: ', quotes);
    return quotes;
};

// {
//     "EUR": {
//         "ask": "6.259", 
//         "bid": "6.2579", 
//         "code": "EUR", 
//         "codein": "BRL", 
//         "create_date": "2020-05-11 09:53:37", 
//         "high": "6.2761",
//         "low": "6.1966", 
//         "name": "Euro", 
//         "pctChange": "0.71", 
//         "timestamp": "1589201613", 
//         "varBid": "0.0439"
//     }, 
//     "USD": {
//         "ask": "5.7847", 
//         "bid": "5.7842", 
//         "code": "USD", 
//         "codein": "BRL", 
//         "create_date": "2020-05-11 09:53:36", 
//         "high": "5.7991", 
//         "low": "5.7329", 
//         "name": "Dólar Comercial", 
//         "pctChange": "0.92", 
//         "timestamp": "1589201612", 
//         "varBid": "0.0525"
//     }
// }