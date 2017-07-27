var baseURL = 'https://test.inruan.com';
var B = {};

/** 
* 弹出提示框
* (标题, 延迟时间, 成功回调, 失败回调)
* icon:"success" || "loading"
* 默认延时：1500ms
* 默认显示透明蒙层, 防止触摸穿透
*/
B.toast = function(title, icon, duration, success, fail){
    wx.showToast({ 
        title: title,
        icon: icon || 'success',
        icon: 'success',
        duration: duration || 1500,
        mask: true,
        success: success,
        fail: fail
    })
}

/**
* 隐藏提示框
*/
B.hideToast = function(){
    wx.hideToast()
}

/**
* 弹出正在加载提示框
*/
B.loading = function(title, success, fail){
    wx.showLoading({
        title: title,
        mask:true,
        success:success,
        fail:fail
    })
}

/**
 * 隐藏加载提示框
 * B.done()
 */
B.done = function(){
    wx.hideLoading()
}



/**
* 调用API接口
* B.callapi(方法名, 数据, 成功回调函数, 失败回调函数)
*/
B.callapi = function (name, data, success, fail) {
    if (!data)
        data = {};
    wx.request({
        url: baseURL + '/wxa/' + name,
        data: data,
        dataType:'json',
        success: function (res) {
            if (res.statusCode == 0) {
                if (success)
                    success(res);
            }
        },
        fail: function (e) {
            if (fail)
                fail(e);
            else if (succ) {
                console.log(e);
                B.msg("错误", "操作失败，请检查网络!");
                succ(null);
            }
        }
    });
};


module.exports = B