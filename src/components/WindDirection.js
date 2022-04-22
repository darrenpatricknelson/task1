// This component was pretty fun to build
// Let me walk you through the process

export default function WindDirection(props) {
  // first we take the degree value as a prop
  // and convert it to a string
  const degree = props.degree;
  const degree_string = degree.toString();
  //   we use that string to create a dynamic inline style
  //   I will say, figuring out this part was so tricky and frustrating
  // that I nearly gave up on this feature entirely
  // however, after looking at other weather apps, this small wind direction feature (as small as it is) adds alot to a weather app
  // So I bit the bullet and powered through
  const style = { transform: `rotate(${degree_string}deg)` };

  // we then use the above prop to figure out where on a compass that degree would lay
  // for example: 45degrees is NE
  // Once we know where that degree lays on a compass
  // we can return a certain result
  if (degree === 0) {
    return (
      <>
        {/* we return a font awesome icon */}
        {/* this icon has the dynamic inline style we created above */}
        {/* That inline style will rotate the icon  */}
        {/* which results in the icon pointing in the direction of the wind */}
        {/* pretty cool right? :D */}
        {/* We also have the direction of the which in plain text */}
        {/* Example: N = North */}
        <i className="fa-solid fa-angles-up" style={style}></i> N
      </>
    );

    // we do a similar test for every direction on the compass
    // this part of the function was the easiest and i had to be pretty maticulous
  } else if (degree > 0 && degree < 45) {
    return (
      <>
        <i className="fa-solid fa-angles-up" style={style}></i> NNE
      </>
    );
  } else if (degree === 45) {
    return (
      <>
        <i className="fa-solid fa-angles-up" style={style}></i> NE
      </>
    );
  } else if (degree > 45 && degree < 90) {
    return (
      <>
        <i className="fa-solid fa-angles-up" style={style}></i> ENE
      </>
    );
  } else if (degree === 90) {
    return (
      <>
        <i className="fa-solid fa-angles-up" style={style}></i> E
      </>
    );
  } else if (degree > 90 && degree < 135) {
    return (
      <>
        <i className="fa-solid fa-angles-up" style={style}></i> ESE
      </>
    );
  } else if (degree === 135) {
    return (
      <>
        <i className="fa-solid fa-angles-up" style={style}></i> SE
      </>
    );
  } else if (degree > 135 && degree < 180) {
    return (
      <>
        <i className="fa-solid fa-angles-up" style={style}></i> SSE
      </>
    );
  } else if (degree === 180) {
    return (
      <>
        <i className="fa-solid fa-angles-up" style={style}></i> S
      </>
    );
  } else if (degree > 180 && degree < 225) {
    return (
      <>
        <i className="fa-solid fa-angles-up" style={style}></i> SSW
      </>
    );
  } else if (degree === 225) {
    return (
      <>
        <i className="fa-solid fa-angles-up" style={style}></i> SW
      </>
    );
  } else if (degree > 225 && degree < 270) {
    return (
      <>
        <i className="fa-solid fa-angles-up" style={style}></i> WSW
      </>
    );
  } else if (degree === 270) {
    return (
      <>
        <i className="fa-solid fa-angles-up" style={style}></i> W
      </>
    );
  } else if (degree > 270 && degree < 315) {
    return (
      <>
        <i className="fa-solid fa-angles-up" style={style}></i> WNW
      </>
    );
  } else if (degree === 315) {
    return (
      <>
        <i className="fa-solid fa-angles-up" style={style}></i> NE
      </>
    );
  } else if (degree === 315) {
    return (
      <>
        <i className="fa-solid fa-angles-up" style={style}></i> NW
      </>
    );
  } else if (degree > 315 && degree < 360) {
    return (
      <>
        <i className="fa-solid fa-angles-up" style={style}></i> NNW
      </>
    );
  }
}

// basically this components returns a dynamically updated wind direction
