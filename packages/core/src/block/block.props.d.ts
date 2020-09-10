import { Axis, Indent, IntrinsicComponent, StylableComponent } from '@ustudio-ui/types/component';
import type { HtmlTag, TextTag } from '@ustudio-ui/types/html';
import type { Values } from '@ustudio-ui/utils/types';

export interface BlockProps extends IntrinsicComponent, StylableComponent {
  as?: Exclude<HtmlTag, TextTag>;

  isInline?: boolean;

  margin?: Indent;
  padding?: Indent;
  gap?: Partial<Record<Values<typeof Axis>, string>> | string;
}
