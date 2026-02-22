import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TeamPage from "./page";

// 2025 Fall
import Fall2025TeamPage from "./2025/fall/page";
import Fall2025Layout from "./2025/fall/layout";
import Fall2025ProjectDescription from "./2025/fall/project-description/page";
import Fall2025ProjectGoal from "./2025/fall/project-goal/page";
import Fall2025LighthouseReport from "./2025/fall/lighthouse-report/page";
import Fall2025PresentationSlides from "./2025/fall/presentation-slides/page";
import Fall2025WeeklyUpdates from "./2025/fall/weekly-updates/page";
import Fall2025PeerEvaluations from "./2025/fall/peer-evaluations/page";
import Fall2025Demo from "./2025/fall/demo/page";

// 2026 Spring
import Spring2026TeamPage from "./2026/spring/page";
import Spring2026Layout from "./2026/spring/layout";
import Spring2026ProjectDescription from "./2026/spring/project-description/page";
import Spring2026ProjectGoal from "./2026/spring/project-goal/page";
import Spring2026LighthouseReport from "./2026/spring/lighthouse-report/page";
import Spring2026PresentationSlides from "./2026/spring/presentation-slides/page";
import Spring2026WeeklyUpdates from "./2026/spring/weekly-updates/page";
import Spring2026PeerEvaluations from "./2026/spring/peer-evaluations/page";
import Spring2026Demo from "./2026/spring/demo/page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/team" replace />} />
        <Route path="/team" element={<TeamPage />} />

        {/* 2025 Fall */}
        <Route
          path="/team/2025/fall"
          element={
            <Fall2025Layout>
              <Fall2025TeamPage />
            </Fall2025Layout>
          }
        />
        <Route
          path="/team/2025/fall/project-description"
          element={
            <Fall2025Layout>
              <Fall2025ProjectDescription />
            </Fall2025Layout>
          }
        />
        <Route
          path="/team/2025/fall/project-goal"
          element={
            <Fall2025Layout>
              <Fall2025ProjectGoal />
            </Fall2025Layout>
          }
        />
        <Route
          path="/team/2025/fall/lighthouse-report"
          element={
            <Fall2025Layout>
              <Fall2025LighthouseReport />
            </Fall2025Layout>
          }
        />
        <Route
          path="/team/2025/fall/presentation-slides"
          element={
            <Fall2025Layout>
              <Fall2025PresentationSlides />
            </Fall2025Layout>
          }
        />
        <Route
          path="/team/2025/fall/weekly-updates"
          element={
            <Fall2025Layout>
              <Fall2025WeeklyUpdates />
            </Fall2025Layout>
          }
        />
        <Route
          path="/team/2025/fall/peer-evaluations"
          element={
            <Fall2025Layout>
              <Fall2025PeerEvaluations />
            </Fall2025Layout>
          }
        />
        <Route
          path="/team/2025/fall/demo"
          element={
            <Fall2025Layout>
              <Fall2025Demo />
            </Fall2025Layout>
          }
        />

        {/* 2026 Spring */}
        <Route
          path="/team/2026/spring"
          element={
            <Spring2026Layout>
              <Spring2026TeamPage />
            </Spring2026Layout>
          }
        />
        <Route
          path="/team/2026/spring/project-description"
          element={
            <Spring2026Layout>
              <Spring2026ProjectDescription />
            </Spring2026Layout>
          }
        />
        <Route
          path="/team/2026/spring/project-goal"
          element={
            <Spring2026Layout>
              <Spring2026ProjectGoal />
            </Spring2026Layout>
          }
        />
        <Route
          path="/team/2026/spring/lighthouse-report"
          element={
            <Spring2026Layout>
              <Spring2026LighthouseReport />
            </Spring2026Layout>
          }
        />
        <Route
          path="/team/2026/spring/presentation-slides"
          element={
            <Spring2026Layout>
              <Spring2026PresentationSlides />
            </Spring2026Layout>
          }
        />
        <Route
          path="/team/2026/spring/weekly-updates"
          element={
            <Spring2026Layout>
              <Spring2026WeeklyUpdates />
            </Spring2026Layout>
          }
        />
        <Route
          path="/team/2026/spring/peer-evaluations"
          element={
            <Spring2026Layout>
              <Spring2026PeerEvaluations />
            </Spring2026Layout>
          }
        />
        <Route
          path="/team/2026/spring/demo"
          element={
            <Spring2026Layout>
              <Spring2026Demo />
            </Spring2026Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
