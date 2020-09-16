import type { ButtonHTMLAttributes } from 'react';

import { Intent, IntrinsicComponent, StylableComponent } from '@ustudio-ui/types/component';
import type { Values } from '@ustudio-ui/utils/types';

export interface ButtonProps
  extends Omit<IntrinsicComponent<ButtonHTMLAttributes<HTMLButtonElement>>, 'disabled'>,
    StylableComponent {
  intent?: Values<typeof Intent>;
  appearance?: 'contained' | 'outlined' | 'text' | 'faint';
  borderRadius?: 'small' | 'large';
  isDisabled?: boolean;
}
