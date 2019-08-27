import React, { Component } from 'react';
import {getStories} from '../../utils/functions'
import {Story} from '../story/story';
// get posts from online api
// it's return a json file
class Stories extends Component {
    state = {
        loading: false,
        stories: [],
        page: 1
    }

    componentDidMount() {
        this.setState({loading: true})
        getStories(1).then(stories => {
            this.setState({loading: false, stories})
        })
    }

    jumpPage = (diff) => {
        if (this.state.loading) return;

        this.setState({loading: true})
        getStories(this.state.page + diff).then(stories => {
            this.setState({loading: false, stories, page: this.state.page + diff})
        })
    }

    nextPage = () => {
        this.jumpPage(+1);
    }

    prevPage = () => {
        this.jumpPage(-1);
    }

    renderStories () {
        return this.state.stories.map((story, index)=>{
            return <Story key={index} story={story} />
        });
    }
    render() {
        return (
            <div className='wrapper'>
                <nav className='nav'>
                    { (this.state.page > 1) && <button className='nav__button nav__button--prev' disabled={this.state.loading} onClick={this.prevPage}>Prev</button> }
                    <button className='nav__button nav__button--next' disabled={this.state.loading} onClick={this.nextPage}>Next</button>
                </nav>
                {
                    this.state.loading ?
                        <p>Loading...</p>
                        :
                        this.renderStories()
                }
            </div>
        )
    }
  }

  export default Stories;
