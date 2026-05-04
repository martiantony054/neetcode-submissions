class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let i =0;
        let j =1;
        nums.sort((a,b)=>a-b)
        while(j<nums.length)
        {
            if(nums[j]===nums[j-1])
            {
               
                return true;
            } 
             j++;
             i++;   
        }

        return false
     
    }
}
