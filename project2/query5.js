// checks if there are photos for each cafe and if there are none, updates them to have a hasPhotos and sets it false
const query5 = [
    {
      '$match': {
        'photos.photo_id': {
          '$exists': false
        }
      }
    }, {
      '$set': {
        'has_photos': false
      }
    }
  ]