import React from 'react'

import { Menu, ArticlesContainer, NewForm } from './components'

export default class App extends React.Component {
  constructor () {
    super ()
    this.state = {
      articles: [
        {
          title: 'Lebaran Sudah Lewat',
          content: 'Itu berarti libur pun sudah lewat. Perjuangan belum usai. Masih    tersisa tiga minggu untuk memuaskan rasa penasaran sebelum dilempar ke jurang dunia    nyata. SEMANGAT!',
          author: 'Shabrina V. Inmas',
        },
        {
          title: 'React Provokes Reaction',
          content: 'React with Redux. Redux - Reduction. Oxidation. Redox. Chemistry?  O how I miss those good old days. Solving chemistry mistery like there is no tomorrow. Well at least the brain juice is still there. Ready to power me through out my journey.',
          author: 'S. Virta I',
        }
      ],
      isNewPost: true,
      newPost: {
        title: '',
        content: '',
        author: ''
      },
    }
    this.closeNewPost = this.closeNewPost.bind(this)
    this.submitNewPost = this.submitNewPost.bind(this)
  }
  openNewPost () {
    this.setState({
      isNewPost: true,
    })
  }
  submitNewPost (newPost) {
    this.setState({
      articles: [...this.state.articles, newPost],
      isNewPost: false,
    })
  }
  closeNewPost () {
    this.setState({
      isNewPost: false,
    })
  }
  render() {
    return (
      <div className="App">
        <div className="hero is-dark">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Basic Blog TDD with Jest</h1>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="container">
          <div className="columns">
            <div className="column is-one-quarter">
              <a id="newPost-btn" onClick={() => this.openNewPost()} className="button is-black">New Post</a>
              <br></br>
              <br></br>
              <br></br>
              <Menu articles={this.state.articles}/>
            </div>
            <div className="column">
              {this.state.isNewPost ? <NewForm closeForm={this.closeNewPost} handleForm={this.submitNewPost} /> : <ArticlesContainer articles={this.state.articles} />}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
