import { AppTheme } from "./theme";
import { LandingPage } from "./pages";
import { MainLayout } from "./layout/MainLayout";

const App = () => {
  return (
    <AppTheme>
      <MainLayout>
        <LandingPage />
      </MainLayout>
    </AppTheme>
  );
};

export default App;
