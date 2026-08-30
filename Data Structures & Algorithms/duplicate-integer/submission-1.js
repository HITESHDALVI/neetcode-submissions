class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const set = new Map();
        for(let i=0;i<nums.length;i++){
            const exists = set.get(nums[i]);
            if(exists){
                set.set(nums[i], exists +1);
            }else{
                set.set(nums[i], 1);
            }
              }
         for (const [key, value] of set) {
          if(value>1){
              return true
          }
        }
        return false;
    }
}
