import PrimaryButton from '@/components/base/button/primary-button.vue';

type Args = {
  text: string;
  disabled: boolean;
};

export default {
  title: "Base/Button/PrimaryButton",
  component: PrimaryButton,
  argTypes: <Args>{},
};

const Template = (args: Args) => ({
  components: { PrimaryButton },
  setup() {
    return {
      args,
    };
  },
  template: `
    <div style="width: 240px;">
      <PrimaryButton v-bind="args" />
    </div>
  `,
});

export const LoginButton = Template.bind({});
LoginButton.args = {
  text: "ログイン",
  disabled: false,
};

export const SignupButton = Template.bind({});
SignupButton.args = {
  text: "サインアップ",
  disabled: false,
};
