class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let maxLen= nums.length;
  let count = 2;
  let result=[];

    while(count>0){
      for (let  i = 0; i < maxLen; i++) {
  
        result.push(nums[i]);
      }
       count--;
  }
  return result
    }
}
