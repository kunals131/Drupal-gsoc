import withAuthenticationProps from '@/utils/functions/authenticatedProps'
import { GetServerSideProps } from 'next'
import React from 'react'

const HomePage = ({ test }: any) => {
  return (
    <div>HomePage: {test}</div>
  )
}

export const getServerSideProps: GetServerSideProps = withAuthenticationProps(async () => {
  return {
    props: {
      test: 'HOMEEE'
    }
  }
})

export default HomePage