import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import InputField from "../../../../components/base/input/input-field.vue";

describe("InputField", () => {
  test("propsで渡された値が反映されている", () => {
    const wrapper = mount(InputField, {
      props: {
        type: "text",
        placeholder: "テストテキスト",
        disabled: false,
        value: "アイウエオ",
      },
    });
    //	TODO: ts-ignoreを削除できるようにする
    //	@ts-ignore
    expect(wrapper.element.type).toEqual("text");
    //	@ts-ignore
    expect(wrapper.element.value).toEqual("アイウエオ");
    //	@ts-ignore
    expect(wrapper.element.placeholder).toEqual("テストテキスト");
    //	@ts-ignore
    expect(wrapper.element.disabled).toEqual(false);
  });
});
