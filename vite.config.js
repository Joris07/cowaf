import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import fs from 'fs'

export default defineConfig({
	plugins: [
		vue(),
		VitePWA({
			manifest: {
				name: 'Cowaf',
				description: 'Application de mise en relation d\'adoptant d\'animaux',
				theme_color: '#ffffff',
				icons: [
					{
						src: '/icons/512.png',
						sizes: '512x512',
						type: 'image/png'
					},
					{
						src: '/icons/192.png',
						sizes: '192x192',
						type: 'image/png'
					},
					{
						src: '/icons/32.png',
						sizes: '32x32',
						type: 'image/png'
					},
					{
						src: '/icons/16.png',
						sizes: '16x16',
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
	}
})
