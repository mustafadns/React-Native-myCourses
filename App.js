import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button , FlatList} from 'react-native';
import { useState  } from 'react';
import CourseInput from './components/CourseInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const [courses, setCourses] = useState([]);

  const startModal = () => {
    setModalIsVisible(true);
  };

  const endtModal = () => {
    setModalIsVisible(false);
  };

  const addCourse = (enteredCourseText) => {
    // console.log(enteredCourseText);
    setCourses((currentCourses) => [
      ...currentCourses,
      {text:enteredCourseText , id: Math.random().toString()},
    ]);
    endtModal();
  };

  return (
    <>
    <StatusBar style="light" />
    <View style={styles.container}>
      <Button title="Kurs Ekle" color='red' onPress={startModal}/>
      <CourseInput 
        visible={modalIsVisible}
        onAddCourse={addCourse}
        onCancel= {endtModal}
      />
      <View>
        <FlatList 
          data={courses}
          renderItem={({item}) => (
            <View style={styles.coursesItem}>
              <Text style={styles.coursesText}>
                {item.text}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  coursesItem: {
    backgroundColor: 'gray',
    margin: 8,
    borderRadius: 5,
  },
  coursesText: {
    padding: 8,
    color: 'white',
  }
});
