import WindowControllers from '../../components/window-controller/WindowControllers.vue'

export default {
  component: WindowControllers,
  title: 'Layout/Index',
  categories: ['Layouts'],
  tags: ['autodocs'],
  render: (args: any) => ({
    components: { WindowControllers },
    setup() {
      return { args }
    },
    template: `
      <window-controllers platform="windows" className="bg-gray-700">hello world</window-controllers>
    `
  })
};

export const Primary = {
};