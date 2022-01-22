import React from 'react'
import {css} from '@emotion/react'
import MoonLoader from 'react-spinners/MoonLoader'

const override = css`
  display: block;
  border-color: var(--lamp-black);
`;

const styles = {
  display: "flex",
  justifyContent: 'center',
  alignItems: 'center',
  height: "100vh",
  width: "100%",
}

const Loading = () => {
    return (
        <div style={styles}>
           <MoonLoader size={100} css={override} speedMultiplier={1} loading={true} /> 
        </div>
    )
}



export default Loading
