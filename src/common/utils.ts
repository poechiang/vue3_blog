export const snake = (v: string) =>
    v.replace(/(\-|\_)?([A-Z])|\-/g, ($0, _$1, $2, i) => {
        if ($0 === '-') {
            return i ? '_' : '';
        }
        return (i ? '_' : '') + $2.toLowerCase();
    });
export const camel = (v: string) =>
    v.replace(/(\-|\_)([a-z])|\-|\_/g, ($0, _$1, $2, i) => {
        if ($0 === '-' || $0 === '_') {
            return '';
        }
        return i ? $2.toUpperCase() : $2;
    });
export const pascal = (v: string) =>
    v.replace(/^[a-z]|(\-|\_)([a-z])|\-|\_/g, ($0, _$1, $2, i) => {
        if ($0 === '-' || $0 === '_') {
            return '';
        }
        return ($2 || $0).toUpperCase();
    });
export const kebab = (v: string) =>
    v.replace(/(\-|\_)?([A-Z])|\_/g, ($0, _$1, $2, i) => {
        if ($0 === '_') {
            return i ? '-' : '';
        }
        return (i ? '-' : '') + $2.toLowerCase();
    });
