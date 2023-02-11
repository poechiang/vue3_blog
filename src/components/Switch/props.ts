import { ExtractPropTypes, PropType } from 'vue';

export const SwitchProps = {
    name: String,
    defaultValue: { type: Boolean, default: undefined },
    checked: Boolean,
    disabled: Boolean,
    title: String,
    onValue: Object as any,
    offValue: Object as any,

    onChecked: Function as PropType<(args: boolean) => void>,
};

export type TSwitchProps = Partial<ExtractPropTypes<typeof SwitchProps>>;

export enum ThemeSwitchValue {
    AUTO = 't-auto',
    LIGHT = 'sun',
    DARK = 'moon',
}

export const ThemeSwitchProps = {
    ...SwitchProps,
    defaultValue: { type: String as PropType<ThemeSwitchValue>, default: undefined },
    theme: { type: Object as PropType<ThemeSwitchValue>, default: undefined },
    onChecked: Function as PropType<(args: boolean) => void>,
};

export type TThemeSwitchProps = Partial<ExtractPropTypes<typeof ThemeSwitchProps>>;
