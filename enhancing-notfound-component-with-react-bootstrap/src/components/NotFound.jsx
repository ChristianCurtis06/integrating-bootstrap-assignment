// Task 1: Integrate React-Bootstrap
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

const NotFound = () => {
    return (
// Task 2: Apply a Color Scheme

        <Container fluid className='d-flex flex-column justify-content-center p-0 text-center border border-5 border-white' style={{height: '100vh', boxSizing: 'border-box', backgroundColor: 'lightcoral', color: 'white'}}>
{/* Task 3: Structure Content with Grid */}
            <Container className='h-75'>
                <Row className='h-100'>
                    <Col xs={12} md={6} className='p-0'>
                        <Image src='./src/assets/error.jpg' className='img-fluid w-100 h-100 rounded' style={{objectFit: 'cover'}} alt='Error image' />
                    </Col>
                    <Col xs={12} md={6} className='d-flex flex-column justify-content-center p-3'>
                        <h1 className='mb-3'>404 - Page Not Found</h1>
                        <p>Sorry, the page you are looking for does not exist.</p>
                        <Nav.Link href='/'>
                            <Button variant='primary' className='mt-2 shadow-lg w-100' onClick={() => NavLink}>Return to Home</Button>
                        </Nav.Link>
                    </Col>
{/* Task 4: Add an Engaging Image */}
{/* Task 5: Enhance Navigation with NavLink */}
                </Row>
            </Container>
        </Container>
    );
};

export default NotFound;