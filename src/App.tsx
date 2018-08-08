import * as React from 'react'
import styled from 'react-emotion'

import Button from './components/atoms/Button'

type ComponentProps = {
  className?: string
  label: string
}

const Component: React.SFC<ComponentProps> = ({ label, className }) => (
  <div className={className}>{label}</div>
)

const StyledComponent0 = styled(Component)`
  color: red;
`

const StyledComponent1 = styled(Component)({
  color: 'blue',
})

export const App = () => (
  <>
    <Button>aaa</Button>
    <StyledComponent0 label="Yea! No need to re-type this label prop." />
    <StyledComponent1 label="Yea! No need to re-type this label prop." />
  </>
)
