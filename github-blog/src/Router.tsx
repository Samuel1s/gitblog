import { Home } from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import { PostsDetails } from './pages/PostDetails'
import { DefaultLayout } from './layout/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostsDetails />} />
      </Route>
    </Routes>
  )
}
