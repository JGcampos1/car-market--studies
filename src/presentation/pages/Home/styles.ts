import styled from 'styled-components';

export const Header = styled.header`
    background:#ff3000;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding: 20px 30px;
    margin-bottom:30px;
    button{
      background:none;
      svg{
        color:#304878;
        font-size:36px;
      }
      svg:hover{
        color:#304800;
      }
    }
    
    
`;
export const Main = styled.main`
    padding: 0 30px;
    h2{
      margin:30px 0;
    };
   
    section{
      display:flex;
      flex-wrap:wrap;        
      justify-content:center;
      .content-item{
        margin:20px;
        color:#304878;
        .img_item{
          border-top-left-radius:12px;
          border-top-right-radius:12px;
          background:#fff;
          width:380px;
          height:380px;
          display:flex;
          align-items:center;
          justify-content:center;
          img{
            width:180px;
          }
        }
        .menu_item{
          background-color:#18c0d8;
          padding:20px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          border-bottom-left-radius:3px;
          border-bottom-right-radius:3px;

          .descripiont_item{
            p{
              display: block; 
              display: -webkit-box;
              width: 250px;
              height: 45px;
              font-size: 20px;
              overflow: hidden;
              text-overflow: ellipsis;
              margin-bottom:10px;

              color:#fff;
            }
            .priceItem{
              color:#f0f0f0;
              font-size: 24px;
              font-weight:bold;
              margin-bottom:0px;

            }
            
          }
            
          .button_add_car{
            padding:15px;
            color:white;
            background:  #f0c018 ;
            border-radius:50px;
            font-size:20px;
          }
        }

        
        
      }
    }

`;
