export function range(start: number, end: number, step: number) {
    var table = []
    for (let i=start; i<end; i=i+step) {
        table.push(i)
    }
    return table
}