import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import WebsiteLayout from "./components/Layouts/WebsiteLayout";
import NotFound from "./pages/404/404";
import WebsiteLoading from "./components/Elements/loading/WebsiteLoading";
import { lazy, Suspense, useCallback, useEffect } from "react";
import LocaleLayout from "./components/Layouts/localeLayout";
import getInitialLocale from "./utils/getInitialLocale";
const HomePage = lazy(() => import("./pages/home/Index"));
const App = () => {

  const preload = useCallback(async () => {
    import("./pages/home/Index");
  }, []);
  useEffect(() => {
    preload();

  }, [preload, ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path=":locale" element={<LocaleLayout />}>
          <Route element={<WebsiteLayout />}>
            <Route index element={<Navigate to="home" replace />} />
            <Route
              path="home"
              element={
                <Suspense fallback={<WebsiteLoading />}>
                  <HomePage />
                </Suspense>
              }
            />
            <Route
              path="about"
              element={
                <div className="flex items-center flex-col justify-center text-akti-burgundy font-semibold text-6xl bg-akti-white rounded-2xl min-h-screen">
                  About Page
                  <br />
                  <span className="text-2xl block"> Coming Soon</span>
                </div>
              }
            />
            <Route
              path="services"
              element={
                <div className="flex items-center flex-col justify-center text-akti-burgundy font-semibold text-6xl bg-akti-white rounded-2xl min-h-screen">
                  Services Page
                  <br />
                  <span className="text-2xl block"> Coming Soon</span>
                </div>
              }
            />
            <Route
              path="contact"
              element={
                <div className="flex items-center flex-col justify-center text-akti-burgundy font-semibold text-6xl bg-akti-white rounded-2xl min-h-screen">
                  Contact Page
                  <br />
                  <span className="text-2xl block"> Coming Soon</span>
                </div>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
        <Route
          path="/"
          element={<Navigate to={`/${getInitialLocale()}`} replace />}
        />
        <Route path="*" element={<Navigate to="/en" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
