import {
  FlatList,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './styles';
import LogoImg from '../../assets/logo.svg';
import ClipboardIcon from '../../assets/clipboard.svg';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../../styles/theme';
import { useTask } from '../../hooks/task';
import { Task } from '../../components/Task';
import { useState } from 'react';

export function HomeScreen() {
  const [taskDescription, setTaskDescription] = useState('');

  const { tasks, doneTasks, addTask, removeTask, toggleTask } = useTask();

  function handleAddTask() {
    if (!taskDescription) return;

    addTask(taskDescription);
    setTaskDescription('');
    Keyboard.dismiss();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LogoImg />
      </View>

      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder='Adicione uma nova tarefa'
            placeholderTextColor={theme.colors.gray[300]}
            value={taskDescription}
            onChangeText={setTaskDescription}
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
            <Ionicons
              name='add-circle-outline'
              size={24}
              color={theme.colors.gray[100]}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.detailsCounter}>
          <View style={styles.counterContainer}>
            <Text
              style={[styles.counterLabel, { color: theme.colors.blue.main }]}
            >
              Criadas
            </Text>
            <Text style={styles.counter}>{tasks.length}</Text>
          </View>
          <View style={styles.counterContainer}>
            <Text
              style={[styles.counterLabel, { color: theme.colors.purple.main }]}
            >
              Concluídas
            </Text>
            <Text style={styles.counter}>{doneTasks.length}</Text>
          </View>
        </View>

        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <Task
              task={item}
              onRemoveTask={removeTask}
              onToggleTask={toggleTask}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ alignItems: 'center', marginTop: 8 }}
          ListEmptyComponent={() => (
            <View style={styles.emptyList}>
              <ClipboardIcon />
              <Text style={styles.emptyListTitle}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.emptyListText}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
