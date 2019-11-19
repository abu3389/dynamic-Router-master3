//获取get请求  ? 后面的参数
function param2Obj(url) {
    const search = url.split("?")[1];
    if (!search) {
        return {};
    }
    return JSON.parse(
        '{"' +
        decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
        '"}'
    );
}
const tokens = {
    admin: {
        pas: "admin",
        token: "admin-token"
    },
    editor: {
        pas: "editor",
        token: "editor-token"
    },
    reader: {
        pas:"reader",
        token: "reader-token"
    },
};
const users = {
    "admin-token": {
        roles: "0",
        introduction: "I am a super administrator",
        avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
        name: "Super Admin"
    },
    "editor-token": {
        roles: "1",
        introduction: "I am an editor",
        avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
        name: "Normal Editor"
    },
    "reader-token": {
        roles: "2",
        introduction: "I am an reader",
        avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
        name: "Normal reader"
    }
};
export default {
    login: res => {
        const { username, password } = JSON.parse(res.body); //解构 username

        if (username in tokens && tokens[username].pas == password) {
            return {
                state: 100,
                result: tokens[username].token
            };
        }
        return {
            state: 90001,
            message: "账户或密码错误."
        };
    },
    getInfo: res => {
        const { token } = param2Obj(res.url);
        const info = users[token];

        if (info) {
            return {
                state: 100,
                result: info
            };
        }
        return {
            state: 50008,
            message: "登陆失败，无法获取用户信息"
        };
    },
    logout: () => {
        return {
            state: 100,
            data: "success"
        };
    }
};