import Sidebar from "./Sidebar";
import Navbar from "./Sidebar";

type Props = {
  children?: React.ReactNode | React.ReactNode[];
};

const Layout = ({ children }: Props) => {
  return (
    <main>
      <Sidebar />
      <div className="content">{children}</div>
    </main>
  );
};

export default Layout;
