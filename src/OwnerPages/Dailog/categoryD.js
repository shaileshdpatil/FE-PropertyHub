
import React from 'react';
import axios from 'axios';

class Cat extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categoryData: [],
        }
    }

    componentDidMount = () => {
        this.getcategoryData();
    }

    getcategoryData = () => {
        axios.get('http://localhost:3000/api/categoryDisplay').then((response) => {
            this.setState({ categoryData: response.data })
        });
    }

    render() {
        const { categoryData } = this.state;
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
                                <label >Select category</label><br />
                                <select style={marginfor.options} value={this.category} onChange={(e) => this.setState({ category: e.target.value })}>
                                    {categoryData.map((event, keys) => {
                                        return (
                                            <>
                                                <option key={`${keys}-key`} value={event.name}>{event.name}</option>
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
export default Cat;