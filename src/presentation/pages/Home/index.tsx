import React,{
  useState,
  useEffect,
} from 'react';
import {FaPlus, FaShoppingBag} from 'react-icons/fa'
import { Header, Main } from './styles';
import {GetItenShop} from '../../../domain/usecases/';

import {ItenShop} from '../../../domain/model/index';
type Props = {
  getItenShop: GetItenShop
}



const Home: React.FC<Props> = ({getItenShop}) => {

  const [itensShop, setItensShop] = useState<ItenShop[]>([]);

  useEffect(()=>{
    getItenShop.load().then(response=>{
      console.log(response[0].description);
      setItensShop(response);
    }).catch(e=>console.log(e))
  },[])

  return <>
    <Header>
      <h1>JGShop</h1>
      <span> </span>;
      <button><FaShoppingBag /></button>
    </Header>
    <Main>
      <h2>Item da loja</h2>
      <section>
        {itensShop.map(item=>{
          return (<div className='content-item'>
            <div className="img_item">
              <img src={item!.image} alt={item!.image} />
            </div>
            <div className="menu_item">
              <div className="descripiont_item">
                <p>{item.title}</p>
                <p className='priceItem'>R$ {item.price}</p>
              </div>
              <button className="button_add_car"><FaPlus /></button>
            </div>
          </div>);
        })}
      </section>

    </Main>

  </>;
}

export default Home;