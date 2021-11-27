import React from "react";
import Rutas from "./routes/Rutas";
import UserProvider from "./Context/User/UserProvider";
import GlobalProvider from "./Context/User/GlobalProvider";
import "./general.css";
import AuthProvider from "./Context/Auth/AuthProvider";

export const App = () => {
  return (
    <div>
      <GlobalProvider>
        <AuthProvider>
          <UserProvider>
            <Rutas />
          </UserProvider>
        </AuthProvider>
      </GlobalProvider>
    </div>
  );
};
