import axiosConfig from "@/utils/axios.js";
// 创建测试用例接口基础配置(淘宝的Rap2)
const service = axiosConfig.ajaxtest();

export function getMenuList(params) {
  return service({
    url: "/m1/3335038-0-default/getMenuList",
    method: "get",
    params
  });
}
