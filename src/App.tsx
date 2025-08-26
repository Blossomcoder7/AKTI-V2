// src/App.tsx
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import WebsiteLayout from "./components/Layouts/WebsiteLayout";
import LocaleLayout from "./components/Layouts/localeLayout";
import NotFound from "./pages/404/404";
import HomePage from "./pages/home/Index";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path=":locale" element={<LocaleLayout />}>
          <Route element={<WebsiteLayout />}>
            <Route index element={<Navigate to="home" replace />} />
            <Route path="home" element={<HomePage />} />
            <Route
              path="about"
              element={
                <div className="flex items-center justify-center text-akti-burgundy font-semibold text-6xl bg-akti-copper min-h-screen">
                  About Page
                </div>
              }
            />
            <Route
              path="contact"
              element={
                <div className="flex items-center justify-center text-akti-burgundy font-semibold text-6xl bg-akti-copper min-h-screen">
                  {" "}
                  Contact Page
                </div>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/en" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
