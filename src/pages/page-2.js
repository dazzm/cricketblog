import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

class Page extends React.Component {

  constructor(props){
    super(props);
    this.state = { msg: "waiting..."};
  }

  componentDidMount(){
    fetch("/.netlify/lambda/hello").then(res => res.json())
    .then(json => this.setState({msg: json.msg}));
  }

  render() {
    return (
    <Layout>
      <h1>About Cricket Blog</h1>
      <h2>msg : {this.state.msg}</h2>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
    );
  }
}

export default Page
