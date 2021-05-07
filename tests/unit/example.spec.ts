import Links from "@/components/Links";
import { shallowMount } from "@vue/test-utils";
import { expect } from "chai";

describe("HelloWorld.vue", () => {
    it("renders props.msg when passed", () => {
        const msg = "new message";
        const wrapper = shallowMount(Links, {
            props: { msg },
        });
        expect(wrapper.text()).to.include(msg);
    });
});
