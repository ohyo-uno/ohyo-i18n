import Button from '../components/Button/Button.vue';

export default {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
  args: {
    label: 'Button',
    onClick: () => {
      console.log('Button clicked!');
    },
  },
};

export const Default = {
  args: {
    label: 'Button',
  },
};
