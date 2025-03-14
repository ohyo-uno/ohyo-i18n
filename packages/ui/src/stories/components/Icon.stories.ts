import { Icon } from '@vicons/utils'
import { Money16Regular } from '@vicons/fluent'

export default {
  component: Icon,
  title: 'Components/Icon',
  categories: ['Components'],
  tags: ['autodocs'],
  render: (args: any) => ({
    components: { Money16Regular, Icon },
    setup() {
      return { args }
    },
    template: `
      <Icon v-bind="args">
        <Money16Regular />
      </Icon>
    `
  })
};

export const Primary = {
  args: {
    size: '12',
    color: 'black',
    tag: 'span'
  }
};