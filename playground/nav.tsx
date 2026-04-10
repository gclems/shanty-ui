import { useMemo } from "react";

import { Link, useRouter } from "@tanstack/react-router";
import { UserIcon } from "lucide-react";

import { Sidebar } from "@/index";

function Nav() {
	const { routesByPath } = useRouter();

	const links = useMemo(() => {
		const paths = Object.keys(routesByPath).filter((path) => path !== "/");
		return paths.map((path) => ({
			path,
			title: path.replace("/", ""),
		}));
	}, [routesByPath]);

	return (
		<Sidebar variant="floating" collapsible="icon">
			<Sidebar.Content>
				<Sidebar.Item isActive>Fake</Sidebar.Item>
				{links.map((link) => (
					<Sidebar.Item key={link.path} render={<Link to={link.path} />}>
						<UserIcon />
						{link.title}
					</Sidebar.Item>
				))}
			</Sidebar.Content>
		</Sidebar>
	);

	// return (
	//   <ul className="shrink-0 grow-0 space-y-2 px-4">
	//     {links.map((link) => (
	//       <li key={link.path}>
	//         <Link to={link.path}>{link.title}</Link>
	//       </li>
	//     ))}
	//   </ul>
	// );
}

export { Nav };
