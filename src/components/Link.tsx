import { FunctionalComponent, LinkHTMLAttributes } from 'vue';

export interface ILinkProps extends LinkHTMLAttributes {
    type?: 'plain' | 'theme' | 'block';
}
export const Link: FunctionalComponent<ILinkProps> = (
    { type = 'plain', ...props },
    { slots },
) => {
    const classList = props.class?.split(' ') || [];
    classList.unshift('jeff-link');
    classList.push(`jeff-link-${type}`);
    return (
        <a class={classList.join(' ')} href={props.href || 'javascript:;'}>
            {slots.default?.()}
        </a>
    );
};
