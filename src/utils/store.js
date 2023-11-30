import { configureStore } from "@reduxjs/toolkit";
import navbarActionSlice from "./NavbarSlice"

export const store = configureStore({
    reducer: {
        Navbar: navbarActionSlice
    }
})