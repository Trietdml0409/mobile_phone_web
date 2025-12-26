import { ShoppingCartOutlined } from '@ant-design/icons';
import { Button, Flex, } from 'antd';

export default function Cart() {
    return(
        <Flex >
            <ShoppingCartOutlined style = {{fontSize:"25px", color: "black"}}/>
            <Button type="text" style = {{fontSize:"16px"}}>Cart</Button>
        </Flex>
    )
}

