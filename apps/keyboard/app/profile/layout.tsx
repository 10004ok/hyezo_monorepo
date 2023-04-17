import { Text } from "@hyezo/ui";
import { NavLink, Icons } from "~/components/server";
import { requireSignIn } from "~/lib/session";

export default async function ProfileLayout({ children }: LayoutProps) {
  await requireSignIn();

  return (
    <>
      <div className="col-span-1 flex h-[90vh] flex-col items-center gap-4 border-r border-gray-900 pt-10">
        <Text variant="xl/bold" className="mb-5">
          User Profile
        </Text>
        <div className="flex min-w-max flex-col gap-5">
          <NavLink href="/profile/user-info">
            <Icons.user />
            User Info
          </NavLink>
          <NavLink href="/profile/favorite">
            <Icons.like />
            Favorites
          </NavLink>
          <NavLink href="/profile/watchlist">
            <Icons.watch />
            Watchlist
          </NavLink>
          <NavLink href="/profile/user-setting">
            <Icons.setting />
            Setting
          </NavLink>
          <NavLink href="/profile/notification">
            <Icons.notificationOn />
            Notification
          </NavLink>
        </div>
      </div>
      <div className="col-span-2 p-20">{children}</div>
    </>
  );
}