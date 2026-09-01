class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result =[];
  const n=nums.length;
  let leftProd=1;
  for(let i=0;i<n;i++){
    result[i]=leftProd;
    leftProd*=nums[i]
  }
  let right=1;
  for(let i=n-1;i>=0;i--){
result[i]*=right;
right *= nums[i];
  }
  return result; 
    }
}
