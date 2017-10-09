import React from 'react'
import get from 'lodash/get'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from '../../../static/img/profile.jpg'

import Anchor from 'grommet/components/Anchor'
import Paragraph from 'grommet/components/Paragraph'
import Quote from 'grommet/components/Quote'
import Image from 'grommet/components/Image'

class Bio extends React.Component {
  render() {
    const author = get(this, 'props.author')
    const description = get(this, 'props.description')
    const twitter = get(this, 'props.twitter')

    return (
      <Quote>
        <Paragraph>{description}</Paragraph>
        <Paragraph>
          <Anchor href={`https://twitter.com/${twitter}`}>
            <Image
              src={profilePic}
              size="thumb"
              style={{ marginRight: '1rem' }}
            />
            {author} on Twitter
          </Anchor>
        </Paragraph>
      </Quote>
    )
  }
}

export default Bio
