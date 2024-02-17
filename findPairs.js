

function findPairs(arr, target) {
    const pairs = [];
    const seenPairs = new Set(); // Set to keep track of seen pairs

    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];
        if (seenPairs.has(`${complement},${arr[i]}`) || seenPairs.has(`${arr[i]},${complement}`)) {
            // If the pair is already seen, skip
            continue;
        }
        if (arr.includes(complement)) {
            pairs.push([arr[i], complement]);
            seenPairs.add(`${arr[i]},${complement}`);
        }
        console.log({seenPairs})
    }

    return pairs;
}

const arr = [3, 1, 8, 1, 3, 1, 6];
console.log(findPairs(arr,7)); 

