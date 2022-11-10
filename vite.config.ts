import { UserConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import mdx from '@mdx-js/rollup'
import ssr from 'vite-plugin-ssr/plugin'
import tamagui from '@tamagui/vite-plugin'

const { tamaguiPlugin } = tamagui

const tamaguiConfig = {
  config: './tamagui.config.ts',
  components: ['tamagui', '@tamagui/core'],
}

export default {
  plugins: [
    // mdx(),
    // react(),
    tamaguiPlugin({
      ...tamaguiConfig
        // useReactNativeWebLite: true,
    }),
    ssr(),
    // tamaguiExtractPlugin(tamaguiConfig),
  ],
  // resolve: {
  //   alias: {
  //     "react-native": "react-native-web",
  //   },
  // },
  // We manually add a list of dependencies to be pre-bundled, in order to avoid a page reload at dev start which breaks vite-plugin-ssr's CI
  // (The 'react/jsx-runtime' entry is not needed in Vite 3 anymore.)
  // optimizeDeps: { include: ['cross-fetch', 'react/jsx-runtime'] }
} as UserConfig
