class UsersController < ApplicationController
  def index
    users = User.all
    users = users.where(continent: params[:continent]) if params[:continent].present?
    users = users.where(country: params[:country]) if params[:country].present?
    users = users.where(state: params[:state]) if params[:state].present?
    users = users.where(city: params[:city]) if params[:city].present?
    render json: users
  end

  def filters
    continents = User.distinct.pluck(:continent)
    countries = User.distinct.pluck(:country)
    states = User.distinct.pluck(:state)
    cities = User.distinct.pluck(:city)
    render json: { continents:, countries:, states:, cities: }
  end
end
