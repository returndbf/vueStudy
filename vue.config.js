/*
 * @Author: your name
 * @Date: 2021-12-01 21:37:31
 * @LastEditTime: 2021-12-01 21:40:58
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \axiosstudy\vue.config.js
 */
module.exports = {
    configureWebpack:{
      resolve:{
        alias:{
          "assets":"@/assets",
          "components":"@/components",
          "common":"@/common",
          "network":"@/network",
          "store":"@/store",
          "views":"@/views",
        }
      }
    }
  }