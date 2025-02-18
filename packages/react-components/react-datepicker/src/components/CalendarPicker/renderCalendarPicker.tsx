import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { CalendarPickerState, CalendarPickerSlots } from './CalendarPicker.types';

/**
 * Render the final JSX of CalendarPicker
 */
export const renderCalendarPicker_unstable = (state: CalendarPickerState) => {
  const { slots, slotProps } = getSlots<CalendarPickerSlots>(state);

  // TODO Add additional slots in the appropriate place
  return <slots.root {...slotProps.root} />;
};
