import {Platform} from 'react-native'
export const commonStyle = {

  /** color **/
  // 常用颜色
  red: '#E83929',
  black3: '#333333',
  black9: '#999999',
  yellow: '#F78500',
  fff: '#ffffff',

  /** 主题色 **/
  themeColor: '#e74c3c',
  // 默认灰色字体颜色
  textGrayColor: '#999999',
  // 默认黑色字体颜色
  textBlockColor: '#333333',
  // 默认背景颜色
  bgColor: '#f8f8f8',
  // 默认分割线颜色
  lineColor: '#E7E7E7',
  // 默认placeholder颜色
  placeholderColor: '#eee',
  // borderColor
  borderColor: '#808080',
  // 导航title 颜色
  navTitleColor: '#262626',
  // 导航左item title color
  navLeftTitleColor: '#333',
  // 导航右item title color
  navRightTitleColor: '#333',
  navThemeColor: '#FEFEFE',
  iconGray: '#989898',
  iconBlack: '#262626',

  /** space **/
  // 上边距
  marginTop: 10,
  // 左边距
  marginLeft: 10,
  // 下边距
  marginBotton: 10,
  // 右边距
  marginRight: 10,
  // 内边距
  padding: 10,
  // 导航的leftItem的左间距
  navMarginLeft: 15,
  // 导航的rightItem的右间距
  navMarginRight: 15,

  /** width **/
  // 导航栏左右按钮image宽度
  navImageWidth: 25,
  // 边框线宽度
  borderWidth: 1,
  // 分割线高度
  lineWidth: 0.8,

  /** height **/
  // 导航栏的高度
  navHeight: Platform.OS === 'ios' ? 64 : 56,
  // 导航栏顶部的状态栏高度
  navStatusBarHeight: Platform.OS === 'ios' ? 20 : 0,
  // 导航栏除掉状态栏的高度
  navContentHeight: Platform.OS === 'ios' ? 44 : 56,
  // tabBar的高度
  tabBar: 49,
  // 底部按钮高度
  bottonBtnHeight: 44,
  // 通用列表cell高度
  cellHeight: 44,
  // 导航栏左右按钮image高度
  navImageHeight: 25,

  /** font **/
  // 默认文字字体
  textFont: 15,
  // 数字
  numberFont: 24,
  // 次重要
  afterFont: 18,
  // 次重要1
  after1Font: 14,
  // 灰色字体
  huiFont: 12,
  // 默认按钮文字字体
  btnFont: 15,
  // 导航title字体
  navTitleFont: 17,
  // tabBar文字字体
  barBarTitleFont: 12,
  // 占位符的默认字体大小
  placeholderFont: 13,
  // 导航左按钮的字体
  navRightTitleFont: 15,
  // 导航右按钮字体
  navLeftTitleFont: 15,

  /** opacity **/
  // mask
  modalOpacity: 0.3,
  // touchableOpacity
  taOpacity: 0.1,

  /** 定位 **/
  absolute: 'absolute',

  /** flex **/
  around: 'space-around',
  between: 'space-between',
  center: 'center',
  row: 'row'
}