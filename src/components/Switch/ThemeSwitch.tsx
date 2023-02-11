import { session } from '@libs/cache';
import { defineComponent, ref } from 'vue';
import { IconFont } from '../IconFont';
import { ThemeSwitchProps, ThemeSwitchValue, TThemeSwitchProps } from './props';
import { Switch } from './Switch';

const themeStorageKey = 'app-theme';
const lightClass = 'theme-light';
const darkClass = 'theme-dark';

const toggleThemeCore = (theme: ThemeSwitchValue) => {
    const root = document.querySelector(':root');
    if (theme === ThemeSwitchValue.LIGHT) {
        root?.setAttribute(lightClass, '');
        root?.removeAttribute(darkClass);
        root?.querySelector('#code-theme')?.setAttribute('href', '/src/assets/styles/hightlight/github.light.less');
    } else if (theme === ThemeSwitchValue.DARK) {
        root?.setAttribute(darkClass, '');
        root?.removeAttribute(lightClass);
        root?.querySelector('#code-theme')?.setAttribute('href', '/src/assets/styles/hightlight/github.dark.less');
    } else {
        root?.removeAttribute(lightClass);
        root?.removeAttribute(darkClass);
    }
    session(themeStorageKey, theme);
    window.PerformanceMark;
};

const defTheme = session<ThemeSwitchValue>(themeStorageKey) as any;

toggleThemeCore(defTheme);
const ThemeSwitch = defineComponent((props: TThemeSwitchProps) => {
    const theme = ref<ThemeSwitchValue>((defTheme || (props.defaultValue as ThemeSwitchValue)) ?? props.theme ?? ThemeSwitchValue.AUTO);
    const followSys = ref(theme.value === ThemeSwitchValue.AUTO);
    const checked = ref(theme.value === ThemeSwitchValue.DARK);
    const toggleAutoTheme = (e: any) => {
        const newV = !followSys.value;
        followSys.value = newV;
        if (newV) {
            theme.value = ThemeSwitchValue.AUTO;
        } else {
            theme.value = checked.value ? ThemeSwitchValue.DARK : ThemeSwitchValue.LIGHT;
        }
        toggleThemeCore(theme.value);
    };
    const toggleTheme = (value: boolean) => {
        checked.value = value;
        theme.value = value ? ThemeSwitchValue.DARK : ThemeSwitchValue.LIGHT;
        toggleThemeCore(theme.value);
    };
    const titleAuto = '跟随系统';
    return () => {
        const className = ['theme-switch-wrap', 'flexable', '--line-center'];

        const autoClassName = ['auto-wrap', 'mr-md'];

        if (theme.value) {
            className.push(theme.value);
        }
        if (followSys.value) {
            autoClassName.push('checked');
        }

        let switchTitle;

        if (theme.value === ThemeSwitchValue.DARK) {
            switchTitle = '暗黑主题,点击切换明亮主题';
        } else if (theme.value === ThemeSwitchValue.LIGHT) {
            switchTitle = '明亮主题,点击切换暗黑主题';
        }

        return (
            <span class={className}>
                <span class={autoClassName}>
                    <IconFont type="timer" onClick={toggleAutoTheme} title={titleAuto} />
                </span>
                <Switch
                    onChecked={toggleTheme}
                    checked={theme.value === ThemeSwitchValue.DARK}
                    defaultValue={true}
                    disabled={followSys.value}
                    title={switchTitle}
                />
            </span>
        );
    };
});

ThemeSwitch.inheritAttrs = false;
ThemeSwitch.compatConfig = { MODE: 3 };
ThemeSwitch.props = ThemeSwitchProps;
ThemeSwitch.name = 'ThemeSwitch';

export { ThemeSwitch };
