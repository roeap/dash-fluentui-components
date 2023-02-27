export type Option = {
    label: string;
    value: string | number;
    disabled?: boolean;
    icon?: string;
};

/**
 * Every Dash components are given these props.
 * Use with your own props:
 * ```
 * type Props = {
 *     my_prop: string;
 * } & DashComponentProps;
 * ```
 * Recommended to use `type` instead of `interface` so you can define the
 * order of props with types concatenation.
 */
export type DashComponentProps = {
    /**
     * Unique ID to identify this component in Dash callbacks.
     */
    id?: string;
    /**
     * A unique identifier for the component, used to improve
     * performance by React.js while rendering components
     * See https://reactjs.org/docs/lists-and-keys.html for more info
     */
    key?: string;
    /**
     * Update props to trigger callbacks.
     */
    // eslint-disable-next-line
    setProps?: (props: Record<string, any>) => void;
};

/**
 * Components that can be styles from Dash via `styles` or `class_name` props.
 */
export type StyledComponentProps = {
    /**
     * Defines CSS styles which will override styles previously set.
     */
    style?: object;
    /**
     * Often used with CSS to style elements with common properties.
     */
    class_name?: string;
};

/**
 * Object that holds the loading state object coming from dash-renderer
 */
export type DashLoadingState = {
    /**
     * Determines if the component is loading or not
     */
    is_loading: boolean;
    /**
     * Holds which property is loading
     */
    prop_name: string;
    /**
     * Holds the name of the component that is loading
     */
    component_name: string;
};

export type FieldComponentProps = {
    /**
     * The label associated with the field.
     */
    label?: string;
    /**
     * A message about the validation state. By default, this is an error message,
     * but it can be a success, warning, or custom message by setting validationState.
     */
    validation_message?: string;
    /**
     * The orientation of the label relative to the field component. This only affects the label,
     * and not the validationMessage or hint (which always appear below the field component).
     */
    orientation?: "horizontal" | "vertical";
    /**
     * The validationState affects the display of the validationMessage and validationMessageIcon.
     */
    validation_state?: "none" | "success" | "warning" | "error";
    /**
     * Marks the Field as required. If true, an asterisk will be appended to the label,
     * and aria-required will be set on the Field's child.
     */
    required?: boolean;
    /**
     * The size of the Field's label.
     */
    label_size?: "small" | "medium" | "large";
};
