/* Use Actions for state manipulations that first require Async behavior. */
import Vue from 'vue';

export const fetchData = function({commit}){
    Vue.http.get('data.json')
        .then(response => response.json())              //JSON-ifies the promised response
        .then(data =>{                                  //takes the data that is JSON-ified and sets it to local consts.
            if (data) {
                
                const stockPort = data.stockPort;
                const funds = data.funds;

                const stockList = data.stockList;       //packages the loaded stock listing
                const loadPortfolio = {                 //packages the loaded portfolio data
                    stockPort,
                    funds
                };

                commit('SET_STOCKS', stockList);        //passes the loaded stock listings to stock.js SET_STOCKS
                commit('SET_PORTFOLIO', loadPortfolio); //passes the loaded portfolio to portfolio.js SET_PORTFOLIO
            }
        });
};