require 'faker'

User.delete_all

# Seed predefined data
User.create(name: "Aman Kumar", continent: "Asia", country: "India", state: "Madhya Pradesh", city: "Indore")
User.create(name: "Jane Smith", continent: "Europe", country: "Germany", state: "Bavaria", city: "Munich")
User.create(name: "Bob Johnson", continent: "North America", country: "USA", state: "California", city: "Los Angeles")
User.create(name: "Alice Williams", continent: "Australia", country: "Australia", state: "New South Wales", city: "Sydney")

continents = ["Asia", "Europe", "North America", "South America", "Africa", "Australia", "Antarctica"]
50.times do
  continent = continents.sample
  country = Faker::Address.country
  state = Faker::Address.state
  city = Faker::Address.city
  name = Faker::Name.name

  User.create(name: name, continent: continent, country: country, state: state, city: city)
end

puts "Seeding completed! Total Users: #{User.count}"