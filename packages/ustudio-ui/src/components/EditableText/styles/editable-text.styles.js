import { css } from 'styled-components';

import TextComponent from '../../Text';
import IconComponent from '../../internal/Icon';

import { getTextAppearance, getTextVariant, sc } from '../../../utils';
import { inject } from './editable-text.inject';

const TextArea = sc('textarea')(
  ({ isEditing, dimensions: { width, height }, variant, appearance }) => css`
    width: ${inject.dimension(width, isEditing)};
    height: ${inject.dimension(height, isEditing)};

    position: absolute;
    top: 0;
    left: 0;

    outline: none;
    resize: none;
    border: none;
    background: none;

    opacity: ${inject.opacity(isEditing)};

    transition: opacity var(--transition);

    &::-webkit-scrollbar {
      display: none;
    }

    -ms-overflow-style: none;

    ${getTextVariant({ variant })};
    ${getTextAppearance({ appearance })};
  `
)('TextArea');

const Text = sc(TextComponent)(
  ({ isEditing }) => css`
    opacity: ${inject.opacity(!isEditing)};

    transition: opacity var(--transition);
  `
)('Text');

const EditableText = sc('article')(
  ({ isDisabled, isEditing }) => css`
    position: relative;

    overflow-wrap: break-word;

    opacity: 1;

    width: 100%;
    min-height: 22px;

    display: flex;

    padding-right: var(--i-small);

    transition: opacity var(--transition);

    ${inject.disabledStyles({ isDisabled, Icon })};

    &:after {
      position: absolute;
      content: '';
      bottom: -2px;
      left: 0;

      height: 1px;
      width: 100%;

      background-color: var(--c-primary);

      ${inject.afterToggle(isEditing)};
    }
  `
)('EditableText');

const Icon = sc(IconComponent)(
  ({ isEditing }) => css`
    position: absolute;
    right: -10px;
    top: 6px;

    color: var(--c-neutral);

    transition: var(--transition);

    opacity: ${inject.opacity(!isEditing)};
  `
)('Icon');

export const Styled = { EditableText, TextArea, Text, Icon };
