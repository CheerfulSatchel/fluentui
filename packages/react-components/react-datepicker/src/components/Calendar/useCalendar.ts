import * as React from 'react';
import { getNativeElementProps } from '@fluentui/react-utilities';
import type { CalendarProps, CalendarState } from './Calendar.types';

/**
 * Create the state required to render Calendar.
 *
 * The returned state can be modified with hooks such as useCalendarStyles_unstable,
 * before being passed to renderCalendar_unstable.
 *
 * @param props - props from this instance of Calendar
 * @param ref - reference to root HTMLElement of Calendar
 */
export const useCalendar_unstable = (props: CalendarProps, ref: React.Ref<HTMLElement>): CalendarState => {
  return {
    // TODO add appropriate props/defaults
    components: {
      // TODO add each slot's element type or component
      root: 'div',
    },
    // TODO add appropriate slots, for example:
    // mySlot: resolveShorthand(props.mySlot),
    root: getNativeElementProps('div', {
      ref,
      ...props,
    }),
  };
};
