import React, { useEffect } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { FloatingAction } from 'react-native-floating-action'
import { useDispatch, useSelector } from 'react-redux'

import Card from '../component/card-component'

import * as houseAction from '../redux/action/house-action.reducer'

const HomeListScreen = props => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(houseAction.fetchHouses())
  }, [dispatch])

  const { houses } = useSelector(state => state.house)

  return (
    <View style={styles.container}>
      <FlatList
        data={houses}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <Card
            navigation={props.navigation}
            title={item.title}
            address={item.address}
            homeType={item.homeType}
            description={item.description}
            price={item.price}
            image={item.image}
            yearBuilt={item.yearBuilt}
            id={item._id}
          />
        )}
      />
      <FloatingAction
        position='right'
        animated={false}
        showBackground={false}
        onPressMain={() => props.navigation.navigate('AddHome')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default HomeListScreen
