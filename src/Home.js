import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import MoreVert from '@material-ui/icons/MoreVert';
import Apps from '@material-ui/icons/Apps';
import { 
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import Box from '@material-ui/core/Box';
import { AddCircle } from '@material-ui/icons';
import { ListSubheader } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
    root: {        
        height: '100vh',
    },
    appBar: {
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1,
    },
    logo: {
        height: 25
    },
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
        borderRight: 'none',
    },
    menuIcon: {
        paddingRight: theme.spacing(3)        
    },
    icons: {
        paddingRight: theme.spacing(2)
    },
    grow: {
        flexGrow: 1,
    },
    listItemText: {
        fontSize: 14
    },
    listItem: {
        paddingTop: 4,
        paddingBottom: 4,
    },
    subheader: {
        textTransform: 'uppercase'
    }
  }));

  const videos = [
    {
      id: 1,
      title:
        'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
      channel: 'Lucas Nhimi',
      views: '11 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb1.png',
    },
    {
      id: 2,
      title:
        'COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
      channel: 'Lucas Nhimi',
      views: '957 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb2.png',
    },
    {
      id: 3,
      title:
        'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
      channel: 'Lucas Nhimi',
      views: '106 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb3.png',
    },
    {
      id: 4,
      title:
        'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
      channel: 'Lucas Nhimi',
      views: '5,6 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb4.png',
    },
    {
      id: 5,
      title:
        'EDITOR DE POST COM MARKDOWN 2 | Criando uma Rede Social com React.js e .NET Core #26',
      channel: 'Lucas Nhimi',
      views: '2,2 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb5.png',
    },
    {
      id: 6,
      title: 'COMO MIGRAR PARA REACT HOOKS | Dicas e Truques #01',
      channel: 'Lucas Nhimi',
      views: '233 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb6.png',
    },
    {
      id: 7,
      title:
        'PRÉ-REQUISITOS | Criando uma Rede Social com React.js e .NET Core #01',
      channel: 'Lucas Nhimi',
      views: '118 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb7.png',
    },
    {
      id: 8,
      title:
        'GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04',
      channel: 'Lucas Nhimi',
      views: '1,9 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb8.png',
    },
  ];

function Home() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar color='inherit' className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuIcon} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    
                    <img className={classes.logo} src="/images/preto.png" alt="logo" />

                    <div className={classes.grow} />

                    <IconButton className={classes.icons} color="inherit">
                        <VideoCallIcon />
                    </IconButton>

                    <IconButton className={classes.icons} color="inherit">
                        <Apps />
                    </IconButton>

                    <IconButton className={classes.icons} color="inherit">
                        <MoreVert />
                    </IconButton>

                    <Button 
                        startIcon={<AccountCircleIcon />} 
                        variant='outlined' 
                        color="secondary"
                    >
                        FAZER LOGIN
                    </Button>
                </Toolbar>
            </AppBar>

            <Box display='flex'>
                <Hidden mdDown>
                    <Drawer
                        className={classes.drawer}
                        variant="permanent"
                        classes={{
                        paper: classes.drawerPaper,
                        }}
                    >
                        <Toolbar />
                        <div className={classes.drawerContainer}>
                            <List>
                                
                                <ListItem button classes={{root: classes.listItem}}>
                                    <ListItemIcon><HomeIcon /></ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.listItemText
                                    }} primary={'Início'} />
                                </ListItem>

                                <ListItem button classes={{root: classes.listItem}}>
                                    <ListItemIcon><SubscriptionsIcon /></ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.listItemText
                                    }} primary={'Em Alta'} />
                                </ListItem>

                                <ListItem button classes={{root: classes.listItem}}>
                                    <ListItemIcon><WhatshotIcon /></ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.listItemText
                                    }} primary={'Inscrições'} />
                                </ListItem>
                                
                            </List>

                            <Divider />

                            <List>
                                
                                <ListItem button classes={{root: classes.listItem}}>
                                    <ListItemIcon><VideoLibraryIcon /></ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.listItemText
                                    }} primary={'Biblioteca'} />
                                </ListItem>

                                <ListItem button classes={{root: classes.listItem}}>
                                    <ListItemIcon><HistoryIcon /></ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.listItemText
                                    }} primary={'Histórico'} />
                                </ListItem>
                                
                            </List>

                            <Divider />

                            <Box p={4}>
                                <Typography variant="body2">
                                    Faça login para curtir vídeos, comentar e se inscrever.
                                </Typography>
                                <Box mt={2}>
                                    <Button                                
                                        variant='outlined'
                                        color='secondary'
                                        startIcon={<AccountCircleIcon />}
                                    >
                                        Fazer login
                                    </Button>
                                </Box>
                            </Box>

                            <Divider />

                            <List
                                component='nav'
                                aria-labelledby='nested-list-subheader'
                                subheader={
                                    <ListSubheader
                                        component='div'
                                        id='nested-list-subheader'
                                        className={classes.subheader}
                                    >
                                        O melhor do youtube
                                    </ListSubheader>
                                }
                            >

                                <ListItem button classes={{root: classes.listItem}}>
                                    <ListItemIcon><AddCircle /></ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.listItemText
                                    }} primary={'Música'} />
                                </ListItem>

                                <ListItem button classes={{root: classes.listItem}}>
                                    <ListItemIcon><AddCircle /></ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.listItemText
                                    }} primary={'Esportes'} />
                                </ListItem>                        

                                <ListItem button classes={{root: classes.listItem}}>
                                    <ListItemIcon><AddCircle /></ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.listItemText
                                    }} primary={'Jogos'} />
                                </ListItem>

                                <ListItem button classes={{root: classes.listItem}}>
                                    <ListItemIcon><AddCircle /></ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.listItemText
                                    }} primary={'Filmes'} />
                                </ListItem>

                                <ListItem button classes={{root: classes.listItem}}>
                                    <ListItemIcon><AddCircle /></ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.listItemText
                                    }} primary={'Notícias'} />
                                </ListItem>

                                <ListItem button classes={{root: classes.listItem}}>
                                    <ListItemIcon><AddCircle /></ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.listItemText
                                    }} primary={'Ao vivo'} />
                                </ListItem>

                                <ListItem button classes={{root: classes.listItem}}>
                                    <ListItemIcon><AddCircle /></ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.listItemText
                                    }} primary={'Destaques'} />
                                </ListItem>

                                <ListItem button classes={{root: classes.listItem}}>
                                    <ListItemIcon><AddCircle /></ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.listItemText
                                    }} primary={'Vídeos 360'} />
                                </ListItem>

                                <ListItem button classes={{root: classes.listItem}}>
                                    <ListItemIcon><AddCircle /></ListItemIcon>
                                    <ListItemText classes={{
                                        primary: classes.listItemText
                                    }} primary={'Procurar mais'} />
                                </ListItem>
                                
                            </List>
                            


                        </div>
                    </Drawer>
                </Hidden>

                
                <Box p={4}>
                    <Toolbar />
                    <Typography
                        variant='h5'
                        color='textPrimary'
                        style={{ fontWeight: 600 }}
                    >
                        Recomendados
                    </Typography>
                    
                    <Grid container spacing={3}>
                        {
                            videos.map((item, index) => (
                                <Grid item lg={3} md={4} sm={6} xs={12} >
                                    <Box>
                                        <img
                                            style={{ width: '100%' }}
                                            alt={item.title}
                                            src={item.thumb}
                                        />
                                        <Box>
                                            <Typography
                                                style={{ fontWeight: 600 }}
                                                gutterBottom
                                                variant='body1'
                                                color='textPrimary'
                                                
                                            >
                                                {item.title}
                                            </Typography>

                                            <Typography
                                                display='block'
                                                variant='body2'
                                                color='textSecondary'
                                                
                                            >
                                                {item.channel}
                                            </Typography>

                                            <Typography variant='body2' color='textSecondary'>
                                                {`${item.views} - ${item.date}`}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))
                        }
                        <Grid item lg={4}>

                        </Grid>
                        <Grid item lg={4}>

                        </Grid>
                        <Grid item lg={4}>

                        </Grid>
                    </Grid>
                    
                </Box>

            </Box>
        </div>
    );
}

export default Home;