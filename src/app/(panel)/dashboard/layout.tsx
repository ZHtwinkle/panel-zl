import { userNavConfig } from "@/config/navigation";
import { getSessionUserAttrOrRedirect } from "@/lib/session";
import { HeaderNav } from "@/app/(panel)/_components/dashboard-header-nav";
import { UserAccountNav } from "@/app/(panel)/_components/user-account-nav";
import { LegacySidebarNav } from "../../../components/legacy-sidebar-nav";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { ThemeToggle } from "@/components/mode-toggle";
import { UserRoles } from "@/schema/user.schema";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default async function UserDashboardLayout({ children }: DashboardLayoutProps) {
  const user = await getSessionUserAttrOrRedirect();

  return (
    <>
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <HeaderNav items={[]} />

          <div className="flex flex-row items-center space-x-4">
            {user.role === UserRoles.ADMIN && (
              <Link className={buttonVariants({ variant: "outline" })} href="/admin">
                <Icons.settings className="mr-2 h-4 w-4" />
                Admin Panel
              </Link>
            )}
            <UserAccountNav user={user} />
            <ThemeToggle />
          </div>
        </div>
      </header>
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex">
          <LegacySidebarNav items={userNavConfig} />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden pb-6">{children}</main>
      </div>
    </>
  );
}
