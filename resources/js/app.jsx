import './bootstrap';
import '../css/app.css';

import {createRoot} from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react';
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'react-admin'
import {createTheme} from '@mui/material';



const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
const theme = createTheme();
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<ThemeProvider theme={theme}><BrowserRouter><App {...props} /></BrowserRouter></ThemeProvider>);
    },
    progress: {
        color: '#4B5563',
    },
});
