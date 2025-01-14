import { RiDashboardHorizontalLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { TbTemplate } from "react-icons/tb";

const MenuData = [
  {
    label: `Dashboad`,
    navigate: `dashboard`,
    startIcon: <RiDashboardHorizontalLine size={24} />,
  },
  {
    label: `Emails`,
    navigate: `emails`,
    startIcon: <MdEmail size={24} />,
  },
  {
    label: `Email Templates`,
    navigate: `email-templates`,
    startIcon: <TbTemplate size={24} />,
  },
];

const LogoutData = [
  {
    label: "Logout",
    fn: () => {
      localStorage.removeItem("user");
      window.location.href = "/login";
    },
    startIcon: <FiLogOut size={24} />,
  },
];

export { MenuData, LogoutData };
