import styled, { css } from 'styled-components';

import { applyDisplayNames } from '@ustudio-ui/utils/functions';
import { hidden, shadow } from '@ustudio-ui/theme/mixin';

import type { RadioGroupProps } from '../radio-group.props';

const scale = (factor: number) => css`
  transform: translate(-50%, -50%) scale(${factor});
`;

const checkedValidity = (color: string) => css`
  border-color: var(--c-${color}-strong);

  &:before {
    background-color: var(--c-${color}-strong);
  }

  &:before,
  &:after {
    ${scale(1)};
  }

  &:hover {
    box-shadow: ${shadow(`${color}-strong`, 0.25)};
  }

  &:focus-within {
    border-color: var(--c-${color}-strong-down);

    &:before {
      background-color: var(--c-${color}-weak-up);
    }
  }

  &:active {
    border-color: var(--c-${color}-weak-up);

    &:before {
      background-color: var(--c-${color}-weak-up);
    }
  }
`;

const RadioButton = styled.label<Pick<RadioGroupProps, 'isDisabled' | 'isInvalid'> & { value: boolean }>(
  ({ value, isDisabled, isInvalid }) => css`
    position: relative;

    width: 16px;
    height: 16px;

    display: block;

    border-width: 1px;
    border-style: solid;

    ${isDisabled
      ? css`
          cursor: not-allowed;
        `
      : css`
          cursor: pointer;
        `}

    &,
    &:before,
    &:after {
      border-radius: 8px;
    }

    &:before,
    &:after {
      content: '';

      position: absolute;
      top: 50%;
      left: 50%;

      transform-origin: center center;

      transition: 200ms;
    }

    &:before {
      width: 16px;
      height: 16px;
    }

    &:after {
      width: 8px;
      height: 8px;
    }

    ${value
      ? // Checked
        css`
          ${checkedValidity('accent')};

          ${isInvalid && checkedValidity('critical')};

          &:after {
            background-color: var(--c-text-base-weak);
          }

          ${isDisabled &&
          css`
            &,
            &:focus-within,
            &:active {
              border-color: var(--c-faint-weak-up);

              &:before {
                background-color: var(--c-faint-weak-up);
              }
            }

            &:hover {
              box-shadow: none;
            }
          `}
        `
      : // Unchecked
        css`
          border-color: var(--c-faint-strong);

          &:before,
          &:after {
            ${scale(0)};

            background-color: var(--c-base-weak);
          }

          &:hover {
            box-shadow: ${shadow('base-strong', 0.15)};
          }

          &:focus-within,
          &:active {
            border-color: var(--c-accent-strong);
          }

          &:active {
            &:after {
              ${scale(1)};
            }
          }

          ${isInvalid &&
          css`
            border-color: var(--c-critical-strong);

            &:after {
              background-color: var(--c-critical-weak-up);
            }

            &:focus-within,
            &:active {
              border-color: var(--c-critical-weak-up);
            }
          `}

          ${isDisabled &&
          css`
            &:before,
            &:after {
              ${scale(0)};
            }

            &,
            &:focus-within,
            &:active {
              border-color: var(--c-faint-weak-up);
              background-color: var(--c-faint-weak);
            }

            &:active {
              &:after {
                ${scale(0)};
              }
            }

            &:hover {
              box-shadow: none;
            }
          `}
        `}
  `
);

const Input = styled.input`
  ${hidden};
`;

const Styled = applyDisplayNames({ RadioButton, Input });

export default Styled;
