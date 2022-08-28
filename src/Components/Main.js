import CardData from "./CardData"

export default function Main(props){
    return(
       
    
        <div className="card" >
            <img src={props.data.image} className="card-img-top" alt="..."/>
            <h5 className="card-title">{props.data.cardTitle}</h5>
            <div className="card-body">
              <p className="card-text">{props.data.cardText}</p>
              <a href={props.data.buttonUrl} className="btn btn-primary  active" role="button" aria-pressed="true">Check more</a>
            </div>
            
          
         
</div>





    )
}