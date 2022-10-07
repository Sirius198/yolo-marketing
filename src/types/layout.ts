import type { NextPage, NextComponentType } from 'next';
import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import { ReactElement, ReactNode } from 'react';

export type PageType = 'general' | 'simple';
export type LayoutSettings = {
  hideHeader?: boolean;
  hideFooter?: boolean;
  transparentHeader?: boolean;
  pageTitle?: string;
  pageSubtitle?: string;
  pageDescription?: string;
  pageImage?: any;
  contentTop?: any;
  contentBottom?: any;

  // The below are deprecated. Need to confirm they are unused before removing
  hasDashboardHeader?: boolean;
  isProtected?: boolean;
  simple?: boolean;
  pageType?: PageType;
  disabledHeader?: boolean;
  disabledFooter?: boolean;
  simpleHeader?: boolean;
  simpleFooter?: boolean;
};

export type GetLayoutFunction = (component: JSX.Element) => JSX.Element;

export type NextPageWithLayout<P = { router?: Router }, IP = P> = NextPage<
  P,
  IP
> & {
  CustomLayout?: React.FC<LayoutSettings & { router?: Router }>;
  // getLayout?: GetLayoutFunction;
  // getLayout?: (page: ReactElement) => ReactNode,
  layoutSettings?: LayoutSettings;
};

export type CustomPage<P = { router: Router }> = NextPage<P> & {
  CustomLayout?: React.FC<LayoutSettings>;
  layoutSettings?: LayoutSettings;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  err?: any;
};

// import type { AAppProps as NextAppProps } from 'next/app';
// import type {
//   NextComponentType as DefaultNextComponentType,
//   NextPage as DefaultNextPage,
//   NextPageContext,
// } from 'next';

// export declare type NextComponentType<
//   C = NextPageContext,
//   IP = Record<string, unknown>,
//   P = Record<string, unknown>
//   // @ts-ignore
// > = DefaultNextComponentType<C, IP, P>;

// export interface AppProps<P = Record<string, unknown>>
//   extends NextAppProps<P> {
//   Component: NextComponentType<NextPageContext, any, P> & {
//     getLayout?: GetLayoutFunction;
//   };
// }

// export declare type NextPage<
//   P = Record<string, unknown>,
//   IP = P
// > = DefaultNextPage<P, IP> & {
//   getLayout?: GetLayoutFunction;
// };
