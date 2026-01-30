import { UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, Flex } from 'antd';
import { useRouter } from 'next/navigation';

const items = [
    {
        key: '0',
        label: 'profile',
    },
    {
        key: '2',
        label: 'profile',
    },
    {
        key: '3',
        label: 'profile',
    }
]

export default function Account() {
    const router = useRouter();
    return(
        <Flex  justify={"center"} align="center" style={{ width: "200px" }}>
            <UserOutlined style={{ fontSize: "30px", marginRight: "8px", color:"royalblue" }}/>
            <Flex vertical>
            <Button type="link" style = {{padding:0,color:"royalblue"}} 
            onClick={() => router.push('/auth')}
            >Log In/Sign up</Button>
            <Dropdown menu={{ items }}>
                <Button type="text" style = {{padding:0,fontSize: "14px"}}>Account</Button>
            </Dropdown>
            </Flex>
        </Flex>

    )
}


