import React from "react";
import GlobalStyles from "./box/global";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { baseTheme } from "./theme/theme";
import { Home, About, Menu, Cart, Profile, Contacts } from "./router/router";

const App = () => {
  return (
    <ThemeProvider theme={baseTheme}>
      <GlobalStyles />
      <React.Suspense fallback={<span>... Loading</span>}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </BrowserRouter>
      </React.Suspense>
    </ThemeProvider>
  );
};

export default App;
