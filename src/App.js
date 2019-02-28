import React, { Component } from 'react';
import { Transfer, Switch } from 'antd';
import "antd/dist/antd.css"
import styles from "./App.module.css"
import {tranformUrl} from "./base";

const mockData = [];
for (let i = 0; i < 20; i++) {
    mockData.push({
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        disabled: i % 3 < 1,
    });
}

const oriTargetKeys = mockData
    .filter(item => +item.key % 3 > 1)
    .map(item => item.key);


class App extends Component {
    state = {
        targetKeys: oriTargetKeys,
        selectedKeys: [],
        disabled: false,
    }

    handleChange = (nextTargetKeys, direction, moveKeys) => {
        this.setState({ targetKeys: nextTargetKeys });

        console.log('targetKeys: ', nextTargetKeys);
        console.log('direction: ', direction);
        console.log('moveKeys: ', moveKeys);
    }

    handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
        this.setState({ selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys] });

        console.log('sourceSelectedKeys: ', sourceSelectedKeys);
        console.log('targetSelectedKeys: ', targetSelectedKeys);
    }

    handleScroll = (direction, e) => {
        console.log('direction:', direction);
        console.log('target:', e.target);
    }

    handleDisable = (disabled) => {
        this.setState({ disabled });
    };
  render() {
    console.log(styles);
      const { targetKeys, selectedKeys, disabled } = this.state;
      return (
          <div className={styles.ear}>
              <Transfer
                  dataSource={mockData}
                  titles={['Source', 'Target']}
                  targetKeys={targetKeys}
                  selectedKeys={selectedKeys}
                  onChange={this.handleChange}
                  onSelectChange={this.handleSelectChange}
                  onScroll={this.handleScroll}
                  render={item => item.title}
                  disabled={disabled}
              />
            <div className={styles.app}>
                <Switch
                    unCheckedChildren="disabled"
                    checkedChildren="disabled"
                    checked={disabled}
                    onChange={this.handleDisable}
                    style={{ marginTop: 16 }}
                />
            </div>
              <img src={tranformUrl("17S4LSB")} alt="" style={{width:"100px",height:"100px",border:"1px solid red"}}/>
          </div>
      );
  }

}



export default App;
