import React from 'react';
import {render, fireEvent, act, waitFor} from '@testing-library/react-native';
import {ProfileScreen} from '../src/screens/private/ProfileScreen';

let component: any;

describe('<ProfileScreen />', () => {
  beforeEach(() => {
    component = render(<ProfileScreen />);
  });
  it('Profile Render correctly', () => {
    expect(component.getByTestId('main-container')).toBeDefined();
    expect(component.getByTestId('waves')).toBeDefined();
    expect(component.getByTestId('profile-title')).toBeDefined();
    expect(component.getByTestId('btn-translate')).toBeDefined();
    expect(component.getByTestId('btn-background')).toBeDefined();
  });
});
