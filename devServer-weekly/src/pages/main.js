import 'babel-polyfill'
import Vue from 'vue'

import App from '../container/main.vue'

new Vue({
    el: '#app',
    render: h => h(App)
})
