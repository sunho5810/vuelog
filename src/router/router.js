import { createWebHistory, createRouter } from "vue-router";
import VlogHome from '../components/VlogHome.vue';
import BoardList from '../components/BoardList.vue';
import BoardDetail from '../components/BoardDetail.vue';

/* vue-router 1 : 세팅
    어떤 링크에서 어떤 파일을 보여줄지 import해서 밑에 데이터로 설정해준다.
*/
const routes = [
  {
    path: "/",
    component: VlogHome,
  },
  {
    path: "/list",
    component: BoardList,
  },
  {
    path: "/detail",
    component: BoardDetail,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 