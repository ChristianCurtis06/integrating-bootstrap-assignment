// Task 1: Integrating React-Bootstrap and Adding Buttons
import { Button, Image, Card, CardGroup } from 'react-bootstrap';

const HomePage = () => {
    return (
        /* Task 2: Applying Color Scheme */
        <div className='fluid-container text-center border border-5 border-white' style={{boxSizing: 'border-box', backgroundColor: 'lightcoral', color: 'white'}}>
            {/* Task 4: Adding a Responsive Image to HomePage */}
            <Image src='./src/assets/welcome-image.jpg' className='img-fluid w-100' style={{height: '30vh', objectFit: 'cover'}} alt='Welcome image' />
            <div className='container d-flex flex-column'>
                <h1 className='mt-5 mb-4'>Welcome to our store!</h1>
                <Button variant='primary' className='shadow-lg w-100'>Shop Now</Button>
                {/* Task 3: Enhancing UI with Borders, Shadows, and Cards */}
                <h2 className='mt-5 mb-3'>Products</h2>
                <CardGroup className='mb-4'>
                    <Card>
                        <Card.Img variant='top' style={{height: '20vh', objectFit: 'cover'}} src='./src/assets/product.jpg' />
                        <Card.Body className='bg-light text-black'>
                            <Card.Title>Product 1</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Card.Text>
                            <Button variant='primary' className='w-100'>View Product</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant='top' style={{height: '20vh', objectFit: 'cover'}} src='./src/assets/product.jpg' />
                        <Card.Body className='bg-light text-black'>
                            <Card.Title>Product 2</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Card.Text>
                            <Button variant='primary' className='w-100'>View Product</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant='top' style={{height: '20vh', objectFit: 'cover'}} src='./src/assets/product.jpg' />
                        <Card.Body className='bg-light text-black'>
                            <Card.Title>Product 3</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Card.Text>
                            <Button variant='primary' className='w-100'>View Product</Button>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
        </div>
    );
};

export default HomePage;