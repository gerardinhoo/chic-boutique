import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';


const Navigation = () => {
   return (
     <Fragment>
        <div className='navigation'>
         <Link className="logo-container" to="/">
           <div>Logo</div>
         </Link>
         <Link className="logo-container" to="/shop">
           <div>SHOP</div>
         </Link>
         {/* <h1>I am the navigation bar</h1> */}
       </div>
       <Outlet />
     </Fragment>
    
   )
 }

 
export default Navigation;