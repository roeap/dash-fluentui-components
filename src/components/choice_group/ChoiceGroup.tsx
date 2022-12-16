import React from "react";
import PropTypes from "prop-types";
import { ChoiceGroup as FabricChoiceGroup } from "@fluentui/react";
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
     * The value of the input corresponds to the values provided in the `options` property.
     */
    value: string | number;
    /**
     * Configuration for individual choices within the choice group
     */
    options: Option[];
    /**
     * Object that holds the loading state object coming from dash-renderer
     */
    loading_state?: DashLoadingState;
} & DashComponentProps &
    StyledComponentProps;

const _transformOption = (option) => {
    if ("value" in option) {
        return {
            key: option.value,
            text: option.label,
            disabled: option.disabled,
            data: { icon: option.icon },
        };
    }
    return option;
};

/**
 * ## Overview
 *
 * The ChoiceGroup component, also known as radio buttons, let users select one option
 * from two or more choices. Each option is represented by one ChoiceGroup button;
 * a user can select only one ChoiceGroup in a button group.
 *
 * ChoiceGroup emphasize all options equally, and that may draw more attention to the options
 * than necessary. Consider using other controls, unless the options deserve extra attention
 * from the user. For example, if the default option is recommended for most users in most
 * situations, use a Dropdown component instead.
 *
 * If there are only two mutually exclusive options, combine them into a single Checkbox
 * or Toggle switch. For example, use a Checkbox for "I agree" instead of ChoiceGroup buttons
 * for "I agree" and "I don't agree."
 */
const ChoiceGroup = (props: Props) => {
    const _onChange = (_event, item) => {
        props.setProps({ value: item.key });
    };
    const options = props.options.map(_transformOption);

    return (
        <FabricChoiceGroup
            selectedKey={props.value}
            label={props.label}
            options={options}
            onChange={_onChange}
        />
    );
};

ChoiceGroup.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     * The ID needs to be unique across all of the components in an app.
     */
    id: PropTypes.string,

    /**
     * A label to be displayed above the dropdown component.
     */
    label: PropTypes.string,

    /**
     * The value of the input corresponds to the values provided in the `options` property.
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Configuration for individual choices within the choice group
     */
    options: PropTypes.arrayOf(
        PropTypes.oneOf([
            PropTypes.exact({
                label: PropTypes.string.isRequired,
                value: PropTypes.oneOf([PropTypes.string, PropTypes.number])
                    .isRequired,
                disabled: PropTypes.bool,
            }),
            PropTypes.exact({
                text: PropTypes.string.isRequired,
                key: PropTypes.oneOf([PropTypes.string, PropTypes.number])
                    .isRequired,
                disabled: PropTypes.bool,
            }),
        ])
    ),

    /**
     * Defines CSS styles which will override styles previously set.
     */
    style: PropTypes.object,

    /**
     * Object that holds the loading state object coming from dash-renderer
     */
    loading_state: PropTypes.shape({
        /**
         * Determines if the component is loading or not
         */
        is_loading: PropTypes.bool,
        /**
         * Holds which property is loading
         */
        prop_name: PropTypes.string,
        /**
         * Holds the name of the component that is loading
         */
        component_name: PropTypes.string,
    }),

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
};

ChoiceGroup.defaultProps = {
    value: 0,
    label: "",
    options: [],
};

export default ChoiceGroup;
