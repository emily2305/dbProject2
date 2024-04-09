// find the names of the cafes that are artisanal cafes
const query1 = [
    {
      '$match': {
        'cafe_type': 'artisanal cafe'
      }
    }, {
      '$project': {
        '_id': 0, 
        'cafe_name': 1
      }
    }
  ]