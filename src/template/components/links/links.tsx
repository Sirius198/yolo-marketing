import {
  BoxProps,
  Button,
  ButtonProps,
  chakra,
  IconButton,
  IconButtonProps,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';
import type { Merge } from '@chakra-ui/utils';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import React, { forwardRef, PropsWithChildren } from 'react';

// export interface RouteLinkProps
//   extends Omit<NextLinkProps, 'as' | 'href'>,
//     Omit<
//       ChakraLinkProps,
//       'as' | 'href' | 'onMouseEnter' | 'onTouchStart' | 'onClick'
//     > {
//   to: string;
//   as?: string;
// }

export type RouteLinkProps = PropsWithChildren<
  NextLinkProps & Omit<ChakraLinkProps, 'as'>
>;

export const NextChakraLink: React.FC<RouteLinkProps> = forwardRef(
  (
    {
      href,
      as,
      children,
      replace,
      scroll,
      shallow,
      prefetch,
      locale,
      passHref = true,
      ...chakraProps
    },
    ref
  ) => {
    return (
      <NextLink
        passHref={passHref}
        href={href}
        as={as}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        prefetch={prefetch}
        locale={locale}
      >
        <ChakraLink
          {...chakraProps}
          as="div"
          className="inline-block"
          ref={ref as any}
        >
          {children}
        </ChakraLink>
      </NextLink>
    );
  }
);

NextChakraLink.displayName = 'NextChakraLink';

// --

export interface OutgoingLinkProps extends ChakraLinkProps {
  externalIcon?: React.FC;
}

export const OutgoingLink: React.FC<OutgoingLinkProps> = ({
  children,
  isExternal = true,
  externalIcon = null,
  ...props
}) => {
  const Icon = externalIcon && chakra(externalIcon);
  return (
    <ChakraLink isExternal={isExternal} {...props}>
      {children}
      {Icon && (
        <Icon
          display="inline-block"
          mx="0.2em"
          fontSize="0.8em"
          aria-label="(external link)"
        />
      )}
    </ChakraLink>
  );
};

// --

export interface ButtonRouteLinkProps
  extends NextLinkProps,
    Omit<
      ButtonProps,
      'as' | 'onMouseEnter' | 'onTouchStart' | 'onClick'
    > {}

export const ButtonRouteLink: React.FC<ButtonRouteLinkProps> = ({
  href,
  as,
  replace,
  scroll,
  shallow,
  prefetch,
  locale,
  children,
  ...props
}) => (
  <NextLink
    passHref
    href={href}
    as={as}
    replace={replace}
    scroll={scroll}
    shallow={shallow}
    prefetch={prefetch}
    locale={locale}
  >
    <Button as="a" {...props}>
      {children}
    </Button>
  </NextLink>
);

// --

export interface IconButtonRouteLinkProps
  extends Merge<RouteLinkProps, IconButtonProps> {}

export const IconButtonRouteLink: React.FC<IconButtonRouteLinkProps> = ({
  ...props
}) => {
  return <IconButton as={NextChakraLink} {...props} />;
};

// --

export interface IconButtonOutgoingLinkProps
  extends Merge<
    Omit<OutgoingLinkProps, 'externalIcon'>,
    IconButtonProps
  > {}

export const IconButtonOutgoingLink: React.FC<
  IconButtonOutgoingLinkProps
> = ({ ...props }) => {
  return <IconButton as={OutgoingLink} {...props} />;
};

// --

export interface ShouldBeActiveArgs {
  href: string;
  as: NextLinkProps['as'];
  router?: NextRouter;
}

export type ShouldBeActivePredicate = (
  args: ShouldBeActiveArgs
) => boolean;

export interface NavLinkActivePredicates {
  exact: ShouldBeActivePredicate;
  startsWith: ShouldBeActivePredicate;
}

export const navLinkMatch: NavLinkActivePredicates = {
  exact: ({ href, router }) => router?.asPath === href,
  startsWith: ({ href, router }) =>
    router?.asPath?.startsWith(href) || false,
};

export interface NavLinkProps extends RouteLinkProps {
  active?: Omit<Partial<BoxProps>, 'as'>;
  shouldBeActive?: (args: ShouldBeActiveArgs) => boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({
  active: activeProps = {
    textDecoration: 'underline',
  },
  shouldBeActive = navLinkMatch.startsWith,
  href,
  as,
  ...props
}) => {
  const router = useRouter();
  const active = shouldBeActive({ href, as, router });
  return (
    <NextChakraLink
      {...(active ? (activeProps as any) : {})}
      as={as}
      href={href}
      {...props}
    />
  );
};
