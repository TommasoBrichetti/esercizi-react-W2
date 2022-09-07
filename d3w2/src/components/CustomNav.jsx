import {  Nav, Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';

const CustomNav = () => {
    
        return (
            <Navbar collapseOnSelect expand="md" bg="#221f1f" variant="dark" className="mb-3">
                <Link to='/'><Navbar.Brand href="#home"><img src="./logo.png" alt="logo" width={90}/></Navbar.Brand></Link>
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">TV Shows</Nav.Link>
                        <Nav.Link href="#features">Movies</Nav.Link>
                        <Nav.Link href="#features">Recently Added</Nav.Link>
                        <Nav.Link href="#features">My List</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets"><svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.5 25C20.299 25 25 20.299 25 14.5C25 8.70101 20.299 4 14.5 4C8.70101 4 4 8.70101 4 14.5C4 20.299 8.70101 25 14.5 25Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M21.925 21.925L28 28" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                        </svg></Nav.Link>
                        <Nav.Link href="#deets">KIDS</Nav.Link>
                        <Nav.Link href="#deets"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.25 13.7422C16.7891 12.9453 16.2344 11.4297 16.2344 8.75V8.19531C16.2344 4.73438 13.461 1.89844 10.0469 1.875H10C9.18028 1.87603 8.36878 2.0385 7.61183 2.35315C6.85489 2.66779 6.16733 3.12845 5.58841 3.70882C5.0095 4.28918 4.55056 4.97789 4.23781 5.73562C3.92506 6.49335 3.76462 7.30526 3.76564 8.125V8.75C3.76564 11.4297 3.21096 12.9453 2.75002 13.7422C2.63854 13.9321 2.57921 14.1481 2.57802 14.3683C2.57683 14.5885 2.63383 14.8051 2.74325 14.9961C2.85267 15.1872 3.01063 15.346 3.20114 15.4565C3.39165 15.5669 3.60795 15.625 3.82814 15.625H6.87502C6.87502 16.4538 7.20426 17.2487 7.79031 17.8347C8.37636 18.4208 9.17122 18.75 10 18.75C10.8288 18.75 11.6237 18.4208 12.2097 17.8347C12.7958 17.2487 13.125 16.4538 13.125 15.625H16.1719C16.3921 15.6264 16.6086 15.5693 16.7994 15.4594C16.9903 15.3496 17.1484 15.1911 17.2578 15C17.3663 14.8079 17.4226 14.5907 17.4212 14.3701C17.4199 14.1494 17.3608 13.933 17.25 13.7422V13.7422ZM10 17.5C9.50337 17.4979 9.02765 17.2997 8.67647 16.9486C8.32528 16.5974 8.12708 16.1216 8.12502 15.625H11.875C11.873 16.1216 11.6748 16.5974 11.3236 16.9486C10.9724 17.2997 10.4967 17.4979 10 17.5Z" fill="white" />
                        </svg></Nav.Link>
                        <Nav.Link href="#deets"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.1172 16.5625C16.951 14.5535 15.0843 13.0457 12.875 12.3281C13.934 11.6984 14.7569 10.7384 15.2174 9.59565C15.6779 8.45288 15.7504 7.19053 15.4239 6.00253C15.0973 4.81454 14.3898 3.76661 13.4099 3.01973C12.43 2.27286 11.2321 1.86835 10 1.86835C8.76796 1.86835 7.56998 2.27286 6.59012 3.01973C5.61025 3.76661 4.9027 4.81454 4.57617 6.00253C4.24963 7.19053 4.32217 8.45288 4.78264 9.59565C5.24311 10.7384 6.06604 11.6984 7.12501 12.3281C4.91571 13.0457 3.04903 14.5535 1.88283 16.5625C1.82557 16.6567 1.79529 16.7648 1.79529 16.875C1.79529 16.9852 1.82557 17.0933 1.88283 17.1875C1.93625 17.2833 2.01452 17.3629 2.1094 17.4179C2.20427 17.4729 2.31223 17.5012 2.42189 17.5H17.5781C17.6878 17.5012 17.7958 17.4729 17.8906 17.4179C17.9855 17.3629 18.0638 17.2833 18.1172 17.1875C18.1745 17.0933 18.2047 16.9852 18.2047 16.875C18.2047 16.7648 18.1745 16.6567 18.1172 16.5625V16.5625Z" fill="white" />
                        </svg>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    
}


export default CustomNav;