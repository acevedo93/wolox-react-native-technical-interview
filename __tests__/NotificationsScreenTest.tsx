import React from 'react';
import {render} from '@testing-library/react-native';
import {NotificationsScreen} from '../src/screens/private/NotificationsScreen';
let component: any;

describe('<NotificationsScreen />', () => {
  beforeEach(() => {
    component = render(<NotificationsScreen />);
  });
  it('Notifications Render correctly', () => {
    expect(component).toBeDefined();
    expect(component.getByTestId('main-container')).toBeDefined();
    expect(component.getByTestId('waves')).toBeDefined();
    expect(component.getByTestId('notification-title')).toBeDefined();
  });
});
