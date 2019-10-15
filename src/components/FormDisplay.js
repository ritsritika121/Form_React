import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import propTypes from 'prop-types';
import { EditDetails, DeleteData } from '../action';

class FormDisplay extends React.Component {
  state = { Name: "", Email: "" }

  UpdateNewData = () => {
    return (
      <div>
        <label>Name</label>
        <input type="text" className="form-control"  onChange={(e) => this.setState({ Name: e.target.value })} />
        <br /><br />

        <label>Email</label>
        <input type="email" className="form-control"  onChange={(e) => this.setState({ Email: e.target.value })} />
        <br /><br />

        <button onClick={() => this.props.EditData(this.state.Name, this.state.Email)}> Update </button>
      </div>
    )
  }
    UpdateData = (i) => {
    this.setState({Index:i})
  }

  render() {
    return (
      <div>
        {this.props.Data.data.map((item, i) => (
          <div className="card-body" key={i}>
            <h5 className="card-title">{item.Name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{item.Email}</h6>

           <button type="button" className="btn btn-success" onClick={() => this.props.EditDetails(item, i)} >
           <Link to="/Edit" className="item">
            Edit
          </Link>
            </button>

            <button type="button" className="btn btn-danger" onClick={() => this.props.DeleteData(i)}>Delete</button>
          </div>
        ))}

        <button>
          <Link to="/Add" className="item">
            AddUser
          </Link>
        </button>

      </div>
    );
  }
}

FormDisplay.propTypes = {
  Name: propTypes.string,
  Email: propTypes.string,
}


const mapStateToProps = state => {
  return {
    Data: state.Data,
  };
};

export default connect(mapStateToProps, { EditDetails, DeleteData })(FormDisplay);
