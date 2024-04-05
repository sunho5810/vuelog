import { createWebHistory, createRouter } from "vue-router";
import App from "../App.vue";
import VlogHome from "../components/VlogHome.vue";
import BoardList from "../components/BoardList.vue";
import BoardDetail from "../components/BoardDetail.vue";

/* vue-router 1 : 세팅
    어떤 링크에서 어떤 파일을 보여줄지 import해서 밑에 데이터로 설정해준다.
    ***순서에 따라 우선순위가 높다.
*/
const routes = [
  {
    path: "/",
    component: App,
  },
  {
    path: "/home",
    component: VlogHome,
  },
  {
    path: "/list",
    component: BoardList,
  },
  /* router param 1 : /페이지명/:작명 하면 해당 파라미터 값에 따라 보여지는 데이터가 달라짐 */
  /* router param 3 : 파라미터에 ()를 이용해 정규식으로 값을 제한 할 수 있다.
    ex)/:id(정규식), /:id/:id/:id/:id/:id -> /:id*로 대체 가능, /:anythings(.*) 를 이용해서 404페이지도 만들 수 있음
  */
  {
    path: "/detail/:id",
    component: BoardDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
