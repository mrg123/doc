---
id: 命令行终端设置代理
title: 命令行终端设置代理 windows / mac / linux
---




## bash / mac / linux / cmder base

命令格式

```
export http_proxy=http://[proxy]:[port]
export https_proxy=http://[proxy]:[port]
```

例子

```
export http_proxy=http://127.0.0.1:10809
export https_proxy=http://127.0.0.1:10809
```

取消代理

```
unset http_proxy
unset https_proxy
```

socks5

```
export http_proxy=socks5://127.0.0.1:10808
export https_proxy=socks5://127.0.0.1:10808
```





## powershell

```
$env:http_proxy="http://127.0.0.1:10809"
$env:https_proxy="http://127.0.0.1:10809"
```

取消代理

```
$env:http_proxy=""
$env:https_proxy=""
```





## cmd / windows

```
set http_proxy=http://127.0.0.1:10809
set https_proxy=http://127.0.0.1:10809
```

取消代理

```
set http_proxy =
set https_proxy = 
```





## 测试

```
curl www.google.com -i
```

返回200则表示成功使用代理

*ping的协议是ICMP,所以不能使用ping检查*



