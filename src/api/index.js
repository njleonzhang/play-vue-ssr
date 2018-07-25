import axios from 'axios'

export let Order = {
  all: () => axios.get('http://rap2api.taobao.org/app/mock/22156/tests/').then(res => res.data.data)
}
