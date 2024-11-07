{
    //

    const countWordOccurrences = (sentence: string, word: string): number => {

        let count: number = 0
        const arrOfWord: string[] = sentence.toLocaleLowerCase().split(" ")

        arrOfWord.forEach((item: string) => {
            if (item === word.toLocaleLowerCase()) {
                count += 1
            }
        })

        return count
    };

    //
}