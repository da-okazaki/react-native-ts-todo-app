import React, { FC, Fragment, useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Modal,
  SafeAreaView,
} from 'react-native';

//import todoList from 'src/api/todos-list';
import { styles } from 'src/styles/global-style';
// 型指定
// Todoタイプ定義
type Todo = {
  id: number;
  title: string;
  description: string;
  done: boolean;
};
// Modeタイプ定義
type Mode = 'list' | 'add';

// TypeScriptでのファンクションコンポーネントの型指定
const HomeScreen: FC = () => {
  // 初期値（いらなければ取るかコメントアウト）
  //const [ready, setReady] = useState(false);
  //const getReady = () => {
  //  setTodos(todoList);
  //  setReady(true);
  //};
  //useEffect(() => {
  //  getReady();
  //}, []);

  // モードチェンジ
  const [mode, setMode] = useState<Mode>('list');
  const changeMode = (mode: Mode) => {
    setMode(mode);
  };
  const handlePlus = () => {
    changeMode('add'); // modal表示
  };
  const handleCancel = () => {
    changeMode('list'); // リスト表示
  };

  // TODO追加
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = (todo: Todo) => {
    setTodos((todos) => [...todos, todo]);
  };
  const handleAdd = () => {
    if (!title || !description) return;

    const newTodo: Todo = {
      id: todos.length === 0 ? 1 : todos[todos.length - 1].id + 1,
      title,
      description,
      done: false,
    };
    addTodo(newTodo);
    changeMode('list');
  };

  // TODO入力フォーム初期値
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const resetInput = () => {
    setTitle('');
    setDescription('');
  };
  useEffect(() => {
    if (mode === 'list') {
      resetInput();
    }
  }, [mode]);

  // TODO削除
  const deleteTodo = (id: number) => {
    // filterメソッド: 配列の値を抽出するメソッド => [応用]選択されたIDが違うものだけを抽出するので同じIDを持つ内容は削除される
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };
  const handleDelete = (id: number) => {
    deleteTodo(id);
  };

  // 描画部分
  return (
    <Fragment>
      <SafeAreaView style={styles.container}>
        <View>
          <TouchableOpacity onPress={() => handlePlus()}>
            <Text style={styles.plus}>+ TODO ADD</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.todo_wrapper}>
          <FlatList
            data={todos}
            renderItem={({ item: todo }) => {
              return (
                <View style={styles.todo_container}>
                  <Text numberOfLines={2} style={styles.todo_title}>
                    {todo.title}: {todo.description}
                  </Text>
                  <TouchableOpacity onPress={() => handleDelete(todo.id)}>
                    <Text style={styles.delete}>Delete</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
            keyExtractor={(_, index) => index.toString()}
          />
        </View>
      </SafeAreaView>

      <Modal visible={mode === 'add'} animationType={'slide'}>
        <View style={styles.modal}>
          <View style={styles.textinput_frame}>
            <TextInput
              placeholder={'Title'}
              value={title}
              onChangeText={(text) => setTitle(text)}
              style={styles.textinput}
            />
            <TextInput
              placeholder={'Description'}
              value={description}
              onChangeText={(text) => setDescription(text)}
              style={styles.textinput}
            />
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => handleAdd()}>
              <Text style={styles.add}>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleCancel()}>
              <Text style={styles.cancel}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </Fragment>
  );
};

export default HomeScreen;
