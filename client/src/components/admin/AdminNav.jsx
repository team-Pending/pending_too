// import React from "react"; //6.9k (gzipped: 2.7k)
// import { Container, Row } from "reactstrap";

// // import { useAuth } from "../custom-hooks/useAuth"
// import { NavLink } from "react-router-dom";
// import "../admin/admin.css";

// const admin__nav = [
//     {
//         display: 'Dashboard',
//         path: '/dashboard'
//     },
//     {
//         display: 'All-Products',
//         path: '/dashboard/all-products'
//     },
//     {
//         display: 'Orders',
//         path: '/dashboard/orders'
//     },
//     {
//         display: 'Users',
//         path: '/dashboard/users'
//     },
// ]
// function AdminNav () {
//     // const { hasAccess } = useAuth();
//     // const { currentUser } = useAuth();

//     if (!hasAccess('admin')) {
//         return <div>
//             You do not have permission to access this page.
//         </div>;
//     }

//     return (
//         <>
//             <header className="admin__header">
//                 <div className="admin__nav-top">
//                     <Container>
//                         <div className="admin__nav-wrapper-top">
//                             <div className="logo">
//                                 Admin Page
//                             </div>
//                             <div className="search__box">
//                                 <input type="text" placeholder="Search...." />
//                                 <span><i class="re-search-line"></i></span>
//                             </div>
//                             <div className="admin__nav-top-right">
//                                 <span><i class="ri-settings-2-line"></i></span>
//                                 {/* <img src={ currentUser && currentUser.photoURL} alt="" /> */}
//                             </div>
//                         </div>
//                     </Container>
//                 </div>
//             </header>

//             <section className="admin__menu p-0">
//                 <Container>
//                     <Row>
//                         <div className="admin__navigation">
//                             <ul className="admin__menu-list">
//                                 {
//                                     admin__nav.map((item, index) => (
//                                         <li className="admin__menu-item" key={index}>
//                                             <NavLink to={item.path} className={navClass => navClass.isActive ? "active__admin-menu" : ""} >{item.display}</NavLink>
//                                         </li>
//                                     ))
//                                 }
//                             </ul>
//                         </div>
//                     </Row>
//                 </Container>
//             </section>
//         </>
//     );
// };

// export default AdminNav;