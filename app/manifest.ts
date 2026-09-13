import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ResumeBuilder Pro',
    short_name: 'ResumeBuilder',
    description:
      'Modern ATS-Friendly Resume Builder with live preview and instant PDF export.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f0a1f',
    theme_color: '#6d28d9',
    icons: [
      { src: '/icon', sizes: '192x192', type: 'image/png' },
      { src: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
  };
}
