import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@/components/Layout/Layout";
import { ThemeProvider } from "@/Providers/Theme";
import Dashboard from "@/container/Dashboard";
import City from "@/container/City";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
          <Layout>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/city/:cityName' element={<City />} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
