import { loggerWithTags } from '@jeffchi/logger';
import { FunctionalComponent, h, InputHTMLAttributes } from 'vue';
const cache: Loose = {};
const { warn } = loggerWithTags('ICON');
export interface IconProps extends Loose, InputHTMLAttributes {
    type: string;
    originColor?: boolean;
}
export const createFromIconfontCN = (conf: { scriptUrl: string }): FunctionalComponent<IconProps> => {
    const { scriptUrl } = conf;
    const { head, body } = document || {};
    if (!document.createElement) {
        warn('createElement is not a function!');
    }
    if (!head && !body) {
        warn('basis dom struction is missed');
    }
    if (!cache[scriptUrl]) {
        const scriptEl = document.createElement('script') as HTMLScriptElement;
        scriptEl.defer = true;
        scriptEl.src = scriptUrl;
        (head || body).appendChild(scriptEl);
        cache[scriptUrl] = true;
    }
    return ({ type, originColor, ...props }: IconProps) => {
        const className = props.class?.split(' ') || [];
        if (originColor) {
            className.unshift('origin-color');
        }
        className.unshift('icon', type);
        const useEl = h('use', { 'xlink:href': `#icon-${type}` });
        const svgEl = h('svg', { 'aria-hidden': true }, useEl);
        return h('span', { class: className.join(' '), ...props }, svgEl);
    };
};
