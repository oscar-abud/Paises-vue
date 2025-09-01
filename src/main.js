// h srive para crear elementos de Vue sin usar templates, y el provide para proveer datos a toda la app
import { createApp, h, provide } from 'vue'
import { createPinia } from 'pinia'
// Importamos el Apollo
import { DefaultApolloClient } from '@vue/apollo-composable'
import { apolloClient } from './apollo.js'

import App from './App.vue'
import router from './router'

const app = createApp({
  // El setup se ejecuta antes de que se renderice la app
  setup() {
    // Proveemos el cliente de Apollo a toda la app
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App),
})

app.use(createPinia())
app.use(router)
app.mount('#app')
