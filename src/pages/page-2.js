import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

class Page extends React.Component {

  constructor(props){
    super(props)
    this.state = { msg: "waiting..."}
  }

  async componentDidMount(){
    let res = await fetch("/.netlify/functions/hello")
    let data = await res.json()
    this.setState({msg: data.msg})
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
