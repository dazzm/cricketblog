import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to Cricket Hub</p>
    <p>All about cricket</p>
    <Link to="/page-2/">About</Link>
  </Layout>
)

export default IndexPage
