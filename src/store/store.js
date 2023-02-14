//? Libraries
import { createStore } from 'vuex'

export const store = createStore({
  strict: true,
})

//? For Debugging
store.subscribe((cmd, state) => {
  console.log('**** Store state changed: ****')
  console.log('Command:', cmd.payload)
  console.log('StoreState:\n', state)
  console.log('*******************************')
})
