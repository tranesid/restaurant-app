# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require 'faker'

3.times do
 x = Menu.create(name:Faker::Food.ethnic_category)
 Item.create(menu_id: x.id, price:('%.2f' % rand(5.00..30.00)).to_f , description:Faker::Food.description))

end 



