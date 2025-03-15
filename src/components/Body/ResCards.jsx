const ResCards=(props)=>{
    const {resImg,resName,dish,ratings,resLoc}=props;
    return(
      <div className='res_cards'>
        <div className="res_img">
          <img src={resImg}  alt="dish_img"/>
        </div>
        <h3>{resName}</h3>
        <h4>{dish}</h4>
        <h5>Ratings:{ratings}</h5>
        <p>{resLoc}</p>
      </div>
    )
  }

  export default ResCards;