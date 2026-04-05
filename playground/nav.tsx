import { useMemo } from "react";

import { Link, useRouter } from "@tanstack/react-router";
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
    <Sidebar>
      <Sidebar.Header></Sidebar.Header>
      <Sidebar.Content>
        {links.map((link) => (
          <Sidebar.MenuItem key={link.path}>
            <Link to={link.path}>{link.title}</Link>
          </Sidebar.MenuItem>
        ))}
      </Sidebar.Content>
      <Sidebar.Footer></Sidebar.Footer>
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
