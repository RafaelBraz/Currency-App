export const getCurrency = (codes) => {
    
    const URL_API = "https://economia.awesomeapi.com.br/all/";
    for(let i = 0; i < codes.lenght; i++) {
        if(i == 0) {
            URL_API += `${codes[i]}-BRL`
        } else {
            URL_API += `,${codes[i]}-BRL`
        }
    }

    console.log(URL_API);

    fetch(URL_API)
        .then(res => res.json())
        .then(
            (result) => {
            },
            (error) => {
            }
        )
};