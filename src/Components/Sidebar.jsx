import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 240;

export default function PermanentDrawerLeft() {

    const components = [
        { 
            id : 1 ,
            url : "/",
            icon : <MailIcon sx={{backgroundColor:'#000' , color:'#000'}} />
        },
        { 
            id : 2 ,
            url : "/",
            icon : <MailIcon />
        },
        { 
            id : 3 ,
            url : "/",
            icon : <MailIcon />
        },
        { 
            id : 4 ,
            url : "/",
            icon : <MailIcon />
        }
    ]
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
     
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {components.map((component) => (
            <ListItem key={component.id} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {components.icon}
                </ListItemIcon>
              </ListItemButton>
              <ListItemText primary={component.url} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    
    </Box>
  );
}
