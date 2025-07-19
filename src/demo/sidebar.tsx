import { HomeIcon } from "lucide-react";
import { SidebarPrimitive } from "../index";

const Sidebar = () => {
  return (
    <SidebarPrimitive.Root collapsible="icon" variant="floating">
      <SidebarPrimitive.Header>
        <HomeIcon />
        DEMO
      </SidebarPrimitive.Header>
      <SidebarPrimitive.Content>
        <SidebarPrimitive.Group>
          <SidebarPrimitive.GroupContent>
            <SidebarPrimitive.Menu>
              <SidebarPrimitive.MenuItem>
                <SidebarPrimitive.MenuButton render={<a />} href="#" isActive>
                  <HomeIcon /> Item 1
                </SidebarPrimitive.MenuButton>
              </SidebarPrimitive.MenuItem>
              <SidebarPrimitive.MenuItem>
                <SidebarPrimitive.MenuButton render={<a />} href="#">
                  <HomeIcon /> Item 2
                </SidebarPrimitive.MenuButton>
              </SidebarPrimitive.MenuItem>
              <SidebarPrimitive.MenuItem>
                <SidebarPrimitive.MenuButton render={<a />} href="#">
                  <HomeIcon /> Item 3
                </SidebarPrimitive.MenuButton>
              </SidebarPrimitive.MenuItem>
            </SidebarPrimitive.Menu>
          </SidebarPrimitive.GroupContent>
        </SidebarPrimitive.Group>
      </SidebarPrimitive.Content>
      <SidebarPrimitive.Footer>
        <p>Footer content goes here</p>
      </SidebarPrimitive.Footer>
    </SidebarPrimitive.Root>
  );
};

export { Sidebar };
