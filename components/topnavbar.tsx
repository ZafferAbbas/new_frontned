import Link from "next/link";
import { IconSettings, IconBell, IconSearch, IconLogout } from "@tabler/icons-react";
import { signOut } from "@/lib/services/userAuth"; // Adjust the import path as necessary

export default function TopNavbar() {
  const handleLogout = async (e) => {
    e.preventDefault(); // Prevent default behavior
    try {
      const response = await signOut();
      if (response.status === 200) {
        console.log("Logout successful");
        // Clear cookies client-side for good measure
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.href = "/signin"; // Redirect to sign-in page
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Logout error", error);
    }
  };

  return (
    <div className="h-11 rounded-tr-2xl grid grid-cols-3 text-white text-[13px] bg-[#2C2F48] px-6 z-50">
      <div></div>
      <div className="flex items-center justify-center">Yeasti</div>
      <div className="flex items-center justify-end gap-8 text-[#EBEBF5A0]">
        <Link href="/search">
          <IconSearch size={20} />
        </Link>
        <IconBell size={20} />
        <Link href="/settings">
          <IconSettings size={20} />
        </Link>
        <button onClick={handleLogout} className="flex items-center">
          <IconLogout size={20} className="text-[#EBEBF5A0]" />
          <span className="ml-2">Logout</span>
        </button>
      </div>
    </div>
  );
}
