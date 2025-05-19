### `useReferNavigate()`

返回一个增强版的 `navigate` 函数，签名与 React Router 的 `useNavigate` 相同。

**参数继承自 React Router:**
- `to: string | number` - 目标路径或历史堆栈中的 delta
- `options: { replace?: boolean, state?: any }` - 导航选项

**特殊行为:**
- 如果当前 URL 有 `referer` 参数，会自动附加到所有相对路径导航中
- 绝对 URL 和数字导航（历史回退）不受影响