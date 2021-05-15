/*
 * @Author: zhanghan
 * @Date: 2020-08-26 11:29:40
 * @LastEditors: zhanghan
 * @LastEditTime: 2021-05-16 02:13:39
 * @Descripttion: 
 */
import axiosConfig from "@/utils/axios.js";
// 创建正式用例接口基础配置
const service = axiosConfig.ajax();

export function getUserInfo(data) {
  return service({
    url: "/getUserInfo.jhtml",
    method: "post",
    data
  });
}
