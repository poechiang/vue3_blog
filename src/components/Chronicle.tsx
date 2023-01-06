import { FunctionalComponent } from 'vue';
import { Link } from './Link';

export const Chronicle: FunctionalComponent = () => {
    return (
        <dl class="chronicle-list">
            <dd>
                <Link>2022(16)</Link>
            </dd>
            <dd>
                <Link>2021(65)</Link>
            </dd>
            <dd>
                <Link>2020(48)</Link>
            </dd>
            <dd>
                <Link>2019(51)</Link>
            </dd>
        </dl>
    );
};
