// returns a list of cafes with more than 2 locations
const query2 =[
    {
      '$unwind': '$location'
    }, {
      '$group': {
        '_id': '$cafe_name', 
        'locations_amount': {
          '$sum': 1
        }
      }
    }, {
      '$match': {
        'locations_amount': {
          '$gt': 2
        }
      }
    }, {
      '$project': {
        '_id': 0, 
        'cafe_name': '$_id', 
        'locations_amount': 1
      }
    }
  ]