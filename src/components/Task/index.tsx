import { Text, TouchableOpacity, View } from 'react-native';
import { ITask, useTask } from '../../hooks/task';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../styles/theme';
import { styles } from './styles';
import CircleIcon from '../../assets/circle.svg';
import CheckIcon from '../../assets/check.svg';

interface TaskProps {
  task: ITask;
  onRemoveTask: (id: number) => void;
  onToggleTask: (id: number) => void;
}

export function Task({ task, onRemoveTask, onToggleTask }: TaskProps) {
  const { description, done, id } = task;

  return (
    <View style={[styles.container, done && { opacity: 0.7 }]}>
      <TouchableOpacity onPress={() => onToggleTask(id)}>
        {done ? <CheckIcon /> : <CircleIcon />}
      </TouchableOpacity>

      <Text
        numberOfLines={2}
        style={[
          styles.description,
          done && { textDecorationLine: 'line-through' },
        ]}
      >
        {description}
      </Text>

      <TouchableOpacity onPress={() => onRemoveTask(id)}>
        <Feather name='trash-2' size={20} color={theme.colors.gray[300]} />
      </TouchableOpacity>
    </View>
  );
}
