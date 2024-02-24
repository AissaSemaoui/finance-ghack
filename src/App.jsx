import { RouterProvider } from "react-router-dom";
import axios from "axios";

import { routes } from "./routes";

axios.defaults.baseURL = "http://64.23.220.7:3001";

function App() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <main className="flex-1">
        <RouterProvider router={routes} />
      </main>
    </div>
  );
}

export default App;
