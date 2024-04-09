// retrieve all cake prices from every cafe and ranks least to most expensive
const query3 = [
    {
      '$unwind': '$menu'
    }, {
      '$unwind': '$menu.food_item'
    }, {
      '$match': {
        'menu.food_item.food_name': 'Cake'
      }
    }, {
      '$group': {
        '_id': '$cafe_name', 
        'cake_prices': {
          '$max': '$menu.food_item.food_price'
        }
      }
    }, {
      '$project': {
        '_id': 0, 
        'cafe_name': '$_id', 
        'cake_prices': 1
      }
    }, {
      '$unwind': '$cake_prices'
    }, {
      '$sort': {
        'cake_prices': 1
      }
    }
  ]