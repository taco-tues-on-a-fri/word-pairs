import React, { FC, lazy } from 'react'
import MainPage from '@components/Pages/MainPage/MainPage'

const LazyComponent = lazy(() => import('./components/Lazy/Lazy'))

const App: FC = () => {
  return (
    <div>
      <React.Suspense fallback={<h1>Loading</h1>}>
        {/* <LazyComponent /> */}
        <MainPage />
      </React.Suspense>
    </div>
  )
}

export default App