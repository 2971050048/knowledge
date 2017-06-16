/**
 * 用Vue.js + vue-router创建单页应用。将组件映射到路由，然后告vue-router在哪里渲染它们
 * http://router.vuejs.org/zh-cn/
 * npm i vue vue-router -S
 */

//html文件
<template>
    <div id="app">
    <h1>Hello App!</h1>
    <p>
        使用 router-link 组件来导航，通过传入 `to` 属性指定链接. 
        <router-link to="/foo">Go to Foo</router-link>
        <router-link to="/bar">Go to Bar</router-link>
    </p>
    路由匹配到的组件将渲染在这里
    <router-view></router-view>
    </div>
</template>

//js文件
<script>    
    import Vue from 'vue';
    import VueRouter from 'vue-router';

    Vue.use(VueRouter); //使用路由

    // 组件
    const Foo = { template: '<div>foo</div>' }
    const Bar = { template: '<div>bar</div>' }

    // 路由表，每个路由映射一个组件
    const routes = [
        { path: '/foo', component: Foo },
        { path: '/bar', component: Bar }
    ]

    // 创建router实例，然后传`routes`配置
    const router = new VueRouter({
        routes //相当于routes: routes
    })

    // 创建和挂载根实例
    const app = new Vue({
        router
    }).$mount('#app')

//动态路由配置: 匹配到的路由映射到同个组件
    const router2 = new VueRouter({
        routes: [
            // 动态路径参数 以冒号开头
            { path: '/user/:id', component: { template: '<div>{{ $route.params.id }}</div>' } }
        ]
    })

//嵌套路由:
    const User = {
    template: `
        <div class="user">
        <h2>User {{ $route.params.id }}</h2>
        <router-view></router-view>
        </div>
    `
    };
    const router3 = new VueRouter({
        routes: [{ 
            path: '/user/:id', 
            component: User,
            children: [
                {
                    // 当 /user/:id/profile 匹配成功，UserProfile被渲染在User的<router-view>中
                    path: 'profile',
                    component: UserProfile
                },
                {
                    path: 'posts',
                    component: UserPosts
                }
            ]
        }]
    })

//编程式导航
    router.push(location)//向history栈添加一个新的记录,等同于router-link中的to导航
        router.push('home');  // 字符串
        router.push({ path: 'home' });// 对象
        router.push({ name: 'user', params: { userId: 123 }});// 命名的路由
        router.push({ path: 'register', query: { plan: 'private' }}); // 带查询参数，变成 /register?plan=private
    router.replace(location)//替换掉当前的history 记录
    router.go(n);//参数是整数，在history记录中向前或者后退多少步

//命名路由: 在routes数组中的每个对象添加name属性
    const router4 = new VueRouter({
        routes: [
            { path: 'user/:id', name: 'user', component: '组件1...' },
            { path: 'about', name: 'about', component: '组件2...' }
        ]
    });
    //html文件,此时是":to"而不是"to" 
  /*<router-link :to="{ name: 'user', params: { id: 123 }}">bar</router-link>
    <router-link :to="{ name: 'about'}">foo</router-link> */

//命名视图:同时展示多个视图
    const router5 = new VueRouter({
        routes: [
            { 
                path: '/', 
                components: {
                    default: componentA,
                    b: componentB,
                    c: componentC
                }
            }
        ]
    });
    //html文件
    <router-link to='/'>home</router-link>
    <router-view></router-view>//name默认为default
    <router-view name='b'></router-view>
    <router-view name='c'></router-view>

//重定向和别名
    const router6 = new VueRouter({
        base: __dirname,
        routes: [
            { 
                path: '/home', 
                component: '组件Home',
                children: [
                    { path: 'foo', component: '组件Foo', alias: 'foo-alias'},//别名为foo-alias
                    { path: 'bar', component: '组件Bar', alias: ['bar-alias1', 'bar-alias2']}
                ]
            },
            {
                path: '/about',
                component: '组件About',
                children: [
                    { path: 'baz', component: '组件baz', redirect: '/home/foo'},//重定向到home/foo
                    { 
                        path: 'dynamic/:id', 
                        redirect: to => {//动态返回重定向目标
                            const { hash, params, query } = to
                            if(query.to === 'foo') {
                                return { path: 'foo', query: null}
                            }
                            if(hash === '#baz') {
                                return { path: '/about/baz', hash: ''}
                            }
                            if(params.id) {
                                return '/about/user/:id'
                            } else {
                                return '/home/bar'
                            }
                        }
                    }
                ]
            }
        ]
    })

//html5 history模式
    const router7 = new VueRouter({
        mode: 'history',//路由的history模式
        routes: []
    })
    //还需要后台配置
        //Apache
        /*
            <IfModule mod_rewrite.c>
            RewriteEngine On
            RewriteBase /
            RewriteRule ^index\.html$ - [L]
            RewriteCond %{REQUEST_FILENAME} !-f
            RewriteCond %{REQUEST_FILENAME} !-d
            RewriteRule . /index.html [L]
            </IfModule>
        */

        //nginx
            /*
            location / {
                try_files $uri $uri/ /index.html;
            }
            */

        // Node.js (Express)
            // https://github.com/bripkens/connect-history-api-fallback

//路由信息对象: 当前激活路由的状态信息
    /**
     * 使用场景:
     * 1.组件内的this.$route和$route watcher回调; 
     * 2.router.match(location)的返回值 
     * 3.导航钩子的参数：
     * router.beforeEach((to, from, next) => { // to 和 from 都是 路由信息对象 })
     * const router = new VueRouter({ 
     *    scrollBehavior (to, from, savedPosition) { //to和from都是路由信息对象 } 
     * })
     */

    /**
     * 属性
     * $route.path: string，当前路由的绝对路径，如"/foo/bar"
     * $route.params: Object，key/value对象，包含了动态片段和全匹配片段
     * $route.fullPath: string，完成解析后的URL，含查询参数和hash完整路径。
     * $route.query: Object，key/value对象，表URL查询参数。如路径/foo?user=1，则$route.query.user = 1
     * $route.hash: string，当前路由的hash值 (带 #)
     * $route.name，当前路由的名称
     * $route.matched: Array<RouteRecord>，包含当前路由的所有嵌套路径片段的路由记录 。路由记录就是routes配置数组中的对象副本（还有在children数组）
            const router = new VueRouter({
                routes: [
                    // 下面的对象就是 route record
                    { 
                        path: '/foo', 
                        component: Foo,
                        children: [
                            // 这也是个 route record
                            { path: 'bar', component: Bar }
                        ]
                    }
                ]
            })
        当 URL 为 /foo/bar，$route.matched包含从上到下的所有对象（副本）。
    */

//router构造配置
    /*
    const router8 = new VueRouter({
        routes: [{
            path: string,
            name: string, // 命名路由
            component: Component,
            components: { [name: string]: Component }, // 命名视图组件
            children: Array<RouteConfig>, // for nested routes
            alias: string | Array<string>,
            redirect: string | Location | Function,
            beforeEnter: (to: Route, from: Route, next: Function) => void,
            meta: any
        }],
        mode: "hash"(默认) | "history" | "abstract",
            //hash:支持所有浏览器; history:依赖HTML5 History API和服务器配置; abstract:支持所有JavaScript运行环境，如 Node.js服务器端。如果发现没有浏览器的API，路由会自动强制进入这个模式。
        base: '/'(默认),//应用的基路径
        linkActiveClass: router-link-active(默认),//激活class类名
        scrollBehavior: ( to: Route, from: Route, savedPosition: { x: number, y: number } ) => { x: number, y: number } | { selector: string } | {}
    })
    */

//router实例
    //属性
    router.app|mode|currentRoute; 配置了router的vue根实例|路由模式|路由对象信息
    //方法
    router.beforeEach(guard)|afterEach(hook)
    router.push(location)|replace(location)|go(n)
    router.back()|forward()
    router.getMatchedComponents(location)//动态的导航到一个新 url
    //返回目标位置或当前路由匹配的组件数组（是数组的定义/构造类，不是实例）。通常在服务端渲染的数据预加载时时候。
    router.resolve(location, current, append)
    router.addRoutes(routes)//解析目标位置
    router.onReady(callback)//第一次路由跳转完成时被调用的回调函数

//对组件注入
    $router //router实例
    $route //当前激活的路由信息对象,属性是只读的
</script>
