import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>About Cricket Blog</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

class Page extends React.Component {

  constructor(){
    this.state = { msg: "waiting for server"};
  }
  
  componentDidMount(){
    fetch("./netlify/lambda/hello").then(res => res.json())
    .then(json => this.setState({msg: json.msg}));
  }

  render() {
    <div>
      <h2>msg from server: {this.state.msg}</h2>
      <SecondPage />
    </div>
  }
}

export default Page
