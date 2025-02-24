/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temp) {
    let n = temp.length;
    let stack = [];
    let answer = new Array(n).fill(0);

    for(let i = 0; i < n; i++)
    {
        while(stack.length > 0 && temp[i] > temp[stack[stack.length -1]])
        {
            let prevIndex = stack.pop();
            answer[prevIndex] = i - prevIndex;
        }
        stack.push(i);
    }
    return answer;
};