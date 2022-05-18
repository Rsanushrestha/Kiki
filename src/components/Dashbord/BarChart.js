import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  VictoryChart,
  VictoryGroup,
  VictoryBar,
  VictoryTheme,
  VictoryAxis,
  VictoryLegend,
} from 'victory-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const data = {
  Earylybird: [{x: '1', y: 98}],
  General: [{x: '1', y: 28}],
  VIP: [{x: '1', y: 65}],
};
const BarChart = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            color: 'white',
            marginTop: 15,
            fontSize: 20,
            paddingLeft: 15,
          }}>
          Ad campaigns
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 75,
            borderColor: '#919EAB29',
            borderWidth: 1,
            height: 35,
            borderRadius: 7,
            marginTop: 20,
          }}>
          <TouchableOpacity>
            <Text
              style={{
                color: 'white',
                marginTop: 6,
                fontSize: 16,
                width: 50,
                marginLeft: 15,
              }}>
              Value
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                color: 'white',
                top: 1.25,
                right: 1,
                fontSize: 16,
                borderRadius: 7,
                fontSize: 18,
                fontWeight: '900',
                paddingTop: 4,
                textAlign: 'center',
                height: 30,
                width: 35,
                backgroundColor: '#919EAB29',
              }}>
              %
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <VictoryChart
        width={350}
        // theme={VictoryTheme.material}
        // domainPadding={9}
        // labels={'white'}
        style={{
          parent: {
            border: '1px solid',
          },
        }}>
        <VictoryGroup offset={20}>
          {/* <VictoryAxis /> */}
          <VictoryBar
            data={data.Earylybird}
            barWidth={15}
            // width={windowWidth / 50}
            style={{
              data: {
                fill: '#E4CE00',
              },
            }}
          />
          <VictoryBar
            data={data.General}
            barWidth={15}
            // width={windowWidth / 50}
            style={{
              data: {
                fill: '#F756CF',
              },
            }}
          />
          <VictoryBar
            data={data.VIP}
            barWidth={15}
            // width={windowWidth / 5}
            style={{
              data: {
                fill: '#FD7728',
              },
            }}
          />
        </VictoryGroup>
        <VictoryLegend
          x={Dimensions.get('window').width / 2 - 110}
          y={Dimensions.get('window').height / 2 - 89}
          orientation="horizontal"
          gutter={15}
          data={[
            {
              name: 'Earylybird',

              symbol: {
                fill: '#E4CE00',
              },
              labels: {fill: 'white'},
            },
            {
              name: 'General',
              symbol: {
                fill: '#F756CF',
              },
              labels: {fill: 'white'},
            },
            {
              name: ' VIP',
              symbol: {
                fill: '#FD7728',
                // labels: {fill: 'white'},
              },
              labels: {fill: 'white'},
            },
          ]}
        />
      </VictoryChart>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#17253D',
    backgroundColor: 'skyblue',

    marginHorizontal: 10,
    borderRadius: 16,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default BarChart;
