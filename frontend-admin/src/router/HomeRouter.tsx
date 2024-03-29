import ReviewRegOkPage from '@/pages/reviewReg/ReviewRegOkPage'
import ReviewRegPage from '@/pages/reviewReg/ReviewRegPage'
import LoginPage from '@pages/login/LoginPage'
import { Route, Routes } from 'react-router-dom'

const HomeRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/giveus/review/:id" element={<ReviewRegPage />} />
      <Route path="/giveus/review-ok" element={<ReviewRegOkPage />} />
      <Route path="/*" element={<LoginPage />} />
    </Routes>
  )
}

export default HomeRouter
