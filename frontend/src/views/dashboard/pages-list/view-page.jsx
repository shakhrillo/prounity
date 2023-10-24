import { Link } from "react-router-dom";
import Layout from "../../../layout/layout";

const ViewPage = () => {
  return (
    <Layout>
      <div className="h-100 d-flex justify-content-center align-items-center">
        <div className="card " style={{ maxWidth: 740 }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://www.topgear.com/sites/default/files/2022/07/13.jpg"
                className="img-fluid h-100 rounded-start"
                alt="pages-image"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body mt-3">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div className="d-flex justify-content-end gap-2">
                  <Link to={"/pages-list/"} className="btn btn-danger">
                    Cencel
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ViewPage;
