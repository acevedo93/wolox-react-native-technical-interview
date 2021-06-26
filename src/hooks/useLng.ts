import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTranslation} from 'react-i18next';

export const useLng = () => {
  const [t, i18n] = useTranslation('global');

  const setLng = async () => {
    const lng = i18n.language === 'en' ? 'es' : 'en';
    saveLng(lng);
  };

  const checkLng = async () => {
    let lng = await AsyncStorage.getItem('lng');
    if (lng) {
      saveLng(lng);
    }
  };

  const saveLng = async (lng: string) => {
    await AsyncStorage.setItem('lng', lng);
    await i18n.changeLanguage(lng);
  };

  return {
    lng: i18n.language,
    setLng,
    checkLng,
    t,
  };
};
