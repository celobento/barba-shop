"use client";

import * as Menubar from "@radix-ui/react-menubar";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  IconBriefcase,
  IconChartPie,
  IconChevronRight,
  IconScissors,
} from "@tabler/icons-react";
import "./styleNavbar.css";
const NavBar = () => {
  return (
    <nav className={`px-5 mb-5 py-3`}>
      <NavLink />
    </nav>
  );
};

const NavLink = () => {
  const currentPath = usePathname();
  const links = [
    { href: "/", label: "Dashboard" },
    { href: "/issues/list", label: "Issues" },
  ];
  return (
    <>
      <Menubar.Root className="MenubarRoot">
        <Menubar.Menu>
          <Menubar.Trigger className="MenubarTrigger">Menu</Menubar.Trigger>
          <Menubar.Portal>
            <Menubar.Content
              className="MenubarContent"
              align="start"
              sideOffset={5}
              alignOffset={-3}
            >
              <Menubar.Item className="MenubarItem">
                <Link href="/"> Dashboard</Link>{" "}
                <div className="RightSlot">
                  <IconChartPie width={16} height={16} />
                </div>
              </Menubar.Item>
              <Menubar.Separator className="MenubarSeparator" />
              <Menubar.Item className="MenubarItem">
                <Link href="/servico/list"> Serviços</Link>{" "}
                <div className="RightSlot">
                  <IconScissors width={16} height={16} />
                </div>
              </Menubar.Item>
              <Menubar.Item className="MenubarItem">
                <Link href="/servico/list"> Profissionais</Link>{" "}
                <div className="RightSlot">
                  <IconBriefcase width={16} height={16} />
                </div>
              </Menubar.Item>
              <Menubar.Separator className="MenubarSeparator" />
              <Menubar.Sub>
                <Menubar.SubTrigger className="MenubarSubTrigger">
                  Outros
                  <div className="RightSlot">
                    <IconChevronRight />
                  </div>
                </Menubar.SubTrigger>

                <Menubar.Portal>
                  <Menubar.SubContent
                    className="MenubarSubContent"
                    alignOffset={-5}
                  >
                    <Menubar.Item className="MenubarItem">
                      Search the web…
                    </Menubar.Item>
                    <Menubar.Separator className="MenubarSeparator" />
                    <Menubar.Item className="MenubarItem">Find…</Menubar.Item>
                    <Menubar.Item className="MenubarItem">
                      Find Next
                    </Menubar.Item>
                    <Menubar.Item className="MenubarItem">
                      Find Previous
                    </Menubar.Item>
                  </Menubar.SubContent>
                </Menubar.Portal>
              </Menubar.Sub>
            </Menubar.Content>
          </Menubar.Portal>
        </Menubar.Menu>
      </Menubar.Root>
    </>
  );
};

export default NavBar;
