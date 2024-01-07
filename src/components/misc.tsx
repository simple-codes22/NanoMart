export const ellipsize = (word: string): string => {
    if (word.length > 30) {
        const new_list = word.split('')
        return `${new_list.slice(0, 30).join('')}...`
    }
    return word
}