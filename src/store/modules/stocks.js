import stocks from '../../data/stocksData.js';

const state = {
    stocks: []
};

const mutations = {
    'SET_STOCKS' (state, stocks){
        state.stocks = stocks;
    },
    'RANDOM_STOCKS'(state){
        state.stocks.forEach(stock => {
            if (stock.price <= 900){
                    stock.price = Math.round(stock.price * (1 + Math.random() - 0.4));
                } 
        });
    }
};

 const actions = {
    buyStock({commit}, order){
        commit('BUY_STOCK', order);
    },
    initStocks({commit}){
        commit('SET_STOCKS', stocks);
    },
    ranStocks({commit}){
        commit('RANDOM_STOCKS');
    }
 };

 const getters = {
     getStocks(state){
        return state.stocks;
     }
 };

 export default {
     state,
     mutations,
     actions,
     getters
 }