import { AppProvider } from "./context/appContext";
import { AppRouter } from "./routers/AppRouter";


function App() {
  return (
    <div className="App">
      <AppProvider>
        <AppRouter />

      </AppProvider>

    </div>
  );
}

export default App;
