import AV from 'leancloud-storage'

const APP_ID = 'qL08Q87L8E5Vrtn4LR6bdDBA-gzGzoHsz'
const APP_KEY = 'wFyLCNEc2QVkvEmPCGo0FUlI'

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
})

export default {
  SDK: AV
}
