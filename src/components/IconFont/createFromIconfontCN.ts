import { loggerWithTags } from '@jeffchi/logger';
import { FunctionalComponent, h, InputHTMLAttributes } from 'vue';
const cache: Loose = {};
const { warn } = loggerWithTags('ICON');
export interface IconProps extends Loose, InputHTMLAttributes {
    type: string;
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
    return ({ type, ...props }: IconProps) => {
        const className = props.class?.split(' ') || [];
        className.unshift('icon', type);
        return h('svg', { class: className.join(' '), 'aria-hidden': true, ...props }, h('use', { 'xlink:href': `#icon-${type}` }));
    };
};
