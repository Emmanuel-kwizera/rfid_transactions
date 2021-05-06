import App from './App.svelte';
import { initPathRouter } from '@bjornlu/svelte-router'
import SignIn from './components/SiginIn.svelte'

initPathRouter([
	{ path: '/App', component: SignIn }
  ])

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;