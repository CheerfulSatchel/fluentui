import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { CalendarState, CalendarSlots } from './Calendar.types';

/**
 * Render the final JSX of Calendar
 */
export const renderCalendar_unstable = (state: CalendarState) => {
  const { slots, slotProps } = getSlots<CalendarSlots>(state);

  // TODO Add additional slots in the appropriate place
  return <slots.root {...slotProps.root} />;
};
