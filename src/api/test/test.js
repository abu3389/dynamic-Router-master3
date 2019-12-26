import axiosConfig from "@/utils/axios.js";
// 创建测试用例接口基础配置(淘宝的Rap2)
const service = axiosConfig.ajaxtest();

export function getMenuList(params) {
  return service({
    url: "/app/mock/236973/test/getMenuList.jhtml",
    method: "get",
    params
  });
}
