import React from 'react';

const NotFound = ({staticContext}) => {
  // 服务端渲染才会走到这个页面（访问错误路径）
  staticContext && (staticContext.NOT_FOUND = true);
  return <div> 404, sorry, page not found.</div>
}

export default NotFound;
