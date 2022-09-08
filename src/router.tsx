import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Table from "./pages/Table";
import CPP from "./pages/CPP";

export function Router() {

    return (
        <>
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Table />} path="/table" />
                <Route element={<CPP />} path="/cpp" />
            </Routes>
        </>
    )
}