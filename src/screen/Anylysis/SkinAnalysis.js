import React, { useCallback, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import ProgressComponent from '../Anylysis/Component/ProgressBar';
import { Colors } from '../../../constants/Colors';
import { getRequest } from '../../../components/ApiHandler';
import { ActivityIndicator } from 'react-native-paper';
import { styles } from './styles';

const SkinAnalysis = () => {
    const [analysisData, setAnalysisData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();
    const [selectedDate, setSelectedDate] = useState(null);
    const [initialLoad, setInitialLoad] = useState(true)

    const fetchAnalysisData = useCallback(async () => {
        try {
            const data = await getRequest('api/user/skinnalysis/skinanalysisbydate');
            if (data && data.length > 0) {
                const sortedData = data.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
                setAnalysisData(sortedData);
                if (initialLoad) {
                    const latestDate = sortedData[sortedData.length - 1].createdAt;
                    setSelectedDate(latestDate);
                    setInitialLoad(false);
                }
            }
        } catch (error) {
            console.error("Failed to fetch analysis data", error);
        } finally {
            setLoading(false);
        }
    }, [initialLoad]);

    useFocusEffect(
        useCallback(() => {
            setLoading(true);
            fetchAnalysisData();
        }, [fetchAnalysisData])
    );

    const handleDatePress = (date) => {
        setSelectedDate(date);
    };

    const renderProgressItem = ({ item }) => (
        <ProgressComponent
            data={item}
            onPressOilness={() => handleSkinDetail(item?.descriptions?.oilness, item?.oilness, "oiliness")}
            onPressElastcity={() => handleSkinDetail(item?.descriptions?.elasticity, item?.elastcity, "elasticity")}
            onPress={() => handleSkinDetail(item?.descriptions?.hydration, item?.hydration, "hydration")}
        />
    );
    const handleSkinDetail = (item, values, title) => {
        navigation.navigate('SkinTypeScreen', {
            params: {
                item,
                values,
                title
            }
        });
    };

    return (
        loading ?
            <View style={styles.LoadingView}>
                <ActivityIndicator
                    color={Colors.light?.green}
                    size="small"
                    style={{ flex: 1 }}
                />
            </View> :
            (<ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.dateContainer}>
                    {analysisData.map((data, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[styles.dateBox, selectedDate === data.createdAt && styles.selectedDateBox]}
                            onPress={() => handleDatePress(data.createdAt)}
                        >
                            <Text style={[styles.dateText, selectedDate === data.createdAt && styles.selectedDateText]}>
                                {new Date(data.createdAt).getDate()}
                            </Text>
                            <Text style={[styles.dateLabel, selectedDate === data.createdAt && styles.selectedDateLabel]}>
                                {new Date(data.createdAt).toLocaleString('default', { month: 'short' }).toUpperCase()}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
                {selectedDate && (
                    <FlatList
                        data={analysisData.filter(data => data.createdAt === selectedDate)}
                        renderItem={renderProgressItem}
                        keyExtractor={(item, index) => index.toString()}
                        contentContainerStyle={styles.flatListContainer}
                    />
                )}
                <Text style={styles.overviewTitle}>Overview Of Your Skin</Text>
                {analysisData
                    .filter(data => new Date(data.createdAt).toDateString() === new Date(selectedDate).toDateString())
                    .map((data, index) => (
                      <Text key={index} style={styles.overviewText}>
                        {data?.mainDescription}
                      </Text>
                    ))}
               
            </ScrollView>)
    );
};


export default SkinAnalysis;
