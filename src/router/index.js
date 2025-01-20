import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from '@/components/layout/DefaultLayout.vue';

// 페이지 컴포넌트 가져오기
import MyProblemSets from "@/pages/MyProblemSets.vue";
import MyProblems from "@/pages/MyProblems.vue";
import MyCustomProblems from "@/pages/MyCustomProblems.vue";
import ProblemBoard from "@/pages/ProblemBoard.vue";
import ProblemSetBoard from "@/pages/problem-set-board/ProblemSetBoard.vue";
import ReviewBoard from "@/pages/ReviewBoard.vue";
import ExamRoom from "@/pages/exam-room/ExamRoom.vue";
import MainContent from "@/components/layout/MainContent.vue";
import LandingPage from "@/pages/LandingPage.vue";
import ExamHistory from "@/pages/ExamHistory.vue";
import ProblemSetBoardDetail from "@/pages/ProblemSetBoardDetail.vue";

const routes = [
  // 레이아웃이 필요없는 페이지들
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
  },
  {
    path: '/editor',
    name: 'Editor',
    component: () => import('@/pages/Editor.vue'),
  },
  {
    path: '/exam',
    name: 'ExamEnvironment',
    component: () => import('@/pages/ExamEnvironment.vue'),
  },

  // DefaultLayout을 사용하는 페이지들
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: MainContent,
      },
      {
        path: 'my-problems',
        name: 'MyProblems',
        component: MyProblems,
      },
      {
        path: 'my-problem-sets',
        name: 'MyProblemSets',
        component: MyProblemSets,
      },
      {
        path: 'my-custom-problems',
        name: 'MyCustomProblems',
        component: MyCustomProblems,
      },
      {
        path: 'problem-board',
        name: 'ProblemBoard',
        component: ProblemBoard,
      },
      {
        path: 'problem-set-board',
        name: 'ProblemSetBoard',
        component: ProblemSetBoard,
      },
      {
        path: 'review-board',
        name: 'ReviewBoard',
        component: ReviewBoard,
      },
      {
        path: 'exam-room',
        name: 'ExamRoom',
        component: ExamRoom,
      },
      {
        path: 'exam-history',
        name: 'ExamHistory',
        component: ExamHistory,
      },
      {
        path: 'problem-set-board/:problemSetId',
        name: 'ProblemSetBoardDetail',
        component: ProblemSetBoardDetail,
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;