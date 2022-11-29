import Button from "react-bootstrap/Button";

const ContactForm = () => (
  <main className="bg3">
    <div className="container connect-wrapper">
      <div className="row">
        <div className="line"></div>
      </div>
      <div className="row">
          <div className="col">
            <form>
              <div className="form-group row">
                  <label htmlFor="inputName" className="col-sm-4 form-control-label text-md-right">Name</label>
                  <div className="col-sm-8">
                      <input type="text" className="form-control" id="inputName" placeholder="Name"/>
                  </div>
              </div>
              <div className="form-group row">
                  <label htmlFor="inputEmail" className="col-sm-4 form-control-label text-md-right">Email</label>
                  <div className="col-sm-8">
                      <input type="email" className="form-control" id="inputEmail" placeholder="Email"/>
                  </div>
              </div>
              <div className="form-group row">
                  <label htmlFor="inputMessage"
                      className="col-sm-4 form-control-label text-md-right">Message</label>
                  <div className="col-sm-8">
                      <textarea className="form-control" placeholder="Write me a message" rows="5" id="comment"></textarea>
                  </div>
              </div>
              <div className="col-md-9 form-control-button text-md-right"> 
              <Button type="submit" style={{backgroundColor: "#7c5a9d", border: "none"}}>Submit</Button>
              </div>
            </form>
          </div> 
        </div> 
      
        </div>
    
  </main>
);

export default ContactForm;