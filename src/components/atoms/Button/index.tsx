import * as React from 'react'
import styled from 'react-emotion'

const ButtonBase = styled('button')`
  display: inline-block;
  padding: 0.8rem;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-weight: bold;
  font-size: 0.8rem;
  line-height: 1;
  text-decoration: none;
  transition: opacity 0.3s;
  color: #8c8c8c;
  cursor: pointer;
`

const Button = ({ ...props }) => <ButtonBase {...props} />

export default Button
