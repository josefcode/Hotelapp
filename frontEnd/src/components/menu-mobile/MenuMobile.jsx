import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import UserAvatar from '../user-avatar/UserAvatar';
import { useLogin } from '../hooks/useLogin';
import './styles.css'

const drawerWidth = 240;



const tokenLocalStorage = localStorage.getItem('token')

const data = localStorage.getItem('userAvata');

const detalesDoAvatar = JSON.parse(data)

const { nome , sobrenome } = detalesDoAvatar || {}


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export default function PersistentDrawerRight() {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleGoBack = () => {
    navigate(-1);
  };

  const renderCreateAccountButton = () => {
    if (!tokenLocalStorage && location.pathname === '/criar-conta') {
      return <>
        <ListItem  onClick={handleDrawerClose}>
        <button className="login-btn" onClick={handleGoBack}>Voltar</button>
        </ListItem>
        {/* <Link to="iniciar-sessao"><button className="login-btn">Iniciar sessão</button></Link> */}
      </>;
  
    } else if (!tokenLocalStorage && location.pathname === '/iniciar-sessao') {
      return <>
      <ListItem  onClick={handleDrawerClose}>
        <button className="login-btn" onClick={handleGoBack}>Voltar</button>
        </ListItem>
        {/* <Link to="criar-conta"><button className="login-btn">Criar conta</button></Link> */}
      </>;
  
    } else if (!tokenLocalStorage) {
     
      return <>
        <ListItem  onClick={handleDrawerClose}>
        <Link to="criar-conta"><button className="login-btn">Criar conta</button></Link>
        </ListItem>
        <ListItem onClick={handleDrawerClose} >
        <Link to="iniciar-sessao"><button className="login-btn">Iniciar sessão</button></Link>
        </ListItem>
      </>;
    } else if (typeof tokenLocalStorage === 'string'){
  

      return <> 
      <ListItem onClick={handleDrawerClose} >
      <UserAvatar
      nome={nome}
      sobrenome={sobrenome}
      />
  </ListItem>
      </>
    }    
    
  };
  return (
    <Box sx={{  '.MuiToolbar-root': {display: 'flex', justifyContent: 'space-between', color : '#EEF1F2', background: '#0F5EA2'}, '.MuiPaper-root' : {boxShadow: 'none'}, '.MuiDrawer-docked .MuiDrawer-paper' : {width: '100%'}}}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
       
    
        <Toolbar>
        <Link to="/" style={{textDecoration: 'none'}}>
          {/* <img className="navbar-logo" src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/512/external-travel-summertime-wanicon-lineal-color-wanicon.png" alt="travelLogos" /> */}
          <span className='navbar-logo-title'>SuaViagem.com</span>
        </Link>  
          <IconButton
         
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
     
      <Drawer
        sx={{
         
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            background: '#0F5EA2'
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon sx = {{color: 'white'}}/>}
          </IconButton>
        </DrawerHeader>
        <List sx = {{".MuiListItem-root" : {justifyContent: 'center'}}}>
        {/* <ListItem  onClick={handleDrawerClose}>
       
          <Link to= '/criar-conta'>
           <button className='menu-button'>
           Criar conta
          </button>
          </Link>
       
          </ListItem>
        <ListItem onClick={handleDrawerClose} >
       
          <Link to= '/iniciar-sessao'>
           <button className='menu-button'>
          Iniciar Sessao
          </button>
          </Link>
         
          </ListItem> */}

        {renderCreateAccountButton()}
        </List>
        
        <Divider />
        <List className='footer-menu'>
          <InstagramIcon />
          <FacebookIcon />
          <TwitterIcon />
          <LinkedInIcon />
          </List>
      </Drawer>
    </Box>
  );
}