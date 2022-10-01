import { useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import Task from "./components/Task";

export default function App() {

    const [goal, setGoal] = useState('');
    const [goalArray, setGoalArray] = useState([]);

	const goalTextHandler = (currentText) => {
		setGoal(currentText);
	}

	const addGoalHandler = () => {
		setGoalArray([...goalArray, goal]);
		setGoal(null);
	}

	const goalCompleted = (index) => {
		let tempGoalList = [...goalArray];
		tempGoalList.splice(index, 1);
		setGoalArray(tempGoalList);
	}

	return (
        <View style={styles.container}>
            <View style={styles.tasksWrapper}>
                <Text style={styles.sectionTitle}>Goal Handler App !!!</Text>

                <View style={styles.taskItems}>
                    {
						goalArray.map((goal, index) => {
							return (
								<TouchableOpacity key={index} onPress={() => goalCompleted(index)}>
									<Task text={goal} />
								</TouchableOpacity>
							);
						})
					}
                </View>
            </View>

            <View style={styles.writeGoal}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter A Goal"
                    value={goal}
                    onChangeText={goalTextHandler}
                />

                <TouchableOpacity onPress={() => addGoalHandler()}>
                    <View style={styles.goalInput}>
                        <Text style={styles.addGoal}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
		marginTop: 25,
        backgroundColor: "#e8eaed",
    },
	
	tasksWrapper: {
		paddingTop: 50,
		paddingHorizontal: 20,
	},

	sectionTitle: {
		fontSize: 24,
		fontWeight: 'bold',
	},

	taskItems: {
		marginTop: 20,
	},

	writeGoal: {
		position: 'absolute',
		bottom: 0,
		paddingTop: 5,
		paddingBottom: 20,
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		backgroundColor: '#e8eaed',
	},

	input: {
		padding: 15,
		width: 250,
		backgroundColor: '#fff',
		borderRadius: 60,
		borderWidth: 1,
		borderColor: '#c0c0c0'
	},

	goalInput: {
		width: 60,
		height: 60,
		backgroundColor: '#fff',
		borderRadius: 60,
		borderWidth: 1,
		borderColor: '#c0c0c0',
		alignItems: 'center',
		justifyContent: 'center',
	},

	addGoal: {
		fontSize: 20,
	},
});