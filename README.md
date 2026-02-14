# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Laravel Web Divulgativa

Aplicació React que presenta informació sobre Laravel: guia, receptes, projectes i glossari.

## Instal·lació

1. Clona el repositori
2. Executa `npm install`
3. Executa `npm run dev` per al entorn de desenvolupament

## Scripts

- `npm run dev` – Inicia el servidor de desenvolupament
- `npm run build` – Genera els fitxers per a producció
- `npm run preview` – Visualitza la build localment

## Estructura

- `public/data/` – Fitxers JSON amb el contingut
- `src/components/` – Components React
- `src/App.jsx` – Configuració de rutes

## Desplegament

El projecte està preparat per desplegar a Netlify. Connecta el repositori i Netlify detectarà automàticament la configuració.