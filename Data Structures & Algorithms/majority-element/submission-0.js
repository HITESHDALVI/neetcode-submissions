class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        // let max= -Infinity;
        // let maxKey= null;
        // const obj ={}
        // for(let i =0;i<nums.length;i++){
        //     obj[nums[i]]=(obj[nums[i]]||0)+1
        // }
        // for(let key in obj){
        //     if(obj[key]>max){
        //     maxKey =key
        //     }
        //     max = Math.max(max,obj[key])
        // }
        // return maxKey
          let res =0,count =0;
          for(let i=0;i<nums.length;i++){
            if(count ===0){
              res = nums[i]
            }
            count += (nums[i] === res) ? 1 : -1;    
          }
          return res
    }
}
