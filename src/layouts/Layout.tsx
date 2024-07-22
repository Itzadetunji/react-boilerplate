import { Outlet } from "react-router";

const Layout: React.FC = () => {
	return (
		<main className="relative flex h-screen">
			<div className="flex h-full max-h-screen w-full flex-col overflow-auto p-6 pb-0">
				{/* <Header /> */}
				<Outlet />
			</div>
		</main>
	);
};

export default Layout;
