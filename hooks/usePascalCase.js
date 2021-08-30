export function usePascalCase(valueToPascalCase = ""){
    const splitted = valueToPascalCase.split(" ")
    const words = []
    let i = 0;
    for(i; i< splitted.length; i++){
            const firstLetter = splitted[i][0].toUpperCase()
            const splittedWord = splitted[i].substring(1)
            const mergedWord = firstLetter+splittedWord
            words.push(mergedWord)
    }
    return words.join(" ")
}