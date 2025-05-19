`use-refer-navigate` 是一个基于 React 和 React Router 的实用 Hook，用于在页面导航时自动携带 `referer` 参数。该 Hook 可以简化在单页应用（SPA）中跟踪页面来源的需求，特别适用于需要记录用户跳转路径的场景。

### 核心功能
- 自动从当前 URL 的查询参数中提取 `referer` 值
- 在导航到新页面时，自动将 `referer` 参数附加到目标 URL
- 保持与 React Router `useNavigate` 相同的 API 接口，便于集成