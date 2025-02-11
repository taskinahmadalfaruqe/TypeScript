{
    // Block Scoping
    function findPairs(nums: number[], target: number): number[][] {
        const seen = new Set<number>();
        const pairs = new Set<string>();
        const result: number[][] = [];

        for (const num of nums) {
            const complement = target - num;
            if (seen.has(complement)) {
                const pair = [num, complement].sort((a, b) => a - b);
                const pairKey = `${pair[0]},${pair[1]}`;

                if (!pairs.has(pairKey)) {
                    pairs.add(pairKey);
                    result.push(pair);
                }
            }
            seen.add(num);
        }

        return result;
    }

    // Example Usage
    const numbers = [1, 2, 3, 4, 5, 6, 7, 2, 3];
    const targetSum = 5;
    console.log(findPairs(numbers, targetSum)); // Output: [[1, 4], [2, 3]]
    // Block Scoping
}