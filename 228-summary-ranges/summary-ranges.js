/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const result = [];

    for(let i = 0; i < nums.length; i++)
    {
        let end = i;
        while(nums[end + 1] === nums[end] + 1)
        {
            end++;
        }

        if(end > i)
        {
            result.push(`${nums[i]}->${nums[end]}`);
        } else {
            result.push(`${nums[i]}`);
        }
        i = end;
    }
    return result;
};