import { useState } from "react";
import ExportButton from "./ExportButton";
import CodeExport from "./CodeExport";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="app-container">
      {/* Button */}
      <div onClick={() => setOpen(true)}>
        <ExportButton />
      </div>

      {/* Modal */}
      {open && <CodeExport onClose={() => setOpen(false)} />}
    </div>
  );
}

export default App;

