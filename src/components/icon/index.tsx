import { FunctionalComponent } from 'vue';
export const Icon: FunctionalComponent<IconProp> = (props, content) => {
    const { type } = props;
    return (
        <svg class="icon" aria-hidden="true">
            <use xlinkHref={`#icon-${type}`}></use>
        </svg>
    );
};

export const SearchIcon: FunctionalComponent = () => (
    <svg class="icon" aria-hidden="true">
        <use xlinkHref="#icon-search"></use>
    </svg>
);
// export const SearchIcon = () => <Icon type="search" />;
