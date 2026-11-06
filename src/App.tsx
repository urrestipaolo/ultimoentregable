import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { DashboardPage } from "./pages/PaginaDashboard";
import { UsersPage } from "./pages/PaginaUsuarios";
import { CoursesPage } from "./pages/PaginaCursos";
import { AuthPage } from "./pages/PageAuth";
import { RutaProtegida } from "./componentes/users/RutaProtegida";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/login" element={<AuthPage />} />

      <Route element={<RutaProtegida/>}>
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/usuarios" element={<UsersPage />} />
      <Route path="/cursos" element={<CoursesPage />} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Route>
      
    </Routes>
  );
}

export default App;