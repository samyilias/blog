import React from 'react'
import Hero from '../components/hero'
import Bio from '../components/bio'
import Work from '../components/work'
import styled from 'styled-components'

const Container = styled.div`
  padding: 1rem;
`
const IndexPage = () => (
  <Container>
    <Hero/>
    <Bio/>
    <Work/>
  </Container>
)

export default IndexPage
