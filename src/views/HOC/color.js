function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  const colorrandom = (WrappedComponent)=>{
    const colorrandom = getRandomColor();
    return (props)=>(
        <div style={{color : colorrandom}}>
                <WrappedComponent {...props} ></WrappedComponent>
        </div>

    )

  }
  export default colorrandom;