import { initializeApp } from "firebase/app";
import { ComponentProps } from "react";
import { UserInfo } from "~/components/client";
import { Logo, NavLink } from "~/components/server";
import LogoImage from "~/public/images/logo.png";
import { firebaseConfig } from "~/worker/firebase-config";

type NavBarProps = ComponentProps<"nav">;

export default function NavBar({ className, ...props }: NavBarProps) {
  initializeApp(firebaseConfig);

  return (
    <nav className={className} {...props}>
      <div className="flex basis-1/3 pl-3 sm:pl-7">
        <Logo
          src={LogoImage}
          alt="로고"
          href="/"
          className="interactable h-10 w-10 sm:h-12 sm:w-12"
          data-type="link"
        />
      </div>
      <div className="flex h-full basis-1/3 items-center justify-around border-x border-x-gray-900 px-3 sm:px-5 md:px-10">
        <NavLink
          variant="xs/normal"
          className="interactable"
          data-type="link"
          href="/deal/buy"
        >
          Buy
        </NavLink>
        <NavLink
          variant="xs/normal"
          className="interactable"
          data-type="link"
          href="/deal/sell"
        >
          Sell
        </NavLink>
        <NavLink
          variant="xs/normal"
          className="interactable"
          data-type="link"
          href="/chat"
        >
          Chat
        </NavLink>
      </div>
      <div className="flex grow justify-around">
        <UserInfo />
      </div>
    </nav>
  );
}
