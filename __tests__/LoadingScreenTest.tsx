import React from 'react';
import {render, shallow} from '@testing-library/react-native';
import {LoadingScreen} from '../src/screens/public/LoadingScreen';

let component: any;
describe('<LoadingScreen />', () => {
  beforeEach(() => {
    component = render(<LoadingScreen />);
  });
  it('Profile Render correctly', () => {
    expect(component.getByTestId('background')).toBeDefined();
    expect(component.getByTestId('loader')).toBeDefined();
  });
});
