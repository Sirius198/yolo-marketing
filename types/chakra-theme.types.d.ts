// regenerate by running
// npx @chakra-ui/cli tokens path/to/your/theme.(js|ts)
import { BaseThemeTypings } from './shared.types.js';
export interface ThemeTypings extends BaseThemeTypings {
  blur:
    | 'none'
    | 'sm'
    | 'base'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | (string & {});
  borders: 'none' | '1px' | '2px' | '4px' | '8px' | (string & {});
  borderStyles: string & {};
  borderWidths: string & {};
  breakpoints:
    | 'base'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '2sm'
    | '3xl'
    | (string & {});
  colors:
    | 'transparent'
    | 'current'
    | 'black'
    | 'white'
    | 'whiteAlpha.50'
    | 'whiteAlpha.100'
    | 'whiteAlpha.200'
    | 'whiteAlpha.300'
    | 'whiteAlpha.400'
    | 'whiteAlpha.500'
    | 'whiteAlpha.600'
    | 'whiteAlpha.700'
    | 'whiteAlpha.800'
    | 'whiteAlpha.900'
    | 'blackAlpha.50'
    | 'blackAlpha.100'
    | 'blackAlpha.200'
    | 'blackAlpha.300'
    | 'blackAlpha.400'
    | 'blackAlpha.500'
    | 'blackAlpha.600'
    | 'blackAlpha.700'
    | 'blackAlpha.800'
    | 'blackAlpha.900'
    | 'gray.50'
    | 'gray.100'
    | 'gray.200'
    | 'gray.300'
    | 'gray.400'
    | 'gray.500'
    | 'gray.600'
    | 'gray.700'
    | 'gray.800'
    | 'gray.900'
    | 'red.50'
    | 'red.100'
    | 'red.200'
    | 'red.300'
    | 'red.400'
    | 'red.500'
    | 'red.600'
    | 'red.700'
    | 'red.800'
    | 'red.900'
    | 'orange.50'
    | 'orange.100'
    | 'orange.200'
    | 'orange.300'
    | 'orange.400'
    | 'orange.500'
    | 'orange.600'
    | 'orange.700'
    | 'orange.800'
    | 'orange.900'
    | 'yellow.50'
    | 'yellow.100'
    | 'yellow.200'
    | 'yellow.300'
    | 'yellow.400'
    | 'yellow.500'
    | 'yellow.600'
    | 'yellow.700'
    | 'yellow.800'
    | 'yellow.900'
    | 'green.50'
    | 'green.100'
    | 'green.200'
    | 'green.300'
    | 'green.400'
    | 'green.500'
    | 'green.600'
    | 'green.700'
    | 'green.800'
    | 'green.900'
    | 'teal.50'
    | 'teal.100'
    | 'teal.200'
    | 'teal.300'
    | 'teal.400'
    | 'teal.500'
    | 'teal.600'
    | 'teal.700'
    | 'teal.800'
    | 'teal.900'
    | 'blue.50'
    | 'blue.100'
    | 'blue.200'
    | 'blue.300'
    | 'blue.400'
    | 'blue.500'
    | 'blue.600'
    | 'blue.700'
    | 'blue.800'
    | 'blue.900'
    | 'cyan.50'
    | 'cyan.100'
    | 'cyan.200'
    | 'cyan.300'
    | 'cyan.400'
    | 'cyan.500'
    | 'cyan.600'
    | 'cyan.700'
    | 'cyan.800'
    | 'cyan.900'
    | 'purple.50'
    | 'purple.100'
    | 'purple.200'
    | 'purple.300'
    | 'purple.400'
    | 'purple.500'
    | 'purple.600'
    | 'purple.700'
    | 'purple.800'
    | 'purple.900'
    | 'pink.50'
    | 'pink.100'
    | 'pink.200'
    | 'pink.300'
    | 'pink.400'
    | 'pink.500'
    | 'pink.600'
    | 'pink.700'
    | 'pink.800'
    | 'pink.900'
    | 'linkedin.50'
    | 'linkedin.100'
    | 'linkedin.200'
    | 'linkedin.300'
    | 'linkedin.400'
    | 'linkedin.500'
    | 'linkedin.600'
    | 'linkedin.700'
    | 'linkedin.800'
    | 'linkedin.900'
    | 'facebook.50'
    | 'facebook.100'
    | 'facebook.200'
    | 'facebook.300'
    | 'facebook.400'
    | 'facebook.500'
    | 'facebook.600'
    | 'facebook.700'
    | 'facebook.800'
    | 'facebook.900'
    | 'messenger.50'
    | 'messenger.100'
    | 'messenger.200'
    | 'messenger.300'
    | 'messenger.400'
    | 'messenger.500'
    | 'messenger.600'
    | 'messenger.700'
    | 'messenger.800'
    | 'messenger.900'
    | 'whatsapp.50'
    | 'whatsapp.100'
    | 'whatsapp.200'
    | 'whatsapp.300'
    | 'whatsapp.400'
    | 'whatsapp.500'
    | 'whatsapp.600'
    | 'whatsapp.700'
    | 'whatsapp.800'
    | 'whatsapp.900'
    | 'twitter.50'
    | 'twitter.100'
    | 'twitter.200'
    | 'twitter.300'
    | 'twitter.400'
    | 'twitter.500'
    | 'twitter.600'
    | 'twitter.700'
    | 'twitter.800'
    | 'twitter.900'
    | 'telegram.50'
    | 'telegram.100'
    | 'telegram.200'
    | 'telegram.300'
    | 'telegram.400'
    | 'telegram.500'
    | 'telegram.600'
    | 'telegram.700'
    | 'telegram.800'
    | 'telegram.900'
    | 'inherit'
    | 'slate.50'
    | 'slate.100'
    | 'slate.200'
    | 'slate.300'
    | 'slate.400'
    | 'slate.500'
    | 'slate.600'
    | 'slate.700'
    | 'slate.800'
    | 'slate.900'
    | 'zinc.50'
    | 'zinc.100'
    | 'zinc.200'
    | 'zinc.300'
    | 'zinc.400'
    | 'zinc.500'
    | 'zinc.600'
    | 'zinc.700'
    | 'zinc.800'
    | 'zinc.900'
    | 'neutral.50'
    | 'neutral.100'
    | 'neutral.200'
    | 'neutral.300'
    | 'neutral.400'
    | 'neutral.500'
    | 'neutral.600'
    | 'neutral.700'
    | 'neutral.800'
    | 'neutral.900'
    | 'stone.50'
    | 'stone.100'
    | 'stone.200'
    | 'stone.300'
    | 'stone.400'
    | 'stone.500'
    | 'stone.600'
    | 'stone.700'
    | 'stone.800'
    | 'stone.900'
    | 'amber.50'
    | 'amber.100'
    | 'amber.200'
    | 'amber.300'
    | 'amber.400'
    | 'amber.500'
    | 'amber.600'
    | 'amber.700'
    | 'amber.800'
    | 'amber.900'
    | 'lime.50'
    | 'lime.100'
    | 'lime.200'
    | 'lime.300'
    | 'lime.400'
    | 'lime.500'
    | 'lime.600'
    | 'lime.700'
    | 'lime.800'
    | 'lime.900'
    | 'emerald.50'
    | 'emerald.100'
    | 'emerald.200'
    | 'emerald.300'
    | 'emerald.400'
    | 'emerald.500'
    | 'emerald.600'
    | 'emerald.700'
    | 'emerald.800'
    | 'emerald.900'
    | 'sky.50'
    | 'sky.100'
    | 'sky.200'
    | 'sky.300'
    | 'sky.400'
    | 'sky.500'
    | 'sky.600'
    | 'sky.700'
    | 'sky.800'
    | 'sky.900'
    | 'indigo.50'
    | 'indigo.100'
    | 'indigo.200'
    | 'indigo.300'
    | 'indigo.400'
    | 'indigo.500'
    | 'indigo.600'
    | 'indigo.700'
    | 'indigo.800'
    | 'indigo.900'
    | 'violet.50'
    | 'violet.100'
    | 'violet.200'
    | 'violet.300'
    | 'violet.400'
    | 'violet.500'
    | 'violet.600'
    | 'violet.700'
    | 'violet.800'
    | 'violet.900'
    | 'fuchsia.50'
    | 'fuchsia.100'
    | 'fuchsia.200'
    | 'fuchsia.300'
    | 'fuchsia.400'
    | 'fuchsia.500'
    | 'fuchsia.600'
    | 'fuchsia.700'
    | 'fuchsia.800'
    | 'fuchsia.900'
    | 'rose.50'
    | 'rose.100'
    | 'rose.200'
    | 'rose.300'
    | 'rose.400'
    | 'rose.500'
    | 'rose.600'
    | 'rose.700'
    | 'rose.800'
    | 'rose.900'
    | 'dark.50'
    | 'dark.100'
    | 'dark.200'
    | 'dark.300'
    | 'dark.400'
    | 'dark.500'
    | 'dark.600'
    | 'dark.700'
    | 'dark.800'
    | 'dark.900'
    | 'dashboardTabs.100'
    | 'dashboardButton.50'
    | 'dashboardButton.500'
    | 'dashboardButton.600'
    | 'dashboard.primaryText'
    | 'dashboard.secondaryText'
    | 'dashboard.tealMain'
    | 'dashboard.tealText'
    | 'dashboard.lightTeal'
    | 'dashboard.lightRed'
    | 'dashboard.lightYellow'
    | 'dashboard.lightGreen'
    | 'brand.100'
    | 'brand.200'
    | 'brand.300'
    | 'brand.400'
    | 'brand.500'
    | 'brand.600'
    | 'brand.700'
    | 'brand.800'
    | 'brand.900'
    | 'brand.DEFAULT'
    | 'brandScheme.100'
    | 'brandScheme.200'
    | 'brandScheme.300'
    | 'brandScheme.400'
    | 'brandScheme.500'
    | 'brandScheme.600'
    | 'brandScheme.700'
    | 'brandScheme.800'
    | 'brandScheme.900'
    | 'brandTabs.100'
    | 'brandTabs.200'
    | 'brandTabs.300'
    | 'brandTabs.400'
    | 'brandTabs.500'
    | 'brandTabs.600'
    | 'brandTabs.700'
    | 'brandTabs.800'
    | 'brandTabs.900'
    | 'secondary.50'
    | 'secondary.100'
    | 'secondary.200'
    | 'secondary.300'
    | 'secondary.400'
    | 'secondary.500'
    | 'secondary.600'
    | 'secondary.700'
    | 'secondary.800'
    | 'secondary.900'
    | 'secondaryGray.50'
    | 'secondaryGray.100'
    | 'secondaryGray.200'
    | 'secondaryGray.300'
    | 'secondaryGray.400'
    | 'secondaryGray.500'
    | 'secondaryGray.600'
    | 'secondaryGray.700'
    | 'secondaryGray.800'
    | 'secondaryGray.900'
    | 'secondaryGray.DEFAULT'
    | 'navy.50'
    | 'navy.100'
    | 'navy.200'
    | 'navy.300'
    | 'navy.400'
    | 'navy.500'
    | 'navy.600'
    | 'navy.700'
    | 'navy.800'
    | 'navy.900'
    | 'chakra-body-text'
    | 'chakra-body-bg'
    | 'chakra-border-color'
    | 'chakra-placeholder-color'
    | (string & {});
  colorSchemes:
    | 'whiteAlpha'
    | 'blackAlpha'
    | 'gray'
    | 'red'
    | 'orange'
    | 'yellow'
    | 'green'
    | 'teal'
    | 'blue'
    | 'cyan'
    | 'purple'
    | 'pink'
    | 'linkedin'
    | 'facebook'
    | 'messenger'
    | 'whatsapp'
    | 'twitter'
    | 'telegram'
    | 'slate'
    | 'zinc'
    | 'neutral'
    | 'stone'
    | 'amber'
    | 'lime'
    | 'emerald'
    | 'sky'
    | 'indigo'
    | 'violet'
    | 'fuchsia'
    | 'rose'
    | 'dark'
    | 'secondary'
    | 'secondaryGray'
    | 'navy'
    | (string & {});
  fonts: 'heading' | 'body' | 'mono' | 'sans' | 'display' | (string & {});
  fontSizes:
    | '3xs'
    | '2xs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '9xl'
    | (string & {});
  fontWeights:
    | 'hairline'
    | 'thin'
    | 'light'
    | 'normal'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'extrabold'
    | 'black'
    | (string & {});
  layerStyles: string & {};
  letterSpacings:
    | 'tighter'
    | 'tight'
    | 'normal'
    | 'wide'
    | 'wider'
    | 'widest'
    | (string & {});
  lineHeights:
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | 'normal'
    | 'none'
    | 'shorter'
    | 'short'
    | 'base'
    | 'tall'
    | 'taller'
    | (string & {});
  radii:
    | 'none'
    | 'sm'
    | 'base'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | 'full'
    | (string & {});
  shadows:
    | 'xs'
    | 'sm'
    | 'base'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | 'outline'
    | 'inner'
    | 'none'
    | 'dark-lg'
    | (string & {});
  sizes:
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '12'
    | '14'
    | '16'
    | '20'
    | '24'
    | '28'
    | '32'
    | '36'
    | '40'
    | '44'
    | '48'
    | '52'
    | '56'
    | '60'
    | '64'
    | '72'
    | '80'
    | '96'
    | 'px'
    | '0.5'
    | '1.5'
    | '2.5'
    | '3.5'
    | 'max'
    | 'min'
    | 'full'
    | '3xs'
    | '2xs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | 'prose'
    | 'container.sm'
    | 'container.md'
    | 'container.lg'
    | 'container.xl'
    | (string & {});
  space:
    | '1'
    | '-1'
    | '2'
    | '-2'
    | '3'
    | '-3'
    | '4'
    | '-4'
    | '5'
    | '-5'
    | '6'
    | '-6'
    | '7'
    | '-7'
    | '8'
    | '-8'
    | '9'
    | '-9'
    | '10'
    | '-10'
    | '12'
    | '-12'
    | '14'
    | '-14'
    | '16'
    | '-16'
    | '20'
    | '-20'
    | '24'
    | '-24'
    | '28'
    | '-28'
    | '32'
    | '-32'
    | '36'
    | '-36'
    | '40'
    | '-40'
    | '44'
    | '-44'
    | '48'
    | '-48'
    | '52'
    | '-52'
    | '56'
    | '-56'
    | '60'
    | '-60'
    | '64'
    | '-64'
    | '72'
    | '-72'
    | '80'
    | '-80'
    | '96'
    | '-96'
    | 'px'
    | '-px'
    | '0.5'
    | '-0.5'
    | '1.5'
    | '-1.5'
    | '2.5'
    | '-2.5'
    | '3.5'
    | '-3.5'
    | (string & {});
  textStyles: string & {};
  transition:
    | 'property.common'
    | 'property.colors'
    | 'property.dimensions'
    | 'property.position'
    | 'property.background'
    | 'easing.ease-in'
    | 'easing.ease-out'
    | 'easing.ease-in-out'
    | 'duration.ultra-fast'
    | 'duration.faster'
    | 'duration.fast'
    | 'duration.normal'
    | 'duration.slow'
    | 'duration.slower'
    | 'duration.ultra-slow'
    | (string & {});
  zIndices:
    | 'hide'
    | 'auto'
    | 'base'
    | 'docked'
    | 'dropdown'
    | 'sticky'
    | 'banner'
    | 'overlay'
    | 'modal'
    | 'popover'
    | 'skipLink'
    | 'toast'
    | 'tooltip'
    | (string & {});
  components: {
    Accordion: {
      sizes: never;
      variants: never;
    };
    Alert: {
      sizes: never;
      variants: 'subtle' | 'left-accent' | 'top-accent' | 'solid';
    };
    Avatar: {
      sizes: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
      variants: never;
    };
    Badge: {
      sizes: never;
      variants: 'solid' | 'subtle' | 'outline' | 'brand';
    };
    Breadcrumb: {
      sizes: never;
      variants: never;
    };
    Button: {
      sizes: 'lg' | 'md' | 'sm' | 'xs';
      variants:
        | 'ghost'
        | 'outline'
        | 'solid'
        | 'link'
        | 'unstyled'
        | 'ghostIcon'
        | 'brand'
        | 'darkBrand'
        | 'lightBrand'
        | 'light'
        | 'action'
        | 'setup';
    };
    Checkbox: {
      sizes: 'sm' | 'md' | 'lg';
      variants: never;
    };
    CloseButton: {
      sizes: 'lg' | 'md' | 'sm';
      variants: never;
    };
    Code: {
      sizes: never;
      variants: 'solid' | 'subtle' | 'outline';
    };
    Container: {
      sizes: never;
      variants: never;
    };
    Divider: {
      sizes: never;
      variants: 'solid' | 'dashed';
    };
    Drawer: {
      sizes: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
      variants: never;
    };
    Editable: {
      sizes: never;
      variants: never;
    };
    Form: {
      sizes: never;
      variants: never;
    };
    FormError: {
      sizes: never;
      variants: never;
    };
    FormLabel: {
      sizes: never;
      variants: never;
    };
    Heading: {
      sizes: '4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
      variants: never;
    };
    Input: {
      sizes: 'lg' | 'md' | 'sm' | 'xs';
      variants:
        | 'outline'
        | 'filled'
        | 'flushed'
        | 'unstyled'
        | 'dashboardBorderless'
        | 'dashboard'
        | 'main'
        | 'auth'
        | 'authSecondary'
        | 'search'
        | 'social'
        | 'story';
    };
    Kbd: {
      sizes: never;
      variants: never;
    };
    Link: {
      sizes: never;
      variants: never;
    };
    List: {
      sizes: never;
      variants: never;
    };
    Menu: {
      sizes: never;
      variants: never;
    };
    Modal: {
      sizes:
        | 'xs'
        | 'sm'
        | 'md'
        | 'lg'
        | 'xl'
        | '2xl'
        | '3xl'
        | '4xl'
        | '5xl'
        | '6xl'
        | 'full';
      variants: never;
    };
    NumberInput: {
      sizes: 'xs' | 'sm' | 'md' | 'lg';
      variants:
        | 'outline'
        | 'filled'
        | 'flushed'
        | 'unstyled'
        | 'main'
        | 'auth'
        | 'authSecondary'
        | 'search';
    };
    PinInput: {
      sizes: 'lg' | 'md' | 'sm' | 'xs';
      variants: 'outline' | 'flushed' | 'filled' | 'unstyled';
    };
    Popover: {
      sizes: never;
      variants: never;
    };
    Progress: {
      sizes: 'xs' | 'sm' | 'md' | 'lg';
      variants: 'table';
    };
    Radio: {
      sizes: 'md' | 'lg' | 'sm';
      variants: never;
    };
    Select: {
      sizes: 'lg' | 'md' | 'sm' | 'xs';
      variants:
        | 'outline'
        | 'filled'
        | 'flushed'
        | 'unstyled'
        | 'main'
        | 'mini'
        | 'subtle'
        | 'transparent'
        | 'auth'
        | 'authSecondary'
        | 'search';
    };
    Skeleton: {
      sizes: never;
      variants: never;
    };
    SkipLink: {
      sizes: never;
      variants: never;
    };
    Slider: {
      sizes: 'lg' | 'md' | 'sm';
      variants: never;
    };
    Spinner: {
      sizes: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
      variants: never;
    };
    Stat: {
      sizes: 'md';
      variants: never;
    };
    Switch: {
      sizes: 'sm' | 'md' | 'lg';
      variants: 'dashboard' | 'main';
    };
    Table: {
      sizes: 'sm' | 'md' | 'lg';
      variants: 'simple' | 'striped' | 'unstyled';
    };
    Tabs: {
      sizes: 'sm' | 'md' | 'lg';
      variants:
        | 'line'
        | 'enclosed'
        | 'enclosed-colored'
        | 'soft-rounded'
        | 'solid-rounded'
        | 'unstyled';
    };
    Tag: {
      sizes: 'sm' | 'md' | 'lg';
      variants: 'subtle' | 'solid' | 'outline';
    };
    Textarea: {
      sizes: 'xs' | 'sm' | 'md' | 'lg';
      variants:
        | 'outline'
        | 'flushed'
        | 'filled'
        | 'unstyled'
        | 'main'
        | 'auth'
        | 'authSecondary'
        | 'search';
    };
    Tooltip: {
      sizes: never;
      variants: never;
    };
    RangeSlider: {
      sizes: never;
      variants: 'main';
    };
    Card: {
      sizes: never;
      variants: 'panel';
    };
  };
}
