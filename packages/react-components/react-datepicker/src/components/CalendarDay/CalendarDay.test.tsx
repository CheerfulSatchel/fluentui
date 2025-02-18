import * as React from 'react';
import { render } from '@testing-library/react';
import { CalendarDay } from './CalendarDay';
import { isConformant } from '../../testing/isConformant';

describe('CalendarDay', () => {
  isConformant({
    Component: CalendarDay,
    displayName: 'CalendarDay',
  });

  // TODO add more tests here, and create visual regression tests in /apps/vr-tests

  it('renders a default state', () => {
    const result = render(<CalendarDay>Default CalendarDay</CalendarDay>);
    expect(result.container).toMatchSnapshot();
  });
});
