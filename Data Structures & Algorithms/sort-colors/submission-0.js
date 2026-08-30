class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let zero=0,two = nums.length-1, i=0;
        while(i<=two){
            if(nums[i]===2){
                [nums[i],nums[two]] = [nums[two],nums[i]]
                two--;
            }else if(nums[i]===0){
                [nums[i],nums[zero]]= [nums[zero],nums[i]]
                zero++;
                i++
            }else{
                i++
            }
        }
        return nums
    }
}
