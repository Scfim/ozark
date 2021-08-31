export function useCamelCase(valueToCamelCase = ""){
    const splitted = valueToCamelCase.split(" ")
    const words = []
    let i = 0;
    for(i; i< splitted.length; i++){
        if(i === 0){
            words.push(splitted[0])
        }else{
            const firstLetter = splitted[i][0].toUpperCase()
            const splittedWord = splitted[i].substring(1)
            const mergedWord = firstLetter+splittedWord
            words.push(mergedWord)
        }
    }
    return words.join(" ")
}