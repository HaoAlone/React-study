function tranformUrl(str) {
    return process.env.PUBLIC_URL + "img/" + str + ".jpg"
}

const testUrl = "https://www.easy-mock.com/mock/5bd9b85c5c4a0e732444aa0c/test";
const token = "";

// fetch超时 设置
function timeout_fetch(fetch_promise, timeout = 10000) {
    let abort_fn = null;
    let abort_promise = new Promise((resolve, reject) => {
        abort_fn = function () {
            reject("请求超时！");
        }
    });
    let timeout_promise = Promise.race([
        fetch_promise,
        abort_promise
    ]);
    setTimeout(() => {
        abort_fn();
    }, timeout);
    return timeout_promise
}

function fetchRequest(url, method, requestBody = {}) {
    // if(url !== "/dell/login" && (typeof(token) === 'undefined' || token === null || token === '')){
    //     history.push("/login")
    // }

    let header = {
        "Content-Type": "application/json;charset=UTF-8",
        "Authorization": token  //用户登陆后返回的token，某些涉及用户数据的接口需要在header中加上token
    };

    console.log('请求参数:', url, requestBody);  //打印请求参数

    if (method === "GET") {
        if (Object.keys(requestBody).length !== 0) {
            let URL = [];
            Object.keys(requestBody).forEach(key => {
                URL.push(key + "=" + requestBody[key])
            });
            url += "?" + URL.join("&")
        }
        return new Promise(function (resolve, reject) {
            timeout_fetch(fetch(testUrl + url, {
                method: method,
                headers: header
            }))
                .then((response) => {
                    // console.log(response);
                    if (response.ok) {
                        response.json();
                    }else {
                        throw new Error(" 错误码:" + response.status + " 请求地址:" + url + " 错误信息:" + response.statusText)
                    }
                })
                .then((responseData) => {
                    console.log('SUCCESS:' + responseData);  //网络请求成功返回的数据
                    resolve(responseData);
                })
                .catch((err) => {
                    console.log('ERROR:', url, err);     //网络请求失败返回的数据
                    reject(err);
                });
        });
    } else {
        return new Promise(function (resolve, reject) {
            timeout_fetch(fetch(testUrl + url, {
                method: method,
                headers: header,
                body: JSON.stringify(requestBody)   //body参数，通常需要转换成字符串后服务器才能解析
            })).then((response) => {
                console.log(response);
                if (response.ok) {
                    response.json();
                }
                throw new Error(" 错误码:" + response.status + " 请求地址:" + url + " 错误信息:" + response.statusText)
            })
                .then((responseData) => {
                    console.log('SUCCESS:' + responseData);  //网络请求成功返回的数据
                    resolve(responseData);
                })
                .catch((err) => {
                    console.log('ERROR:', url, err);     //网络请求失败返回的数据
                    reject(err);
                });
        });
    }
}

export {
    tranformUrl,
    timeout_fetch,
    fetchRequest
}