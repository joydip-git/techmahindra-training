import Home from "../components/common/home/Home";
import PageNotFound from "../components/common/page-not-found/PageNotFound";
import ProductAdd from "../components/products/product-add/ProductAdd";
import ProductUpdate from "../components/products/product-update/ProductUpdate";
import ProductView from "../components/products/product-view/ProductView";
import ProductList from "../containers/products/product-list/ProductList";
import { RouteInfo } from "../models/route-info";

// import { lazy } from "react"
// import { RouteInfo } from "../models/route-info";

// const Home = lazy(() => import("../components/common/home/Home"))
// const PageNotFound = lazy(() => import("../components/common/page-not-found/PageNotFound"))
// const ProductAdd = lazy(() => import("../components/products/product-add/ProductAdd"))
// const ProductUpdate = lazy(() => import("../components/products/product-update/ProductUpdate"))
// const ProductList = lazy(() => import("../containers/products/product-list/ProductList"))


export const appRoutes: RouteInfo[] = [
    {
        routeId: 1,
        routePath: '/',
        component: Home
    },
    {
        routeId: 2,
        routePath: '/home',
        component: Home
    },
    {
        routeId: 3,
        routePath: '/products',
        component: ProductList
    },
    {
        routeId: 4,
        routePath: '/products/add',
        component: ProductAdd
    },
    {
        routeId: 5,
        routePath: '/products/update/:id',
        component: ProductUpdate
    },
    {
        routeId: 6,
        routePath: '/products/view/:id',
        component: ProductView
    },
    {
        routeId: 7,
        routePath: '**',
        component: PageNotFound
    }
]