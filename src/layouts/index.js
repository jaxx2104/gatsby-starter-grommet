import React from 'react'
import Link from 'gatsby-link'
import { siteMetadata } from '../../gatsby-config'

import 'grommet/grommet.min.css'

import App from 'grommet/components/App'
import Box from 'grommet/components/Box'
import Footer from 'grommet/components/Footer'
import Paragraph from 'grommet/components/Paragraph'

import Graph from '../components/Graph'
import Navi from '../components/Navi'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }
    if (location.pathname === rootPath) {
      header = null
    } else {
      header = null
    }
    return (
      <App centered={false}>
        <Navi title={siteMetadata.title} />
        <Box align="center">
          <Box pad="large" align="center" size={{ width: { max: 'xxlarge' } }}>
            {children()}
          </Box>
        </Box>
        <Graph />
        <Footer
          primary={true}
          appCentered={true}
          direction="column"
          align="center"
          pad="small"
          colorIndex="grey-1"
        >
          <p>
            Build your ideas with{' '}
            <a href="http://grommet.io" target="_blank">
              Grommet
            </a>!
          </p>
        </Footer>
      </App>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
