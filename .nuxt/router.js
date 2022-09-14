import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _316f4eab = () => interopDefault(import('..\\pages\\calendar\\index.vue' /* webpackChunkName: "pages/calendar/index" */))
const _ee9b8c5e = () => interopDefault(import('..\\pages\\chat\\index.vue' /* webpackChunkName: "pages/chat/index" */))
const _b749d89e = () => interopDefault(import('..\\pages\\account\\forgot-password.vue' /* webpackChunkName: "pages/account/forgot-password" */))
const _f128afd6 = () => interopDefault(import('..\\pages\\account\\login.vue' /* webpackChunkName: "pages/account/login" */))
const _712406b2 = () => interopDefault(import('..\\pages\\account\\register.vue' /* webpackChunkName: "pages/account/register" */))
const _72520e86 = () => interopDefault(import('..\\pages\\auth\\lock-screen.vue' /* webpackChunkName: "pages/auth/lock-screen" */))
const _05ad143c = () => interopDefault(import('..\\pages\\auth\\login-1.vue' /* webpackChunkName: "pages/auth/login-1" */))
const _12ed568c = () => interopDefault(import('..\\pages\\auth\\recoverpwd.vue' /* webpackChunkName: "pages/auth/recoverpwd" */))
const _0d61c9e8 = () => interopDefault(import('..\\pages\\auth\\register-1.vue' /* webpackChunkName: "pages/auth/register-1" */))
const _4b9598f5 = () => interopDefault(import('..\\pages\\calendar\\data-calendar.js' /* webpackChunkName: "pages/calendar/data-calendar" */))
const _a198b0dc = () => interopDefault(import('..\\pages\\charts\\apex\\index.vue' /* webpackChunkName: "pages/charts/apex/index" */))
const _c3d664f0 = () => interopDefault(import('..\\pages\\charts\\chartist\\index.vue' /* webpackChunkName: "pages/charts/chartist/index" */))
const _f22208ce = () => interopDefault(import('..\\pages\\charts\\chartjs\\index.vue' /* webpackChunkName: "pages/charts/chartjs/index" */))
const _f5eb718a = () => interopDefault(import('..\\pages\\charts\\echart\\index.vue' /* webpackChunkName: "pages/charts/echart/index" */))
const _cf731198 = () => interopDefault(import('..\\pages\\chat\\data.js' /* webpackChunkName: "pages/chat/data" */))
const _ee9c7d5c = () => interopDefault(import('..\\pages\\contacts\\grid.vue' /* webpackChunkName: "pages/contacts/grid" */))
const _741d0aac = () => interopDefault(import('..\\pages\\contacts\\list.vue' /* webpackChunkName: "pages/contacts/list" */))
const _2c04b666 = () => interopDefault(import('..\\pages\\contacts\\profile.vue' /* webpackChunkName: "pages/contacts/profile" */))
const _dd842708 = () => interopDefault(import('..\\pages\\ecommerce\\add-product.vue' /* webpackChunkName: "pages/ecommerce/add-product" */))
const _162db592 = () => interopDefault(import('..\\pages\\ecommerce\\cart.vue' /* webpackChunkName: "pages/ecommerce/cart" */))
const _f3d2c646 = () => interopDefault(import('..\\pages\\ecommerce\\checkout.vue' /* webpackChunkName: "pages/ecommerce/checkout" */))
const _31524c4e = () => interopDefault(import('..\\pages\\ecommerce\\customers.vue' /* webpackChunkName: "pages/ecommerce/customers" */))
const _f497ae22 = () => interopDefault(import('..\\pages\\ecommerce\\data-products.js' /* webpackChunkName: "pages/ecommerce/data-products" */))
const _5722bebc = () => interopDefault(import('..\\pages\\ecommerce\\orders.vue' /* webpackChunkName: "pages/ecommerce/orders" */))
const _6c6be1fb = () => interopDefault(import('..\\pages\\ecommerce\\products.vue' /* webpackChunkName: "pages/ecommerce/products" */))
const _48c2b3fb = () => interopDefault(import('..\\pages\\ecommerce\\records.vue' /* webpackChunkName: "pages/ecommerce/records" */))
const _6138b80e = () => interopDefault(import('..\\pages\\email\\data-inbox.js' /* webpackChunkName: "pages/email/data-inbox" */))
const _65197c23 = () => interopDefault(import('..\\pages\\email\\inbox.vue' /* webpackChunkName: "pages/email/inbox" */))
const _1d2c1eaa = () => interopDefault(import('..\\pages\\email\\sidepanel.vue' /* webpackChunkName: "pages/email/sidepanel" */))
const _0cf81550 = () => interopDefault(import('..\\pages\\email\\toolbar.vue' /* webpackChunkName: "pages/email/toolbar" */))
const _18d2215f = () => interopDefault(import('..\\pages\\form\\advanced.vue' /* webpackChunkName: "pages/form/advanced" */))
const _ca7a3b2c = () => interopDefault(import('..\\pages\\form\\editor.vue' /* webpackChunkName: "pages/form/editor" */))
const _527907b4 = () => interopDefault(import('..\\pages\\form\\elements.vue' /* webpackChunkName: "pages/form/elements" */))
const _9bf634ae = () => interopDefault(import('..\\pages\\form\\mask.vue' /* webpackChunkName: "pages/form/mask" */))
const _057bd5c5 = () => interopDefault(import('..\\pages\\form\\repeater.vue' /* webpackChunkName: "pages/form/repeater" */))
const _2deb3604 = () => interopDefault(import('..\\pages\\form\\upload.vue' /* webpackChunkName: "pages/form/upload" */))
const _1c50a8f6 = () => interopDefault(import('..\\pages\\form\\validation.vue' /* webpackChunkName: "pages/form/validation" */))
const _ab0c5130 = () => interopDefault(import('..\\pages\\form\\wizard.vue' /* webpackChunkName: "pages/form/wizard" */))
const _c2a103c0 = () => interopDefault(import('..\\pages\\icons\\boxicons.vue' /* webpackChunkName: "pages/icons/boxicons" */))
const _2c516066 = () => interopDefault(import('..\\pages\\icons\\data-fontawesome.js' /* webpackChunkName: "pages/icons/data-fontawesome" */))
const _4aa66c26 = () => interopDefault(import('..\\pages\\icons\\data-material.js' /* webpackChunkName: "pages/icons/data-material" */))
const _29e5fb38 = () => interopDefault(import('..\\pages\\icons\\dripicons.vue' /* webpackChunkName: "pages/icons/dripicons" */))
const _7372cc53 = () => interopDefault(import('..\\pages\\icons\\fontawesome.vue' /* webpackChunkName: "pages/icons/fontawesome" */))
const _3ffd3dd6 = () => interopDefault(import('..\\pages\\icons\\materialdesign.vue' /* webpackChunkName: "pages/icons/materialdesign" */))
const _6f80b840 = () => interopDefault(import('..\\pages\\icons\\unicons.vue' /* webpackChunkName: "pages/icons/unicons" */))
const _4fc2b696 = () => interopDefault(import('..\\pages\\inventory\\Spinner.vue' /* webpackChunkName: "pages/inventory/Spinner" */))
const _064afc20 = () => interopDefault(import('..\\pages\\invoices\\detail.vue' /* webpackChunkName: "pages/invoices/detail" */))
const _11033d06 = () => interopDefault(import('..\\pages\\invoices\\list.vue' /* webpackChunkName: "pages/invoices/list" */))
const _9f4aa2ee = () => interopDefault(import('..\\pages\\maps\\google.vue' /* webpackChunkName: "pages/maps/google" */))
const _03c7a305 = () => interopDefault(import('..\\pages\\maps\\leaflet\\index.vue' /* webpackChunkName: "pages/maps/leaflet/index" */))
const _f0cd5e00 = () => interopDefault(import('..\\pages\\tables\\advanced.vue' /* webpackChunkName: "pages/tables/advanced" */))
const _ebfb4380 = () => interopDefault(import('..\\pages\\tables\\basic.vue' /* webpackChunkName: "pages/tables/basic" */))
const _03187a9b = () => interopDefault(import('..\\pages\\tables\\dataAdvancedtable.js' /* webpackChunkName: "pages/tables/dataAdvancedtable" */))
const _1a99bca4 = () => interopDefault(import('..\\pages\\ui\\alerts.vue' /* webpackChunkName: "pages/ui/alerts" */))
const _52fec578 = () => interopDefault(import('..\\pages\\ui\\buttons.vue' /* webpackChunkName: "pages/ui/buttons" */))
const _d6aa1a34 = () => interopDefault(import('..\\pages\\ui\\cards.vue' /* webpackChunkName: "pages/ui/cards" */))
const _16adf4a6 = () => interopDefault(import('..\\pages\\ui\\carousel.vue' /* webpackChunkName: "pages/ui/carousel" */))
const _15f47a06 = () => interopDefault(import('..\\pages\\ui\\colors.vue' /* webpackChunkName: "pages/ui/colors" */))
const _078db044 = () => interopDefault(import('..\\pages\\ui\\dropdown.vue' /* webpackChunkName: "pages/ui/dropdown" */))
const _72b5db2b = () => interopDefault(import('..\\pages\\ui\\general.vue' /* webpackChunkName: "pages/ui/general" */))
const _5a30ef13 = () => interopDefault(import('..\\pages\\ui\\grid.vue' /* webpackChunkName: "pages/ui/grid" */))
const _5227c405 = () => interopDefault(import('..\\pages\\ui\\images.vue' /* webpackChunkName: "pages/ui/images" */))
const _7a94fac2 = () => interopDefault(import('..\\pages\\ui\\lightbox.vue' /* webpackChunkName: "pages/ui/lightbox" */))
const _520675f3 = () => interopDefault(import('..\\pages\\ui\\modals.vue' /* webpackChunkName: "pages/ui/modals" */))
const _7b764cb6 = () => interopDefault(import('..\\pages\\ui\\placeholder.vue' /* webpackChunkName: "pages/ui/placeholder" */))
const _5af4d489 = () => interopDefault(import('..\\pages\\ui\\progressbar.vue' /* webpackChunkName: "pages/ui/progressbar" */))
const _40ca6a21 = () => interopDefault(import('..\\pages\\ui\\rangeslider.vue' /* webpackChunkName: "pages/ui/rangeslider" */))
const _23bcd8aa = () => interopDefault(import('..\\pages\\ui\\rating.vue' /* webpackChunkName: "pages/ui/rating" */))
const _ba274cfc = () => interopDefault(import('..\\pages\\ui\\sweet-alert.vue' /* webpackChunkName: "pages/ui/sweet-alert" */))
const _1482d01d = () => interopDefault(import('..\\pages\\ui\\tabs-accordions.vue' /* webpackChunkName: "pages/ui/tabs-accordions" */))
const _61ed00bc = () => interopDefault(import('..\\pages\\ui\\typography.vue' /* webpackChunkName: "pages/ui/typography" */))
const _1ca45804 = () => interopDefault(import('..\\pages\\ui\\video.vue' /* webpackChunkName: "pages/ui/video" */))
const _db2171f6 = () => interopDefault(import('..\\pages\\utility\\404.vue' /* webpackChunkName: "pages/utility/404" */))
const _71c5b77c = () => interopDefault(import('..\\pages\\utility\\500.vue' /* webpackChunkName: "pages/utility/500" */))
const _1b28c182 = () => interopDefault(import('..\\pages\\utility\\comingsoon.vue' /* webpackChunkName: "pages/utility/comingsoon" */))
const _dd6e18c0 = () => interopDefault(import('..\\pages\\utility\\faqs.vue' /* webpackChunkName: "pages/utility/faqs" */))
const _a779f340 = () => interopDefault(import('..\\pages\\utility\\maintenance.vue' /* webpackChunkName: "pages/utility/maintenance" */))
const _049c8413 = () => interopDefault(import('..\\pages\\utility\\pricing.vue' /* webpackChunkName: "pages/utility/pricing" */))
const _570f985c = () => interopDefault(import('..\\pages\\utility\\starter.vue' /* webpackChunkName: "pages/utility/starter" */))
const _ad48df78 = () => interopDefault(import('..\\pages\\utility\\timeline.vue' /* webpackChunkName: "pages/utility/timeline" */))
const _641a6135 = () => interopDefault(import('..\\pages\\charts\\apex\\data.js' /* webpackChunkName: "pages/charts/apex/data" */))
const _6c4ee6aa = () => interopDefault(import('..\\pages\\charts\\chartist\\data.js' /* webpackChunkName: "pages/charts/chartist/data" */))
const _50c32d34 = () => interopDefault(import('..\\pages\\charts\\chartjs\\BarChart.vue' /* webpackChunkName: "pages/charts/chartjs/BarChart" */))
const _7cce7ac5 = () => interopDefault(import('..\\pages\\charts\\chartjs\\DonutChart.vue' /* webpackChunkName: "pages/charts/chartjs/DonutChart" */))
const _5ac66771 = () => interopDefault(import('..\\pages\\charts\\chartjs\\LineChart.vue' /* webpackChunkName: "pages/charts/chartjs/LineChart" */))
const _0835e04a = () => interopDefault(import('..\\pages\\charts\\chartjs\\PieChart.vue' /* webpackChunkName: "pages/charts/chartjs/PieChart" */))
const _795fca29 = () => interopDefault(import('..\\pages\\charts\\chartjs\\PolarChart.vue' /* webpackChunkName: "pages/charts/chartjs/PolarChart" */))
const _1738513e = () => interopDefault(import('..\\pages\\charts\\chartjs\\RadarChart.vue' /* webpackChunkName: "pages/charts/chartjs/RadarChart" */))
const _e19251c4 = () => interopDefault(import('..\\pages\\charts\\echart\\data.js' /* webpackChunkName: "pages/charts/echart/data" */))
const _6f101e55 = () => interopDefault(import('..\\pages\\ecommerce\\cars\\cars.vue' /* webpackChunkName: "pages/ecommerce/cars/cars" */))
const _62bb7f3e = () => interopDefault(import('..\\pages\\maps\\leaflet\\basic.vue' /* webpackChunkName: "pages/maps/leaflet/basic" */))
const _10d96b47 = () => interopDefault(import('..\\pages\\maps\\leaflet\\boundary.vue' /* webpackChunkName: "pages/maps/leaflet/boundary" */))
const _6d5d278f = () => interopDefault(import('..\\pages\\maps\\leaflet\\geometry.vue' /* webpackChunkName: "pages/maps/leaflet/geometry" */))
const _3bd72d66 = () => interopDefault(import('..\\pages\\maps\\leaflet\\icons.vue' /* webpackChunkName: "pages/maps/leaflet/icons" */))
const _2df1076c = () => interopDefault(import('..\\pages\\maps\\leaflet\\markers.vue' /* webpackChunkName: "pages/maps/leaflet/markers" */))
const _e5849332 = () => interopDefault(import('..\\pages\\email\\reademail\\_id.vue' /* webpackChunkName: "pages/email/reademail/_id" */))
const _223b8ae9 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/calendar",
    component: _316f4eab,
    name: "calendar"
  }, {
    path: "/chat",
    component: _ee9b8c5e,
    name: "chat"
  }, {
    path: "/account/forgot-password",
    component: _b749d89e,
    name: "account-forgot-password"
  }, {
    path: "/account/login",
    component: _f128afd6,
    name: "account-login"
  }, {
    path: "/account/register",
    component: _712406b2,
    name: "account-register"
  }, {
    path: "/auth/lock-screen",
    component: _72520e86,
    name: "auth-lock-screen"
  }, {
    path: "/auth/login-1",
    component: _05ad143c,
    name: "auth-login-1"
  }, {
    path: "/auth/recoverpwd",
    component: _12ed568c,
    name: "auth-recoverpwd"
  }, {
    path: "/auth/register-1",
    component: _0d61c9e8,
    name: "auth-register-1"
  }, {
    path: "/calendar/data-calendar",
    component: _4b9598f5,
    name: "calendar-data-calendar"
  }, {
    path: "/charts/apex",
    component: _a198b0dc,
    name: "charts-apex"
  }, {
    path: "/charts/chartist",
    component: _c3d664f0,
    name: "charts-chartist"
  }, {
    path: "/charts/chartjs",
    component: _f22208ce,
    name: "charts-chartjs"
  }, {
    path: "/charts/echart",
    component: _f5eb718a,
    name: "charts-echart"
  }, {
    path: "/chat/data",
    component: _cf731198,
    name: "chat-data"
  }, {
    path: "/contacts/grid",
    component: _ee9c7d5c,
    name: "contacts-grid"
  }, {
    path: "/contacts/list",
    component: _741d0aac,
    name: "contacts-list"
  }, {
    path: "/contacts/profile",
    component: _2c04b666,
    name: "contacts-profile"
  }, {
    path: "/ecommerce/add-product",
    component: _dd842708,
    name: "ecommerce-add-product"
  }, {
    path: "/ecommerce/cart",
    component: _162db592,
    name: "ecommerce-cart"
  }, {
    path: "/ecommerce/checkout",
    component: _f3d2c646,
    name: "ecommerce-checkout"
  }, {
    path: "/ecommerce/customers",
    component: _31524c4e,
    name: "ecommerce-customers"
  }, {
    path: "/ecommerce/data-products",
    component: _f497ae22,
    name: "ecommerce-data-products"
  }, {
    path: "/ecommerce/orders",
    component: _5722bebc,
    name: "ecommerce-orders"
  }, {
    path: "/ecommerce/products",
    component: _6c6be1fb,
    name: "ecommerce-products"
  }, {
    path: "/ecommerce/records",
    component: _48c2b3fb,
    name: "ecommerce-records"
  }, {
    path: "/email/data-inbox",
    component: _6138b80e,
    name: "email-data-inbox"
  }, {
    path: "/email/inbox",
    component: _65197c23,
    name: "email-inbox"
  }, {
    path: "/email/sidepanel",
    component: _1d2c1eaa,
    name: "email-sidepanel"
  }, {
    path: "/email/toolbar",
    component: _0cf81550,
    name: "email-toolbar"
  }, {
    path: "/form/advanced",
    component: _18d2215f,
    name: "form-advanced"
  }, {
    path: "/form/editor",
    component: _ca7a3b2c,
    name: "form-editor"
  }, {
    path: "/form/elements",
    component: _527907b4,
    name: "form-elements"
  }, {
    path: "/form/mask",
    component: _9bf634ae,
    name: "form-mask"
  }, {
    path: "/form/repeater",
    component: _057bd5c5,
    name: "form-repeater"
  }, {
    path: "/form/upload",
    component: _2deb3604,
    name: "form-upload"
  }, {
    path: "/form/validation",
    component: _1c50a8f6,
    name: "form-validation"
  }, {
    path: "/form/wizard",
    component: _ab0c5130,
    name: "form-wizard"
  }, {
    path: "/icons/boxicons",
    component: _c2a103c0,
    name: "icons-boxicons"
  }, {
    path: "/icons/data-fontawesome",
    component: _2c516066,
    name: "icons-data-fontawesome"
  }, {
    path: "/icons/data-material",
    component: _4aa66c26,
    name: "icons-data-material"
  }, {
    path: "/icons/dripicons",
    component: _29e5fb38,
    name: "icons-dripicons"
  }, {
    path: "/icons/fontawesome",
    component: _7372cc53,
    name: "icons-fontawesome"
  }, {
    path: "/icons/materialdesign",
    component: _3ffd3dd6,
    name: "icons-materialdesign"
  }, {
    path: "/icons/unicons",
    component: _6f80b840,
    name: "icons-unicons"
  }, {
    path: "/inventory/Spinner",
    component: _4fc2b696,
    name: "inventory-Spinner"
  }, {
    path: "/invoices/detail",
    component: _064afc20,
    name: "invoices-detail"
  }, {
    path: "/invoices/list",
    component: _11033d06,
    name: "invoices-list"
  }, {
    path: "/maps/google",
    component: _9f4aa2ee,
    name: "maps-google"
  }, {
    path: "/maps/leaflet",
    component: _03c7a305,
    name: "maps-leaflet"
  }, {
    path: "/tables/advanced",
    component: _f0cd5e00,
    name: "tables-advanced"
  }, {
    path: "/tables/basic",
    component: _ebfb4380,
    name: "tables-basic"
  }, {
    path: "/tables/dataAdvancedtable",
    component: _03187a9b,
    name: "tables-dataAdvancedtable"
  }, {
    path: "/ui/alerts",
    component: _1a99bca4,
    name: "ui-alerts"
  }, {
    path: "/ui/buttons",
    component: _52fec578,
    name: "ui-buttons"
  }, {
    path: "/ui/cards",
    component: _d6aa1a34,
    name: "ui-cards"
  }, {
    path: "/ui/carousel",
    component: _16adf4a6,
    name: "ui-carousel"
  }, {
    path: "/ui/colors",
    component: _15f47a06,
    name: "ui-colors"
  }, {
    path: "/ui/dropdown",
    component: _078db044,
    name: "ui-dropdown"
  }, {
    path: "/ui/general",
    component: _72b5db2b,
    name: "ui-general"
  }, {
    path: "/ui/grid",
    component: _5a30ef13,
    name: "ui-grid"
  }, {
    path: "/ui/images",
    component: _5227c405,
    name: "ui-images"
  }, {
    path: "/ui/lightbox",
    component: _7a94fac2,
    name: "ui-lightbox"
  }, {
    path: "/ui/modals",
    component: _520675f3,
    name: "ui-modals"
  }, {
    path: "/ui/placeholder",
    component: _7b764cb6,
    name: "ui-placeholder"
  }, {
    path: "/ui/progressbar",
    component: _5af4d489,
    name: "ui-progressbar"
  }, {
    path: "/ui/rangeslider",
    component: _40ca6a21,
    name: "ui-rangeslider"
  }, {
    path: "/ui/rating",
    component: _23bcd8aa,
    name: "ui-rating"
  }, {
    path: "/ui/sweet-alert",
    component: _ba274cfc,
    name: "ui-sweet-alert"
  }, {
    path: "/ui/tabs-accordions",
    component: _1482d01d,
    name: "ui-tabs-accordions"
  }, {
    path: "/ui/typography",
    component: _61ed00bc,
    name: "ui-typography"
  }, {
    path: "/ui/video",
    component: _1ca45804,
    name: "ui-video"
  }, {
    path: "/utility/404",
    component: _db2171f6,
    name: "utility-404"
  }, {
    path: "/utility/500",
    component: _71c5b77c,
    name: "utility-500"
  }, {
    path: "/utility/comingsoon",
    component: _1b28c182,
    name: "utility-comingsoon"
  }, {
    path: "/utility/faqs",
    component: _dd6e18c0,
    name: "utility-faqs"
  }, {
    path: "/utility/maintenance",
    component: _a779f340,
    name: "utility-maintenance"
  }, {
    path: "/utility/pricing",
    component: _049c8413,
    name: "utility-pricing"
  }, {
    path: "/utility/starter",
    component: _570f985c,
    name: "utility-starter"
  }, {
    path: "/utility/timeline",
    component: _ad48df78,
    name: "utility-timeline"
  }, {
    path: "/charts/apex/data",
    component: _641a6135,
    name: "charts-apex-data"
  }, {
    path: "/charts/chartist/data",
    component: _6c4ee6aa,
    name: "charts-chartist-data"
  }, {
    path: "/charts/chartjs/BarChart",
    component: _50c32d34,
    name: "charts-chartjs-BarChart"
  }, {
    path: "/charts/chartjs/DonutChart",
    component: _7cce7ac5,
    name: "charts-chartjs-DonutChart"
  }, {
    path: "/charts/chartjs/LineChart",
    component: _5ac66771,
    name: "charts-chartjs-LineChart"
  }, {
    path: "/charts/chartjs/PieChart",
    component: _0835e04a,
    name: "charts-chartjs-PieChart"
  }, {
    path: "/charts/chartjs/PolarChart",
    component: _795fca29,
    name: "charts-chartjs-PolarChart"
  }, {
    path: "/charts/chartjs/RadarChart",
    component: _1738513e,
    name: "charts-chartjs-RadarChart"
  }, {
    path: "/charts/echart/data",
    component: _e19251c4,
    name: "charts-echart-data"
  }, {
    path: "/ecommerce/cars/cars",
    component: _6f101e55,
    name: "ecommerce-cars-cars"
  }, {
    path: "/maps/leaflet/basic",
    component: _62bb7f3e,
    name: "maps-leaflet-basic"
  }, {
    path: "/maps/leaflet/boundary",
    component: _10d96b47,
    name: "maps-leaflet-boundary"
  }, {
    path: "/maps/leaflet/geometry",
    component: _6d5d278f,
    name: "maps-leaflet-geometry"
  }, {
    path: "/maps/leaflet/icons",
    component: _3bd72d66,
    name: "maps-leaflet-icons"
  }, {
    path: "/maps/leaflet/markers",
    component: _2df1076c,
    name: "maps-leaflet-markers"
  }, {
    path: "/email/reademail/:id?",
    component: _e5849332,
    name: "email-reademail-id"
  }, {
    path: "/",
    component: _223b8ae9,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
