
import  NavBar  from './NavBar';

export default {
    title: 'UI/Navbar',
    component: NavBar,
    argTypes : {
        backgroundColor: {
            control : {type: 'select'},
            options :[ '#3F46EB', '#68DE47', '#EB7F3F']
        },
        hoverColor : {
            control : {type : 'color'}
        },
        onClick: { action: 'clicked' }
    }
}

export const Default = {
};