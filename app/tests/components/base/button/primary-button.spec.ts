import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import PrimaryButton from "../../../../components/base/button/primary-button.vue";

describe("PrimaryButton", () => {
  test("ボタンのテキストが'ログイン'で表示される", () => {
    const wrapper = mount(PrimaryButton, {
      props: {
        text: "ログイン",
        disabled: false,
      },
    });
    expect(wrapper.text()).toEqual("ログイン");
  });

  test("ボタンのテキストがdisabledの状態になる", () => {
    const wrapper = mount(PrimaryButton, {
      props: {
        text: "ログイン",
        disabled: true,
      },
    });
    expect(wrapper.attributes().disabled).toBeDefined();
  });
});
