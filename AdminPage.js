import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';

function AdminPage() {
  const user =  JSON.parse(sessionStorage.getItem("userId",'role'));
  const navigate = useNavigate();
  const logoutButton = () => {
      if(user!=null) {
        sessionStorage.removeItem('userId');
         sessionStorage.removeItem('role');
        sessionStorage.clear();
          alert("You have successfully logged out.")
          navigate("/");
      }
    }
  return (
    <div>
      {sessionStorage.getItem("role") === "Administrator" ? (
        <div>
          <div>
            <div className="jumbotron2 jumbotron-fluid">
              <div className="container">
                <h1 className="display-4">WELCOME ADMINISTRATOR</h1>
                <p className="lead"></p>
              </div>
            </div>
            <div>
              <p>
                <Link to="/fetch/org/admin">Click for Organization List</Link>
              </p>
              <p>
                <Link to="/fetch/user">Click for User List</Link>
              </p>
              <p>
                <Link to="/admin/view">Click for Feedback List</Link>
              </p>
              <button  className="btn btn-danger" style={{float:'right'}} onClick={logoutButton}>logout</button>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default AdminPage;
