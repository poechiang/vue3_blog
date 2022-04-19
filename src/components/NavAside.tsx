import DefUserLogo from '@/assets/images/user.svg';
import IconFont from '@/components/IconFont';
import { Avatar, Button } from 'ant-design-vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

const NavAside = defineComponent({
    props: {
        width: [Number, String],
        userPhoto: String,
        userNick: String,
        userName: String,
    },
    setup: (props) => {
        const router = useRouter();

        const links = [
            {
                link: 'https://me.poechiang.cn',
                icon: 'zhuye',
            },
            {
                link: 'https://github.com/poechiang',
                icon: 'github',
            },
            {
                link: 'https://twitter.com/poechiang343',
                icon: 'Twitterv',
            },
            {
                link: 'https://weibo.com/poechiang',
                icon: 'sina',
            },
        ];
        return () => (
            <aside
                class="nav-sider"
                style={{
                    width: props.width,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <header style="height:420px">
                    <Avatar
                        class="user-logo"
                        src={props.userPhoto || (DefUserLogo as string)}
                        size="large"
                    />
                    <h1>🇨🇳 {props.userNick || props.userName}</h1>
                    <Button
                        class="post mt-30"
                        type="primary"
                        onClick={() => router.push('/post')}
                    >
                        <IconFont type="icon-post" /> 发表
                    </Button>
                </header>
                <article>
                    <ul class="links">
                        {() =>
                            links.map(({ link, icon }: any) => (
                                <li>
                                    <a href={link}>
                                        <IconFont type={`icon-${icon}`} />
                                        {link}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </article>
            </aside>
        );
    },
});

export default NavAside;
