import { ReactNode } from 'react';

import { FontVariant, TextAlign, TextDecoration, TypeVariant } from '@ustudio-ui/types/typography';
import type { IntrinsicComponent } from '@ustudio-ui/types/component';
import type { Values } from '@ustudio-ui/utils/types';
import type { TextElement, TextTag } from '@ustudio-ui/types/html';

export interface TextProps extends IntrinsicComponent<TextElement> {
  children?: ReactNode;

  as?: TextTag;
  variant?: Values<typeof TypeVariant>;
  appearance?: Values<typeof FontVariant>;

  color?: string;
  align?: Values<typeof TextAlign>;

  decoration?: Values<typeof TextDecoration>;
}
