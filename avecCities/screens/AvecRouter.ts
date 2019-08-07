import { createBottomTabNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation'
import MainPage from './MainPage/main'
import AddCity from './AddCity/addCity'

const Tabs = createBottomTabNavigator({
    MainPage,
    AddCity
})

// const Wrapper = createDrawerNavigator({
// })

const Avec = createAppContainer(Tabs)

export default Avec