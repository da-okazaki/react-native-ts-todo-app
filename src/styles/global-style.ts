import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff",
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
    backgroundColor: '#f5f5f5',
  },
  todo_title: {
    width: 300,
    fontSize: 15,
    lineHeight: 20,
    textAlign: 'left',
  },
  plus: {
    fontSize: 20,
    textAlign: 'center',
    color: '#4169e1',
    marginTop: 15,
    paddingLeft: 15,
  },
  add: {
    fontSize: 15,
    textAlign: 'center',
    color: '#fff',
    width: 250,
    marginTop: 20,
    marginRight: 5,
    padding: 10,
    backgroundColor: '#4169e1',
  },
  cancel: {
    fontSize: 15,
    textAlign: 'center',
    color: '#fff',
    width: '100%',
    marginTop: 20,
    marginLeft: 5,
    padding: 10,
    backgroundColor: '#ccc',
  },
  textinput_frame: {
    width: '100%',
    marginBottom: 25,
  },
  textinput: {
    fontSize: 18,
    borderColor: '#ccc',
    borderBottomWidth: 1,
    padding: 25,
  },
  button: {
    flexDirection: 'row',
  },
  delete: {
    fontSize: 14,
    padding: 30,
    color: '#fff',
    backgroundColor: '#dc143c',
  }
});

