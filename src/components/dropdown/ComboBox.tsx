import React, { useCallback, useState } from "react";
import {
    ComboBox as FabricComboBox,
    VirtualizedComboBox,
    DropdownMenuItemType,
    Label,
} from "@fluentui/react";
import {
    DashComponentProps,
    DashLoadingState,
    StyledComponentProps,
    Option,
} from "../../props";

type Props = {
    /**
     * If true, the dropdown is disabled and can't be clicked on.
     */
    disabled: boolean;
    /**
     * A label to be displayed above the dropdown component.
     */
    label?: string;
    /**
     * A string value to be displayed if no item is selected.
     */
    placeholder?: string;
    /**
     * The value of the input. If `multi` is false (the default)
     * then value is just a string that corresponds to the values
     * provided in the `options` property. If `multi` is true, then
     * multiple values can be selected at once, and `value` is an
     * array of items with values corresponding to those in the
     * `options` prop.
     */
    value?: string | number | string[] | number[];
    /**
     * Configuration for individual choices within the choice group
     */
    options?: Option[];
    /**
     * If true, the user can select multiple values
     */
    multi?: boolean;
    /**
     * If true, VirtualizedComboBox is used. Most useful when
     * there are al lot of options to display.
     */
    virtualized?: boolean;

    /**
     * Whether the ComboBox is free form, meaning that the user input
     * is not bound to provided options. Defaults to false.
     */
    allow_freeform?: boolean;

    /**
     * Whether the ComboBox auto completes. As the user is inputting text,
     * it will be suggested potential matches from the list of options.
     * If the combo box is expanded, this will also scroll to the suggested option,
     * and give it a selected style.
     */
    auto_complete?: "on" | "off";

    /**
     * Whether to use the ComboBoxes width as the menu's width.
     */
    use_combo_box_as_menu_width?: boolean;

    /**
     * Menu will not be created or destroyed when opened or closed, instead it will be hidden.
     * This will improve perf of the menu opening but could potentially impact overall perf by
     * having more elements in the dom. Should only be used when perf is important.
     * Note: This may increase the amount of time it takes for the comboBox itself to mount.
     */
    persist_menu?: boolean;
    /**
     * Object that holds the loading state object coming from dash-renderer
     */
    loading_state?: DashLoadingState;
} & DashComponentProps &
    StyledComponentProps;

const transformOption = (option: Option) => {
    if ("value" in option) {
        return {
            key: option.value,
            text: option.label,
            disabled: option.disabled,
            data: { icon: option.icon },
        };
    } else if ("icon" in option) {
        // @ts-expect-error TODO
        option.data = { icon: option.icon };
    }
    return option;
};

const generateOptions = (options) => {
    // reduce function to merge lists and insert separator element
    const reducer = (accumulator, currentValue) => [
        ...accumulator,
        { key: "divider", text: "-", itemType: DropdownMenuItemType.Divider },
        ...currentValue,
    ];
    let newOptions = [];
    if (!Array.isArray(options)) {
        // generate a list containing component specific elements for
        // creating headers and separators in the dropdown options list
        const prunedOptions = Object.entries(options).map(([key, value]) => {
            const options = [
                {
                    key: key.toLowerCase() + "Header",
                    text: key,
                    itemType: DropdownMenuItemType.Header,
                },
            ];
            // @ts-expect-error TODO
            options.push(...value.map(transformOption));
            return options;
        });
        newOptions = prunedOptions.reduce(reducer);
    } else {
        newOptions = options.map(transformOption);
    }
    return newOptions;
};

/**
 * ## Overview
 *
 * A ComboBox is a list in which the selected item is always visible, and the others
 * are visible on demand by clicking a drop-down button or by typing in the input
 * (unless allowFreeform and autoComplete are both false). They are used to simplify
 * the design and make a choice within the UI. When closed, only the selected item is
 * visible. When users click the drop-down button, all the options become visible.
 * To change the value, users open the list and click another value or use the arrow
 * keys (up and down) to select a new value. When collapsed if autoComplete and/or
 * allowFreeform are true, the user can select a new value by typing.
 */
const ComboBox = (props: Props) => {
    const {
        value,
        options,
        allow_freeform,
        multi,
        virtualized,
        auto_complete,
        placeholder,
        disabled,
        persist_menu,
        use_combo_box_as_menu_width,
        setProps,
    } = props;
    const [localValue, setLocalValue] = useState(value);
    const [localOptions, setLocalOptions] = useState(options);

    const onChange = useCallback(
        (event, option, index, value) => {
            if (option) {
                setLocalValue(option.key);
                setProps({ value: option.key });
            } else if (value !== undefined) {
                const newOption = { key: value, text: value };
                // @ts-expect-error TODO
                setLocalOptions((curr) => [...curr, newOption]);
                setLocalValue(newOption.key);
            }
        },
        [setLocalValue, setLocalOptions, setProps]
    );

    const updateSelectedOptionKeys = useCallback((selectedKeys, option) => {
        // modify a copy
        const selectedKeysCopy = [...selectedKeys];
        const index = selectedKeysCopy.indexOf(option.key);
        if (option.selected && index < 0) {
            selectedKeysCopy.push(option.key);
        } else {
            selectedKeysCopy.splice(index, 1);
        }
        return selectedKeysCopy;
    }, []);

    const onChangeMulti = useCallback(
        (event, option, index, value) => {
            const currentSelectedKeys = localValue || [];
            if (option) {
                // User selected/de-selected an existing option
                setLocalValue(
                    updateSelectedOptionKeys(currentSelectedKeys, option)
                );
            } else if (value !== undefined) {
                // User typed a freeform option
                const newOption = { key: value, text: value };
                const updatedSelectedKeys = [
                    // @ts-expect-error TODO
                    ...currentSelectedKeys,
                    newOption.key,
                ];
                if (allow_freeform) {
                    setLocalValue(updatedSelectedKeys);
                    // @ts-expect-error TODO
                    setLocalOptions([...options, newOption]);
                } else {
                    setLocalValue(updatedSelectedKeys);
                }
            }
        },
        [
            setLocalValue,
            setLocalOptions,
            options,
            localValue,
            updateSelectedOptionKeys,
            allow_freeform,
        ]
    );

    const _onRenderLabel = () => {
        const { label, disabled } = props;
        return label ? <Label disabled={disabled}>{label}</Label> : null;
    };

    const optionsGen = generateOptions(localOptions);

    if (virtualized) {
        return (
            <>
                {_onRenderLabel()}
                <VirtualizedComboBox
                    options={optionsGen}
                    selectedKey={multi ? localValue : value}
                    onChange={multi ? onChangeMulti : onChange}
                    onMenuDismissed={
                        multi
                            ? () => {
                                  setProps({ value: localValue });
                              }
                            : undefined
                    }
                    allowFreeform={allow_freeform}
                    autoComplete={auto_complete}
                    placeholder={placeholder}
                    multiSelect={multi}
                    disabled={disabled}
                />
            </>
        );
    }
    return (
        <>
            {_onRenderLabel()}
            <FabricComboBox
                options={optionsGen}
                selectedKey={localValue}
                onChange={multi ? onChangeMulti : onChange}
                onMenuDismissed={
                    multi
                        ? () => {
                              setProps({ value: localValue });
                          }
                        : undefined
                }
                allowFreeform={allow_freeform}
                autoComplete={auto_complete}
                placeholder={placeholder}
                multiSelect={multi}
                disabled={disabled}
                useComboBoxAsMenuWidth={use_combo_box_as_menu_width}
                persistMenu={persist_menu}
            />
        </>
    );
};

ComboBox.defaultProps = {
    options: [],
    disabled: false,
    multi: false,
    auto_complete: "on",
    virtualized: false,
    value: "",
    allow_freeform: false,
    use_combo_box_as_menu_width: true,
    persist_menu: false,
};

export default ComboBox;
