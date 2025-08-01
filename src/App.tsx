import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import Assistant from "./pages/Assistant";
import BookingLog from "./pages/BookingLog";
import SettingsLayout from "./pages/SettingsLayout";
import PersonalInformation from "./appComponents/PersonalInformation";
import PersonalPreferences from "./appComponents/PersonalPreferences";
import Notification from "./appComponents/Notification";
import CalenderIntigration from "./appComponents/CalenderIntigration";
import MembershipBilling from "./appComponents/MembershipBilling";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Assistant />} />
          <Route path="bookings" element={<BookingLog />} />

          <Route path="settings/" element={<SettingsLayout />}>
            <Route
              path="personal-information"
              element={<PersonalInformation />}
            />
            <Route
              path="personal-preferences"
              element={<PersonalPreferences />}
            />
            <Route path="notification" element={<Notification />} />
            <Route
              path="calendar-intigration"
              element={<CalenderIntigration />}
            />
            <Route path="membership-billing" element={<MembershipBilling/>} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
