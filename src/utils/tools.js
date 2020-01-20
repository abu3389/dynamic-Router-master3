//升序排序
/**
 *
 * @param {升序的数组} ary
 * @param {根据的字段} clom
 */
export function sortNum(ary, clom) {
  //根據距離遠近排序，越近在前面，升序
  ary.sort((a, b) => {
    if (a[clom] < b[clom]) {
      return -1;
    } else if (a[clom] == b[clom]) {
      return 0;
    } else {
      return 1;
    }
  });
  return ary;
}

/**
 *
 * @param {要插入目标元素后面的新元素} newElement
 * @param {目标元素} targetElement
 */
export function insertAfter(newElement, targetElement) {
  var parent = targetElement.parentNode;
  if (parent.lastChild == targetElement) {
    // 如果最后的节点是目标元素，则直接添加。因为默认是最后
    parent.appendChild(newElement);
  } else {
    parent.insertBefore(newElement, targetElement.nextSibling);
    //如果不是，则插入在目标元素的下一个兄弟节点 的前面。也就是目标元素的后面
  }
}

//返回true表示为pc端打开，返回false表示为手机端打开
export function check_ispc() {
  var userAgentInfo = navigator.userAgent;
  var Agents = new Array(
    "Android",
    "iPhone",
    "SymbianOS",
    "Windows Phone",
    "iPad",
    "iPod"
  );
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
}
