import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';

type Anchor = 'left';

export default function Sidebar() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };

  const sidebarOptions = [
    { text: 'Dashboard', link: '/' },
    { text: 'Leads', link: '/leads' },
    { text: 'Poposal Templates', link: '/proposal-templates' }
    // Add more options here as needed
  ];

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'left' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {sidebarOptions.map((option, index) => (
          <>
            <ListItem key={index} disablePadding>
              <Link to={option.link} style={{ color:'black', textDecoration:'none'}}>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={option.text} />
                </ListItemButton>
              </Link>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>

    </Box>
  );

  return (
    <div>
      <React.Fragment key="left">
        <ListItemButton onClick={toggleDrawer('left', true)}>
          <ListItemIcon>
            <MenuIcon style={{ color:'white' }}/>
          </ListItemIcon>
        </ListItemButton>
        <Drawer
          anchor="left"
          open={state['left']}
          onClose={toggleDrawer('left', false)}
        >
          {list('left')}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
