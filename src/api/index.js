import ajax from './ajax'

export const reqFocusList = () => ajax('/focusList')
export const reqHeadCates = () => ajax('/headCates')
export const reqTagList = () => ajax('/tagList')
export const reqNewItemList = () => ajax('/newItemList')
export const reqPopularItemList = () => ajax('/popularItemList')
export const reqFlashSaleIndexVO = () => ajax('/flashSaleIndexVO')
export const reqTopicList = () => ajax('/topicList')
export const reqCateList = () => ajax('/cateList')
export const reqNewItemNewUserList = () => ajax('/newItemNewUserList')

export const reqBanner = () => ajax('/banner')
export const reqColumn = () => ajax('/column')
export const reqRecommend = () => ajax('/recommend')
export const reqTenfifteen = () => ajax('/tenfifteen')
export const reqZhenpin = () => ajax('/zhenpin')
export const reqYxLook = () => ajax('/yxLook')
export const reqFindMore = () => ajax('/findMore')

export const reqCategoryData = () => ajax('/categoryData')

// 上面的是使用mock数据发送的请求，获取的请求数据
// 下面是使用的之前项目的后台，模拟接收数据，发送ajax请求进行的交互
export const reqSendCode = phone => ajax('/api/sendcode', {phone})
export const reqSmsLogin = (phone, code) => ajax('/api/login_sms', {phone, code}, 'POST')
export const reqUser = () => ajax(`/api/userinfo`)
