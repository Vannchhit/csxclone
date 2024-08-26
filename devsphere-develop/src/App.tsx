import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        className: "",
        duration: 5000,
        success: {
          duration: 3000,
        },
      }}
    />
  );
}

export default App;
