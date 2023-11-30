import { createSlice } from "@reduxjs/toolkit";

const Navbar = createSlice({
    name: "Navbar-actions",
    initialState: {
        value: false
    },
    reducers: {
        isOpen: (state) => {
            state.value = !state.value
        }
    }
})

export const { isOpen } = Navbar.actions;
export default Navbar.reducer