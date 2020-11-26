import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialCommunityIcons } from '@expo/vector-icons';


import Settings from '../pages/Settings';
import Grupos from '../pages/Grupos';
import Chat from '../pages/Chat';

import { UsuarioContext } from '../contexts/user';

const Tab = createBottomTabNavigator();

const AppRoutes = () => {

  const {route} = useContext(UsuarioContext);

  return (
    <Tab.Navigator
      initialRouteName={route === 'chat' ? "Chat" : "Grupos"}
      tabBarOptions={
        {
          activeTintColor: 'tomato',
          inactiveTintColor: '#ccc'
        }
      }
    >
      {route == 'chat' ? 
           <Tab.Screen
           name="Chat"
           component={Chat}
           options={
             {
               tabBarIcon: ({ color }) => (
                 <MaterialCommunityIcons
                   name="chat"
                   color={color}
                   size={32}
                 />
               )
             }
           }
         />
         :
         <Tab.Screen
         name="Grupos"
         component={Grupos}
         options={
           {
             tabBarIcon: ({ color }) => (
               <MaterialCommunityIcons
                 name="chat"
                 color={color}
                 size={32}
               />
             )
           }
         }
       />
      }
     
     
      <Tab.Screen
        name="Configurações"
        component={Settings}
        options={
          {
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="settings"
                size={32}
                color={color}
              />
            )
          }
        }
      />
    </Tab.Navigator>

  )
}

export default AppRoutes;