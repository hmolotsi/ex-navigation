import { Platform, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const isIPhoneX = Platform.OS === 'ios' &&
        !Platform.isPad &&
        !Platform.isTVOS &&
        ((height === 812 || width === 812)
          || (height === 844 || width === 844)
          || (height === 896 || width === 896)
          || (height === 926 || width === 926));

export default isIPhoneX;
