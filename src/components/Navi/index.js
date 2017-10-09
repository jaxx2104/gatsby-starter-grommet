import React from 'react'
import get from 'lodash/get'

import Anchor from 'grommet/components/Anchor'
import Box from 'grommet/components/Box'
import GrommetIcon from 'grommet/components/icons/base/BrandGrommetOutline'
import Header from 'grommet/components/Header'
import Menu from 'grommet/components/Menu'
import Title from 'grommet/components/Title'
import Value from 'grommet/components/Value'

class Navi extends React.Component {
  render() {
    const title = get(this, 'props.title')

    return (
      <Header fixed={true} justify="center" colorIndex="neutral-2">
        <Box
          align="center"
          direction="row"
          flex="grow"
          justify="start"
          pad={{ horizontal: 'medium' }}
          responsive={false}
          size={{ width: { max: 'xxlarge' } }}
        >
          <Title>{title}</Title>
          <Box pad="small" />
          <Menu label="Label" inline={true} direction="row" flex="grow">
            <Anchor href="#">Home</Anchor>
            <Anchor href="#">Profile</Anchor>
          </Menu>
          <Box flex="grow" align="end">
            <GrommetIcon />
          </Box>
        </Box>
      </Header>
    )
  }
}

export default Navi
