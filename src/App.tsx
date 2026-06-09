import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AnimalList from "./pages/AnimalList";
import AnimalDetails from "./pages/AnimalDetails";
import AnimalCarousel from "./pages/AnimalCarousel";

import ProtectedRoute from "./components/ProtectedRoute.tsx";
import { AuthProvider } from "./context/AuthContext";

function AppContent() {
  const { user } = useAuth();

  return (
    <>
      {user && <Navbar />}
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/animals" /> : <Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/animals"
          element={
            <ProtectedRoute>
              <AnimalList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/animal/:id"
          element={
            <ProtectedRoute>
              <AnimalDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/animals/carousel"
          element={
            <ProtectedRoute>
              <AnimalCarousel />
            </ProtectedRoute>
          }
        />

        <Route path="/" element={user ? <Navigate to="/animals" /> : <Navigate to="/login" />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;