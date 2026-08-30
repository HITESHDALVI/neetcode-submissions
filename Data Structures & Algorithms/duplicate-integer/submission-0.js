class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let obj={};
        for(let i=0;i<nums.length;i++){
            obj[nums[i]]=obj[nums[i]] ? obj[nums[i]]+1  : 1
        }
        for (let key in obj) {
          if(obj[key]>1){
              return true
          }
        }
        return false;
    }
}
