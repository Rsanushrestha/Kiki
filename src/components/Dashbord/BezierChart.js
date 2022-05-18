import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function* yLabel() {
  yield* ['0', '2', '4', '8', '10'];
}
const BezierChart = () => {
  const yLabelIterator = yLabel();
  return (
    <View style={styles.container}>
      {/* <Text style={{color: 'white'}}>BezierChart</Text> */}
      <View>
        <Text
          style={{
            color: 'white',
            marginTop: 10,
            fontSize: 20,
            paddingLeft: 15,
          }}>
          Ticket sales
        </Text>
        <LineChart
          data={{
            labels: ['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'],
            datasets: [
              {
                data: [2300, 7000, 3500, 3900, 1000, 0],
              },
            ],
          }}
          width={340} // from react-native
          height={250}
          //   yAxisLabel="$"
          yAxisSuffix="k"
          formatYLabel={() => yLabelIterator.next().value}
          //   yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: '#17253D',
            backgroundGradientFrom: '#17253D',
            backgroundGradientTo: '#17253D',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgb(225, 208, 4, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 50,
            },
            propsForDots: {
              r: '5',
              strokeWidth: '3',
              // stroke: '#fff',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#17253D',
    marginHorizontal: 10,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BezierChart;
