import { CopyrightFooter, GlobalSearcherHeader, NavAside } from '@/components';
import renderSlot from '@/lib/renderSlot';
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        id: { type: String, default: '' },
        aside: { type: [Object, Boolean] as SlotType, default: true },
        footer: { type: [Object, Boolean] as SlotType, default: true },
        header: { type: [Object, Boolean] as SlotType, default: true },
    },
    setup: (props, { slots }) => () => (
        <div id={props.id} class="page-wrapper">
            {renderSlot(
                props.aside,
                <NavAside userNick="Jeffrey Chiang" width={'360px'} />
            )}

            <div
                class="anchor-scoller-wrapper flex-1"
                style={{ overflowY: 'auto', height: '100vh' }}
            >
                {renderSlot(
                    props.header,
                    <GlobalSearcherHeader
                        defaultValue={'sss'}
                        search={() => {
                            console.log(11111);
                        }}
                    />
                )}

                <article class="main-wrapper">
                    {slots?.default?.() || <h1>Page content</h1>}
                </article>

                {renderSlot(props.footer, <CopyrightFooter />)}
            </div>
        </div>
    ),
});
