import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Resources } from './resources';

export default {
  component: Resources,
  title: 'Resources',
} as ComponentMeta<typeof Resources>;

const Template: ComponentStory<typeof Resources> = (args) => (
  <Resources {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
