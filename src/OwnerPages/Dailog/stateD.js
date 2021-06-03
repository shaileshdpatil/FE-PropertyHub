
import React from 'react';
import axios from 'axios';

class States extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            StateData: [],
        }
    }


    componentDidMount = () => {
        this.getStateData();
    }

    getStateData = () => {
        axios.get('http://localhost:3000/api/statedisp').then((response) => {
            this.setState({ StateData: response.data })
        });
    }
    render() {
        const { StateData } = this.state;
        const marginfor = {
            options: {
                width: '100%',
                height: '30px',
                outline: 'none'
            },

        }
        return (
            <>
                <div>
                    <label >Select State</label><br />
                    <select style={marginfor.options} value={this.states} onChange={(e) => this.setState({ states: e.target.value })}>
                        {StateData.map((event, keys) => {
                            return (
                                <>
                                    <option key={`${keys}-key`} value={event.states}>{event.states}</option>
                                </>
                            )
                        })
                        }
                    </select>
                </div>




            </>
        )
    }
}
export default States;