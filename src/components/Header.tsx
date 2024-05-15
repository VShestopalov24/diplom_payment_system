import Modal from "~/components/New-payment";
import Registration from "./Registration";
import { useLocation } from "@solidjs/router";

export default function Header() {

  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname ? "block" : "hidden";
  
  return (
    <header class="bg-purple h-[50px] md:h-[75px] flex justify-between items-center gap-2 mb-5 md:mb-10 px-3 sm:px-8 md:px-12">
      <img class="h-full" src="/logo.svg" alt="Logo" />
      <menu class={`flex gap-3 sm:gap-4 md:gap-8 ${active("/manager")} text-white`}>
        <li class="cursor-pointer"><Modal></Modal></li>
        <li class="cursor-pointer"><Registration></Registration></li>
      </menu>
      <a href="/"><img class="h-[40px] md:h-[50px]" src="/Logout.svg" alt="Выйти" /></a>
    </header>
  );
}
