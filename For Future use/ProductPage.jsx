import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom"
import { Card, CardHeader, CardBody, CardFooter ,Image , Stack, Heading, Text , Divider , ButtonGroup, Button } from '@chakra-ui/react'
import axios from 'axios';
import DefaultNavbar from "../../Main/Header";
import DefaultFooter from "../../Main/Footer";
function getData() {
    return axios.get(`http://localhost:3004/products?_limit=200`)
}

function Product() {
    // on component mount make a upi call get the data & display the data.
    // as soon as someone clicks on the card u move to a new page where u will get more data.
    const [loading, setLoading] = React.useState(false);
    const [data, setData] = React.useState([]);
    const [error, setError] = React.useState(false);
    // const isAuth = true;
    //  const nav = useNavigate();


    const fetchHandleData = () => {
        setLoading(true);
        getData()
            .then((res) => { setLoading(false); setData(res) })
            .catch((err) => { setLoading(false); setError(true) })
    }

    React.useEffect(() => {
        fetchHandleData();
    }, [])

    // if (!isAuth) {
    //     return <Navigate to="/" />
    // }


    console.log(data.data);


    return (
        loading ? <h1>Ruko Jara Sabar Karo</h1> : error ? <h1>Ruka Bhai Phr ja aur check kara sb</h1> : <div>
            <div>
                {/* <button onClick={()=>nav("/")}>Go to home page</button> */}
                <DefaultNavbar />
            </div>
            <div>
                <h1>LIST OF USERS</h1>
            </div>
           {/* */}  {data.data.map((item) => (
                <Card maxW='sm'>
                    <CardBody>
                        <Image
                            src={item.image_link}
                            alt={item.name}
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>Living room Sofa</Heading>
                            <Text>
                                {item.description}
                            </Text>
                            <Text color='blue.600' fontSize='2xl'>
                               {item.price}
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            <Button variant='solid' colorScheme='blue'>
                                Buy now
                            </Button>
                            <Button variant='ghost' colorScheme='blue'>
                                Add to cart
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}
export default Product;