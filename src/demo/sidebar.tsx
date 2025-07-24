import { useState } from "react";

import { HomeIcon } from "lucide-react";

import { SidebarPrimitive } from "../index";

const Sidebar = () => {
  const [activeMenuKey, setActiveMenuKey] = useState<string>("menu1");

  return (
    <SidebarPrimitive.Root collapsible="icon" variant="floating">
      <SidebarPrimitive.Header>
        <SidebarPrimitive.Menu>
          <SidebarPrimitive.MenuItem>
            <SidebarPrimitive.MenuButton className="text-left">
              <HomeIcon />
              DEMO
            </SidebarPrimitive.MenuButton>
          </SidebarPrimitive.MenuItem>
        </SidebarPrimitive.Menu>
      </SidebarPrimitive.Header>
      <SidebarPrimitive.Content>
        <SidebarPrimitive.Group>
          <SidebarPrimitive.GroupLabel>Group Label</SidebarPrimitive.GroupLabel>
          <SidebarPrimitive.GroupContent>
            <SidebarPrimitive.Menu>
              <SidebarPrimitive.MenuItem>
                <SidebarPrimitive.MenuButton
                  render={<a href="#" />}
                  isActive={activeMenuKey === "menu1"}
                  onClick={() => setActiveMenuKey("menu1")}
                  tooltip="This is item 1"
                >
                  <HomeIcon /> Item 1
                </SidebarPrimitive.MenuButton>
              </SidebarPrimitive.MenuItem>
              <SidebarPrimitive.MenuItem>
                <SidebarPrimitive.MenuButton
                  render={<a href="#" />}
                  isActive={activeMenuKey === "menu2"}
                  onClick={() => setActiveMenuKey("menu2")}
                  tooltip="This is item 2"
                >
                  <HomeIcon /> Item 2
                </SidebarPrimitive.MenuButton>
              </SidebarPrimitive.MenuItem>
              <SidebarPrimitive.MenuItem>
                <SidebarPrimitive.MenuButton
                  render={<a href="#" />}
                  isActive={activeMenuKey === "menu3"}
                  onClick={() => setActiveMenuKey("menu3")}
                  tooltip="This is item 3"
                >
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
