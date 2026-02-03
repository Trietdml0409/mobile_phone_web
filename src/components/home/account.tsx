import { UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, Flex } from 'antd';
import { useRouter } from 'next/navigation';

const items = [
    {
        key: '0',
        label: 'LDMT0406',
    },
    {
        key: '2',
        label: 'Tim2225',
    },
    {
        key: '3',
        label: 'Arg219',
    }
]

export default function Account() {
    const router = useRouter();
    return(
        <Flex  justify={"center"} align="center" style={{ width: "100%", height:"100%" }}>
            <UserOutlined style={{ fontSize: "200%", marginRight: "4%", color:"royalblue" }}/>
            <Flex vertical gap={0} justify={"center"} style={{ height: "100%",fontSize:"100%",color:"royalblue"}}>
                <Button type="link" style = {{padding:0,color:"royalblue",fontSize: "100%"}} 
                onClick={() => router.push('/auth')}
                >Log In/Sign up</Button>

                <Dropdown menu={{ items }}>
                    <Button type="text" style = {{padding:0,fontSize: "100%"}}>Account</Button>
                </Dropdown>
            </Flex>
        </Flex>
    )
}


