import App from './App.svelte';
// import { initPathRouter } from '@bjornlu/svelte-router'
// import SignIn from './components/SiginIn.svelte'

// initPathRouter([
// 	{ path: '/app', component: SignIn }
// ])

const app = new App({
	target: document.body,
});

export default app;