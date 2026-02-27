import {
  Building,
  ChartLine,
  Contact2,
  CreditCard,
  DollarSign,
  Home,
  Package,
  PieChart,
  ShoppingBag,
  ShoppingCart,
  Table,
  Tag,
  Warehouse,
} from "lucide-react";

import { NavGroup } from "@/lib/types";

export const MARKETING_HEADER_DESC_LINKS = [
  {
    title: "Features",
    items: [
      {
        title: "Invoicing",
        description: "Streamline billing, get paid faster",
        href: "/invoicing",
      },
      {
        title: "Core accounting",
        description: "Automate ledgers, ensure compliance",
        href: "/core-accounting",
      },
      {
        title: "Purchasing",
        description: "Manage orders, track vendors seamlessly",
        href: "/purchasing",
      },
      {
        title: "Expenses",
        description: "Track costs, reimburse instantly",
        href: "/expenses",
      },
      {
        title: "Inventory",
        description: "Optimize stock, reduce waste",
        href: "/inventory",
      },
      {
        title: "Manufacturing",
        description: "Streamline production, boost output",
        href: "/manufacturing",
      },
      {
        title: "Reporting",
        description: "Visualize trends, export insights",
        href: "/reporting",
      },
      {
        title: "Fixed assets",
        description: "Track depreciation, maximize value",
        href: "/fixed-assets",
      },
    ],
  },
  {
    title: "Solutions",
    items: [
      {
        title: "Retail business",
        description: "Multi-channel sales, seamless POS",
        href: "/retail-business",
      },
      {
        title: "Distributors",
        description: "Efficient stock & supplier tracking",
        href: "/distributors",
      },
      {
        title: "Online shop",
        description: "E-commerce sync, instant reconciliation",
        href: "/online-shop",
      },
      {
        title: "Manufacturing",
        description: "Cost control, production insights",
        href: "/manufacturing-industry",
      },
      {
        title: "Service business",
        description: "Project billing, effortless invoicing",
        href: "/service-business",
      },
      {
        title: "Restaurant",
        description: "Menu costing, daily revenue",
        href: "/restaurant",
      },
      {
        title: "Health services",
        description: "Patient billing, appointment finance",
        href: "/health-services",
      },
      {
        title: "Startups",
        description: "Burn rate tracking, investor-ready reports",
        href: "/startups",
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        title: "Help center",
        description: "Answers to your questions",
        href: "/help",
      },
      {
        title: "Documentation",
        description: "Platform documentation",
        href: "/docs",
      },
      {
        title: "Changelog",
        description: "Releases and updates",
        href: "/changelog",
      },
      {
        title: "Blog",
        description: "Insights and stories",
        href: "/blog",
      },
    ],
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
];

export const MARKETING_FOOTER_LINKS = [
  {
    title: "Features",
    items: [
      {
        title: "Invoicing",
        href: "/invoicing",
      },
      {
        title: "Core accounting",
        href: "/core-accounting",
      },
      {
        title: "Purchasing",
        href: "/purchasing",
      },
      {
        title: "Expenses",
        href: "/expenses",
      },
      {
        title: "Inventory",
        href: "/inventory",
      },
      {
        title: "Manufacturing",
        href: "/manufacturing",
      },
      {
        title: "Reporting",
        href: "/reporting",
      },
      {
        title: "Fixed assets",
        href: "/fixed-assets",
      },
    ],
  },
  {
    title: "Solutions",
    items: [
      {
        title: "Retail business",
        href: "/retail-business",
      },
      {
        title: "Distributors",
        href: "/distributors",
      },
      {
        title: "Online shop",
        href: "/online-shop",
      },
      {
        title: "Manufacturing",
        href: "/manufacturing-industry",
      },
      {
        title: "Service business",
        href: "/service-business",
      },
      {
        title: "Restaurant",
        href: "/restaurant",
      },
      {
        title: "Health services",
        href: "/health-services",
      },
      {
        title: "Startups",
        href: "/startups",
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        title: "Help center",
        href: "/help",
      },
      {
        title: "Documentation",
        href: "/docs",
      },
      {
        title: "Changelog",
        href: "/changelog",
      },
      {
        title: "Blog",
        href: "/blog",
      },
    ],
  },
  {
    title: "About",
    items: [
      {
        title: "Contact",
        href: "/contact",
      },
      {
        title: "Privacy",
        href: "/privacy",
      },
      {
        title: "Terms",
        href: "/terms",
      },
      {
        title: "DPA",
        href: "/dpa",
      },
    ],
  },
];

export function sidebarNavData({ slug }: { slug: string }) {
  const sidebarNav: NavGroup[] = [
    {
      title: "",
      items: [
        {
          title: "Home",
          url: `/workspace/${slug}`,
          icon: Home,
        },
      ],
    },
    {
      title: "Operations",
      items: [
        {
          title: "Sales",
          icon: ShoppingCart,
          items: [
            {
              title: "Overview",
              url: `/workspace/${slug}/sales/overview`,
              icon: PieChart,
            },
            {
              title: "Invoices",
              url: `/workspace/${slug}/sales/invoices`,
              icon: Tag,
            },
            {
              title: "Deliveries",
              url: `/workspace/${slug}/sales/deliveries`,
              icon: Tag,
            },
            {
              title: "Orders",
              url: `/workspace/${slug}/sales/orders`,
              icon: Tag,
            },
            {
              title: "Quotes",
              url: `/workspace/${slug}/sales/quotes`,
              icon: Tag,
            },
          ],
        },
        {
          title: "Purchases",
          icon: ShoppingBag,
          items: [
            {
              title: "Overview",
              url: `/workspace/${slug}/purchases/overview`,
              icon: PieChart,
            },
            {
              title: "Invoices",
              url: `/workspace/${slug}/purchases/invoices`,
              icon: Tag,
            },
            {
              title: "Deliveries",
              url: `/workspace/${slug}/purchases/deliveries`,
              icon: Tag,
            },
            {
              title: "Orders",
              url: `/workspace/${slug}/purchases/orders`,
              icon: Tag,
            },
            {
              title: "Quotes",
              url: `/workspace/${slug}/purchases/quotes`,
              icon: Tag,
            },
          ],
        },
        {
          title: "Expenses",
          url: `/workspace/${slug}/expenses`,
          icon: CreditCard,
        },
        {
          title: "Products",
          url: `/workspace/${slug}/products`,
          icon: Package,
        },
        {
          title: "Inventory",
          url: `/workspace/${slug}/warehouses`,
          icon: Warehouse,
        },
      ],
    },
    {
      title: "Finance",
      items: [
        {
          title: "Reports",
          url: `/workspace/${slug}/reports`,
          icon: ChartLine,
        },
        {
          title: "Cash & Bank",
          url: `/workspace/${slug}/banks`,
          icon: DollarSign,
        },
        {
          title: "Accounts",
          url: `/workspace/${slug}/accounts`,
          icon: Table,
        },
        {
          title: "Fixed Assets",
          url: `/workspace/${slug}/fixed-assets`,
          icon: Building,
        },
      ],
    },
    {
      title: "Directory",
      items: [
        {
          title: "Contacts",
          url: `/workspace/${slug}/contacts`,
          icon: Contact2,
        },
      ],
    },
  ];

  return sidebarNav;
}

export function quickActionsData({ slug }: { slug: string }) {
  const quickActions: NavGroup[] = [
    {
      title: "Suggestions",
      items: [
        {
          title: "Create sale",
          url: `/workspace/${slug}/sales/invoices/add`,
          icon: ShoppingCart,
        },
        {
          title: "Create purchase",
          url: `/workspace/${slug}/sales/purchases/add`,
          icon: ShoppingBag,
        },
        {
          title: "Record expense",
          url: `/workspace/${slug}/expenses/add`,
          icon: CreditCard,
        },
      ],
    },
    {
      title: "Quick action",
      items: [
        {
          title: "Add product",
          url: `/workspace/${slug}/products/add`,
          icon: Package,
        },
        {
          title: "Add warehouse",
          url: `/workspace/${slug}/warehouses/add`,
          icon: Warehouse,
        },
        {
          title: "Add account",
          url: `/workspace/${slug}/accounts/add`,
          icon: Table,
        },
        {
          title: "Add fixed asset",
          url: `/workspace/${slug}/fixed-assets/add`,
          icon: Building,
        },
        {
          title: "Add contact",
          url: `/workspace/${slug}/contacts/add`,
          icon: Contact2,
        },
      ],
    },
  ];

  return quickActions;
}
