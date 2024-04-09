// rank all cafes on their summer menu from most to least cold coffee options
const query4 = [
    {
      $unwind: "$menu"
    },
    {
      $match: {
        "menu.season": "Summer"
      }
    },
    {
      $unwind: "$menu.coffee"
    },
    {
      $group: {
        _id: "$cafe_name",
        summer_menu_coffees: {
          $sum: 1
        }
      }
    },
    {
      $project: {
        _id: 0,
        cafe_name: "$_id",
        summer_menu_coffees: 1
      }
    },
    {
      $sort: {
        summer_menu_coffees: -1
      }
    }
  ]