import React, { useContext, useState } from 'react';
import { View, Text } from 'react-native';

import Title from '../../components/title';
import Select from '../../components/select-button';
import Chart from './Chart';

import { Context } from '../../../Datas/context';
import { getLastDaysQuote } from '../../../Datas/api';
import Constants from '../../../Frontend/constants';

const Months = {
    'Jan': { number:  1, days: 31, lastMonth: 'Dec', },
    'Feb': { number:  2, days: 28, lastMonth: 'Jan', },
    'Mar': { number:  3, days: 31, lastMonth: 'Feb', },
    'Apr': { number:  4, days: 30, lastMonth: 'Mar', },
    'May': { number:  5, days: 31, lastMonth: 'Apr', },
    'Jun': { number:  6, days: 30, lastMonth: 'May', },
    'Jul': { number:  7, days: 31, lastMonth: 'Jun', },
    'Aug': { number:  8, days: 31, lastMonth: 'Jul', },
    'Sep': { number:  9, days: 30, lastMonth: 'Aug', },
    'Oct': { number: 10, days: 31, lastMonth: 'Sep', },
    'Nov': { number: 11, days: 30, lastMonth: 'Oct', },
    'Dec': { number: 12, days: 31, lastMonth: 'Nov', },
}

const calculateLastDays = (todayDay, todayMonth, numberOfDays=7) => {

    const zeroPad = (num, places) => String(num).padStart(places, '0');

    const printMonth = (month, number=true) => { return number ? zeroPad(Months[month].number, 2) : month };

    let days = [];
    for (let i = (numberOfDays - 1); i > 1; i--) { // Foram retiradas as iterações 0 e 1 pois elas representam, respectivamente, "hoje" e "ontem"
        if(todayDay - i <= 0) {
            days.push(`${zeroPad(Months[Months[todayMonth].lastMonth].days + (todayDay - i), 2)}/${printMonth(Months[todayMonth].lastMonth)}`);
        } else {
            days.push(`${zeroPad(todayDay - i, 2)}/${printMonth(todayMonth)}`);
        }
    }
    days.push('ontem');
    days.push('hoje');

    return days;
};

const Analytic = () => {
    const { baseCurrency, currenciesQuote } = useContext(Context);

    const [chartData, setChartData] = useState({
        labels: lastDays,
        datasets: [
            {
                data: [ 1, 1, 1, 1, 1, 1, 1, ],
                strokeWidth: 1,
            },
        ],
    });

    let today = Date(Date.now()).toString().split(' ');
    let lastDays = calculateLastDays(today[2], today[1]);

    const configChart = async (currencyCode) => {
        if(currencyCode === baseCurrency) {
            setChartData({
                labels: lastDays,
                datasets: [
                    {
                        data: [ 1, 1, 1, 1, 1, 1, 1, ],
                        strokeWidth: 1,
                    },
                ],
            });
        } else {
            
            let baseQuotesInBRL = Array(7).fill(1);
            if (baseCurrency !== 'BRL') {
                baseQuotesInBRL = await getLastDaysQuote(baseCurrency, 7);
            }
            
            let quotesInBRL = Array(7).fill(1);
            if (currencyCode !== 'BRL') {
                quotesInBRL = await getLastDaysQuote(currencyCode, 7);
            }

            let quotes = [];
            for (let i = 0; i < quotesInBRL.length; i++) {
                quotes.push(quotesInBRL[i]/baseQuotesInBRL[i]);
            }

            setChartData({
                labels: lastDays,
                datasets: [
                    {
                        data: quotes,
                        strokeWidth: 1,
                    },
                ],
            });
        }
    };

    return (
        <View style={{height: '100%', backgroundColor: Constants.theme.backgroud}}>
            <Title text={'Análise temporal'} />
            <Select initialCode={baseCurrency} onValueChange={configChart} />

            <Chart data={chartData}/>
        </View>
    );
};

export default Analytic;