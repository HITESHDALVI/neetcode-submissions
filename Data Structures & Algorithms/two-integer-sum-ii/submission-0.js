class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, k) {
        let left = 0,right = numbers.length-1;
        while(left<right){
            const sm = numbers[left]+numbers[right];
            if(sm=== k){
                return [left+1,right+1]
            }else if(sm>k){
                right--;
            }else if(sm<k){
                left++;
            }
        }
        return -1
    }
}
