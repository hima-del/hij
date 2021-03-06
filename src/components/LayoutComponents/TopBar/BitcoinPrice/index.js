import React from 'react'
// import { Menu, Dropdown } from 'antd'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import styles from './style.module.scss'

class BitcoinPrice extends React.Component {
  render() {
    // const menu = (
    //   <Menu selectable={false}>
    // {
      /* <Menu.Item>
          <Link to="/">Current search</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/">Search for issues</Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.ItemGroup title="Opened">
          <Menu.Item>
            <Link to="/">
              <i className={`${styles.menuIcon} icmn-checkmark`} />
              CLNUI-253 Project implemen...
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/">
              <i className={`${styles.menuIcon} icmn-checkmark`} />
              CLNUI-234 Active history iss...
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/">
              <i className={`${styles.menuIcon} icmn-clock`} />
              CLNUI-424 Ionicons intergrat...
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/">More...</Link>
          </Menu.Item>
        </Menu.ItemGroup>
        <Menu.Divider />
        <Menu.ItemGroup title="Filters">
          <Menu.Item>
            <Link to="/">My open issues</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/">Reported by me</Link>
          </Menu.Item>
        </Menu.ItemGroup>
        <Menu.Divider />
        <Menu.Item>
          <Link to="/">
            <i className={`${styles.menuIcon} icmn-cog`} /> Settings
          </Link>
        </Menu.Item> */
    // }
    //   </Menu>
    // )
    return (
      // <Dropdown overlay={menu} trigger={['click']} placement="bottomLeft">
      <div className={styles.dropdown}>
        <i className={`${styles.icon} fa fa-tasks`} />
        <span className="d-none d-xl-inline">
          <strong>
            <Link to="/dashboard/ProgramView">
              <FormattedMessage id="topBar.bitcoin" />
            </Link>
          </strong>
        </span>
      </div>
      // </Dropdown>
    )
  }
}

//   state = {
//     chartsData: [5, 3, 9, 6, 5, 9, 7, 3, 5, 2],
//   }

//   render() {
//     const { chartsData } = this.state
//     return (
//       <div className={style.bitcoinPrice}>
//         <FormattedMessage id="topBar.bitcoin" />:
//         <span style={{ margin: '0 8px', position: 'relative', top: '3px' }}>
//           <Line values={chartsData} />
//         </span>
//         +20%
//       </div>
//     )
//   }
// }

export default BitcoinPrice
