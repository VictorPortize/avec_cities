import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import MainPage from './main_page/main'

const routes = createBottomTabNavigator({
    MainPage,
})

const Avec = createAppContainer(routes)

export default Avec