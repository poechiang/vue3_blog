import { nextTick } from 'vue';
import insertCss from './insert-css';

export const warn = (valid: boolean, message: string): void => {
    // Support uglify
    if (process.env.NODE_ENV !== 'production' && !valid && console !== undefined) {
        console.error(`Warning: ${message}`);
    }
};
export const error = (valid: boolean, message: string): void => {
    // Support uglify
    if (process.env.NODE_ENV !== 'production' && !valid && console !== undefined) {
        console.error(`Warning: ${message}`);
    }
};

export const warning = (valid: boolean, message: string): void => {
    warn(valid, `[@ant-design/icons-vue] ${message}`);
};

// These props make sure that the SVG behaviours like general text.
// Reference: https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
export const svgBaseProps = {
    width: '1em',
    height: '1em',
    fill: 'currentColor',
    'aria-hidden': 'true',
    focusable: 'false',
} as any;

export const iconStyles = `
  .anticon {
    display: inline-block;
    color: inherit;
    font-style: normal;
    line-height: 0;
    text-align: center;
    text-transform: none;
    vertical-align: -0.125em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

let cssInjectedFlag = false;
export const useInsertStyles = (styleStr: string = iconStyles): void => {
    nextTick(() => {
        if (!cssInjectedFlag) {
            if (typeof window !== 'undefined' && window.document && window.document.documentElement) {
                insertCss(styleStr, {
                    prepend: true,
                });
            }
            cssInjectedFlag = true;
        }
    });
};
