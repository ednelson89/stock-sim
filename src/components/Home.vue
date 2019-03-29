<template>
    <div>
        <h1>Stock Trading Simulator</h1>
        <p>You may save and load your stock portfolio if your dissatisfied with the performance of the stocks.</p>
        <p>Click on 'END DAY' to progress and see the next day's stock prices.</p>
        <hr>
        <p>Current Funds: {{funds | currency}} </p>
    </div>
</template>

<script>
export default {
    computed:{
        funds(){
            return this.$store.getters.funds;
        }
    }
}
</script>
