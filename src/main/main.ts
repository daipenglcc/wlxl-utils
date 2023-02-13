/**
 * 基本常用工具函数
 */

/**
 * 生成数字范围内的随机数
 * @param min 最小数字
 * @param max 最大数字
 * @returns number类型
 */
export function random(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * @description: 随机生成字母数字组成的字符
 * @param {number} min
 * @param {number} max
 * @return {*}
 */
export function randomWord(min: number, max: number): string {
  var returnStr = '',
    range = max ? Math.round(Math.random() * (max - min)) + min : min,
    charStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (var i = 0; i < range; i++) {
    var index = Math.round(Math.random() * (charStr.length - 1))
    returnStr += charStr.substring(index, index + 1)
  }
  return returnStr
}
