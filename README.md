# README

### RAILS ###
# APP CREATION
$ rails new app-name -d postgresql --api
$ cd app-name
$ bundle
$ git add .
$ git commit -m 'init'
$ git push 
$ rails db:create
$ rails s -p 3001

# MODEL CREATION

$ rails g model model_name attr1:type attr2:type
$ rails db:migrate
// if you need to delete.. //
(rails d model model_name)

# BELONGS TO MODEL

$ rails g model model_name attr1:type attr2:type model:belongs_to
# SEED DATABASE

$ rails db:seed
# CREATE CONTROLLERS

$ rails g controller api/plural_model_name

# ADD ROUTES
Rails.application.routes.draw do
  namespace :api do
    resources :menus do
      resources :items
    end
end

# FILL OUT CONTROLLERS
(i referenced todays project to fill this out)

before action :set_item, only: [:show, :update, :destroy]

def 

end
# TEST WITH POSTMAN

### SETTING UP RAILS AND REACT ###

1. In rails directory in iTerm use create react app

$ yarn create react-app client 
$ cd
$ yarn start

2. add proxy in client/package.json, for this to work we will always have rails run on port 3001 ie `rails s -p 3001`

"proxy": "http://localhost:3001",

3. start rails server (do this in your rails project directory)

rails s -p 3001

# REACT ...

 - Routes/Component/Nav (React Router UI/UX)

 - ThingForm (new/edit)

 - Things = list all things

 - Thing - render a single thing

 - ThingShow - render a single fact on it own page (React Router)

 - Thingthatbelongstothing Pages(tomorrow)

 - axios calls (api call to interact with rails)

 - updating our state

 - UI

 - setting up forms

 - connecting our state to UI

 - Error handling

 - UX loaders/nav

 - styling 

