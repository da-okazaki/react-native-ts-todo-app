import React, { FC, Fragment ,useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList, Modal, SafeAreaView } from 'react-native';
// 簡易API
import todoList from './api/todos-list.json';

// 型指定
// Todoタイプ定義
type Todo = {
  id: number;
  title: string;
  description: string;
  done: boolean;
}
// Modeタイプ定義
type Mode = 'list' | 'add';

// TypeScriptでのファンクションコンポーネントの型指定
const App:FC = () => {

  // 初期値（いらなければ取るかコメントアウト）
  const [ready, setReady] = useState(false);
  const getReady = () => {
    setTodos(todoList);
    setReady(true);
  }
  useEffect(() => {
    getReady();
  }, []);

  // モードチェンジ
  const [mode, setMode] = useState<Mode>('list');
  const changeMode = (mode: Mode) => {
    setMode(mode);
  }
  const handlePlus = () => {
    changeMode('add'); // modal表示
  }
  const handleCancel = () => {
    changeMode('list'); // リスト表示
  }

  // TODO追加
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = (todo: Todo) => {
    setTodos(todos => [...todos, todo]);
  }
  const handleAdd = () => {
    if(!title || !description) return;

    const newTodo: Todo = {
      id: todos.length === 0 ? 1 : todos[todos.length - 1].id + 1,
      title,
      description,
      done: false
    }
    addTodo(newTodo);
    changeMode('list');
  }

  // TODO入力フォーム初期値
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const resetInput = () => {
    setTitle('');
    setDescription('');
  }
  useEffect(() => {
    if(mode === 'list') {
      resetInput();
    }
  }, [mode]);

  // TODO削除
  const deleteTodo = (id: number) => {
    // filterメソッド: 配列の値を抽出するメソッド => [応用]選択されたIDが違うものだけを抽出するので同じIDを持つ内容は削除される
    setTodos(todos => todos.filter(todo => todo.id !== id))
  }
  const handleDelete = (id: number) =>{
    deleteTodo(id);
  }

  // 描画部分
  return (
    <Fragment>
      <SafeAreaView style={styles.container}>
        <View>
          <TouchableOpacity onPress={() => handlePlus()}>
            <Text style={ styles.plus }>+ TODO ADD</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.todo_wrapper}>
          <FlatList
            data={todos}
            renderItem={({ item: todo }) => {
              return (
                <View style={styles.todo_container}>
                  <Text numberOfLines={2} style={styles.todo_title}>
                    { todo.title }: { todo.description }
                  </Text>
                  <TouchableOpacity onPress={ () => handleDelete(todo.id) }>
                    <Text style={ styles.delete }>Delete</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
            keyExtractor={(_, index) => index.toString()}
          />
        </View>
      </SafeAreaView>

      <Modal visible={ mode === 'add'} animationType={ 'slide' }>
        <View style={ styles.modal }>
          <View style={ styles.textinput_frame }>
            <TextInput
              placeholder={'Title'}
              value={ title }
              onChangeText={ text => setTitle(text) }
              style={ styles.textinput }
            />
            <TextInput
              placeholder={'Description'}
              value={ description }
              onChangeText={ text => setDescription(text) }
              style={ styles.textinput }
            />
          </View>
          <View style={ styles.button }>
            <TouchableOpacity onPress={() => handleAdd()}>
              <Text style={ styles.add }>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleCancel()}>
              <Text style={ styles.cancel }>Cancel</Text>
              </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </Fragment>
  );
}

const styles = StyleSheet.create({
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

export default App;
