import { css } from 'lit-element';

export const sharedStyles = css`
     .container{
            display:flex;
        }
        .title{
            margin:0;
            padding-top: 10px;
            padding-left:14px;
            background-color: moccasin;
        }
        .sectionMovies {
            background-color: moccasin;
        }
        .boxMovies {
            display:flex;
            flex-wrap: wrap;
            justify-content:center;
            overflow-x: scroll;
            height: 780px;
            width: 68%;
        }
        ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: orangered;
       
        }
        ::-webkit-scrollbar {
            background-color: moccasin;  
        }
        
        .cardMovie{
            display:flex;
            flex-direction:column;
            position: relative;
            overflow: hidden;
            width:221px; 
            height:370px;
            box-shadow: 0px 5px 10px rgba(0,0,0,1);
            
        }

        .img{
            width: 221px;
            height: 300px;
        }

        .overview{
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            padding: 1rem;
            max-height: 100%;
            background-color: moccasin;
            transform: translateY(100%);
            transition: transform 0.5s ease-in;
            overflow-y: scroll;
        }
        .infoMovie{
            display:flex;
            justify-content: space-between;
            align-items: center;
            height: 69px;
        }
        
        .infoMovie:hover .overview{
            transform:translateY(0);
        }

        .bestMovie{
            display: flex;
            justify-content: center;
            position: absolute;
            margin-left: 74%;
            width: 20%;
            height: 400px;
            left: 0px;
            right: 0px;
            bottom: 0px;
            flex-direction: column;
            align-items: center;

        }
        .btn-premier{
            width:100px;
        }
        .note{
            margin: 6px;
        }
        .likeBtn {
                height: 30px;
                width:30px;
                background-color: moccasin;
    
            }

        .favBtn {
            background-color: moccasin;
            border: none;
        }
        .likeBtn:hover{
            background-color: red;
            border-radius: 15px
        }
        .boxNote{
            display:flex;
            flex-direction: column;
                align-items: center;
            
        }
        .boxInfo{
            display:flex;
            height:82px;
            justify-content: space-between;
            
        }
        
`;




