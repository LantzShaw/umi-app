import { useState } from 'react';

export default function useAuth() {
  const [isLogin, setIsLogin] = useState(false);

  return { isLogin, setIsLogin };
}
