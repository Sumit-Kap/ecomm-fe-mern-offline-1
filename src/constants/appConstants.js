import Home from "../components/pages/Home"
import SignUp from "../components/pages/SignUp";
import Signin from "../components/pages/Signin";
import Something from "../components/Something";
export const appConstants = {
    routes: [{
        name: 'Home',
        path: '/',
        component: <Home/>
    }, {
        name: 'Sign-in',
        path: '/sign-in',
        component: <Signin/>
    }, {
        name: 'Sign-up',
        path: '/sign-up',
        component: <SignUp/>
    }, {
        name: 'Profile',
        path: '/profile',
        component: <Something/>
    }]
}

// appConstants.routes.map(())
//     < Routes >
//     <Route></Route>