import {
  MdOutlineAdminPanelSettings,
  MdOutlineLogout,
  MdGroups,
} from "react-icons/md";

const links = [
  {
    icon: <MdGroups size={28} />,
    text: "User Management",
    path: "/",
  },
  {
    icon: <MdGroups size={28} />,
    text: "User Management",
    path: "/",
  },
  {
    icon: <MdGroups size={28} />,
    text: "User Management",
    path: "/",
  },
  {
    icon: <MdGroups size={28} />,
    text: "User Management",
    path: "/",
  },
  {
    icon: <MdGroups size={28} />,
    text: "User Management",
    path: "/",
  },
];

export default function Sidebar() {
  return (
    <aside className="w-80 h-screen bg-gradient-to-br from-blue-900 to-blue-600 p-6">
      <section className="flex flex-col justify-between h-full py-4">
        {/* Logo + Name */}
        <section>
          <div className="flex gap-3 items-center">
            <MdOutlineAdminPanelSettings size={56} color="white" />
            <div>
              <p className="text-white text-2xl leading-6 mt-2 font-heading">
                EShtole
              </p>
              <p className="text-blue-300 text-sm">Admin Panel</p>
            </div>
          </div>

          {/* Navigation */}

          <ul className="mt-10">
            {links.map((link, index) => (
              <li
                className="list-none flex items-center gap-3 text-white font-heading py-3 hover:bg-white hover:text-blue-600 rounded-md ps-4 transition-all cursor-pointer"
                key={index}
              >
                {link.icon}
                <span> {link.text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Footer */}

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="rounded-full w-11 h-11 flex items-center justify-center font-semibold bg-white text-blue-600 font-heading">
              W
            </div>
            <div className="mt-1.5">
              <p className="text-white font-semibold text-lg font-heading leading-6">
                Waqas Munir
              </p>
              <span className="text-blue-300 text-sm leading-6 cursor-pointer hover:underline">
                View Profile
              </span>
            </div>
          </div>
          <div className="w-full h-[1px] bg-white" />
          <button className="w-full gap-3 items-center bg-white py-3 rounded-md text-blue-600 font-heading flex justify-center">
            <MdOutlineLogout size={28} />
            <p className="font-semibold text-lg">Logout</p>
          </button>
        </div>
      </section>
    </aside>
  );
}
