import { loggerWithTags } from '@jeffchi/logger';
import { defineComponent, InputHTMLAttributes, ref } from 'vue';
import { IconFont } from '../IconFont';

const { log } = loggerWithTags('switch');
export interface SwitchProps extends InputHTMLAttributes {
    defaultValue?: boolean;
    onValue?: any;
    offValue?: any;
}
export const Switch = defineComponent((props: SwitchProps) => {
    const { name } = props || {};
    const checked = ref(props.defaultValue ?? false);
    const handleClick = () => {
        checked.value = !checked.value;
        log(`switch clicked:${checked.value}!`);
    };
    return () => {
        const className = ['switch-wrap'];
        if (checked.value) {
            className.push('checked');
        }
        log("switch's render");
        return (
            <span class={className} onClick={handleClick}>
                <input type="hidden" name={name} value={checked.value ? props.onValue : props.offValue} />
                <IconFont type="sun" />
                <IconFont type="moon" />
            </span>
        );
    };
});
