import React, { FC, lazy } from 'react'
import './index.css'

const MainPage = lazy(() => import('@components/Pages/MainPage/MainPage'))

const App: FC = () => {
  return (
    <div>
      <React.Suspense fallback={<h1>Loading</h1>}>
        <MainPage />
      </React.Suspense>
    </div>
  )
}

export default App