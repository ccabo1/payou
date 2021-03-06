import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import s from 'styled-components'

import { maxWidth, MD } from '../../constants/widths'
import { SLATE, DARK_SLATE } from '../../constants/colors'
import { HOME_ROUTE, EMPLOYERS_ROUTE, ABOUT_ROUTE } from '../../constants/routes'

const Links = s.div`
  display: inline-block;
  float: right;

  a {
    color: ${SLATE} !important;
    cursor: pointer;
    display: inline-block;
    width: auto;
    margin: 0;
    margin-left: 3rem;
    font-size: 1rem;
    font-weight: 400;
    text-decoration: none !important;

    &:hover {
      color: ${DARK_SLATE} !important;
    }
  }

  ${maxWidth(MD)} {
    width: 100%;
    overflow: hidden;

    ${({ active }) => (active ? `
      max-height: 100vh;
    ` : `
      max-height: 0;
    `)}

    a {
      :first-child {
        margin-top: 3rem;
      }

      display: block;
      margin: 1rem 0;
      font-size: 1.2rem;
    }
  }
`

const LinksComponent = ({ active }) => (
  <Links active={active}>
    <Link href={HOME_ROUTE}>
      <a>Employees</a>
    </Link>
    <Link href={EMPLOYERS_ROUTE}>
      <a>Employers</a>
    </Link>
    <Link href={ABOUT_ROUTE}>
      <a>About</a>
    </Link>
  </Links>
)

LinksComponent.defaultProps = {
  active: false,
}

LinksComponent.propTypes = {
  active: PropTypes.bool,
}

export default LinksComponent
