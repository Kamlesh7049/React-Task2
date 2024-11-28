import { Link,Outlet } from "react-router-dom"

const Layout=()=>{
    return(
        <>
        <div style={{backgroundColor:"blue" , width:"50%",height:"40px" }}> 

        <Link to="home"style={{padding:"5px", color:"white", textDecoration:"none",listStyleType:"none"}}> Home  || </Link>
        <Link to="about"style={{padding:"5px", color:"white", textDecoration:"none",listStyleType:"none"}}> About  || </Link>
        <Link to="blog"style={{padding:"5px", color:"white",textDecoration:"none",listStyleType:"none"}}>Blog pages ||</Link>
        <Link to="display"style={{padding:"5px", color:"white", textDecoration:"none",listStyleType:"none"}}> Display  || </Link>
        <Link to="insert"style={{padding:"5px", color:"white", textDecoration:"none",listStyleType:"none"}}> Insert || </Link>
        <Link to="counterapp" style={{padding:"5px", color:"white",textDecoration:"none",listStyleType:"none"}}>Counter App ||</Link>
        <Link to="themechng"style={{padding:"5px" ,color:"white",textDecoration:"none",listStyleType:"none"}}>Theme change App  || </Link>
    

        
        <Outlet/>
   
        </div>
        </>
      
    )
}
export default Layout;