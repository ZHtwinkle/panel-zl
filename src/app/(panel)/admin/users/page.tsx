// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PageShell } from "../../_components/dashboard-shell";
import { PageHeader } from "../../_components/page-header";
import { UsersTable } from "./users-table";

export default async function UsersPage({}) {
  return (
    <PageShell>
      <PageHeader heading="Users" text="用户管理" />
      <div className="max-w-full overflow-hidden">
        <UsersTable />
      </div>
    </PageShell>
  );
}
