import React from 'react';

import { Icon } from '@chakra-ui/react';
import {
  MdDashboard,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
} from 'react-icons/md';
import {
  TbHome,
  TbEdit,
  TbMail,
  TbSettings,
  TbCalendar,
  TbMessage,
  TbUsers,
  TbUserPlus,
  TbReportMoney,
  TbBuildingSkyscraper,
} from 'react-icons/tb';
import { IconType } from 'react-icons/lib';

export type IRoute = {
  name: string;
  path: string;
  topLevel?: boolean;
  icon?: IconType;
  layout?: '/admin' | '/auth' | '/rtl';
  secondary?: boolean;
  exact?: boolean;
  collapse?: boolean;
  hideInNav?: boolean;
  items?: IRoute[];
};

const allRoutes: IRoute[] = [
  // --- Dashboards ---
  {
    name: 'Main Navigation',
    path: '/dashboards',
    // icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    collapse: true,
    topLevel: true,
    items: [
      {
        name: 'Home',
        icon: TbHome,
        layout: '/admin',
        path: '/dashboards/default',
      },
      {
        name: 'Appointments',
        icon: TbEdit,
        layout: '/admin',
        path: '/dashboards/smart-home',
      },
      {
        name: 'Journal',
        icon: TbHome,
        layout: '/admin',
        path: '/dashboards/car-interface',
      },
      // {
      //   name: 'RTL',
      //   layout: '/rtl',
      //   path: '/dashboards/rtl',
      //
      // },
    ],
  },
  // --- NFTs ---
  {
    name: 'Chats',
    path: '/nfts',
    // icon: (
    //   <Icon as={MdOutlineShoppingCart} width="20px" height="20px" color="inherit" />
    // ),
    collapse: true,
    topLevel: true,
    items: [
      {
        name: 'Squads',
        icon: TbHome,
        layout: '/admin',
        path: '/nfts/marketplace',

        secondary: true,
      },
      {
        name: 'Doctor',
        icon: TbHome,
        layout: '/admin',
        path: '/nfts/collection',

        secondary: true,
      },
      {
        name: 'Health Coach',
        icon: TbHome,
        layout: '/admin',
        path: '/nfts/page',

        secondary: true,
      },
      {
        name: 'Other',
        icon: TbHome,
        layout: '/admin',
        path: '/nfts/profile',

        secondary: true,
      },
    ],
  },
  {
    name: 'Verticals',
    path: '/main',
    // icon: <Icon as={MdDashboard} width="20px" height="20px" color="inherit" />,
    collapse: true,
    topLevel: true,
    items: [
      {
        name: 'Billing',
        icon: TbHome,
        layout: '/admin',
        path: '/main/account/billing',
        exact: false,
      },
      {
        name: 'Application',
        icon: TbHome,
        layout: '/admin',
        path: '/main/account/application',
        exact: false,
      },
    ],
  },
  // --- Main pages ---
  {
    name: 'Main pages',
    path: '/main',
    // icon: <Icon as={MdDashboard} width="20px" height="20px" color="inherit" />,
    collapse: true,
    topLevel: true,
    // hideInNav: true,
    items: [
      {
        name: 'Account',
        path: '/main/account',
        collapse: true,
        items: [
          // {
          //   name: 'Billing',
          //   layout: '/admin',
          //   path: '/main/account/billing',
          //   exact: false,
          //
          // },
          // {
          //   name: 'Application',
          //   layout: '/admin',
          //   path: '/main/account/application',
          //   exact: false,
          //
          // },
          {
            name: 'Invoice',
            layout: '/admin',
            path: '/main/account/invoice',
            exact: false,
          },
          {
            name: 'Settings',
            layout: '/admin',
            path: '/main/account/settings',
            exact: false,
          },
          {
            name: 'All Courses',
            layout: '/admin',
            path: '/main/account/all-courses',
            exact: false,
          },
          {
            name: 'Course Page',
            layout: '/admin',
            path: '/main/account/course-page',
            exact: false,
          },
        ],
      },
      {
        name: 'Ecommerce',
        path: '/main/users',
        collapse: true,
        items: [
          {
            name: 'New Product',
            layout: '/admin',
            path: '/main/ecommerce/new-prodcut',
            exact: false,
          },
          {
            name: 'Product Settings',
            layout: '/admin',
            path: '/main/ecommerce/settings',
            exact: false,
          },
          {
            name: 'Product Page',
            layout: '/admin',
            path: '/main/ecommerce/page-example',
            exact: false,
          },
          {
            name: 'Order List',
            layout: '/admin',
            path: '/main/ecommerce/order-list',
            exact: false,
          },
          {
            name: 'Order Details',
            layout: '/admin',
            path: '/main/ecommerce/order-details',
            exact: false,
          },
          {
            name: 'Referrals',
            layout: '/admin',
            path: '/main/ecommerce/referrals',
            exact: false,
          },
        ],
      },
      {
        name: 'Users',
        path: '/main/users',
        collapse: true,
        items: [
          {
            name: 'New User',
            layout: '/admin',
            path: '/main/users/new-user',
            exact: false,
          },
          {
            name: 'Users Overview',
            layout: '/admin',
            path: '/main/users/users-overview',
            exact: false,
          },
          {
            name: 'Users Reports',
            layout: '/admin',
            path: '/main/users/users-reports',
            exact: false,
          },
        ],
      },
      {
        name: 'Applications',
        path: '/main/applications',
        collapse: true,
        items: [
          {
            name: 'Kanban',
            layout: '/admin',
            path: '/main/applications/kanban',
            exact: false,
          },
          {
            name: 'Data Tables',
            layout: '/admin',
            path: '/main/applications/data-tables',
            exact: false,
          },
          {
            name: 'Calendar',
            layout: '/admin',
            path: '/main/applications/calendar',
            exact: false,
          },
        ],
      },
      {
        name: 'Profile',
        path: '/main/profile',
        collapse: true,
        items: [
          {
            name: 'Profile Overview',
            layout: '/admin',
            path: '/main/profile/overview',
            exact: false,
          },
          {
            name: 'Profile Settings',
            layout: '/admin',
            path: '/main/profile/settings',
            exact: false,
          },
          {
            name: 'News Feed',
            layout: '/admin',
            path: '/main/profile/newsfeed',
            exact: false,
          },
        ],
      },
      {
        name: 'Others',
        path: '/main/others',
        collapse: true,
        items: [
          {
            name: 'Notifications',
            layout: '/admin',
            path: '/main/others/notifications',
            exact: false,
          },
          {
            name: 'Pricing',
            layout: '/auth',
            path: '/main/others/pricing',
            exact: false,
          },
          {
            name: '404',
            layout: '/admin',
            path: '/main/others/404',
            exact: false,
          },
        ],
      },
    ],
  },
  // --- Authentication ---
  {
    name: 'Authentication',
    path: '/auth',
    // icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    collapse: true,
    topLevel: true,
    // hideInNav: true,
    items: [
      // --- Sign In ---
      {
        name: 'Sign In',
        path: '/sign-in',
        collapse: true,
        items: [
          {
            name: 'Default',
            layout: '/auth',
            path: '/sign-in/default',
            icon: TbHome,
          },
          {
            name: 'Default',
            layout: '/auth',
            path: '/sign-in',
            icon: TbHome,
          },
          {
            name: 'Centered',
            layout: '/auth',
            path: '/sign-in/centered',
            icon: TbHome,
          },
        ],
      },
      // --- Sign Up ---
      {
        name: 'Sign Up',
        path: '/sign-up',
        collapse: true,
        items: [
          {
            name: 'Default',
            layout: '/auth',
            path: '/sign-up/default',
            icon: TbHome,
          },
          {
            name: 'Default',
            layout: '/auth',
            path: '/sign-up',
            icon: TbHome,
          },
          {
            name: 'Centered',
            layout: '/auth',
            path: '/sign-up/centered',
            icon: TbHome,
          },
        ],
      },
      // --- Verification ---
      {
        name: 'Verification',
        path: '/verification',
        collapse: true,
        items: [
          {
            name: 'Default',
            layout: '/auth',
            path: '/verification/default',
            icon: TbHome,
          },
          {
            name: 'Centered',
            layout: '/auth',
            path: '/verification/centered',
            icon: TbHome,
          },
        ],
      },
      // --- Lock ---
      {
        name: 'Lock',
        path: '/lock',
        collapse: true,
        items: [
          {
            name: 'Default',
            layout: '/auth',
            path: '/lock/default',
            icon: TbHome,
          },
          {
            name: 'Centered',
            layout: '/auth',
            path: '/lock/centered',
            icon: TbHome,
          },
        ],
      },
      // --- Forgot Password ---
      {
        name: 'Forgot Password',
        path: '/forgot-password',
        collapse: true,
        items: [
          {
            name: 'Default',
            layout: '/auth',
            path: '/forgot-password/default',
            icon: TbHome,
          },
          {
            name: 'Centered',
            layout: '/auth',
            path: '/forgot-password/centered',
            icon: TbHome,
          },
        ],
      },
    ],
  },
];

export default allRoutes;
