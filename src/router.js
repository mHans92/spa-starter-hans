import { Router } from '@vaadin/router';

const outlet = document.querySelector('#outlet');
const router = new Router(outlet);

router.setRoutes([
    {path: '/', component: 'home-page'},
    {path: '/search', component: 'search-page'},
    {path: '/favorites', component: 'favorites-page'},
    {path: '(.*)', redirect: '/'}
])