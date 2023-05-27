export function joinClassNames(...classNames: string[]): string {
    return classNames.join(" ");
}

export function toTitleCase(str: string): string {
    return str
        .split(" ")
        .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
        .join(" ");
}

export function createArray<T>(
    length = 0,
    fill:
        | ((_: undefined, i: number, array: undefined[]) => T)
        | T
        | undefined = undefined
): Array<T> {
    if (fill instanceof Function) {
        return Array(length).fill(undefined).map(fill);
    } else {
        return Array(length).fill(fill);
    }
}
