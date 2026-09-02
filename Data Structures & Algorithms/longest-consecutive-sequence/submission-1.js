class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
       const set = new Set(nums);
    let ls = 0;
    for( const num of set){
        if(!set.has(num-1)){
            let cur = num;
            let s =1;
            while(set.has(cur+1)){
                cur +=1;
                s+=1;
            }
            ls= Math.max(ls,s);
        }
    }
    return ls
    }

}
