import { Avatar, Button, Dropdown, Label } from "@heroui/react";
import {
  Bell,
  House,
  LogOutIcon,
  Menu,
  Settings,
  UserGroup,
  UserRound,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/authContext";

export default function Navbar() {
  const navigate=useNavigate()
  const {isAuthenticated,removeUserToken}=useAuth()
  console.log("isAuthenticated",isAuthenticated);
  
  const navItems = [
    { to: "/feed", label: "Feed", Icon: House },
    { to: "/profile", label: "Profile", Icon: UserRound },
    { to: "/notifications", label: "Notifications", Icon: Bell },
  ];
   function logoutHandler() {
    removeUserToken()
    navigate("/auth/login")
   }
  return (
    <nav className="sticky top-0 z-40 border-b border-slate-200/90 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-2 py-1.5 sm:gap-3 sm:px-3">
        {/* Logo */}
        <div className="flex shrink-0 items-center gap-3">
          {/* <img
            src="/Saif.png" 
            alt="Saif Posts"
            className="h-9 w-9 rounded-xl object-cover"
          /> */}
           <UserGroup />
          <span className="hidden text-xl font-extrabold text-slate-900 sm:block">
            Saif Posts
          </span>
        </div>

        {isAuthenticated && 
        <>
        {/* Nav Items */}
        <div className="flex min-w-0 items-center gap-1 overflow-x-auto rounded-2xl border border-slate-200 bg-slate-50/90 px-1 py-1 sm:px-1.5">
          {navItems.map(({ to, label, Icon }) => (
            <NavLink
              key={to}
              to={to}
              aria-label={label}
              className={({ isActive }) =>
                `flex shrink-0 items-center gap-1.5 rounded-xl px-2.5 py-2 text-sm font-extrabold transition sm:gap-2 sm:px-3.5 ${
                  isActive
                    ? "bg-white text-[#1f6fe5]"
                    : "text-slate-600 hover:bg-white/90 hover:text-slate-900"
                }`
              }
            >
              <Icon size={20} />
              <span className="hidden sm:inline">{label}</span>
              <span className="sr-only sm:hidden">{label}</span>
            </NavLink>
          ))}
        </div>

        {/* User Menu */}
        <Dropdown>
          <Button
            aria-label="Open user menu"
            variant="ghost"
            className="flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-2 py-1.5 transition hover:bg-slate-100"
          >
            <Avatar className="h-8 w-8">
              <Avatar.Image
                src="https://pub-3cba56bacf9f4965bbb0989e07dada12.r2.dev/linkedPosts/default-profile.png"
                alt="Nelle Rosa"
              />
              <Avatar.Fallback>NR</Avatar.Fallback>
            </Avatar>

            <span className="hidden max-w-35 truncate text-sm font-semibold text-slate-800 md:block">
              Nelle Rosa
            </span>

            <Menu size={15} className="text-slate-500" />
          </Button>

          <Dropdown.Popover className="min-w-44">
            <Dropdown.Menu>
              <Dropdown.Item id="profile" textValue="Profile">
                <UserRound size={16} />
                <Label>Profile</Label>
              </Dropdown.Item>

              <Dropdown.Item id="settings" textValue="Settings">
                <Settings size={16} />
                <Label>Settings</Label>
              </Dropdown.Item>

              <Dropdown.Item
                onPress={logoutHandler}
                id="logout"
                textValue="Logout"
                variant="danger"
                className="text-red-400"
              >
                <LogOutIcon size={16} />
                <Label>Logout</Label>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Popover>
        </Dropdown>  
        </>}
      </div>
    </nav>
  );
}
