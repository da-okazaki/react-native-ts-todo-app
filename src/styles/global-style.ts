import { StyleSheet } from 'react-native';
import { globalColors } from 'src/styles/constants-style';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: globalColors.white,
    height: 400,
  },
  todo_wrapper: {
    marginTop: 25,
  },
  todo_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 1,
    paddingLeft: 15,
    backgroundColor: globalColors.white2,
    borderColor: globalColors.gray,
    borderWidth: 1,
  },
  todo_title: {
    fontSize: 15,
    lineHeight: 20,
    textAlign: 'left',
  },
  plus: {
    fontSize: 20,
    textAlign: 'center',
    color: globalColors.blue,
    marginTop: 15,
    paddingLeft: 15,
  },
  add: {
    fontSize: 15,
    textAlign: 'center',
    color: globalColors.white,
    width: 250,
    marginTop: 20,
    marginRight: 5,
    padding: 10,
    backgroundColor: globalColors.blue,
  },
  cancel: {
    fontSize: 15,
    textAlign: 'center',
    color: globalColors.white,
    width: '100%',
    marginTop: 20,
    marginLeft: 5,
    padding: 10,
    backgroundColor: globalColors.gray,
  },
  textinput_frame: {
    width: '100%',
    marginBottom: 25,
  },
  textinput: {
    fontSize: 18,
    borderColor: globalColors.gray,
    borderBottomWidth: 1,
    padding: 25,
  },
  button: {
    flexDirection: 'row',
  },
  delete: {
    fontSize: 14,
    padding: 20,
    color: globalColors.white,
    backgroundColor: globalColors.red,
  },
});
