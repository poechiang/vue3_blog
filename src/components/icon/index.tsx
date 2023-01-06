import { FunctionalComponent } from 'vue';
export const Icon: FunctionalComponent<BaseIconProp> = (props, content) => {
    const { type } = props;
    if (!type) {
        error;
    }
    return (
        <svg class="icon" aria-hidden="true">
            <use xlinkHref={`#icon-${type}`}></use>
        </svg>
    );
};

export const SearchIcon: FunctionalComponent<IconProp> = () => (
    <svg class="icon" aria-hidden="true">
        <use xlinkHref="#icon-search"></use>
    </svg>
);
// export const SearchIcon = () => <Icon type="search" />;
