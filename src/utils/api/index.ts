import * as internetServices from './internetApi'
import * as customerServices from './customerApi'

const api = {
  ...internetServices,
  ...customerServices,
}

export default api
