import Vue from 'vue';
import VueX from 'vuex';
import stocks from './modules/stocks.js';
import portfolio from './modules/portfolio.js';
import * as actions from './actions.js';


Vue.use(VueX);

export default new VueX.Store({
    actions,
    modules: {
        stocks, 
        portfolio
    }

});