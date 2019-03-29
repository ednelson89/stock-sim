const state = {
    funds:10000,    //total funds
    stocks:[]       //array of stocks that you own
};

const mutations = {
    'BUY_STOCK' (state, {stockId, quantity, stockPrice}){
        const record = state.stocks.find(element => element.id == stockId); //Compares the stockID to be purchased to the IDs in your state.stocks, if found, adds
                                                                            //to the record.
        if (record) {
            record.quantity += Number(quantity);                                     //if record has the id in question already, this just adds the new amount to the old.
        } else {                                                                    
            state.stocks.push({                                             //if not this pushes the ID and quantity of the new stock.
                id: stockId,
                quantity: Number(quantity)
            });
        }
        state.funds -= stockPrice * quantity;                               //Update funds
    },
    'SELL_STOCKS' (state, {stockId, quantity, stockPrice}){                     
        const record = state.stocks.find(element => element.id == stockId); //Same as BUY-STOCKS but for selling
        if (record.quantity > Number(quantity)) {
            record.quantity -= Number(quantity);
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1);           //deletes the stock id from the state.stocks array, based on the element id of record
        }
        state.funds += stockPrice * Number(quantity);
    },
    'SET_PORTFOLIO'(state, loadPortfolio){                                  //updates new funds and stock based on load data
        state.funds = loadPortfolio.funds;
        state.stocks = loadPortfolio.stockPort ? loadPortfolio.stockPort : [];
    } 
};

const actions = {
    sellStock({commit}, order){                                              //action performs SellStocks mutator.
        commit('SELL_STOCKS', order);
    }
};

const getters = {
    stockPortfolio (state, getters){
        return state.stocks.map(stock => {                                                  //returns a map of stocks(essentially creates a schema)
            const record = getters.getStocks.find(element => element.id ==stock.id);
            return {
                id: stock.id,                                                               //returns stock id, quantity from portfolio.js
                quantity: stock.quantity,   
                name: record.name,                                                          //returns name and price from stocks.js
                price: record.price
            }
        });
    },
    funds (state){
        return state.funds;
    }
};

export default{
    state,
    mutations,
    actions,
    getters
}