export const compare = (what: string, text: string): boolean => {
    let locText = text;
    let result = false;
    if (!what) {
        return true;
    }
    if (locText) {
        locText = locText.toLowerCase();
    }
    if (what && locText && locText.indexOf(what) >= 0) {
        result = true;
    }
    return result;
};
