import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';

const CardTest = () => {

  const PINK = '#5bb3ff';
const BLUE = '#0d6efd';

function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <button
      type="button"
      style={{ backgroundColor: isCurrentEventKey ? PINK : BLUE }}
      onClick={decoratedOnClick}
      className="accordion-button-style"
    >
      {children}
    </button>
  );
}

  return (
    <>
      <div className="carddetails-wrapper">
      <Navbar />
      <ToastContainer />
      <Accordion>
        <Card className="accordion-card">
          <Card.Header>
            <ContextAwareToggle eventKey="0">Create a New Posting</ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
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
                  <button >Cancel</button>
                </div>

              </form>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
    </>
  );
}
 
export default CardTest;