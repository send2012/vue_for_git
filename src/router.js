import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			name: "home",
			component: () => import(/* webpackchunkName: "home" */ "./views/Home.vue")
		},
		{
			path: "/about",
			name: "about",
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "about" */ "./views/About.vue")
		},
		{
			path: "/demo-one",
			name: "demo-one",
			component: () => import(/* webpackChunkName: "test" */ "./views/demo_one.vue")
		}
	]
});
