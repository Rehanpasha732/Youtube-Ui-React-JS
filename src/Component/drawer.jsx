import React, { useState } from 'react'
import ReactPlayer from 'react-player'
// import { obj } from '../Utils/object'
import YouTube from '../Component/youTube';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { BsSearch } from 'react-icons/bs';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { AiOutlineVideoCameraAdd } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { StepBackwardOutlined } from '@ant-design/icons';
import { StepForwardOutlined } from '@ant-design/icons';





const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function Navbar() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [change, setChange] = useState(0)

    function next(params) {
        setChange(change + 1)

    }
    function prev(params) {
        setChange(change - 1)

    }
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon className='icon' />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        <img className='logo' src="https://download.logo.wine/logo/YouTube/YouTube-Logo.wine.png" alt="" />
                    </Typography>
                    <Typography>
                        <div className="search_bar"> <input className='input' type="text" placeholder='Search' />
                            <span className='search'><BsSearch /></span>
                            <span className='voice_icon'><KeyboardVoiceIcon className='icon_icons' /></span>
                            {/* <span className='voice_icon'><AiOutlineVideoCameraAdd /></span>
                            <span className='voice_icon'><IoMdNotificationsOutline /></span> */}
                        </div>
                    </Typography>

                    <div className='profile_and_icons_div'>
                        <span className='icons'><CreateNewFolderIcon className='icon_icons' /></span>
                        <span className='icons'><NotificationsNoneIcon className='icon_icons' /></span>
                        <img className='profile_img' src="https://yt3.ggpht.com/ytc/AMLnZu-O_vNRm8rGqWJ-ML_ctCbKb-ExplspBUWHwOBLi8RUeFSOcRqN_8N2fT-XnE60=s88-c-k-c0x00ffffff-no-rj-mo" alt="" />
                    </div>


                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                <Typography paragraph>
                    <YouTube />
                </Typography>
                <Typography paragraph>
                </Typography>
            </Main>
        </Box>
    );
}
