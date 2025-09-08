// Approach

/*
1. We can use brute force approach: it will check all possible combination and check the maximum profit but its not optimized. 
    Time Complexity = O(nsquare) it will use nested loops to check
2. Another approach
    a. Buying day should be the lowest price or the minimum
    b. So we will track the minimum price and check the max profit by maintaining the maxProfit in a variable
    c. will check
        if(price[i]<minPrice){
            minPrice = price[i]
        }else if(price[i] - minPrice > maxProfit){
                maxProfit = price[i]
        }
3. starting i from 1 because we can't buy and sell the stock on the same day
*/


const prices = [7,1,3,4,5,6,5]

function buyAndSellStock (prices) {
    let minPrice = prices[0]
    let maxProfit=0;

    for(let i=0; i<prices.length; i++){
        if(prices[i]<minPrice){
            minPrice = prices[i]
        }
        if(prices[i] - minPrice > maxProfit){
            maxProfit = prices[i] - minPrice
        }
    }
    return maxProfit
}

// Time Complexity = O(n)
// Space Complexity = O(1)

const result = buyAndSellStock(prices)
console.log(result);
