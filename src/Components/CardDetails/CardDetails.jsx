import "./CardDetails.css";
import { useState, useEffect } from 'react';
import Navbar from "../Navbar/Navbar";
import instance from "../../api";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function CardDetails() {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    condition: '',
    price: '',
    image: '',
    description: '',
    subCategoryID: '',
  });

  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    const fetchSubCategories = async () => {
      try {
        const subCategoriesResponse = await instance.get('/api/subcategories')

        setSubCategories(subCategoriesResponse.data);
      } catch (error) {
        console.error('Error fetching data', error.message);
      }
    };

    fetchSubCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('condition', formData.condition);
    formDataToSend.append('price', formData.price);
    formDataToSend.append('image', formData.image);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('subCategoryID', formData.subCategoryID);
    try {
      const response = await instance.post('/api/products', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 200) {
        toast.success('Posting created successfully');
        setFormData({
          title: '',
          price: '',
          condition: '',
          image: '',
          description: '',
          subCategoryID: '',
        });
        document.getElementById('image').value = '';
      } else {
        toast.error('Failed to create posting');
      }
    } catch (error) {
      console.error('Error:', error.message);
      toast.error('Failed to create posting');
    }
  }


  return (
    

    <div className="carddetails-wrapper">
      <Navbar />
      <h3> Your place to sell your items with <b><i>Ease!</i></b></h3>
      <form className="accordion-main" onSubmit={handleSubmit}>

        <div className="accordion-field">
          <label htmlFor="title">Title<span className="required">*</span></label>
          <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />
        </div>

        <div className="accordion-field">
          <label htmlFor="condition">Condition<span className="required">*</span></label>
          <select id="condition" name="condition" value={formData.condition} onChange={handleChange} required>
            <option value="" disabled defaultValue>Select</option>
            <option value="New">New</option>
            <option value="Used - like new">Used - like new</option>
            <option value="Used - good">Used - good</option>
            <option value="Used - fair">Used - fair</option>
          </select>
        </div>

        <div className="accordion-field">
          <label htmlFor="price">Price<span className="required">*</span></label>
          <input type="text" id="price" name="price" value={formData.price} onChange={handleChange} required />
        </div>

        <div className="accordion-field">
          <label htmlFor="image">Image<span className="required">*</span></label>
          <input type="file" id="image" name="image" onChange={handleImageChange} required />
        </div>

        <div className="accordion-field">
          <label htmlFor="description">Description<span className="required">*</span></label>
          <textarea name="description" id="description" cols="30" rows="5" value={formData.description} onChange={handleChange}></textarea>
        </div>

        <div className="accordion-field">
          <label htmlFor="subCategoryID">Category<span className="required">*</span></label>
          <select id="subCategoryID" name="subCategoryID" value={formData.subCategoryID} onChange={handleChange} required>
            <option value="" disabled defaultValue>Select</option>
            {subCategories.map((subCategory) => (
              <option key={subCategory._id} value={subCategory._id}>
                {subCategory.name}
              </option>
            ))}
          </select>
        </div>

        <div className="accordion-field accordion-field-buttons">
          <button type="submit">Create</button>
        </div>

      </form>
    </div>
  );
}

export default CardDetails;