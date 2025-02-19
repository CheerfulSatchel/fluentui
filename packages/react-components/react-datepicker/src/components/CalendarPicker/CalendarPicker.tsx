import * as React from 'react';
import { useCalendarPicker_unstable } from './useCalendarPicker';
import { renderCalendarPicker_unstable } from './renderCalendarPicker';
import { useCalendarPickerStyles_unstable } from './useCalendarPickerStyles';
import type { CalendarPickerProps } from './CalendarPicker.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * CalendarPicker component - TODO: add more docs
 */
export const CalendarPicker: ForwardRefComponent<CalendarPickerProps> = React.forwardRef((props, ref) => {
  const state = useCalendarPicker_unstable(props, ref);

  useCalendarPickerStyles_unstable(state);
  return renderCalendarPicker_unstable(state);
});

CalendarPicker.displayName = 'CalendarPicker';
