import Vue from 'vue'
import VueRouter from 'vue-router'

const main=()=>import('@/views/main')
const layout=()=>import('@/views/layout.vue')
const article_list=()=>import('@/components/article_list.vue')
const writearticle=()=>import('@/components/write/writearticle.vue')


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
	redirect:'/layout'
  },
  {
	path:'/layout',
	name:'layout',
	component:layout,
	children:[
		{
			path: '',
			redirect:'write_list'
		},
		{
			path:'write_list',
			name:"write_list",
			component:()=>import("@/views/writepage/write_list.vue")
		},
		{
			path:'writearticle',
			name:'writearticle',
			component:writearticle
		},
		{
			path:'addtag',
			name:'addtag',
			component:()=>import("@/views/tagpage/addtag.vue")
		},
		{
			path:'tag_list',
			name:'tag_list',
			component:()=>import("@/views/tagpage/tag_list.vue")
		},
		{
			path:'comment_list',
			name:'comment_list',
			component:()=>import('@/views/commentpage/comment_list.vue')
		},
		{
			path:'addclassify',
			name:'addclassify',
			component:()=>import("@/views/classifypage/addclassify.vue")
		},
		{
			path:'classify_list',
			name:'classify_list',
			component:()=>import("@/views/classifypage/classify_list.vue")
		},
		{
			path:'addlink',
			name:'addlink',
			component:()=>import('@/views/linkpage/addlink.vue')
		},
		{
			path:'link_list',
			name:'link_list',
			component:()=>import('@/views/linkpage/link_list.vue')
		}
	]
  },
  {
		path:'/main',
		name:'main',
		component:main,
		children: [
						{
							path: '',
							redirect:'article_list'
						},
		        {
		          path: 'article_list',
		          name: 'article_list',
		          component: article_list,
							
		        },
		      
		      ]
	},
	{
		path:'/writearticle',
		component:writearticle
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
