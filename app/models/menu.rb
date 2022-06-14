class Menu < ApplicationRecord
  validates :name, presence: true
    has_many :items, dependent: :destroy
end
