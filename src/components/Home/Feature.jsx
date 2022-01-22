const Feature = ({icon, title, caption}) => {
    return (
      <div className='feature'>
        <div>{icon}</div>
        <div className='feature-content'>
          <h5>{title}</h5>
          <p>{caption}</p>
        </div>
      </div>
    )
  }

  export default Feature