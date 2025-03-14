import WindowControllers from '../../components/window-controller/WindowControllers.vue'

export default {
  component: WindowControllers,
  title: 'Components/WindowController',
  categories: ['Layouts'],
  tags: ['autodocs'],
  argTypes: {
    platform: {
      options: ['macos', 'windows', 'gnome']
    },
    hideMethod: {
      options: ['display', 'visibility']
    },
    className: String,
    onClose: { action: 'close' },
    onMinimize: { action: 'minimize' },
    onMaximize: { action: 'maximize' }
  },
  args: {
    platform: "macos",
    hide: false,
    hideMethod: "display",
    justify: false,
    className: "bg-gray-700"
  },
  render: (args: any) => ({
    components: { WindowControllers },
    setup() {
      return { args }
    },
    template: `
      <div class="flex justify-center items-center bg-gray-200 h-[50px]">
        <window-controllers v-bind="args" />
      <div>
    `
  })
};

export const Windows = {
  args: {
    platform:"windows",
    hide: false,
    hideMethod: "display",
    justify: false,
    className: "bg-gray-700"
  }
};

export const MacOS = {
  args: {
    platform: "macos",
    hide: false,
    hideMethod: "display",
    justify: false,
    className: ""
  }
};

export const Gnome = {
  args: {
    platform: "gnome",
    hide: false,
    hideMethod: "display",
    justify: false,
    className: ""
  }
};