import { createApp } from 'vue'
import App from './App.vue'
/* router 2 : 설정한 router 파일을 import해준다. */
import router from './router/router.js'
/* bootstrap 1 : bootstrap 설치 후 import해줘야 할 파일 */
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

let app = createApp(App);
app.mount('#app');
/* router 3 : use()를 이용해 설정한 router를 사용한다. */
app.use(router);
