
import { UnorderedListOutlined ,UserOutlined,BarChartOutlined,ShoppingOutlined} from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
const items = [
  {
    label: 'Analytics',
    key: 'analytics',
    icon: <BarChartOutlined />,
  },
  {
    label: 'Users',
    key: 'users',
    icon: <UserOutlined />,
  },
  {
    label:'Products',
    key:'products',
    icon:<ShoppingOutlined />
  },

  
  

];

const Nav = (props) => {
  const [current, setCurrent] = useState('analytics');

  const onClick = (e) => {
    console.log('click ', e.key);
    setCurrent(e.key);
  props.pin(e.key)    
    // console.log(current)
  };

  return(
  <div>
    <Menu onClick={onClick} style={{width:'100%',height:'100%'}} selectedKeys={[current]} mode="vertical" items={items} />
  {/* <hr style={{widht:300}}></hr> */}
  {/* <Menu onClick={onClick} style={{width:300}} selectedKeys={[current]} mode="vertical" items={items2}/> */}
  </div>
  ) ;
};

export default Nav;
