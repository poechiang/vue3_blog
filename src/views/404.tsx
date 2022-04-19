import { PageArticle } from '@/components';
import { Button, Result } from 'ant-design-vue';
import { defineComponent } from 'vue';

export default defineComponent(() => {
    return () => (
        <PageArticle id="about" aside={false} header={false}>
            <Result
                status="404"
                title="指定页面不存在"
                sub-title="抱歉，你访问的内容不见了或者，暂不可用……"
                extra={<Button type="primary">文章列表</Button>}
                style={{
                    width: '80%',
                    margin: '.5rem auto',
                    padding: '.5rem .5rem 1rem',
                    backgroundColor: 'rgba(255,255,255,.9)',
                }}
            ></Result>
        </PageArticle>
    );
});
