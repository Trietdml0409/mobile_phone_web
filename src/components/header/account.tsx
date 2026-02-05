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
            <UserOutlined style={{ fontSize: "20px", marginRight: "4%", color:"royalblue" }}/>
            <div>
                <p type="link" style = {{color:"royalblue",fontSize: "12px"}} 
                onClick={() => router.push('/auth')}
                >Log In/Sign up</p>
                <Dropdown menu={{ items }}>
                    <p type="text" style = {{fontSize: "12px"}}>Account</p>
                </Dropdown>
            </div>
        </Flex>
    )
}


