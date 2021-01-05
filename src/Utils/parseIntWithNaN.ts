export const parseIntWithNaN = (s: string): number => {
    const n = parseInt(s)
    return isNaN(n) ? 0 : n
}
