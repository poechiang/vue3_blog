export const warn = (valid: boolean, message: string): void => {
    // Support uglify
    if (process.env.NODE_ENV !== 'production' && !valid && console !== undefined) {
        console.warn(`Warning: ${message}`);
    }
};
export const error = (valid: boolean, message: string): void => {
    // Support uglify
    if (process.env.NODE_ENV !== 'production' && !valid && console !== undefined) {
        console.error(`Error: ${message}`);
    }
};

export const warning = (valid: boolean, message: string): void => {
    warn(valid, `[@ant-design/icons-vue] ${message}`);
};
