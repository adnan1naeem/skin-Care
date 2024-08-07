import { Colors } from "../../../constants/Colors";
import Typography from "../../../constants/Typography";
import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    flatListContainer: {
        paddingBottom: 16,
        paddingHorizontal: 16,
        flex: 1
    },
    LoadingView: { flex: 1, justifyContent: 'center', backgroundColor: Colors.light.background },
    container: {
        flex: 1,
        backgroundColor: "#f5fafa",
        paddingBottom:30,
    },
    title: {
        ...Typography.SemiBold24_47,
        textAlign: 'center',
        color: Colors.light.green,
        marginBottom: 16,
    },
    dateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 16,
        paddingHorizontal: 16,
        marginTop: 50,
    },
    dateBox: {
        width: 80,
        height: 100,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset: { width: 1, height: 2 },
        shadowRadius: 4,
        elevation: 5,
    },
    selectedDateBox: {
        backgroundColor: Colors.light.green,
    },
    dateText: {
        ...Typography.SemiBold16_20,
    },
    selectedDateText: {
        color: '#FFF',
    },
    dateLabel: {
        ...Typography.Light12_20,
    },
    selectedDateLabel: {
        color: '#FFF',
    },
    overviewTitle: {
        paddingHorizontal: 22,
        ...Typography.SemiBold16_20,
        marginBottom: 8,
    },
    overviewText: {
        paddingHorizontal: 24,
        ...Typography.Light12_18,
        marginBottom: 10,
    },
    container1: {
        flex: 1,
        backgroundColor: '#F5FAFA',
        padding: 18,
        paddingTop: Platform?.OS === "android" ? 30 : '11%',
      },
      backButton: {
        alignItems: 'center',
        marginBottom: 16,
        height: 40,
        width: 40,
        justifyContent: 'center',
        borderRadius: 27,
        backgroundColor: Colors.light.background,
        borderWidth: 1,
        borderColor: '#E6E8FE',
      },
      backButtonText: {
        fontSize: 16,
        marginLeft: 8,
        height: 40,
        paddingTop: 2,
        alignSelf: 'center',
        ...Typography.SemiBold16_20,
      },
      analysisContainer: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 40,
        marginBottom: 24,
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        height: 30,
      },
      icon: {
        width: 30,
        height: 30,
        marginRight: 8,
      },
      headerText: {
        flex: 1,
        textTransform:'capitalize',
        ...Typography.Medium12_20,
      },
      percentageText: {
        paddingTop: 10,
        ...Typography.Medium22_20,
      },
      progressBar: {
        height: 10,
        borderRadius: 5,
        marginBottom: 16,
        backgroundColor: '#d4dcdc',
      },
      description: {
        ...Typography.Light12_18,
        color: '#707070',
      },
      sectionTitle: {
        paddingHorizontal: 18,
        ...Typography.SemiBold16_20,
        marginBottom: 8,
        textTransform:'capitalize'
      },
      overviewText2: {
        paddingHorizontal: 18,
        ...Typography.Light12_18,
        color: '#707070',
        marginBottom:50
      },
});
