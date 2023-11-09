import React, { useState, useEffect } from "react";
import MyDetails from "../components/settings-components/MyDetails";
import Profile from "../components/settings-components/Profile";
import Password from "../components/settings-components/Password";
import Plan from "../components/settings-components/Plan";
import Billing from "../components/settings-components/Billing";
import Email from "../components/settings-components/Email";
import Notifications from "../components/settings-components/Notifications";
import AdvancedSettings from "../components/settings-components/AdvancedSettings";

const tabComponents = [
  { component: MyDetails, label: "Account" },
  { component: Profile, label: "Profile" },
  { component: Password, label: "Password" },
  { component: Plan, label: "Plan" },
  { component: Billing, label: "Billing" },
  { component: Email, label: "Email" },
  { component: Notifications, label: "Notifications" },
  { component: AdvancedSettings, label: "Other" },
];

const Settings = () => {
  const [openTab, setOpenTab] = useState(0);

  useEffect(() => {
    // Retrieve the selected tab index from localStorage on component mount
    const storedTab = localStorage.getItem("selectedTab");
    if (storedTab) {
      setOpenTab(parseInt(storedTab, 10));
    }
  }, []);

  const handleTabChange = (index) => {
    // Store the selected tab index in localStorage
    localStorage.setItem("selectedTab", index.toString());
    setOpenTab(index);
  };

  return (
    <div className="dark:bg-black">
      <div className="w-full m-auto">
        <ul className="flex  mb-0 list-none pt-3 pb-4 flex-row" role="tablist">
          {tabComponents.map((tab, index) => (
            <li
              key={index}
              className={`-mb-px mr-2 last:mr-0 flex-auto text-center text-gray-500 hover:border-2 rounded-xl ${
                openTab === index ? "border-2 border-purple-500 rounded-xl" : ""
              }`}
            >
              <a
                className="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded leading-normal flex"
                onClick={(e) => {
                  e.preventDefault();
                  handleTabChange(index);
                }}
                role="tablist"
              >
                <div>
                  <h3 className="text-xs">{tab.label}</h3>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <div className="relative break-words bg-white w-full mb-6 shadow-lg rounded">
          <div className="px-4 py-5 flex-auto">
            <div className="tab-content tab-space">
              {tabComponents.map((tab, index) => (
                <div
                  key={index}
                  className={
                    openTab === index ? "flex justify-between" : "hidden"
                  }
                >
                  <div className="flex">
                    <tab.component />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
