import Vue    from "vue";
import "./plugins/vuetify";
import App    from "./App.vue";
import router from "./router";

// 引入 vuetify 插件
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

// 使用 Vue.use 注册到全局中，来使用插件
Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
	router,
	render: h => h(App)
}).$mount("#app");
