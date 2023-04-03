import React from 'react'
import './styles.css'
import { useLogin } from '../hooks/useLogin';
import { useToken } from '../hooks/useToken';
import CancelIcon from '@mui/icons-material/Cancel';
import { useNavigate, Link} from 'react-router-dom';

export default function UserAvatar() {

  const navigate = useNavigate()
  
   const {changeLogin} = useLogin()
   const [userData, setUserData] = React.useState({})
   const [laoding, setLaoding] = React.useState(false)

   const {token , changeToken} = useToken()

   const tokenLocalStorage = localStorage.getItem('token')


   React.useEffect(()=> {
    async function fetchUserData() {
        setLaoding(true)
        try {
          const response = await fetch(`http://3.140.210.50:8081/user/${token || tokenLocalStorage}`);
          const userData = await response.json();
           console.log(userData)
          const {nome, sobrenome, email, userRoles} = userData
          // Atualiza os valores dos inputs com os dados da resposta
          console.log(userData);
          setUserData({
            nome,
            sobrenome,
            email,
            userRoles,
          });
            
       
          setLaoding(false)
          localStorage.setItem('userAvata', JSON.stringify({nome, sobrenome}))
        } catch (error) {
          console.error(error);
        }
      }

      fetchUserData()
   }, [token, tokenLocalStorage])

   const { nome, sobrenome, userRoles } = userData
    const handleRemove = () => {
      
      localStorage.removeItem('token')
        changeToken(null)
         changeLogin(false)
         navigate('/');
      

    }

    
  return (
    <>
    { 
    laoding ? 
    
    <span className='loading-avatar'>loading...</span> 
  
     :
     <div className='avatar-container'>
      <Link to={`/${nome}/reservas`}>
        <div className='avatar-image'>
            {nome?.charAt(0).toUpperCase()}
            {sobrenome?.charAt(0).toUpperCase()}
      
        </div>
      
      </Link>

     <div className='avatar-text'>
         <span>Olá</span>
         <p>
         {nome} {sobrenome}
         </p>
     </div>
    
    
     <div>
      
     {userRoles === 'ROLE_USER' && <Link to = 'administracao'><button  className='avata-btn'>ADM</button></Link>}
     </div>

     <div className='avatar-close'>
     <CancelIcon onClick = {handleRemove} sx ={{fontSize: '20px',
 color: "#0F5EA2"}}/>
     </div>
 </div>

}
   
    </>
  )
}
