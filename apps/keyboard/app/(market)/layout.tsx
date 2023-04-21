import { requireSignIn } from "~/lib/session";

export default async function MarketLayout({ children }: LayoutProps) {
  await requireSignIn();

  return <div className="col-span-3 select-none p-5 sm:p-7">{children}</div>;
}