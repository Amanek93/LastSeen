import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, Text } from 'react-native';

import { GLOBAL_COLORS } from '@ui/const';
import { commonStyles } from '@ui';

interface Props {}

const HomeView = ({}: Props) => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView style={commonStyles.padding}>
                <Text style={styles.headerText}>test</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    headerText: {
        alignItems: 'center',
        fontSize: 24,
        fontWeight: '300',
        justifyContent: 'center',
        marginVertical: 60,
        textAlign: 'center',
    },
    mainContainer: {
        alignItems: 'center',
        flex: 1,
    },
});

export default HomeView;
