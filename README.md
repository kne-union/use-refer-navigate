
# use-refer-navigate


### 描述

用于在页面导航时自动携带 referer 参数。该 Hook 可以简化在单页应用（SPA）中跟踪页面来源的需求，特别适用于需要记录用户跳转路径的场景。


### 安装

```shell
npm i --save @kne/use-refer-navigate
```


### 概述

`use-refer-navigate` 是一个基于 React 和 React Router 的实用 Hook，用于在页面导航时自动携带 `referer` 参数。该 Hook 可以简化在单页应用（SPA）中跟踪页面来源的需求，特别适用于需要记录用户跳转路径的场景。

### 核心功能
- 自动从当前 URL 的查询参数中提取 `referer` 值
- 在导航到新页面时，自动将 `referer` 参数附加到目标 URL
- 保持与 React Router `useNavigate` 相同的 API 接口，便于集成

### 示例


#### 示例样式

```scss
.ant-card {
  border-color: black;
  text-align: center;
  width: 200px;
}
```

#### 示例代码

- 这里填写示例标题
- 这里填写示例说明
- _UseReferNavigate(@kne/current-lib_use-refer-navigate)[import * as _UseReferNavigate from "@kne/use-refer-navigate"]

```jsx
const { default: useReferNavigate } = _UseReferNavigate;

const BaseExample = () => {
  const navigate = useReferNavigate();

  const handleClick = () => {
    // 会自动携带 referer 参数
    navigate('/target-page');
  };

  return <button onClick={handleClick}>Go to Target</button>;
};

render(<BaseExample />);

```


### API

### `useReferNavigate()`

返回一个增强版的 `navigate` 函数，签名与 React Router 的 `useNavigate` 相同。

**参数继承自 React Router:**
- `to: string | number` - 目标路径或历史堆栈中的 delta
- `options: { replace?: boolean, state?: any }` - 导航选项

**特殊行为:**
- 如果当前 URL 有 `referer` 参数，会自动附加到所有相对路径导航中
- 绝对 URL 和数字导航（历史回退）不受影响
