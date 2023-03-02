import React, { useState } from "react"; //6.9k (gzipped: 2.7k)
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { toast } from "react-toastify";

const AddProducts = () => {

    const [enterTitle, setEnterTitle] = useState("")
    const [enterShortDesc, setEnterShortDesc] = useState("")
    const [enterDescription, setEnterDescription] = useState("")
    const [enterCategory, setEnterCategory] = useState("")
    const [enterPrice, setEnterPrice] = useState("")
    const [enterProductImage, setEnterProductImage] = useState("")
    cosnt [loading, setLoading] = useState(false)

    const addProduct = async (e) => {
        e.preventDefault()

        const product = {
            title: enterTitle,
            shortDesc: enterShortDesc,
            description: enterDescription,
            category: enterCategory,
            price: enterPrice,
            imgUrl: enterProductImage
        };

        toast.success("product successfully added!")

        console.log(product);
    };

    return <section>
        <Container>
            <Row>
                <Col lg='12'>
                    <h4>Add Product</h4>
                    <Form onSubmit={addProduct}>
                        <FormGroup className="form__group">
                            <span>Title</span>
                            <input type="text" placeholder="Artwork Title" value={enterTitle} onChange={e => setEnterTitle(e.target.value)} required />
                        </FormGroup>
                        <FormGroup className="form__group">
                            <span>Short Description</span>
                            <input type="text" placeholder="Brief description" value={enterShortDesc} onChange={e => setEnterShortDesc(e.target.value)} required />
                        </FormGroup>
                        <FormGroup className="form__group">
                            <span>Description</span>
                            <input type="text" placeholder="Tell us about it..." value={enterDescription} onChange={e => setEnterDescription(e.target.value)} required />
                        </FormGroup>
                        <div>
                            <FormGroup className="form__group">
                                <span>Price</span>
                                <input type="number" placeholder="$5.99" value={enterPrice} onChange={e => setEnterPrice(e.target.value)} required />
                            </FormGroup>
                            <FormGroup className="form__group">
                                <span>Category</span>
                                <select className="w-100 p2" value={enterCategory} onChange={e => setEnterCategory(e.target.value)} required>
                                    
                                    <option>Select Category</option>
                                    <option value="music">Music</option>
                                    <option value="illustration">Illustration</option>
                                </select>
                            </FormGroup>
                        </div>
                        <div>
                            <FormGroup className="form__group">
                                <span>Product Image</span>
                                <input type="file" onChange={e => setEnterProductImage(e.target.files[0])} required />
                            </FormGroup>
                        </div>
                        <button className="buy__btn" type="submit">Add Item</button>
                    </Form>
                </Col>
            </Row>
        </Container>
    </section>
};

export default AddProducts;