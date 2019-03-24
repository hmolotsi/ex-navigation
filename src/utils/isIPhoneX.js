import { Platform, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const isIPhoneX = Platform.OS === 'ios' && ((width === 375 && height === 812) || (width === 414 && height === 896));
export default isIPhoneX;
