class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
     const num = nums.length;
     let ans= new Array(num*2);
     for(let i=0; i<num;i++){
        ans[i]=nums[i];
        ans[i+num]=nums[i];
     }
     return ans
    }
}

