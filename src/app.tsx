import React, { FC, lazy } from 'react'

const MainPage = lazy(() => import('@components/Pages/MainPage/MainPage'))

const App: FC = () => {
  console.log('Node_env', process.env.NODE_ENV)
  return (
    <div>
      <React.Suspense fallback={<h1>Loading</h1>}>
        <MainPage />
      </React.Suspense>
    </div>
  )
}

export default App