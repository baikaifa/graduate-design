import $ from "jquery";
import { message } from "antd";
//清除canvas
export function resetCanvas(id) {
  var c = document.getElementById(id);
  c.height = c.height;
}
// 正则表达式校验
export const regular_expression = {
  email: new RegExp(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/),
  password: new RegExp(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/)
}
export function str_to_base64(str) {
  // 对字符串进行编码
  var encode = encodeURI(str);
  // 对编码的字符串转化base64
  var base64 = btoa(encode);
  return base64;
}
//属性搜索比较
export function compare(key) {
  return function (value1, value2) {
    var val1 = value1[key];
    var val2 = value2[key];
    return val2 - val1;
  };
}

export function ReplaceBase64(imgUrl) {
  if (typeof imgUrl == "string" && imgUrl.length > 200) {
    imgUrl = imgUrl.replace("data:image/png;base64,", "base64://");
    imgUrl = imgUrl.replace("data:image/jpg;base64,", "base64://");
    imgUrl = imgUrl.replace("data:image/jpeg;base64,", "base64://");
  }
  return imgUrl;
}
export const getUploadImageWidthAndHeight = async url => {
  var result = [];
  await new Promise(function (resolve, reject) {
    var img = new Image();
    img.src = url;
    img.onload = function () {
      result[0] = img.width;
      result[1] = img.height;
      resolve(result);
    };
  });
  return result;
};
export function getDivWidthAndHeightQueS(id) {
  //返回数值
  let dom = null;
  if (id.indexOf("#") > 0) {
    dom = document.querySelector(id);
  } else {
    dom = document.querySelector(id);
  }
  let result = [];
  result.push(window.getComputedStyle(dom).width);
  result.push(window.getComputedStyle(dom).height);
  result[0] = result[0].split("px")[0];
  result[1] = result[1].split("px")[0];
  return result;
}

export function getDivWidthAndHeight(id) {
  //返回数值
  let dom = document.getElementById(id);
  let result = [];
  result.push(window.getComputedStyle(dom).width);
  result.push(window.getComputedStyle(dom).height);
  result[0] = result[0].split("px")[0];
  result[1] = result[1].split("px")[0];
  return result;
}
export // base64转字符串
  function base64_to_str(base64) {
  // 对base64转编码
  var decode = atob(base64);
  // 编码转字符串
  var str = decodeURI(decode);
  return str;
}

export let deselect_checkbox_border_immediately_without_checking = () => {
  $(function () {
    for (let i = 0; i < $(".check_box").find("span:even").length; i++) {
      if (
        $(".check_box")
          .find("span:even")
        [i].className.split(" ")[1] === "ant-checkbox-checked"
      ) {
        $(".check_box").find("span:even")[i].childNodes[1].style.border =
          "1px solid #1890ff";
      } else {
        $(".check_box").find("span:even")[i].childNodes[1].style.border =
          "1px solid #d9d9d9";
      }
    }
  });
};

export let add_delete_button_function_to_delete_box = class_name => {
  $(function () {
    $(`.${class_name} .ant-modal-content`).append(
      `<div class="delete_icon_class"}></div`
    );
    for (
      let i = 0;
      i <
      $(`.${class_name} .delete_icon_class`)
        .siblings()
        .find("span").length;
      i++
    ) {
      if (
        $(`.${class_name} .delete_icon_class`)
          .siblings()
          .find("span")[i].innerHTML === "取 消"
      ) {
        $(`.${class_name} .delete_icon_class`).click(function () {
          //用于给按钮增加删除事件
          $(`.${class_name} .delete_icon_class`)
            .siblings()
            .find("span")
          [i].click();
        });
      }
    }
  });
};
export const delete_button_style = class_name => {
  $(function () {
    $(`.${class_name}`).removeAttr("style");
  });
};

//数组去重
export const unique = arr => {
  let b = [];
  for (let i = 0; i < arr.length; i++) {
    if (b.indexOf(arr[i]) == -1) {
      b.push(arr[i]);
    }
  }
  return b;
};
//对象深拷贝
export function deepCopy(obj) {
  var result = Array.isArray(obj) ? [] : {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        result[key] = deepCopy(obj[key]); //递归复制
      } else {
        result[key] = obj[key];
      }
    }
  }
  return result;
}
//上传图片的格式校验
export const img_format_size = file => {
  const fileType = "image/pngimage/jpgimage/jpeg";
  if (fileType.indexOf(file.type) < 0) {
    message.info("请上传正确的图片格式");
    return false;
  } else if (file.size > 5 * 1024 * 1024) {
    message.info("图片不能大于5MB");
    return false;
  } else {
    return true;
  }
};















//图片懒加载
export const picture_lazy_load = (
  ul_class_name,
  img_class_name,
  distance_to_scroll
) => {
  $(function () {
    lazy_load();
    // 当页面开始滚动的时候，遍历图片，如果图片出现在视窗中，就加载图片
    var clock; //函数防抖
    $(`.${ul_class_name}`).on("scroll", function () {
      if (clock) {
        clearTimeout(clock);
      }
      clock = setTimeout(function () {
        lazy_load();
      }, 200);
    });
    function lazy_load() {
      $(`.${ul_class_name} .${img_class_name}`)
        .not("[data-isLoading]")
        .each(function () {
          if (isShow($(this))) {
            console.log("load");
            loadImg($(this));
          }
        });
    }
    // 判断图片是否出现在视窗的函数
    function isShow($node) {
      if (
        $node.offset().top - distance_to_scroll <=
        $(`.${ul_class_name}`).height()
      ) {
        return true;
      } else {
        return false;
      }
    }
    // 加载图片的函数，就是把自定义属性data-src 存储的真正的图片地址，赋值给src
    function loadImg($img) {
      $img.css({ "background-image": `url(${$img.attr("data-src")})` });
      // 已经加载的图片，我给它设置一个属性，值为1，作为标识
      // 弄这个的初衷是因为，每次滚动的时候，所有的图片都会遍历一遍，这样有点浪费，所以做个标识，滚动的时候只遍历哪些还没有加载的图片
      $img.attr("data-isLoading", 1);
    }
    // 一开始没有滚动的时候，出现在视窗中的图片也会加载
  });
};
export function formatDate(time) {
  //格式化日期
  //如果记得时间戳是毫秒级的就需要*1000 不然就错了记得转换成整型
  let now = new Date(time * 1000);
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var date = now.getDate();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  return (
    year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second
  );
}
//video
export async function getMedia(id, videoWidth, videoHeight) {
  let stop = undefined;
  let video = document.getElementById(id);
  if (video) {
    console.log("获取到video的dom");
  } else {
    console.log("没有获取到video的dom");
  }
  let constraints = {
    // audio: false, //不使用音频
    video: { width: videoWidth, height: videoHeight }
    // audio: true,
  };
  /*
  这里介绍新的方法:H5新媒体接口 navigator.mediaDevices.getUserMedia()
  这个方法会提示用户是否允许媒体输入,(媒体输入主要包括相机,视频采集设备,屏幕共享服务,麦克风,A/D转换器等)
  返回的是一个Promise对象。
  如果用户同意使用权限,则会将 MediaStream对象作为resolve()的参数传给then()
  如果用户拒绝使用权限,或者请求的媒体资源不可用,则会将 PermissionDeniedError作为reject()的参数传给catch()
  */
  let promise = navigator.mediaDevices.getUserMedia(constraints);
  await promise
    .then(function (MediaStream) {
      video.srcObject = MediaStream;
      video.play();
      stop = MediaStream.getTracks()[0];
    })
    .catch(function (PermissionDeniedError) {
      console.log(PermissionDeniedError);
    });

  return stop;
}
export function takePhoto(videoId, canvasId) {
  let video = document.getElementById(videoId);
  let canvas = document.getElementById(canvasId);
  let ctx = canvas.getContext("2d");
  ctx.drawImage(video, 0, 0);
}


async function file_change_to_base64(file) {
  return await new Promise((resolve, reject) => {
    var fr = new FileReader();
    fr.onload = () => {
      let picture_base64 = fr.result; // picture_base64 没有格式转化的
      resolve(picture_base64);
    };
    fr.readAsDataURL(file);
  });
}
export function replaceBase64(imgUrl) {
  if (typeof imgUrl == "string" && imgUrl.length > 200) {
    imgUrl = imgUrl.replace("data:image/png;base64,", "base64://");
    imgUrl = imgUrl.replace("data:image/jpg;base64,", "base64://");
    imgUrl = imgUrl.replace("data:image/jpeg;base64,", "base64://");
  }
  return imgUrl;
}
export function sleepPromise(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, ms);
  });
}
