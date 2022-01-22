import React from 'react'
import {css} from '@emotion/react'
import BarLoader from 'react-spinners/BarLoader'

const override = css`
  display: block;
  border-color: var(--kink-red);
  color: var(--kink-red);
`;

const styles = {
  display: "flex",
  justifyContent: 'center',
  alignItems: 'center',
  height: "100vh",
  width: "100%",
  flexDirection: 'column',
  fontFamily: "Montserrat"
}

const Pending = ({error}) => {
    return (
        <div style={styles}>
           <BarLoader width={50} color={'rgb(251, 54, 64)'} css={override} height={4} speedMultiplier={0.8} loading={true} />
           <p>{error}</p>
        </div>
    )
}



export default Pending
