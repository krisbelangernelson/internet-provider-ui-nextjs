import * as internetApi from './internetApi'
import * as customerApi from './customerApi'
import * as orderApi from './orderApi'

const api = {
  ...internetApi,
  ...customerApi,
  ...orderApi,
}

export default api
