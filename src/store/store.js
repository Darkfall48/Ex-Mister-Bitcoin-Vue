//? Libraries
import { createStore } from 'vuex'
//? Stores
import { contactStore } from './contact.store'

export const store = createStore({
  strict: true,
  modules: {
    contactStore,
  },
})

//? For Debugging
store.subscribe((cmd, state) => {
  console.log('**** Store state changed: ****')
  console.log('Command:', cmd.payload)
  console.log('StoreState:\n', state)
  console.log('*******************************')
})
