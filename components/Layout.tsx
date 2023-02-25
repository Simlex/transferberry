import { FunctionComponent, ReactElement } from "react";
import Navbar from "./Navbar";

interface LayoutProps {
    children?: React.ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({children}): ReactElement => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
}

export default Layout;