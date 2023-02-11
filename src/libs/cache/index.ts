const { localStorage, sessionStorage } = window;
const isUndefined = (value: any) => value === undefined;
const getExpire = (expire?: number) => (expire ? expire + Date.now() : expire || 0);
export const local = <T = any>(key: string, value?: T, expire?: number): T | null | void => {
    if (!key) {
        throw new Error('argument "key" is required!');
    }
    if (isUndefined(value)) {
        const { value, expire = 0 } = JSON.parse(localStorage.getItem(key) || '{}');
        if (!expire || expire > Date.now()) {
            return isUndefined(value) ? null : (value as T);
        }
    } else if (value === null) {
        localStorage.removeItem(key);
    } else {
        localStorage.setItem(key, JSON.stringify({ expire: getExpire(expire), value }));
    }

    return void 0;
};
export const session = <T = any>(key: string, value?: T, expire?: number): T | null | void => {
    if (!key) {
        throw new Error('argument "key" is required!');
    }
    console.log(key, value);
    if (isUndefined(value)) {
        const { value, expire = 0 } = JSON.parse(sessionStorage.getItem(key) || '{}');
        console.log(1111, value, expire);
        if (!expire || expire > Date.now()) {
            return value;
        }
    } else if (value === null) {
        sessionStorage.removeItem(key);
    } else {
        sessionStorage.setItem(key, JSON.stringify({ expire: getExpire(expire), value }));
    }
    return void 0;
};
