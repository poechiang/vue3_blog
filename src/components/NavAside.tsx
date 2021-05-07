import DefUserLogo from "@/assets/images/user.svg";
import IconFont from "@/components/IconFont";
import { Avatar, Button, Space } from "ant-design-vue";
import { defineComponent, Fragment, h as createElement } from "vue";
import { useRouter } from "vue-router";

const React = { createElement, Fragment };
const NavAside = defineComponent({
    props: {
        width: [Number, String],
        userPhoto: String,
        userNick: String,
        userName: String,
    },
    setup: (props) => {
        const router = useRouter();

        const redirectToPost = () => {
            router.push("/post");
        };

        const links = [
            {
                link: "https://me.poechiang.cn",
                icon: "zhuye",
            },
            {
                link: "https://github.com/poechiang",
                icon: "github",
            },
        ];
        return () => (
            <aside class="nav-sider" style={{ width: props.width }}>
                <Avatar
                    class="user-logo"
                    src={props.userPhoto || (DefUserLogo as string)}
                    size="large"
                />
                <h1>🇨🇳 {props.userNick || props.userName}</h1>
                <Space class="contact-list">
                    <a href="mailto:poechiang@live.cn">
                        <IconFont type="icon-mail" />
                    </a>
                    <a href="mailto:poechiang@live.cn">
                        <IconFont type="icon-txweibo-copy" />
                    </a>
                    <a href="mailto:poechiang@live.cn">
                        <IconFont type="icon-twitter" />
                    </a>
                </Space>
                <Button class="post" type="primary" onClick={redirectToPost}>
                    <IconFont type="icon-post" /> 发表
                </Button>
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
            </aside>
        );
    },
});

export default NavAside;
