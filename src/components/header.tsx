

export default function Header() {
  return (



    <div className = "header"
      style = {{
        backgroundColor: "white",
        height: "64px",
        display: "flex",

      }}>
        <div
        style = {{
            flex: "1",
            display: "flex",
            justifyContent: "center",
        }}>
            <img style = {{ width:"90px"}}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWQSpo-QHOmMpJ1go7HJjuPedQf4YP-BppRQ&s"/>
        </div>
        <div
        style = {{
            border: "1px black solid",
            flex: "1"
        }}>

        </div>
        <div
        style = {{
            border: "1px black solid",
            flex: "3"
        }}>

        </div>
        <div
        style = {{
            border: "1px black solid",
            flex: "1"
        }}>

        </div>
        <div
        style = {{
            border: "1px black solid",
            flex: "1"
        }}>

        </div>

      </div>
  );
}