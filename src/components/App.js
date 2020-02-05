import React, { Component } from 'react';
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar'
import ImageList from './ImageList'

class App extends Component {
    state = {images: []}
    onSearchSubmit = async(term) =>{
        const response =  await unsplash.get('',{
            params: {
                query: term
            }
        })
        this.setState({
            images : response.data.results
        })
       
    }
    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <hr />
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}

export default App;
