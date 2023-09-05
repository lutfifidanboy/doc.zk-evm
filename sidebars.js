// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docSidebar: [
    {
      type: "autogenerated",
      dirName: ".", // '.' means the current docs folder
    },
    {
      type: "doc",
      id: "build-on-linea/run-a-node",
      label: "Run a node",
    },
    {
      type: "link",
      label: "Bug Bounty Program",
      href: "https://immunefi.com/bounty/linea/",
    },
    {
      type: "category",
      label: "Contact Us",
      items: [
        {
          type: "link",
          label: "Get help",
          href: "https://support.linea.build/",
        },
        {
          type: "link",
          label: "Provide feedback",
          href: "https://community.linea.build/c/feedback",
        },
        {
          type: "link",
          label: "Report an issue",
          href: "https://community.linea.build/c/bug-reports/",
        },
        {
          type: "link",
          label: "Join our Discord",
          href: "https://discord.gg/linea",
        },
      ],
    },
  ],
};

module.exports = sidebars;
