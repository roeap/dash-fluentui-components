import React, { useCallback } from "react";
import { DatePicker as FabricDatePicker, DayOfWeek } from "@fluentui/react";
import { dayPickerStrings, dateToString } from "../../utilities/datetime";
import {
    DashComponentProps,
    DashLoadingState,
    StyledComponentProps,
} from "../../props";

type Props = {
    /**
     * Text displayed inside the button
     */
    label?: string;
    /**
     * Specifies the starting date for the component,
     * best practice is to pass value via datetime object
     */
    date?: string;

    /**
     * A string value to be displayed if no date is selected.
     */
    placeholder?: string;

    /**
     * If True, no dates can be selected.
     */
    disabled?: boolean;

    /**
     * Specifies the lowest selectable date for the component.
     * Accepts datetime.datetime objects or strings in the format 'YYYY-MM-DD'
     */
    min_date_allowed?: string;

    /**
     * Specifies the highest selectable date for the component.
     * Accepts datetime.datetime objects or strings in the format 'YYYY-MM-DD'
     */
    max_date_allowed?: string;

    /**
     * Whether the calendar should show the week number (weeks 1 to 53) before each week row
     */
    show_week_numbers?: boolean;

    /**
     * Whether the month picker is shown beside the day picker or hidden.
     */
    show_month_picker?: boolean;

    /**
     * Whether the DatePicker allows input a date string directly or not.
     */
    allow_text_input?: boolean;

    /**
     * Determines if DatePicker has a border.
     */
    borderless?: boolean;
    /**
     * Object that holds the loading state object coming from dash-renderer
     */
    loading_state?: DashLoadingState;
} & DashComponentProps &
    StyledComponentProps;

/**
 * ## Overview
 *
 * The DatePicker component enables a user to pick a date value.
 */
const DatePicker = (props: Props) => {
    const { setProps } = props;
    const onDateChange = useCallback(
        (date) => {
            setProps({ date: dateToString(date) });
        },
        [setProps]
    );
    const minDate = props.min_date_allowed
        ? new Date(props.min_date_allowed)
        : undefined;
    const maxDate = props.max_date_allowed
        ? new Date(props.max_date_allowed)
        : undefined;
    const date = props.date ? new Date(props.date) : undefined;
    return (
        <FabricDatePicker
            label={props.label}
            firstDayOfWeek={DayOfWeek.Monday}
            strings={dayPickerStrings}
            placeholder={props.placeholder}
            ariaLabel="Select a date"
            disabled={props.disabled}
            showWeekNumbers={props.show_week_numbers}
            isMonthPickerVisible={props.show_month_picker}
            maxDate={maxDate}
            minDate={minDate}
            styles={{ root: props.style }}
            formatDate={dateToString}
            onSelectDate={onDateChange}
            allowTextInput={props.allow_text_input}
            borderless={props.borderless}
            value={date}
        />
    );
};

DatePicker.defaultProps = {
    label: "",
    disabled: false,
    borderless: false,
    allow_text_input: false,
    placeholder: "Select date.",
    show_week_numbers: false,
    show_month_picker: true,
};

export default DatePicker;
