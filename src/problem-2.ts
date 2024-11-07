{
    //

    const removeDuplicates = (numbers: number[]): number[] => {
        let resultArr: number[] = [];
        numbers.forEach((num: number) => {
            if (!resultArr.includes(num)) {
                resultArr.push(num)
            }
        })

        return resultArr
    };

    //
}