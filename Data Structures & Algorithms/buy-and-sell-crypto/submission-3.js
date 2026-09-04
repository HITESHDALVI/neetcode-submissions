class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
       let buy = 0, sell =1, profit=0;
    while(sell<prices.length){
        console.log(prices[buy],prices[sell])
        if(prices[buy]<prices[sell]){
            let currentPrice = prices[sell] - prices[buy];
            profit=Math.max(profit,currentPrice);
        }else{
            buy = sell;
        }
        sell++;
    }
    return profit
    }
}
