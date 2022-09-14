export { default as Footer } from '../..\\components\\Footer.vue'
export { default as HorizontalMenu } from '../..\\components\\horizontal-menu.js'
export { default as HorizontalTopbar } from '../..\\components\\Horizontal-topbar.vue'
export { default as Loading } from '../..\\components\\Loading.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as Menu } from '../..\\components\\menu.js'
export { default as PageHeader } from '../..\\components\\Page-header.vue'
export { default as RightSidebar } from '../..\\components\\Right-sidebar.vue'
export { default as Sidebar } from '../..\\components\\Sidebar.vue'
export { default as Topbar } from '../..\\components\\Topbar.vue'
export { default as FormsAddNewTask } from '../..\\components\\forms\\add-new-task.vue'
export { default as WidgetsActivity } from '../..\\components\\widgets\\Activity.vue'
export { default as WidgetsSalesAnalytics } from '../..\\components\\widgets\\Sales-analytics.vue'
export { default as WidgetsSellingProduct } from '../..\\components\\widgets\\Selling-product.vue'
export { default as WidgetsSocialSource } from '../..\\components\\widgets\\Social-source.vue'
export { default as WidgetsStat } from '../..\\components\\widgets\\Stat.vue'
export { default as WidgetsStat2 } from '../..\\components\\widgets\\Stat2.vue'
export { default as WidgetsStat3 } from '../..\\components\\widgets\\Stat3.vue'
export { default as WidgetsTopUsers } from '../..\\components\\widgets\\Top-users.vue'
export { default as TablesTasksTable } from '../..\\components\\tables\\tasks-table.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
