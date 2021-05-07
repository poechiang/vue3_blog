import Logo from "@/assets/logo.png";
import { Links, PageArticle } from "@/components";
import { defineComponent } from "vue";

const About = defineComponent(() => () => (
    <PageArticle id="about">
        <div class="flex-row --line-center">
            <img alt="Vue logo" src={Logo} />
            <div class="flex-1">
                <h1>Welcome to Your Vue.js + TypeScript App</h1>

                <p>
          For a guide and recipes on how to configure / customize this project,
                    <br />
          check out the
                    <a href="https://cli.vuejs.org" target="_blank" rel="noopener">
            vue-cli documentation
                    </a>
          .
                </p>
            </div>
        </div>

        <Links msg="" />
    </PageArticle>
));
export default About;
