export function joinClassNames(...classNames: string[]): string {
    return classNames.join(" ");
}

export function toTitleCase(str: string): string {
    return str
        .split(" ")
        .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
        .join(" ");
}
