import { Location } from '@reach/router'
import React from 'react'

import Layout from '../components/layouts/layout/layout'

import './previewGlobalDeps'

const PreviewLayout = ({ children }: { children: React.ReactNode }) => {
  return <Location>{() => <Layout>{children}</Layout>}</Location>
}

export default PreviewLayout
