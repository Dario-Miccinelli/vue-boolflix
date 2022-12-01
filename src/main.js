import Vue from 'vue'
import App from './App.vue'


//Importazione di bootstrap 5.2
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

/* Set up using Vue 2 */

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret ,faStar, faMagnifyingGlass, faUser,  } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faStar, faMagnifyingGlass, faUser,  )

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)





Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
