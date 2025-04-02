const analyzeArray = (arr) => {
    let object = {
    };
    let sum = 0;
    let min = 2e9; 
    let max = -2e9;
    for (let i = 0; i < arr.length; ++i) {
        sum += arr[i];
        min = Math.min(min, arr[i]);
        max = Math.max(max, arr[i]);
    }
    object.average = sum / arr.length; 
    object.min = min;
    object.max = max;
    object.length = arr.length;
    return object;
};

module.exports = analyzeArray;