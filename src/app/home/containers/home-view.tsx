import * as React from 'react';
import moment from 'moment';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import ActivityButton from '../../ui/components/ActivityButton';
import TimeCounter from '../components/TimeCounter';
import { GLOBAL_COLORS } from '@ui/const';
import { commonStyles, fontStyles } from '@ui';
import { useState } from 'react';

const HomeView = () => {
    const [lastDate, setLastDate] = useState<number>(0);

    const handleCurrentButton = () => {
        setLastDate(moment().unix());
    };

    return (
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView style={commonStyles.padding}>
                <Text style={[styles.headerText, commonStyles.space_2em]}>
                    When was the last time you
                    <Text style={fontStyles.highlighted}> pressed a button </Text>?
                </Text>
                <TimeCounter lastClicked={lastDate} />
                <View style={styles.buttonContainer}>
                    <ActivityButton
                        color={GLOBAL_COLORS.dodgerBlue}
                        onPress={handleCurrentButton}
                        title="Count from now"
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        alignSelf: 'center',
    },
    headerText: {
        alignItems: 'center',
        fontSize: 24,
        fontWeight: '600',
        justifyContent: 'center',
        marginVertical: '5%',
        textAlign: 'center',
    },
    mainContainer: {
        alignItems: 'center',
        flex: 1,
    },
});

export default HomeView;
