import { View, Text, StyleSheet } from 'react-native';

const Task = (props) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemsOnLeft}>
                <View style={styles.square}></View>
                
                <Text style={styles.itemText}>
                    {props.text}
                </Text>
            </View>
            <View style={styles.itemOnRight}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },

    itemsOnLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },

    square: {
        height: 24,
        width: 24,
        backgroundColor: '#55bcf6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },

    itemText: {
        maxWidth: '80%',
    },

    itemOnRight: {
        height: 12,
        width: 12,
        borderWidth: 2,
        borderColor: '#55bcf6',
        borderRadius: 5,
    },
});

export default Task;