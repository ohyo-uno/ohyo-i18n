import { setup } from '@storybook/vue3';
import type { Preview } from '@storybook/vue3';

import "../src/styles/index.css";

setup((app) => {
  app.mixin({
    
  });
});

const preview: Preview = {
  parameters: {
    backgrounds: { disable: true },
		controls: {
			matchers: {
				color: /(?<!solid)(background|color)$/i,
				date: /Date$/i
			}
		},
		darkMode: {
			classTarget: 'html',
			stylePreview: true,
			dark: {
				appPreviewBg: '#272321'
			},
			light: {
				appPreviewBg: '#fff'
			}
		}
  },
};

export default preview;
