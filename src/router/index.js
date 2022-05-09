import { createRouter, createWebHashHistory  } from 'vue-router'
import index from '../views/Index.vue'
// import Calculator from '../views/Index-2.vue'
import Calculator from '../views/calculator/index.vue'
import detail from '../views/shopping/detail.vue'
import code from '../views/validation/index.vue' 
import login from '../views/user/login.vue'
import success from '../views/validation/success.vue'
import error from '../views/validation/error.vue'
import contact from '../views/contact.vue'
import product from '../views/shopping/product.vue'
import eclub from '../views/shopping/eclub.vue'
import register from '../views/user/register.vue'
import myAccountView from '../views/user/myAccountView.vue'
import myAccount from '../views/user/components/myAccount.vue'
import myOrders from '../views/user/components/myOrders.vue'
import addressBook from '../views/user/components/addressBook.vue'
import accountInformation from '../views/user/components/accountInformation.vue'
import myProductReviews from '../views/user/components/myProductReviews.vue'
import myWishList from '../views/user/components/myWishList.vue'
import editMyAccount from '../views/user/components/editMyAccount.vue'
import stairTread from '../views/shopping/stairTread.vue'
import stairStringer from '../views/shopping/stairStringer.vue'
import woodworkingTool from '../views/shopping/woodworkingTool.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/Stair Tread',
      name: 'stairTread',
      component: stairTread
    },
    {
      path: '/Stair Stringer',
      name: 'stairStringer',
      component: stairStringer
    },
    {
      path: '/Woodworking Tool',
      name: 'woodworkingTool',
      component: woodworkingTool
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: "/code",
      name: "code",
      component: code
    },
    {
      path: "/login",
      name: 'login',
      component: login
    },
    {
      path:"/success",
      name: 'success',
      component: success
    },
    {
      path:"/error",
      name:'error',
      component: error
    },
    {
      path:"/contact",
      name: "contact",
      component: contact
    },
    {
      path: '/product',
      name: 'product',
      component: product
    },
    {
      path: '/eclub',
      name: 'eclub',
      component: eclub
    },
    {
      path: "/Calculator",
      name: 'Calculator',
      component: Calculator
    },
    {
      path: "/register",
      name: 'register',
      component: register
    },
    {
      path:'/myAccountView',
      name: 'myAccountView',
      component: myAccountView,
      children:[
        {
          path:'myAccount',
          component: myAccount
        },
        {
          path:'myOrders',
          component: myOrders
        },
        {
          path:'myWishList',
          component: myWishList
        },
        {
          path:'addressBook',
          component: addressBook
        },
        {
          path:'accountInformation',
          component: accountInformation
        },
        {
          path:'myProductReviews',
          component: myProductReviews
        },
        {
          path:'editMyAccount',
          component: editMyAccount
        }

      ]
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
