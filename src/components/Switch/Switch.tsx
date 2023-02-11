import { defineComponent, ref } from 'vue';
import { SwitchProps, TSwitchProps } from './props';

const Switch = defineComponent((props: TSwitchProps, { emit }) => {
    const checked = ref(props.checked ?? props.defaultValue ?? false);
    const handleClick = () => {
        checked.value = !checked.value;
        emit('checked', checked.value);
    };
    return () => {
        const { name, disabled, title } = props || {};
        const className = ['switch-wrap'];
        if (checked.value) {
            className.push('checked');
        }
        if (disabled) {
            className.push('disabled');
        }
        return (
            <span class={className} onClick={!disabled ? handleClick : undefined} title={title}>
                <input type="hidden" name={name} value={checked.value ? props.onValue : props.offValue} />
                {/* <IconFont type="sun" />
                <IconFont type="moon" /> */}
            </span>
        );
    };
});
Switch.inheritAttrs = false;
Switch.compatConfig = { MODE: 3 };
Switch.props = SwitchProps;
Switch.name = 'Switch';
export { Switch };
