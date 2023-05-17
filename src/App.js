import { connect } from 'react-redux'
import Counter from './components/Counter';
import CounterActions from './components/CounterActions';
import Footer from './components/Footer';
import Header from './components/Header';
import { routes } from './routes';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

const mapStateToProps = state => ({
  dark: state.site.dark,
  user: state.auth.user
})

function App({dark, user}) {

  // const { dark } = useSelector(state => state.site)
  // const { user } = useSelector(state => state.auth)

  return (
    <Router>
    <div className="container">
      <div className={dark ? 'dark' : 'light'}>
      <div className="row ps-3 pt-5 pe-3 pb-5">
        <div className="col-lg-10">
            <Header/>
            <Counter/>
            <CounterActions/>
            <Routes>
              {routes.map(route => (
                <Route exact={route.exact} path={route.path} element={<route.component/>} render={() => {
                  if (route.auth && !user) {
                    return <Navigate to="/login" />
                  }
                    return <route.component/>
                }}/>
              ))}
            </Routes>
            <Footer/>
        </div>
      </div>
    </div>
    </div>
    </Router>
  );
}

export default connect(mapStateToProps)(App);
