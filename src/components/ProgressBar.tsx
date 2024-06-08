const ProgressBar = ({width} : {
    width: number;
}) => {

  return (
    <div style={{
        background: 'grey',
        width: '95%',
        height: '2px',
        position: 'absolute',
        top: '20px',
        borderRadius: '10px',
        display: 'flex',
        marginLeft: '10px',
        marginRight: '10px',
        zIndex: 2
    }}>
        <div style={{
           background: 'white',
           width: `${width}%`,
           height: '2px',
           position: 'absolute',
           top: '0',
           borderRadius: '10px',
           display: 'flex',
           zIndex: 2 
        }}/>
    </div>
  
)
}

export default ProgressBar