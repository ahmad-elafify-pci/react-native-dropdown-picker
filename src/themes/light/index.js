import { StyleSheet } from 'react-native';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import Colors from '../../constants/colors';

export const ICONS = {
  ARROW_DOWN: require('./icons/arrow-down.png'),
  ARROW_UP: require('./icons/arrow-up.png'),
  TICK: require('./icons/tick.png'),
  CLOSE: require('./icons/close.png'),
};

export default StyleSheet.create({
  arrowIcon: {
    height: responsiveWidth(5),
    width: responsiveWidth(5),
  },
  arrowIconContainer: {
    marginLeft: responsiveWidth(2.5),
  },
  badgeDotStyle: {
    backgroundColor: Colors.GREY,
    borderRadius: responsiveWidth(1.75),
    height: responsiveWidth(2.5),
    marginRight: 8,
    width: responsiveWidth(2.5),
  },
  badgeSeparator: {
    width: responsiveWidth(1.25),
  },
  badgeStyle: {
    alignItems: 'center',
    backgroundColor: Colors.ALTO,
    borderRadius: responsiveWidth(2.5),
    flexDirection: 'row',
    paddingHorizontal: responsiveWidth(2.5),
    paddingVertical: responsiveWidth(1.25),
  },
  closeIcon: {
    height: responsiveWidth(7.5),
    width: responsiveWidth(7.5),
  },
  closeIconContainer: {
    marginHorizontal: responsiveWidth(2.5),
  },
  container: {
    width: '100%',
  },
  customItemContainer: {},
  customItemLabel: {
    fontStyle: 'italic',
  },
  dropDownContainer: {
    backgroundColor: Colors.WHITE,
    borderColor: Colors.BLACK,
    borderRadius: responsiveWidth(2),
    borderWidth: responsiveWidth(0.25),
    overflow: 'hidden',
    position: 'absolute',
    width: '100%',
    zIndex: 1000,
  },
  extendableBadgeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
  },
  extendableBadgeItemContainer: {
    marginEnd: responsiveWidth(1.75),
    marginVertical: responsiveWidth(0.75),
  },
  flatListContentContainer: {
    flexGrow: 1,
  },
  iconContainer: {
    marginRight: responsiveWidth(2.5),
  },
  itemSeparator: {
    backgroundColor: Colors.BLACK,
    height: responsiveWidth(0.25),
  },
  label: {
    color: Colors.BLACK,
    flex: 1,
    fontSize: responsiveFontSize(1.8),
  },
  labelContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  listBody: {
    height: '100%',
  },
  listBodyContainer: {
    alignItems: 'center',
    flexGrow: 1,
  },
  listChildContainer: {
    paddingLeft: responsiveWidth(10),
  },
  listChildLabel: {},
  listItemContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: responsiveWidth(10),
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(2.5),
  },
  listItemLabel: {
    color: Colors.BLACK,
    flex: 1,
  },
  listMessageContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: responsiveWidth(2.5),
  },
  listMessageText: {},
  listParentContainer: {},
  listParentLabel: {},
  modalContentContainer: {
    flexGrow: 1,
  },
  modalTitle: {
    color: Colors.BLACK,
    fontSize: responsiveFontSize(2.25),
  },
  searchContainer: {
    alignItems: 'center',
    borderBottomColor: Colors.BLACK,
    borderBottomWidth: responsiveWidth(0.25),
    flexDirection: 'row',
    padding: responsiveWidth(2.5),
  },
  searchTextInput: {
    borderColor: Colors.BLACK,
    borderRadius: 8,
    borderWidth: responsiveWidth(0.25),
    color: Colors.BLACK,
    flexGrow: 1,
    flexShrink: 1,
    margin: 0,
    paddingHorizontal: responsiveWidth(2.5),
    paddingVertical: responsiveWidth(1.25),
  },
  selectedItemContainer: {},
  selectedItemLabel: {},
  style: {
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: responsiveWidth(12.725),
    paddingHorizontal: responsiveWidth(2.5),
    paddingVertical: responsiveWidth(0.75),
    width: '100%',
  },
  tickIcon: {
    height: responsiveWidth(5),
    width: responsiveWidth(5), // 20
  },
  tickIconContainer: {
    marginLeft: responsiveWidth(2.5),
  },
});
