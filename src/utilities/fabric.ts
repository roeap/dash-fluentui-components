/* eslint no-magic-numbers: 0*/
/**
 * Remove the anchor link from a full page URL or a hash.
 * Preserves any route path specified in the URL.
 * Behavior with more than two # in the URL is unspecified.
 * If there's a query string after the hash (not technically valid but possible with hash routing),
 * also removes that.
 */
export function removeAnchorLink(url: string): string {
    // First group: most of the URL
    // Second group: optional last hash with only word or dash characters following (an anchor)
    // Third group: optional post-hash query string
    const match = url.match(/^(.*?)((#[\w-]*)(\?.*)?)$/);
    if (match) {
        return match[1];
    }
    return url;
}

export const uuid = (): string => {
    let nbr = 0;
    let randStr = "";
    do {
        randStr += (nbr = Math.random()).toString(16).substr(2);
    } while (randStr.length < 30);

    // tslint:disable-next-line: no-bitwise
    return [
        randStr.substr(0, 8),
        "-",
        randStr.substr(8, 4),
        "-4",
        randStr.substr(12, 3),
        "-",
        (((nbr * 4) | 0) + 8).toString(16),
        randStr.substr(15, 3),
        "-",
        randStr.substr(18, 12),
    ].join("");
};
