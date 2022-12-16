import * as React from "react";
import { Pivot as FPivot, PivotItem } from "@fluentui/react/lib/Pivot";
import { Stack } from "@fluentui/react";
import { isNil } from "ramda";
import {
    DashComponentProps,
    DashLoadingState,
    StyledComponentProps,
    Option,
} from "../../props";

type Props = {
    /**
     * Choices to be displayed in the pivot control.
     */
    options: Option[];

    /**
     * Array that holds PivotItem components
     */
    children: React.ReactNode;

    /**
     * Currently selected key.
     */
    selected_key: string;

    /**
     * Object that holds the loading state object coming from dash-renderer
     */
    loading_state: DashLoadingState;
} & DashComponentProps &
    StyledComponentProps;

function parseChildrenToArray(children) {
    if (children) {
        if (!Array.isArray(children)) {
            return [children];
        }
        return children;
    }
    return [];
}

const Pivot = (props: Props) => {
    const { children, selected_key, options, setProps } = props;

    React.useEffect(() => {
        if (!selected_key && options) {
            setProps({ selected_key: options[0].value });
        }
    }, [options, selected_key, setProps]);

    const handleClick = (item) => {
        setProps({ selected_key: item.props.itemKey });
    };

    const styles = {
        root: props.style,
    };

    const viewChildren = parseChildrenToArray(children).filter((child) => {
        let childProps;
        if (
            isNil(child.props.disabled) &&
            child.props._dashprivate_layout &&
            child.props._dashprivate_layout.props
        ) {
            childProps = child.props._dashprivate_layout.props;
        } else {
            childProps = child.props;
        }
        return (
            childProps.value === selected_key ||
            (Array.isArray(childProps.value) &&
                childProps.value.includes(selected_key))
        );
    });

    return (
        <Stack>
            <FPivot
                selectedKey={props.selected_key}
                onLinkClick={handleClick}
                styles={styles}
            >
                {props.options.map((o) => {
                    return (
                        <PivotItem
                            key={o.value}
                            headerText={o.label}
                            itemKey={o.value.toString()}
                            // @ts-expect-error TODO
                            headersOnly={true}
                        />
                    );
                })}
            </FPivot>
            {viewChildren}
        </Stack>
    );
};

Pivot.defaultProps = {
    selected_key: "",
};

export default Pivot;
