import { isNil } from "ramda";

export interface IDashItem {
    [index: string]:
        | number
        | string
        | undefined
        | boolean
        | Record<string, unknown>;
    key: string;
    label: string;
    value?: string | number;
    disabled: boolean;
    icon?: string;
    data: { icon: string };
}

export const transformOption = (option: IDashItem): object => {
    if (option.value) {
        return {
            key: option.value,
            text: option.label,
            disabled: option.disabled,
            data: { icon: option.icon },
        };
    } else if (option.icon) {
        option.data = { icon: option.icon };
        delete option.icon;
    }
    return option;
};

function isNodeArray<T>(node: T | T[]): node is T[] {
    return Array.isArray(node);
}

export function parseChildrenToArray<T>(children?: T | T[]): T[] {
    if (children) {
        if (!isNodeArray(children)) {
            return [children];
        }
        return children;
    }
    return [];
}

// eslint-disable-next-line
export function isUndefined(obj?: any): obj is null | undefined {
    return obj === undefined || obj === null;
}

export function getComponentType(component: React.ReactNode): string {
    let componentType;
    if (!component || isUndefined(component)) return "";
    if (typeof component === "string") return "string";
    if (typeof component === "number") return "number";
    if (typeof component === "boolean") return "boolean";
    if (!("props" in component)) return "object";
    if (
        // disabled is a defaultProp (so it's always set)
        // meaning that if it's not set on component.props, the actual
        // props we want are lying a bit deeper - which means they
        // are coming from Dash
        isNil(component.props.disabled) &&
        component.props._dashprivate_layout &&
        component.props._dashprivate_layout.props
    ) {
        // props are coming from Dash
        componentType = component.props._dashprivate_layout.type;
    } else {
        // else props are coming from React
        // eslint-disable-next-line
        // @ts-ignore
        componentType = component.type.name;
    }
    return componentType;
}

export function getComponentProps(
    component: React.ReactNode
): Record<string, unknown> {
    let componentProps;
    if (!component || isUndefined(component)) return {};
    if (typeof component === "string") return {};
    if (typeof component === "number") return {};
    if (typeof component === "boolean") return {};
    if (!("props" in component)) return {};
    if (
        // disabled is a defaultProp (so it's always set)
        // meaning that if it's not set on component.props, the actual
        // props we want are lying a bit deeper - which means they
        // are coming from Dash
        isNil(component.props.disabled) &&
        component.props._dashprivate_layout &&
        component.props._dashprivate_layout.props
    ) {
        // props are coming from Dash
        componentProps = component.props._dashprivate_layout.props;
    } else {
        // else props are coming from React
        // eslint-disable-next-line
        // @ts-ignore
        componentProps = component.props;
    }
    return componentProps;
}
