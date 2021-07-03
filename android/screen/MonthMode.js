import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
// import Header from './header';




export default class MonthMode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: '',
      text: '',
      year: '',
      tableHead: ['日', '一', '二', '三', '四', '五', '六'],
      tableData: [
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
      ]
    }
  }
  leapcommon(x) {            //判斷閏平年
    let LC = 0;
    if ((x % 4 == 0) && (x % 100 != 0)) {
      LC = 1;
      return LC;  //閏年
    } else if ((x % 400) == 0) {
      LC = 1;
      return LC;  //閏年
    } else {
      return LC;  //平年
    }
  }


  Howmanyleap(year) {      //有幾個閏年 
    let n = 0;
    for (let i = 1921; i < year + 1; i++) {
      if (this.leapcommon(i) == 1) {
        n++;
      }
    }
    return n;
  }
  monthdays(month) {        //一個月有幾天
    let days;
    let Year = Number(this.state.year);
    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
      days = 31;
      return days;
    }
    else if (month == 2 && this.leapcommon(Year) == 1) {
      days = 29;
      return days;
    }
    else if (month == 2 && this.leapcommon(Year) == 0) {
      days = 28;
      return days;
    }
    else {
      days = 30;
      return days;
    }
  }


  FirstDayWeek(year, month) {    //第一天是星期幾
    let n;
    if (month == 3 || month == 11) {
      n = 1;
    }
    else if (month == 6) {
      n = 2;
    }
    else if (month == 9 || month == 12) {
      n = 3;
    }
    else if (month == 4 || month == 7 || month == 1) {
      n = 4;
    }
    else if (month == 10) {
      n = 5;
    }
    else if (month == 5) {
      n = 6;
    }
    else if (month == 2 || month == 8) {
      n = 0;
    }
    let a = (year - 1920) + this.Howmanyleap(year)
    let b = a % 7
    let week = (n + b) % 7
    if ((month == 1 || month == 2) && (this.leapcommon(year) != 1)) {
      return (week + 1) % 7
    }
    else {
      return week
    }
  }

  clear() {
    let dataA = this.state.tableData;
    let row1 = 0
    let col1 = 0
    for (let cle = 0; cle < 42; cle++) {
      dataA[row1][col1] = '';
      col1 += 1;
      if (col1 % 7 == 0) {
        col1 = 0;
        row1 += 1
      }
    }
    this.setState({
      tableData: dataA
    })
  }

  logic() {
    let data = this.state.tableData;
    let Month = Number(this.state.month);
    let Year = Number(this.state.year);
    let row = 0
    let col = this.FirstDayWeek(Year, Month)
    this.clear()
    for (let count = 1; count < this.monthdays(Month) + 1; count++) {
      // let Count=count.toString
      data[row][col] = String(count)
      col += 1;
      if ((col % 7 == 0)) {
        row += 1
        col = 0;
      }
    }
    // data[0][0]='1';
    this.setState({
      tableData: data
    })
  }

  render() {
    const state = this.state;
    let month = state.month;
    let year = state.year;
    return (
      // <View style={styles.container}>
      //     <Text style={styles.text}>YearMode Screen</Text>
      // </View>
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
      }}>
        <View style={styles.container}>
          {/* <Header/> */}
          <View style={styles.ouput}>
            {/* <Text style={styles.title}>
                      月曆模式
                    </Text> */}
            <Text style={styles.word}>
              年份
                    </Text>
            <TextInput
              keyboardType='numeric'
              style={styles.input}
              placeholder='e.g 1920'
              onChangeText={(year) => this.setState({ year })}
            ></TextInput>

            <Text style={styles.word}>
              月份
                    </Text>
            <TextInput
              keyboardType='numeric'
              style={styles.input}
              placeholder='e.g 1'
              onChangeText={(month) => this.setState({ month })}
            ></TextInput>
          </View>
          <View style={styles.ouput}>
            <Button
              title="輸出"
              color="#000000"
              onPress={() => this.logic()}
              style={styles.button}>
            </Button>
            <Text style={styles.smalltitle}>
              {year + '年' + '\b\b' + month + '月'}
            </Text>
          </View>
          <View style={styles.ouput}>
            <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
              <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
              <Rows data={state.tableData} textStyle={styles.text} />
            </Table>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  // container: {
  //     paddingVertical: 32,
  // },
  // text: {
  //     textAlign: 'center'
  // },
  container: { backgroundColor: 'pink', flex: 1 },
  head: { height: 30, backgroundColor: '#f1f8ff' },
  text: { margin: 6, textAlign: 'center' },
  input: {
    paddingTop: 0,
    backgroundColor: '#fff',
    borderColor: '#777',
    borderBottomWidth: 2,
    padding: 8,
    margin: 5,
  },
  title: {
    // backgroundColor: 'yellow',
    textAlign: 'center',
    // marginVertical: 16,
    fontSize: 20,
  },
  button: {
    paddingBottom: 8,
  },
  word: {
    // backgroundColor:'green',
    fontSize: 12,
    paddingLeft: 20,
  },
  ouput: {
    padding: 8,
  },
  smalltitle: {
    paddingTop: 8,
    textAlign: 'center',
    fontSize: 20,
  }

})