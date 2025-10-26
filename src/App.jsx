import { Toaster } from 'react-hot-toast'
import './App.css'
import GroupDetailConstants from './components/Dashboard/HomeDashboardConstants/GroupDetailConstants'
import HomeNotificationConstants from './components/Dashboard/HomeDashboardConstants/HomeNotificationConstants'
import LiveSermonConstants from './components/Dashboard/HomeDashboardConstants/MediaLiveSermonConstants'
import PlayScreenConstants from './components/Dashboard/HomeDashboardConstants/PlayScreenConstants'
import ProfilePageConstants from './components/Dashboard/HomeDashboardConstants/ProfilePageConstants'
import RecentPlayedConstants from './components/Dashboard/HomeDashboardConstants/RecentPlayedConstants'
import SuggestGroupDetailPageConstants from './components/Dashboard/HomeDashboardConstants/SuggestGroupDetailConstants'
import AboutUs from './pages/About'
import Bible from './pages/Bible'
import ContactUs from './pages/ContactUs'
import BibleCourse from './pages/DailyCourse'
import DailyDevotion from './pages/DailyDevotion'
import MainHome from './pages/Dashboard/MainHome'
import Donation from './pages/Donation'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'



function App() {

  return (
    <>
      <Toaster />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/donation' element={<Donation />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/bible' element={<Bible />} />
        <Route path='/dailydevotion' element={<DailyDevotion />} />
        <Route path='/biblecourse' element={<BibleCourse />} />

        {/* Main Home Dashboard */}
        <Route path='/mainhome' element={<MainHome />} />
        <Route path='/recentplayed' element={<RecentPlayedConstants />} />
        <Route path='/play' element={<PlayScreenConstants />} />
        <Route path='/livesermon' element={<LiveSermonConstants />} />
        <Route path='/suggestgroup' element={<SuggestGroupDetailPageConstants />} />
        <Route path='/groupdetail' element={<GroupDetailConstants />} />
        <Route path='/profile' element={<ProfilePageConstants />} />
        <Route path='/homenotification' element={<HomeNotificationConstants />} />
      </Routes>
    </>
  )
}

export default App
