import Header from "@/components/header";
import { Button, Flex } from "antd";
import { Card } from 'antd';


export default function ProductDetails() {
  return (
    <div style = {{height: "750px",backgroundColor:"white"}}>
      <Header />
      <Flex vertical style = {{padding:"15px"}} >
        <p style = {{color: "black", fontSize:"30px",fontWeight:"bold"}}>PC GAMING (81 PRODUCTS)</p>
      </Flex>

      <Flex vertical gap = "10px" style = {{padding:"15px"}}>
        <p style = {{color: "black", fontSize:"15px",fontWeight:"bold"}}>Find out more:</p>
        <Flex gap="small">
          <Button>OFFICE PC</Button>
          <Button>MINI PC</Button>
        </Flex>
        <Flex wrap gap="small" align="center">
          <p style = {{color: "black", fontSize:"15px",fontWeight:"bold"}}>Sorted By:</p>
          <Button>Price: Increase</Button>
          <Button>Price: Decrease</Button>
          <Button>Name: From A-Z</Button>
          <Button>Name: From Z-A</Button>
          <Button>Newest</Button>
          <Button>Oldest</Button>
          <Button>Best seller</Button>
        </Flex>

        <Flex wrap >

          <Flex align="center" justify="start" style={{height:"300px", width:"200px",border:"1px solid black",borderRadius:"10%"}} vertical>
            <img style = {{height:"250px",width:"200px",borderRadius:"15%"}} src="https://file.hstatic.net/200000722513/file/7-gearvn-pc-gvn-intel-i3-3050-t8.png"/>
            <p style = {{color: "black", fontSize:"15px",fontWeight:"bold"}}>PC RTX 3050 2023</p>

          </Flex>
          
          <Flex align="center" justify="start" style={{height:"300px", width:"200px",border:"1px solid black",borderRadius:"10%"}} vertical>
            <img style = {{height:"250px",width:"200px",borderRadius:"15%"}} src="https://file.hstatic.net/200000722513/file/7-gearvn-pc-gvn-intel-i3-3050-t8.png"/>
            <p style = {{color: "black", fontSize:"15px",fontWeight:"bold"}}>PC RTX 3050 2023</p>

          </Flex>

          
          <Flex align="center" justify="start" style={{height:"300px", width:"200px",border:"1px solid black",borderRadius:"10%"}} vertical>
            <img style = {{height:"250px",width:"200px",borderRadius:"15%"}} src="https://file.hstatic.net/200000722513/file/7-gearvn-pc-gvn-intel-i3-3050-t8.png"/>
            <p style = {{color: "black", fontSize:"15px",fontWeight:"bold"}}>PC RTX 3050 2023</p>

          </Flex>
          
          <Flex align="center" justify="start" style={{height:"300px", width:"200px",border:"1px solid black",borderRadius:"10%"}} vertical>
            <img style = {{height:"250px",width:"200px",borderRadius:"15%"}} src="https://file.hstatic.net/200000722513/file/7-gearvn-pc-gvn-intel-i3-3050-t8.png"/>
            <p style = {{color: "black", fontSize:"15px",fontWeight:"bold"}}>PC RTX 3050 2023</p>

          </Flex>
          
          <Flex align="center" justify="start" style={{height:"300px", width:"200px",border:"1px solid black",borderRadius:"10%"}} vertical>
            <img style = {{height:"250px",width:"200px",borderRadius:"15%"}} src="https://file.hstatic.net/200000722513/file/7-gearvn-pc-gvn-intel-i3-3050-t8.png"/>
            <p style = {{color: "black", fontSize:"15px",fontWeight:"bold"}}>PC RTX 3050 2023</p>

          </Flex>

          
          <Flex align="center" justify="start" style={{height:"300px", width:"200px",border:"1px solid black",borderRadius:"10%"}} vertical>
            <img style = {{height:"250px",width:"200px",borderRadius:"15%"}} src="https://file.hstatic.net/200000722513/file/7-gearvn-pc-gvn-intel-i3-3050-t8.png"/>
            <p style = {{color: "black", fontSize:"15px",fontWeight:"bold"}}>PC RTX 3050 2023</p>

          </Flex>
          
          <Flex align="center" justify="start" style={{height:"300px", width:"200px",border:"1px solid black",borderRadius:"10%"}} vertical>
            <img style = {{height:"250px",width:"200px",borderRadius:"15%"}} src="https://file.hstatic.net/200000722513/file/7-gearvn-pc-gvn-intel-i3-3050-t8.png"/>
            <p style = {{color: "black", fontSize:"15px",fontWeight:"bold"}}>PC RTX 3050 2023</p>

          </Flex>

        </Flex>
        

        


      </Flex>

    </div>
  );
}