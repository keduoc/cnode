import Vue from 'vue'
import Router from 'vue-router'
import PostList from '../components/PostList'
import PostList_good from '../components/PostList_good'
import Article from '../components/Article'
import UserInfo from '../components/UserInfo'
import SlideBar from '../components/SlideBar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name:'root',
      path:'/',
      components:{
        main:PostList
      }
    },
    {
      name:'good',
      path:'/good',
      components:{
        main:PostList_good
      }
    },
    
    {
      name:'post_content',
      path:'/topic/:id&auther=:name',
      components:{
        main:Article,
        slidebar:SlideBar
      }
    },
    {
      name:'user_info',
      path:'/userinfo/:name',
      components:{
        main:UserInfo
      }
    }

    
  ]
})
