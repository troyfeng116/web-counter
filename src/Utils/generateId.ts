export const generateId = (len: number): string => {
    const choices = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
        options = 62
    let str = ''
    for (let i = 0; i < len; i++) {
        str += choices[Math.floor(Math.random() * options)]
    }
    return str
}
