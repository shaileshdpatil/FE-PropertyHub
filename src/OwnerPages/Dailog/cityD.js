
import React from 'react';
import axios from 'axios';

class City extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cityData: [],
        }
    }

    componentDidMount = () => {
        this.getcityData();
    }

    getcityData = () => {
        axios.get('http://localhost:3000/api/citydisp').then((response) => {
                this.setState({ cityData: response.data })
            });
    }

    render() {
        const { cityData } = this.state;
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
                                <label >Select city</label><br />
                                <select style={marginfor.options} value={this.citys} onChange={(e) => this.setState({ citys: e.target.value })}>
                                    {cityData.map((event, keys) => {
                                        return (
                                            <>
                                                <option key={`${keys}-key`} value={event.citys}>{event.citys}</option>
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
export default City;