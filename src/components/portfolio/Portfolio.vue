<template>
    <div>
        <h2 v-show="!haveStocks">Your portfolio is empty. Go buy some stocks!</h2>
        <app-port-stock v-for="stock in stocks" :key="stock.key" :stock="stock" ></app-port-stock>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import Stock from './PortStocks.vue'
    export default {
        computed: {
            ...mapGetters({
                stocks: 'stockPortfolio'
            }),
            haveStocks(){
                if (this.stocks.length < 1){
                    return false;
                }else{
                    return true;
                }
            }
        },
        components:{
            appPortStock: Stock
        }
    
    }
</script>
