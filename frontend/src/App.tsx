import { Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Home from "@/pages/Home";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: { background: "#121212", color: "#F8F7F4", border: "1px solid #2B2824" },
        }}
      />
    </>
  );
}
