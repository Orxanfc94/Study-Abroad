import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Footer from './Components/Footer';
import CardData from './Components/CardData';

 export default function Ap(){
  let datas=CardData.map(data=>
      <Main data={data}
      key={data.id}/>)
  return (<div>
     <Navbar/>

           <div className="main-Page">
           <h1>Check Out Popular Universities</h1>
              <div className='cards'>

    {datas}
    </div>
    </div>
    <Footer/>
          
      </div>
      
  )
}

