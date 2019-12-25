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
