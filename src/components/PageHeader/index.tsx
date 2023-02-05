import { Switch } from '@components/Switch';
import logo from '@images/IMG_1862.jpg';
import { FunctionalComponent } from 'vue';
import { Search } from '../Search';
export const PageHeader: FunctionalComponent = () => {
    return (
        <header class={'page-hd-wrap'}>
            <div class={'flexable --line-center mb-hd'}>
                <h1>Jeffrey · Chiang</h1>
                <span class="flex-auto"></span>
                <Switch></Switch>
            </div>
            <div class={'flexable --line-center'}>
                <img src={logo} alt="用户头像" class="user-photo mr-8" />
                <span class="flex-auto">
                    Everything is inferior but reading
                    <br /> A millennial coder
                </span>
                <Search />
            </div>
        </header>
    );
};
