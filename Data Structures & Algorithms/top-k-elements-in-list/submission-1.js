class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
    for(let i=0;i<nums.length;i++){
      map.set(nums[i],(map.get(nums[i])||0)+1);
    }
    const buckets = Array.from({length :nums.length+1},()=>[]);
    for(let [num,freq] of map){
      buckets[freq].push(num)
    }
    const result =[];
    for(let i= buckets.length-1;i>=0;i--){
      if(buckets[i].length>0){
        result.push(...buckets[i]);
      } 
      if(result.length===k){
        return result;
      }
    }
    return result
    }
}
