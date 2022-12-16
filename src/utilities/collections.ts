import { ISelectableOption } from "@fluentui/react";

export const updateSelection = (
    currentSelectedKeys: string[],
    item?: ISelectableOption
): string[] => {
    if (!item) {
        return currentSelectedKeys;
    }
    const newSelectedItems = [...currentSelectedKeys];
    if (item.selected) {
        // add the option if it's checked
        newSelectedItems.push(String(item.key));
    } else {
        // remove the option if it's unchecked
        const currIndex = newSelectedItems.indexOf(String(item.key));
        if (currIndex > -1) {
            newSelectedItems.splice(currIndex, 1);
        }
    }
    return newSelectedItems;
};

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
