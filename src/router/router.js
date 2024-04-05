import { createWebHistory, createRouter } from "vue-router";
import VlogHome from "../components/VlogHome.vue";
import BoardList from "../components/BoardList.vue";
import BoardDetail from "../components/BoardDetail.vue";
import BoardComment from "../components/BoardComment.vue";

/* vue-router 1 : 세팅
    어떤 링크에서 어떤 파일을 보여줄지 import해서 밑에 데이터로 설정해준다.
    ***순서에 따라 우선순위가 높다.
*/
const routes = [
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
  /* nested routes 1 : 페이지를 타고타고 넘어가는 경우
    children: [{}]를 통해서 설정해줄 수 있다.
  */

  {
    path: "/detail/:id",
    component: BoardDetail,
    children: [
      {
        /* nested routes 3 : url을 설정 할 때 타고타고 가는 url들은 경로 문제로 /를 빼준다. */
        path: "comment",
        component: BoardComment,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
