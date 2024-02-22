import { RouterProvider } from "react-router-dom";

import { routes } from "./routes";

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
