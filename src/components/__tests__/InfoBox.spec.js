import { shallowMount, createLocalVue } from "@vue/test-utils";
import { Quasar } from 'quasar';
import InfoBox from "../InfoBox.vue";

describe("InfoBox.vue", () => {
  const localVue = createLocalVue()
  localVue.use(Quasar)

  it("renders props.title when passed", () => {
    const title = "new message";
    const wrapper = shallowMount(InfoBox, {
      propsData: { title }
    });
    expect(wrapper.text()).toMatch(title);
  });
});
