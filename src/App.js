import { RouterProvider } from "react-router-dom";
import { router } from "./JsFile/Route";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
