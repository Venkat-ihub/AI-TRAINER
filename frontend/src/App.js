import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AdminSignup from "./components/AdminSignup";
import AdminHome from "./components/AdminHome";
import UserHome from "./components/UserHome";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import Profile from "./components/Profile";
import StoryTelling from "./components/StoryTelling";
import StoryTellingOptions from "./components/storyTelling/StoryTellingOptions";
import StoryTellingTest from "./components/storyTelling/StoryTellingTest";
import StoryTellingLearn from "./components/storyTelling/StoryTellingLearn";
import { AppBar, Toolbar, Button, Container, Box } from "@mui/material";
import ErrorBoundary from "./components/ErrorBoundary";
import AdminDashboard from "./components/admin/AdminDashboard";
import RoadmapCustomization from "./components/admin/RoadmapCustomization";
import ProtectedAdminRoute from "./components/ProtectedAdminRoute";
import ProtectedUserRoute from "./components/ProtectedUserRoute";

function App() {
  // Get current path
  const path = window.location.pathname;
  const showNavBar = ![
    "/user-home",
    "/profile",
    "/story-telling",
    "/admin/dashboard",
    "/admin/roadmap",
  ].includes(path);

  return (
    <ErrorBoundary>
      <Router>
        <Box sx={{ flexGrow: 1 }}>
          {showNavBar && (
            <AppBar position="static">
              <Toolbar>
                <Button color="inherit" component={Link} to="/login">
                  Login
                </Button>
                <Button color="inherit" component={Link} to="/signup">
                  Sign Up
                </Button>
              </Toolbar>
            </AppBar>
          )}

          <Container>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/" element={<Login />} />
              <Route path="/reset-password" element={<ResetPassword />} />

              {/* Protected User Routes */}
              <Route
                path="/user-home"
                element={
                  <ProtectedUserRoute>
                    <UserHome />
                  </ProtectedUserRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedUserRoute>
                    <Profile />
                  </ProtectedUserRoute>
                }
              />

              {/* Protected Admin Routes */}
              <Route
                path="/admin/dashboard"
                element={
                  <ProtectedAdminRoute>
                    <AdminDashboard />
                  </ProtectedAdminRoute>
                }
              />
              <Route
                path="/admin/roadmap"
                element={
                  <ProtectedAdminRoute>
                    <RoadmapCustomization />
                  </ProtectedAdminRoute>
                }
              />

              {/* Story Telling Routes */}
              <Route path="/story-telling" element={<StoryTellingOptions />} />
              <Route
                path="/story-telling/practice"
                element={<StoryTelling />}
              />
              <Route
                path="/story-telling/learn"
                element={<StoryTellingLearn />}
              />
              <Route
                path="/story-telling/test"
                element={<StoryTellingTest />}
              />
            </Routes>
          </Container>
        </Box>
      </Router>
    </ErrorBoundary>
  );
}

export default App;