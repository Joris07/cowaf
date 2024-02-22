import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
	plugins: [
		vue(),
		VitePWA({
			manifest: {
				name: 'My Awesome App',
				short_name: 'MyApp',
				description: 'My Awesome App description',
				theme_color: '#ffffff',
				icons: [
					{
						src: '/public/icons/512.png',
						sizes: '512x512',
						type: 'image/png'
					}
				]
			},
		})
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	},
	server: {
		host: '0.0.0.0',
		port: 40110
	}
})
