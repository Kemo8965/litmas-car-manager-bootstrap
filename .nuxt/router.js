import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5b4371ad = () => interopDefault(import('..\\pages\\calendar\\index.vue' /* webpackChunkName: "pages/calendar/index" */))
const _d6f7a45a = () => interopDefault(import('..\\pages\\chat\\index.vue' /* webpackChunkName: "pages/chat/index" */))
const _3c1132ef = () => interopDefault(import('..\\pages\\account\\forgot-password.vue' /* webpackChunkName: "pages/account/forgot-password" */))
const _0ce61cd3 = () => interopDefault(import('..\\pages\\account\\login.vue' /* webpackChunkName: "pages/account/login" */))
const _667531ae = () => interopDefault(import('..\\pages\\account\\register.vue' /* webpackChunkName: "pages/account/register" */))
const _67a33982 = () => interopDefault(import('..\\pages\\auth\\lock-screen.vue' /* webpackChunkName: "pages/auth/lock-screen" */))
const _64d20fbe = () => interopDefault(import('..\\pages\\auth\\login-1.vue' /* webpackChunkName: "pages/auth/login-1" */))
const _073991f8 = () => interopDefault(import('..\\pages\\auth\\recoverpwd.vue' /* webpackChunkName: "pages/auth/recoverpwd" */))
const _1e120726 = () => interopDefault(import('..\\pages\\auth\\register-1.vue' /* webpackChunkName: "pages/auth/register-1" */))
const _77b3209a = () => interopDefault(import('..\\pages\\calendar\\data-calendar.js' /* webpackChunkName: "pages/calendar/data-calendar" */))
const _874b0cd8 = () => interopDefault(import('..\\pages\\charts\\apex\\index.vue' /* webpackChunkName: "pages/charts/apex/index" */))
const _379ece8a = () => interopDefault(import('..\\pages\\charts\\chartist\\index.vue' /* webpackChunkName: "pages/charts/chartist/index" */))
const _01005b52 = () => interopDefault(import('..\\pages\\charts\\chartjs\\index.vue' /* webpackChunkName: "pages/charts/chartjs/index" */))
const _3876be86 = () => interopDefault(import('..\\pages\\charts\\echart\\index.vue' /* webpackChunkName: "pages/charts/echart/index" */))
const _30a983b6 = () => interopDefault(import('..\\pages\\chat\\data.js' /* webpackChunkName: "pages/chat/data" */))
const _0e2c3610 = () => interopDefault(import('..\\pages\\contacts\\grid.vue' /* webpackChunkName: "pages/contacts/grid" */))
const _4b6bef68 = () => interopDefault(import('..\\pages\\contacts\\list.vue' /* webpackChunkName: "pages/contacts/list" */))
const _2155e162 = () => interopDefault(import('..\\pages\\contacts\\profile.vue' /* webpackChunkName: "pages/contacts/profile" */))
const _09cec33a = () => interopDefault(import('..\\pages\\ecommerce\\add-product.vue' /* webpackChunkName: "pages/ecommerce/add-product" */))
const _1ebd4839 = () => interopDefault(import('..\\pages\\ecommerce\\cart.vue' /* webpackChunkName: "pages/ecommerce/cart" */))
const _d9852242 = () => interopDefault(import('..\\pages\\ecommerce\\checkout.vue' /* webpackChunkName: "pages/ecommerce/checkout" */))
const _6df48ae8 = () => interopDefault(import('..\\pages\\ecommerce\\customers.vue' /* webpackChunkName: "pages/ecommerce/customers" */))
const _1f3e29f1 = () => interopDefault(import('..\\pages\\ecommerce\\data-products.js' /* webpackChunkName: "pages/ecommerce/data-products" */))
const _5c7a293e = () => interopDefault(import('..\\pages\\ecommerce\\orders.vue' /* webpackChunkName: "pages/ecommerce/orders" */))
const _7992b3fd = () => interopDefault(import('..\\pages\\ecommerce\\products.vue' /* webpackChunkName: "pages/ecommerce/products" */))
const _328075f4 = () => interopDefault(import('..\\pages\\ecommerce\\shops.vue' /* webpackChunkName: "pages/ecommerce/shops" */))
const _3fd83d92 = () => interopDefault(import('..\\pages\\email\\data-inbox.js' /* webpackChunkName: "pages/email/data-inbox" */))
const _58f3ef3e = () => interopDefault(import('..\\pages\\email\\inbox.vue' /* webpackChunkName: "pages/email/inbox" */))
const _2ddc5be8 = () => interopDefault(import('..\\pages\\email\\sidepanel.vue' /* webpackChunkName: "pages/email/sidepanel" */))
const _7efe6a16 = () => interopDefault(import('..\\pages\\email\\toolbar.vue' /* webpackChunkName: "pages/email/toolbar" */))
const _c366d3c6 = () => interopDefault(import('..\\pages\\form\\advanced.vue' /* webpackChunkName: "pages/form/advanced" */))
const _092f6ea8 = () => interopDefault(import('..\\pages\\form\\editor.vue' /* webpackChunkName: "pages/form/editor" */))
const _5019071c = () => interopDefault(import('..\\pages\\form\\elements.vue' /* webpackChunkName: "pages/form/elements" */))
const _26036967 = () => interopDefault(import('..\\pages\\form\\mask.vue' /* webpackChunkName: "pages/form/mask" */))
const _ea136afa = () => interopDefault(import('..\\pages\\form\\repeater.vue' /* webpackChunkName: "pages/form/repeater" */))
const _5776f13c = () => interopDefault(import('..\\pages\\form\\upload.vue' /* webpackChunkName: "pages/form/upload" */))
const _2d00e634 = () => interopDefault(import('..\\pages\\form\\validation.vue' /* webpackChunkName: "pages/form/validation" */))
const _18e663a6 = () => interopDefault(import('..\\pages\\form\\wizard.vue' /* webpackChunkName: "pages/form/wizard" */))
const _6ef8bdbc = () => interopDefault(import('..\\pages\\icons\\boxicons.vue' /* webpackChunkName: "pages/icons/boxicons" */))
const _6268268b = () => interopDefault(import('..\\pages\\icons\\data-fontawesome.js' /* webpackChunkName: "pages/icons/data-fontawesome" */))
const _57cd3e28 = () => interopDefault(import('..\\pages\\icons\\data-material.js' /* webpackChunkName: "pages/icons/data-material" */))
const _088580bc = () => interopDefault(import('..\\pages\\icons\\dripicons.vue' /* webpackChunkName: "pages/icons/dripicons" */))
const _1908b211 = () => interopDefault(import('..\\pages\\icons\\fontawesome.vue' /* webpackChunkName: "pages/icons/fontawesome" */))
const _c290d150 = () => interopDefault(import('..\\pages\\icons\\materialdesign.vue' /* webpackChunkName: "pages/icons/materialdesign" */))
const _1609a604 = () => interopDefault(import('..\\pages\\icons\\unicons.vue' /* webpackChunkName: "pages/icons/unicons" */))
const _0d8abf2e = () => interopDefault(import('..\\pages\\invoices\\detail.vue' /* webpackChunkName: "pages/invoices/detail" */))
const _7cf8d63b = () => interopDefault(import('..\\pages\\invoices\\list.vue' /* webpackChunkName: "pages/invoices/list" */))
const _1ec73ac7 = () => interopDefault(import('..\\pages\\maps\\google.vue' /* webpackChunkName: "pages/maps/google" */))
const _c909dd7a = () => interopDefault(import('..\\pages\\maps\\leaflet\\index.vue' /* webpackChunkName: "pages/maps/leaflet/index" */))
const _cf6ce384 = () => interopDefault(import('..\\pages\\tables\\advanced.vue' /* webpackChunkName: "pages/tables/advanced" */))
const _2db14c7c = () => interopDefault(import('..\\pages\\tables\\basic.vue' /* webpackChunkName: "pages/tables/basic" */))
const _ca62cc4e = () => interopDefault(import('..\\pages\\tables\\dataAdvancedtable.js' /* webpackChunkName: "pages/tables/dataAdvancedtable" */))
const _e2cf7f3c = () => interopDefault(import('..\\pages\\ui\\alerts.vue' /* webpackChunkName: "pages/ui/alerts" */))
const _3b5add74 = () => interopDefault(import('..\\pages\\ui\\buttons.vue' /* webpackChunkName: "pages/ui/buttons" */))
const _2d0dff68 = () => interopDefault(import('..\\pages\\ui\\cards.vue' /* webpackChunkName: "pages/ui/cards" */))
const _631591eb = () => interopDefault(import('..\\pages\\ui\\carousel.vue' /* webpackChunkName: "pages/ui/carousel" */))
const _690446bb = () => interopDefault(import('..\\pages\\ui\\colors.vue' /* webpackChunkName: "pages/ui/colors" */))
const _6aa5b41c = () => interopDefault(import('..\\pages\\ui\\dropdown.vue' /* webpackChunkName: "pages/ui/dropdown" */))
const _7e87cf2d = () => interopDefault(import('..\\pages\\ui\\general.vue' /* webpackChunkName: "pages/ui/general" */))
const _56d94a51 = () => interopDefault(import('..\\pages\\ui\\grid.vue' /* webpackChunkName: "pages/ui/grid" */))
const _73b3707a = () => interopDefault(import('..\\pages\\ui\\images.vue' /* webpackChunkName: "pages/ui/images" */))
const _2dfcf200 = () => interopDefault(import('..\\pages\\ui\\lightbox.vue' /* webpackChunkName: "pages/ui/lightbox" */))
const _73f60c9e = () => interopDefault(import('..\\pages\\ui\\modals.vue' /* webpackChunkName: "pages/ui/modals" */))
const _b56b2090 = () => interopDefault(import('..\\pages\\ui\\placeholder.vue' /* webpackChunkName: "pages/ui/placeholder" */))
const _f66e10ea = () => interopDefault(import('..\\pages\\ui\\progressbar.vue' /* webpackChunkName: "pages/ui/progressbar" */))
const _6a9e8d23 = () => interopDefault(import('..\\pages\\ui\\rangeslider.vue' /* webpackChunkName: "pages/ui/rangeslider" */))
const _d0894730 = () => interopDefault(import('..\\pages\\ui\\rating.vue' /* webpackChunkName: "pages/ui/rating" */))
const _667f06f8 = () => interopDefault(import('..\\pages\\ui\\sweet-alert.vue' /* webpackChunkName: "pages/ui/sweet-alert" */))
const _21a9a21f = () => interopDefault(import('..\\pages\\ui\\tabs-accordions.vue' /* webpackChunkName: "pages/ui/tabs-accordions" */))
const _3131150c = () => interopDefault(import('..\\pages\\ui\\typography.vue' /* webpackChunkName: "pages/ui/typography" */))
const _ebde3f00 = () => interopDefault(import('..\\pages\\ui\\video.vue' /* webpackChunkName: "pages/ui/video" */))
const _00dbd343 = () => interopDefault(import('..\\pages\\utility\\404.vue' /* webpackChunkName: "pages/utility/404" */))
const _3589b080 = () => interopDefault(import('..\\pages\\utility\\500.vue' /* webpackChunkName: "pages/utility/500" */))
const _00db1d7e = () => interopDefault(import('..\\pages\\utility\\comingsoon.vue' /* webpackChunkName: "pages/utility/comingsoon" */))
const _1f2421bc = () => interopDefault(import('..\\pages\\utility\\faqs.vue' /* webpackChunkName: "pages/utility/faqs" */))
const _43f6749e = () => interopDefault(import('..\\pages\\utility\\maintenance.vue' /* webpackChunkName: "pages/utility/maintenance" */))
const _154cc151 = () => interopDefault(import('..\\pages\\utility\\pricing.vue' /* webpackChunkName: "pages/utility/pricing" */))
const _67bfd59a = () => interopDefault(import('..\\pages\\utility\\starter.vue' /* webpackChunkName: "pages/utility/starter" */))
const _a29a0a74 = () => interopDefault(import('..\\pages\\utility\\timeline.vue' /* webpackChunkName: "pages/utility/timeline" */))
const _6971cbb7 = () => interopDefault(import('..\\pages\\charts\\apex\\data.js' /* webpackChunkName: "pages/charts/apex/data" */))
const _2892e62d = () => interopDefault(import('..\\pages\\charts\\chartist\\data.js' /* webpackChunkName: "pages/charts/chartist/data" */))
const _a05e1494 = () => interopDefault(import('..\\pages\\charts\\chartjs\\BarChart.vue' /* webpackChunkName: "pages/charts/chartjs/BarChart" */))
const _4f8c2ac7 = () => interopDefault(import('..\\pages\\charts\\chartjs\\DonutChart.vue' /* webpackChunkName: "pages/charts/chartjs/DonutChart" */))
const _451ca1a2 = () => interopDefault(import('..\\pages\\charts\\chartjs\\LineChart.vue' /* webpackChunkName: "pages/charts/chartjs/LineChart" */))
const _5af2d85d = () => interopDefault(import('..\\pages\\charts\\chartjs\\PieChart.vue' /* webpackChunkName: "pages/charts/chartjs/PieChart" */))
const _4c1d7a2b = () => interopDefault(import('..\\pages\\charts\\chartjs\\PolarChart.vue' /* webpackChunkName: "pages/charts/chartjs/PolarChart" */))
const _71bcf13a = () => interopDefault(import('..\\pages\\charts\\chartjs\\RadarChart.vue' /* webpackChunkName: "pages/charts/chartjs/RadarChart" */))
const _c744adc0 = () => interopDefault(import('..\\pages\\charts\\echart\\data.js' /* webpackChunkName: "pages/charts/echart/data" */))
const _6655ae9f = () => interopDefault(import('..\\pages\\maps\\leaflet\\basic.vue' /* webpackChunkName: "pages/maps/leaflet/basic" */))
const _ab39276e = () => interopDefault(import('..\\pages\\maps\\leaflet\\boundary.vue' /* webpackChunkName: "pages/maps/leaflet/boundary" */))
const _06e72891 = () => interopDefault(import('..\\pages\\maps\\leaflet\\geometry.vue' /* webpackChunkName: "pages/maps/leaflet/geometry" */))
const _79c7d78b = () => interopDefault(import('..\\pages\\maps\\leaflet\\icons.vue' /* webpackChunkName: "pages/maps/leaflet/icons" */))
const _b2fc43ac = () => interopDefault(import('..\\pages\\maps\\leaflet\\markers.vue' /* webpackChunkName: "pages/maps/leaflet/markers" */))
const _5a436122 = () => interopDefault(import('..\\pages\\ecommerce\\product-detail\\_id.vue' /* webpackChunkName: "pages/ecommerce/product-detail/_id" */))
const _280fe02e = () => interopDefault(import('..\\pages\\email\\reademail\\_id.vue' /* webpackChunkName: "pages/email/reademail/_id" */))
const _1f8d286b = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/calendar",
    component: _5b4371ad,
    name: "calendar"
  }, {
    path: "/chat",
    component: _d6f7a45a,
    name: "chat"
  }, {
    path: "/account/forgot-password",
    component: _3c1132ef,
    name: "account-forgot-password"
  }, {
    path: "/account/login",
    component: _0ce61cd3,
    name: "account-login"
  }, {
    path: "/account/register",
    component: _667531ae,
    name: "account-register"
  }, {
    path: "/auth/lock-screen",
    component: _67a33982,
    name: "auth-lock-screen"
  }, {
    path: "/auth/login-1",
    component: _64d20fbe,
    name: "auth-login-1"
  }, {
    path: "/auth/recoverpwd",
    component: _073991f8,
    name: "auth-recoverpwd"
  }, {
    path: "/auth/register-1",
    component: _1e120726,
    name: "auth-register-1"
  }, {
    path: "/calendar/data-calendar",
    component: _77b3209a,
    name: "calendar-data-calendar"
  }, {
    path: "/charts/apex",
    component: _874b0cd8,
    name: "charts-apex"
  }, {
    path: "/charts/chartist",
    component: _379ece8a,
    name: "charts-chartist"
  }, {
    path: "/charts/chartjs",
    component: _01005b52,
    name: "charts-chartjs"
  }, {
    path: "/charts/echart",
    component: _3876be86,
    name: "charts-echart"
  }, {
    path: "/chat/data",
    component: _30a983b6,
    name: "chat-data"
  }, {
    path: "/contacts/grid",
    component: _0e2c3610,
    name: "contacts-grid"
  }, {
    path: "/contacts/list",
    component: _4b6bef68,
    name: "contacts-list"
  }, {
    path: "/contacts/profile",
    component: _2155e162,
    name: "contacts-profile"
  }, {
    path: "/ecommerce/add-product",
    component: _09cec33a,
    name: "ecommerce-add-product"
  }, {
    path: "/ecommerce/cart",
    component: _1ebd4839,
    name: "ecommerce-cart"
  }, {
    path: "/ecommerce/checkout",
    component: _d9852242,
    name: "ecommerce-checkout"
  }, {
    path: "/ecommerce/customers",
    component: _6df48ae8,
    name: "ecommerce-customers"
  }, {
    path: "/ecommerce/data-products",
    component: _1f3e29f1,
    name: "ecommerce-data-products"
  }, {
    path: "/ecommerce/orders",
    component: _5c7a293e,
    name: "ecommerce-orders"
  }, {
    path: "/ecommerce/products",
    component: _7992b3fd,
    name: "ecommerce-products"
  }, {
    path: "/ecommerce/shops",
    component: _328075f4,
    name: "ecommerce-shops"
  }, {
    path: "/email/data-inbox",
    component: _3fd83d92,
    name: "email-data-inbox"
  }, {
    path: "/email/inbox",
    component: _58f3ef3e,
    name: "email-inbox"
  }, {
    path: "/email/sidepanel",
    component: _2ddc5be8,
    name: "email-sidepanel"
  }, {
    path: "/email/toolbar",
    component: _7efe6a16,
    name: "email-toolbar"
  }, {
    path: "/form/advanced",
    component: _c366d3c6,
    name: "form-advanced"
  }, {
    path: "/form/editor",
    component: _092f6ea8,
    name: "form-editor"
  }, {
    path: "/form/elements",
    component: _5019071c,
    name: "form-elements"
  }, {
    path: "/form/mask",
    component: _26036967,
    name: "form-mask"
  }, {
    path: "/form/repeater",
    component: _ea136afa,
    name: "form-repeater"
  }, {
    path: "/form/upload",
    component: _5776f13c,
    name: "form-upload"
  }, {
    path: "/form/validation",
    component: _2d00e634,
    name: "form-validation"
  }, {
    path: "/form/wizard",
    component: _18e663a6,
    name: "form-wizard"
  }, {
    path: "/icons/boxicons",
    component: _6ef8bdbc,
    name: "icons-boxicons"
  }, {
    path: "/icons/data-fontawesome",
    component: _6268268b,
    name: "icons-data-fontawesome"
  }, {
    path: "/icons/data-material",
    component: _57cd3e28,
    name: "icons-data-material"
  }, {
    path: "/icons/dripicons",
    component: _088580bc,
    name: "icons-dripicons"
  }, {
    path: "/icons/fontawesome",
    component: _1908b211,
    name: "icons-fontawesome"
  }, {
    path: "/icons/materialdesign",
    component: _c290d150,
    name: "icons-materialdesign"
  }, {
    path: "/icons/unicons",
    component: _1609a604,
    name: "icons-unicons"
  }, {
    path: "/invoices/detail",
    component: _0d8abf2e,
    name: "invoices-detail"
  }, {
    path: "/invoices/list",
    component: _7cf8d63b,
    name: "invoices-list"
  }, {
    path: "/maps/google",
    component: _1ec73ac7,
    name: "maps-google"
  }, {
    path: "/maps/leaflet",
    component: _c909dd7a,
    name: "maps-leaflet"
  }, {
    path: "/tables/advanced",
    component: _cf6ce384,
    name: "tables-advanced"
  }, {
    path: "/tables/basic",
    component: _2db14c7c,
    name: "tables-basic"
  }, {
    path: "/tables/dataAdvancedtable",
    component: _ca62cc4e,
    name: "tables-dataAdvancedtable"
  }, {
    path: "/ui/alerts",
    component: _e2cf7f3c,
    name: "ui-alerts"
  }, {
    path: "/ui/buttons",
    component: _3b5add74,
    name: "ui-buttons"
  }, {
    path: "/ui/cards",
    component: _2d0dff68,
    name: "ui-cards"
  }, {
    path: "/ui/carousel",
    component: _631591eb,
    name: "ui-carousel"
  }, {
    path: "/ui/colors",
    component: _690446bb,
    name: "ui-colors"
  }, {
    path: "/ui/dropdown",
    component: _6aa5b41c,
    name: "ui-dropdown"
  }, {
    path: "/ui/general",
    component: _7e87cf2d,
    name: "ui-general"
  }, {
    path: "/ui/grid",
    component: _56d94a51,
    name: "ui-grid"
  }, {
    path: "/ui/images",
    component: _73b3707a,
    name: "ui-images"
  }, {
    path: "/ui/lightbox",
    component: _2dfcf200,
    name: "ui-lightbox"
  }, {
    path: "/ui/modals",
    component: _73f60c9e,
    name: "ui-modals"
  }, {
    path: "/ui/placeholder",
    component: _b56b2090,
    name: "ui-placeholder"
  }, {
    path: "/ui/progressbar",
    component: _f66e10ea,
    name: "ui-progressbar"
  }, {
    path: "/ui/rangeslider",
    component: _6a9e8d23,
    name: "ui-rangeslider"
  }, {
    path: "/ui/rating",
    component: _d0894730,
    name: "ui-rating"
  }, {
    path: "/ui/sweet-alert",
    component: _667f06f8,
    name: "ui-sweet-alert"
  }, {
    path: "/ui/tabs-accordions",
    component: _21a9a21f,
    name: "ui-tabs-accordions"
  }, {
    path: "/ui/typography",
    component: _3131150c,
    name: "ui-typography"
  }, {
    path: "/ui/video",
    component: _ebde3f00,
    name: "ui-video"
  }, {
    path: "/utility/404",
    component: _00dbd343,
    name: "utility-404"
  }, {
    path: "/utility/500",
    component: _3589b080,
    name: "utility-500"
  }, {
    path: "/utility/comingsoon",
    component: _00db1d7e,
    name: "utility-comingsoon"
  }, {
    path: "/utility/faqs",
    component: _1f2421bc,
    name: "utility-faqs"
  }, {
    path: "/utility/maintenance",
    component: _43f6749e,
    name: "utility-maintenance"
  }, {
    path: "/utility/pricing",
    component: _154cc151,
    name: "utility-pricing"
  }, {
    path: "/utility/starter",
    component: _67bfd59a,
    name: "utility-starter"
  }, {
    path: "/utility/timeline",
    component: _a29a0a74,
    name: "utility-timeline"
  }, {
    path: "/charts/apex/data",
    component: _6971cbb7,
    name: "charts-apex-data"
  }, {
    path: "/charts/chartist/data",
    component: _2892e62d,
    name: "charts-chartist-data"
  }, {
    path: "/charts/chartjs/BarChart",
    component: _a05e1494,
    name: "charts-chartjs-BarChart"
  }, {
    path: "/charts/chartjs/DonutChart",
    component: _4f8c2ac7,
    name: "charts-chartjs-DonutChart"
  }, {
    path: "/charts/chartjs/LineChart",
    component: _451ca1a2,
    name: "charts-chartjs-LineChart"
  }, {
    path: "/charts/chartjs/PieChart",
    component: _5af2d85d,
    name: "charts-chartjs-PieChart"
  }, {
    path: "/charts/chartjs/PolarChart",
    component: _4c1d7a2b,
    name: "charts-chartjs-PolarChart"
  }, {
    path: "/charts/chartjs/RadarChart",
    component: _71bcf13a,
    name: "charts-chartjs-RadarChart"
  }, {
    path: "/charts/echart/data",
    component: _c744adc0,
    name: "charts-echart-data"
  }, {
    path: "/maps/leaflet/basic",
    component: _6655ae9f,
    name: "maps-leaflet-basic"
  }, {
    path: "/maps/leaflet/boundary",
    component: _ab39276e,
    name: "maps-leaflet-boundary"
  }, {
    path: "/maps/leaflet/geometry",
    component: _06e72891,
    name: "maps-leaflet-geometry"
  }, {
    path: "/maps/leaflet/icons",
    component: _79c7d78b,
    name: "maps-leaflet-icons"
  }, {
    path: "/maps/leaflet/markers",
    component: _b2fc43ac,
    name: "maps-leaflet-markers"
  }, {
    path: "/ecommerce/product-detail/:id?",
    component: _5a436122,
    name: "ecommerce-product-detail-id"
  }, {
    path: "/email/reademail/:id?",
    component: _280fe02e,
    name: "email-reademail-id"
  }, {
    path: "/",
    component: _1f8d286b,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
