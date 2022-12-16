import React, { useCallback, useMemo } from "react";
import { Dropdown as FabricDropdown } from "@fluentui/react/lib/Dropdown";
import { Icon } from "@fluentui/react/lib/Icon";
import { generateOptions } from "../../utilities/dashCompat";
import {
    DashComponentProps,
    DashLoadingState,
    StyledComponentProps,
    Option,
} from "../../props";

type Props = {
    /**
     * A label to be displayed above the dropdown component.
     */
    label: string;

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
     * If true, the user can select multiple values
     */
    multi?: boolean;

    /**
     * Choices to be displayed in the dropdown control. Each item mus have either
     * set of keys [`label`, `value`] or [`key`, `text`]. The former is available to
     * accept options consistent with Dash's build in Dropdown control, while the
     * latter keys are according to the underlying UI fabric component. Additionally,
     * a `disabled` and `icon` can be optionally passed. The `icon` property must correspond
     * to the name of a Fabric icon: https://developer.microsoft.com/en-us/fabric#/styles/web/icons
     */
    options?: Option[];

    /**
     * A string value to be displayed if no item is selected.
     */
    placeholder?: string;

    /**
     * If true, the dropdown is disabled and can't be clicked on.
     */
    disabled?: boolean;
    /**
     * Object that holds the loading state object coming from dash-renderer
     */
    loading_state?: DashLoadingState;
} & DashComponentProps &
    StyledComponentProps;

const onRenderOption = (option) => {
    return (
        <div>
            {option.data && option.data.icon && (
                <Icon
                    style={{ marginRight: "8px" }}
                    iconName={option.data.icon}
                    aria-hidden="true"
                    title={option.data.icon}
                />
            )}
            <span>{option.text}</span>
        </div>
    );
};

/**
 * ## Overview
 *
 * A Dropdown is a list in which the selected item is always visible, and the others are visible
 * on demand by clicking a drop-down button. They are used to simplify the design and make a
 * choice within the UI. When closed, only the selected item is visible. When users click
 * the drop-down button, all the options become visible. To change the value, users open the
 * list and click another value or use the arrow keys (up and down) to select a new value.
 */
const Dropdown = (props: Props) => {
    const {
        multi,
        label,
        options,
        disabled,
        placeholder,
        style,
        setProps,
        value,
    } = props;
    // const [selectedOptions, setSelectedOptions] = useState();

    const onChange = useCallback(
        (_event, item) => {
            if (multi) {
                const currentSelectedKeys = value || [];
                // @ts-expect-error TODO
                const newSelectedItems = [...currentSelectedKeys];
                if (item.selected) {
                    // add the option if it's checked
                    newSelectedItems.push(item.key);
                } else {
                    // remove the option if it's unchecked
                    const currIndex = newSelectedItems.indexOf(item.key);
                    if (currIndex > -1) {
                        newSelectedItems.splice(currIndex, 1);
                    }
                }
                // setSelectedOptions(newSelectedItems);
                setProps({ value: newSelectedItems });
            } else {
                // setSelectedOptions(item.key);
                setProps({ value: item.key });
            }
        },
        [multi, setProps, value]
    );

    // const onDismiss = useCallback(() => setProps({ value: selectedOptions }), [selectedOptions, setProps]);

    const dropdownStyles = useMemo(() => ({ dropdown: style }), [style]);
    const optionsTransformed = useMemo(
        // @ts-expect-error TODO
        () => generateOptions(options),
        [options]
    );

    // useEffect(() => {
    //   setSelectedOptions(value);
    // }, [value]);

    return (
        <FabricDropdown
            placeholder={placeholder}
            label={label}
            // @ts-expect-error TODO
            options={optionsTransformed}
            selectedKey={multi ? undefined : value}
            // @ts-expect-error TODO
            selectedKeys={multi ? value : undefined}
            onChange={onChange}
            // onDismiss={onDismiss}
            onRenderOption={onRenderOption}
            multiSelect={multi}
            styles={dropdownStyles}
            disabled={disabled}
        />
    );
};

Dropdown.defaultProps = {
    label: "",
    options: [],
    disabled: false,
    multi: false,
};

export default Dropdown;
