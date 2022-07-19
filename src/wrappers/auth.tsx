import { Redirect, history } from 'umi'

import useAuth from '@/hooks/useAuth'

export type AuthProps = {
    children: React.ReactNode
}

// 跳转到指定路由
history.push('/list')

// 带参数跳转到指定路由
history.push('/list?a=b');
history.push({
  pathname: '/list',
  query: {
    a: 'b',
  },
})

// 跳转到上一个路由
history.goBack();

export default (props: AuthProps): React.ReactNode=> {
  const { isLogin } = useAuth()

  if (isLogin) {
    return <div>{ props.children }</div>
  } else {
    return <Redirect to="/login" />
  }
}