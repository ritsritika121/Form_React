import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Editdata } from '../action';


class EditData extends React.Component {
    state = { Name: this.props.EditDetails.Details.Name, Email: this.props.EditDetails.Details.Email }

    onClickUpdate = (i) => {
        this.props.Editdata(this.state.Name, this.state.Email, i)
    }

    render() {
        return (
            <div>
                <label>Name</label>
                <input type="text" className="form-control" value={this.state.Name} onChange={(e) => this.setState({ Name: e.target.value })} />
                <br /><br />

                <label>Email</label>
                <input type="email" className="form-control" value={this.state.Email} onChange={(e) => this.setState({ Email: e.target.value })} />
                <br /><br />

                <button onClick={() => this.onClickUpdate(this.props.EditDetails.index)} className="btn btn-warning" >
                    <Link to="/" className="item">
                        Update
                     </Link>
                </button>

                <button className="btn btn-secondary"> <Link to="/" className="item">Cancel</Link></button>
            </div>
        );

    }
}

const mapStateToProps = (state) => {
    return { EditDetails: state.EditDetails }
}

export default connect(mapStateToProps,{Editdata}) (EditData);