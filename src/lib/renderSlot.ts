import { isFunction } from "lodash";

export default (prop: SlotType, def: JSX.Element): JSX.Element => {
    if (!prop) {
        return null;
    }
    if (prop === true) {
        return def;
    }

    if (isFunction(prop)) {
        return prop() as JSX.Element;
    }
    return prop;
};
